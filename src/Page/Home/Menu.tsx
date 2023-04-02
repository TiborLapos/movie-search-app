import { BorderColor } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';





const styles = {
    root: {
        flexGrow: 1,
        boxShadow: "none",
        border: "none",
      },
      logo: {
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.2rem',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      firstLetter: {
        color: '#f44336',
        fontSize: '2.5rem',
      },
      firstLetterShadow: {
        textShadow: '4px -4px 1px #7B032C',
      },
      appBar: {
        backgroundColor: '#081b27',
      },
      button: {
        color: '#fff',
        fontWeight: 'bold',
        margin: '0 0px',
        fontFamily: 'Montserrat, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontSize: '0.9rem',
      },
      button_box: {
        marginLeft: 10,
      },
  };



export default function Menu() {
  return (
    <Box sx={styles.root} >
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h5" textAlign="center" sx={styles.logo}>
                <span style={styles.firstLetter}>
                    <span style={styles.firstLetterShadow}>M</span>
                </span>
                <span>ovie Website</span>
          </Typography>
          <Box sx={styles.button_box}>
            <Button color="inherit" sx={styles.button}>
                Home
            </Button>
            <Button color="inherit" sx={styles.button}>
                Movies
            </Button>
            <Button color="inherit" sx={styles.button}>
                IMDB
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
