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
  const [itemsPerView, setItemsPerView] = useState(5);
  const totalSlides = Math.ceil(data?.length / itemsPerView);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };
 
  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 < 0 ? totalSlides -1 : prev -1));
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(2);
      else if (width < 768) setItemsPerView(3);
      else if (width < 1024) setItemsPerView(4);
      else setItemsPerView(5);
    };
  
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [nextSlide, previousSlide, totalSlides, itemsPerView]);
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
    <div className="p-6 w-full">
    <h4 className="text-2xl pl-[2.5rem] pb-[1rem]">{displayTitleInCard ? '' : title}</h4>
    <div className="relative w-full overflow-hidden">
        <button
          onClick={previousSlide}
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
        >
          <BsFillArrowLeftCircleFill />
        </button>

        <button
          onClick={nextSlide}
          className="absolute z-10 right-2 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
        >
          <BsFillArrowRightCircleFill />
        </button>

      <div
          className="flex transition-transform duration-500 ease-out gap-4"
          style={{
            transform: `translateX(-${current * (100 / totalSlides)}%)`,
            width: `${(data?.length * 100) / itemsPerView}%`,
          }}
        >
          {data?.map((item, index) => (
              getIndividualComponent(item, genres, index)
          ))}
        </div>
      </div>

      {selectedVideo && (
        <Iframe videoKey={selectedVideo} setSelectedVideo={setSelectedVideo} />
      )}
    </div>
  );
}
