import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Watchlist from './pages/Watchlist'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist")
    return savedWatchlist ? JSON.parse(savedWatchlist) : []
  })

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist)
    )
  }, [watchlist])

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
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                favorites={favorites}
                setFavorites={setFavorites}
              />
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