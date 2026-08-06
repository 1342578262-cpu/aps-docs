import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(root, '..')
const docs = path.join(projectRoot, 'docs')
const subName = fs.readdirSync(docs).find((n) => fs.existsSync(path.join(docs, n, 'nme-basis-expansion.md')))
const sub = path.join(docs, subName)

const mdFiles = [
  ['nme-basis-expansion.md', sub],
  ['nme-gt-1b.md', sub],
  ['nme-gt-2b-1.md', sub],
  ['nme-gt-2b-2.md', sub],
  ['nme-gt-2b-3.md', sub],
  ['nme-gt-2b-4.md', sub],
  ['nme-2nbb-nme.md', docs],
  ['nme-appendix.md', docs]
]
const relKeys = mdFiles.map(([name, dir]) => (dir === docs ? name : `${subName}/${name}`))

function splitMathRows(innerLines) {
  const text = innerLines.join('\n')
  const rows = []
  let current = ''
  const stack = []
  let i = 0
  while (i < text.length) {
    const b = text.slice(i).match(/^\\begin\{([^}]*)\}/)
    if (b) {
      stack.push(b[1])
      current += b[0]
      i += b[0].length
      continue
    }
    const e = text.slice(i).match(/^\\end\{([^}]*)\}/)
    if (e) {
      stack.pop()
      current += e[0]
      i += e[0].length
      continue
    }
    if (text.startsWith('\\\\', i) && stack.length === 0) {
      rows.push(current.trim())
      current = ''
      i += 2
      continue
    }
    current += text[i]
    i += 1
  }
  if (current.trim()) rows.push(current.trim())
  return rows
}

function mdRowsOf(inner) {
  const body = inner.trim()
  const ls = body.split(/\r?\n/)
  const envMatch = body.match(/^\\begin\{(align\*?|gather\*?|eqnarray\*?|equation\*?)\}/)
  if (envMatch) {
    const env = envMatch[1]
    const endRe = new RegExp('^\\\\end\\{' + env + '\\}\\s*$')
    const start = ls.findIndex((l) => l.includes('\\begin{' + env + '}'))
    const end = ls.findIndex((l) => endRe.test(l))
    return { env, rows: splitMathRows(ls.slice(start + 1, end === -1 ? undefined : end)) }
  }
  return { env: '', rows: splitMathRows(ls) }
}

function countNumbered(src) {
  let count = 0
  for (const m of src.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
    const parsed = mdRowsOf(m[1])
    if (!parsed.env || parsed.env.endsWith('*')) continue
    for (const row of parsed.rows) {
      if (/\\notag|\\nonumber|\\tag\{/.test(row)) continue
      count += 1
    }
  }
  return count
}

function pagePathFor(name) {
  if (name === 'nme-2nbb-nme.md' || name === 'nme-appendix.md') {
    return `/${name.replace(/\.md$/, '')}`
  }
  return `/${subName}/${name.replace(/\.md$/, '')}`
}

function pagePrefixFor(name) {
  if (name === 'nme-basis-expansion.md') return '1'
  if (name.startsWith('nme-gt-')) return '2'
  if (name === 'nme-2nbb-nme.md') return '3'
  if (name === 'nme-appendix.md') return 'A'
  return ''
}

let cachedSignature = ''
let cachedMap = null

export function computeMathMap() {
  const signature = mdFiles
    .map(([name, dir]) => `${name}:${fs.statSync(path.join(dir, name)).mtimeMs}`)
    .join('|')
  if (cachedSignature === signature && cachedMap) return cachedMap

  const pageStarts = {}
  const prefixes = {}
  const refs = {}
  let gtCount = 0
  let inGt = false
  for (let i = 0; i < mdFiles.length; i++) {
    const [name, dir] = mdFiles[i]
    const src = fs.readFileSync(path.join(dir, name), 'utf8')
    const count = countNumbered(src)
    if (name === 'nme-gt-1b.md') {
      inGt = true
      gtCount = 0
      pageStarts[relKeys[i]] = 1
    } else if (name.startsWith('nme-gt-2b-')) {
      pageStarts[relKeys[i]] = gtCount + 1
    } else {
      inGt = false
      pageStarts[relKeys[i]] = 1
    }
    if (inGt) gtCount += count
    prefixes[relKeys[i]] = pagePrefixFor(name)
  }

  for (let i = 0; i < mdFiles.length; i++) {
    const [name, dir] = mdFiles[i]
    const src = fs.readFileSync(path.join(dir, name), 'utf8')
    let counter = pageStarts[relKeys[i]] - 1
    let prefix = pagePrefixFor(name)
    const parts = src.split(/\$\$([\s\S]*?)\$\$/g)
    for (let j = 0; j < parts.length; j++) {
      if (j % 2 === 0) {
        if (parts[j].includes('<!-- eqreset -->')) {
          prefix = 'B'
          counter = 0
        }
        continue
      }
      const parsed = mdRowsOf(parts[j])
      if (!parsed.env || parsed.env.endsWith('*')) continue
      for (const row of parsed.rows) {
        if (/\\notag|\\nonumber|\\tag\{/.test(row)) continue
        counter += 1
        for (const labelMatch of row.matchAll(/\\label\{([^}]*)\}/g)) {
          refs[labelMatch[1]] = {
            num: counter,
            page: pagePathFor(name),
            display: prefix ? `${prefix}.${counter}` : String(counter)
          }
        }
      }
    }
  }
  cachedSignature = signature
  cachedMap = { pageStarts, prefixes, refs }
  return cachedMap
}
