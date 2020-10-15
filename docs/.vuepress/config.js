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
      description: 'Vue 驱动的静态网站生成器',
    },
  },

  themeConfig: {
    logo: '/logo/logo-dark.svg',
    nav: [
      { text: '指南', link: '/docs/guide/' },
      {
        text: '文档',
        link: '/docs/layout/',
        items: [
          { text: '开始', link: '/docs/layout/' }
        ],
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/docs/layout/',
    ],
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
}