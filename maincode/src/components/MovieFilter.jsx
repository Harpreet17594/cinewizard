import React, { useState } from 'react';

const MovieFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('popular');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <h2>Filter Movies</h2>
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default MovieFilter;
