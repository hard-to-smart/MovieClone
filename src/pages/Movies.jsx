import React from 'react'
import Select from '../components/Select'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card';

const Movies = () => {
  const result = useLoaderData();
  console.log(result, "result")
  return (
    <div className='flex flex-col mx-[20em]'>
          <div className='flex flex-row justify-between items-center py-20 ' >
            <h2 className='text-2xl'>Explore Movies</h2>
            <div className='flex flex-row gap-4 '>
              <Select value='Select genre'/>
              <Select value='Sort By'/>
            </div>
          </div>  
          <div className='flex flex-wrap gap-4 justify-between'>
            {
              result.map((movie) => 
              <Card key={movie.id} element={movie}/>
            )
            }
          </div>
          </div>
    )
}

export default Movies