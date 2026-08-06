export function cleanLatex(s) {
  return String(s || '')
    .replace(/\\ensuremath\{([^}]*)\}/g, '$1')
    .replace(/\\(?:mathbf|boldsymbol|mathrm|mathcal|mathbb)\{([^}]*)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function doiUrl(doi) {
  const cleaned = cleanLatex(doi)
    .replace(/^doi\s*:\s*/i, '')
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
  return cleaned ? `https://doi.org/${cleaned}` : ''
}

export function entryLink(entry) {
  const f = entry.fields
  const doi = f.doi ? doiUrl(f.doi) : ''
  const url = doi ? '' : cleanLatex(f.url || '')
  const journal = cleanLatex(f.journal || f.journaltitle || f.booktitle || f.publisher || '')
  const year = cleanLatex(f.year || '')
  const volume = cleanLatex(f.volume || '')
  const number = cleanLatex(f.number || '')
  const pages = cleanLatex(f.pages || '').replace(/--/g, '–')

  let cite = journal
  if (cite && volume) cite += ' '
  if (volume) {
    cite += `**${volume}**`
    if (number) cite += ` (${number})`
  } else if (number) {
    cite += `(${number})`
  }
  if (pages) cite += `, ${pages}`
  if (year) cite += ` (${year})`
  cite = cite.trim()

  if (doi) return `[${cite}](${doi})`
  if (url) return `[${cite}](${url})`
  return cite
}

export function formatEntry(entry) {
  const f = entry.fields
  const authors = (f.author || '').replace(/\s+and\s+/gi, ', ')
  const title = cleanLatex(f.title || '')
  const parts = [authors, `*${title}*`]
  const link = entryLink(entry)
  if (link) parts.push(link)
  return parts.join(', ') + '.'
}
