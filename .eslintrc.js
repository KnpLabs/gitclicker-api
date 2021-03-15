module.exports = {
  'env': {
    'es2021': true,
    'jest': true,
    'node': true
  },
  'plugins': [
    '@typescript-eslint',
    'unused-imports',
    'security',
    'promise'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:security/recommended',
    'plugin:promise/recommended'
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'eqeqeq': ['error', 'smart'],
    'keyword-spacing': 'error',
    'comma-spacing': 'error',
    'arrow-spacing': 'error',
    'newline-before-return': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }],
    'space-in-parens': ['error', 'never'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'ignoredNodes': ['JSXElement'] }],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'brace-style': ['error'],
    'no-return-await': 'error',
    'curly': ['error', 'multi-line'],
    'space-infix-ops': 'error',
    'quotes': ['error', 'single'],
    'no-restricted-globals': 'error',
    'yoda': 'error',
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],
    'no-mixed-operators': 'error',
    'import/no-unresolved': 0,
    'import/no-anonymous-default-export': 'error',
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 'error',
    'import/export': 'error',
    'import/order': 'error',
    'import/newline-after-import': ['error', { 'count': 1 }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error'
  }
}
