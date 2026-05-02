import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 && 
        <MovieCard movie={{title: "new film", release_date:"2025", url: "https://picsum.photos/200/300"}}></MovieCard>}
    </>
      
  );
}


export default App
