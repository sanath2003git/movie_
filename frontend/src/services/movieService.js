import movies from "../data/movies"

export const getMovies = () => {
  return movies
}

export const getMovieById = (id) => {
  return movies.find(
    (movie) => movie.id === Number(id)
  )
}

export const getRelatedMovies = (movieId) => {
  const movie = getMovieById(movieId)

  if (!movie) return []

  return movies
    .filter(
      (m) =>
        m.id !== movie.id &&
        m.franchise === movie.franchise
    )
    .slice(0, 4)
}