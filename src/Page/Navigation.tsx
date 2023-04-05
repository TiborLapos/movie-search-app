import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Home from './Home/Home'
  import MovieList from './Movie/Caategory'
  import Menu from './Home/Menu';
  import Movie from './Movie/Cards/Movie'
  import { createTheme, ThemeProvider } from '@mui/material';
  import ScrollToTop from './ScrollTop';

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  });

  export default function App() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Menu/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={< MovieList/>} />
            <Route path="/movie/:id" element={< Movie/>} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </ThemeProvider>
      </>
    );
  }
  