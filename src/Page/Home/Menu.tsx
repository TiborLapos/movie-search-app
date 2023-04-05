import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography, IconButton, MenuItem } from '@mui/material';
import { Menu as ShowMenu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery, createTheme } from '@mui/material';
import { style } from './Style/StyleMenu'
import '@fontsource/roboto';





export default function Menu() {
  const theme = createTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);


  //Menu Show Button if on webpage but show menu icon if on smaller device.
  const handleClick = (event: any) => {
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
          sx={style.menuIcon}
        >
          <MenuIcon />
        </IconButton>
      );
    } else {
      return (
        <>
          <Box sx={style.button_box}>
            <Button color="inherit" sx={style.button} component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" sx={style.button} component={Link} to="/cards">
              Movies
            </Button>
            <Button color="inherit" sx={style.button} component={Link} to="/imdb">
              IMDB
            </Button>
          </Box>
        </>

      );
    }
  };

  return (
    <Box sx={style.root} >
      <AppBar position="static" sx={style.appBar}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h5" textAlign="center" sx={style.logo}>
            <span style={style.firstLetter}>
              <span style={style.firstLetterShadow}>M</span>
            </span>
            <span style={style.logo_letter}>ovie Website</span>
          </Typography>
          {renderMenuButton()}
          <ShowMenu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{ style: { backgroundColor: "#081b27" } }}
            sx={{ "& .MuiList-root": style.menuList }}
          >
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...style.button, color: '#fff' }}>
                <Link to="/home">Home</Link>
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...style.button, color: '#fff' }}>
                Movies
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} >
              <Button color="inherit" sx={{ ...style.button, color: '#fff' }}>
                IMDB
              </Button>
            </MenuItem>
          </ShowMenu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
