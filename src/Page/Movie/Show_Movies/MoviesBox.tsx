import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import API from '../../../Api/Api';
import {style} from './Style/StyleMovieBox'

interface SearchResult {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
}


interface Props {
  searchTerm?: string;
}

function Movie({ searchTerm }: Props) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission behavior
    }
    setIsLoading(true);
    try {
      const movies = [];
      for (let i = 1; i <= 2; i++) {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${API.API_KEY}&s=${searchTerm}&type=movie&page=${i}&h=high`
        );
        const moviesData = response.data.Search || [];
        const moviesWithPlot = await Promise.all(
          moviesData.map(async (searchResult: SearchResult) => {
            const plotResponse = await axios.get(
              `https://www.omdbapi.com/?apikey=${API.API_KEY}&i=${searchResult.imdbID}&plot=short&r=json&h=high`
              
            );
            //To get better image quality
            const posterUrl = searchResult.Poster;
            const highResPosterUrl = posterUrl.replace('300', '1000');
            const movieData = { ...searchResult, Plot: plotResponse.data.Plot, Poster: highResPosterUrl };
            return movieData;
          })
        );
        movies.push(...moviesWithPlot);
      }
      
      setSearchResults(movies);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSubmit();
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleCardClick = (imdbID: string) => {
    console.log(imdbID);
    navigate('/movie/' + imdbID);
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={4} sx={style.root} >
          {searchResults && searchResults.length === 0 ? (
            <Typography variant="h6" component="p" sx={style.not_found}>
              No results found...
            </Typography>
          ) : (
            searchResults.map((result: any) => (
              <Grid item xs={11} sm={11} md={6} lg={4} xl={3} key={result.imdbID} sx={style.movie_grid}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                  transition={{ delay: result.id * 0.2, duration: 0.5 }}
                >
                  <Card sx={style.movie_card}
                    onClick={() => (handleCardClick(result.imdbID))}

                  >
                    {result.Poster === '' || result.Poster === 'N/A' ? (
                      <CardMedia
                        component="img"
                        src="https://via.placeholder.com/500x500?text=No+Image+Found"
                        title="No Image Found"
                        sx={style.movie_cardmedia}
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        image={result.Poster}
                        title={result.Title}
                        sx={style.movie_cardmedia}
                      />
                    )}
                    <CardContent sx={{ backgroundColor: 'inherit', }}>
                      <Typography component="h1" sx={{ textAlign: 'left', fontWeight: 800 }}>
                        {result.Title} - {result.Year}
                      </Typography>
                      <Typography component="p" noWrap sx={{ textAlign: 'left', width: 'auto', fontWeight: 100, fontSize: 14, marginTop: 2 }}>
                        Year: {result.Year}
                      </Typography>
                      <Typography component="p" noWrap sx={{ width: 'auto', height: 50, fontWeight: 100, fontSize: 14 }}>
                        Plot: {result.Plot}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      )}

    </>
  );
}

export default Movie;
