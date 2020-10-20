# 样式

Sonic 使用 [`SCSS`](https://www.sass.hk/) 作为 CSS 扩展语言。

### 样式结构

Sonic 中所有的通用样式都放置在 `@/assets/scss` 下。
```sh
assets
├── scss
│   ├── common.scss              # 全局通用样式
│   ├── highlight.scss           # 代码块高亮样式
│   ├── reset.scss               # 全局覆盖样式
│   ├── tailwind.scss            # tailwind 的样式配置
│   └── variables.scss           # 全局样式变量
```