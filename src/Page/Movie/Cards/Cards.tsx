import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Typography,Card,CardContent,CircularProgress} from "@mui/material";
import API from '../../../Api/Api';
import '@fontsource/roboto'; // import the font
import Test from './Card_menu'
import { motion } from 'framer-motion';
import { Star as StarIcon } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import Card_Detail from './Card_Detail'



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
  FullPlot:string;
  Trailer:string;
}









const style = {
  root: {
    height: '100vh',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
  card_root: {
    display: 'flex',
    justifyContent: 'center',
    width: { xs: "100%", sm: "100%" },
    flexDirection: { xs: 'column', sm: 'row' },
    backgroundColor: 'inherit',
    color: 'white',
  },
  image: {
    height: { xs: "90%", sm: "70vh" },
    width: { xs: "100%", sm: "auto" },
    objectFit: 'contain',
    borderRadius: {xs:'20px', sm:'16px'},
  },
  card_content: {
    marginLeft: { xs: '0', sm: '30px' },
    marginTop: { xs: '5px', sm: '0' },
  },
  movie_info: {
    color: '#737373',
    marginTop: '5px',
  },
  cardcontainer_root:{
    marginTop:{xs:"-55px", sm:"0px"}
  },
  text_design_margin:{
    marginLeft:{xs:'30px'}
  },
  text_design_rating:{ 
    fontWeight: 900,
    fontSize: 30,
    display: 'flex', 
    alignItems: 'center',
    marginRight: 'auto',
  }
};


/*
const style = {
  root: {
    height: '100vh',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
  card_root: {
    display: 'flex',
    justifyContent: 'center',
    width: {xs:"100%", sm:"100%"},
    height: '100vh',
    backgroundColor: 'inherit',
    color: 'white',
  },
  image: {
    height: {xs:"100vh", sm:"70vh"},
    width: {xs:"auto", sm:"auto"},
    objectFit: 'contain',
    borderRadius: '16px',
  },
  card_content: {
    marginRight: '30px',
  },
  movie_info: {
    color: '#737373',
    marginTop: '5px',
  },
};
*/

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
  console.log("Trailer"+movie?.Trailer);

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

      <motion.div key={movie.imdbID} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}  transition={{ delay: 0.3, duration: 0.6 }}>
        <CardContent sx={style.cardcontainer_root}>
          <Grid container direction="column" spacing={2} >
            <Grid container spacing={1} justifyContent="space-between" >
              <Grid item sx={{...style.text_design_margin, width:{xs:"100%", sm:"auto"}}}>
                <Typography variant="h3" align="center" sx={{fontWeight: 900 , }}>
                  {movie.Title}
                </Typography>
              </Grid>
              <Grid item sx={{display: {xs:"block", sm:'flex'}, alignItems: 'right', width:{xs:"100%", sm:"auto"}}}>
                <Typography variant="h3" sx={{textAlign:"right",}}>
                  {movie.imdbRating}
                <StarIcon sx={{ color: yellow[500], fontSize: 30 }} />
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{...style.movie_info}} >
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
              <Test Plot={movie.Plot} Trailer={movie.Trailer} Title={movie.Title} ID={movie.imdbID}/>
            </Grid>
            
            <Box sx={style.text_design_margin}>
                <Card_Detail  Actors={movie.Actors}  Director={movie.Director} Genre={movie.Genre}/>
              </Box>
           

          </Grid>
        </CardContent>
      </motion.div>

    </Card>
  </Grid>
  );
};

export default Cards;
