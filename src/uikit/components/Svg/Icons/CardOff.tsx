import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83l-2-2zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z"></path>
    </Svg>
  )
}

export default Icon
