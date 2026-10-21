import React, { useState } from 'react';
import { Heart, MapPin, Star, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, openWhatsAppQuote, openEmailQuote, CONTACTS } from '../data/destinations';

export default function PopularDestinations({ activeFilter = 'all' }) {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredDestinations = activeFilter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.id === activeFilter);

  return (
    <section id="popular-destinations" className="destinations-section">
      <div className="section-header-centered">
        <h3 className="section-title">Popular Destinations</h3>
        <p className="section-subtitle">
          Handcrafted royal itineraries with private AC chauffeur, verified guides, 
          and boutique heritage havelis. Direct pricing on WhatsApp & Email with Aspak Ali & Shazad Ansari.
        </p>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((dest, index) => {
          const isFavorited = !!wishlist[dest.id];

          return (
            <div key={dest.id} className="destination-card">
              {/* Image & Badges matching Image 2 */}
              <div className="card-image-wrap">
                {/* Number Badge matching Image 2 */}
                <span className="card-number-badge">
                  {dest.number || (index + 1 < 10 ? `0${index + 1}` : index + 1)}
                </span>

                {/* Wishlist Heart Button */}
                <button 
                  className={`card-wishlist-btn ${isFavorited ? 'active' : ''}`}
                  onClick={(e) => toggleWishlist(dest.id, e)}
                  aria-label="Add to favorites"
                >
                  <Heart 
                    size={18} 
                    fill={isFavorited ? '#e53e3e' : 'none'} 
                    color={isFavorited ? '#e53e3e' : 'currentColor'}
                  />
                </button>

                {/* Location Tag matching Image 2 */}
                <span className="card-location-tag">
                  <MapPin size={13} />
                  <span>{dest.locationTag}</span>
                </span>

                <img 
                  src={dest.cardImage} 
                  alt={`${dest.name} Rajasthan`}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaipur_03-2016_04_Amber_Fort.jpg/1280px-Jaipur_03-2016_04_Amber_Fort.jpg';
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="card-meta-row">
                  <div className="card-rating">
                    <Star size={15} fill="#b08110" color="#b08110" />
                    <span>{dest.rating} ({dest.reviewsCount}+ reviews)</span>
                  </div>
                  <span className="card-duration">{dest.duration}</span>
                </div>

                <h4 className="card-title">{dest.name}</h4>
                <p className="card-subtitle">{dest.subtitle}</p>

                {/* Key attraction highlights pills */}
                <ul className="card-highlights">
                  {dest.famousPlaces.slice(0, 3).map((place, i) => (
                    <li key={i}>{place.name.split('(')[0].trim()}</li>
                  ))}
                  {dest.famousPlaces.length > 3 && (
                    <li>+{dest.famousPlaces.length - 3} more spots</li>
                  )}
                </ul>

                {/* Action Buttons */}
                <div className="card-actions">
                  {/* WhatsApp Action */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                    <button 
                      className="btn-price-whatsapp"
                      onClick={() => openWhatsAppQuote(dest.name, {}, 'aspak')}
                      title={`Enquire on WhatsApp with Aspak Ali (${CONTACTS.aspak.phone})`}
                      style={{ fontSize: '0.84rem', padding: '0.65rem 0.5rem' }}
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp Aspak</span>
                    </button>

                    <button 
                      className="btn-price-whatsapp"
                      onClick={() => openWhatsAppQuote(dest.name, {}, 'shazad')}
                      title={`Enquire on WhatsApp with Shazad Ansari (${CONTACTS.shazad.phone})`}
                      style={{ fontSize: '0.84rem', padding: '0.65rem 0.5rem', background: '#128c7e' }}
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp Shazad</span>
                    </button>
                  </div>

                  {/* Email & Detail Links */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.4rem' }}>
                    <button 
                      onClick={() => openEmailQuote(dest.name)}
                      title={`Send email enquiry to ${CONTACTS.email}`}
                      style={{
                        background: '#ffffff',
                        border: '1px solid var(--color-sand-border)',
                        color: 'var(--color-forest)',
                        borderRadius: 'var(--radius-full)',
                        padding: '0.6rem 0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#f4ede1'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; }}
                    >
                      <Mail size={15} />
                      <span>Email</span>
                    </button>

                    {/* Detail Page Link */}
                    <Link 
                      to={`/destination/${dest.id}`} 
                      className="btn-view-details"
                      style={{ flexGrow: 1 }}
                    >
                      <span>Places & Itinerary</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
