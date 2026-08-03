# 工作流总览

```text
检索 → 筛选已发表 → 取全文 → 解析读图 → 文献清单 → 论文草稿
```

检索使用 INSPIRE / Crossref / arXiv / Semantic Scholar；筛选通过 DOI 与期刊卷期核验；取全文走 APS harvest、Unpaywall 或 PDF；解析用 pdfplumber，读图用 Qwen 视觉；最终文献清单直接生成 BibTeX 与论文素材。

两个 skill 共享文献清单与笔记：调研结果直接成为论文的 BibTeX 与素材来源。
