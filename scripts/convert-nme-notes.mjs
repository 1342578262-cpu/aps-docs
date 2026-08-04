import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import katex from 'katex'
import katexMacros from './katex-macros.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(root, '..')
const notesDir = path.join(projectRoot, '跃迁矩阵元QRPA+QPVC(3)')
const texFile = path.join(notesDir, 'example.tex')
const bibFile = path.join(notesDir, 'mybib.bib')
const outFile = path.join(projectRoot, 'docs', 'nme-qrpa-qpvc.md')

const tex = fs.readFileSync(texFile, 'utf8')
const bib = fs.readFileSync(bibFile, 'utf8')
const lines = tex.split(/\r?\n/)

const bodyStart = lines.findIndex((line) => line.trim() === '\\begin{document}')
const bodyEnd = lines.findIndex((line, i) => i > bodyStart && line.trim() === '\\end{document}')
const bodyLines = lines.slice(bodyStart + 1, bodyEnd === -1 ? undefined : bodyEnd)

const citationOrder = []
const citationMap = {}
for (const line of bodyLines) {
  for (const match of line.matchAll(/\\cite\{([^}]*)\}/g)) {
    for (const key of match[1].split(',').map((s) => s.trim())) {
      if (key && !(key in citationMap)) {
        citationMap[key] = citationOrder.length + 1
        citationOrder.push(key)
      }
    }
  }
}

const refMap = {}
let eqNum = 0
let appendix = ''
const mathBeginRe = /^\\begin\{(align\*?|gather\*?|eqnarray\*?|equation\*?)\}\s*$/
const mathEndRe = /^\\end\{(align\*?|gather\*?|eqnarray\*?|equation\*?)\}\s*$/

for (let i = 0; i < bodyLines.length; i++) {
  const line = bodyLines[i]
  if (/^\\chapter\{Appendix A\}/.test(line)) {
    appendix = 'A'
    eqNum = 0
    continue
  }
  if (/^\\chapter\{Appendix B\}/.test(line)) {
    appendix = 'B'
    eqNum = 0
    continue
  }
  const beginMatch = line.match(mathBeginRe)
  if (!beginMatch) continue
  let j = i + 1
  const inner = []
  while (j < bodyLines.length && !mathEndRe.test(bodyLines[j])) {
    inner.push(bodyLines[j])
    j++
  }
  for (const mathLine of inner) {
    for (const labelMatch of mathLine.matchAll(/\\label\{([^}]*)\}/g)) {
      eqNum += 1
      refMap[labelMatch[1]] = appendix ? `${appendix}-${eqNum}` : String(eqNum)
    }
  }
  i = j
}

function replaceRefs(text) {
  return text.replace(/\\ref\{([^}]*)\}/g, (_, key) => refMap[key] || key)
}

function replaceCites(text) {
  return text.replace(/\\cite\{([^}]*)\}/g, (_, keys) => {
    const nums = keys
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((key) => citationMap[key] || 0)
    return nums.length ? `[${nums.join(',')}]` : '[]'
  })
}

function removeLabels(text) {
  return text.replace(/\\label\{[^}]*\}/g, '')
}

function findMatching(text, start, open, close) {
  let depth = 0
  for (let i = start; i < text.length; i++) {
    if (text[i] === open) depth += 1
    else if (text[i] === close) {
      depth -= 1
      if (depth === 0) return i
    }
  }
  return -1
}

function rewriteEqualWithOver(text) {
  let out = ''
  let i = 0
  while (i < text.length) {
    const match = /^(?:\\zdydh|\\xlongequal)/.exec(text.slice(i))
    if (!match) {
      out += text[i]
      i += 1
      continue
    }
    let j = i + match[0].length
    let opt = null
    while (j < text.length && /\s/.test(text[j])) j += 1
    if (text[j] === '[') {
      const end = findMatching(text, j, '[', ']')
      opt = text.slice(j + 1, end)
      j = end + 1
      while (j < text.length && /\s/.test(text[j])) j += 1
    }
    if (text[j] !== '{') {
      out += text[i]
      i += 1
      continue
    }
    const end = findMatching(text, j, '{', '}')
    const arg = text.slice(j + 1, end)
    out += opt !== null ? `\\underset{${opt}}{\\overset{${arg}}{=}}` : `\\overset{${arg}}{=}`
    i = end + 1
  }
  return out
}

function cleanMathLine(line) {
  let text = replaceRefs(line)
  text = replaceCites(text)
  text = removeLabels(text)
  text = rewriteEqualWithOver(text)
  text = text.replace(/\\notag|\\nonumber/g, '')
  text = text.replace(/\\tag\{[^}]*\}/g, '')
  return text.trim()
}

function cleanProseOutsideMath(text) {
  return text
    .split('$')
    .map((part, index) => {
      if (index % 2 === 1) return part
      return part
        .replace(/\\[,;:!]+\s*/g, ' ')
        .replace(/\\\s+/g, ' ')
        .replace(/\\/g, '')
    })
    .join('$')
}

function addSpaceBeforeMath(text) {
  let out = ''
  let inMath = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === '$') {
      if (!inMath && i > 0 && /[A-Za-z0-9_]/.test(text[i - 1])) {
        out += ' '
      }
      inMath = !inMath
    }
    out += ch
  }
  return out
}

function convertMathBlock(env, innerLines) {
  let content = innerLines
    .map((line) => cleanMathLine(line))
    .filter(Boolean)
    .join('\n')
  if (env === 'eqnarray' || env === 'eqnarray*') {
    content = content.replace(/&=&/g, '&=')
  }
  if (env === 'align' || env === 'align*' || env === 'eqnarray' || env === 'eqnarray*') {
    return `$$\n\\begin{aligned}\n${content}\n\\end{aligned}\n$$`
  }
  if (env === 'gather' || env === 'gather*') {
    return `$$\n\\begin{gathered}\n${content}\n\\end{gathered}\n$$`
  }
  return `$$\n${content}\n$$`
}

function cleanLatex(s) {
  return s
    .replace(/\\ensuremath\{([^}]*)\}/g, '$1')
    .replace(/\\(?:mathbf|boldsymbol|mathrm|mathcal|mathbb)\{([^}]*)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

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
      fields[fieldMatch[1]] = body.slice(start + 1, j)
      i = j + 1
    }
    entries.push({ key: match[2], type: match[1], fields })
  }
  return entries
}

function formatEntry(entry) {
  const f = entry.fields
  const authors = (f.author || '').replace(/\s+and\s+/gi, ', ')
  const title = cleanLatex(f.title || '')
  const journal = cleanLatex(f.journal || f.publisher || '')
  const year = cleanLatex(f.year || '')
  const volume = cleanLatex(f.volume || '')
  const number = cleanLatex(f.number || '')
  const pages = cleanLatex(f.pages || '')
  let ref = `${authors}, *${title}*`
  if (journal) ref += `, ${journal}`
  if (volume) ref += ` ${volume}`
  if (number) ref += ` (${number})`
  if (pages) ref += `, ${pages}`
  if (year) ref += ` (${year})`
  if (f.doi) {
    const doi = cleanLatex(f.doi).replace(/^https?:\/\/doi\.org\//, '')
    ref += `. DOI: [${doi}](https://doi.org/${doi})`
  } else if (f.url) {
    ref += `. [链接](${cleanLatex(f.url)})`
  }
  return ref + '.'
}

const bibEntries = parseBib(bib)
const bibByKey = Object.fromEntries(bibEntries.map((entry) => [entry.key, entry]))

const chapterTitles = [
  '1. Basis Expansion（基展开）',
  '2. GT 算符约化矩阵元的推导（Derivation of Reduced Matrix Element of Gamow-Teller Operator）',
  '3. 2νββ 核矩阵元（Nuclear Matrix Element）',
  '附录 A：基础公式（Appendix A）',
  '附录 B：推导公式（Appendix B）'
]

let chapterIndex = -1
const output = []
output.push('# 跃迁矩阵元：QRPA + QPVC')
output.push('')
output.push('> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。')
output.push('')

const chapterRe = /^\\chapter\{([\s\S]*)\}\s*$/
const sectionRe = /^\\section\{([\s\S]*)\}\s*$/

for (let i = 0; i < bodyLines.length; i++) {
  const line = bodyLines[i]
  const trimmed = line.trim()
  if (/^(\\backmatter|\\appendix|\\setcounter|\\renewcommand|\\bibliographystyle|\\bibliography)/.test(trimmed)) {
    continue
  }
  const chapterMatch = line.match(chapterRe)
  if (chapterMatch) {
    chapterIndex += 1
    output.push('')
    output.push(`## ${chapterTitles[chapterIndex] || cleanLatex(chapterMatch[1])}`)
    output.push('')
    continue
  }
  const sectionMatch = line.match(sectionRe)
  if (sectionMatch) {
    output.push('')
    output.push(`### ${sectionMatch[1]}`)
    output.push('')
    continue
  }
  const beginMatch = line.match(mathBeginRe)
  if (beginMatch) {
    const env = beginMatch[1]
    let j = i + 1
    const inner = []
    while (j < bodyLines.length && !mathEndRe.test(bodyLines[j])) {
      inner.push(bodyLines[j])
      j += 1
    }
    output.push('')
    output.push(convertMathBlock(env, inner))
    output.push('')
    i = j
    continue
  }
  if (!trimmed || trimmed.startsWith('%') || /^\\?\\\s*$/.test(trimmed) || /^\\?[,]\\\s*$/.test(trimmed)) {
    continue
  }
  let prose = replaceRefs(trimmed)
  prose = replaceCites(prose)
  prose = removeLabels(prose)
  prose = rewriteEqualWithOver(prose)
  prose = prose.replace(/\\indent/g, '')
  prose = prose.replace(/\{\\color\{red\}\s*([^{}]*)\}/g, '**$1**')
  prose = prose.replace(/\\textcolor\{red\}\{([^}]*)\}/g, '**$1**')
  prose = prose.replace(/\\textbf\{([^}]*)\}/g, '**$1**')
  prose = prose.replace(/\\textit\{([^}]*)\}/g, '*$1*')
  prose = prose.replace(/\\circled\{([^}]*)\}/g, '($1)')
  prose = cleanProseOutsideMath(prose)
  prose = prose.replace(/\$\$/g, '$ $')
  prose = addSpaceBeforeMath(prose)
  prose = prose.replace(/\s+/g, ' ').trim()
  if (prose) {
    output.push(prose)
    output.push('')
  }
}

output.push('## 参考文献')
output.push('')
for (const key of citationOrder) {
  const entry = bibByKey[key]
  if (!entry) {
    output.push(`${citationMap[key]}. ${key}`)
    continue
  }
  output.push(`${citationMap[key]}. ${formatEntry(entry)}`)
}
output.push('')

const markdown = output.join('\n')
fs.writeFileSync(outFile, markdown, 'utf8')
console.log('written:', outFile, markdown.length, 'bytes')

let errorCount = 0
const displayRe = /\$\$([\s\S]*?)\$\$/g
let match
let displayIndex = 0
while ((match = displayRe.exec(markdown)) !== null) {
  displayIndex += 1
  try {
    katex.renderToString(match[1], { displayMode: true, throwOnError: true, macros: katexMacros })
  } catch (error) {
    errorCount += 1
    console.log(`display#${displayIndex}: ${error.message}`)
  }
}
const inlineRe = /(?<![\\$])\$([^$\n]+)\$/g
let inlineIndex = 0
while ((match = inlineRe.exec(markdown)) !== null) {
  inlineIndex += 1
  try {
    katex.renderToString(match[1], { displayMode: false, throwOnError: true, macros: katexMacros })
  } catch (error) {
    errorCount += 1
    console.log(`inline#${inlineIndex}: ${error.message}`)
  }
}
console.log('katex errors:', errorCount)
process.exitCode = errorCount > 0 ? 1 : 0
