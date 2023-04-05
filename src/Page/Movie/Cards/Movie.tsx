import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Typography,Card,CardContent,CircularProgress,Container} from "@mui/material";
import API from '../../../Api/Api';
import '@fontsource/roboto'; // import the font
import Test from './Card_menu'
import { motion } from 'framer-motion';
import { Star as StarIcon } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import Card_Detail from './Card_Detail'
import { Backdrop } from '@mui/material';




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
  backdrop: {
    position: 'fixed',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: {ms:'no-repeat'},
    backgroundPosition:{ md:'center center'},
    filter: 'blur(5px)',
    backgroundColor:{xs:'#081b27',md:'#081b27'},
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      blur:'(20px)',
      opacity:'1px',
      background: {xs:'rgba(0, 0, 0, 0.0)',md:'rgba(0, 0, 0, 0.7)'},
    },
  },
  card_root: {
    display: 'flex',
    justifyContent: 'center',
    width: { xs: "100%", md: "100%" },
    flexDirection: { xs: 'column', md: 'row' },
    backgroundColor: 'inherit',
    color: 'white',
  },
  image: {
    height: { xs: "90%", md: "75vh" },
    width: { xs: "100%", md: "auto" },
    objectFit: 'contain',
    borderRadius: {xs:'20px', md:'16px'},
  },
  card_content: {
    marginLeft: { xs: '0', md: '30px' },
    marginTop: { xs: '5px', md: '0' },
  },
  movie_info: {
    color: '#a6a6a6',
    marginTop: {xs:"-35px", md:'5px'},
  },
  cardcontainer_root:{
    marginTop:{xs:"-5px", md:"0px"}
  },
  text_design_margin:{
    marginLeft:{xs:'30px'}
  },
  text_design_rating:{ 
    fontWeight: 900,
    fontSize: 30,
    display: {xs:"block",md:'flex'}, 
    alignItems: 'right',
    marginRight: 'auto',
  }
};
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
    <>
    <Backdrop open={true} sx={{...style.backdrop,backgroundImage: {xs:'none',md:`url(${movie.Poster}})`}}} />
  <Grid container justifyContent="center" sx={style.root}>
    <Card sx={style.card_root}>

        <motion.div key={movie.imdbID} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ overflow: "hidden", position: "relative"}}
>
          <CardMedia component="img" sx={style.image} image={movie.Poster} alt={movie.Title} />
        </motion.div>

      <motion.div key={movie.imdbID} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}  transition={{ delay: 0.3, duration: 0.6 }} style={{ overflow: "hidden", position: "relative"}}
>
        <CardContent sx={style.cardcontainer_root}>
          <Grid container direction="column" spacing={2} >
            <Grid container spacing={1} justifyContent="space-between" >
              <Grid item sx={{...style.text_design_margin, width:{xs:"100%", md:"auto"}}}>
                <Typography variant="h3"  sx={{fontWeight: 900 ,maxWidth:'500px', textAlign:{xs:'center', md:'left'}}}>
                  {movie.Title}
                </Typography>
              </Grid>
                <Grid item sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', width: { xs: '100%', md: 'auto' }, justifyContent: { xs: 'center', md: 'flex-end' } }}>
                    <Typography variant="h3" sx={{ ...style.text_design_rating, textAlign: 'right' }}>
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
  </>
  );
};

export default Cards;

