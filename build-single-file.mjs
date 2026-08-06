import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import katexMacros from './scripts/katex-macros.mjs'
import citationPlugin from './scripts/citations.mjs'
import autoNumberMath from './scripts/auto-number-math.mjs'
import refsPlugin from './scripts/refs.mjs'
import publicAssetsPlugin from './scripts/public-assets.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.join(root, 'docs')
const files = [
  'index.md', 'quickstart.md',
  '两体流矩阵元的推导/nme-basis-expansion.md', '两体流矩阵元的推导/nme-gt-1b.md',
  '两体流矩阵元的推导/nme-gt-2b-1.md', '两体流矩阵元的推导/nme-gt-2b-2.md',
  '两体流矩阵元的推导/nme-gt-2b-3.md', '两体流矩阵元的推导/nme-gt-2b-4.md',
  'nme-2nbb-nme.md',
  'nme-appendix.md',
  'references.md'
]

const md = new MarkdownIt({ html: true, linkify: true })
md.use(refsPlugin)
md.use(autoNumberMath)
md.use(katex, {
  throwOnError: false,
  macros: katexMacros,
  output: 'html',
  trust: (context) => context.command === '\\href'
})
md.use(citationPlugin, { base: '' })
md.use(publicAssetsPlugin)

const usedHeadingIds = new Map()
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}
md.renderer.rules.heading_open = (tokens, idx) => {
  const token = tokens[idx]
  const inline = tokens[idx + 1]
  const text = inline ? inline.content : ''
  const base = slugify(text) || 'section'
  const count = usedHeadingIds.get(base) || 0
  const id = count > 0 ? `${base}-${count + 1}` : base
  usedHeadingIds.set(base, count + 1)
  return `<h${token.tag.slice(1)} id="${id}">`
}

function parseFrontmatterCitations(source) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)
  if (!match) return []
  const listMatch = /^citations:\s*\r?\n((?:\s*-\s*"[^"]*"\r?\n?)+)/m.exec(match[1])
  if (!listMatch) return []
  return [...listMatch[1].matchAll(/-\s*"([^"]*)"/g)].map((m) => m[1])
}

function renderMarkdown(source, file) {
  const citations = parseFrontmatterCitations(source)
  let text = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
  text = text.replace(/::: tip\s*\r?\n([\s\S]*?)\r?\n:::/g, '<div class="note">$1</div>')
  usedHeadingIds.clear()
  const id = path.basename(file, '.md')
  return md.render(text, {
    frontmatter: { citations },
    refs: { mode: 'hash', anchorPrefix: `eq-${id}-`, pageKey: file }
  })
}

function inlineKaTeXFonts(css) {
  const fontsDir = path.join(root, 'node_modules', 'katex', 'dist', 'fonts')
  return css.replace(/url\(fonts\/([^)]+)\)/g, (match, name) => {
    const file = path.join(fontsDir, name)
    if (!fs.existsSync(file)) return match
    const b64 = fs.readFileSync(file).toString('base64')
    const mime = name.endsWith('.woff2') ? 'font/woff2' : name.endsWith('.woff') ? 'font/woff' : 'font/ttf'
    return `url(data:${mime};base64,${b64})`
  })
}

const svgPath = path.join(docsDir, 'public', 'assets', '2vbb_tikz_main.svg')
const svgDataUri = 'data:image/svg+xml;base64,' + fs.readFileSync(svgPath).toString('base64')

const katexCss = fs.readFileSync(path.join(root, 'node_modules', 'katex', 'dist', 'katex.min.css'), 'utf8')
const customCss = fs.readFileSync(path.join(docsDir, '.vitepress', 'theme', 'custom.css'), 'utf8')
const css = inlineKaTeXFonts(katexCss) + '\n' + customCss + '\n' + `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: "Segoe UI", "Microsoft YaHei", sans-serif; color: #1f2937; background: #fcfcfa; line-height: 1.65; }
.topbar { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; gap: 12px; padding: 0 20px; height: 56px; background: #fff; border-bottom: 1px solid #e5e7eb; }
.brand { font-weight: 700; display: flex; align-items: center; gap: 10px; color: #1f2937; text-decoration: none; }
.brand-mark { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: #0431fa; color: #fff; font-weight: 700; font-size: 12px; }
.badge { padding: 2px 8px; border: 1px solid #e5e7eb; border-radius: 999px; font-size: 12px; color: #6b7280; }
.menu-toggle { display: none; margin-left: auto; border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 6px 12px; cursor: pointer; }
.layout { display: grid; grid-template-columns: 272px minmax(0, 1fr) 224px; max-width: 1900px; margin: 0 auto; }
.sidebar { position: sticky; top: 56px; align-self: start; height: calc(100vh - 56px); overflow-y: auto; padding: 24px 16px; border-right: 1px solid #e5e7eb; background: #fff; }
.sidebar a { display: block; padding: 6px 10px; border-radius: 6px; color: #1f2937; text-decoration: none; font-size: 14px; }
.sidebar a:hover, .sidebar a.active { background: #eef1ff; color: #0431fa; }
.nav-group-details { margin: 2px 0; }
.nav-group-details summary { display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 6px; color: #1f2937; font-size: 14px; font-weight: 500; cursor: pointer; list-style: none; user-select: none; }
.nav-group-details summary::-webkit-details-marker { display: none; }
.nav-group-details summary:hover { background: #eef1ff; color: #0431fa; }
.nav-caret { width: 0; height: 0; border-left: 5px solid currentColor; border-top: 5px solid transparent; border-bottom: 5px solid transparent; transition: transform 0.15s; }
.nav-group-details[open] > summary .nav-caret { transform: rotate(90deg); }
.nav-subgroup { display: flex; flex-direction: column; }
.nav-subgroup a { padding-left: 20px; font-weight: 400; }
.nav-subgroup .nav-subgroup a { padding-left: 34px; }
.nav-group-details .nav-group-details summary { padding-left: 16px; }
.nav-group-title { margin: 18px 10px 6px; font-size: 12px; font-weight: 600; color: #7a8291; }
.nav-group:first-child .nav-group-title { margin-top: 0; }
.content { padding: 48px 32px 96px; min-width: 0; max-width: 1200px; margin: 0 auto; }
.toc { position: sticky; top: 56px; align-self: start; height: calc(100vh - 56px); overflow-y: auto; padding: 24px 16px; border-left: 1px solid #e5e7eb; font-size: 13px; }
.toc-title { font-size: 12px; font-weight: 600; color: #7a8291; margin-bottom: 10px; }
.toc ul { list-style: none; margin: 0; padding: 0; }
.toc li { margin: 3px 0; }
.toc a { display: block; padding: 3px 6px; border-radius: 4px; color: #5a6270; text-decoration: none; }
.toc a:hover { color: #0431fa; background: #eef1ff; }
.toc .toc-3 a { padding-left: 16px; }
.content section { scroll-margin-top: 72px; margin-bottom: 48px; }
.content section { display: none; }
.content section.active { display: block; }
h1 { font-size: 34px; margin: 0 0 8px; line-height: 1.25; }
h2 { font-size: 1.35rem; margin: 2.6rem 0 1.2rem; padding: 0.75rem 1rem; background: #f2f5fc; border: 1px solid #dfe6f5; border-left: 6px solid #0431fa; border-radius: 8px; line-height: 1.4; }
h3 { margin-top: 2rem; padding-left: 0.65rem; border-left: 4px solid #5b7bfa; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; background: #fff; }
th, td { text-align: left; padding: 10px 12px; border: 1px solid #e5e7eb; }
th { background: #f4f5f7; }
code { font-family: Consolas, "Courier New", monospace; font-size: 13px; background: #f6f7f8; border: 1px solid #e5e7eb; border-radius: 4px; padding: 1px 5px; }
pre { background: #f6f7f8; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px 16px; overflow-x: auto; position: relative; }
pre code { background: none; border: none; padding: 0; }
.copy-btn { position: absolute; top: 8px; right: 8px; border: 1px solid #e5e7eb; background: #fff; border-radius: 6px; padding: 3px 10px; font-size: 12px; cursor: pointer; color: #6b7280; }
.note { border-left: 4px solid #1a7f37; background: #eef7ef; padding: 12px 16px; border-radius: 0 8px 8px 0; margin: 16px 0; }
.cover { padding: 36px 0 8px; }
.cover-name { margin: 0 0 10px; font-size: 42px; line-height: 1.15; color: #0431fa; }
.cover-text { margin: 0 0 8px; font-size: 24px; font-weight: 600; color: #1f2937; }
.cover-tagline { margin: 0 0 22px; font-size: 16px; color: #6b7280; }
.cover-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.cover-action { display: inline-block; padding: 9px 18px; border-radius: 8px; font-size: 15px; font-weight: 600; text-decoration: none; }
.cover-action.brand { background: #0431fa; color: #fff; }
.cover-action.alt { border: 1px solid #e5e7eb; color: #1f2937; background: #fff; }
.cover-action.alt:hover { border-color: #0431fa; color: #0431fa; }
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 8px; }
.feature-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px 18px; background: #fff; }
.feature-card h3 { margin: 0 0 6px; font-size: 17px; color: #1f2937; }
.feature-card p { margin: 0; color: #5a6270; font-size: 14px; line-height: 1.6; }
.flow { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.flow-node { flex: 1 1 120px; min-width: 120px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; background: #fff; text-align: center; font-weight: 600; }
.flow-node span { display: block; margin-top: 6px; font-weight: 400; font-size: 12px; color: #6b7280; }
.flow-arrow { align-self: center; color: #6b7280; }
.content details { border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; margin: 10px 0; background: #fff; }
.content summary { cursor: pointer; font-weight: 600; }
.katex { font-size: 1.05em; }
@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { display: none; position: static; height: auto; border-right: none; border-bottom: 1px solid #e5e7eb; }
  .sidebar.open { display: block; }
  .menu-toggle { display: inline-block; }
  .feature-grid { grid-template-columns: 1fr; }
  .cover-name { font-size: 32px; }
  .cover-text { font-size: 20px; }
  .content { padding: 32px 24px 60px; }
  h1 { font-size: 28px; }
}
@media (max-width: 1279px) {
  .layout { grid-template-columns: 272px minmax(0, 1fr); }
  .toc { display: none; }
}
`

function readTitle(raw, file) {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw)
  if (frontmatter) {
    const heroName = frontmatter[1].match(/^\s*name:\s*(.+)$/m)
    if (heroName) return heroName[1].replace(/^["']|["']$/g, '').trim()
    const fmTitle = frontmatter[1].match(/^\s*title:\s*(.+)$/m)
    if (fmTitle) return fmTitle[1].replace(/^["']|["']$/g, '').trim()
  }
  const titleLine = raw.split(/\r?\n/).find((line) => line.startsWith('# '))
  return titleLine ? titleLine.replace(/^#\s+/, '').trim() : file
}

function yamlValue(line, key) {
  return line.slice(line.indexOf(key) + key.length).replace(/^:\s*/, '').trim().replace(/^["']|["']$/g, '')
}

function parseHomeFrontmatter(raw) {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw)
  if (!frontmatter) return null
  let hero = null
  let actions = []
  let features = []
  let currentAction = null
  let currentFeature = null
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    if (t === 'hero:') { hero = {}; continue }
    if (t === 'actions:' || t === 'features:') continue
    if (t.startsWith('layout:')) continue
    if (t.startsWith('- theme:')) {
      currentFeature = null
      currentAction = { theme: yamlValue(t, 'theme') }
      actions.push(currentAction)
      continue
    }
    if (t.startsWith('- title:')) {
      currentAction = null
      currentFeature = { title: yamlValue(t, 'title') }
      features.push(currentFeature)
      continue
    }
    if (hero && !currentAction && !currentFeature && /^(name|text|tagline):/.test(t)) {
      const key = t.slice(0, t.indexOf(':'))
      hero[key] = yamlValue(t, key)
      continue
    }
    if (currentAction && /^(theme|text|link):/.test(t)) {
      const key = t.slice(0, t.indexOf(':'))
      currentAction[key] = yamlValue(t, key)
      continue
    }
    if (currentFeature && /^(title|details):/.test(t)) {
      const key = t.slice(0, t.indexOf(':'))
      currentFeature[key] = yamlValue(t, key)
      continue
    }
  }
  return hero ? { hero, actions, features } : null
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function homeCoverHtml(fm) {
  const hero = fm.hero
  const actions = (fm.actions || [])
    .map((action) => {
      const theme = action.theme === 'brand' ? 'brand' : 'alt'
      const link = (action.link || '#').replace(/^\//, '#')
      return `<a class="cover-action ${theme}" href="${link}">${escapeHtml(action.text)}</a>`
    })
    .join('')
  const features = (fm.features || [])
    .map((feature) => `<div class="feature-card"><h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.details)}</p></div>`)
    .join('')
  return [
    '<div class="cover">',
    `<h1 class="cover-name">${escapeHtml(hero.name || '')}</h1>`,
    hero.text ? `<p class="cover-text">${escapeHtml(hero.text)}</p>` : '',
    hero.tagline ? `<p class="cover-tagline">${escapeHtml(hero.tagline)}</p>` : '',
    actions ? `<div class="cover-actions">${actions}</div>` : '',
    '</div>',
    features ? `<div class="feature-grid">${features}</div>` : ''
  ].filter(Boolean).join('\n')
}

const sections = files.map((file) => {
  const raw = fs.readFileSync(path.join(docsDir, file), 'utf8')
  const title = readTitle(raw, file)
  let html = renderMarkdown(raw, file)
  const fm = parseHomeFrontmatter(raw)
  if (fm && fm.hero && fm.hero.name) {
    html = homeCoverHtml(fm) + '\n' + html
  }
  html = html.replaceAll('/assets/2vbb_tikz_main.svg', svgDataUri)
  const toc = []
  const headingRe = /<h([23]) id="([^"]+)">([\s\S]*?)<\/h[23]>/g
  let hm
  while ((hm = headingRe.exec(html)) !== null) {
    toc.push({
      level: Number(hm[1]),
      id: hm[2],
      text: hm[3].replace(/<[^>]+>/g, '').trim()
    })
  }
  return { id: path.basename(file, '.md'), title, html, toc }
})

const sectionMap = Object.fromEntries(sections.map((s) => [s.id, s]))
const sidebarGroups = [
  {
    text: '研究笔记',
    items: [
      'quickstart',
      {
        text: '2. 两体流矩阵元的推导',
        items: [
          'nme-basis-expansion',
          'nme-gt-1b',
          {
            text: 'GT 双体流',
            items: ['nme-gt-2b-1', 'nme-gt-2b-2', 'nme-gt-2b-3', 'nme-gt-2b-4']
          }
        ]
      },
      'nme-2nbb-nme',
      'nme-appendix',
      'references'
    ]
  }
]
function renderNavItems(items) {
  return (items || [])
    .map((item) => {
      if (typeof item === 'string') {
        if (!sectionMap[item]) return ''
        return `<a href="#${item}">${sectionMap[item].title}</a>`
      }
      const children = renderNavItems(item.items || [])
      if (!children) return ''
      return `<details class="nav-group-details"><summary><span>${item.text}</span><span class="nav-caret"></span></summary>\n<div class="nav-subgroup">${children}</div>\n</details>`
    })
    .filter(Boolean)
    .join('\n')
}
const nav = sidebarGroups
  .map((group) => {
    return `<div class="nav-group"><div class="nav-group-title">${group.text}</div>\n${renderNavItems(group.items)}</div>`
  })
  .join('\n')
const bodies = sections.map((s) => `<section id="${s.id}">${s.html}</section>`).join('\n')
const tocData = Object.fromEntries(sections.map((s) => [s.id, s.toc]))

const page = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>APS Research Suite</title>
<style>${css}</style>
</head>
<body>
<header class="topbar">
  <a class="brand" href="#index"><span class="brand-mark">APS</span><span>Research Suite</span><span class="badge">单文件版</span></a>
  <button class="menu-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')">菜单</button>
</header>
<div class="layout">
  <aside class="sidebar" id="sidebar">${nav}</aside>
  <main class="content vp-doc">${bodies}</main>
  <aside class="toc" id="toc"><div class="toc-title">本页目录</div><ul id="toc-list"></ul></aside>
</div>
<script>
window.__TOCS__ = ${JSON.stringify(tocData)};
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var pre = btn.closest('pre');
    navigator.clipboard.writeText(pre.innerText).then(function () {
      var old = btn.textContent; btn.textContent = '已复制';
      setTimeout(function () { btn.textContent = old; }, 1200);
    });
  });
});
var links = Array.prototype.slice.call(document.querySelectorAll('.sidebar a'));
var sections = Array.prototype.slice.call(document.querySelectorAll('.content section'));
var sectionIds = {};
sections.forEach(function (s) { sectionIds[s.id] = true; });
function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function updateToc(id) {
  var list = document.getElementById('toc-list');
  if (!list) return;
  var items = (window.__TOCS__ && window.__TOCS__[id]) || [];
  list.innerHTML = items.map(function (item) {
    return '<li class="toc-' + item.level + '"><a href="#' + item.id + '">' + escapeHtml(item.text) + '</a></li>';
  }).join('');
}
function showSection(id) {
  sections.forEach(function (sec) {
    sec.classList.toggle('active', sec.id === id);
  });
  links.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
  var sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');
  updateToc(id);
  window.scrollTo(0, 0);
}
document.addEventListener('click', function (e) {
  var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if (!a) return;
  var id = a.getAttribute('href').slice(1);
  var anchorEl = document.getElementById(id);
  if (anchorEl && !sectionIds[id]) {
    var ownerSection = anchorEl.closest('section');
    if (ownerSection && !ownerSection.classList.contains('active')) {
      e.preventDefault();
      showSection(ownerSection.id);
      setTimeout(function () { anchorEl.scrollIntoView(); }, 0);
      if (history.replaceState) history.replaceState(null, '', '#' + id);
      return;
    }
  }
  if (!sectionIds[id]) return;
  e.preventDefault();
  showSection(id);
  if (history.replaceState) history.replaceState(null, '', '#' + id);
});
var initial = (location.hash || '').slice(1);
if (!initial || !document.getElementById(initial)) {
  initial = sections.length ? sections[0].id : 'index';
}
showSection(initial);
</script>
</body>
</html>`

const out = path.join(root, 'APS-Research-Suite.html')
fs.writeFileSync(out, page, 'utf8')
console.log('single-file written:', out, fs.statSync(out).size, 'bytes')
