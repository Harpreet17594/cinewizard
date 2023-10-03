import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; 

const TVShowsList = () => {
  const [tvShows, setTVShows] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setTVShows(data.results);
        console.log(data.results);
      })
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  const addToWatchlist = (tvShow) => {
    // Add Watchlist
    setWatchlist([...watchlist, tvShow]);
  };

  const removeFromWatchlist = (tvShow) => {
    // Remove Watchlist
    const updatedWatchlist = watchlist.filter((item) => item.id !== tvShow.id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div>
      <h1>Popular TV-Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tvShows.map(item => (
          <MovieCard
            key={item.id}
            title={item.title || item.name} 
            overview={item.overview}
            backdrop_path={item.backdrop_path}
            onAddToWatchlist={() => addToWatchlist(item)}
            onRemoveFromWatchlist={() => removeFromWatchlist(item)}
            isAdded={watchlist.some((watchlistItem) => watchlistItem.id === item.id)}
            category="TVShows" 
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsList;


