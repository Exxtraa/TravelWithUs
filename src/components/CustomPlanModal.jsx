import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { DESTINATIONS, openWhatsAppQuote } from '../data/destinations';

export default function CustomPlanModal({ isOpen, onClose, initialDestination = 'jaipur' }) {
  const [destination, setDestination] = useState(initialDestination);
  const [month, setMonth] = useState('Upcoming Month');
  const [travelers, setTravelers] = useState('2 Adults');
  const [hotelTier, setHotelTier] = useState('Heritage Haveli & Boutique Stay');
  const [vehicle, setVehicle] = useState('Private AC Sedan / Ertiga');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const destObj = DESTINATIONS.find(d => d.id === destination) || { name: 'Rajasthan Heritage Circuit' };
    openWhatsAppQuote(destObj.name, {
      travelers,
      month,
      hotelTier,
      vehicle
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-block">
          <div className="modal-badge-pill">
            <Sparkles size={14} color="#c69214" />
            <span>DIRECT LOCAL PRICING BY US</span>
          </div>
          <h3 className="modal-title">
            Customize Your Tour Package
          </h3>
          <p className="modal-subtitle">
            Tell us your travel preferences. We will generate your inquiry directly on WhatsApp to us (+91 9024772664) with no broker fees.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form-body">
          <div className="widget-field">
            <label>Choose Tour Destination</label>
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              {DESTINATIONS.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name} Package ({d.subtitle})
                </option>
              ))}
              <option value="complete">Complete Rajasthan Heritage Circuit (7-10 Days)</option>
            </select>
          </div>

          <div className="modal-grid-two">
            <div className="widget-field">
              <label>Travel Month / Dates</label>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="This Month">This Month (Immediate)</option>
                <option value="November">November (Pleasant)</option>
                <option value="December">December (Festive / Desert Camp)</option>
                <option value="January">January (Winter Bliss)</option>
                <option value="February">February (Desert Festival)</option>
                <option value="March">March (Holi in Rajasthan)</option>
                <option value="Flexible">Dates Flexible</option>
              </select>
            </div>

            <div className="widget-field">
              <label>Number of Guests</label>
              <select value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Adults (Couple / Friends)">2 Adults (Couple)</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="Family (4-5 Guests)">Family (4-5 Guests)</option>
                <option value="Large Group (6+ Guests)">Large Group (6+ Guests)</option>
              </select>
            </div>
          </div>

          <div className="modal-grid-two">
            <div className="widget-field">
              <label>Stay Preference</label>
              <select value={hotelTier} onChange={(e) => setHotelTier(e.target.value)}>
                <option value="Heritage Haveli & Boutique Stay">Heritage Haveli & Boutique</option>
                <option value="3-Star Deluxe Clean Stays">3-Star Deluxe Clean Stays</option>
                <option value="4-Star Luxury & Desert Camp">4-Star Luxury & Desert Camp</option>
                <option value="5-Star Royal Palace Experience">5-Star Royal Palace Resorts</option>
              </select>
            </div>

            <div className="widget-field">
              <label>Vehicle Choice</label>
              <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                <option value="Private AC Sedan (Dzire / Etios)">Private AC Sedan (1-3 Pax)</option>
                <option value="Toyota Innova / Crysta SUV">Innova / Crysta SUV (4-6 Pax)</option>
                <option value="Luxury Tempo Traveller (9-16 Seater)">Luxury Tempo Traveller (7+ Pax)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-widget-whatsapp"
            style={{ marginTop: '0.8rem' }}
          >
            <MessageCircle size={20} />
            <span>Send to Us on WhatsApp (+91 9024772664)</span>
          </button>

          <p className="modal-disclaimer">
            Redirects directly to WhatsApp with your pre-filled inquiry. No spam, immediate personal response.
          </p>
        </form>
      </div>
    </div>
  );
}
