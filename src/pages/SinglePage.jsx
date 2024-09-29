// import { useLocation } from "react-router-dom"
import SingleCard from "../components/SingleCard";
import ProgressBar from "../components/ProgressBar";
import { getImageUrl } from "../ApiUrlRecord";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
 const element = useLoaderData();
 console.log(element);
  return (

<div className="w-full h-full">
      {/* Pseudo-element to set background with opacity */}
      <div
        className="absolute inset-0 bg-cover top-0 opacity-20"
        style={{
          backgroundImage: `url(${getImageUrl + element.backdrop_path})`,
        }}
      >
        </div>
            <div className=" relative z-1 flex flex-row mt-[5rem] justify-evenly gap-10">
        <div className="p-6">
           <SingleCard path= {element.poster_path}/>
           </div>
           <div className="p-6 leading-loose">
            <h2 className="text-[40px]"> {element.title}</h2>
            <div className="">
              <ProgressBar value={element.vote_average}/>
              <button>{element.video}</button>
            </div>
            <h4 className="text-2xl">Overview</h4>
            <p className="mr-[10em]">{element.overview}</p>
            <div className="flex flex-row justify-left gap-10 ">
              <p> Status : </p>
              <p> Release Date : </p>
              <p> Runtime : </p>
            </div>
            <hr/> 
            <div> Director : </div>
            <hr/>
            <div> Writer : </div>
           </div>
    </div>
    </div>

  )
}

export default SinglePage