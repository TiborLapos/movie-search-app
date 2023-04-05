import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme();

export const style = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      },
      searchbar:{
            marginX: 'auto',
            width: { xs: 350, md: 500 },
            '& .MuiInputBase-input': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            marginTop:5,
            alignItem:'center',
        },
};