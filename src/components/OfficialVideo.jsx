import React from "react";
import { getVideoThumbnail } from "../ApiUrlRecord";
import PlayButton from "./PlayButton/PlayButton";

const OfficialVideo = ({ element, handlePlayVideo }) => {

  return (
    <div className="min-w-[200px]">
      <div
        className="relative group rounded-md overflow-hidden cursor-pointer "
        onClick={() => handlePlayVideo(element.key)}
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
      <h2>{element?.name}</h2>
    </div>
  );
};

export default OfficialVideo;
