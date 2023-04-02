import './Default.css';
import Movie from '../Movie/Search_Movie'
import LatestMovie from '../Movie/LatestMovie'
import SearchBar from '../Movie/SearchBar';
import React, { useState, useEffect } from 'react';
import Menu from './Menu';


function Movie_Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value:any) => {
    setSearchTerm(value);
  };





  return (
    <>
      <Menu/>
      <LatestMovie/>
      <SearchBar onSearch={handleSearch} /> 
      <Movie searchTerm={searchTerm}/>
    </>
  );
 
}

export default Movie_Search;


