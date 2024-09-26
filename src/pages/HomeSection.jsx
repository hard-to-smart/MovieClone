import React from 'react'
import ToggleButton from '../components/ToggleButton'
import Card from '../components/Card'

const HomeSection = () => {
  return (
    <div className='px-[10em]'>
    <div className='flex justify-between  items-center'>
        <h2 className= 'text-white text-2xl'>Trending</h2>
        <ToggleButton/>
    </div>
    <div className='gap-2 py-2'>
        <Card/>
    </div>
    </div>
  )
}

export default HomeSection