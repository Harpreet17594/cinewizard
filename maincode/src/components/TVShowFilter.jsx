import React from 'react';

const TVShowFilter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <div className="filter-container">
      <label className="filter-label" htmlFor="tvShowFilter">Filter:</label>
      <select
        id="tvShowFilter"
        className="filter-dropdown"
        onChange={handleFilterChange}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="on_the_air">On the Air</option>
      </select>
    </div>
  );
};

export default TVShowFilter;
