import React from 'react'
import Select from '../components/Select'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'

const Movies = () => {
  const result = useLoaderData();
  console.log(result);
  return (
    <div className='flex flex-col mx-[20em]'>
          <div className='flex flex-row justify-between items-center pt-10 ' >
            <h2 className='text-2xl'>Explore Tv Shows</h2>
            <div className='flex flex-row gap-4 '>
              <Select value='Select genre'/>
              <Select value='Sort By'/>
            </div>
          </div>  
          <div className='pt-10'>
            <Card/>
          </div>

          </div>
    )
}

export default Movies