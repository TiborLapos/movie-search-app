import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";
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
            value={searchTerm}
            className="my_textfield"
            onChange={handleChange}
            color="primary"
            variant="outlined"
            sx={{marginX: 'auto', width:{xs:'90%', md:500},'& .MuiInputBase-input': { color: 'white'},     
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
        <Grid container spacing={4} sx={{marginX: {xs:'auto',sm: 'auto'}, maxWidth: {xs:400, sm:400, md:800, lg:1100, xl:1400}, mt:0.5}} >
                {searchResults && searchResults.length === 0 ? (
                    <Typography variant="h6" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop:5 }}>
                    No results found...
                    </Typography>
                ) : (
                    searchResults?.map((result: any) => (
                    
                    <Grid item xs={11} sm={11} md={6} lg={4} xl={3} key={result.imdbID} sx={{justifyContent: 'center', marginTop:10}}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: result.id * 0.2, duration: 0.5 }}
                        >
                        <Card sx={{ height: '100%',backgroundColor:'inherit', color:'white',boxShadow:0}}>
                        {result.Poster === '' || result.Poster === 'N/A' ? (
                            <CardMedia
                            component="img"
                            src="https://via.placeholder.com/500x500?text=No+Image+Found"
                            title="No Image Found"
                            sx={{ 
                                width: '100%', 
                                height: 500,
                                objectFit: 'cover'
                            }}
                            />
                        ) : (
                            <CardMedia
                            component="img"
                            image={result.Poster}
                            title={result.Title}
                            sx={{ 
                                width: '100%',
                                 height: 500,
                                 objectFit: 'cover'
                                }}
                            />
                        )}
                        <CardContent sx={{backgroundColor:'inherit', }}>
                            <Typography  component="h1" sx={{textAlign:'left',height: 50, fontWeight:800}}>
                            {result.Title} - {result.Year}
                            </Typography>
                            <Typography  component="p" noWrap sx={{textAlign:'left', width: 'auto',fontWeight:100, fontSize:14}}>
                            Year: {result.Year}
                            </Typography>
                            <Typography  component="p" noWrap sx={{ width: 'auto',height:50, fontWeight:100, fontSize:14}}>
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
