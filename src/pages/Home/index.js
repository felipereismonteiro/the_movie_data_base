import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import key from "../../config/key";
import { Container, MovieList, Movie } from "./styles";

function Home () {

    
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])


    return( 
        <>

            <h1>Movies</h1>
            <MovieList>

            {movies.map(movie => {
                return(
                    <Movie>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                        </Link> 
                        <span>{movie.title}</span>
                    </Movie>
                )
            })}
            </MovieList>
        </>
    )
}

export default Home;