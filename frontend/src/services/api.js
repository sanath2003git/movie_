import axios from "axios"

const API_URL =
  "http://127.0.0.1:8000/api/movies/"


export const getMovies = async (
  search = ""
) => {

  const response = await axios.get(
    API_URL,
    {
      params: {
        search
      }
    }
  )

  return response.data
}


export const getMovieById = async (
  id
) => {

  const response = await axios.get(
    `${API_URL}${id}/`
  )

  return response.data
}