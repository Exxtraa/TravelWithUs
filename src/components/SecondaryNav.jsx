import React, { useState } from 'react';
import { MapPin, Users, Search, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';

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

  const handleWhatsAppDirect = () => {
    setMobileMenuOpen(false);
    const text = encodeURIComponent("Hi Aspak, I would like to plan a customized Rajasthan tour with TravelWith Us. Can you please share details?");
    window.open(`https://wa.me/919024772664?text=${text}`, '_blank');
  };

  return (
    <>
      <nav className="secondary-nav-sticky">
        {/* Brand matching Image 2 */}
        <Link to="/" className="brand-logo-two" onClick={() => setMobileMenuOpen(false)}>
          <MapPin size={22} />
          <span>TravelWith Us</span>
        </Link>

        {/* Desktop Nav links matching Image 2 */}
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

        {/* Right controls */}
        <div className="nav-right-two">
          <div className="guest-selector-pill">
            <Users size={15} />
            <select 
              value={guests} 
              onChange={(e) => setGuests(e.target.value)}
              aria-label="Select guest count"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="Family (3-4)">Family (3-4)</option>
              <option value="Group (5+)">Group (5+)</option>
            </select>
          </div>

          <button 
            className="btn-search-green desktop-search-btn"
            onClick={() => {
              if (onSearchClick) onSearchClick();
              handleNavClick('popular-destinations');
            }}
            aria-label="Search Rajasthan packages"
          >
            <span>SEARCH</span>
            <Search size={14} />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-box" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo-two">
                <MapPin size={20} />
                <span>TravelWith Us</span>
              </div>
              <button 
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-links">
              <button className="mobile-drawer-link" onClick={() => handleNavClick('popular-destinations')}>
                <span>Destinations & Packages</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('plan-trip')}>
                <span>Tailored Experiences</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('travel-blog')}>
                <span>Travel Guides & Blog</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('about-us')}>
                <span>About TravelWith Us</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('contact-section')}>
                <span>Contact Details</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Destination Shortcuts */}
            <div className="mobile-dest-shortcuts">
              <span className="shortcuts-title">Quick Destinations:</span>
              <div className="shortcuts-chips">
                {DESTINATIONS.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/destination/${d.id}`}
                    className="shortcut-chip"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Drawer WhatsApp CTA */}
            <div className="mobile-drawer-cta">
              <button className="btn-price-whatsapp" onClick={handleWhatsAppDirect} style={{ width: '100%' }}>
                <MessageCircle size={18} />
                <span>Chat with Us on WhatsApp</span>
              </button>
              <p className="mobile-phone-text">Phone: +91 9024772664 (Aspak)</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
