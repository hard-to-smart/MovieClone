import { createContext, useContext, useEffect, useState } from "react";
import { getGenreApi } from "../ApiUrlRecord";

const GenreContext = createContext({
    genres: [],
    setGenres: () => {},
})

export const GenreProvider = ({children})=>{
    const [genres, setGenres] = useState();

    useEffect(()=>{
        const getGenre = async () => {
            try {
              const response = await fetch(getGenreApi);
              const data = await response.json();
              setGenres(data.genres || []);
            } catch (error) {
              console.error("Failed to fetch genres:", error);
              setGenres([]);
            }
          };
          getGenre()
    }, [])

    return (
        <GenreContext.Provider value={{genres, setGenres}}>
            {children}
        </GenreContext.Provider>
    )
}

export const useGenres = ()=> useContext(GenreContext);

