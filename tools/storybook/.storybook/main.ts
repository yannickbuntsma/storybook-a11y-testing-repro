import path from 'path'

import type { StorybookConfig } from '@storybook/core-common'
import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
  // stories: [
  //   {
  //     // 👇 The directory field sets the directory your stories
  //     directory: '../packages/',
  //     // 👇 The titlePrefix field will generate automatic titles for your stories
  //     titlePrefix: 'MyComponents',
  //     // 👇 Storybook will load all files that contain the stories extension
  //     files: '*.stories.*',
  //   },
  // ],
  /**
   * VITE
   */
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    /**
     * Without this, it will take Storybook an age to load when using builder-vite.
     * https://github.com/storybookjs/storybook/issues/6416
     */
    return {
      ...config,
      resolve: {
        ...config.resolve,
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        // Entries are specified relative to the root
        entries: [
          `${path.relative(config.root ?? '', path.resolve(__dirname, '../src'))}/**/*.stories.tsx`,
        ],
        include: [...(config.optimizeDeps?.include ?? []), '@storybook/addon-docs/blocks'],
      },
    }
  },

  /**
   * REST
   */
  stories: ['../../../packages/**/stories/**/*.stories.tsx'],
  staticDirs: ['../static'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
  ],
  // core: {
  //   builder: '@storybook/builder-vite',
  // },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: '@storybook/react',
  features: {
    /**
     * Load stories on demand.
     * Keeping this disabled until our Storybook grows bigger and we might gain performance benefits from it.
     * https://storybook.js.org/docs/react/configure/overview#on-demand-story-loading
     */
    // storyStoreV7: true,
    /**
     * https://storybook.js.org/docs/react/configure/babel#v7-mode
     */
    // babelModeV7: true,
  },
  // webpackFinal: async (config) => {
  //   /**
  //    * framer-motion uses the .mjs notation and we need to include it so that webpack will
  //    * transpile it for us correctly.
  //    */
  //   config.module?.rules.push({
  //     test: /\.mjs$/,
  //     include: /node_modules/,
  //     type: 'javascript/auto',
  //   })

  //   return config
  // },
}

module.exports = config
