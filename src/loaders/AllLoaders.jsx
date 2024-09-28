import { getAllMoviesApi, getAllTvShowsApi, getPopularMoviesApi, getPopularTvShowApi, getTopRatedMovieApi, getTopRatedTVShowApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "./ApiUrlRecord"
import axios from "axios"

export const ExploreMoviesLoader = async () => {
  const response = await axios.get(getAllMoviesApi);
  return response.data.results;
}

export const ExploreTVLoader = async () =>{
  const response = await axios.get(getAllTvShowsApi);
  return response.data.results;
}

export const UpcomingMoviesLoader = async ()=>{
  const response = await axios.get(getUpcomingMoviesApi);
  return response.data.results;
}

export const TrendingDayLoader = async () => {
  const response = await axios.get(getTrendingDayApi);
  return response.data.results;
}

export const TrendingWeekLoader = async () =>{
  const response = await axios.get(getTrendingWeekApi);
  return response.data.results;
}

export const TopRatedMovieLoader = async () =>{
  const response = await axios.get(getTopRatedMovieApi);
  return response.data.results;
}

export const TopRatedTvShowLoader = async () =>{
  const response = await axios.get(getTopRatedTVShowApi);
  return response.data.results;
}

export const PopularMovieShowLoader = async () =>{
  const response = await axios.get(getPopularMoviesApi);
  return response.data.results;
}

export const PopularTvShowLoader = async () => {
  const response = await axios.get(getPopularTvShowApi);
  return response.data.results;
}

export const HomePageLoaders = [UpcomingMoviesLoader(), TrendingDayLoader(), TrendingWeekLoader(), TopRatedMovieLoader(), TopRatedTvShowLoader(), PopularMovieShowLoader(), PopularTvShowLoader()]