# Airbnb 风格的 ESLint

## 安装

```bash
pnpm add -D @ease-life/eslint-config eslint
```

## 配置

在项目根目录下创建 eslint.config.js:

```js
import baseConfig from '@ease-life/eslint-config';

export default [
  ...baseConfig,
  {
    // 自定义配置
  },
];
```
