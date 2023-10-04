import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import TVShowFilter from './TVShowFilter';
import './TVShowList.css';

const TVShowsList = () => {
  const [tvShows, setTVShows] = useState([]);
  const [filter, setFilter] = useState('popular');

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/tv/${filter}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setTVShows(data.results);
        console.log(data.results);
      })
      .catch(error => console.error('Error fetching TV shows:', error));
  }, [filter]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="tv-shows-container">
      <h2>Popular TV Shows</h2>
      <TVShowFilter onFilterChange={handleFilterChange} />
      <div className="tv-shows-grid">
        {tvShows.map(show => (
          <MovieCard
            key={show.id}
            title={show.name}
            overview={show.overview}
            backdrop_path={show.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowsList;
