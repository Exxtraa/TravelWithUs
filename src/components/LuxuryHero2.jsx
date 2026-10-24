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
          Experience The World<br />Like Never Before
        </h2>
        <p className="luxury-hero-subtitle">
          Discover curated royal escapes, golden desert dunes, and unforgettable 
          journeys across the historic heart of Rajasthan.
        </p>
      </div>

      {/* Floating Plan Form with proper placeholders, destination, start date, end date, and direct WhatsApp redirect to +91 9024772664 */}
      <form onSubmit={handlePlanSubmit} className="floating-search-bar floating-plan-bar">
        <div className="search-field-item">
          <label>Destination</label>
          <select 
            value={selectedDestination} 
            onChange={(e) => {
              setSelectedDestination(e.target.value);
              if (onFilterChange && e.target.value) onFilterChange(e.target.value);
            }}
            required
            aria-label="Select Destination"
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

        <div className="search-field-item">
          <label>Start Date</label>
          <input 
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Select Start Date"
            aria-label="Trip Start Date"
          />
        </div>

        <div className="search-field-item">
          <label>End Date</label>
          <input 
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Select End Date"
            aria-label="Trip End Date"
          />
        </div>

        <button type="submit" className="btn-search-green btn-plan-direct" aria-label="Plan on WhatsApp">
          <span>Plan</span>
          <ArrowRight size={17} />
        </button>
      </form>
    </div>
  );
}
