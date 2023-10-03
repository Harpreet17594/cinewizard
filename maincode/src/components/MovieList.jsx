import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    // Construct the query URL for popular movies
    const queryUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        // Fetch provider information for each movie
        fetchProviderInfo(data.results);
      })
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []); // No dependencies, fetch once when component mounts

  // Function to fetch provider information for each movie
  const fetchProviderInfo = async (movies) => {
    const providerData = [];
    const API_KEY = 'b2ceb41d1b13c59c04358418f87cecae';
    const BASE_URL = 'https://api.themoviedb.org/3';

    for (const movie of movies) {
      const response = await fetch(`${BASE_URL}/movie/${movie.id}/watch/providers?api_key=${API_KEY}`);
      const data = await response.json();
      const providers = data.results.GB?.flatrate; // Replace 'GB' with your region

      if (providers) {
        providerData.push({ id: movie.id, providers });
      }
    }

    // Update the state with provider information
    setMovies(prevMovies => {
      return prevMovies.map(movie => {
        const providerInfo = providerData.find(provider => provider.id === movie.id);
        return {
          ...movie,
          providers: providerInfo ? providerInfo.providers : [],
        };
      });
    });
  };

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
            providers={movie.providers} // Pass providers as a prop to MovieCard
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
