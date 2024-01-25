import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AddFavourite = () => {
    return (
        <>
        <span 
        className='favourite'>Add to Favourites
        <FavoriteBorderIcon fontSize='small' /></span>
        </>
    );
}

export default AddFavourite;