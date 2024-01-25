import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <MovieIcon />
          </IconButton>
          </Link>
          <Link to="/favouritesPage">
          <Button 
          variant='contained'
          >My Favourites</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}