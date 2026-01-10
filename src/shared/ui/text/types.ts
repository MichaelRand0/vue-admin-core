export interface TextProps {
  tag?: 'div' | 'span' | 'p'
  size?: '44' | '21' | '16' | '14' | '12'
  colorPreset?: 'primary' | 'link'
  color?: string
  font?: 'Roboto-400' | 'Roboto-500' | 'Roboto-700'
  className?: string
  hover?: boolean
}
