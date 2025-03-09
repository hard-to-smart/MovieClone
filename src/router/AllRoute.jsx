import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
import SinglePage from "../pages/SinglePage";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => await Promise.all(HomePageLoaders),
      },
      {
        path: "explore",
        children: [
          {
            path: "movie",
            element: <Movies />,
            loader: ExploreMoviesLoader,
          },
          {
            path: "tv",
            element: <TVShows />,
            loader: ExploreTVLoader,
          },
        ],
      },
      {
        path: ":type/:id",
        element: <SinglePage />,
        loader: async ({ request, params }) => {
            const { type, id } = params;
            console.log(`${type}/${id}`)
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
