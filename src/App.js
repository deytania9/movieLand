import { useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL='http://www.omdbapi.com?apikey=32954b69'

/*const movie={
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Title": "Annabelle",
    "Type": "movie",
    "Year": "2014",
    "imdbID":"tt3322940"
}*/

const App=()=>{
    const [movies, setMovies]= useState([]);
    const [searchTerm, setsearchTerm]=useState('');

    const searchMovies=async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Annabelle');
    },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=>setsearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length>0?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ):
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;

//32954b69