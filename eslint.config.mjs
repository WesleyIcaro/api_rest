import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      eqeqeq: 'off',
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
      'space-in-parens': ['error', 'never']
    }
  }
];
