import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton, MenuItem } from '@mui/material';
import { Menu as ShowMenu} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import '@fontsource/roboto';

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: "none",
    border: "none",
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_letter:{
    fontWeight: 400,
    fontSize: '1.5rem',
    letterSpacing: '0.2rem',
    marginLeft:5,
  },
  firstLetter: {
    fontWeight: 800,
    color: '#f44336',
    fontSize: '2.5rem',
  },
  firstLetterShadow: {
    textShadow: '5px -2px 1px #7B032C',
  },
  appBar: {
    backgroundColor: '#081b27',
  },
  button: {
    color: '#fff',
    margin: '0 0px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontSize: '0.9rem',
  },
  button_box: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    color: '#fff',
  }
};

export default function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.root} >
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" textAlign="center" sx={styles.logo}>
            <span style={styles.firstLetter}>
              <span style={styles.firstLetterShadow}>M</span>
            </span>
            <span style={styles.logo_letter}>ovie Website</span>
          </Typography>
          <Box sx={styles.button_box}>
            <IconButton
              size="large"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={styles.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <ShowMenu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Button color="inherit" sx={styles.button}>
                  Home
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" sx={styles.button}>
                  Movies
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" sx={styles.button}>
                  IMDB
                </Button>
              </MenuItem>
            </ShowMenu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
