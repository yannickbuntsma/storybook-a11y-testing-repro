module.exports = {
  plugins: ['eslint-plugin-import', 'simple-import-sort'],

  rules: {
    /**
     * There seems to be no great way to make this rule work properly in monorepos.
     * See this GitHub issue: https://github.com/benmosher/eslint-plugin-import/issues/1650
     *
     * As an alternative, { "settings": "import/internal-regex": [...] } makes ESLint treat these
     * dependencies as internal and prevents "import/no-extraneous-dependencies" from throwing the error.
     * See: https://github.com/benmosher/eslint-plugin-import#importinternal-regex
     */
    'import/no-extraneous-dependencies': 'error',

    /**
     * Adding extra rules or settings not included in extended rulesets.
     */
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Packages. `react` package comes first.
          ['^react$'],
          // NPM packages and Our test utils imports in test files.
          ['^@?\\w', '~/test-utils.*'],
          // Internal packages.
          ['^(@yannick|@yannick)(/.*|$)'],
          // Parent imports. Put `..` last.
          /*
           * There seems to be an issue with sorting relative imports, so this
           * is a bit of a hacky workaround. See sorting issue here:
           * https://github.com/lydell/eslint-plugin-simple-import-sort/issues/50
           */
          [...Array.from({ length: 10 }, (_, i) => '^../' + '../'.repeat(i)).reverse(), '^./', '^'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.ts',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
      ],
      rules: {
        // Turn this check off for non src related files as we use global utils here sometimes
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
