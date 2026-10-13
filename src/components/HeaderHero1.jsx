import React, { useState } from 'react';
import { Compass, Search, ArrowRight, MapPin, Calendar, Wallet } from 'lucide-react';

export default function HeaderHero1({ onExploreClick, onSearchChange }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchChange) onSearchChange(searchInput);
    onExploreClick();
  };

  return (
    <section
      className="hero-screen-one"
      style={{
        backgroundImage: `url('https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaipur_03-2016_04_Amber_Fort.jpg/1280px-Jaipur_03-2016_04_Amber_Fort.jpg')`
      }}
    >


      {/* Massive Center Title matching Image 1 */}
      <div className="hero-center-one">
        <h1 className="hero-main-title">Travel</h1>
        <p className="hero-subtitle-one">
          Travel with intention. Discover royal retreats, active desert adventures,
          and boutique heritage stays all in one place.
        </p>
      </div>

      {/* Docked Bottom Filter Bar matching Image 1 */}
      <div className="hero-bottom-bar-one">
        <div className="bottom-bar-segment" onClick={onExploreClick}>
          <span className="segment-label">Activity / Goal</span>
          <span className="segment-value">Heritage / Desert Safari / Stays</span>
        </div>

        <div className="bottom-bar-segment" onClick={onExploreClick}>
          <span className="segment-label">Location</span>
          <span className="segment-value">Rajasthan (Jaipur, Udaipur, Jaisalmer...)</span>
        </div>

        <div className="bottom-bar-segment" onClick={onExploreClick}>
          <span className="segment-label">Date / Duration</span>
          <span className="segment-value">Anytime / 2 to 7 Days</span>
        </div>

        <div className="bottom-bar-segment" onClick={onExploreClick}>
          <span className="segment-label">Budget</span>
          <span className="segment-value">On Request / Direct WhatsApp</span>
        </div>

        <button
          className="explore-cta-block"
          onClick={onExploreClick}
          aria-label="Explore Rajasthan tour packages"
        >
          <span>Explore</span>
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}
