import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/hero-image';
import MovieList from './components/MovieList';
import Footer from './components/Footer.jsx'

import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <MovieList />
    <Footer/>
    </>
    
  )
}

export default App