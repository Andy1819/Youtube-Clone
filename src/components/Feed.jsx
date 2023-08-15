import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import { fetch_f_Api } from '../utils/api';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home');
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    fetch_f_Api(
    `search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
  },[selectedCategory]);



  return (
    <Stack 
    sx = {{
      flexDirection: {sx: 'column', md: 'row'}
    }}>
      <Box sx= {{ height: { sx: 'auto', md: '92vh'},
      borderRight: '1px solid #3d3d3d',
      px: { sx: 0, md: 2}}} >
        <SideBar 
          selectedCategory= {selectedCategory}
          setSelectedCategory= {setSelectedCategory}
        />
        <Typography className='copyright'
        variant='body2'
        sx= {{ mt:1.5,
        color: '#fff' }}>
          Copyright Anirudh Verma
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto',
      height: '99vh',
      flex: 2}}>
        <Typography variant='h4'
        fontWeight='bold' mb={2}
        sx={{ color: 'white'}}> 
        {selectedCategory} 
          <span style= {{
            color: '#F31503'
          }}> Videos</span>
        </Typography>


        <Videos videos={videos} />
      </Box>
    </Stack>
  )
};

export default Feed;

