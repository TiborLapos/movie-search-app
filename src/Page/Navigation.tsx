import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Cards from './Movie/Cards/Cards'
  import Home from './Home/Home'
  import Test from './Movie/Cards/Test'
  import MovieList from './Movie/Caategory'
  import Menu from './Home/Menu';
  import { createTheme, ThemeProvider } from '@mui/material';
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  });
  export default function App() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <Menu/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/card/:id" element={< Cards/>} />
            <Route path="/test" element={< Test/>} />
            <Route path="/category" element={< MovieList/>} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </ThemeProvider>
      </>
    );
  }
  