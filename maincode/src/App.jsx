import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/hero-image';
import MovieList from './components/MovieList';
import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <MovieList />
    </>
    
  )
}

export default App