import * as React from 'react'

import clsx from 'clsx'

import type { CommonProps, HtmlComponent } from '../types'

import './Heading.scss'

type VariantMap = {
  large: keyof Pick<React.ReactHTML, 'h1'>
  medium: keyof Pick<React.ReactHTML, 'h2'>
  small: keyof Pick<React.ReactHTML, 'h3'>
  smallest: keyof Pick<React.ReactHTML, 'h4'>
  subheading1: keyof Pick<React.ReactHTML, 'h5'>
  subheading2: keyof Pick<React.ReactHTML, 'h6'>
}

export const variantMap: VariantMap = {
  large: 'h1',
  medium: 'h2',
  small: 'h3',
  smallest: 'h4',
  subheading1: 'h5',
  subheading2: 'h6',
}

export type Props = CommonProps & {
  visualHeadingOnly?: boolean
  variant?: keyof VariantMap
}

export const Heading: React.FC<Props> = ({
  align = 'inherit',
  className,
  color = 'inherit',
  component,
  visualHeadingOnly = false,
  variant = 'large',
  'data-t': testId = 'typography-heading',
  ...rest
}) => {
  const mappedVariant = variantMap[variant]
  const Component = component || mappedVariant
  const hasAria = component === ('div' as HtmlComponent) && !visualHeadingOnly

  return (
    <Component
      {...(hasAria && {
        role: 'heading',
        'aria-level': mappedVariant ? parseInt(mappedVariant.substring(1), 10) : 2,
      })}
      className={clsx('typography-heading', `typography-heading--${variant}`, className, {
        [`typography-heading--align-${align}`]: align !== 'inherit',
        [`typography-heading--color-${color}`]: color !== 'inherit',
      })}
      data-t={testId}
      {...rest}
    />
  )
}
