import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'eqeqeq': 'off',
      'no-unused-vars': 'error',
      'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
      'semi': ['error', 'always'],
      'no-undef': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'no-console': 'warn',
      'no-multiple-empty-lines': ['error', { 'max': 1}],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'space-in-parens': ['error', 'never'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-unused-expressions': 'error',
      'space-before-function-paren': ['error', 'never'],
      'block-spacing': 'error',
      'no-empty-function': 'error',
      'no-empty': 'error',
      'no-alert': 'warn',
      'no-var': 'error',
      'no-duplicate-imports': ['error', { 'includeExports': true }],
      'camelcase': 'error',
    },
  },
];
