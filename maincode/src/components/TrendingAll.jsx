import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Make sure to adjust the import path
import './movieCard.css'; // Import the CSS file with the card styles


const TrendingAll = () => {
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
      <h2>Trending Movies and TV Shows</h2>
      <div className="movies-grid"> {/* Use the same class for consistency */}
        {trending.map(item => (
          <div className="movies-grid" key={item.id}> {/* Apply movie-card class */}
            <MovieCard
              title={item.title}
              overview={item.overview}
              backdrop_path={item.backdrop_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingAll;
