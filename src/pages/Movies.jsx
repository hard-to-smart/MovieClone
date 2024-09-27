import React from 'react'
import Select from '../components/Select'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'

const Movies = () => {
  // const result = useLoaderData();
  // console.log(result);
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description for Movie 1',
      poster: 'https://via.placeholder.com/150',
      releaseDate: '2023-01-01'
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description for Movie 2',
      poster: 'https://via.placeholder.com/150',
      releaseDate: '2023-02-15'
    },
  ];
  return (
    <div className='flex flex-col mx-[20em]'>
          <div className='flex flex-row justify-between items-center pt-10 ' >
            <h2 className='text-2xl'>Explore Movies</h2>
            <div className='flex flex-row gap-4 '>
              <Select value='Select genre'/>
              <Select value='Sort By'/>
            </div>
          </div>  
          <div className='pt-10'>
          {movies.map((movie)=>{
            <Card key={movie.id} element={movie} />
          })}
          </div>
          </div>
    )
}

export default Movies