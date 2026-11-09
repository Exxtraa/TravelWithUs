import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function LuxuryHero2({ onFilterChange }) {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handlePlanSubmit = (e) => {
    e.preventDefault();

    const destObj = DESTINATIONS.find(d => d.id === selectedDestination);
    const destName = destObj ? destObj.name : (selectedDestination || 'Complete Rajasthan Tour');

    let message = `Hi Roam Rajasthan, I would like to plan a Rajasthan tour package:\n• Destination: ${destName}\n• Start Date: ${startDate || 'Flexible / To be decided'}\n• End Date: ${endDate || 'Flexible / To be decided'}\n\nPlease share the customized itinerary details and direct pricing quote.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919024772664?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
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
          Experience The Heritage<br />Like Never Before
        </h2>
        <p className="luxury-hero-subtitle">
          Discover curated royal escapes, golden desert dunes, and unforgettable 
          journeys across the historic heart of Rajasthan.
        </p>
      </div>

      <form
        onSubmit={handlePlanSubmit}
        className="experience-filter-glass"
        aria-label="Rajasthan trip planner"
      >
        <div className="experience-filter-item">
          <label className="experience-filter-label" htmlFor="hero-destination">
            Location
          </label>
          <select
            id="hero-destination"
            value={selectedDestination}
            onChange={(e) => {
              setSelectedDestination(e.target.value);
              if (onFilterChange && e.target.value) onFilterChange(e.target.value);
            }}
            required
            aria-label="Select destination"
          >
            <option value="" disabled>Select Destination</option>
            <option value="all">All Rajasthan Heritage Packages</option>
            {DESTINATIONS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.subtitle})
              </option>
            ))}
          </select>
        </div>
        <div className="experience-filter-item">
          <span className="experience-filter-label">Start Date</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            aria-label="Trip start date"
          />
        </div>
        <div className="experience-filter-item">
          <span className="experience-filter-label">End Date</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            aria-label="Trip end date"
          />
        </div>
        <button
          type="submit"
          className="experience-filter-cta"
          aria-label="Plan trip on WhatsApp"
        >
          <span>Explore</span>
          <ArrowRight size={17} />
        </button>
      </form>
    </div>
  );
}
