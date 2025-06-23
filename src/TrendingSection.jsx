import React from 'react';
import './TrendingSection.css';
import { FaHeart } from 'react-icons/fa';

function TrendingSection() {
  return (
    <div className="trending">
      <p className="subtitle">Trending New Hits</p>
      <h1 className="title">In My Feelings</h1>
      <p className="artist">
        <strong>Camila Cabello</strong>
        <span className="plays">63 Million Plays</span>
      </p>
      <div className="buttons">
        <button className="listen-btn">Listen Now</button>
        <button className="icon-btn"><FaHeart /></button>
      </div>
    </div>
  );
}

export default TrendingSection;
