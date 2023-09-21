import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 44.799" {...props}>
      <path
        id="Icon_awesome-money-bill-wave"
        data-name="Icon awesome-money-bill-wave"
        d="M62.115,4.5A29.613,29.613,0,0,0,50.474,2.25c-12.317,0-24.633,6.234-36.949,6.234A30.34,30.34,0,0,1,4.26,7.112,3.419,3.419,0,0,0,3.225,6.95,3.182,3.182,0,0,0,0,10.131V41.856A3.18,3.18,0,0,0,1.884,44.8a29.6,29.6,0,0,0,11.641,2.247c12.317,0,24.634-6.235,36.95-6.235a30.34,30.34,0,0,1,9.265,1.372,3.419,3.419,0,0,0,1.035.162A3.182,3.182,0,0,0,64,39.167V7.443A3.184,3.184,0,0,0,62.115,4.5ZM4.8,12.272a34.8,34.8,0,0,0,6.272.893A6.407,6.407,0,0,1,4.8,18.319Zm0,28.5V35.993a6.4,6.4,0,0,1,6.371,6.14A24.157,24.157,0,0,1,4.8,40.771ZM32,34.25c-4.419,0-8-4.3-8-9.6s3.582-9.6,8-9.6,8,4.3,8,9.6S36.416,34.25,32,34.25Zm27.2,2.778a34.383,34.383,0,0,0-5.432-.844A6.386,6.386,0,0,1,59.2,31.256Zm0-23.611a6.387,6.387,0,0,1-5.581-6.155A24.038,24.038,0,0,1,59.2,8.528Z"
        transform="translate(0 -2.25)"
        fill={props.color}
      />
    </Svg>
  )
}

export default Icon
