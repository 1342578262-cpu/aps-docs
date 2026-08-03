# 图表检查

PDF 页面先渲染成 PNG，再交给 Qwen 视觉接口检查：坐标轴、图例、数据趋势、图注是否对应。

```bash
python C:\Users\13425\read_pdf_fig.py "paper.pdf" 3
python C:\Users\13425\read_pdf_fig.py --image "figure.png"
```
