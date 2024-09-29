import { getAllMoviesApi, getAllTvShowsApi, getPopularMoviesApi, getPopularTvShowApi, getSearchMovie, getSearchTvShow, getSingleMovieApi, getSingleTvShowApi, getTopRatedMovieApi, getTopRatedTVShowApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "../ApiUrlRecord"
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

export const SingleMovieLoader = async ({params}) =>{
  const { id } = params;
  const response = await axios.get(getSingleMovieApi.replace("movie_id", id));
  return response.data;
}

export const SingleTvLoader = async ({params}) =>{
  const { id } = params;
  const response = await axios.get(getSingleTvShowApi.replace("series_id", id));
  return response.data;
}

// export const SearchLoader = async ({params}) =>{
//   const query = params.query;
//   try{
//     const response = await axios.get(`${getSearchMovie}&query=${query}`);
//     return response.data.results;
//   }
//   catch (error){
//     console.error('Error fetching search results:', error); 
//     throw new Response('Failed to fetch search results')
//   }
// }

export const SearchLoader = async ({request}) =>{
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  try{
    const [searchMoviesResponse, searchTvShowsResponse] = await Promise.all([
      axios.get(`${getSearchMovie}&query=${query}`),
      axios.get(`${getSearchTvShow}&query=${query}`)
      ])
    return searchMoviesResponse.data.results.concat(searchTvShowsResponse.data.results)
  }
  catch (error){
    console.error('Error fetching search results:', error); 
    throw new Response('Failed to fetch search results')
  }
}
export const HomePageLoaders = [UpcomingMoviesLoader(), TrendingDayLoader(), TrendingWeekLoader(), TopRatedMovieLoader(), TopRatedTvShowLoader(), PopularMovieShowLoader(), PopularTvShowLoader()]