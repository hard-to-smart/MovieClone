import React from 'react'
import { ImCross } from "react-icons/im";

const VideoFrame = ({url, close}) => {
  return (
    <div >
    <ImCross className='flex justify-end' onClick={()=>close(false)}/>
    <iframe src={url} width={400} height={400} frameborder="0" >          
    </iframe>
    </div>
  )
}

export default VideoFrame
