import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  
  import Movie from '../Movie/Search_Movie'
  import Cards from '../Movie/Cards'
  import Movie_Search from './Home'
  import Test from '../Movie/LatestMovie'
  import SearchBar from '../Movie/SearchBar';

  export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/home" element={<Movie_Search />} />
          <Route path="/card/:id" element={< Cards/>} />
          <Route path="/test" element={< Test/>} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
    );
  }
  