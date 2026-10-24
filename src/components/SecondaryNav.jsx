import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { DESTINATIONS, CONTACTS, openEmailQuote } from '../data/destinations';
import CamelLogo from './CamelLogo';
import LanguageSelector from './LanguageSelector';

export default function SecondaryNav({ onOpenPlanModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDestDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (anchorId) => {
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);
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

  const handleWhatsAppDirect = (number = CONTACTS.primary.cleanPhone) => {
    setMobileMenuOpen(false);
    const text = encodeURIComponent("Hi Roam Rajasthan Team, I would like to plan a customized Rajasthan tour. Can you please share package details?");
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
  };

  return (
    <>
      <nav className="secondary-nav-sticky">
        {/* Brand matching Roam Rajasthan with Camel Logo to the right and location logo removed */}
        <Link to="/" className="brand-logo-two" onClick={() => setMobileMenuOpen(false)}>
          <span>Roam Rajasthan</span>
          <CamelLogo size={24} color="#163627" />
        </Link>

        {/* Desktop Nav links */}
        <ul className="nav-links-two">
          {/* Destinations Dropdown containing all 16 locations */}
          <li 
            className="nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={() => setDestDropdownOpen(true)}
            onMouseLeave={() => setDestDropdownOpen(false)}
          >
            <button 
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => setDestDropdownOpen(!destDropdownOpen)}
              aria-expanded={destDropdownOpen}
            >
              <span>Destinations</span>
              <ChevronDown size={14} className={`dropdown-arrow ${destDropdownOpen ? 'open' : ''}`} />
            </button>

            {destDropdownOpen && (
              <div className="destinations-dropdown-menu">
                <div className="dest-dropdown-header">
                  <span>Explore Rajasthan ({DESTINATIONS.length} Royal Destinations)</span>
                </div>
                <div className="dest-dropdown-grid">
                  {DESTINATIONS.map((d) => (
                    <Link
                      key={d.id}
                      to={`/destination/${d.id}`}
                      className="dest-dropdown-item"
                      onClick={() => setDestDropdownOpen(false)}
                    >
                      <span className="dest-dropdown-name">{d.name}</span>
                      <span className="dest-dropdown-sub">{d.subtitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => handleNavClick('plan-trip')}>
              Experiences
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('travel-blog')}>
              Travel Blog
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

        {/* Right controls: Language Selector + Plan CTA */}
        <div className="nav-right-two">
          {/* Multi-language Selector with country flags */}
          <LanguageSelector />

          {/* Quick Plan Button */}
          <button 
            className="btn-search-green desktop-search-btn"
            onClick={() => {
              if (onOpenPlanModal) onOpenPlanModal();
              else handleNavClick('popular-destinations');
            }}
            aria-label="Plan Rajasthan tour"
          >
            <span>PLAN</span>
            <ArrowRight size={14} />
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
                <span>Roam Rajasthan</span>
                <CamelLogo size={22} color="#163627" />
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
                <span>All {DESTINATIONS.length} Destinations</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('plan-trip')}>
                <span>Tailored Royal Experiences</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('travel-blog')}>
                <span>Heritage Guides & Blog</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('about-us')}>
                <span>About Roam Rajasthan</span>
                <ArrowRight size={16} />
              </button>
              <button className="mobile-drawer-link" onClick={() => handleNavClick('contact-section')}>
                <span>Contact Details</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Destination Shortcuts (All 16) */}
            <div className="mobile-dest-shortcuts">
              <span className="shortcuts-title">All Destinations ({DESTINATIONS.length}):</span>
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

            {/* Mobile Drawer WhatsApp & Email CTAs */}
            <div className="mobile-drawer-cta">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <button 
                  className="btn-price-whatsapp" 
                  onClick={() => handleWhatsAppDirect(CONTACTS.primary.cleanPhone)} 
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Coordinator (+91 9024772664)</span>
                </button>
                <button 
                  className="btn-email-action"
                  onClick={() => { setMobileMenuOpen(false); openEmailQuote('Rajasthan Heritage Circuit'); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: '#ffffff',
                    border: '1.5px solid #163627',
                    color: '#163627',
                    padding: '0.65rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    cursor: 'pointer'
                  }}
                >
                  <Mail size={16} />
                  <span>Email: {CONTACTS.email}</span>
                </button>
              </div>

              <div style={{ marginTop: '0.8rem', textAlign: 'center', fontSize: '0.8rem', color: '#58635d' }}>
                <div>24/7 Coordinator Hotline: {CONTACTS.primary.phone}</div>
                <div>Support Hotline: {CONTACTS.secondary.phone}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
