import { createTheme, Theme } from "@mui/material/styles";


export const style = {
    root: {
        height: '100vh',
        marginTop: 5,
        fontFamily: 'Roboto',
      },
      card_root: {
        display: 'flex',
        justifyContent: 'center',
        width: { xs: "100%", md: "100%" },
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: 'inherit',
        color: 'white',
      },
      image: {
        height: { xs: "90%", md: "70vh" },
        width: { xs: "100%", md: "auto" },
        objectFit: 'contain',
        borderRadius: {xs:'20px', md:'16px'},
      },
      card_content: {
        marginLeft: { xs: '0', md: '30px' },
        marginTop: { xs: '5px', md: '0' },
      },
      movie_info: {
        color: '#737373',
        marginTop: {xs:"-35px", md:'5px'},
      },
      cardcontainer_root:{
        marginTop:{xs:"-55px", md:"0px"}
      },
      text_design_margin:{
        marginLeft:{xs:'30px'}
      },
      text_design_rating:{ 
        fontWeight: 900,
        fontSize: 30,
        display: {xs:"block",md:'flex'}, 
        alignItems: 'right',
        marginRight: 'auto',
      }
};