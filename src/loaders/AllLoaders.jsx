import axios from "axios"
import { getAllMovieApi } from "../ApiUrlRecord";
export const ExploreMoviesLoader = async() => {
    const response = await axios.get(getAllMovieApi);
    return response.data.results
}
