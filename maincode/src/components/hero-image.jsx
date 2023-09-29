// src/components/hero-image.jsx
import React from 'react';
import './Hero-image.css';
import heroImage from './Picture1.jpg';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>CineWizard</h1>
      <p>Don't know what to watch, look no further!!!</p>
    </div>
  );
}

export default Hero;
