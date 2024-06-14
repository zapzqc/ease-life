import baseConfig from '@ease-life/eslint-config';

export default [
  ...baseConfig,
  {
    // 屏蔽 web components 组件库的 eslint 规则
    files: ['packages/web-components/**/*.ts', 'apps/storybook/src/my-element.ts'],
    rules: {
      'import/extensions': [
        'error',
        { js: 'always' },
      ],
      'import/prefer-default-export': 'off',
      'no-restricted-exports': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/indent': 'off',
    },
  },
];
