module.exports = {
  title: 'Hello VuePress1',
  description: 'Just playing around',
  theme: require.resolve('../../vuepress-theme-sonic/'),
  evergreen: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
}