module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],

  rules: {
    // TODO: Get this to "error",
    // !!!: Set to "error" in this repository
    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/no-var-requires': 'off',

    // issues with async functions in tests
    '@typescript-eslint/await-thenable': 'off',

    // TODO: Let ESLint auto-fix
    '@typescript-eslint/no-inferrable-types': 'off',

    // issues with act() in tests
    '@typescript-eslint/no-floating-promises': 'off',

    // hard to manage without "noImplicitAny: false"
    '@typescript-eslint/no-unsafe-return': 'off',

    '@typescript-eslint/restrict-template-expressions': 'off',

    // e.g. interface A extends B {} -- we do this a lot
    '@typescript-eslint/no-empty-interface': 'off',

    // e.g. /// <reference path="./tokens.d.ts"/> -- used in Fusion typings
    '@typescript-eslint/triple-slash-reference': 'warn',

    // we still cheat sometimes
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Use const over let for consistency
    '@typescript-eslint/prefer-as-const': 'warn',

    '@typescript-eslint/prefer-regexp-exec': 'warn',

    '@typescript-eslint/require-await': 'warn',

    '@typescript-eslint/restrict-plus-operands': 'warn',

    '@typescript-eslint/dot-notation': 'error',

    // We prefer to have TS infer types when possible
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // turned off in favor of the next one, see '@typescript-eslint/no-unused-vars' GitHub docs
    'no-unused-vars': 'off',
    // ignore underscores for skipped params
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
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
        /**
         * Sometimes we use namespaces in test files to satisfy typescript when using certain global types (like Jest or NodeJS).
         */
        '@typescript-eslint/no-namespace': 'off',
        /**
         * Often we set methods to empty functions in test and Storybook files. We might want
         * to transition to using jest.fn() in tests though.
         */
        '@typescript-eslint/no-empty-function': 'off',
        /**
         * In tests it sometimes is necessary to pass in a weird value that doesn't match the type.
         */
        '@typescript-eslint/ban-ts-comment': 'off',
        /**
         * In tests we use mock data of which we know that certain properties exist, even though
         * their types indicate otherwise. If the property turns out to not exist the test will
         * fail anyway, so it's safe to turn off this warning for test files (and Storybook files).
         */
        '@typescript-eslint/no-non-null-assertion': 'off',
        /**
         * Instead of `addOnInfo.price?.originalPrice!` (optional chaining), we might want to
         * transition to `addOnInfo.price!.originalPrice!` (no optional chaining).
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      },
    },
  ],
}
