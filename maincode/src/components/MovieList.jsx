import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
