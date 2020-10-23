# 网络请求

受益于 Vue 带来的前端和服务端分离的开发模式，我们可以更加关注如何利用数据来渲染页面。前端只需要编写 API，通过 API 向服务端发起请求来获取数据并展示。做这件事的方法有好几种，而使用基于 promise 的 HTTP 客户端 [axios](https://github.com/axios/axios) 则是其中非常流行的一种。

## 封装 API

使用 axios 我们可以很轻松地设置 `拦截器`、`错误处理`、`超时处理` 等功能。为了对接口进行统一的处理，在 `@/plugins/axios.js` 文件中我们创建了一个唯一的 axios 实例并将其导出。接下来，我们就可以通过引入 axios 实例来创建接口函数，像这样：
```js
import request from '@/plugins/axios'

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}
```

所有的接口都被放在 `@/api` 下，按模块组织。

## 模拟请求
