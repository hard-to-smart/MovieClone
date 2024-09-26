import React from 'react'
import SearchBar from './SearchBar'

const Banner = () => {
  return (
    <section className='w-full h-[34rem] flex flex-col justify-center items-center bg-slate-800'>
        <h1 className='text-white text-[72px] font-sans'>
            Welcome.
        </h1>
        <h2 className='text-white text-[1.5em]'>Millions of movies, TV shows and people to discover. Explore now.</h2>
        <SearchBar/>
        
    </section>
  )
}

export default Banner