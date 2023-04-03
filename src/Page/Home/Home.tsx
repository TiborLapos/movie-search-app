import './Default.css';
import Movie from '../Movie/Search_Movie'
import LatestMovie from '../Movie/LatestMovie'
import SearchBar from '../Movie/SearchBar';
import React, { useState } from 'react';
import Menu from './Menu';


function Home() {
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

export default Home;


