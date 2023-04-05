import { createTheme, Theme } from "@mui/material/styles";


export const style = {
    root:{
        marginLeft:{xs:"0px", md:"20px"},
        marginTop:{xs:0, md:2}, 
        width:{xs:"auto", md:600},
        height:"50%",
        minHeight:{xs:"300px", md:'240px'}
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