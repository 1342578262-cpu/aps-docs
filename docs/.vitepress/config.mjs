import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'
import katexMacros from '../../scripts/katex-macros.mjs'
import citationPlugin from '../../scripts/citations.mjs'
import autoNumberMath from '../../scripts/auto-number-math.mjs'
import refsPlugin from '../../scripts/refs.mjs'
import publicAssetsPlugin from '../../scripts/public-assets.mjs'

export default defineConfig({
  base: '/aps-docs/',
  lang: 'zh-CN',
  title: 'APS Research Suite',
  description: '两体流矩阵元推导科研笔记',
  markdown: {
    config: (md) => {
      md.use(refsPlugin, { base: '/aps-docs/' })
      md.use(autoNumberMath)
      md.use(katex, {
        throwOnError: false,
        macros: katexMacros,
        output: 'html',
        trust: (context) => context.command === '\\href'
      })
      md.use(citationPlugin, { base: '/aps-docs/' })
      md.use(publicAssetsPlugin)
    }
  },
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/quickstart' }
    ],
    sidebar: [
      {
        text: '研究笔记',
        items: [
          { text: '1. 快速开始', link: '/quickstart' },
          {
            text: '2. 两体流矩阵元的推导',
            collapsed: true,
            items: [
              { text: '谐振子基展开', link: '/两体流矩阵元的推导/nme-basis-expansion' },
              { text: 'GT 单体流', link: '/两体流矩阵元的推导/nme-gt-1b' },
              {
                text: 'GT 双体流',
                collapsed: true,
                items: [
                  { text: '双体流 1：Term 01A–04D', link: '/两体流矩阵元的推导/nme-gt-2b-1' },
                  { text: '双体流 2：Term 05E–08H', link: '/两体流矩阵元的推导/nme-gt-2b-2' },
                  { text: '双体流 3：Term 09I–10J 与交换项', link: '/两体流矩阵元的推导/nme-gt-2b-3' },
                  { text: '双体流 4：动量项', link: '/两体流矩阵元的推导/nme-gt-2b-4' }
                ]
              }
            ]
          },
          { text: '3. 2νββ 核矩阵元', link: '/nme-2nbb-nme' },
          { text: '4. 附录', link: '/nme-appendix' },
          { text: '5. 参考文献', link: '/references' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
