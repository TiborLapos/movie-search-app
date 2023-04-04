import { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import API from "../../../Api/Api";

const API_URL = `https://www.omdbapi.com/?apikey=${API.API_KEY}&type=movie&plot=short`;

interface Movie {
  Title: string;
  Poster: string;
}

type MovieLikeThis = {
  Title: string;
  ID: string;
};

const style = {
  movies_root: {
    backgroundColor: "inherit",
  },
  movie_image: {
    height: "100%",
    width: "200px",
  },
};

function Card_MovieLikeThis({ Title, ID }: MovieLikeThis) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(`${API_URL}&s=${Title}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(1, 4)); // get first 5 movies
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleMovieClick = (movie: Movie) => {
    console.log(movie.Title);
  };

  return (
    <Grid container spacing={2} justifyContent="flesx-start" flexWrap="nowrap">
      {movies.map((movie) => (
        <Grid item key={movie.Title}>
          <Card sx={style.movies_root}>
            <CardActionArea onClick={() => handleMovieClick(movie)}>
              {movie.Poster === "" || movie.Poster === "N/A" ? (
                <CardMedia
                  component="img"
                  src="https://via.placeholder.com/500x500?text=No+Image+Found"
                  title="No Image Found"
                  sx={{ display: "none" }}
                />
              ) : (
                <CardMedia
                  component="img"
                  image={movie.Poster}
                  title={movie.Title}
                  sx={style.movie_image}
                />
              )}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card_MovieLikeThis;
