import * as React from 'react'

import clsx from 'clsx'

import type { CommonProps } from '../types'

import './Display.scss'

export type Props = CommonProps

export const Display: React.FC<Props> = ({
  align = 'inherit',
  color = 'inherit',
  className,
  component = 'h1',
  'data-t': testId = 'typography-display',
  ...rest
}) => {
  const Component = component || 'h1'

  return (
    <Component
      className={clsx('typography-display', className, {
        [`typography-display--align-${align}`]: align !== 'inherit',
        [`typography-display--color-${color}`]: color !== 'inherit',
      })}
      data-t={testId}
      {...rest}
    />
  )
}
