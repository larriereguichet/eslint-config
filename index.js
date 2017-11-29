'use strict'

module.exports = {
  'extends': [
    './rules'
  ].map(require.resolve),
  'globals': {
    'console': false
  },
  'rules': {
    'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }]
  }
}
