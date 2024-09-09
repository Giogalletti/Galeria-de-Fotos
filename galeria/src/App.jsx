import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const ACCESS_KEY = 'h0cylfaDCwI0560wbwz2XIKO2L1EP19yOeFxnAMTs0DhcP21qLn3tXTk';

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: ACCESS_KEY,
        },
        params: {
          query: query,
          per_page: 15,
          page: 1,
        }
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    }
  };

  useEffect(() => {
    fetchImages('nature');
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchImages(term);
  };

  const toggleDarkMode = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <div className={`app ${darkMode ? 'light' : 'dark'}`}>
      <h1>Galeria de Imagens</h1>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
      <SearchBar onSearch={handleSearch} />
      <Gallery images={images} />
    </div>
  );
};

export default App;
