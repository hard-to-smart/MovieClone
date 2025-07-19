import React, {useState, useEffect} from 'react'
import Select from '../components/Select'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'
import { getAllTvShowsApi } from '../ApiUrlRecord'
import Spinner from '../components/Spinner'
import axios from 'axios'
import Sort from '../components/Sort'
import { useGenres } from '../hooks/GenreContext'

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedGenreOption, setSelectedGenreOption] = useState('');
  const { genres } = useGenres();
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight-200) {
      if (!isLoading) {
        setLoading(true);
        loadMoreData();
      }
    }
  };
  const loadMoreData = async () =>{
    if (!hasMore) return;
    const response = await axios.get(`${getAllTvShowsApi}&limit=20&offset=${offset + 20}`)
    const newShows = response.data.results;
    if(newShows.length === 0) setHasMore(false)
    else {
      setData((prevData)=>[...prevData, ...newShows]);
      // setPage((prevPage) => prevPage + 1);

    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <div className='flex flex-col mx-[1rem]'>
          <div className='flex flex-row max-md:flex-col justify-between items-center pt-[6rem] pb-[2rem] gap-2  px-[5rem]' >
            <h2 className='text-xl'>Explore Tv Shows</h2>
            <div className='flex flex-row gap-4'>
              <Select value='Select genre' setSelectedGenreOption={setSelectedGenreOption}/>
              <Sort value='Sort By' setSelectedSortOption={setSelectedSortOption}/>
            </div>
          </div>  
          <div className='flex flex-wrap gap-2 justify-center'>
            {
              data.map((tv) => 
              <Card key={tv.id} element={tv} type='tv' genres={genres}/>
            )
            }
          </div>
          {isLoading && <Spinner/>}
          </div>
    )
}

export default Movies