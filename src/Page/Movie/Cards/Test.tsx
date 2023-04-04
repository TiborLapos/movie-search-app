import { useState } from 'react';
import { CardContent, Grid, Typography, Divider, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const OverviewContent = (
  <Typography variant="body1">
    This is the overview content.
  </Typography>
);

const TrailerContent = (
  <Typography variant="body1">
    This is the trailer content.
  </Typography>
);

const MoreLikeThisContent = (
  <Typography variant="body1">
    This is the more like this content.
  </Typography>
);

const DetailsContent = (
  <Typography variant="body1">
    This is the details content.
  </Typography>
);

const style = {
  text: {
    fontWeight: 200,
    fontSize: '20px',
    color: '#737373',
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

const MovieCard = () => {
  const [selectedContent, setSelectedContent] = useState(OverviewContent);
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
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 0 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(OverviewContent, 0)}
          >
            Overview
            {activeIndex === 0 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 1 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(TrailerContent, 1)}
          >
            Trailer
            {activeIndex === 1 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 2 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(MoreLikeThisContent, 2)}
          >
            More Like This
            {activeIndex === 2 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            sx={activeIndex === 3 ? style.activeText : style.text}
            variant="subtitle1"
            onClick={() => handleContentChange(DetailsContent, 3)}
          >
            Details
            {activeIndex === 3 && <Box sx={style.underline} />}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ my: 1, width: 'auto' }}>
        <Divider sx={{ backgroundColor: '#737373',}} />
      </Box>
      <div style={{ marginTop: 16 }}>{selectedContent}</div>
    </CardContent>
  );
};

export default MovieCard;
