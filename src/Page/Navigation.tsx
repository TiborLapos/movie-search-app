import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Cards from './Movie/Cards/Cards'
  import Home from './Home/Home'
  import MovieList from './Movie/Caategory'
  import Menu from './Home/Menu';
  import Test from './Movie/Cards/Test'
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
            <Route path="/category" element={< MovieList/>} />
            <Route path="/test/:id" element={< Test/>} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </ThemeProvider>
      </>
    );
  }
  