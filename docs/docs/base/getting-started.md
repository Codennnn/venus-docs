# 开始使用

### 写在前面

我们希望你了解关于 HTML、CSS 和 JavaScript 的中级知识，并清楚 Vue.js 的语法，否则使用本项目可能不是一个明智的选择。在你动手开发之前，请先阅读本文档相关的章节，这或许能为你解决不少问题。

### 准备工作

运行 Sonic 需要具备以下开发环境：[yarn](https://yarnpkg.com/)、[node](https://nodejs.org/en/)和[git](https://git-scm.com/)，我们假设你已经了解相关的知识。

### 基础模板

本项目内置了许多功能，这些功能你也许不会用到。为此，我们准备了一个只包含核心功能的[基础模板]()以供你进行更个性化的开发。

### 目录结构

将项目下载到本地后，你应该能看到以下的目录结构。
```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

### 运行项目
#### 安装依赖
```sh
# npm 方式：
npm install

# 如果你使用 yarn，则为：
yarn install
```

#### 启动项目
```sh
npm run start # 或者： yarn start
```

如无意外，打开浏览器访问 [http://localhost:8000]()，就能看到以下界面：