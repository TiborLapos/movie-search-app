import { useState } from 'react';
import { CardContent, Grid, Typography, Divider, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Card_MovieLikeThis from './Card_MovieLikeThis'

const OverviewContent = ({ Plot }: { Plot: string }) => (
  <Typography variant="body1" >{Plot}</Typography>
);

const RelatedMovies = ({ Title,imdbID }: { Title: string,  imdbID: string }) =>  (
  <Box sx={{marginTop:1}}>
    <Card_MovieLikeThis Title={Title} ID={imdbID}/>
  </Box>
);

const MoreLikeThisContent = (
  <Typography variant="body1">
    This is the more like this content.
  </Typography>
);

const DetailsContent = (
  <Typography variant="body1">This is the details content.</Typography>
);



const style = {
  root:{
    marginLeft:{xs:"0px", md:"20px"},
    marginTop:{xs:0, md:5}, 
    width:{xs:"auto", md:600},
    height:"50%",
    minHeight:"300px"
  },
  text: {
    fontWeight: 200,
    fontSize: '20px',
    color: '#a6a6a6',
    textDecoration: 'none',
    position: 'relative',
    textTransform: 'uppercase'
  },
  activeText: {
    fontWeight: 200,
    fontSize: '20px',
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    textTransform: 'uppercase'
  },
  underline: {
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '100%',
    height: '5px',
    backgroundColor: 'red',
    transition: '0.2s',
  },
};

type MovieCardProps = {
    Plot: string;
    Trailer:string;
    Title:string;
    ID:string;
  };
  

const MovieCard = ({ Plot, Trailer, Title, ID }: MovieCardProps) => {
    const [selectedContent, setSelectedContent] = useState(
        <OverviewContent Plot={Plot} />
      );
    const [activeIndex, setActiveIndex] = useState(0);
  


  const handleContentChange = (content:any, index:any) => {
    setSelectedContent(
      <AnimatePresence  mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{ overflow: "hidden" }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
    setActiveIndex(index);
  };

  return (
    <CardContent sx={style.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 0 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(<OverviewContent Plot={Plot} />, 0)}
          >
            Overview
            {activeIndex === 0 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 1 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(<RelatedMovies Title={Title} imdbID={ID} />, 1)}
          >
            More Like This
            {activeIndex === 1 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 2 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(DetailsContent, 2)}
          >
            Details
            {activeIndex === 2 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ my: 1, width: 'auto' }}>
        <Divider sx={{ backgroundColor: '#737373',}} />
      </Box>
      <div style={{ marginTop: 16}}>{selectedContent}</div>
    </CardContent>
  );
};

export default MovieCard;
