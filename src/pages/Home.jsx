import React, { Suspense } from 'react'
import Banner from '../components/Banner'
import HomeSection from '../components/HomeSection'
import { Await, useLoaderData } from 'react-router-dom'
import { getImageUrl } from '../ApiUrlRecord'
import abc from '../assets/card.png'
import DummyCard from '../components/DummyCard'
export const DummyCardArray = ({i}) => {
  return  Array.from({ length: i }).map((_, index) => <DummyCard key={index} />)
 }
const Home = () => {

  const {
    popularMovies,
    popularTV,
    topRatedMovies,
    topRatedTV,
    trendingDay,
    trendingWeek,
    upcoming
  } = useLoaderData();

  // console.log(result)
  // const backdropPath = upcoming?.some(item => item?.backdrop_path)
  // ? getImageUrl + result[0].filter(item => item?.backdrop_path)[Math.floor(Math.random() * result[0].filter(item => item?.backdrop_path).length)].backdrop_path
  // : abc;

  return (
    <>
        <Suspense fallback={<Banner image={abc}/>}>
        <Await resolve={upcoming}>
          {(upcomingData) => {
            const filtered = (upcomingData || []).filter(item => item?.backdrop_path);
            const backdropPath =
              filtered.length > 0
                ? getImageUrl + filtered[Math.floor(Math.random() * filtered.length)].backdrop_path
                : abc;
            return <Banner image={backdropPath} />;
          }}
        </Await>
      </Suspense>        
       <Suspense fallback={<div className='flex flex-row justify-center mt-20'><DummyCardArray i={5} /></div>}>
        <Await resolve={Promise.all([trendingDay, trendingWeek])}>
          {([dayData, weekData]) => (
            <HomeSection
              title="Trending"
              button1result={dayData}
              button2result={weekData}
              btn1value="Day"
              btn2value="Week"
              displayTitleInCard={false}
            />
          )}
        </Await>
      </Suspense>        
      <Suspense fallback={<div className='flex flex-row justify-center mt-20'><DummyCardArray i={5} /></div>}>
        <Await resolve={Promise.all([popularMovies, popularTV])}>
          {([moviesData, tvData]) => (
            <HomeSection
              title="What's Popular"
              button1result={moviesData}
              button2result={tvData}
              btn1value="Movies"
              btn2value="Tv Shows"
              displayTitleInCard={false}
            />
          )}
        </Await>
      </Suspense>        
      <Suspense fallback={<div className='flex flex-row justify-center mt-20'><DummyCardArray i={5} /></div>}>
        <Await resolve={Promise.all([topRatedMovies, topRatedTV])}>
          {([moviesData, tvData]) => (
            <HomeSection
              title="Top Rated"
              button1result={moviesData}
              button2result={tvData}
              btn1value="Movies"
              btn2value="Tv Shows"
              displayTitleInCard={false}
            />
          )}
        </Await>
      </Suspense>    
      </>
  )
}

export default Home