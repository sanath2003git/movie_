import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1,title:"John Wick", released_date:" 2014",url:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/250px-John_Wick_TeaserPoster.jpg"},
        {id: 2,title:"Venom", released_date:"2018",url:"https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Venom_%282018_film%29_poster.png/250px-Venom_%282018_film%29_poster.png"},
        {id: 3,title:"Iron Man", released_date:"2008",url:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Iron_Man_%282008_film%29_poster.jpg/250px-Iron_Man_%282008_film%29_poster.jpg"},
    ]
    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
}
export default Home