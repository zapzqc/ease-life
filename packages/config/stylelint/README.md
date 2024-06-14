# 自定义的 stylelint 配置

## 安装

```bash
pnpm add -D @ease-life/stylelint-config
```

安装所需依赖

```bash
pnpm add -D postcss-html stylelint-config-sass-guidelines stylelint-config-standard stylelint-config-standard-scss stylelint-order stylelint-scss
```

## 配置

在项目根目录下创建 stylelint.config.js:

```js
import baseConfig from '@ease-life/stylelint-config';

export default {
  ...baseConfig,
  // 自定义配置
};
```
