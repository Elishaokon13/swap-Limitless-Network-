import * as React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 40" {...props}>
      <path
        id="Path-3"
        d="M48.657,89.452q19.323-8.441,25.764-11.18c12.257-5.146,14.833-6.034,16.489-6.071a2.941,2.941,0,0,1,1.73.518,1.963,1.963,0,0,1,.626,1.222,6.435,6.435,0,0,1,.074,1.74c-.663,7.034-3.533,24.1-5.006,31.949-.626,3.332-1.84,4.442-3.018,4.554-2.576.222-4.527-1.7-6.993-3.332-3.9-2.554-6.073-4.146-9.864-6.664-4.38-2.888-1.546-4.479.957-7.071.663-.666,11.962-11.032,12.183-11.958a.885.885,0,0,0-.221-.777,1.008,1.008,0,0,0-.92-.074c-.4.074-6.588,4.22-18.624,12.4a8.262,8.262,0,0,1-4.785,1.777,31.7,31.7,0,0,1-6.883-1.629c-2.76-.888-4.969-1.37-4.785-2.925C45.492,91.118,46.6,90.3,48.657,89.452Z"
        transform="translate(-45.371 -72.2)"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Icon
