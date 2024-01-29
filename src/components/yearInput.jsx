import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function InputYear(props) {
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
        placeholder="Year* (optional)" 
        value={props.yearValue} 
        onChange={(e) => props.setYearValue(e.target.value)}
        inputProps={{
          ...ariaLabel, 
          type: 'text', 
          pattern: "\\d{4}", 
          title: "Please enter a 4 digit year"
        }} 
      />
    </Box>
  );
}
