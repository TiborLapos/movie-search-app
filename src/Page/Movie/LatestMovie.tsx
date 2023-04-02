import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import API from '../../Api/Api'

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Director: string;
  Actors: string;
}



export default function LatestMovie() {
  const [latestMovie, setLatestMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const ids = ['tt10366206', 'tt10151854', 'tt13345606', 'tt0111161'];
    let index = 0;
    
    async function fetchMovie() {
      const response = await fetch(`https://www.omdbapi.com/?i=${ids[index]}&apikey=${API.API_KEY}`);
      const data = await response.json();
      setLatestMovie(data);
    }
  
    fetchMovie();
  
    const timer = setInterval(() => {
      index = (index + 1) % ids.length;
      fetch(`https://www.omdbapi.com/?i=${ids[index]}&apikey=${API.API_KEY}`)
        .then(response => response.json())
        .then(data => setLatestMovie(data));
    }, 3000);
  
    return () => clearInterval(timer);
  }, []);

  /*
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    imdbRating: ""
  });
*/

  
  if (!latestMovie) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        p: 2,
        he:'600px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '600px',
          backgroundImage: `url(${require('../../img/background.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          filter: 'blur(5px)',
          opacity: 0.6,
          backgroundColor: 'rgba(8, 27, 39, 0.2)',
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg" >
        <Grid container spacing={2}  sx={{marginTop:3}}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={latestMovie.Poster}
                alt={`${latestMovie.Title} poster`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                color: '#f0f0f0',
                p: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                {latestMovie.Title} ({latestMovie.Year})
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Directed by {latestMovie.Director}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {latestMovie.Plot}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Starring: {latestMovie.Actors}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}