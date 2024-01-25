import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <AppBar position="sticky">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CineMate
          </Typography>
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