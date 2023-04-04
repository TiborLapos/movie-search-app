import { Box, Grid, Typography, Chip} from "@mui/material";




  const style = {
    chip_style:{
      backgroundColor: "#1c3f5f",
      color: "White",
      padding: "0.4rem 1px",
      marginRight: "8px",
      textTransform: 'uppercase',
    },
    root:{
      width:"100%",
      color: "#737373",
      fontSize: 18,
    }, 
    about:{
      fontSize: 18,
    }
  };

type MovieDetail = {
    Actors: string;
    Director:string;
    Genre:string;

  };

function MovieInfo({ Actors, Director, Genre }: MovieDetail) {
    const genres = Genre.split(", "); // split genre string by comma and space

  return (
    <Box>
      <Grid container spacing={1} sx={{marginBottom:2}}>
        <Grid item>
          <Typography sx={style.root}>
            Straing:
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={style.about}>
            {Actors}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{marginBottom:2}}>
        <Grid item>
          <Typography sx={style.root}>
            Created by:
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={style.about}>
            {Director}
          </Typography>
        </Grid>
      </Grid>
    <Grid container spacing={1} sx={{marginBottom:2}} >
        <Grid item>
          <Typography sx={style.root}>
            Genre:
          </Typography>
        </Grid>
        <Grid item>
          {genres.map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              sx={style.chip_style}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
export default MovieInfo;
