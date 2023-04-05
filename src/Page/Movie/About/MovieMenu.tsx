import { useState } from 'react';
import { CardContent, Grid, Typography, Divider, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { style } from './Style/StyleMovieMenu' //<-- To change the style
import Card_MovieLikeThis from './MovieLikeThis'


const OverviewContent = ({ Plot }: { Plot: string }) => (
  <Typography variant="body1" >{Plot}</Typography>
);

const RelatedMovies = ({ Title, imdbID }: { Title: string, imdbID: string }) => (
  <Box sx={{ marginTop: 1 }}>
    <Card_MovieLikeThis Title={Title} ID={imdbID} />
  </Box>
);

/* To add more card use this and uncoment it and change the id value
const MoreLikeThisContent = (
  <Typography variant="body1">
    This is the more like this content.
  </Typography>
);
*/

const DetailsContent = (
  <Typography variant="body1">This is the details content.</Typography>
);


type MovieCardProps = {
  Plot: string;
  Trailer: string;
  Title: string;
  ID: string;
};


const MovieCard = ({ Plot, Title, ID }: MovieCardProps) => {
  const [selectedContent, setSelectedContent] = useState(
    <OverviewContent Plot={Plot} />
  );
  const [activeIndex, setActiveIndex] = useState(0);



  const handleContentChange = (content: any, index: any) => {
    setSelectedContent(
      <AnimatePresence mode="wait">
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
        <Divider sx={{ backgroundColor: '#737373', }} />
      </Box>
      <div style={{ marginTop: 16 }}>{selectedContent}</div>
    </CardContent>
  );
};

export default MovieCard;
