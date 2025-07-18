import { useLoaderData, useLocation } from "react-router-dom";
import SingePageDetails from "../components/SinglePageDetails";
import Carousel from "../components/Carousel";
import { useState } from "react";
const SinglePage = () => {
  const location = useLocation();
  const temp = location.pathname.trim();
  const result = useLoaderData();
  const [selectedVideo, setSelectedVideo] = useState(null);
  function handlePlayVideo(id) {
    setSelectedVideo(id);
  }
  return (
    <>
      <SingePageDetails data={result[0]} handlePlayVideo={handlePlayVideo}/>
      <Carousel title="Top Cast" data={result[1]} />
      <Carousel title="Official Videos" data={result[2]} temp={temp} selectedVideo={selectedVideo} handlePlayVideo={handlePlayVideo} setSelectedVideo={setSelectedVideo}/>
      <Carousel title="Similar Movies" data={result[3]} />
      <Carousel title="Recommendations" data={result[4]} />
    </>
  );
};

export default SinglePage;
