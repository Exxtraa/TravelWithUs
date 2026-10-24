import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, CONTACTS, openEmailQuote } from '../data/destinations';

export default function NewsletterFooter() {
  const instaThumbs = [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Udaipur_Lake_Palace.jpg/1280px-Udaipur_Lake_Palace.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Ranthambore_National_Park.JPG/1280px-Ranthambore_National_Park.JPG",
    "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1280&q=80",
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1280&q=80"
  ];

  return (
    <footer id="contact-section" className="rich-footer">
      <div className="footer-top-grid">
        {/* Navigation Column */}
        <div>
          <h4 className="footer-col-title">Destinations & Packages</h4>
          <ul className="footer-links-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
            <li><Link to="/">Home Overview</Link></li>
            {DESTINATIONS.map(d => (
              <li key={d.id}>
                <Link to={`/destination/${d.id}`}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect on WhatsApp Column */}
        <div>
          <h4 className="footer-col-title">Connect on WhatsApp</h4>
          <div className="footer-social-icons">
            {/* Primary Coordinator WhatsApp */}
            <a 
              href={`https://wa.me/${CONTACTS.primary.cleanPhone}`} 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-btn"
              title={`WhatsApp Tour Coordinator (${CONTACTS.primary.phone})`}
              aria-label="WhatsApp Hotline 1"
            >
              <MessageCircle size={18} />
            </a>

            {/* Support WhatsApp */}
            <a 
              href={`https://wa.me/${CONTACTS.secondary.cleanPhone}`} 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-btn"
              style={{ background: '#128c7e' }}
              title={`WhatsApp Support Hotline (${CONTACTS.secondary.phone})`}
              aria-label="WhatsApp Hotline 2"
            >
              <MessageCircle size={18} />
            </a>

            {/* Email Button */}
            <button 
              onClick={() => openEmailQuote('Rajasthan Heritage Package')}
              className="footer-social-btn"
              title={`Email: ${CONTACTS.email}`}
              aria-label="Email Enquiry"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <Mail size={18} />
            </button>

            {/* Instagram SVG */}
            <a href="#instagram" className="footer-social-btn" title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a href="#facebook" className="footer-social-btn" title="Facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
          <p style={{ marginTop: '1.2rem', fontSize: '0.86rem', color: 'rgba(255,255,255,0.75)' }}>
            Get direct honest rates with zero broker margins across all {DESTINATIONS.length} royal destinations.
          </p>
        </div>

        {/* Company Info Column - Team based with both numbers without personal names */}
        <div className="footer-company-info" id="about-us">
          <h4 className="footer-col-title">Company Info</h4>
          <p>
            <strong>Roam Rajasthan</strong> is dedicated to delivering bespoke, authentic 
            travel experiences across Rajasthan without broker commissions or hidden fees.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Managed by the <strong>Roam Rajasthan Team</strong>. Every trip is customized to your travel pace, budget, and preferred dates with 24/7 coordinator support.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div className="footer-aspak-badge">
              <Phone size={14} />
              <a href={`https://wa.me/${CONTACTS.primary.cleanPhone}`} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                WhatsApp 1 : {CONTACTS.primary.phone}
              </a>
            </div>

            <div className="footer-aspak-badge">
              <Phone size={14} />
              <a href={`https://wa.me/${CONTACTS.secondary.cleanPhone}`} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                WhatsApp 2 : {CONTACTS.secondary.phone}
              </a>
            </div>

            {/* Direct Gmail click */}
            <div 
              className="footer-aspak-badge"
              onClick={() => openEmailQuote('Rajasthan Heritage Package')}
              style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.18)' }}
              title="Click to open email with prefilled enquiry"
            >
              <Mail size={14} />
              <span>Email: {CONTACTS.email}</span>
            </div>
          </div>
        </div>

        {/* Instagram 6-Photo Grid Column */}
        <div>
          <h4 className="footer-col-title">Photo Gallery</h4>
          <div className="footer-insta-grid">
            {instaThumbs.map((thumb, idx) => (
              <div key={idx} className="insta-thumb-wrap">
                <img 
                  src={thumb} 
                  alt={`Rajasthan Highlight ${idx + 1}`} 
                  className="insta-thumb"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p>© 2026 Roam Rajasthan. All rights reserved. Crafted with royal care by the Roam Rajasthan Team.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <button onClick={() => openEmailQuote('General Tour')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
            Email Support
          </button>
        </div>
      </div>
    </footer>
  );
}
