import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero-image';
import TVShowsList from './components/TVShowsList';
import MovieList from './components/MovieList';
import Footer from './components/Footer.jsx';
import TrendingAll from './components/TrendingAll'
import Searchmovie from './components/Searchmovie'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />     
      <Routes>
        {/* Define your routes here */}
        <Route path="/home" element={<TrendingAll />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/tv-shows" element={<TVShowsList />} />
        <Route path="/searchmovie" element={<Searchmovie />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;