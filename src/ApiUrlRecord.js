export const getImageUrl = "https://image.tmdb.org/t/p/original/" 

export const getTrendingDayApi = "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=" + import.meta.env.VITE_API_KEY

export const getTrendingWeekApi = "https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=" + import.meta.env.VITE_API_KEY

// (to get popular)
export const getPopularMoviesApi =  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=" + import.meta.env.VITE_API_KEY

export const getPopularTvShowApi =  "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=" + import.meta.env.VITE_API_KEY

export const getTopRatedMovieApi =  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=" + import.meta.env.VITE_API_KEY

export const getTopRatedTVShowApi =  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=" + import.meta.env.VITE_API_KEY

export const getUpcomingMoviesApi = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=" + import.meta.env.VITE_API_KEY 

export const getGenreApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_API_KEY
// (to get geners)

export const getAllTvShowsApi = "https://api.themoviedb.org/3/discover/tv?language=en-US&api_key=" + import.meta.env.VITE_API_KEY

// with geners & sorting ()
export const getSortedTvShowsApi = "https://api.themoviedb.org/3/discover/tv?page=3&with_genres=16&sort_by=popularity.desc"

export const getAllMoviesApi = `https://api.themoviedb.org/3/discover/movie?language=en-US/changes&api_key=${import.meta.env.VITE_API_KEY}`; 

export const getSingleMovieApi = "https://api.themoviedb.org/3/movie/movie_id?video=true&language=en-US&api_key=" + import.meta.env.VITE_API_KEY

export const getSingleTvShowApi = 'https://api.themoviedb.org/3/tv/series_id?language=en-US&api_key=' + import.meta.env.VITE_API_KEY

export const getSearchMovie = "https://api.themoviedb.org/3/search/multi?api_key=" + import.meta.env.VITE_API_KEY

export const getSearchTvShow = "https://api.themoviedb.org/3/search/multi?api_key="+ import.meta.env.VITE_API_KEY

export const getVideo = (path_name) =>{ return `https://api.themoviedb.org/3${path_name}/videos?&api_key=` + import.meta.env.VITE_API_KEY}
export const getCast = (path_name) =>{ return `https://api.themoviedb.org/3${path_name}/credits?api_key=` + import.meta.env.VITE_API_KEY}
export const getVideoThumbnail = (key)=> `https://img.youtube.com/vi/${key}/mqdefault.jpg`
export const getVideoUrl = (key) => `https://www.youtube.com/embed/${key}`

export const getRecommendationsApi = (path_name) => {return `https://api.themoviedb.org/3${path_name}/recommendations?api_key=`+ import.meta.env.VITE_API_KEY}

export const getSimilarApi = (path_name) => { return `https://api.themoviedb.org/3${path_name}/similar?api_key=`+ import.meta.env.VITE_API_KEY}