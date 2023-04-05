import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { motion } from 'framer-motion';
import { Star as StarIcon } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { style } from './Style/StyleMovieOld' //<-- To change the design
import API from '../../../Api/Api'; // Import for the API
import '@fontsource/roboto'; // import the font
import Test from './MovieMenu'
import Card_Detail from './MovieInfo'

interface SearchResult {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
  imdbRating: string;
  Rated: string;
  Genre: string;
  Director: string;
  Runtime: string;
  Actors: string;
  FullPlot: string;
  Trailer: string;
}





function Cards() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<SearchResult | null>(null);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API.API_KEY}&plot=full`);
      const data = await response.json();
      setMovie(data);
    }


    fetchMovie();
  }, [id]);
  console.log("Trailer" + movie?.Trailer);

  if (!movie) {
    return <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress color="primary" />

    </div>;
  }
  const rating = parseInt(movie.imdbRating);

  return (
    <Grid container justifyContent="center" sx={style.root}>
      <Card sx={style.card_root}>

        <motion.div key={movie.imdbID} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <CardMedia component="img" sx={style.image} image={movie.Poster} alt={movie.Title} />
        </motion.div>

        <motion.div key={movie.imdbID} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <CardContent sx={style.cardcontainer_root}>
            <Grid container direction="column" spacing={2} >
              <Grid container spacing={1} justifyContent="space-between" >
                <Grid item sx={{ ...style.text_design_margin, width: { xs: "100%", md: "auto" } }}>
                  <Typography variant="h3" align="center" sx={{ fontWeight: 900, }}>
                    {movie.Title}
                  </Typography>
                </Grid>
                <Grid item sx={{ display: { xs: "block", md: 'flex' }, alignItems: 'right', width: { xs: "100%", md: "auto" } }}>
                  <Typography variant="h3" sx={{ ...style.text_design_rating, textAlign: "right" }}>
                    {movie.imdbRating}
                    <StarIcon sx={{ color: yellow[500], fontSize: 30 }} />
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} sx={style.movie_info} >
                <Grid item sx={style.text_design_margin}>
                  <Typography variant="body1">{movie.Year}  |</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{movie.Runtime} |</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{movie.Rated}</Typography>
                </Grid>
              </Grid>

              <Grid>
                <Test Plot={movie.Plot} Trailer={movie.Trailer} Title={movie.Title} ID={movie.imdbID} />
              </Grid>

              <Box sx={style.text_design_margin}>
                <Card_Detail Actors={movie.Actors} Director={movie.Director} Genre={movie.Genre} />
              </Box>


            </Grid>
          </CardContent>
        </motion.div>

      </Card>
    </Grid>
  );
};

export default Cards;
