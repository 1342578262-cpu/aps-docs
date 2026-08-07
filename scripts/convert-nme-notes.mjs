import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import katex from 'katex'
import katexMacros from './katex-macros.mjs'
import { formatEntry } from './format-bib.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(root, '..')
const notesDir = path.join(projectRoot, '跃迁矩阵元QRPA+QPVC(3)')
const texFile = path.join(notesDir, 'example.tex')
const bibFile = path.join(notesDir, 'mybib.bib')
const outFile = path.join(projectRoot, 'docs', 'nme-qrpa-qpvc.md')

const tex = fs.readFileSync(texFile, 'utf8')
const bib = fs.readFileSync(bibFile, 'utf8')
const lines = tex.split(/\r?\n/)

// Keep a copy of the bibliography next to the generated Markdown pages.
fs.writeFileSync(path.join(projectRoot, 'docs', 'mybib.bib'), bib, 'utf8')

const researchNoteFiles = new Set([
  'nme-basis-expansion.md',
  'nme-gt-1b.md',
  'nme-gt-2b-1.md',
  'nme-gt-2b-2.md',
  'nme-gt-2b-3.md',
  'nme-gt-2b-4.md'
])

const bodyStart = lines.findIndex((line) => line.trim() === '\\begin{document}')
const bodyEnd = lines.findIndex((line, i) => i > bodyStart && line.trim() === '\\end{document}')
const bodyLines = lines.slice(bodyStart + 1, bodyEnd === -1 ? undefined : bodyEnd)

const citationOrder = []
const citationMap = {}
let activeCitationMap = citationMap
let activeCitationOrder = citationOrder
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
let currentPrefix = ''
let emitEqNum = 0
let emitPrefix = ''
let appendixChapterCount = 0
const chapterPrefixes = ['1', '2', '3', 'A', 'B']
let chapterIndex = -1
const mathBeginRe = /^\\begin\{(align\*?|gather\*?|eqnarray\*?|equation\*?)\}\s*$/
const mathEndRe = /^\\end\{(align\*?|gather\*?|eqnarray\*?|equation\*?)\}\s*$/

function splitMathRows(innerLines) {
  const text = innerLines.join('\n')
  const rows = []
  let current = ''
  let envStack = []
  let i = 0
  while (i < text.length) {
    const begin = text.slice(i).match(/^\\begin\{([^}]*)\}/)
    if (begin) {
      envStack.push(begin[1])
      current += begin[0]
      i += begin[0].length
      continue
    }
    const end = text.slice(i).match(/^\\end\{([^}]*)\}/)
    if (end) {
      envStack.pop()
      current += end[0]
      i += end[0].length
      continue
    }
    if (text.startsWith('\\\\', i) && envStack.length === 0) {
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

for (let i = 0; i < bodyLines.length; i++) {
  const line = bodyLines[i]
  if (/^\\chapter\{/.test(line)) {
    chapterIndex += 1
    eqNum = 0
    currentPrefix = chapterPrefixes[chapterIndex] || String(chapterIndex + 1)
    continue
  }
  const beginMatch = line.match(mathBeginRe)
  if (!beginMatch) continue
  const env = beginMatch[1]
  let j = i + 1
  const inner = []
  while (j < bodyLines.length && !mathEndRe.test(bodyLines[j])) {
    inner.push(bodyLines[j])
    j++
  }
  if (!env.endsWith('*')) {
    for (const row of splitMathRows(inner)) {
      if (/\\notag|\\nonumber/.test(row)) continue
      eqNum += 1
      const num = String(eqNum)
      for (const labelMatch of row.matchAll(/\\label\{([^}]*)\}/g)) {
        refMap[labelMatch[1]] = num
      }
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
      .map((key) => activeCitationMap[key] || 0)
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
  let text = line
  text = rewriteEqualWithOver(text)
  text = text.replace(/\\iiii|\\iii|\\ii|\\il|\\oo|\\ol/g, '')
  text = text.replace(/\\tag\{[^}]*\}/g, '')
  return text.trim()
}

function cleanProseOutsideMath(text) {
  return text
    .split('$')
    .map((part, index) => {
      if (index % 2 === 1) return part
      return part
        .replace(/\\cite(\{[^}]*\})/g, '\u0000cite$1')
        .replace(/\\ref(\{[^}]*\})/g, '\u0000ref$1')
        .replace(/\\label(\{[^}]*\})/g, '\u0000label$1')
        .replace(/\\[,;:!]+\s*/g, ' ')
        .replace(/\\\s+/g, ' ')
        .replace(/\\/g, '')
        .replace(/\u0000cite(\{[^}]*\})/g, '\\cite$1')
        .replace(/\u0000ref(\{[^}]*\})/g, '\\ref$1')
        .replace(/\u0000label(\{[^}]*\})/g, '\\label$1')
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

function addTagToRow(line, num) {
  const trimmed = line.trimEnd()
  if (trimmed.endsWith('\\\\')) {
    return `${trimmed.slice(0, -2)} \\tag{${num}} \\\\`
  }
  return `${trimmed} \\tag{${num}}`
}

function parseBracedGroup(text) {
  if (text[0] !== '{') return null
  let depth = 0
  let i = 0
  for (; i < text.length; i++) {
    if (text[i] === '{') depth += 1
    else if (text[i] === '}') {
      depth -= 1
      if (depth === 0) break
    }
  }
  if (depth !== 0) return null
  return { inner: text.slice(1, i), consumed: i + 1 }
}

function expandCustomMacros(src) {
  const names = Object.keys(katexMacros).sort((a, b) => b.length - a.length)
  let text = src
  for (let pass = 0; pass < 10; pass++) {
    let changed = false
    let out = ''
    let i = 0
    let expansionEndsWithControlWord = false
    const appendChunk = (chunk, fromExpansion) => {
      if (chunk && /[A-Za-z]/.test(chunk[0]) && expansionEndsWithControlWord) out += ' '
      out += chunk
      expansionEndsWithControlWord = fromExpansion && /\\[A-Za-z]+$/.test(chunk)
    }
    while (i < text.length) {
      if (text[i] !== '\\') {
        appendChunk(text[i], false)
        i += 1
        continue
      }
      let matched = false
      for (const name of names) {
        if (!text.startsWith(name, i)) continue
        const next = text[i + name.length] || ''
        if (/[A-Za-z]/.test(next)) continue
        const body = katexMacros[name]
        if (body.includes('#1')) {
          const group = parseBracedGroup(text.slice(i + name.length))
          if (!group) break
          appendChunk(body.replace(/#1/g, group.inner), true)
          i += name.length + group.consumed
          matched = true
          changed = true
          break
        }
        appendChunk(body, true)
        i += name.length
        matched = true
        changed = true
        break
      }
      if (!matched) {
        appendChunk(text[i], false)
        i += 1
      }
    }
    text = out
    if (!changed) break
  }
  return text
}

function expandMathMacrosInMarkdown(md) {
  return md.replace(/\$\$([\s\S]*?)\$\$|(?<![\\$])\$([^$\n]+)\$/g, (whole, display, inline) => {
    const source = display !== undefined ? display : inline
    const expanded = expandCustomMacros(source)
    return display !== undefined ? `$$${expanded}$$` : `$${expanded}$`
  })
}

function convertMathBlock(env, innerLines) {
  const isStarred = env.endsWith('*')
  const rows = splitMathRows(innerLines)
    .map((row) => cleanMathLine(row))
    .filter(Boolean)
  let content = rows.join(' \\\\\n')
  const baseEnv = env.replace(/\*$/, '')
  if (baseEnv === 'eqnarray') {
    content = content.replace(/&=&/g, '&=')
  }
  const suffix = isStarred ? '*' : ''
  if (baseEnv === 'align' || baseEnv === 'eqnarray') {
    return `$$\n\\begin{align${suffix}}\n${content}\n\\end{align${suffix}}\n$$`
  }
  if (baseEnv === 'gather') {
    return `$$\n\\begin{gather${suffix}}\n${content}\n\\end{gather${suffix}}\n$$`
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
      fields[fieldMatch[1].toLowerCase()] = body.slice(start + 1, j)
      i = j + 1
    }
    entries.push({ key: match[2], type: match[1], fields })
  }
  return entries
}

const bibEntries = parseBib(bib)
const bibByKey = Object.fromEntries(bibEntries.map((entry) => [entry.key, entry]))

const baseChapterTitles = [
  '跃迁矩阵元：基展开（Basis Expansion）',
  'GT 算符约化矩阵元的推导（Derivation of Reduced Matrix Element of Gamow-Teller Operator）',
  '2νββ 核矩阵元（Nuclear Matrix Element）',
  '附录 A：基础公式（Appendix A）',
  '附录 B：推导公式（Appendix B）'
]
const baseChapterFiles = [
  'nme-basis-expansion.md',
  'nme-2nbb-nme.md',
  'nme-appendix-a.md',
  'nme-appendix-b.md'
]
const pageIntro = '> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。'

function hasContent(chunk) {
  return chunk.some((line) => {
    const trimmed = line.trim()
    return trimmed && !trimmed.startsWith('%')
  })
}

const chapterChunks = []
let currentChunk = []
for (const line of bodyLines) {
  if (/^\\chapter\{/.test(line.trim())) {
    if (currentChunk.length && hasContent(currentChunk)) chapterChunks.push(currentChunk)
    currentChunk = [line]
  } else {
    currentChunk.push(line)
  }
}
if (currentChunk.length && hasContent(currentChunk)) chapterChunks.push(currentChunk)

const sectionRe = /^\\section\{([\s\S]*)\}\s*$/

const pageSpecs = []
for (let index = 0; index < chapterChunks.length; index++) {
  const chunk = chapterChunks[index]
  if (index === 1) {
    const twoBodySectionIdx = chunk.findIndex((line) => line.includes('The reduced matrix element of the GT two-body currents operator'))
    const markerIndexes = ['Term$[05E_1]', 'Term$[09I_1]', 'Term$[11k_1]']
      .map((marker) => chunk.findIndex((line) => line.includes(marker)))
      .filter((pos) => pos !== -1)
    const bounds = [0, twoBodySectionIdx, ...markerIndexes, chunk.length]
    const gtTitles = [
      'GT 算符约化矩阵元：单体流',
      'GT 双体流推导（1）：Term 01A–04D',
      'GT 双体流推导（2）：Term 05E–08H',
      'GT 双体流推导（3）：Term 09I–10J 与交换项',
      'GT 双体流推导（4）：动量项 Term 11k–13M'
    ]
    const gtFiles = [
      'nme-gt-1b.md',
      'nme-gt-2b-1.md',
      'nme-gt-2b-2.md',
      'nme-gt-2b-3.md',
      'nme-gt-2b-4.md'
    ]
    for (let k = 0; k < bounds.length - 1; k++) {
      const segment = chunk.slice(bounds[k], bounds[k + 1])
      if (hasContent(segment)) {
        pageSpecs.push({ lines: segment, title: gtTitles[k], file: gtFiles[k] })
      }
    }
  } else {
    const pageIndex = index > 1 ? index - 1 : index
    if (index === 4) {
      const prev = pageSpecs[pageSpecs.length - 1]
      prev.lines = [...prev.lines, ...chunk]
      prev.file = 'nme-appendix.md'
      prev.title = '附录：基础公式与推导公式'
    } else {
      pageSpecs.push({
        lines: chunk,
        title: baseChapterTitles[index],
        file: baseChapterFiles[pageIndex]
      })
    }
  }
}

function buildPage(spec) {
  if (spec.file === 'nme-basis-expansion.md') {
    emitPrefix = '1'
    emitEqNum = 0
  } else if (spec.file === 'nme-gt-1b.md') {
    emitPrefix = '2'
    emitEqNum = 0
  } else if (spec.file.startsWith('nme-gt-2b-')) {
    emitPrefix = '2'
  } else if (spec.file === 'nme-2nbb-nme.md') {
    emitPrefix = '3'
    emitEqNum = 0
  } else if (spec.file === 'nme-appendix-a.md') {
    emitPrefix = 'A'
    emitEqNum = 0
  } else if (spec.file === 'nme-appendix-b.md') {
    emitPrefix = 'B'
    emitEqNum = 0
  } else if (spec.file === 'nme-appendix.md') {
    emitPrefix = 'A'
    emitEqNum = 0
    appendixChapterCount = 0
  }
  const chunk = spec.lines
  const localOrder = []
  const localMap = {}
  for (const line of chunk) {
    for (const match of line.matchAll(/\\cite\{([^}]*)\}/g)) {
      for (const key of match[1].split(',').map((s) => s.trim())) {
        if (key && !(key in localMap)) {
          localMap[key] = localOrder.length + 1
          localOrder.push(key)
        }
      }
    }
  }
  activeCitationMap = localMap
  activeCitationOrder = localOrder

  const output = []
  output.push(`# ${spec.title}`)
  output.push('')
  output.push(pageIntro)
  output.push('')

  for (let i = 0; i < chunk.length; i++) {
    const line = chunk[i]
    const trimmed = line.trim()
    if (/^\\chapter\{/.test(trimmed)) {
      if (spec.file === 'nme-appendix.md') {
        appendixChapterCount += 1
        if (appendixChapterCount > 1) {
          emitPrefix = 'B'
          emitEqNum = 0
          output.push('')
          output.push('<!-- eqreset -->')
          output.push('')
        }
      }
      continue
    }
    if (/^(\\backmatter|\\appendix|\\setcounter|\\renewcommand|\\bibliographystyle|\\bibliography)/.test(trimmed)) {
      continue
    }
    const sectionMatch = line.match(sectionRe)
    if (sectionMatch) {
      output.push('')
      output.push(`## ${sectionMatch[1]}`)
      output.push('')
      continue
    }
    const beginMatch = line.match(mathBeginRe)
    if (beginMatch) {
      const env = beginMatch[1]
      let j = i + 1
      const inner = []
      while (j < chunk.length && !mathEndRe.test(chunk[j])) {
        inner.push(chunk[j])
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
    let prose = trimmed
    prose = rewriteEqualWithOver(prose)
    prose = prose.replace(/\\indent/g, '')
    prose = prose.replace(/In the code\s*：?/g, '代码中：')
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

  return output.join('\n')
}

const pages = pageSpecs.map((spec) => ({
  file: spec.file,
  markdown: expandMathMacrosInMarkdown(buildPage(spec))
}))

let errorCount = 0
const displayRe = /\$\$([\s\S]*?)\$\$/g
const inlineRe = /(?<![\\$])\$([^$\n]+)\$/g
for (const page of pages) {
  const outputDir = researchNoteFiles.has(page.file)
    ? path.join(projectRoot, 'docs', '两体流矩阵元的推导')
    : path.join(projectRoot, 'docs')
  fs.mkdirSync(outputDir, { recursive: true })
  const file = path.join(outputDir, page.file)
  fs.writeFileSync(file, page.markdown, 'utf8')
  console.log('written:', file, page.markdown.length, 'bytes')
  let displayIndex = 0
  let match
  while ((match = displayRe.exec(page.markdown)) !== null) {
    displayIndex += 1
    try {
      katex.renderToString(match[1], { displayMode: true, throwOnError: true })
    } catch (error) {
      errorCount += 1
      console.log(`${page.file} display#${displayIndex}: ${error.message}`)
    }
  }
  let inlineIndex = 0
  while ((match = inlineRe.exec(page.markdown)) !== null) {
    inlineIndex += 1
    try {
      katex.renderToString(match[1], { displayMode: false, throwOnError: true })
    } catch (error) {
      errorCount += 1
      console.log(`${page.file} inline#${inlineIndex}: ${error.message}`)
    }
  }
}
console.log('katex errors:', errorCount)
process.exitCode = errorCount > 0 ? 1 : 0
