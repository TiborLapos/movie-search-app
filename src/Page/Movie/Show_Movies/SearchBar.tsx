import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { style } from './Style/StyleSearchBar'

interface Props {
  onSearch: (searchTerm: string) => void;
}


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
    <Box sx={style.wrapper}>
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
          sx={style.searchbar}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
