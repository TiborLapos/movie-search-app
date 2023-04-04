import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid } from '@mui/material';
import API from '../../Api/Api';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
}
interface MoviesResponse {
  Search: Movie[];
}



const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const category = 'action'
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get<MoviesResponse>(
        `https://www.omdbapi.com/?s=action&apikey=${API.API_KEY}`
      );
      setMovies(response.data.Search);
    };
    fetchMovies();
  }, []);

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={6} md={3} key={movie.imdbID}>
          <ListItem sx={{ alignItems: 'flex-start' }}>
            <ListItemAvatar>
              <Avatar variant="square" src={movie.Poster} />
            </ListItemAvatar>
            <ListItemText
              primary={movie.Title}
              secondary={`${movie.Year} | ${movie.Type}`}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
