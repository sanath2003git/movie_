import MovieCard from "../components/MovieCard"
import "../css/Favorites.css"

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies you love ❤️</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites