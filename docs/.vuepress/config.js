module.exports = {
  evergreen: true,
  theme: require.resolve('../../vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo/logo-dark.svg' }],
    ['link', { rel: 'alternate icon', type: 'image/x-icon', href: '/logo/logo-dark.ico' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Sonic',
      description: '由 Vue.js 构建的管理平台开发模板',
    },
  },

  themeConfig: {
    logo: '/logo/logo-dark.svg',
    nav: [
      { text: '指南', link: '/docs/guide/' },
      {
        text: '文档',
        link: '/docs/',
        items: [
          { text: '快速上手', link: '/docs/' },
        ],
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/docs/guide/',
          '/docs/guide/getting-started',
        ]
      },
      {
        title: '高级指引',
        collapsable: false,
        children: [
          '/docs/advanced/layout',
        ]
      },
    ],
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
}