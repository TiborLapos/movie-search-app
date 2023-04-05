import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Api from '../../../Api/Api';
import '@fontsource/roboto';
import { Button } from '@mui/material';



//set velues for the Movie
interface Movie {
  Title: string;
  Year: string;
  Director: string;
  Plot: string;
  imdbID: string;
  imdbRating: string;
  Poster: string;
  Actors: string;
}

//To change the stile
const styles = {
  root_box_bacground: {
    backgroundImage: `url(${require('../../../img/background.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    height: { xs: '75vh', sm: 'calc(70vh - 64px)', md: 'calc(65vh)'},
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  root_box__effect: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    backdropFilter: 'blur(5px)',
    filter: 'blur(0.1px)',
    opacity: 0.9,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  box_photo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  box_text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    color: '#ffff',
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2.2rem',
    letterSpacing: '0.1rem',
    fontWeight:800,
  },
  blueButton: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#00A1FF',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight:800,
    width:'120px',
    height:'38px',
  },
  movies:{
    marginTop: {
      xs:1,
    },
    justifyContent: 'center',
  },
  movies_poster:{
    width:'auto',
    height:{
      xs:'auto',
      xl:'auto',
    },
    borderRadius: '10px',
  }
};



export default function LatestMovie() {
  const [latestMovie, setLatestMovie] = useState<Movie[] | null>(null);

  //Show the movies by IMDB ID and change evry 4000ms
  useEffect(() => {
    console.log(`Screen Resolution: ${window.screen.width}x${window.screen.height}`)
    const ids = ['tt10366206', 'tt10151854', 'tt13345606', 'tt0111161'];
    let index = 0;

    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${ids[index]}&apikey=${Api.API_KEY}`
      );
      const data = await response.json();
      setLatestMovie([data]);
    }
    fetchMovie();
    const timer = setInterval(() => {
      index = (index + 1) % ids.length;
      fetch(`https://www.omdbapi.com/?i=${ids[index]}&apikey=${Api.API_KEY}`)
        .then((response) => response.json())
        .then((data) => setLatestMovie([data]));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  //If no movie than load
  if (!latestMovie) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={styles.root_box_bacground} >
    <Box sx={styles.root_box__effect}/>
    <Container maxWidth="lg">
      <AnimatePresence >
        {latestMovie.map((movie: Movie) => (
          <motion.div
            key={movie.imdbID}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 }}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ overflow: "hidden", position: "absolute"}}
          >
            <Grid container spacing={3} sx={styles.movies}>
              <Grid item xs={12} sm={4}>
                <Box sx={styles.box_photo}>
                    <Avatar variant="square" 
                      src={movie.Poster} 
                      alt={`${movie.Title} poster`} 
                      sx={styles.movies_poster}
                      />
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box sx={{ ...styles.box_text, maxWidth: '1000px' }}>
                    <Typography variant="h4" gutterBottom sx={{ ...styles.title, textAlign:{xs:'center',sm:'left'}}}>
                      {movie.Title} ({movie.Year})
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', sm: 'block' }}}>
                      <span style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.1rem',
                        fontWeight:'bold'}}>Directed by: </span>{movie.Director}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <span style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.1rem',
                        fontWeight:'bold'}}>Plot: </span>{movie.Plot}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <span style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.1rem',
                        fontWeight:'bold',}}  
                      >Starring: </span>{movie.Actors}
                    </Typography>
                    <Box sx={{  justifyContent: 'left', marginTop: '20px', display: { xs: 'none', sm: 'block' }  }}>
                      <Button variant="contained" sx={styles.blueButton}>
                        More
                      </Button>
                    </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </AnimatePresence>
    </Container>
  </Box>

  );
}