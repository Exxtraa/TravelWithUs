import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';

export default function PopularDestinations({ activeFilter = 'all' }) {
  const navigate = useNavigate();

  const filteredDestinations = activeFilter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.id === activeFilter);

  const handleCardClick = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section id="popular-destinations" className="destinations-section">
      <div className="section-header-centered">
        <h3 className="section-title">Popular Destinations</h3>
        <p className="section-subtitle">
          Handcrafted royal itineraries with private AC chauffeur, verified guides, 
          and boutique heritage havelis by the Roam Rajasthan Team.
        </p>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((dest) => {
          return (
            <div 
              key={dest.id} 
              className="destination-card clickable-destination-card"
              onClick={() => handleCardClick(dest.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(dest.id);
                }
              }}
              aria-label={`View tour package for ${dest.name}`}
            >
              {/* Image without number badge, without like button, without location tag */}
              <div className="card-image-wrap">
                <img 
                  src={dest.cardImage} 
                  alt={`${dest.name} Rajasthan`}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaipur_03-2016_04_Amber_Fort.jpg/1280px-Jaipur_03-2016_04_Amber_Fort.jpg';
                  }}
                />
                <div className="card-hover-overlay">
                  <span className="card-view-prompt">
                    <span>Explore Itinerary & Sights</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              {/* Card Body without duration tag and without bottom buttons */}
              <div className="card-body">
                <div className="card-meta-row">
                  <div className="card-rating">
                    <Star size={15} fill="#b08110" color="#b08110" />
                    <span>{dest.rating} ({dest.reviewsCount}+ reviews)</span>
                  </div>
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

                {/* Seamless single click indicator bar replacing the cluttered buttons */}
                <div className="card-clickable-footer">
                  <span className="card-view-link">
                    <span>View Places & Itinerary</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
