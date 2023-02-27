import React from 'react'

import { AriaDialogProps, useDialog } from 'react-aria'

import { Text } from '@yannick/typography/Text'

import './Alert.scss'

type Children =
  | React.ReactNode
  | React.ReactNode[]
  | Array<React.ReactElement<React.ComponentProps<typeof Title>, typeof Title>>
  | Array<React.ReactElement<React.ComponentProps<typeof BodyText>, typeof BodyText>>

export interface Props extends AriaDialogProps {
  children?: Children
  className?: string

  /**
   * Alerts of type "error" are by default announced to the screen reader.
   */
  type?: 'info' | 'warning' | 'error' | 'success' | 'neutral'

  /**
   * The known name of one of the ikki UI icons.
   */
  icon?: string

  /**
   * @TODO: Decide if we want to expose props like this (on multiple components).
   * Minimum width the component will shrink to.
   */
  minWidth?: CSSStyleDeclaration['minWidth']

  /**
   * @TODO: Decide if we want to expose props like this (on multiple components).
   * Maximum width the component will shrink to.
   */
  maxWidth?: CSSStyleDeclaration['maxWidth']
}

export const Alert = (p: Props) => {
  const ref = React.useRef(null)
  const props: Partial<Props> = {
    type: 'info',
    ...p,
  }

  const { dialogProps, titleProps } = useDialog(props, ref)

  const { children, className, type, minWidth, maxWidth } = props

  return (
    <div
      {...dialogProps}
      className={['alert', `alert--type-${type}`, className].filter(Boolean).join(' ')}
      style={{ minWidth, maxWidth }}
    >
      <div className="alert__main">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          if (child.type === Alert.Title) {
            return <Title {...titleProps} {...child.props} />
          }

          if (child.type === Alert.Text) {
            return <BodyText {...child.props} />
          }

          return child
        })}
      </div>
    </div>
  )
}

function Title(titleProps: ReturnType<typeof useDialog>['titleProps']) {
  return <Text {...titleProps} variant="body-head" />
}

function BodyText(props: React.ComponentProps<typeof Text>) {
  return <Text {...props} variant="body" />
}

Alert.Title = Title
Alert.Text = BodyText
