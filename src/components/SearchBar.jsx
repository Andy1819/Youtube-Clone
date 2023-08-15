import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
        component='form'
        onSubmit = {() => {}}
        sx={{borderRadius: 7,
        border: '2px solid red',
        p1: 2,
        boxShadow: 'none',
        mr: {sm: 25}
        }} >
            <input
                className='search-bar'
                placeholder='......Search......'
                value=''
                onChange={() => {}}
            />
            <IconButton type='submit' 
                sx={{ p:'15px',
                color: 'red'
                }}>
                <Search />
            </IconButton>
        </Paper>
  )
}

export default SearchBar
