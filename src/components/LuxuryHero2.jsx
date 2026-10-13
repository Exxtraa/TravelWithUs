import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function LuxuryHero2({ onFilterChange, onOpenPlanModal }) {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [checkIn, setCheckIn] = useState('2026-11-10');
  const [checkOut, setCheckOut] = useState('2026-11-15');
  const [guests, setGuests] = useState('2 Adults');

  const handleSearch = (e) => {
    e?.preventDefault();
    if (onFilterChange) {
      onFilterChange(selectedDestination);
    }
    const target = document.getElementById('popular-destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="luxury-hero-two"
      style={{
        backgroundImage: `url('https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Udaipur_Lake_India.JPG/1280px-Udaipur_Lake_India.JPG')`
      }}
    >
      <div className="luxury-hero-content">
        <h2 className="luxury-hero-title">
          Experience The World<br />Like Never Before
        </h2>
        <p className="luxury-hero-subtitle">
          Discover curated royal escapes, golden desert dunes, and unforgettable 
          journeys across the historic heart of Rajasthan.
        </p>

        <div className="hero-cta-buttons">
          <button 
            className="btn-pill-dark"
            onClick={handleSearch}
          >
            Explore Destinations
          </button>
          <button 
            className="btn-pill-light"
            onClick={onOpenPlanModal}
          >
            Book Your Stay
          </button>
        </div>
      </div>

      {/* Floating Search Bar matching Image 2 */}
      <form onSubmit={handleSearch} className="floating-search-bar">
        <div className="search-field-item">
          <label>Destination</label>
          <select 
            value={selectedDestination} 
            onChange={(e) => {
              setSelectedDestination(e.target.value);
              if (onFilterChange) onFilterChange(e.target.value);
            }}
          >
            <option value="all">All Rajasthan Packages</option>
            {DESTINATIONS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}, Rajasthan
              </option>
            ))}
          </select>
        </div>

        <div className="search-field-item">
          <label>Check In</label>
          <input 
            type="date" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="search-field-item">
          <label>Check Out</label>
          <input 
            type="date" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="search-field-item">
          <label>Guests</label>
          <select 
            value={guests} 
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1 Adult">1 Adult</option>
            <option value="2 Adults">2 Adults</option>
            <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
            <option value="4 Adults (Family)">4 Adults (Family)</option>
            <option value="Group 6+">Group 6+</option>
          </select>
        </div>

        <button type="submit" className="btn-search-green">
          <span>SEARCH</span>
          <Search size={16} />
        </button>
      </form>
    </div>
  );
}
