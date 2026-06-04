import { Link } from "react-router-dom"

import {
  addFavorite,
  deleteFavorite
} from "../services/favoriteApi"

function MovieCard({
  movie,
  favorites,
  setFavorites
}) {

  const isFavorite = favorites.some(
    (favMovie) =>
      favMovie.id === movie.id
  )

  async function onFavoriteClick(e) {

    e.preventDefault()

    try {

      if (isFavorite) {

        await deleteFavorite(
          movie.id
        )

        setFavorites(
          favorites.filter(
            (favMovie) =>
              favMovie.id !== movie.id
          )
        )

      } else {

        await addFavorite(
          movie.id
        )

        setFavorites([
          ...favorites,
          movie
        ])

      }

    } catch (error) {

      console.error(
        "Favorite error:",
        error
      )

    }
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="text-decoration-none"
    >
      <div className="card h-100 shadow-sm border-0">

        <img
          src={movie.image_url}
          alt={movie.title}
          className="card-img-top"
          style={{
            height: "400px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">

          <div className="mb-2">

            <span className="badge bg-primary me-2">
              {movie.genre}
            </span>

            <span className="badge bg-warning text-dark">
              ⭐ {movie.rating}
            </span>

          </div>

          <h5 className="card-title text-dark fw-bold">
            {movie.title}
          </h5>

          <p className="card-text text-muted mb-3">
            {movie.released_date}
          </p>

          <div className="mt-auto">

            <button
              className={
                isFavorite
                  ? "btn btn-danger w-100"
                  : "btn btn-outline-danger w-100"
              }
              onClick={onFavoriteClick}
            >

              {isFavorite ? (
                <>
                  <i className="bi bi-heart-fill"></i>
                  {" "}Favorite
                </>
              ) : (
                <>
                  <i className="bi bi-heart"></i>
                  {" "}Favorite
                </>
              )}

            </button>

          </div>

        </div>

      </div>
    </Link>
  )
}

export default MovieCard