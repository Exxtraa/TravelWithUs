import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';
import { DESTINATIONS, openWhatsAppQuote } from '../data/destinations';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const instaThumbs = [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Udaipur_Lake_Palace.jpg/1280px-Udaipur_Lake_Palace.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Thar_desert_Rajasthan_India.jpg/1280px-Thar_desert_Rajasthan_India.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg/1280px-The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Evening_lights_by_the_Pushkar_Lake%2C_Pushkar.jpg/1280px-Evening_lights_by_the_Pushkar_Lake%2C_Pushkar.jpg"
  ];

  return (
    <>
      {/* Newsletter Subscription matching Image 2 */}
      <section className="newsletter-section">
        <h3 className="newsletter-title">Newsletter Subscription</h3>
        <p className="newsletter-sub">Join our wanderlust community for secret desert trails & festival alerts</p>

        {subscribed ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#163627', background: '#e0f3e6', padding: '0.8rem 1.6rem', borderRadius: '9999px', fontWeight: 600 }}>
            <CheckCircle2 size={20} color="#1b8543" />
            <span>Welcome to the TravelWith Us family! Secret guide sent to your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-newsletter-submit">
              Start to Hike
            </button>
          </form>
        )}
      </section>

      {/* Rich Footer matching Image 2 */}
      <footer id="contact-section" className="rich-footer">
        <div className="footer-top-grid">
          {/* Navigation Column */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              {DESTINATIONS.map(d => (
                <li key={d.id}>
                  <Link to={`/destination/${d.id}`}>{d.name} Package</Link>
                </li>
              ))}
              <li><a href="#plan-trip">Customized Rajasthan Tour</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="footer-col-title">Social Media</h4>
            <div className="footer-social-icons">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919024772664"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="WhatsAppUs (+91 9024772664)"
              >
                <MessageCircle size={18} />
              </a>

              {/* Instagram SVG */}
              <a href="#instagram" className="footer-social-btn" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook SVG */}
              <a href="#facebook" className="footer-social-btn" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter / X SVG */}
              <a href="#twitter" className="footer-social-btn" title="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* YouTube SVG */}
              <a href="#youtube" className="footer-social-btn" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>
            </div>
            <p style={{ marginTop: '1.2rem', fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)' }}>
              Follow our daily journey across royal Rajasthan forts, desert sunsets, and secret heritage stays.
            </p>
          </div>

          {/* Company Info Column */}
          <div className="footer-company-info" id="about-us">
            <h4 className="footer-col-title">Company Info</h4>
            <p>
              <strong>TravelWith Us</strong> is dedicated to delivering bespoke, authentic
              travel experiences across Rajasthan without broker commissions or hidden fees.
            </p>
            <p>
              Managed directly by <strong>Aspak</strong>. Every trip is customized to your travel pace,
              budget, and preferred dates with 24/7 on-call coordinator support.
            </p>
            <div className="footer-aspak-badge">
              <Phone size={15} />
              <a href="https://wa.me/919024772664" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                WhatsApp / Call: +91 9024772664
              </a>
            </div>
          </div>

          {/* Instagram 6-Photo Grid Column matching Image 2 */}
          <div>
            <h4 className="footer-col-title">Photo Gallery</h4>
            <div className="footer-insta-grid">
              {instaThumbs.map((thumb, idx) => (
                <div key={idx} className="insta-thumb-wrap">
                  <img
                    src={thumb}
                    alt={`Rajasthan Moment ${idx + 1}`}
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
          <p>© {new Date().getFullYear()} TravelWith Us. All rights reserved. Created with royal care byUs.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
