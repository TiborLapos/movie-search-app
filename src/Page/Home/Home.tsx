import Movie from '../Movie/Show_Movies/MoviesBox'
import LatestMovie from '../Movie/Slider/LatestMovie'
import SearchBar from '../Movie/Show_Movies/SearchBar';
import React, { useState } from 'react';


function Home() {
  const [searchTerm, setSearchTerm] = useState("why");
  const handleSearch = (value: any) => {
    setSearchTerm(value);
  };


  return (
    <>
      <LatestMovie />
      <SearchBar onSearch={handleSearch} />
      <Movie searchTerm={searchTerm} />
    </>
  );

}

export default Home;


