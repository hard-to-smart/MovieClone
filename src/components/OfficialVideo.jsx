import React from 'react'
import { getVideo, getVideoThumbnail, getVideoUrl } from '../ApiUrlRecord';
import { handlePlayVideo } from "../utils/handlePlayVideo";

const OfficialVideo = (officialVideos) => {
  console.log(officialVideos);
  console.log(getVideoThumbnail(officialVideos.id))
  return (
    <div>
    <div className='border radius-4 hover:opacity-5 hover:bg-black' onClick={() => handlePlayVideo(getVideo)}>
        <img src={`${getVideoThumbnail(officialVideos.id)}`} />
    </div>
    <h2>{officialVideos.name}</h2>
    </div>
  )
}

export default OfficialVideo