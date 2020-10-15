module.exports = {
  evergreen: true,
  theme: require.resolve('../../vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', href: '/logo/logo-dark.svg', media: '(prefers-color-scheme:light)' }],
    ['link', { rel: 'icon', href: '/logo/logo-light.ico', media: '(prefers-color-scheme:dark)' }],
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
    '/en/': {
      lang: 'en-US',
      title: 'Sonic',
      description: 'Vue-powered Static Site Generator',
    },
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
}