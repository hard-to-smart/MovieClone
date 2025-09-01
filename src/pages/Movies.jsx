import React, { useState, useEffect, useRef } from "react";
import Select from "../components/Select";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { getAllMoviesApi } from "../ApiUrlRecord";
import Sort from "../components/Sort";
import { useGenres } from "../hooks/GenreContext";
import Spinner from "../components/Spinner";
import DummyCard from "../components/DummyCard";

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  console.log(data)
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedGenreOption, setSelectedGenreOption] = useState("");
  const { genres } = useGenres();
  console.log(genres)
  const page = useRef(1);

  const handleScroll = () => {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight-200) {
      if (!isLoading) {
        setLoading(true);
        loadMoreData();
      }
    }
  };
  async function handleFilters({genreNumbers}){
    const response = await axios.get(`${getAllMoviesApi}&with_genres=${genreNumbers.join(",")}&sort=${selectedSortOption}`)
    console.log(response)
    setData([response.data.results])
  }
 useEffect(()=>{ console.log(selectedGenreOption)}, [selectedGenreOption])
  useEffect(()=>{
    setLoading(true);
    const genreNumbers = Array.isArray(selectedGenreOption)
    ? selectedGenreOption?.map((name) => {
        const match = genres?.find((g) => g.name === name);
        return match ? match.id : null;
      }).filter(Boolean)
    : "";
      console.log(genreNumbers, 'numbers')
    page.current = 1;
    handleFilters(genreNumbers);
  }, [selectedGenreOption, selectedSortOption, data])
  const loadMoreData = async () => {
    if (!hasMore) return;
    page.current = page.current +1;
    const response = await axios.get(`${getAllMoviesApi}&page=${page.current}`);
    const newMovies = response.data.results;
    if (newMovies.length === 0) setHasMore(false);
    else {
      setData((prevData) => [...prevData, ...newMovies]);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [window]);

  return (
    <div className="flex flex-col mx-[1rem]">
      <div className="flex flex-row  max-md:flex-col gap-2 justify-between items-center pt-[6rem] pb-[2rem] px-[5rem]">
        <h2 className="text-xl">Explore Movies</h2>
        <div className="flex flex-row gap-4 ">
          <Select selectedGenreOption={selectedGenreOption} setSelectedGenreOption={setSelectedGenreOption}
          />
          <Sort selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption}/>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center ">
        {data !== undefined && data.length > 0
            ? data?.map((movie) => (
              <Card key={movie.id} element={movie} type="movie" genres={genres} />
            ))
            :
            Array.from({ length: 5 }).map((_, i) => <DummyCard key={i} />)
              }
      </div>
      {isLoading && <Spinner/>}

    </div>
  );
};

export default Movies;
