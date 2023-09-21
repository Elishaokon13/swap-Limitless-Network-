import * as React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-153 200 620 152" {...props}>
      <defs>
        <style>.st0{`{fill:${props.color};}`}</style>
      </defs>
      <path
        d="M-130.3,297.1c-0.3,2.9-0.9,5.7-1.8,8.4c4.3,3.5,9.8,5.4,15.3,5.4c12.8,0,23.3-8,23.3-21.4c0-20.1-29.4-13.1-29.4-30.3
	c0-6.1,5-11.1,11.2-11c0.2,0,0.4,0,0.7,0c5.2,0,9.7,3.3,11.4,8.1h1c0.7-2.6,1.5-5.2,2.5-7.7c-3.8-3-8.6-4.6-13.4-4.6
	c-11.3,0.1-20.9,6-20.9,18.1c0,21.3,29.5,13.8,29.5,31.1c0.3,7.3-5.4,13.5-12.7,13.8c-0.1,0-0.2,0-0.3,0c-6.6,0-12.5-3.9-15.2-9.8
	H-130.3z M-47.6,300.1c-3.6,3.8-8.5,6.1-13.8,6.5c-11.4,0-17.1-9.2-16.3-19.6h13.3c6.3,0,12.7,0,19.1,0.3c1-15.7-8.6-22.9-19.1-22.9
	c-14,0-21.5,10.1-21.5,22.9c0,14.6,9.2,22.9,22.2,22.9c5.8-0.1,11.4-1.9,16.1-5.2L-47.6,300.1z M-77.8,283.5
	c0.6-7.9,4.6-16.4,13.3-16.4s11.6,8.2,11.7,16.4H-77.8z M0.4,300.1c-3.6,3.8-8.5,6.1-13.8,6.5c-11.4,0-17.1-9.2-16.2-19.6h13.3
	c6.3,0,12.7,0,19.1,0.3c0.9-15.7-8.7-22.9-19.1-22.9c-14,0-21.6,10.1-21.6,22.9c0,14.6,9.2,22.9,22.2,22.9c5.7-0.1,11.3-1.9,16-5.2
	L0.4,300.1z M-29.8,283.5c0.6-7.9,4.6-16.4,13.3-16.4s11.6,8.2,11.7,16.4H-29.8z M17.9,239.1c-1.4,0-2.5,0.3-3.8,0.3s-2.5,0-3.8-0.3
	v70.5c1.2,0,2.4-0.3,3.8-0.3c1.3,0,2.3,0,3.8,0.3v-19c0-4.1,1.3-4.4,3.4-2c6,6.9,13.4,15.3,18,21.2c1.5,0,3-0.3,4.6-0.3
	s2.8,0,4.6,0.3v-0.5c-7.4-8.5-15.4-17.9-22.1-25.7c8.6-8.2,16.9-14.8,20.7-18.4v-0.6c-1.4,0-2.6,0.3-3.7,0.3c-1.1,0-2.6,0-3.8-0.3
	l-7.2,8.3l-5.8,5.9c-1.2,1.2-6.2,6.6-8.2,5.6c-0.8-0.5-0.5-1.9-0.5-3.1V239.1z M63.1,264.8c-1.4,0-2.5,0.3-3.8,0.3
	c-1.2,0-2.5,0-3.8-0.3v44.8c1.2,0,2.5-0.3,3.8-0.3c1.3,0,2.4,0,3.8,0.3V264.8z M64.1,248.7c-0.1-2.5-2.1-4.5-4.6-4.6
	c-2.6,0-4.8,2.1-4.8,4.8s2.1,4.8,4.8,4.8c2.5-0.1,4.5-2.1,4.6-4.6 M71.2,309.6c1.2,0,2.4-0.3,3.8-0.3s2.3,0,3.8,0.3v-21.7
	c0-11.6,2.5-18.8,12.3-18.8c8.8,0,10.4,6.9,10.4,15.6v24.9c1.2,0,2.4-0.3,3.8-0.3s2.3,0,3.8,0.3v-27c0-12.4-4.2-18.4-15.1-18.4
	c-6.4,0-12.2,3.5-15.1,9.2v-8.6c-1.4,0-2.5,0.3-3.8,0.3c-1.2,0-2.5,0-3.8-0.3V309.6z M135.2,309c7,0,13.8,0.7,13.8,10.5
	c0,8.9-8.1,12-14.9,12c-7.8,0-13.5-3.8-13.5-11.4C120.6,312.5,125.2,308.9,135.2,309 M155.1,264.5c-2.3,0.3-4.5,0.3-6.8,0l-13-0.5
	c-13.8-0.5-19,5.8-19,15c-0.2,6,3.5,11.4,9.2,13.4c-3.7,1.6-6.5,3.6-6.5,8.1c0,5.7,3,7.2,5.7,7.6v0.7c-5.8,0.5-10.1,5.6-9.8,11.4
	c0,9.9,9.2,13.8,17,13.8c14.4,0,23.9-7.5,23.9-18.4c0-8-5.1-12.5-16.2-12.5h-6.1c-5.6,0-9.2-0.6-9.2-4.6c0-5.5,5.6-4.6,6.7-4.6
	c10.9,0,20.1-4.4,20.1-14.6c-0.1-4.9-2.5-9.6-6.5-12.4l10.3,0.9L155.1,264.5z M123.4,279.1c0-7.2,3.8-12.3,10.6-12.3
	s10.1,5.6,10.1,12.8c0.7,6-3.6,11.5-9.6,12.2c-0.3,0-0.5,0.1-0.8,0.1C126.8,291.9,123.1,285.8,123.4,279.1 M216,244h-2.2l-29.2,65.6
	c1.1,0,2.1-0.3,3.3-0.3c1.2,0,2.2,0,3.5,0.3c2.6-8.9,6-17.1,9.2-25.4h23.9c3.8,8.6,7.1,17.6,9.9,25.4c1.6,0,3.2-0.3,5-0.3
	s3.1,0.3,5,0.3L216,244z M223.1,280.4h-20.7l10.2-24.1L223.1,280.4z M251.2,309.6c1.2,0,2.5-0.3,3.8-0.3c1.3,0,2.4,0,3.8,0.3v-70.5
	c-1.4,0-2.5,0.3-3.8,0.3c-1.2,0-2.5,0-3.8-0.3V309.6z M274.3,288.5c0-8.8,2.8-21.1,13.8-21.1c10.1,0,13,9.5,13,18.7
	c0,10.9-3.4,20.4-12.9,20.4S274.4,298.6,274.3,288.5 M274.4,301.5L274.4,301.5c2.5,5.7,8.3,9.3,14.5,9.2c12.1,0,20.3-9.2,20.3-24.7
	c0-11.3-6.8-21.5-18.9-21.5c-7-0.6-13.5,3.5-15.9,10.1l0,0v-9.6c-1.4,0-2.5,0.3-3.8,0.3s-2.5,0-3.8-0.3v69.1c1.2,0,2.4-0.3,3.8-0.3
	s2.3,0.2,3.8,0.3V301.5z M317.3,309.6c1.2,0,2.4-0.3,3.8-0.3s2.3,0,3.8,0.3v-25.4c0-9.8,3.9-15.1,12.3-15.1
	c8.5,0,10.4,5.2,10.4,15.6v24.9c1.2,0,2.4-0.3,3.8-0.3c1.3,0,2.3,0,3.8,0.3v-27c0-11.8-4.2-18.4-15.1-18.4
	c-6.4-0.1-12.2,3.5-15.1,9.2v-34.3c-1.4,0-2.5,0.3-3.8,0.3s-2.5,0-3.8-0.3L317.3,309.6z M396.5,280c0-10.6-5.4-15.8-15.2-15.8
	c-5.5,0.1-10.7,1.9-15.1,5.1v5.3h1c2.1-4.2,6.5-6.7,11.2-6.4c5.5-0.6,10.4,3.4,11,8.9c0.1,0.7,0.1,1.4,0,2.1c0,4.6-2.5,5-10,6.3
	c-8.9,1.4-17.4,2.8-17.4,13.5c0.1,6.5,5.5,11.6,12,11.5c0.2,0,0.3,0,0.5,0c5.2,0,10.2-2.1,13.8-5.9l0.8-0.8c0.7,5.6,4.6,6.3,9.7,5.5
	c1-0.2,1.9-0.6,2.8-1v-2.1c-5.6,1.2-5.3-0.7-5.3-4.3L396.5,280z M389,300.1c0,0.6-1.9,2.2-2.5,2.9c-2,2-4.7,3.3-7.5,3.6
	c-4.4,0.6-8.5-2.5-9.1-7c-0.1-0.6-0.1-1.3,0-1.9c0-8.5,9.6-9.5,16-10.7l3.3-0.7L389,300.1z"
      />
      <path
        className="st0"
        d="M414.1,244c0,12.8,6.5,23.4,15,23.2c12-0.4,15.5-10.4,15.5-23.3c0-12.9-6.9-23.4-15.5-23.3
	C418.5,220.6,414.1,231.1,414.1,244 M404.9,244c1.4-27.4,22.9-28.1,22.9-28.1c15.6,0,20.1,16.8,20.1,16.8c3.4-5,6.4-10.2,9.2-15.6
	h5.1c-10.4,22.9-10,32.1-10,32.1c-0.9,12.2,6,16.4,6,16.4c6.4,4.1,6.8-7.8,6.8-7.8c0.8-0.3,1.5-0.6,2.3-1
	c3.4,16.6-6.8,15.5-6.8,15.5c-8,0.8-11.4-12.1-11.4-12.1c-11.3,14.9-24.3,11.7-24.3,11.7c-22.3-2.8-20.5-27.5-20.5-27.5"
      />
    </Svg>
  )
}

export default Icon
