import React from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography, IconButton, MenuItem} from '@mui/material';
import { Menu as ShowMenu} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery, createTheme } from '@mui/material';
import '@fontsource/roboto';

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: "none",
    border: "none",
    zIndex: 2,
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
    marginLeft: 'auto',
  },
  menuList: {
    background: '#081b27',
    color:'white',
  },
};

export default function Menu() {
  const theme = createTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);



  //Menu Show Button if on webpage but show menu icon if on smaller device.
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenuButton = () => {
    if (isXsScreen) {
      return (
        <IconButton
          size="large"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={styles.menuIcon}
        >
          <MenuIcon  />
        </IconButton>
      );
    } else {
      return (
        <>
        <Box sx={styles.button_box}>
            <Button color="inherit" sx={styles.button} component={Link} to="/home">
              Home
            </Button>
          <Button color="inherit" sx={styles.button} component={Link} to="/cards">
            Movies
          </Button>
          <Button color="inherit" sx={styles.button} component={Link} to="/imdb">
            IMDB
          </Button>
        </Box>
        </>

      );
    }
  };

  return (
    <Box sx={styles.root} >
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h5" textAlign="center" sx={styles.logo}>
            <span style={styles.firstLetter}>
              <span style={styles.firstLetterShadow}>M</span>
            </span>
            <span style={styles.logo_letter}>ovie Website</span>
          </Typography>
          {renderMenuButton()}
          <ShowMenu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{ style: { backgroundColor: "#081b27" } }}
            sx={{ "& .MuiList-root": styles.menuList }}
          >
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...styles.button, color: '#fff' }}>
              <Link to="/home">Home</Link>
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...styles.button, color: '#fff' }}>
                Movies
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...styles.button, color: '#fff' }}>
                IMDB
              </Button>
            </MenuItem>
          </ShowMenu>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
