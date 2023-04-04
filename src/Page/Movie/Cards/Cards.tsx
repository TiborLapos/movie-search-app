import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Typography,Card,Rating,Chip,CardContent,Divider} from "@mui/material";
import API from '../../../Api/Api';
import '@fontsource/roboto'; // import the font
import Test from './Test'
import { color } from 'framer-motion';

interface SearchResult {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
  imdbRating: string;
  Rated:string;
  Genre:string;
  Director:string;
  Runtime:string;
  Actors:string;
}


/*
  chip: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    margin: '1rem',
    color: 'white',
    backgroundColor: '#EB315A',
    fontWeight: 'bold',
    zIndex: 1,
  },
*/


const style = {
  root:{
    height: '100vh',
    marginTop:5,
    fontFamily: 'Roboto',
  },
  card_root:{
    display: 'flex',
    justifyContent: 'center',
    width: '60%',
    height: '100vh',
    backgroundColor:'inherit',
    color:'white',
  },
  image:{
    height: '70vh',
     width: 'auto',
     objectFit: "contain",
     borderRadius: '16px' 

  },
  card_content:{
    marginRight: '30px' 
  },
  movie_info:{
    color:'#737373',
    marginLeft:2,
    marginTop:'5px'
  },


}



function Cards() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<SearchResult | null>(null);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API.API_KEY}`);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const rating = parseInt(movie.imdbRating);
  return (
    <Grid
    container
    justifyContent="center"
    sx={style.root}
    >
    <Card sx={style.card_root}>
      <CardMedia
        component="img"
        sx={style.image}
        image={movie.Poster}
        alt={movie.Title}
      />
      <CardContent sx={{ marginLeft: '30px' }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h3" align="left"  sx={{fontWeight:900}}>{movie.Title}</Typography>
          </Grid>
          <Grid container spacing={1} sx={style.movie_info} >
              <Grid item>
                <Typography variant="body1">{movie.Year}  |</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{movie.Runtime} |</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{movie.Rated}</Typography>
              </Grid>
            </Grid>
            <Test/>
           
        </Grid>
      </CardContent>
    </Card>
  </Grid>
  );
};

export default Cards;

/*

            <Typography variant="body1" align="left">IMDB Rating: {movie.imdbRating}</Typography>
            <Divider orientation="vertical" flexItem  sx={{color:'red'}}/>
            <Typography variant="body1" align="left">Runtime: {movie.Runtime}</Typography>
            <Typography variant="body1" align="left">Genre: {movie.Genre}</Typography>
            <Typography variant="body1" align="left">Director: {movie.Director}</Typography>
            <Typography variant="body1" align="left">Actors: {movie.Actors}</Typography>
            <Typography variant="body1" align="left">Rated: {movie.Rated}</Typography>
            <Rating
              name="user-rating"
              value={rating/2}
              precision={0.5}
              readOnly
            />




                <Box>
    <Card sx={style.root}>
      <Grid container >
        <Grid item xs={12} sm={7} sx={style.posterContainer}>
          <Box sx={style.photo_box}>
            <CardMedia
              component="img"
              image={movie.Poster}
              title={movie.Title}
              sx={style.poster}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} sx={style.textContainer}>
          <Box>
            <Typography variant="h3" align="left"  sx={{fontWeight:900}}>{movie.Title}</Typography>
            <Grid container spacing={1} sx={style.movie_info}>
              <Grid item>
                <Typography variant="body1">{movie.Year}  |</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{movie.Runtime} |</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{movie.Rated}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>

*/