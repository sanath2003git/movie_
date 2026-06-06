import "./css/App.css"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

import {
  Routes,
  Route
} from "react-router-dom"

import {
  useState,
  useEffect
} from "react"

import {
  getFavorites
} from "./services/favoriteApi"

import {
  getWatchlist
} from "./services/watchlistApi"

function App() {

  const [favorites, setFavorites] =
    useState([])

  const [watchlist, setWatchlist] =
    useState([])

  useEffect(() => {

    const token =
      localStorage.getItem(
        "access"
      )

    if (!token) return

    const fetchFavorites =
      async () => {

        try {

          const data =
            await getFavorites()

          const movies =
            data.map(
              (favorite) =>
                favorite.movie
            )

          setFavorites(
            movies
          )

        } catch (error) {

          console.error(
            "Error loading favorites:",
            error
          )

        }

      }

    fetchFavorites()

  }, [])

  useEffect(() => {

    const token =
      localStorage.getItem(
        "access"
      )

    if (!token) return

    const fetchWatchlist =
      async () => {

        try {

          const data =
            await getWatchlist()

          const movies =
            data.map(
              (item) =>
                item.movie
            )

          setWatchlist(
            movies
          )

        } catch (error) {

          console.error(
            "Error loading watchlist:",
            error
          )

        }

      }

    fetchWatchlist()

  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">

      <NavBar />

      <main className="container py-4 flex-grow-1">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                setFavorites={setFavorites}
                watchlist={watchlist}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/movie/:id"
            element={
              <MovieDetails
                favorites={favorites}
                setFavorites={setFavorites}
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App