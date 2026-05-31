import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  getMovieById,
  getMovies
} from "../services/api"
import MovieCard from "../components/MovieCard"

function MovieDetails({
  favorites,
  setFavorites,
  watchlist,
  setWatchlist
}) {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [relatedMovies, setRelatedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch selected movie
        const movieData = await getMovieById(id)
        setMovie(movieData)

        // Fetch all movies
        const allMovies = await getMovies()

        // Find related movies
        const related = allMovies
          .filter(
            (m) =>
              m.id !== movieData.id &&
              m.franchise === movieData.franchise
          )
          .slice(0, 4)

        setRelatedMovies(related)
      } catch (error) {
        console.error(
          "Error fetching movie:",
          error
        )
      } finally {
        setLoading(false)
      }
    }

    fetchMovieData()
  }, [id])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div
          className="spinner-border"
          role="status"
        ></div>

        <p className="mt-3">
          Loading movie...
        </p>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="container text-center mt-5">
        <h2>🎬 Movie Not Found</h2>

        <Link
          to="/"
          className="btn btn-primary mt-3"
        >
          Back Home
        </Link>
      </div>
    )
  }

  const isFavorite = favorites.some(
    (favMovie) => favMovie.id === movie.id
  )

  const isInWatchlist = watchlist.some(
    (watchMovie) => watchMovie.id === movie.id
  )

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(
        favorites.filter(
          (favMovie) => favMovie.id !== movie.id
        )
      )
    } else {
      setFavorites([...favorites, movie])
    }
  }

  function toggleWatchlist() {
    if (isInWatchlist) {
      setWatchlist(
        watchlist.filter(
          (watchMovie) => watchMovie.id !== movie.id
        )
      )
    } else {
      setWatchlist([...watchlist, movie])
    }
  }

  return (
    <div className="container py-4">
      <Link
        to="/"
        className="btn btn-danger mb-4"
      >
        ← Back
      </Link>

      <div className="row g-4 align-items-start">
        <div className="col-md-4 text-center">
          <img
            src={movie.image_url}
            alt={movie.title}
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "500px",
              objectFit: "cover"
            }}
          />
        </div>

        <div className="col-md-8">
          <h1 className="mb-3 fw-bold">
            {movie.title}
          </h1>

          <div className="mb-3">
            <span className="badge bg-primary me-2">
              {movie.genre}
            </span>

            {movie.franchise && (
              <span className="badge bg-info me-2">
                {movie.franchise}
              </span>
            )}

            <span className="badge bg-warning text-dark">
              ⭐ {movie.rating}
            </span>
          </div>

          <p className="text-secondary">
            <strong>Released:</strong>{" "}
            {movie.released_date}
          </p>

          <p className="lead">
            {movie.description}
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              className={
                isFavorite
                  ? "btn btn-danger"
                  : "btn btn-outline-danger"
              }
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <>
                  <i className="bi bi-heart-fill"></i>
                  {" "}Remove Favorite
                </>
              ) : (
                <>
                  <i className="bi bi-heart"></i>
                  {" "}Add Favorite
                </>
              )}
            </button>

            <button
              className={
                isInWatchlist
                  ? "btn btn-success"
                  : "btn btn-outline-success"
              }
              onClick={toggleWatchlist}
            >
              {isInWatchlist ? (
                <>
                  <i className="bi bi-bookmark-fill"></i>
                  {" "}Remove Watchlist
                </>
              ) : (
                <>
                  <i className="bi bi-bookmark"></i>
                  {" "}Add Watchlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {relatedMovies.length > 0 && (
        <div className="mt-5">
          <h3 className="mb-4">
            🎬 Related Movies
          </h3>

          <div className="row">
            {relatedMovies.map(
              (relatedMovie) => (
                <div
                  key={relatedMovie.id}
                  className="col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <MovieCard
                    movie={relatedMovie}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails