import React, { useState, useEffect } from 'react'
import Select from '../components/Select'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card';
import axios from 'axios';
// import InfiniteScroll from '../components/InfiniteScroll';
import Spinner from "../components/Spinner"
import { getAllMoviesApi } from '../ApiUrlRecord';
import Sort from '../components/Sort';

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
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
    const response = await axios.get(`${getAllMoviesApi}&page=${page + 1}`)
    console.log(response);
    const newMovies  = response.data.results;
    if(newMovies.length === 0) setHasMore(false)
    else {
      setData((prevData)=>[...prevData, ...newMovies]);
      setPage((prevPage) => prevPage + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);
  return (
    <div className='flex flex-col mx-[12em]'>
          <div className='flex flex-row justify-between items-center py-20 ' >
            <h2 className='text-2xl'>Explore Movies</h2>
            <div className='flex flex-row gap-4 '>
              <Select value='Select genre'/>
              <Sort value='Sort By'/>
            </div>
          </div>  
          <div className='flex flex-wrap justify-between'>
            {
              data.map((movie) => 
              <Card key={movie.id} element={movie} type='movie'/>
            )
            }
          </div>
          {isLoading && <Spinner />}
          </div>
    )
}

export default Movies