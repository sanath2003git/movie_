import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home({ favorites, setFavorites }) {
  const [searchQuery, setSearchQuery] = useState("")

  const movies = [
    {
      id: 1,
      title: "Jujutsu Kaisen 0",
      released_date: "2021",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png/250px-Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png"
    },
    {
      id: 2,
      title: "Your Name",
      released_date: "2016",
      url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
    },
    {
      id: 3,
      title: "Weathering With You",
      released_date: "2019",
      url: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg"
    },
    {
      id: 4,
      title: "A Silent Voice",
      released_date: "2016",
      url: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg"
    },
    {
      id: 5,
      title: "My Hero Academia: Two Heroes",
      released_date: "2018",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/My_Hero_Academia_-_Two_Heroes_poster.jpg/250px-My_Hero_Academia_-_Two_Heroes_poster.jpg"
    },
    {
      id: 6,
      title: "My Hero Academia: Heroes Rising",
      released_date: "2019",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/My_Hero_Academia_-_Heroes_Rising.jpg/250px-My_Hero_Academia_-_Heroes_Rising.jpg"
    },
    {
      id: 7,
      title: "My Hero Academia: World Heroes' Mission",
      released_date: "2021",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/World_Heroes%27_Mission_key_visual.jpeg/250px-World_Heroes%27_Mission_key_visual.jpeg"
    },
    {
      id: 8,
      title: "My Hero Academia: You're Next",
      released_date: "2024",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/My_Hero_Academia_-_You%27re_Next.png/250px-My_Hero_Academia_-_You%27re_Next.png"
    },
    {
      id: 9,
      title: "Demon Slayer: Mugen Train",
      released_date: "2020",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/250px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg"
    },
    {
      id: 10,
      title: "Demon Slayer: To the Swordsmith Village",
      released_date: "2023",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Demon-Slayer-2023.jpeg/250px-Demon-Slayer-2023.jpeg"
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for anime movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {filteredMovies.length === 0 ? (
          <div className="no-results">
            <h2>No movies found 🎬</h2>
            <p>Try another search.</p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home