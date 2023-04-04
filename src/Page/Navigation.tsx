import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Cards from './Movie/Cards/Cards'
  import Home from './Home/Home'
  import Test from './Movie/Slider/LatestMovie'
  import MovieList from './Movie/Caategory'
  import Menu from './Home/Menu';

  export default function App() {
    return (
      <>
      <Menu/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/card/:id" element={< Cards/>} />
          <Route path="/test" element={< Test/>} />
          <Route path="/category" element={< MovieList/>} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </>
    );
  }
  