import React, { useState, useEffect, useRef, Suspense } from "react";
import Select from "../components/Select";
import { Await, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { getAllMoviesApi } from "../ApiUrlRecord";
import Sort from "../components/Sort";
import { useGenres } from "../hooks/GenreContext";
import Spinner from "../components/Spinner";
import DummyCard from "../components/DummyCard";
import { DummyCardArray } from "./Home";

const Movies = () => {
  const { exploreMovies } = useLoaderData();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedGenreOption, setSelectedGenreOption] = useState([]); // Initialize as array
  const { genres } = useGenres();
  const page = useRef(1);

  // Initialize data from loader on mount or loader data change
  useEffect(() => {
    if (exploreMovies) {
      setData(exploreMovies);
      setHasMore(true);
      page.current = 1;
    }
  }, [exploreMovies]);

  // Handle filters and sorting changes
  async function handleFilters() {
    setLoading(true);
    const genreNumbers =
      selectedGenreOption.length > 0
        ? selectedGenreOption
            .map((name) => {
              const genre = genres.find((g) => g.name === name);
              return genre ? genre.id : null;
            })
            .filter(Boolean)
        : [];

    page.current = 1;
    setHasMore(true);

    let apiUrl = `${getAllMoviesApi}&page=${page.current}`;
    if (genreNumbers.length > 0) apiUrl += `&with_genres=${genreNumbers.join(",")}`;
    if (selectedSortOption) apiUrl += `&sort_by=${selectedSortOption}`;

    try {
      const response = await axios.get(apiUrl);
      setData(response.data.results || []);
    } catch (error) {
      console.error("Error fetching filtered movies:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenreOption, selectedSortOption]);

  // Load more data for infinite scroll
  const loadMoreData = async () => {
    if (!hasMore || isLoading) return;
    setLoading(true);
    page.current += 1;

    const genreNumbers =
      selectedGenreOption.length > 0
        ? selectedGenreOption
            .map((name) => {
              const genre = genres.find((g) => g.name === name);
              return genre ? genre.id : null;
            })
            .filter(Boolean)
        : [];

    let apiUrl = `${getAllMoviesApi}&page=${page.current}`;
    if (genreNumbers.length > 0) apiUrl += `&with_genres=${genreNumbers.join(",")}`;
    if (selectedSortOption) apiUrl += `&sort_by=${selectedSortOption}`;

    try {
      const response = await axios.get(apiUrl);
      const newMovies = response.data.results;

      if (!newMovies || newMovies.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...newMovies]);
      }
    } catch (error) {
      console.error("Error loading more movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Scroll event handler for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMoreData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, selectedGenreOption, selectedSortOption]);

  return (
    <Suspense
      fallback={
        <div className="flex flex-row justify-center mt-20">
          <DummyCardArray i={5} />
        </div>
      }
    >
      <Await resolve={exploreMovies}>
        {() => (
          <div className="flex flex-col mx-[1rem]">
            <div className="flex flex-row max-md:flex-col gap-2 justify-between items-center pt-[6rem] pb-[2rem] px-[5rem]">
              <h2 className="text-xl">Explore Movies</h2>
              <div className="flex flex-row gap-4 ">
                <Select
                  selectedGenreOption={selectedGenreOption}
                  setSelectedGenreOption={setSelectedGenreOption}
                />
                <Sort
                  selectedSortOption={selectedSortOption}
                  setSelectedSortOption={setSelectedSortOption}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center ">
              {data.length > 0 ? (
                data.map((movie) => (
                  <Card key={movie.id} element={movie} type="movie" genres={genres} />
                ))
              ) : (
                Array.from({ length: 5 }).map((_, i) => <DummyCard key={i} />)
              )}
            </div>
            {isLoading && <Spinner />}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Movies;
