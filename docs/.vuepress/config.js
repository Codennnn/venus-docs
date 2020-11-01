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
      { text: '样式', link: '/docs/dev/style' },
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
      { text: '版本记录', link: 'https://leoku.top', external: true },
    ],
  },
]

module.exports = {
  evergreen: true,
  // theme: 'vuepress-theme-sonic',
  theme: require.resolve('../../../vuepress-theme-sonic/vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Venus',
      description: 'Venus 是由 Vue.js 构建的网站开发模板，可帮助你快速搭建一个后台管理系统。',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/Chinesee/magic-sonic-docs',
    lastUpdated: '最近更新',
    ...getNavbar(),
    ...getSidebar(),
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  },

  markdown: {
    anchor: { level: 2 },
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
}

function getNavbar() {
  const nav = [
    {
      text: '文档',
      link: '/docs/base/introduction',
      items: menus.map(({ group, menu }) => ({
        text: group,
        items: menu.map(({ text, link }) => ({
          text, link,
        })),
      })),
    },
    { text: '帮助', link: '/' },
    { text: '关于', link: 'https://chinesee.gitee.io/blog-nuxt/' },
  ]
  return { nav }
}

function getSidebar() {
  const sidebar = menus.map(({ group, menu }) => ({
    title: group,
    collapsable: false,
    children: menu.map(({ link, text, external }) => {
      if (external) {
        return [link, text]
      }
      return link
    }),
  }))
  return { sidebar }
}