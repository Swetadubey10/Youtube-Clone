import {Box,Typography} from '@mui/material';

import React,{useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

import  { Videos} from './';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  console.log("abc",searchTerm);

  useEffect(() => {
   
    const result = async () =>{
      const data= await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
    setVideos(data?.items);
    };
    result();
  },[searchTerm]);



  return (
    <>
  <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
      Search Results for: <span style={{ color: '#F31503'}}>
        {searchTerm}
      </span> videos
    </Typography>
   
    <Videos videos={videos} />
  
  </Box>
    </>

  );
};

export default SearchFeed;
