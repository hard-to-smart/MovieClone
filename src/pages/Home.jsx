import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import HomeSection from './HomeSection'
import { useLoaderData } from 'react-router-dom'
import { getImageUrl } from '../ApiUrlRecord'

const Home = () => {

  const result = useLoaderData()

  const backdropPath = getImageUrl + result[0][Math.floor(Math.random() * (result[0].length - 0) + 0)].backdrop_path;
  console.log(backdropPath, "just checking")

  return (
    <>
        <Banner image={backdropPath}/>
        <HomeSection title='Trending' button1result= {result[1]} button2result={result[2]} btn1value='Day' btn2value='Week'/>
        <HomeSection title= "What's Popular" button1result= {result[3]} button2result={result[4]} btn1value='Movies' btn2value='Tv Shows'/>
        <HomeSection title="Top Rated" button1result= {result[5]} button2result={result[6]} btn1value='Movies' btn2value='Tv Shows'/>
    </>
  )
}

export default Home