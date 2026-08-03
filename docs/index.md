# APS Research Suite

一个整合的 Codex 自定义 skill：把 **APS 论文写作** 与 **已发表文献调研** 两条流水线合并成一套可重复执行的科研工作流。

## 为什么整合

111黑王牛论文写作和文献调研共享同一份"文献数据源"：调研产出结构化文献清单，写作时直接转成 BibTeX 和笔记。整合后一次调研的结果可以反复用于多篇论文，避免重复检索和格式不一致。

## 三大能力

- **论文写作**：RevTeX 4.2 骨架、60 篇文献笔记、BibTeX 管理、多遍编译、PDF 页面渲染验收。
- **文献调研**：INSPIRE / Crossref / arXiv / Semantic Scholar 检索，DOI 核验"已发表"，Unpaywall 与 APS harvest 拿全文。
- **视觉验收**：PDF 页面渲染成 PNG，交给 Qwen 视觉检查图表清晰度、图注与编号。

## 环境依赖

| 组件 | 位置 / 命令 | 用途 |
| --- | --- | --- |
| TeX Live 2024 | `latexmk`, `pdflatex`, `bibtex` | 编译 APS 论文 |
| Codex 捆绑 Python | `...\codex-primary-runtime\dependencies\python\python.exe` | pdfplumber 解析 PDF |
| Qwen 视觉脚本 | `C:\Users\13425\read_pdf_fig.py` | 读图表与扫描页 |
| APS harvest 接口 | `https://harvest.aps.org/v2/journals/articles/<DOI>/fulltext` | 获取 APS 官方 PDF |

## 示例图（SVG）

下面是 LaTeX TikZ 输出的 PDF 转成 SVG 后的效果，可直接嵌入文档站：

<img src="/assets/2vbb_tikz_main.svg" alt="2vββ TikZ 图" style="width: 80%; display: block; margin: 0 auto;">


## 公式示例

网站支持 LaTeX 公式。行内公式：$E = mc^2$；独立公式：

$$ M^{(2\nu)} = \sum_{m} \frac{\langle 0_f^+ | \mathcal{O} | m \rangle \; \langle m | \mathcal{O} | 0_i^+ \rangle}{E_m} $$

多行公式（QRPA 声子算符）：

$$
\begin{aligned}
  \mathcal{Q}_{n}^{\dagger}(JM) &= \sum_{ab} X_{ab}^{nJ} A_{ab}^{\dagger}(JM) - Y_{ab}^{nJ} \tilde{A}_{ab}(JM) \\
  \mathcal{Q}_{n}(JM) &= \sum_{ab} X_{ab}^{nJ\ast} A_{ab}(JM) - Y_{ab}^{nJ\ast} \tilde{A}_{ab}^{\dagger}(JM)
\end{aligned}
$$

$$
\begin{aligned}
  \mathcal{Q}_{n}^{\dagger}(JM) &= \sum_{ab} X_{ab}^{nJ} A_{ab}^{\dagger}(JM) - Y_{ab}^{nJ} \tilde{A}_{ab}(JM) \\
  \mathcal{Q}_{n}(JM) &= \sum_{ab} X_{ab}^{nJ\ast} A_{ab}(JM) - Y_{ab}^{nJ\ast} \tilde{A}_{ab}^{\dagger}(JM)
\end{aligned}
$$
