export const style = {
    root_box_bacground: {
        position: 'relative',
        background: {xs:'rgba(0, 0, 0, 0.0)',md:'rgba(0, 0, 0, 0.3)'},
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${require('../../../../img/background.jpg')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            filter: 'blur(5px)',
            backdropFilter: 'blur(10px)',
            blur: '(20px)',
            opacity: '1px',
            zIndex: -1,
            boxShadow: 'none'
        },
    },
    box_photo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

    image: {
        height: { xs: '90%', sm: '100%' },
        width: { xs: '90%', md: '100%' },
        maxHeight:'600px',
        objectFit: 'contain',
        borderRadius:  '16px' ,
        marginBottom:3,
      },
    movies: {
        justifyContent: 'center',
        marginTop:'0.01rem',
        marginBottom:4,
    },
    movies_poster: {

    },

};