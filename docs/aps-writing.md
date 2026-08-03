# APS 论文写作教程

## 第 1 步：生成论文骨架

自动创建 RevTeX 4.2 结构：`abstract`、`introduction`、`formalism`、`results`、`conclusion`、`acknowledgments`、`references`。

```latex
\documentclass[aps,prc,twocolumn,superscriptaddress]{revtex4-2}
\usepackage{graphicx}
\bibliographystyle{apsrev4-2}
```

## 第 2 步：编译

优先使用 latexmk，自动处理多遍编译与参考文献。

```bash
latexmk -pdf main.tex

# 回退方案
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

## 第 3 步：一致性检查清单

| 检查项 | 要求 |
| --- | --- |
| 单位与符号 | 全文统一，物理量符号与正文一致 |
| 公式编号 | 连续编号，无重复 |
| 交叉引用 | 所有 `\ref` / `\cite` 能解析 |
| 占位符 | 无 TODO、XXX、未填数值 |
| 图注编号 | 图号、正文引用、图注一一对应 |
