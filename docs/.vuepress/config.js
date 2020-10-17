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
    lastUpdated: '最近更新',
    nav: [
      {
        text: '文档',
        link: '/docs/guide/',
        items: [
          { text: '快速上手', link: '/docs/guide/' },
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
          '/docs/guide/',
          '/docs/guide/getting-started',
          '/docs/guide/faq',
        ],
      },
      {
        title: '开发',
        collapsable: false,
        children: [
          '/docs/advanced/layout',
        ],
      },
      {
        title: '构建和部署',
        collapsable: false,
        children: [
          '/docs/build/environment-variables',
        ],
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          '/docs/other/resource',
        ],
      },
    ],
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
}