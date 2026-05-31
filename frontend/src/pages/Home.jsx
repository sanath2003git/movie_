import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getMovies } from "../services/api"

function Home({
  favorites,
  setFavorites,
  watchlist = []
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [sortBy, setSortBy] = useState("")

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const genres = [
    "All",
    "Action",
    "Romance",
    "Fantasy",
    "Drama"
  ]

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)

        const data = await getMovies(
          searchQuery
        )

        setMovies(data)

      } catch (error) {
        console.error(
          "Error fetching movies:",
          error
        )
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(
      fetchMovies,
      300
    )

    return () => clearTimeout(timer)

  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  let filteredMovies = movies.filter(
    (movie) => {

      const matchesGenre =
        selectedGenre === "All" ||
        movie.genre === selectedGenre

      return matchesGenre
    }
  )

  filteredMovies = [...filteredMovies]

  switch (sortBy) {
    case "rating-desc":
      filteredMovies.sort(
        (a, b) => b.rating - a.rating
      )
      break

    case "rating-asc":
      filteredMovies.sort(
        (a, b) => a.rating - b.rating
      )
      break

    case "year-desc":
      filteredMovies.sort(
        (a, b) =>
          Number(b.released_date) -
          Number(a.released_date)
      )
      break

    case "year-asc":
      filteredMovies.sort(
        (a, b) =>
          Number(a.released_date) -
          Number(b.released_date)
      )
      break

    case "title-asc":
      filteredMovies.sort((a, b) =>
        a.title.localeCompare(b.title)
      )
      break

    case "title-desc":
      filteredMovies.sort((a, b) =>
        b.title.localeCompare(a.title)
      )
      break

    default:
      break
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div
          className="spinner-border"
          role="status"
        ></div>

        <p className="mt-3">
          Loading movies...
        </p>
      </div>
    )
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSearch}
        className="row justify-content-center mb-4"
      >
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search for anime movies..."
              className="form-control"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(
                  e.target.value
                )
              }
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              <i className="bi bi-search"></i>
              {" "}Search
            </button>
          </div>
        </div>
      </form>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedGenre}
            onChange={(e) =>
              setSelectedGenre(
                e.target.value
              )
            }
          >
            {genres.map((genre) => (
              <option
                key={genre}
                value={genre}
              >
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
          >
            <option value="">
              Sort By
            </option>

            <option value="rating-desc">
              Rating (High → Low)
            </option>

            <option value="rating-asc">
              Rating (Low → High)
            </option>

            <option value="year-desc">
              Newest First
            </option>

            <option value="year-asc">
              Oldest First
            </option>

            <option value="title-asc">
              A-Z
            </option>

            <option value="title-desc">
              Z-A
            </option>
          </select>
        </div>
      </div>

      {/* Statistics Dashboard */}

      <div className="row mb-4">
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h3>{movies.length}</h3>
              <p className="mb-0">
                🎬 Movies
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h3>
                {favorites.length}
              </h3>

              <p className="mb-0">
                ❤️ Favorites
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h3>
                {watchlist.length}
              </h3>

              <p className="mb-0">
                ⏰ Watchlist
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h3>
                {genres.length - 1}
              </h3>

              <p className="mb-0">
                🎭 Genres
              </p>
            </div>
          </div>
        </div>
      </div>

      {filteredMovies.length === 0 ? (
        <div className="text-center mt-5">
          <h2>
            No movies found 🎬
          </h2>

          <p className="text-muted">
            Try another search.
          </p>
        </div>
      ) : (
        <div className="row">
          {filteredMovies.map(
            (movie) => (
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
            )
          )}
        </div>
      )}
    </div>
  )
}

export default Home