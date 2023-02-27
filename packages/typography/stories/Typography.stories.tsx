import * as React from 'react'

import { ComponentStory } from '@storybook/react'

import { Display } from '../src/Display.js'
import { Heading, variantMap as headingVariantMap } from '../src/Heading.js'
import { Text, variantMap as textVariantMap } from '../src/Text.js'

export default {
  title: 'Foundations/Typography',
}

const TEST_TEXT = 'The quick brown fox jumps over the lazy dog'

const headingVariants = Object.keys(headingVariantMap) as unknown as Array<
  keyof typeof headingVariantMap
>
const textVariants = Object.keys(textVariantMap) as unknown as Array<keyof typeof textVariantMap>

export const DisplayStory: ComponentStory<typeof Display> = (args) => <Display {...args} />
DisplayStory.storyName = 'Display'
DisplayStory.argTypes = {
  children: {
    control: 'text',
    defaultValue: TEST_TEXT,
  },

  align: {
    options: ['left', 'center', 'right', 'inherit'],
    control: 'radio',
    defaultValue: 'inherit',
  },
}

export const HeadingStory: ComponentStory<typeof Heading> = (args) => <Heading {...args} />
HeadingStory.storyName = 'Heading'
HeadingStory.argTypes = {
  children: {
    control: 'text',
    defaultValue: TEST_TEXT,
  },
  variant: {
    options: headingVariants,
    control: 'radio',
    defaultValue: headingVariants[0],
  },
}

export const TextStory: ComponentStory<typeof Text> = (args) => <Text {...args}>{TEST_TEXT}</Text>
TextStory.storyName = 'Text'
TextStory.argTypes = {
  children: {
    control: 'text',
    defaultValue: TEST_TEXT,
  },
  variant: {
    options: textVariants,
    control: 'radio',
    defaultValue: textVariants[0],
  },
}

export const Overview: ComponentStory<(props: { children: string }) => JSX.Element> = (args) => {
  const cellStyle = { padding: '0.5rem' }

  return (
    <div>
      <table id="headings" style={{ textAlign: 'left' }}>
        <caption style={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Heading>Heading</Heading>
        </caption>
        <tbody>
          {headingVariants.map((variant) => (
            <tr key={variant}>
              <th style={cellStyle}>
                <Text>{variant}</Text>
              </th>
              <td style={cellStyle}>
                <Heading variant={variant}>{args.children}</Heading>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr style={{ margin: '2rem 0' }} />

      <table id="texts" style={{ textAlign: 'left' }}>
        <caption style={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Heading>Text</Heading>
        </caption>
        <tbody>
          {textVariants.map((variant) => (
            <tr key={variant}>
              <th style={cellStyle}>
                <Text>{variant}</Text>
              </th>
              <td style={cellStyle}>
                {/* Remove the margin of the regular paragraph text, so all elements align nicely in Storybook. */}
                <Text variant={variant} style={{ margin: 0 }}>
                  {args.children}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Overview.argTypes = {
  children: {
    control: 'text',
    defaultValue: TEST_TEXT,
  },
}
