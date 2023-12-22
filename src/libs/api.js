import axios from "axios";

const baseUrl ="https://api.themoviedb.org/3"
const apiKey = "4d40df940d3dc6ff9beaa1b1129d4ba1"

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
    return movie.data.results
}
export const getMoviePoster = async(id) => {
    const movie = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}`)
    return movie.data.results
}
export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}
