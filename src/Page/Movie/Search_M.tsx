import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import './Movie.css';

interface SearchResult {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

interface Movie extends SearchResult {
  Plot: string;
}

function Movie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm === '') {
      alert('Please enter a valid search term');
    } else {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=fa90d556&s=${searchTerm}&type=movie`
        );
        const movies = await Promise.all(
          response.data.Search.map(async (searchResult: SearchResult) => {
            const plotResponse = await axios.get(
              `https://www.omdbapi.com/?apikey=fa90d556&i=${searchResult.imdbID}&plot=short`
            );
            return { ...searchResult, Plot: plotResponse.data.Plot };
          })
        );
        setSearchResults(movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
     <form onSubmit={handleSubmit} style={{marginTop:15}}>
        <TextField
            id="search"
            label="Title"
            InputLabelProps={{
                style: { color: 'white' },
              }}
            size="small"
            value={searchTerm}
            className="my_textfield"
            onChange={handleChange}
            color="primary"
            variant="outlined"
            sx={{ '& .MuiInputBase-input': { color: 'white', width:500, } ,        
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
        </form>
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
        ) :(
        <Grid container spacing={4} sx={{ marginX: 'auto', maxWidth: 1400, mt:0.5}}>
                {searchResults && searchResults.length === 0 ? (
                    <Typography variant="h6" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop:5 }}>
                    No results found.
                    </Typography>
                ) : (
                    searchResults?.map((result: any) => (
                    <Grid item xs={12} sm={6} md={3} key={result.imdbID}>
                        <Card sx={{ height: '100%' }}>
                        {result.Poster === '' || result.Poster === 'N/A' ? (
                            <CardMedia
                            component="img"
                            src="https://via.placeholder.com/500x500?text=No+Image+Found"
                            title="No Image Found"
                            sx={{ width: '100%', height: 500 }}
                            />
                        ) : (
                            <CardMedia
                            component="img"
                            image={result.Poster}
                            title={result.Title}
                            sx={{ width: '100%', height: 500 }}
                            />
                        )}
                        <CardContent>
                            <Typography  component="h1" sx={{ height: 50, fontWeight:600}}>
                            {result.Title} - {result.Year}
                            </Typography>
                            <Typography  component="p" noWrap sx={{ width: 250, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center', fontWeight:100, fontSize:14}}>
                            {result.Plot}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))
                )}
            </Grid>
        )}
    </>
  );
}

export default Movie;
