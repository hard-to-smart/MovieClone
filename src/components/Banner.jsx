import React from "react";
import SearchBar from "./SearchBar";

const Banner = ({ image }) => {
  return (
    <section
      className={"bg-cover bg-no-repeat mt-[4rem]"}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="backdrop-brightness-50 w-full h-full">
        <div className="md:px-[10rem] px-[1rem] w-full h-[35em] flex flex-col justify-center items-center gap-4">
          <div className="text-white text-6xl">Welcome.</div>
          <div className="text-white text-center text-xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Banner;
