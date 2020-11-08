const menus = [
  {
    group: '入门',
    menu: [
      { text: '介绍', link: '/docs/base/introduction' },
      { text: '开始使用', link: '/docs/base/getting-started' },
      { text: '可执行命令', link: '/docs/base/scripts' },
    ],
  },
  {
    group: '开发',
    menu: [
      { text: '布局', link: '/docs/dev/layout' },
      { text: '路由和菜单', link: '/docs/dev/router-and-nav' },
      { text: '主题与样式', link: '/docs/dev/style' },
      { text: '权限控制', link: '/docs/dev/permission' },
    ],
  },
  {
    group: '进阶',
    menu: [
      { text: '环境变量', link: '/docs/advanced/env-var' },
      { text: '代码规范', link: '/docs/advanced/code-style' },
      { text: '使用 CDN 资源', link: '/docs/advanced/cdn' },
      { text: '构建和发布', link: '/docs/advanced/deploy' },
    ],
  },
  {
    group: '其他',
    menu: [
      { text: '常见问题', link: '/docs/other/faq' },
      { text: '版本记录', link: 'https://github.com/Chinesee/venus/releases', external: true },
    ],
  },
]


function getNavbar() {
  const nav = [
    {
      text: 'Docs',
      link: '/docs/base/introduction',
      items: menus.map(({ group, menu }) => ({
        text: group,
        items: menu.map(({ text, link }) => ({
          text, link,
        })),
      })),
    },
    { text: 'Blog', link: '/blog/' },
    // { text: 'Plugins', link: '/plugins/' },
    { text: 'Preview', link: 'https://venus.leoku.top/' },
  ]
  return { nav }
}

function getSidebar() {
  const sidebar = menus.map(({ group, menu }) => ({
    title: group,
    collapsable: false,
    sidebarDepth: 0,
    children: menu.map(({ link, text, external }) => {
      if (external) {
        return [link, text]
      }
      return link
    }),
  }))
  return { sidebar }
}

module.exports = {
  evergreen: true,
  // theme: 'vuepress-theme-sonic',
  theme: require.resolve('../../vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Venus',
      description: 'Venus 是由 Vue.js 驱动的中后台系统模板，凝聚了许多常用功能的具体实现，优秀的设计语言和高质量的代码绝对能让你眼前一亮',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/Chinesee/magic-sonic-docs',
    lastUpdated: '最近更新',
    ...getNavbar(),
    ...getSidebar(),
    blog: [
      '/blog/deploy-vue-app-to-github-pages',
      // '/blog/vue-optimization',
      // '/blog/why-venus',
      // '/blog/how-do-i-create-venus',
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  },

  markdown: {
    anchor: { level: 2 },
  },

  plugins: ['@vuepress/medium-zoom'],

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
}
