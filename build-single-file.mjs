import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import katexMacros from './scripts/katex-macros.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.join(root, 'docs')
const files = [
  'index.md', 'quickstart.md', 'workflow.md', 'aps-writing.md',
  'srpa-survey.md', 'literature.md', 'figures.md', 'deliverables.md',
  'how-to-edit.md', 'faq.md'
]

const md = new MarkdownIt({ html: true, linkify: true })
md.use(katex, { throwOnError: false, macros: katexMacros })

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

function renderMarkdown(source) {
  let text = source
  text = text.replace(/::: tip\s*\r?\n([\s\S]*?)\r?\n:::/g, '<div class="note">$1</div>')
  usedHeadingIds.clear()
  return md.render(text)
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
.brand { font-weight: 700; display: flex; align-items: center; gap: 10px; }
.brand-mark { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: #0431fa; color: #fff; font-weight: 700; font-size: 12px; }
.badge { padding: 2px 8px; border: 1px solid #e5e7eb; border-radius: 999px; font-size: 12px; color: #6b7280; }
.menu-toggle { display: none; margin-left: auto; border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 6px 12px; cursor: pointer; }
.layout { display: grid; grid-template-columns: 272px minmax(0, 1fr) 224px; max-width: 1900px; margin: 0 auto; }
.sidebar { position: sticky; top: 56px; align-self: start; height: calc(100vh - 56px); overflow-y: auto; padding: 24px 16px; border-right: 1px solid #e5e7eb; background: #fff; }
.sidebar a { display: block; padding: 6px 10px; border-radius: 6px; color: #1f2937; text-decoration: none; font-size: 14px; }
.sidebar a:hover, .sidebar a.active { background: #eef1ff; color: #0431fa; }
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
.flow { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
.flow-node { flex: 1 1 120px; min-width: 120px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; background: #fff; text-align: center; font-weight: 600; }
.flow-node span { display: block; margin-top: 6px; font-weight: 400; font-size: 12px; color: #6b7280; }
.flow-arrow { align-self: center; color: #6b7280; }
details { border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; margin: 10px 0; background: #fff; }
summary { cursor: pointer; font-weight: 600; }
.katex { font-size: 1.05em; }
@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { display: none; position: static; height: auto; border-right: none; border-bottom: 1px solid #e5e7eb; }
  .sidebar.open { display: block; }
  .menu-toggle { display: inline-block; }
  .content { padding: 32px 24px 60px; }
  h1 { font-size: 28px; }
}
@media (max-width: 1279px) {
  .layout { grid-template-columns: 272px minmax(0, 1fr); }
  .toc { display: none; }
}
`

const sections = files.map((file) => {
  const raw = fs.readFileSync(path.join(docsDir, file), 'utf8')
  const titleLine = raw.split(/\r?\n/).find((line) => line.startsWith('# '))
  const title = titleLine ? titleLine.replace(/^#\s+/, '').trim() : file
  let html = renderMarkdown(raw)
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
  return { id: file.replace('.md', ''), title, html, toc }
})

const sectionMap = Object.fromEntries(sections.map((s) => [s.id, s]))
const sidebarGroups = [
  { text: '入门', items: ['index', 'quickstart', 'workflow'] },
  { text: '教程', items: ['aps-writing', 'srpa-survey', 'literature', 'figures', 'deliverables'] },
  { text: '附录', items: ['faq', 'how-to-edit'] }
]
const nav = sidebarGroups
  .map((group) => {
    const links = group.items
      .filter((id) => sectionMap[id])
      .map((id) => `<a href="#${id}">${sectionMap[id].title}</a>`)
      .join('\n')
    return `<div class="nav-group"><div class="nav-group-title">${group.text}</div>\n${links}</div>`
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
  <div class="brand"><span class="brand-mark">APS</span><span>Research Suite</span><span class="badge">单文件版</span></div>
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
