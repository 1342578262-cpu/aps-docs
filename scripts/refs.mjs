import { computeMathMap } from './math-map.mjs'

function replaceInMath(text, buildHref) {
  return text.replace(/\\ref\{([^}]*)\}/g, (all, key) => {
    const entry = buildHref.refs[key]
    if (!entry) return all
    return `\\href{${buildHref.href(key)}}{${entry.display || entry.num}}`
  })
}

export default function refsPlugin(md, options = {}) {
  md.core.ruler.before('normalize', 'aps-refs', (state) => {
    const mathMap = computeMathMap()
    const refs = mathMap.refs
    const mode = state.env?.refs?.mode || 'page'
    const anchorPrefix = state.env?.refs?.anchorPrefix || ''
    const base = options.base || ''
    const buildHref = mode === 'hash'
      ? (key) => `#${anchorPrefix}${key}`
      : (key) => {
          const entry = refs[key]
          if (!entry) return `#eq-${key}`
          const path = `${base.replace(/\/$/, '')}${entry.page}.html`
          return `${path}#eq-${key}`
        }
    const refsCtx = { refs, href: buildHref }
    const parts = state.src.split(/\$\$([\s\S]*?)\$\$/g)
    let out = ''
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (i % 2 === 1) {
        out += `$$${replaceInMath(part, refsCtx)}$$`
        continue
      }
      const chunks = part.split('$')
      out += chunks
        .map((seg, idx) => {
          if (idx % 2 === 1) return replaceInMath(seg, refsCtx)
          return seg.replace(/\\ref\{([^}]*)\}/g, (all, key) => {
            const entry = refs[key]
            if (!entry) return all
            const href = mode === 'hash'
              ? `#${anchorPrefix}${key}`
              : `${entry.page}#eq-${key}`
            return `[${entry.display || entry.num}](${href})`
          })
        })
        .join('$')
    }
    state.src = out
  })
}
