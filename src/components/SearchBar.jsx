import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-white border rounded-full px-[25em] h-[4em] relative'>
        {/* <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 '>Search</button> */}
        <button className='h-full flex bg-gradient-to-br text-white text-xl justify-center items-center from-orange-500 to-pink-600 end-0 absolute w-36 rounded-r-full'>Search</button>

    </div>
  )
}

export default SearchBar