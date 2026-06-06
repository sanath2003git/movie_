import axios from "axios"

const API_URL =
  "http://127.0.0.1:8000/api/movies/watchlist/"


export const getWatchlist =
  async () => {

    const response =
      await axios.get(
        API_URL
      )

    return response.data
  }


export const addWatchlist =
  async (movieId) => {

    const response =
      await axios.post(
        `${API_URL}add/`,
        {
          movie_id: movieId
        }
      )

    return response.data
  }


export const deleteWatchlist =
  async (movieId) => {

    const response =
      await axios.delete(
        `${API_URL}delete/${movieId}/`
      )

    return response.data
  }