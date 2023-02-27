const path = require('path')

/**
 * TODO: Want to add:
 * "plugin:jest/recommended"
 * "plugin:jest/style" (optional)
 * "plugin:jsx-a11y/recommended"
 */
module.exports = {
  extends: [
    './rules/typescript',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y',
    './rules/import',
    './rules/prettier',
  ].map(require.resolve),
  rules: {
    'object-shorthand': ['error', 'properties'],
  },
  parserOptions: {
    project: path.join(process.cwd(), '/tsconfig.json'),
  },
}
