import react, { useState } from "react";
import { getImageUrl, getVideo } from "../ApiUrlRecord";
import PlayButton from "./PlayButton/PlayButton";
import Lable from "./Lable";
import SingleCard from "./SingleCard";
import ProgressBar from "./ProgressBar";

const SingePageDetails = ({ data, handlePlayVideo }) => {
  const [videoClicked, isVideoClicked] = useState(false);

  return (
    <div className="w-full h-full">
      <div
        className="absolute inset-0 bg-cover top-0 opacity-20"
        style={{
          backgroundImage: `url(${getImageUrl + data.backdrop_path})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-1 flex flex-row max-md:flex-col mt-[5rem] justify-evenly gap-6 px-4">
        <div className="p-6">
          <SingleCard path={data.poster_path} />
        </div>
        <div className="p-6 leading-relaxed">
          <h2 className="text-[40px]"> {data.title}</h2>
          <div id="genre" className="gap-2 justify-start flex flex-row w-full ">
            {data?.genres?.map((el) => (
              <Lable key={el.id} name={el.name} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-4 py-[1rem]">
            <ProgressBar
              value={data.vote_average}
              className="w-[4rem] h-[4rem]"
            />
            <button
              className={`flex flex-row items-center gap-[0.2rem] hover:text-pink-600 cursor-pointer`}
              onClick={()=>handlePlayVideo(data.id)}
            >
              <PlayButton />
              Watch Trailer
            </button>
            {videoClicked && (
              <VideoFrame url={videoUrl} close={isVideoClicked} />
            )}
          </div>
          <h4 className="text-2xl">Overview</h4>
          <p className="">{data?.overview}</p>
          <div className="flex flex-row justify-left gap-10 border-b-2 border-white border-opacity-[0.1] py-2">
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
          <div className="border-b-2 border-white border-opacity-[0.1] py-2"> Director : </div>
          <div className="border-b-2 border-white border-opacity-[0.1] py-2"> Writer : </div>
        </div>
      </div>
    </div>
  );
};

export default SingePageDetails;
