import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ToggleButton from '../components/ToggleButton'
import HomeSection from './HomeSection'
<<<<<<< HEAD
import Carousel from '../components/Carousel'
import axios from 'axios'
import { getImageUrl, getUpcomingMoviesApi } from '../ApiUrlRecord'
const Home = () => {
  const [banner, getBanner] = useState();
  const fetchBannerImage = async () =>{
    const response = await axios.get(getUpcomingMoviesApi);
    const data = response.data.results;
    console.log(data);
    const randomImage = Math.floor(Math.random() * (data.length - 0) + 0);
    getBanner(randomImage);
  }

  useEffect(() => {
    fetchBannerImage();
  }, [])

  console.log(banner);
const randomImage = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}




  return (
    <>
        <Banner/>
        <HomeSection/>
        <HomeSection/>
        <HomeSection/>
        <Carousel/>
=======
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
>>>>>>> refs/remotes/origin/main
    </>
  )
}

export default Home