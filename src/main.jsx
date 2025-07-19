import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AllRoute } from './router/AllRoute.jsx'
import Spinner from './components/Spinner.jsx'
import { GenreProvider } from './hooks/GenreContext.jsx'

createRoot(document.getElementById('root')).render(
    <GenreProvider>
    <RouterProvider
    router={AllRoute} 
    // fallbackElement= {<Spinner/>}
    />
    </GenreProvider>
)
