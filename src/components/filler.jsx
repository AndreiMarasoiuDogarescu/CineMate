import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GenerateButton from './buttonUsage';
import ThemeProviderComponent from './themeProvider';
import heroImage from '../assets/section-background.jpg';
import InputTitle from './titleInput';
import InputYear from './yearInput';
import MovieList from './movieList';
import AddFavourite from './addFavorite';
import StickyButton from './goToButton';



export default function Filler() {
    const searchRef = useRef(null);

  const scrollToSearch = () => {
    searchRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    const [movies, setMovies]  = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const [favourites, setFavourites] = useState([]);
  
  
    const getMovie = async (searchValue, yearValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=409fda88&y=${yearValue}&type=movie`
  
    const response = await fetch(url)
    const responseJson = await response.json();
  
   if(responseJson.Search){
    setMovies(responseJson.Search);
   }
    
  };
  
  const handleButtonClick = () => {
    getMovie(searchValue, yearValue);
  };
    
  // Add favourites 
  
  const AddFavouriteMovie = (movie) => {
    const alreadyInFavourites = favourites.find(favourite => favourite.imdbID === movie.imdbID);
  
    if (!alreadyInFavourites) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };
  
  // Remove favourites
  
  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
  
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  
  // Local storage functions
  
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
      <ThemeProviderComponent>
        <div>
          <div className='intro' style={{ backgroundImage: `url(${heroImage})`}}>
            <div className='titles'>
            <h1>CineMate</h1>
            <p>Seen a lot? Are you forgetting more? Cinemate is your mate - save your memories... digitally.</p>
            </div>
          </div>
          <div className='search' ref={searchRef}>
            <InputTitle searchValue={searchValue} setSearchValue={setSearchValue}/>
            <InputYear yearValue={yearValue} setYearValue={setYearValue}/>
          </div>
            <GenerateButton onGenerate={handleButtonClick} />
          <div>
            <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent ={AddFavourite}/>
            </div>
            <div>
            <StickyButton scrollToSearch={scrollToSearch} targetRef={searchRef}/>
            </div>
        </div>
      </ThemeProviderComponent>
    )
  }


