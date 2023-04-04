import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Typography,Card,Rating,Chip,Divider} from "@mui/material";
import API from '../../../Api/Api';
import '@fontsource/roboto'; // import the font

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

const style = {
  root: {
    maxWidth: '100%',
    maxHeight: '100vh',
    margin: '0 auto',
    backgroundColor:'#091e2a',
    color:'white',
    padding:'1rem', 
    marginTop:5,
    fontFamily: 'Roboto',

  },
  photo_box: {
    position: 'relative',
    marginLeft:10,
  },
  posterContainer: {
    position: 'relative',
  },
  poster: {
    height:'70vh',
    maxWidth: '100vw',
    objectFit: "contain"

  },
  textContainer: {
    padding: '1rem',
  },
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
  movie_info:{
    color:'#737373',
  }
};


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
            <Chip label={movie.Genre} sx={style.chip} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} sx={style.textContainer}>
          <Box sx={{marginLeft: '-10rem',}}>
          <Typography variant="h2" align="left"  sx={{fontWeight:900}}>{movie.Title}</Typography>
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

*/