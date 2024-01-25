import React from 'react';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const RemoveFavourite = () => {
    return (
        <>
        <span 
        className='favourite'>Remove from Favourites <HeartBrokenIcon fontSize='small'/> </span>
        </>
    );
}

export default RemoveFavourite;