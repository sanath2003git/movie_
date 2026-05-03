import "../css/MovieCard.css"
import { Link } from "react-router-dom"

function MovieCard({ movie, favorites, setFavorites }) {
  const isFavorite = favorites.some(
    (favMovie) => favMovie.id === movie.id
  )

  function onFavoriteClick(e) {
    e.preventDefault()

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      )

      setFavorites(updatedFavorites)
    } else {
      setFavorites([...favorites, movie])
    }
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card-link"
    >
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.url} alt={movie.title} />

          <div className="movie-overlay">
            <button
              className="favorite-btn"
              onClick={onFavoriteClick}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.released_date}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard