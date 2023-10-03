import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Make sure to adjust the import path

const trendingAll = () => {
  const [trending, setTrending] = useState([]);

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

  return (
    <div>
      <h1>Trending Movies and TV Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {trending.map(item => (
          <MovieCard
            key={item.id}
            title={item.title || item.name} // Title can be either "title" or "name" depending on the type
            overview={item.overview}
            backdrop_path={item.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default trendingAll;