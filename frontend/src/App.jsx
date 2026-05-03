import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  return (
    <div>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                setFavorites={setFavorites}
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
        </Routes>
      </main>
    </div>
  )
}

export default App