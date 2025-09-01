import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import HomeSection from '../components/HomeSection'
import { useLoaderData } from 'react-router-dom'
import { getImageUrl } from '../ApiUrlRecord'
import abc from '../assets/card.png'
const Home = () => {

  const result = useLoaderData()
  const backdropPath = Array.isArray(result) && result[0]?.some(item => item?.backdrop_path)
  ? getImageUrl + result[0].filter(item => item?.backdrop_path)[Math.floor(Math.random() * result[0].filter(item => item?.backdrop_path).length)].backdrop_path
  : abc;
  return (
    <>
        <Banner image={backdropPath}/>
        <HomeSection title='Trending' button1result= {result[1]} button2result={result[2]} btn1value='Day' btn2value='Week' displayTitleInCard={false}/>
        <HomeSection title= "What's Popular" button1result= {result[3]} button2result={result[4]} btn1value='Movies' btn2value='Tv Shows'  displayTitleInCard={false}/>
        <HomeSection title="Top Rated" button1result= {result[5]} button2result={result[6]} btn1value='Movies' btn2value='Tv Shows'  displayTitleInCard={false}/>
    </>
  )
}

export default Home