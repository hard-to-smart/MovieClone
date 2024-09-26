import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ToggleButton from '../components/ToggleButton'
import HomeSection from './HomeSection'
import Carousel from '../components/Carousel'
import axios from 'axios'
import { getImageUrl, getUpcomingMoviesApi } from '../ApiUrlRecord'
const Home = () => {
  const [banner, getBanner] = useState();
  const fetchBannerImage = async () =>{
    const response = await axios.get(getUpcomingMoviesApi);
    getBanner(response.data.results);
  }

  useEffect(() => {
    fetchBannerImage();
  }, [])

  return (
    <>
        <Banner/>
        <HomeSection/>
        <HomeSection/>
        <HomeSection/>
        <Carousel/>
    </>
  )
}

export default Home