import React from 'react';
import './Default.css';
import { useState } from 'react';
import Search from './Search'
import Movie from '../Movie/Search_M'
import Cards from '../Movie/Cards'
function App() {
  const [searchResults, setSearchResults] = useState([]);

 
  return (
    <div className="App">
      <div className='Top_Title'>
        <h1>Find a Movie</h1>
        <a>Be sure not to miss a movie today.</a>
      </div>  
      <Movie />
    </div>
  );
}

export default App;
