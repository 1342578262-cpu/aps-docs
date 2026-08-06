import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { formatEntry } from './format-bib.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(root, '..')
const docsDir = path.join(projectRoot, 'docs')
const bibPath = path.join(docsDir, 'mybib.bib')

const subName = fs.readdirSync(docsDir).find((name) =>
  fs.existsSync(path.join(docsDir, name, 'nme-basis-expansion.md'))
)
const noteFiles = subName
  ? [
      `${subName}/nme-basis-expansion.md`,
      `${subName}/nme-gt-1b.md`,
      `${subName}/nme-gt-2b-1.md`,
      `${subName}/nme-gt-2b-2.md`,
      `${subName}/nme-gt-2b-3.md`,
      `${subName}/nme-gt-2b-4.md`,
      'nme-2nbb-nme.md',
      'nme-appendix.md'
    ]
  : []

function parseBib(source) {
  const entries = []
  const entryRe = /@(\w+)\s*\{\s*([^,\s]+)\s*,([\s\S]*?)\n\}/g
  for (const match of source.matchAll(entryRe)) {
    const fields = {}
    const body = match[3]
    let i = 0
    while (i < body.length) {
      const fieldMatch = body.slice(i).match(/^\s*([A-Za-z]+)\s*=\s*\{/)
      if (!fieldMatch) {
        i += 1
        continue
      }
      const start = i + fieldMatch[0].length - 1
      let depth = 0
      let j = start
      for (; j < body.length; j++) {
        if (body[j] === '{') depth += 1
        else if (body[j] === '}') {
          depth -= 1
          if (depth === 0) break
        }
      }
      fields[fieldMatch[1].toLowerCase()] = body.slice(start + 1, j)
      i = j + 1
    }
    entries.push({ key: match[2], type: match[1], fields })
  }
  return entries
}

function cleanLatex(s) {
  return s
    .replace(/\\ensuremath\{([^}]*)\}/g, '$1')
    .replace(/\\(?:mathbf|boldsymbol|mathrm|mathcal|mathbb)\{([^}]*)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

let bibCache = { signature: '', byKey: null }
function getBibByKey() {
  const signature = String(fs.statSync(bibPath).mtimeMs)
  if (bibCache.signature !== signature || !bibCache.byKey) {
    bibCache = {
      signature,
      byKey: Object.fromEntries(
      parseBib(fs.readFileSync(bibPath, 'utf8')).map((entry) => [entry.key, entry])
      )
    }
  }
  return bibCache.byKey
}

function extractCitationOrder(src) {
  const order = []
  for (const match of src.matchAll(/\\cite\{([^}]*)\}/g)) {
    for (const key of match[1].split(',').map((s) => s.trim())) {
      if (key && !order.includes(key)) order.push(key)
    }
  }
  return order
}

let cachedSignature = ''
let cachedOrder = []

function getGlobalCitationOrder() {
  const signature = noteFiles
    .map((file) => `${file}:${fs.statSync(path.join(docsDir, file)).mtimeMs}`)
    .join('|') + `|bib:${fs.statSync(bibPath).mtimeMs}`
  if (cachedSignature === signature) return cachedOrder

  const order = []
  for (const file of noteFiles) {
    const src = fs.readFileSync(path.join(docsDir, file), 'utf8')
    for (const key of extractCitationOrder(src)) {
      if (!order.includes(key)) order.push(key)
    }
  }
  cachedSignature = signature
  cachedOrder = order
  return order
}

function referenceMarkdown(order) {
  const bib = getBibByKey()
  return order
    .map((key, index) => {
      const num = index + 1
      const entry = bib[key]
      if (!entry) return `${num}. ${key}.`
      return `${num}. <span id="ref-${num}"></span>${formatEntry(entry)}`
    })
    .join('\n')
}

function stripReferenceSection(src) {
  const lines = src.split(/\r?\n/)
  const start = lines.findIndex((line) => /^##\s*参考文献\s*$/.test(line))
  if (start === -1) return src
  let end = start + 1
  while (end < lines.length && !/^##\s+/.test(lines[end])) end += 1
  lines.splice(start, end - start)
  return lines.join('\n')
}

export default function citationPlugin(md, options = {}) {
  md.core.ruler.before('normalize', 'aps-citations', (state) => {
    const order = getGlobalCitationOrder()
    if (order.length === 0) return

    const pageKey = String(state.env?.relativePath || state.env?.refs?.pageKey || '')
    const isReferencesPage = pageKey.replace(/\\/g, '/').endsWith('references.md')
    const mode = state.env?.refs?.mode || 'page'
    const base = (options.base || '').replace(/\/+$/, '')
    const hrefFor = (num) =>
      mode === 'hash' ? `#ref-${num}` : `/references.html#ref-${num}`
    const mathHrefFor = (num) =>
      mode === 'hash' ? `#ref-${num}` : `${base}/references.html#ref-${num}`

    const numByKey = new Map(order.map((key, index) => [key, index + 1]))
    const replaceInMath = (text) => text.replace(/\\cite\{([^}]*)\}/g, (all, keys) => {
      const nums = keys
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((key) => numByKey.get(key))
        .filter((num) => num !== undefined)
      if (nums.length === 0) return all
      return `\\href{${mathHrefFor(nums[0])}}{[${nums.join(',')}]}`
    })
    const replaceInText = (text) => text.replace(/\\cite\{([^}]*)\}/g, (all, keys) => {
      const nums = keys
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((key) => numByKey.get(key))
        .filter((num) => num !== undefined)
      if (nums.length === 0) return all
      return `[${nums.join(',')}](${hrefFor(nums[0])})`
    })

    const parts = state.src.split(/\$\$([\s\S]*?)\$\$/g)
    let out = ''
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (i % 2 === 1) {
        out += `$$${replaceInMath(part)}$$`
        continue
      }
      const chunks = part.split('$')
      out += chunks
        .map((seg, idx) => (idx % 2 === 1 ? replaceInMath(seg) : replaceInText(seg)))
        .join('$')
    }
    state.src = out

    if (isReferencesPage) {
      state.src += `\n\n# 参考文献\n\n${referenceMarkdown(order)}\n`
    } else {
      state.src = stripReferenceSection(state.src)
    }
  })
}
