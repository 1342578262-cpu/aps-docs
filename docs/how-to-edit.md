# 如何修改本站

本站是 VitePress 文档站，内容都是 Markdown 文件，改起来很简单。

## 1. 改正文内容（最常见）

正文在 `docs/` 目录下的 `.md` 文件里，比如 `index.md`、`aps-writing.md`。

用 VS Code 打开对应文件，像写普通文档一样修改，保存即可。开发预览地址：

```text
http://localhost:5173/
```

保存后浏览器会自动刷新，不用重启任何服务。

## 2. 新增一个页面

1. 在 `docs/` 里新建一个 `.md` 文件，例如 `new-page.md`
2. 文件开头写一级标题，然后写正文
3. 打开 `docs/.vitepress/config.mjs`，在 `sidebar` 数组里加一行链接：

```js
{ text: '新页面', link: '/new-page' }
```

## 3. 改样式（颜色、宽度）

打开 `docs/.vitepress/theme/custom.css`：

- 正文宽度改 `--vp-content-max-width` 的值
- 章节块颜色改 `.vp-doc h2` 里的 `background` 和 `border-left`
- 保存后同样自动生效

## 4. 加图片

1. 把图片放进 `docs/public/assets/`
2. 在 Markdown 里引用：

```markdown
![说明文字](/assets/文件名.png)
```

## 5. 构建发布

预览没问题后，在项目根目录执行构建：

```powershell
node node_modules\vitepress\bin\vitepress.js build docs
```

生成结果在 `docs/.vitepress/dist/`，可以推到 GitHub Pages 发布。

## 最省事的方式

不想碰代码时，直接告诉 Codex："把首页第二段改成 XXX"、"把正文宽度改成 1000px"，我来改，你看效果就行。
