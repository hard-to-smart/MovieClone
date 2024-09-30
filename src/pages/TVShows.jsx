import React, {useState, useEffect} from 'react'
import Select from '../components/Select'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'
import { getAllTvShowsApi } from '../ApiUrlRecord'
import Spinner from '../components/Spinner'
import axios from 'axios'
import Sort from '../components/Sort'

const Movies = () => {
  const result = useLoaderData();
  const [data, setData] = useState(result);
  const [offset, setOffset] = useState(0);
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
    const response = await axios.get(`${getAllTvShowsApi}&limit=20&offset=${offset + 20}`)
    const newShows = response.data.results;
    if(newShows.length === 0) setHasMore(false)
    else {
      setData((prevData)=>[...prevData, ...newShows]);
      // setPage((prevPage) => prevPage + 1);
      console.log(data.length)

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
            <h2 className='text-2xl'>Explore Tv Shows</h2>
            <div className='flex flex-row gap-4 '>
              <Select value='Select genre'/>
              <Sort value='Sort By'/>
            </div>
          </div>  
          <div className='flex flex-wrap justify-between'>
            {
              data.map((tv) => 
              <Card key={tv.id} element={tv} type='tv'/>
            )
            }
          </div>
          {isLoading && <Spinner/>}
          </div>
    )
}

export default Movies