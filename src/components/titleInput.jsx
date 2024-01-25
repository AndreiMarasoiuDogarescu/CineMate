import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function InputTitle(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input 
      placeholder="Title"
      value={props.value} 
      onChange={(e) => props.setSearchValue(e.target.value)}
      inputProps={{...ariaLabel,
      type: 'text',
      title: "Please enter a movie title",}} /> 
    </Box>
  );
}