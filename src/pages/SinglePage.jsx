import { useLoaderData, useLocation } from "react-router-dom";
import SingePageDetails from "../components/SinglePageDetails";
import Carousel from "../components/Carousel";
const SinglePage = () => {
  const location = useLocation();
  const temp = location.pathname.trim();

  console.log(temp, "temp");

  const result = useLoaderData();
  console.log(result, "result");
  return (
    <>
      <SingePageDetails data={result[0]}/>
      <Carousel title="Top Cast" data={result[1]} />
      <Carousel title="Official Videos" data={result[2]} />
      <Carousel title="Similar Movies" data={result[3]} />
      <Carousel title="Recommendations" data={result[4]} />
    </>
  );
};

export default SinglePage;
