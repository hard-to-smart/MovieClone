import React from 'react'
import ToggleButton from '../components/ToggleButton'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const HomeSection = ({title, button1result, button2result, btn1value, btn2value}) => {

  return (
    <div className='px-[10em]'>
    <div className='flex justify-between py-[20px] items-center'>
        <h2 className= 'text-white text-2xl'>{title}</h2>
        <ToggleButton btn1value={btn1value} btn2value={btn2value} />
    </div>
    <div className='flex flex-wrap gap-4 justify-between flex-row'>
    <Carousel slides={button1result}/>
    </div>
    </div>
  )
}

export default HomeSection