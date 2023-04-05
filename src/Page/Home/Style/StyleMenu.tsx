import { createTheme, Theme } from "@mui/material/styles";


export const style = {
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
    logo_letter: {
        fontWeight: 400,
        fontSize: '1.5rem',
        letterSpacing: '0.2rem',
        marginLeft: 5,
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
        backgroundColor: 'inherit', //old color: #081b27
        boxShadow: 'none',
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
        color: 'white',
    },
};