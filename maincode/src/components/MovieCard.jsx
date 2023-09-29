import React from 'react';

const MovieCard = ({ title, overview, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%' }} />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
