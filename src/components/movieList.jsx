import React from "react";
import "../movie-list.css";

const MovieList = (props) => {  
    const FavouriteComponent = props.favouriteComponent;

    return (
        <div className="movie-list">
            {props.movies && props.movies.map((movie, index) => (
            <div className="movie-item" key={index}>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt="movieposter" />
                <div onClick={() => props.handleFavouritesClick(movie)} className="overlay">
                    <FavouriteComponent />
                </div>
                </div>
    ))}
        </div>
    );
};

export default MovieList;