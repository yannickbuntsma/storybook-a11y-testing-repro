import type { HTMLAttributes } from 'react'

export type HtmlComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p'

export type CommonProps = {
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'text-primary' | 'text-secondary' | 'alt'
  component?: keyof Pick<React.ReactHTML, HtmlComponent>
  className?: string
  role?: string
  'aria-level'?: number
  'data-t'?: string
} & HTMLAttributes<HTMLElement>
