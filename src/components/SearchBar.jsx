import { Paper ,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import React,{useState} from 'react';

import {useNavigate} from 'react-router-dom';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    console.log("meeeee")
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };  

  return (
  <form onSubmit={onhandleSubmit}>
    <Paper
  component="div"
  
  sx={{
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
   
    mr: {sm: 5}

  }}
  >
    <input
    className='search-bar'
    placeholder='Search....'
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
    />
    <IconButton type="submit" sx={{p: '10px',color:'red'}} aria-label='search' >
    <SearchIcon />
        </IconButton>
  </Paper>
  </form>
  );
};

export default SearchBar;
