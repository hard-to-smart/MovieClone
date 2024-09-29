import React from 'react'
import SearchBar from './SearchBar'

const Banner = ({image}) => {
  console.log(image)
  return (
    <section className={'bg-cover bg-no-repeat'} 
    style={{backgroundImage: `url(${image})`}}> 
    <div className='backdrop-brightness-50 w-full h-full'> 
      <div className=' w-full h-[35em] flex flex-col justify-center items-center gap-4'>
        <p className='text-white text-[70px] font-sans'>
            Welcome.
        </p>
        <p className='text-white text-[1.5em]'>Millions of movies, TV shows and people to discover. Explore now.</p>
        <SearchBar/>
        </div>
        </div>
    </section>
  )
}

export default Banner