import { getAllMoviesApi, getAllTvShowsApi, getTrendingApi } from "./ApiUrlRecord"

// export const TrendingLoader = async () => {
//   const response = await fetch(getTrendingApi);
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

export const ExploreMoviesLoader = async () => {
  const response = await axios.get(getAllMoviesApi);
  const data = response;
  console.log(data);
  return data;
}

// export const ExploreTVLoader = async () =>{
//   const response = await fetch(getAllTvShowsApi);
//   const data = response.json();
//   console.log(data);
//   return data;
// }