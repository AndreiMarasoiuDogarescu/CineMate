import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <MovieIcon />

          </IconButton>
          <Button 
          variant='contained'
          >My Favourites</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}