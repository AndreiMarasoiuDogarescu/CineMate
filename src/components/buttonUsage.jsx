import React from 'react';
import Button from '@mui/material/Button';

function GenerateButton({ onGenerate }) {
  return (
    <Button variant='contained' onClick={onGenerate}>Search</Button>
  );
}

export default GenerateButton;