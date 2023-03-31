import './Default.css';
import Movie from '../Movie/Search_M'



function Home() {
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

export default Home;