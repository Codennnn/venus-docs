module.exports = {
  evergreen: true,
  theme: require.resolve('../../vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo/logo-dark.svg', media: '(prefers-color-scheme:light)' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo/logo-light.svg', media: '(prefers-color-scheme:dark)' }],
    ['link', { rel: 'alternate icon', href: '/logo/logo-dark.ico', media: '(prefers-color-scheme:light)' }],
    ['link', { rel: 'alternate icon', href: '/logo/logo-light.ico', media: '(prefers-color-scheme:dark)' }],
    ['link', { rel: 'mask-icon', href: '/logo/logo-dark.svg', color: '#515151' }],
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