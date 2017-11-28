'use strict'

module.exports = {
  'extends': [
    'eslint:recommended',
    'airbnb',
    'prettier'
  ].map(require.resolve),
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'generators': true,
      'ecmaVersion': 6,
      'sourceType': 'module',
      'modules': true
    }
  },
  'plugins': [
    'prettier'
  ],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'tabWidth': 2,
        'trailingComma': 'es5',
        'printWidth': 100
      }
    ],
    'no-undef': ['error', { 'typeof': false }],
    'no-underscore-dangle': ['warn', { 'allowAfterThis': true, 'allow': ['_error'] }],
    'no-useless-constructor': 'off',
    'no-confusing-arrow': 'off',
    'no-param-reassign': 'warn',
    'no-return-assign': 'off',
    'no-constant-condition' : ['warn', { 'checkLoops': false }],
    'func-names': 'off',
    'eqeqeq': 'warn',
    'max-len': 'warn',
    'quote-props': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-nested-ternary': 'warn',
    'linebreak-style': 'off',
    'valid-typeof': 'warn',
    'comma-dangle': ['warn', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore'
    }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-bitwise': 'warn',
    'camelcase': 'warn',
    'import/prefer-default-export': 'off'
  }
}