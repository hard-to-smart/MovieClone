import React, { useRef, useState } from "react";
// import { handlePlayVideo } from "../utils/handlePlayVideo";
import { getVideoThumbnail, getVideoUrl } from "../ApiUrlRecord";
import PlayButton from "./PlayButton/PlayButton";
import Iframe from "./Iframe";

const OfficialVideo = ({ element }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  function handlePlayVideo(id) {
    setSelectedVideo(id);
  }
  return (
    <div className="min-w-[200px]">
      <div
        className="relative group rounded-md overflow-hidden cursor-pointer "
        onClick={() => handlePlayVideo(element.id)}
      >
        <img
          src={getVideoThumbnail(element?.key)}
          width="100%"
          alt="video thumbnail"
          className="hover:opacity-[0.7] hover:bg-black"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayButton />
        </div>
      </div>
      {selectedVideo && (
        <Iframe key={element?.key} setSelectedVideo={setSelectedVideo}/>
      )}
      <h2>{element?.name}</h2>
    </div>
  );
};

export default OfficialVideo;
