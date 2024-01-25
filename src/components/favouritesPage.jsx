import React from 'react';
import { useState, useEffect } from 'react';
import RemoveFavourite from './removeFavorite';
import MovieList from './movieList';



const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([]);
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    const RemoveFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
          (favourite) => favourite.imdbID !== movie.imdbID
        );
      
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }

      const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
      }
      
      // Retrieve from local storage on load
      
      useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        if (movieFavourites) {
          setFavourites(movieFavourites);
        }
      }, []);
  
    return (
      <div>
        <MovieList movies={movieFavourites} handleFavouritesClick={RemoveFavouriteMovie} favouriteComponent={RemoveFavourite} />
      </div>
    );
  };

export default FavouritesPage;