import styled from 'styled-components'
import Text from '../Text/Text'
import { tags, scales, HeadingProps } from './types'

const style = {
  [scales.MD]: {
    fontSize: '18px',
    fontSizeLg: '18px',
  },
  [scales.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px',
  },
  [scales.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [scales.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px',
  },
}

const Heading = styled(Text).attrs({ bold: true }) <HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  line-height: 1.25;
  margin-bottom: 0.5rem;
  color: ${({ color, theme }) => theme.colors[color || 'text']};
  text-align: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`

Heading.defaultProps = {
  as: tags.H2,
}

export default Heading
