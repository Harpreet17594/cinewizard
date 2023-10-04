import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';
import './movieFilter.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('popular');

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/movie/${filter}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        // Fetch provider information for each movie
        fetchProviderInfo(data.results);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, [filter]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieFilter onFilterChange={handleFilterChange} />
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
            providers={movie.providers} // Pass providers as a prop to MovieCard
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
