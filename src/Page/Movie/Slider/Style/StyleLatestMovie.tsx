import { createTheme, Theme } from "@mui/material/styles";


export const style = {
    root_box_bacground: {
        backgroundImage: `url(${require('../../../../img/background.jpg')})`,
        position: 'relative',
        height: { xs: '75vh', sm: 'calc(70vh - 64px)', md: 'calc(60vh - 64px)' },
        maxWidth: '100vw',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: { ms: 'no-repeat' },
        backgroundPosition: { md: 'center center' },
        backgroundColor: { xs: '#141414', md: '#141414' },
    },
    root_box__effect: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        backdropFilter: 'blur(5px)',
        blur: '(20px)',
        opacity: '1px',
        background: { xs: 'rgba(0, 0, 0, 0.4)', md: 'rgba(0, 0, 0, 0.5)' },

    },
    box_photo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    box_text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        color: '#ffff',
    },
    title: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '2.2rem',
        letterSpacing: '0.1rem',
        fontWeight: 800,
    },
    blueButton: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#00A1FF',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 800,
        width: '120px',
        height: '38px',
    },
    movies: {
        marginTop: {
            xs: 1,
        },
        justifyContent: 'center',
    },
    movies_poster: {
        width: 'auto',
        height: {
            xs: 'auto',
            xl: 'auto',
        },
        '@media (min-width:  2560px)': { // add another media rule for width
            width: '100%',
            height: '100%',
        },
    },

};