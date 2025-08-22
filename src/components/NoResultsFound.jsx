import React from 'react'
import { useNavigate } from 'react-router-dom'
const NoResultsFound = () => {
  const navigate = useNavigate()
  return (
        <div className='flex flex-col items-center justify-center gap-2 h-screen'>
        <img src='./../src/assets/image.png' style={{width:'300px', height:'300px'}}/>
        <p className='text-2xl text-white'> No Search Results found</p>
        <button className='rounded-xl cursor-pointer p-2 hover:border-gray-100 hover:border-2' onClick={()=>navigate(-1)}>Go back</button>
        </div>
  )
}

export default NoResultsFound