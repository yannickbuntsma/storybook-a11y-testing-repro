// TODO: Make use of @yannick/eslint-config-frontend
// !!!: This did not seem to work properly, so copied the settings manually

const path = require('path')

/**
 * TODO: Want to add:
 * "plugin:jest/recommended"
 * "plugin:jest/style" (optional)
 * "plugin:jsx-a11y/recommended"
 */

module.exports = {
  extends: ['./rules/typescript', './rules/import', './rules/prettier'].map(require.resolve),
  rules: {
    'object-shorthand': ['error', 'properties'],
    'multiline-comment-style': 'error',
  },
  parserOptions: {
    project: path.join(process.cwd(), '/tsconfig.json'),
  },
}
