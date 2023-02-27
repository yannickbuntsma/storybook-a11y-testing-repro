import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

/**
 * TODO: Investigate why this doesn't seem to be working (setting the font family, at least).
 */
addons.setConfig({
  theme: {
    ...themes.light,
    fontBase: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
})
