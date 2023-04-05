

export const style = {
  root: {
    height: '100vh',
    marginTop: 2,
    fontFamily: 'Roboto',
  },
  backdrop: {
    position: 'fixed',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: {ms:'no-repeat'},
    backgroundPosition:{ md:'center center'},
    filter: 'blur(5px)',
    backgroundColor:{xs:'#141414',md:'#141414'},
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      blur:'(20px)',
      opacity:'1px',
      background: {xs:'rgba(0, 0, 0, 0.0)',md:'rgba(0, 0, 0, 0.7)'},
    },
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
    height: { xs: "90%", md: "75vh" },
    width: { xs: "100%", md: "auto" },
    maxWidth: {md:'600px'},
    objectFit: 'contain',
    borderRadius: {xs:'20px', md:'16px'},
  },
  card_content: {
    marginLeft: { xs: '0', md: '30px' },
    marginTop: { xs: '5px', md: '0' },
  },
  movie_info: {
    color: '#a6a6a6',
    marginTop: {xs:"-35px", md:'5px'},
  },
  cardcontainer_root:{
    marginTop:{xs:"-5px", md:"0px"}
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