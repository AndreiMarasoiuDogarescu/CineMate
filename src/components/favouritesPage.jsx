import React from 'react';
import RemoveFavourite from './removeFavorite';

const FavouritesPage = () => {

    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    const RemoveFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
          (favourite) => favourite.imdbID !== movie.imdbID
        );
      
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }
  
    return (
      <div>
        <MovieList movies={movieFavourites} handleFavouritesClick={RemoveFavouriteMovie} favouriteComponent={RemoveFavourite} />
      </div>
    );
  };

export default FavouritesPage;