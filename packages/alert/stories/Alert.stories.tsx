import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Alert } from '../src/Alert.js'

const Grid = ({ children }: any) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '2rem',
    }}
  >
    {children}
  </div>
)

const Cell = ({ children, style }: any) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
    {children}
  </div>
)

export default {
  /*
   * 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-isLoading
   * to learn how to generate automatic titles
   */
  title: 'Alert',
  component: Alert,
  args: {
    type: 'info',
    maxWidth: '25rem',
  },
  argTypes: {
    type: {
      options: ['info', 'warning', 'error', 'success', 'neutral'],
      control: 'radio',
    },
    maxWidth: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Alert>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    <Alert.Title>Title</Alert.Title>
    <Alert.Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt distinctio maxime ullam
      vitae autem esse numquam, accusamus est assumenda voluptates repellat in tempora, et saepe
      iure debitis aperiam velit asperiores voluptatum fugiat! Ut quas aperiam impedit ipsum
      provident corrupti fuga?
    </Alert.Text>
  </Alert>
)

export const Default = Template.bind({})

Default.args = {
  children: 'Some message',
  type: 'info',
}

const TEXT =
  'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam iaculis elit nec ultricies vehicula.'

export const Overview = () => {
  return (
    <Grid style={{ minWidth: 900 }}>
      <Cell>
        <Alert type="info">
          <Alert.Title>Info</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
      <Cell>
        <Alert type="warning">
          <Alert.Title>Warning</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
      <Cell>
        <Alert type="error">
          <Alert.Title>Error</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
      <Cell>
        <Alert type="success">
          <Alert.Title>Success</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
      <Cell>
        <Alert type="neutral">
          <Alert.Title>Neutral</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
          <Alert.Title>More info</Alert.Title>
          <Alert.Text>Lorem ipsum dolor sit amet.</Alert.Text>
        </Alert>
      </Cell>
    </Grid>
  )
}

export const EdgeCases = () => {
  return (
    <Grid style={{ minWidth: 900 }}>
      <Cell>
        <Alert type="info">
          <Alert.Title>A very long title that will span multiple lines</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
      <Cell>
        <Alert type="info">
          <Alert.Title>A very long title that will span multiple lines</Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
          <Alert.Title>
            Also an extra title that indicates that there is a following section
          </Alert.Title>
          <Alert.Text>{TEXT}</Alert.Text>
        </Alert>
      </Cell>
    </Grid>
  )
}
