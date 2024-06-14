/* eslint-disable no-underscore-dangle */
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
// import eslintImport from 'eslint-plugin-import';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...fixupConfigRules(flatCompat.extends('airbnb-base')),
  ...flatCompat.extends('airbnb-typescript/base'),
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    // 配置需要被忽略的文件，替代之前的 .eslintignore 文件
    ignores: [
      '.idea',
      '.vscode',
      '**/dist/',
    ],
    files: ['**/*.{js,jsx,mjs,cjs,ts,ts,vue}'],
  },
  {
    // plugins: {
    //   import: eslintImport, // 添加了 airbnb-base 就不用再加这个了
    // },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    languageOptions: {
      globals: {
        ...globals.node, // 'process' is not defined.
      },
    },
  },
  {
    files: ['eslint.config.js', 'vite.config.js', 'stylelint.config.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'max-len': ['error', 200],
    },
  },
);
