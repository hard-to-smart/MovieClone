import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import TVShows from '../pages/TVShows'
import App from '../App'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Search from '../pages/Search'
import Error404 from '../pages/Error404'
// import { ExploreMoviesLoader } from '../Loader'

export const AllRoute = createBrowserRouter([
    {   
        path:'/',
        element:<App/>,
        errorElement:<Error404/>,
        children:[    
            {
                index:true,
                element: <Home/>,
                // loader: TrendingLoader
            },
            {   
                path:'explore',
                children:[
                    {   
                        index:true,
                        path:'movie',
                        element:<Movies/>,
                        // loader: ExploreMoviesLoader
                    },
                    {
                        path:'tv',
                        element:<TVShows/>
                    }
                ]
            },
            {
                path:'/search',
                element:<Search/>,
                
            }
        ]
    },
    
])
