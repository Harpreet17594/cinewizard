// TVShowsList.jsx
import React, { useState, useEffect } from 'react';
import TVShowCard from './TVShowCard'; // You'll create this component later.

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
      <h1>Popular TV Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tvShows.map(tvShow => (
          <TVShowCard
            key={tvShow.id}
            name={tvShow.name}
            overview={tvShow.overview}
            backdrop_path={tvShow.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsList;
