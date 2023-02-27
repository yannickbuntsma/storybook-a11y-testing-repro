import * as React from 'react'

import clsx from 'clsx'

import type { CommonProps } from '../types'

import './Text.scss'

type VariantMap = {
  body: keyof Pick<React.ReactHTML, 'p'>
  'body-head': keyof Pick<React.ReactHTML, 'strong'>
  caption: keyof Pick<React.ReactHTML, 'small'>
  'caption-head': keyof Pick<React.ReactHTML, 'strong'>
  link: keyof Pick<React.ReactHTML, 'span'>
  list: keyof Pick<React.ReactHTML, 'span'>
}

export const variantMap: VariantMap = {
  body: 'p',
  'body-head': 'strong',
  caption: 'small',
  'caption-head': 'strong',
  link: 'span',
  list: 'span',
}

export type Props = CommonProps & {
  variant?: keyof VariantMap
}

export const Text: React.FC<Props> = ({
  align = 'inherit',
  className,
  color = 'inherit',
  component,
  variant = 'body',
  'data-t': testId = 'typography-text',
  ...rest
}) => {
  const Component = component || variantMap[variant]

  return (
    <Component
      className={clsx('typography-text', `typography-text--${variant}`, className, {
        [`typography-text--align-${align}`]: align !== 'inherit',
        [`typography-text--color-${color}`]: color !== 'inherit',
      })}
      data-t={testId}
      {...rest}
    />
  )
}
