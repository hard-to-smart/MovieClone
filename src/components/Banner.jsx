import React from 'react'
import SearchBar from './SearchBar'

const Banner = ({image}) => {
  console.log(image)
  return (
    <section className={'bg-cover bg-no-repeat'} 
    style={{backgroundImage: `url(${image})`}}> 
    <div className='backdrop-brightness-50 w-full h-full'> 
      <div className=' w-full h-[35em]  flex flex-col justify-center items-center'>
        <h1 className='text-white text-[72px] font-sans'>
            Welcome.
        </h1>
        <h2 className='text-white text-[1.5em]'>Millions of movies, TV shows and people to discover. Explore now.</h2>
        <SearchBar/>
        </div>
        </div>
    </section>
  )
}

export default Banner