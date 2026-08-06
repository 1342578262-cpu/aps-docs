import { computeMathMap } from './math-map.mjs'

const mathEnvRe = /^\\begin\{(align|gather|equation|eqnarray)(\*?)\}/

function splitMathRows(inner) {
  const rows = []
  let current = ''
  const envStack = []
  let i = 0
  while (i < inner.length) {
    const begin = inner.slice(i).match(/^\\begin\{([^}]*)\}/)
    if (begin) {
      envStack.push(begin[1])
      current += begin[0]
      i += begin[0].length
      continue
    }
    const end = inner.slice(i).match(/^\\end\{([^}]*)\}/)
    if (end) {
      envStack.pop()
      current += end[0]
      i += end[0].length
      continue
    }
    if (inner.startsWith('\\\\', i) && envStack.length === 0) {
      rows.push(current.trim())
      current = ''
      i += 2
      continue
    }
    current += inner[i]
    i += 1
  }
  if (current.trim()) rows.push(current.trim())
  return rows
}

function numberRows(inner, nextNum) {
  return splitMathRows(inner)
    .map((row) => {
      if (/\\notag|\\nonumber|\\tag\{/.test(row)) return row
      const trimmed = row.trimEnd()
      const num = nextNum()
      if (trimmed.endsWith('\\\\')) {
        return `${trimmed.slice(0, -2)} \\tag{${num}} \\\\`
      }
      return `${trimmed} \\tag{${num}}`
    })
    .join(' \\\\\n')
}

function processBlock(src, nextNum) {
  let out = ''
  let i = 0
  while (i < src.length) {
    const begin = src.slice(i).match(mathEnvRe)
    if (!begin) {
      out += src[i]
      i += 1
      continue
    }
    const env = begin[1] + begin[2]
    const starred = begin[2] === '*'
    let depth = 1
    let j = i + begin[0].length
    let endLen = 0
    while (j < src.length && depth > 0) {
      const b = src.slice(j).match(/^\\begin\{[^}]*\}/)
      const e = src.slice(j).match(/^\\end\{[^}]*\}/)
      if (b) {
        depth += 1
        j += b[0].length
        continue
      }
      if (e) {
        depth -= 1
        j += e[0].length
        if (depth === 0) {
          endLen = e[0].length
          break
        }
        continue
      }
      j += 1
    }
    const full = src.slice(i, j)
    if (!starred) {
      const inner = full.slice(begin[0].length, full.length - endLen)
      out += `\\begin{${env}}\n${numberRows(inner, nextNum)}\n\\end{${env}}`
    } else {
      out += full
    }
    i = j
  }
  return out
}

export default function autoNumberMathPlugin(md) {
  md.core.ruler.before('normalize', 'aps-auto-number-math', (state) => {
    const refsCfg = state.env?.refs || {}
    const anchorPrefix = refsCfg.anchorPrefix || 'eq-'
    const pageKey = state.env?.relativePath || refsCfg.pageKey || ''
    const mathMap = computeMathMap()
    const start = mathMap.pageStarts[pageKey] || 1
    let prefix = mathMap.prefixes[pageKey] || ''
    let counter = start - 1
    const nextNum = () => {
      counter += 1
      return prefix ? `${prefix}.${counter}` : String(counter)
    }
    const parts = state.src.split(/\$\$([\s\S]*?)\$\$/g)
    let out = ''
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (i % 2 === 1) {
        const labels = [...part.matchAll(/\\label\{([^}]*)\}/g)].map((m) => m[1])
        const cleaned = part.replace(/\\label\{[^}]*\}/g, '')
        const spans = [...new Set(labels)]
          .map((key) => `<span id="${anchorPrefix}${key}"></span>`)
          .join('')
        out += (spans ? spans + '\n' : '') + `$$\n${processBlock(cleaned, nextNum)}\n$$`
      } else {
        if (part.includes('<!-- eqreset -->')) {
          prefix = 'B'
          counter = 0
        }
        out += part
      }
    }
    state.src = out
  })
}
