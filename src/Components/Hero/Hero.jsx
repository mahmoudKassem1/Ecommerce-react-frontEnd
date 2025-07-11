import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only!</h2>

        <div className="hero-headline">
          <div className="hero-hand-icon">
            <h1>New</h1>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <h1>Collections</h1>
          <h1>For Everyone</h1>
        </div>

        <div className="hero-latest-btn">
          <span>Latest Collections</span>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="Hero banner" />
      </div>
    </div>
  );
};

export default Hero;
