console.log('CONIFG')
import { injectAxe, checkA11y } from 'axe-playwright'
import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  async preRender(page, context) {
    await injectAxe(page)
  },
  async postRender(page, context) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}

module.exports = config
