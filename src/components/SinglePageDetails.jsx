import react, { useState } from "react";
import { getImageUrl, getVideo } from "../ApiUrlRecord";
import { handlePlayVideo } from "../utils/handlePlayVideo";
import PlayButton from "./PlayButton";
import Lable from "./Lable";
import SingleCard from "./SingleCard";
import ProgressBar from "./ProgressBar";

const SingePageDetails = ({data}) => {
  const [videoClicked, isVideoClicked] = useState(false);
  return (
    <div className="w-full h-full">
      {/* Pseudo-element to set background with opacity */}
      <div
        className="absolute inset-0 bg-cover top-0 opacity-20"
        style={{
          backgroundImage: `url(${getImageUrl + data.backdrop_path})`,
        }}
      ></div>
      <div className="relative z-1 flex flex-row mt-[5rem] justify-evenly gap-10">
        <div className="p-6">
          <SingleCard path={data.poster_path} />
        </div>
        <div className="p-6 leading-loose">
          <h2 className="text-[40px]"> {data.title}</h2>
          <div id="genre" className="gap-2 justify-start flex flex-row w-full ">
            {data?.genres?.map((el) => (
              <Lable key={el.id} name={el.name} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-4">
            {/* <ProgressBar value={data.vote_average} /> */}
            <span
              className="flex flex-row items-center gap-4"
              onClick={() => handlePlayVideo(getVideo)}
            >
              <PlayButton />
              Watch Trailer
            </span>
            {videoClicked && (
              <VideoFrame url={videoUrl} close={isVideoClicked} />
            )}
          </div>
          <h4 className="text-2xl">Overview</h4>
          <p className="mr-[10em]">{data?.overview}</p>
          <div className="flex flex-row justify-left gap-10 ">
            <div>
              <p> Status : </p>
              <p className="text-gray-400">{data?.status}</p>
            </div>
            <div>
              <p> Release Date : </p>
              <p className="text-gray-400">{data?.release_date}</p>
            </div>
            <div>
              <p> Runtime : </p>{" "}
              <p className="text-gray-400">{data?.runtime}</p>
            </div>
          </div>
          <hr />
          <div> Director : </div>
          <hr />
          <div> Writer : </div>
        </div>
      </div>
    </div>
  );
};

export default SingePageDetails;
