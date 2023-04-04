import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const styles = {
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

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Please enter a valid search term');
    } else {
      onSearch(searchTerm);
      setSearchTerm(''); // clear the search field after submitting the form
    }
  };

  return (
      <Box sx={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="search"
            label="Enter the Movie Title"
            InputLabelProps={{
              style: { color: 'white' },
            }}
            value={searchTerm}
            className="my_textfield"
            onChange={handleChange}
            color="primary"
            variant="outlined"
            sx={styles.searchbar}
          />
        </form>
      </Box>
  );
};

export default SearchBar;
