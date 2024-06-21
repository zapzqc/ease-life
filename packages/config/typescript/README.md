# TypeScript 配置

## 安装

```bash
pnpm add -D typescript-config
```

## 配置

在项目根目录下创建 tsconfig.json:

```json
{
  "extends": "@ease-life/typescript-config/base.json",
  // 以下按需配置
  "include": [
    "packages/**/*.ts", 
    "apps/**/*.ts"
  ],
}
```
