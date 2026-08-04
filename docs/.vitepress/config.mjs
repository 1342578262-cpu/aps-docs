import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'
import katexMacros from '../../scripts/katex-macros.mjs'

export default defineConfig({
  base: '/aps-docs/',
  lang: 'zh-CN',
  title: 'APS Research Suite',
  description: 'Codex 自定义 skill 文档：APS 论文写作 + SRPA 文献调研',
  markdown: {
    config: (md) => {
      md.use(katex, { throwOnError: false, macros: katexMacros, output: 'html' })
    }
  },
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/quickstart' },
      { text: '论文写作', link: '/aps-writing' },
      { text: '文献调研', link: '/srpa-survey' },
      { text: 'FAQ', link: '/faq' }
    ],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '1. 快速开始', link: '/quickstart' },
          { text: '2. 工作流总览', link: '/workflow' }
        ]
      },
      {
        text: '教程',
        items: [
          { text: '3. APS 论文写作', link: '/aps-writing' },
          { text: '4. SRPA 文献调研', link: '/srpa-survey' },
          { text: '5. 文献与 BibTeX', link: '/literature' },
          { text: '6. 图表检查', link: '/figures' },
          { text: '7. 交付规范', link: '/deliverables' },
        ]
      },
      {
        text: '研究笔记',
        items: [
          { text: '跃迁矩阵元：QRPA + QPVC', link: '/nme-qrpa-qpvc' }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '8. FAQ', link: '/faq' },
          { text: '9. 如何修改本站', link: '/how-to-edit' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
