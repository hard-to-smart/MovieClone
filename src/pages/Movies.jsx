import React, { useState, useEffect } from "react";
import Select from "../components/Select";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import InfiniteScroll from "../components/InfiniteScroll";
// import Spinner from "../components/Spinner"
import { getAllMoviesApi } from "../ApiUrlRecord";
import Sort from "../components/Sort";

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedGenreOption, setSelectedGenreOption] = useState("");

  const loadMoreData = async () => {
    console.log(hasMore)
    if (!hasMore) return;
    const response = await axios.get(`${getAllMoviesApi}&page=${page + 1}`);
    console.log(response);
    const newMovies = response.data.results;
    if (newMovies.length === 0) setHasMore(false);
    else {
      setData((prevData) => [...prevData, ...newMovies]);
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div className="flex flex-col mx-[12em]">
      <div className="flex flex-row justify-between items-center py-20 ">
        <h2 className="text-2xl">Explore Movies</h2>
        <div className="flex flex-row gap-4 ">
          <Select
            value="Select genre"
            setSelectedGenreOption={setSelectedGenreOption}
          />
          <Sort value="Sort By" setSelectedSortOption={setSelectedSortOption} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {data.map((movie) => (
          <Card key={movie.id} element={movie} type="movie" />
        ))}
      </div>
      <InfiniteScroll fetchMoreData={loadMoreData} hasMore={hasMore} />
    </div>
  );
};

export default Movies;
