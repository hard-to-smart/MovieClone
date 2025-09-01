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
import { DummyCardArray } from './Home';

const TvShows = () => {
  const { exploreTV } = useLoaderData(); // loader deferred data
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedGenreOption, setSelectedGenreOption] = useState([]);
  const { genres } = useGenres();
  const page = useRef(1);

  // Initialize data from loader on mount or loader change
  useEffect(() => {
    if (exploreTV) {
      setData(exploreTV);
      setHasMore(true);
      page.current = 1;
    }
  }, [exploreTV]);

  // Build API URL with filters and sorting
  const buildApiUrl = (pageNum) => {
    let apiUrl = `${getAllTvShowsApi}&page=${pageNum}`;

    if (selectedGenreOption.length > 0) {
      const genreIds = selectedGenreOption
        .map((name) => {
          const match = genres.find((g) => g.name === name);
          return match ? match.id : null;
        })
        .filter(Boolean);

      if (genreIds.length > 0) {
        apiUrl += `&with_genres=${genreIds.join(',')}`;
      }
    }

    if (selectedSortOption) {
      apiUrl += `&sort_by=${selectedSortOption}`;
    }
    return apiUrl;
  };

  // Fetch filtered data (called on filter/sort change)
  const fetchFilteredData = async () => {
    setLoading(true);
    page.current = 1;
    setHasMore(true);

    try {
      const apiUrl = buildApiUrl(page.current);
      const response = await axios.get(apiUrl);
      setData(response.data.results || []);
    } catch (error) {
      console.error('Error fetching filtered TV shows:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Load more data for infinite scroll with filters/sorting applied
  const loadMoreData = async () => {
    if (!hasMore || isLoading) return;
    setLoading(true);
    page.current += 1;
    try {
      const apiUrl = buildApiUrl(page.current);
      const response = await axios.get(apiUrl);
      const newShows = response.data.results || [];
      if (newShows.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => {
          // Filter out new shows already in prev data by id
          const prevIds = new Set(prev.map((show) => show.id));
          const filteredNewShows = newShows.filter((show) => !prevIds.has(show.id));
          return [...prev, ...filteredNewShows];
        });
      }
    } catch (error) {
      console.error('Error loading more TV shows:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle scroll event for infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMoreData();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, selectedSortOption, selectedGenreOption]);

  useEffect(() => {
    fetchFilteredData();
  }, [selectedGenreOption, selectedSortOption]);

  return (
    <Suspense fallback={<div className="flex flex-row justify-center mt-20"><DummyCardArray i={5} /></div>}>
      <Await resolve={exploreTV}>
        {() => (
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
              {data.length > 0 ? (
                data.map((tv) => (
                  <Card key={tv?.id} element={tv} type="tv" genres={genres} />
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

export default TvShows;
