import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';
import Api from '../../../Api/Api';
import '@fontsource/roboto';
import { Button } from '@mui/material';
import { style } from './Style/StyleLatestMovie'


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


export default function LatestMovie() {
  const [latestMovie, setLatestMovie] = useState<Movie[] | null>(null);

  //Show the movies by IMDB ID and change evry 4000ms
  useEffect(() => {
    console.log(`Screen Resolution: ${window.screen.width}x${window.screen.height}`)
    const ids = ['tt10366206', 'tt10151854', 'tt13345606', 'tt0111161'];
    let index = 0;

    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${ids[index]}&apikey=${Api.API_KEY}&h=high`
      );
      const data = await response.json();
      const posterUrl = data.Poster;
      const highResPosterUrl = posterUrl.replace('300', '1000');
      const updatedData = Object.assign({}, data, { Poster: highResPosterUrl });
      setLatestMovie([updatedData]);
    }
    fetchMovie();
    const timer = setInterval(() => {
      index = (index + 1) % ids.length;
      fetch(`https://www.omdbapi.com/?i=${ids[index]}&apikey=${Api.API_KEY}&h=high`)
        .then((response) => response.json())
        .then((data) => {
          const posterUrl = data.Poster;
          const highResPosterUrl = posterUrl.replace('300', '1000');
          const updatedData = Object.assign({}, data, { Poster: highResPosterUrl });
          setLatestMovie([updatedData]);
        });
    }, 4000);

    return () => clearInterval(timer);
  }, []);


  //If no movie than load
  if (!latestMovie) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={style.root_box_bacground} >
      <Container maxWidth="lg">
        {latestMovie.map((movie: Movie) => (
          <Grid container spacing={3} sx={style.movies}>
            <Grid item xs={12} sm={8} md={5}>
              <Box sx={style.box_photo}>
                  <CardMedia component="img" sx={{...style.image, borderRadius:'16px'}} image={movie.Poster} alt={movie.Title} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} >
              <Box sx={{ ...style.box_text, maxWidth: '1000px' }}>
                <Typography variant="h4" gutterBottom sx={{ ...style.title, textAlign: { xs: 'center', sm: 'left' } }}>
                  {movie.Title} ({movie.Year})
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <span style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '0.1rem',
                    fontWeight: 'bold'
                  }}>Directed by: </span>{movie.Director}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <span style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '0.1rem',
                    fontWeight: 'bold'
                  }}>Plot: </span>{movie.Plot}
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <span style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '0.1rem',
                    fontWeight: 'bold',
                  }}
                  >Starring: </span>{movie.Actors}
                </Typography>
                <Box sx={{ justifyContent: 'left', marginTop: '20px', display: { xs: 'none', sm: 'block' } }}>
                  <Button variant="contained" sx={style.blueButton}>
                    More
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>

  );
}