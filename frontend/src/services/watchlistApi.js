import axios from "axios"

const API_URL =
  "http://127.0.0.1:8000/api/movies/watchlist/"

const getAuthHeaders = () => {

  const token =
    localStorage.getItem(
      "access"
    )

  return {
    headers: {
      Authorization:
        `Bearer ${token}`
    }
  }
}

export const getWatchlist =
  async () => {

    const response =
      await axios.get(
        API_URL,
        getAuthHeaders()
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
        },
        getAuthHeaders()
      )

    return response.data
  }

export const deleteWatchlist =
  async (movieId) => {

    const response =
      await axios.delete(
        `${API_URL}delete/${movieId}/`,
        getAuthHeaders()
      )

    return response.data
  }