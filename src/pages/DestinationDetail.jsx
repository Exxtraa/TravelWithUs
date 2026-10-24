import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageCircle, Clock, Calendar, MapPin, 
  Star, Compass, Sparkles, Check, Info, ShieldCheck, 
  ChevronRight, Share2, Award, Mail
} from 'lucide-react';
import { DESTINATIONS, CONTACTS, openWhatsAppQuote, openEmailQuote } from '../data/destinations';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import NewsletterFooter from '../components/NewsletterFooter';

export default function DestinationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find destination
  const destination = DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];

  // Trip planner widget state
  const [selectedMonth, setSelectedMonth] = useState('Upcoming Month');
  const [travelers, setTravelers] = useState('2 Adults');
  const [hotelTier, setHotelTier] = useState('Heritage Haveli');
  const [vehicle, setVehicle] = useState('Private AC Sedan');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${destination.name} Tour Package — Roam Rajasthan`;
  }, [id, destination.name]);

  const handleWhatsAppClick = (recipient = 'aspak') => {
    openWhatsAppQuote(destination.name, {
      month: selectedMonth,
      travelers,
      hotelTier,
      vehicle
    }, recipient);
  };

  const handleEmailClick = () => {
    openEmailQuote(destination.name, {
      month: selectedMonth,
      travelers,
      hotelTier,
      vehicle
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.name} Package - Roam Rajasthan`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Other destinations to recommend
  const otherDestinations = DESTINATIONS.filter(d => d.id !== destination.id);

  return (
    <div className="detail-page-container">
      {/* Top Sticky Navigation */}
      <nav className="detail-top-nav">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Back to All Destinations</span>
        </button>

        <div className="detail-nav-actions">
          <button 
            onClick={handleShare}
            className="btn-share-tour"
            aria-label="Share this package"
          >
            <Share2 size={15} />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>

          <button 
            className="btn-price-whatsapp detail-nav-whatsapp"
            onClick={() => handleWhatsAppClick('primary')}
            title="Chat with Tour Coordinator on WhatsApp (+91 9024772664)"
          >
            <MessageCircle size={16} />
            <span>WhatsApp (+91 9024772664)</span>
          </button>

          <button 
            onClick={handleEmailClick}
            className="btn-share-tour"
            title={`Send Email to ${CONTACTS.email}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#ffffff', border: '1px solid #163627', color: '#163627', fontWeight: 700 }}
          >
            <Mail size={15} />
            <span>Email</span>
          </button>
        </div>
      </nav>

      {/* Hero Banner with Heritage Photo */}
      <section 
        className="detail-hero-banner"
        style={{ backgroundImage: `url('${destination.heroImage}')` }}
      >
        <div className="detail-hero-content">
          <div className="detail-badge-pill">
            <Sparkles size={14} />
            <span>{destination.badge}</span>
          </div>

          <h1 className="detail-title">{destination.name} Tour Package</h1>
          <p className="detail-tagline">{destination.subtitle} — {destination.tagline}</p>

          <div className="detail-facts-row">
            <div className="fact-item">
              <Clock size={15} color="#c69214" />
              <span><strong>Duration:</strong> {destination.duration}</span>
            </div>
            <div className="fact-item">
              <Calendar size={15} color="#c69214" />
              <span><strong>Best Season:</strong> {destination.bestSeason}</span>
            </div>
            <div className="fact-item">
              <MapPin size={15} color="#c69214" />
              <span><strong>Nearest Transit:</strong> {destination.nearestHub}</span>
            </div>
            <div className="fact-item">
              <Star size={15} color="#c69214" fill="#c69214" />
              <span><strong>Rating:</strong> {destination.rating} ({destination.reviewsCount}+ verified reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="detail-main-layout">
        {/* Left Column: Places to Visit, Itinerary, Inclusions */}
        <div className="detail-content-col">
          {/* 1. Overview */}
          <section>
            <h2 className="section-block-title">
              <Compass size={24} color="#163627" />
              <span>Royal History & City Overview</span>
            </h2>
            <div className="detail-overview-text">
              <p>{destination.overview}</p>
            </div>
          </section>

          {/* 2. Famous Places to Visit (Detailed Cards) */}
          <section>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-block-title">
                <MapPin size={24} color="#163627" />
                <span>Famous Tourist Places to Visit in {destination.name}</span>
              </h2>
              <p style={{ color: '#58635d', fontSize: '0.95rem' }}>
                Explore the top monuments, forts, sacred spots, and sunset viewpoints included in this package.
              </p>
            </div>

            <div className="famous-places-list">
              {destination.famousPlaces.map((place, idx) => (
                <div key={idx} className="place-card-detailed">
                  <div className="place-card-img-wrap">
                    <span className="place-card-category">{place.category}</span>
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="place-card-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = destination.heroImage;
                      }}
                    />
                  </div>

                  <div className="place-card-content">
                    <div>
                      <h3 className="place-name">{place.name}</h3>

                      <div className="place-quick-badges">
                        <div className="place-badge-item">
                          <Clock size={14} color="#c69214" />
                          <span>Timings: {place.timings}</span>
                        </div>
                        <div className="place-badge-item">
                          <Calendar size={14} color="#c69214" />
                          <span>Ideal Visit: {place.recommendedTime}</span>
                        </div>
                      </div>

                      <p className="place-description">{place.description}</p>

                      {place.keyHighlights && (
                        <div className="place-key-highlights">
                          <h5>What You Can't Miss</h5>
                          <ul>
                            {place.keyHighlights.map((hl, hIdx) => (
                              <li key={hIdx}>{hl}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {place.travelTip && (
                      <div className="place-tip-box">
                        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span><strong>Travel Tip:</strong> {place.travelTip}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Recommended Day-by-Day Itinerary */}
          <section>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-block-title">
                <Calendar size={24} color="#163627" />
                <span>Recommended Day-by-Day Itinerary</span>
              </h2>
              <p style={{ color: '#58635d', fontSize: '0.95rem' }}>
                Expertly paced schedule covering historic sightseeing, cultural photo walks, and authentic local cuisine.
              </p>
            </div>

            <div className="itinerary-timeline">
              {destination.itinerary.map((dayItem, dIdx) => (
                <div key={dIdx} className="itinerary-day-card">
                  <div className="itinerary-day-header">
                    <span className="day-badge">{dayItem.day}</span>
                    <h3 className="day-title">{dayItem.title}</h3>
                  </div>

                  <div className="day-slots-grid">
                    <div className="day-slot-item">
                      <div className="slot-time-label">
                        <Clock size={13} />
                        <span>Morning</span>
                      </div>
                      <p className="slot-desc">{dayItem.morning}</p>
                    </div>

                    <div className="day-slot-item">
                      <div className="slot-time-label">
                        <Clock size={13} />
                        <span>Afternoon</span>
                      </div>
                      <p className="slot-desc">{dayItem.afternoon}</p>
                    </div>

                    <div className="day-slot-item">
                      <div className="slot-time-label">
                        <Clock size={13} />
                        <span>Evening</span>
                      </div>
                      <p className="slot-desc">{dayItem.evening}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Package Inclusions & Perks */}
          <section>
            <h2 className="section-block-title">
              <ShieldCheck size={24} color="#163627" />
              <span>What's Included in This Package</span>
            </h2>

            <div className="inclusions-card">
              <div className="inclusions-grid">
                <div className="inclusion-item">
                  <Check size={20} color="#163627" className="inclusion-icon" />
                  <div>
                    <strong>Private Sanitized AC Vehicle</strong>
                    <span>Commercial tourist permit, experienced local chauffeur, fuel, toll taxes & parking included.</span>
                  </div>
                </div>

                <div className="inclusion-item">
                  <Check size={20} color="#163627" className="inclusion-icon" />
                  <div>
                    <strong>Heritage Stays with Breakfast</strong>
                    <span>Handpicked boutique havelis, lake view hotels, or luxury desert/jungle Swiss tents.</span>
                  </div>
                </div>

                <div className="inclusion-item">
                  <Check size={20} color="#163627" className="inclusion-icon" />
                  <div>
                    <strong>24/7 Dedicated Coordinators</strong>
                    <span>Direct WhatsApp and call support by the Roam Rajasthan Team for any mid-trip requests.</span>
                  </div>
                </div>

                <div className="inclusion-item">
                  <Check size={20} color="#163627" className="inclusion-icon" />
                  <div>
                    <strong>Custom Sightseeing Pace</strong>
                    <span>No rigid tour bus rush. Stop for wildlife photography, local tea stalls, and folk arts at your choice.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sticky Sidebar: WhatsApp & Email Price Widget */}
        <div className="detail-sticky-sidebar">
          <div className="booking-card-widget">
            <div className="widget-price-header">
              <div className="widget-price-title">Exclusive Package Rate</div>
              <div className="widget-price-badge">Get Best Price</div>
              <p className="widget-price-note">
                Direct booking with Roam Rajasthan Coordinators — No middleman commission!
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppClick('primary'); }} className="widget-form">
              <div className="widget-field">
                <label>Preferred Travel Month</label>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                  <option value="Immediate This Month">Immediate / This Month</option>
                  <option value="November">November (Peak Season)</option>
                  <option value="December">December (Festive / New Year)</option>
                  <option value="January">January (Winter Heritage)</option>
                  <option value="February">February (Desert Festival)</option>
                  <option value="March">March (Spring Festivals)</option>
                  <option value="Custom Dates">Custom Dates</option>
                </select>
              </div>

              <div className="widget-field">
                <label>Number of Travelers</label>
                <select value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                  <option value="1 Solo Traveler">1 Solo Traveler</option>
                  <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                  <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                  <option value="Family of 4">Family of 4</option>
                  <option value="Group 5-8 Pax">Group 5-8 Pax</option>
                  <option value="Large Group 9+">Large Group 9+ Pax</option>
                </select>
              </div>

              <div className="widget-field">
                <label>Hotel Category</label>
                <select value={hotelTier} onChange={(e) => setHotelTier(e.target.value)}>
                  <option value="Heritage Haveli Boutique">Heritage Haveli Boutique</option>
                  <option value="3-Star Deluxe Stays">3-Star Deluxe Stays</option>
                  <option value="4-Star Luxury Hotels">4-Star Luxury Hotels</option>
                  <option value="5-Star Palace Experience">5-Star Palace Experience</option>
                </select>
              </div>

              <div className="widget-field">
                <label>Vehicle Choice</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                  <option value="Private AC Sedan (Dzire / Etios)">Private AC Sedan (1-3 Pax)</option>
                  <option value="Toyota Innova / Crysta SUV">Toyota Innova SUV (4-6 Pax)</option>
                  <option value="Luxury Tempo Traveller">Luxury Tempo Traveller (7+ Pax)</option>
                </select>
              </div>

              {/* Price actions: Single WhatsApp + Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.6rem' }}>
                <button 
                  type="button" 
                  className="btn-widget-whatsapp"
                  onClick={() => handleWhatsAppClick('primary')}
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp (+91 9024772664)</span>
                </button>

                <button 
                  type="button"
                  onClick={handleEmailClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: '#f4ede1',
                    border: '1.5px solid #d4c7b2',
                    color: '#163627',
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  <Mail size={17} />
                  <span>Enquire via Email ({CONTACTS.email})</span>
                </button>
              </div>
            </form>

            <div className="widget-support-banner" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#163627' }}>
                <Award size={18} />
                <span>Roam Rajasthan Direct Support</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#58635d' }}>
                <div>📞 <strong>Coordinator Hotline:</strong> {CONTACTS.primary.phone}</div>
                <div>📞 <strong>Support Hotline:</strong> {CONTACTS.secondary.phone}</div>
                <div>✉️ <strong>Email:</strong> {CONTACTS.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Rajasthan Destinations Section */}
      <section className="explore-more-section">
        <h3 className="explore-more-title">
          Explore More Rajasthan Tour Packages ({otherDestinations.length} Available)
        </h3>

        <div className="explore-more-grid">
          {otherDestinations.map(other => (
            <Link 
              key={other.id} 
              to={`/destination/${other.id}`}
              className="explore-more-card"
            >
              <div className="explore-more-img-wrap">
                <img 
                  src={other.cardImage} 
                  alt={other.name} 
                  className="explore-more-img"
                  loading="lazy"
                />
              </div>
              <div className="explore-more-body">
                <h4 className="explore-more-name">{other.name}</h4>
                <p className="explore-more-sub">{other.subtitle}</p>
                <div className="explore-more-footer">
                  <span>{other.duration}</span>
                  <span className="explore-more-link-text">
                    View Package <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Newsletter & Footer */}
      <NewsletterFooter />

      {/* Global Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
