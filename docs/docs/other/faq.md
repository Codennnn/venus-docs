---
---

# 常见问题

### 如何代理到后端服务器？

```js
{
  ...
  proxy:{
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' }, // /server/api/currentUser -> /api/currentUser
    },
  },
  ...
}
```