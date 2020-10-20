module.exports = {
  evergreen: true,
  theme: require.resolve('../../vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', href: '/logo/logo-icon.png' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Sonic',
      description: '由 Vue.js 构建的管理平台开发模板',
    },
  },

  themeConfig: {
    logo: '/logo/logo.png',
    repo: 'https://github.com/Chinesee/magic-sonic-docs',
    lastUpdated: '最近更新',
    nav: [
      {
        text: '文档',
        link: '/docs/base/',
        items: [
          { text: '快速上手', link: '/docs/base/' },
        ],
      },
      { text: '帮助', link: '/' },
      { text: '关于作者', link: 'https://chinesee.gitee.io/blog-nuxt/' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/docs/base/',
          '/docs/base/getting-started',
          '/docs/base/executable-script',
        ],
      },
      {
        title: '开发',
        collapsable: false,
        children: [
          '/docs/dev/layout',
          '/docs/dev/router-and-nav',
          '/docs/dev/style',
          '/docs/dev/network-request',
        ],
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          '/docs/advanced/environment-variables',
        ],
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          '/docs/other/resource',
          '/docs/other/faq',
          '/docs/other/change-log',
        ],
      },
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
}