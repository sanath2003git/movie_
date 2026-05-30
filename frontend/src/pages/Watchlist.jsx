import MovieCard from "../components/MovieCard"

function Watchlist({
  watchlist,
  favorites,
  setFavorites
}) {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">
        My Watchlist 
      </h2>

      {watchlist.length === 0 ? (
        <div className="text-center">
          <h3>No Movies in Watchlist</h3>
          <p className="text-muted">
            Add movies to watch later.
          </p>
        </div>
      ) : (
        <div className="row">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="col-sm-6 col-md-4 col-lg-3 mb-4"
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
  )
}

export default Watchlist