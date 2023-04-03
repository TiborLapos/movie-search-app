import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Cards from '../Movie/Cards'
  import Home from './Home'
  import Test from '../Movie/LatestMovie'

  export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/card/:id" element={< Cards/>} />
          <Route path="/test" element={< Test/>} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
    );
  }
  