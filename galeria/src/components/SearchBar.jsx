import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  };

  return (
<form onSubmit={handleSubmit} className="search-form">
  <input
    type="text"
    placeholder="Buscar imagens..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button type="submit">Buscar</button>
</form>

  );
};

export default SearchBar;
