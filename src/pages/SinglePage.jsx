// import { useLocation } from "react-router-dom"
import SingleCard from "../components/SingleCard";
import ProgressBar from "../components/ProgressBar";
import { getCast, getImageUrl, getVideo, getVideoUrl } from "../ApiUrlRecord";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Lable from "../components/Lable";
import PlayButton from "../components/PlayButton";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoFrame from "../components/VideoFrame";
import TopCast from "../components/TopCast";
import { handlePlayVideo } from "../utils/handlePlayVideo";
import OtherDetails from "../components/OtherDetails";
const SinglePage = () => {
  const element = useLoaderData();
  const location = useLocation();
  const temp = location.pathname.trim();
  const [videoClicked, isVideoClicked] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [cast, setCast] = useState("");
  const [officialVideos, setOfficialVideos] = useState("");
  


  console.log(element)


  const getCastDetails = async () => {
    const response = await axios.get(getCast(temp));
    setCast(response.data.cast);
  };

  useEffect(() => {
    getCastDetails();
  }, []);
  return (
    <>
    <div className="w-full h-full">
      {/* Pseudo-element to set background with opacity */}
      <div
        className="absolute inset-0 bg-cover top-0 opacity-20"
        style={{
          backgroundImage: `url(${getImageUrl + element.backdrop_path})`,
        }}
      ></div>
      <div className="relative z-1 flex flex-row mt-[5rem] justify-evenly gap-10">
        <div className="p-6">
          <SingleCard path={element.poster_path} />
        </div>
        <div className="p-6 leading-loose">
          <h2 className="text-[40px]"> {element.title}</h2>
          <div id="genre" className="gap-2 justify-start flex flex-row w-full ">
            {element?.genres?.map((el) => (
              <Lable key={el.id} name={el.name} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-4">
            <ProgressBar value={element.vote_average} />
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
          <p className="mr-[10em]">{element.overview}</p>
          <div className="flex flex-row justify-left gap-10 ">
            <div>
              <p> Status : </p>
              <p className="text-gray-400">{element?.status}</p>
            </div>
            <div>
              <p> Release Date : </p>
              <p className="text-gray-400">{element?.release_date}</p>
            </div>
            <div>
              <p> Runtime : </p>{" "}
              <p className="text-gray-400">{element?.runtime}</p>
            </div>
          </div>
          <hr />
          <div> Director : </div>
          <hr />
          <div> Writer : </div>
        </div>
        
      </div>
      
    </div>

<OtherDetails title="Top Cast" data={cast}/>
{/* <OtherDetails title="Similar Movies" data={}/> */}
</>
  );
};

export default SinglePage;
