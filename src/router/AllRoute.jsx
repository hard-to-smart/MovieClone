import React from "react";
import { createBrowserRouter, defer } from "react-router-dom";
import TVShows from "../pages/TVShows";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Search from "../pages/Search";
import Error404 from "../pages/Error404";
import {
  ExploreMoviesLoader,
  ExploreTVLoader,
  HomePageLoaders,
  SearchLoader,
  SinglePageDetailsLoaders,
  getCastDetails,
  getSimilar,
  getSimilarRecommendations,
  getTrailerDetails,
} from "../loaders/AllLoaders";
// loader.js or your route file
import SinglePage from "../pages/SinglePage";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader:
          () => {
            return HomePageLoaders(); // returns the deferred object directly
          }
      },
      {
        path: "explore",
        children: [
          {
            path: "movie",
            element: <Movies />,
            loader: () => defer({
              exploreMovies: ExploreMoviesLoader()
            }) 
          },
          {
            path: "tv",
            element: <TVShows />,
            loader: ()=> defer({exploreTV: ExploreTVLoader() }) ,
          },
        ],
      },
      {
        path: ":type/:id",
        element: <SinglePage />,
        loader: async ({ request, params }) => {
            const { type, id } = params;
            const loaderMap = {
              movie: SinglePageDetailsLoaders.SingleMovieLoader,
              tv: SinglePageDetailsLoaders.SingleTvLoader,
            };
        
            const selectedLoader = loaderMap[type];
            if (!selectedLoader) throw new Error("Invalid type");
        
            return await Promise.all([
              selectedLoader({ params }),
              getCastDetails(`/${type}/${id}`),
              getTrailerDetails(`/${type}/${id}`),
              getSimilarRecommendations(`/${type}/${id}`),
              getSimilar(`/${type}/${id}`),
            ]);
          },
        },
      {
        path: "/search",
        element: <Search />,
        loader: SearchLoader,
        errorElement: <Error404 value="no search results found" />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
