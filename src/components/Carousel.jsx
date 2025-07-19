import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Card from "./Card";
import TopCast from "./TopCast";
import OfficialVideo from "./OfficialVideo";
import Iframe from "./Iframe";
import { useGenres } from "../hooks/GenreContext";


export default function Carousel({ title, data, activeBtn, displayTitleInCard, selectedVideo, handlePlayVideo, setSelectedVideo}) {
  const [current, setCurrent] = useState(0);
  const {genres}  = useGenres();
  let previousSlide = () => {
    if (current <= 0) setCurrent(data.length - 1);
    else setCurrent(current - 4);
  };

  let nextSlide = () => {
    if (current >= data.length - 1) setCurrent(0);
    else setCurrent(current + 4);
  };


  const getIndividualComponent = (item, genres, index) => {
    switch (title) {
      case "Top Cast":
        return <TopCast key={index} {...item} />;
      case "Official Videos":
        return <OfficialVideo key={index} element={item} handlePlayVideo={handlePlayVideo}/>;
      case "Similar Movies":
        return <Card key={index} element={item} genres={genres} type="Movies" />;
      case "Similar Tv Shows":
        return <Card key={index} element={item} genres={genres} type="TV Shows" />;
      case "Recommendations":
        return <Card key={index} genres={genres} element={item} type={item?.media_type}/>;
      case "Trending":
      case "What's Popular":
      case "Top Rated":
        return <Card key={index} element={item} genres={genres} type={activeBtn} />;
    }
  };

  return (
    <div className="p-6">
    <h4 className="text-2xl pl-[2.5rem] pb-[1rem]">{displayTitleInCard ? '' : title}</h4>
    <div className="flex flex-shrink-0  gap-2 w-full justify-center ">
      <button onClick={previousSlide} className="text-3xl">
        <BsFillArrowLeftCircleFill />
      </button>
      <div className=" overflow-y-hidden w-full">
        <div
          className={`inline-flex transition ease-out duration-400 gap-2`}
          style={{
            transform: `translateX(-${current * (100 / data.length)}%)`,
          }}
        >
          {data && data.length > 0
            ? data.map((item, index) => getIndividualComponent(item, genres, index))
            : null}
        </div>
      </div>
      <button onClick={nextSlide} className="text-3xl">
        <BsFillArrowRightCircleFill />
      </button>
    </div>
    {selectedVideo && (
        <Iframe videoKey={selectedVideo} setSelectedVideo={setSelectedVideo}/>
    )}
    </div>
  );
}
