import React, { useState, useEffect } from "react";
import Select from "../components/Select";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import InfiniteScroll from "../components/InfiniteScroll";
// import Spinner from "../components/Spinner"
import { getAllMoviesApi } from "../ApiUrlRecord";
import Sort from "../components/Sort";
import { getGenre } from "../loaders/AllLoaders";
import { useGenres } from "../hooks/GenreContext";

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedGenreOption, setSelectedGenreOption] = useState("");
  const { genres } = useGenres();
  const loadMoreData = async () => {
    if (!hasMore) return;
    const response = await axios.get(`${getAllMoviesApi}&page=${page + 1}`);
    const newMovies = response.data.results;
    if (newMovies.length === 0) setHasMore(false);
    else {
      setData((prevData) => [...prevData, ...newMovies]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex flex-col mx-[1rem]">
      <div className="flex flex-row  max-md:flex-col gap-2 justify-between items-center pt-[6rem] pb-[2rem] px-[5rem]">
        <h2 className="text-xl">Explore Movies</h2>
        <div className="flex flex-row gap-4 ">
          <Select
            value="Select genre"
            setSelectedGenreOption={setSelectedGenreOption}
          />
          <Sort value="Sort By" setSelectedSortOption={setSelectedSortOption} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {data.map((movie) => (
          <Card key={movie.id} element={movie} type="movie" genres={genres} />
        ))}
      </div>
      <InfiniteScroll fetchMoreData={loadMoreData} hasMore={hasMore} />
    </div>
  );
};

export default Movies;
