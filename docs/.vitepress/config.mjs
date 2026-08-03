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
      md.use(katex, { throwOnError: false, macros: katexMacros })
    }
  },
  themeConfig: {
    nav: [
      { text: '概览', link: '/' },
      { text: '快速开始', link: '/quickstart' },
      { text: '论文写作', link: '/aps-writing' },
      { text: '文献调研', link: '/srpa-survey' },
      { text: 'FAQ', link: '/faq' }
    ],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '1. 概览', link: '/' },
          { text: '2. 快速开始', link: '/quickstart' },
          { text: '3. 工作流总览', link: '/workflow' }
        ]
      },
      {
        text: '教程',
        items: [
          { text: '4. APS 论文写作', link: '/aps-writing' },
          { text: '5. SRPA 文献调研', link: '/srpa-survey' },
          { text: '6. 文献与 BibTeX', link: '/literature' },
          { text: '7. 图表检查', link: '/figures' },
          { text: '8. 交付规范', link: '/deliverables' },
        ]
      },
      {
        text: '附录',
        items: [
          { text: '9. FAQ', link: '/faq' },
          { text: '10. 如何修改本站', link: '/how-to-edit' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
