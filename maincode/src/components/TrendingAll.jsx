import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes

import MovieCard from './MovieCard';

const TrendingAll = ({ showButtons }) => {
  const [trending, setTrending] = useState([]);
  const [watchlist, setWatchlist] = useState([]); // State for the watchlist

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`, options)
      .then(response => response.json())
      .then(data => {
        setTrending(data.results);
        console.log(data.results);
      })
      .catch(error => console.error('Error fetching trending content:', error));
  }, []);

  const addToWatchlist = (item) => {
    // Add the item to the watchlist
    setWatchlist([...watchlist, item]);
  };

  const removeFromWatchlist = (item) => {
    // Remove the item from the watchlist
    const updatedWatchlist = watchlist.filter(watchlistItem => watchlistItem.id !== item.id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div>
      <h1>Trending Movies and TV Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {trending.map(item => (
          <MovieCard
            key={item.id}
            title={item.title || item.name}
            overview={item.overview}
            backdrop_path={item.backdrop_path}
            showButtons={showButtons}
            onAddToWatchlist={() => addToWatchlist(item)}
            onRemoveFromWatchlist={() => removeFromWatchlist(item)}
          />
        ))}
      </div>
    </div>
  );
};

// Define PropTypes para o componente
TrendingAll.propTypes = {
  showButtons: PropTypes.any, // Substitua 'any' pelo tipo de prop correto, se aplicável.
};

export default TrendingAll;




