import './Default.css';
import Movie from '../Movie/Search_Movie'


function Movie_Search() {
  return (
    <>
      <div className="App">
        <div className='Top_Title'>
          <h1>Find a Movie</h1>
          <a>Be sure not to miss a movie today.</a>
        </div>  
        <Movie />
      </div>
    </>
 
  );
}

export default Movie_Search;