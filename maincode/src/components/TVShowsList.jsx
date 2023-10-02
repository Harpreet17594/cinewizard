// TVShowsList.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Make sure to adjust the import path

const TVShowsList = () => {
  const [tvShows, setTVShows] = useState([]);

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

  return (
    <div>
      <h1>Popular TV-Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tvShows.map(item => (
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

export default TVShowsList;
