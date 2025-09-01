import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { getImageUrl } from "../ApiUrlRecord";
import dummyCard from '../assets/card.png'
import withSuspenseWrapper from "../hooks/withSuspenseWrapper";
import { loadImage } from "../utils/imageResource";
const Card = ({ element, genres, type }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    console.log('called')

    if (type?.toLowerCase().includes('movie')) {
      navigate(`/movie/${element.id}`);
    } else if (type?.toLowerCase().includes('tv')) {
      navigate(`/tv/${element.id}`);
    } else if (element?.media_type !== undefined) {
      navigate(`${element?.media_type}/${element.id}`);
    } else {
      navigate(`*`);
    }
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const imageSrc =  element?.poster_path
    ? loadImage(getImageUrl + element?.poster_path).read()
    : dummyCard;
  return (
    <div
    className="w-[48%] sm:w-[23%] lg:w-[18%] h-auto rounded-[18px] cursor-pointer"      
    onClick={() => handleCardClick()}
    >
      <div className="relative">
        <img
          className="h-auto w-full rounded-[18px]"
          src= {imageSrc}
        />
        <div className="absolute flex flex-row flex-wrap justify-between w-full items-center bottom-0 p-2">
          <ProgressBar value={element.vote_average} />
          <div className="gap-2 flex flex-row flex-wrap">
            {element?.genre_ids?.slice(0, 2).map((id) => {
              const genreObj = genres?.find((el) => el.id === id);
              return (
                <p key={id} className="flex justify-center items-center bg-pink-600 rounded-sm text-[0.75rem] text-nowrap">
                  {genreObj?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium">{element.original_title}</h3>
        <p className="text-gray-400 text-[0.75rem] font-extralight italic">
          {element?.release_date}
        </p>
      </div>
    </div>
  );
};

export default withSuspenseWrapper(Card);
