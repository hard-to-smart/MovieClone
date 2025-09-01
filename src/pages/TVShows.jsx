import React, { useState, useEffect, useRef, Suspense } from 'react';
import Select from '../components/Select';
import Card from '../components/Card';
import { useLoaderData, Await } from 'react-router-dom';
import { getAllTvShowsApi } from '../ApiUrlRecord';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Sort from '../components/Sort';
import { useGenres } from '../hooks/GenreContext';
import DummyCard from '../components/DummyCard';

const TvShows = () => {
  const { exploreTV } = useLoaderData(); // from loader: defer({ exploreTV: ExploreTVLoader() })
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedGenreOption, setSelectedGenreOption] = useState([]);
  const { genres } = useGenres();
  let page = useRef(1);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      if (!isLoading) {
        setLoading(true);
        loadMoreData();
      }
    }
  };

  const loadMoreData = async () => {
    if (!hasMore) return;
    page.current = page.current + 1;
    const response = await axios.get(`${getAllTvShowsApi}&page=${page.current}`);
    const newShows = response?.data?.results;
    if (newShows?.length === 0) setHasMore(false);
    else {
      setData((prevData) => [...prevData, ...newShows]);
    }
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={exploreTV}>
        {(initialData) => {
          // merge initial deferred data + infinite scroll data
          const shows = [...initialData, ...data];

          return (
            <div className="flex flex-col mx-[1rem]">
              <div className="flex flex-row max-md:flex-col justify-between items-center pt-[6rem] pb-[2rem] gap-2 px-[5rem]">
                <h2 className="text-xl">Explore Tv Shows</h2>
                <div className="flex flex-row gap-4">
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

              <div className="flex flex-wrap gap-2 justify-center">
                {shows?.length > 0
                  ? shows.map((tv) => (
                      <Card key={tv?.id} element={tv} type="tv" genres={genres} />
                    ))
                  : Array.from({ length: 5 }).map((_, i) => (
                      <DummyCard key={i} />
                    ))}
              </div>

              {isLoading && <Spinner />}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default TvShows;
