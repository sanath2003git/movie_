import { useParams, Link } from "react-router-dom"
import "../css/MovieDetails.css"

function MovieDetails({ favorites, setFavorites }) {
  const { id } = useParams()

  const movies = [
    {
      id: 1,
      title: "Jujutsu Kaisen 0",
      released_date: "2021",
      description:
        "Yuta Okkotsu joins Jujutsu High and learns to control the powerful cursed spirit Rika.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png/250px-Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png"
    },
    {
      id: 2,
      title: "Your Name",
      released_date: "2016",
      description:
        "Two teenagers mysteriously swap bodies and form a deep connection.",
      url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
    },
    {
      id: 3,
      title: "Weathering With You",
      released_date: "2019",
      description:
        "A boy meets a girl who can control the weather.",
      url: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg"
    },
    {
      id: 4,
      title: "A Silent Voice",
      released_date: "2016",
      description:
        "A former bully seeks redemption after hurting a deaf girl in school.",
      url: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg"
    },
    {
      id: 5,
      title: "My Hero Academia: Two Heroes",
      released_date: "2018",
      description:
        "Deku and All Might face villains on I-Island.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/My_Hero_Academia_-_Two_Heroes_poster.jpg/250px-My_Hero_Academia_-_Two_Heroes_poster.jpg"
    },
    {
      id: 6,
      title: "My Hero Academia: Heroes Rising",
      released_date: "2019",
      description:
        "Class 1-A fights a dangerous villain on Nabu Island.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/My_Hero_Academia_-_Heroes_Rising.jpg/250px-My_Hero_Academia_-_Heroes_Rising.jpg"
    },
    {
      id: 7,
      title: "My Hero Academia: World Heroes' Mission",
      released_date: "2021",
      description:
        "Heroes around the world unite against a deadly threat.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/World_Heroes%27_Mission_key_visual.jpeg/250px-World_Heroes%27_Mission_key_visual.jpeg"
    },
    {
      id: 8,
      title: "My Hero Academia: You're Next",
      released_date: "2024",
      description:
        "A new enemy rises while Deku continues his journey.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/My_Hero_Academia_-_You%27re_Next.png/250px-My_Hero_Academia_-_You%27re_Next.png"
    },
    {
      id: 9,
      title: "Demon Slayer: Mugen Train",
      released_date: "2020",
      description:
        "Tanjiro joins Rengoku aboard a mysterious train.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/250px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg"
    },
    {
      id: 10,
      title: "Demon Slayer: To the Swordsmith Village",
      released_date: "2023",
      description:
        "Tanjiro visits the swordsmith village and faces new demons.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Demon-Slayer-2023.jpeg/250px-Demon-Slayer-2023.jpeg"
    }
  ]

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  )

  if (!movie) {
    return <h2>Movie not found</h2>
  }

  const isFavorite = favorites.some(
    (favMovie) => favMovie.id === movie.id
  )

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(
        favorites.filter(
          (favMovie) => favMovie.id !== movie.id
        )
      )
    } else {
      setFavorites([...favorites, movie])
    }
  }

  return (
    <div className="movie-details">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="details-container">
        <img
          src={movie.url}
          alt={movie.title}
          className="details-poster"
        />

        <div className="details-info">
          <h1>{movie.title}</h1>

          <p className="year">
            Released: {movie.released_date}
          </p>

          <p className="description">
            {movie.description}
          </p>

          <button
            className="favorite-detail-btn"
            onClick={toggleFavorite}
          >
            {isFavorite
              ? "❤️ Remove Favorite"
              : "🤍 Add Favorite"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails