import MovieCard from "../components/MovieCard";

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          ❤️ Your Favorites
        </h2>

        <p className="text-muted">
          Total Movies: {favorites.length}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <h3>No Favorite Movies Yet</h3>

          <p className="text-muted">
            Start adding movies you love ❤️
          </p>
        </div>
      ) : (
        <div className="row justify-content-center">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="col-sm-6 col-md-4 col-lg-3 mb-4 fade-in"
            >
              <MovieCard
                movie={movie}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;