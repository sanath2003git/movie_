import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "new film", release_date:"2025", url: "https://picsum.photos/200/300"}}></MovieCard>
      <MovieCard movie={{title: "new film 2", release_date:"2026", url: "https://picsum.photos/200/300"}}></MovieCard>
    </>
      
  )
}


export default App
