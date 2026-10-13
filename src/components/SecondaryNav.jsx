import React, { useState } from 'react';
import { MapPin, Users, Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SecondaryNav({ onOpenPlanModal, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guests, setGuests] = useState('2 Adults');
  const navigate = useNavigate();

  const handleNavClick = (anchorId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="secondary-nav-sticky">
      {/* Brand matching Image 2 */}
      <Link to="/" className="brand-logo-two">
        <MapPin size={24} />
        <span>TravelWith Us</span>
      </Link>

      {/* Nav links matching Image 2 */}
      <ul className="nav-links-two">
        <li>
          <button onClick={() => handleNavClick('popular-destinations')}>
            Destinations
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('plan-trip')}>
            Experiences
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('about-us')}>
            About Us
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('contact-section')}>
            Contact
          </button>
        </li>
      </ul>

      {/* Right controls matching Image 2 */}
      <div className="nav-right-two">
        <div className="guest-selector-pill">
          <Users size={16} />
          <select 
            value={guests} 
            onChange={(e) => setGuests(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 600, cursor: 'pointer' }}
          >
            <option value="1 Adult">1 Adult</option>
            <option value="2 Adults">2 Adults</option>
            <option value="Family (3-4)">Family (3-4)</option>
            <option value="Group (5+)">Group (5+)</option>
          </select>
        </div>

        <button 
          className="btn-search-green"
          onClick={() => {
            if (onSearchClick) onSearchClick();
            handleNavClick('popular-destinations');
          }}
        >
          <span>SEARCH</span>
          <Search size={15} />
        </button>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          className="mobile-hamburger-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
