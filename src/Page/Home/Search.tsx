import React, { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(searchValue);
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Search;
