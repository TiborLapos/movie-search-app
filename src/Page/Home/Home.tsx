import './Default.css';
import Movie from '../Movie/Search_Movie'
import Test from '../Movie/LatestMovie'
import SearchBar from '../Movie/SearchBar';
import React, { useState, useEffect } from 'react';


function Movie_Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value:any) => {
    setSearchTerm(value);
  };

  

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Movie searchTerm={searchTerm}/>
    </div>
  );
 
}

export default Movie_Search;


