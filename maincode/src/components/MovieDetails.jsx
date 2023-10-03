import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const API_KEY = '6a47f69eeaf9c7bb4961af6232431197'; // Replace with your TMDB API key
    const BASE_URL = 'https://api.themoviedb.org/3';

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Error loading movie details.');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Genre: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Duration: {movieDetails.runtime} minutes</p>
          <p>Budget: ${movieDetails.budget.toLocaleString()}</p>
          <p>Revenue: ${movieDetails.revenue.toLocaleString()}</p>
          {/* You can add more information here as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
