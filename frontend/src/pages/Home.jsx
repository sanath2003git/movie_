import MovieCard from "../components/MovieCard"
import  {useState} from "react"

function Home(){
    const [searchQuery,setSearchQuery] =  useState("");
    const movies = [
        {id: 1,title:"John Wick", released_date:" 2014",url:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/250px-John_Wick_TeaserPoster.jpg"},
        {id: 2,title:"Venom", released_date:"2018",url:"https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Venom_%282018_film%29_poster.png/250px-Venom_%282018_film%29_poster.png"},
        {id: 3,title:"Iron Man", released_date:"2008",url:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Iron_Man_%282008_film%29_poster.jpg/250px-Iron_Man_%282008_film%29_poster.jpg"},
    ];

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };

    return <div className="home">
        <form onSubmit={handleSearch}className="search-form">
            <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
}
export default Home