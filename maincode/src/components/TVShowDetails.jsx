import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link

const TVShowDetails = () => {
  const { tvShowId } = useParams();
  const [tvShowDetails, setTVShowDetails] = useState(null);

  useEffect(() => {
    const API_KEY = 'Y6a47f69eeaf9c7bb4961af6232431197'; // Replace with your TMDB API key
    const BASE_URL = 'https://api.themoviedb.org/3';

    const fetchTVShowDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tv/${tvShowId}?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Error loading TV show details.');
        }
        const data = await response.json();
        setTVShowDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTVShowDetails();
  }, [tvShowId]);

  return (
    <div>
      {tvShowDetails ? (
        <div>
          <h1>{tvShowDetails.name}</h1>
          <p>{tvShowDetails.overview}</p>
          <p>Genre: {tvShowDetails.genres.map((genre) => genre.name).join(', ')}</p>
          <p>First Air Date: {tvShowDetails.first_air_date}</p>
          <p>Number of Seasons: {tvShowDetails.number_of_seasons}</p>
          <p>Number of Episodes: {tvShowDetails.number_of_episodes}</p>
          {/* You can add more information here as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TVShowDetails;

