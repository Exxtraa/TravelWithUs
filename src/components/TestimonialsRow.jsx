import React from 'react';
import { Star, MapPin } from 'lucide-react';

export default function TestimonialsRow() {
  const rowOneReviews = [
    {
      name: "Charlotte & Oliver",
      country: "London, United Kingdom",
      score: "5.0",
      review: "Our 6-day royal circuit through Jaipur and Jaisalmer exceeded every expectation. Our private AC chauffeur was courteous, knowledgeable, and always punctual."
    },
    {
      name: "Pierre & Camille Dubois",
      country: "Paris, France",
      score: "5.0",
      review: "The candlelit dinner on Lake Pichola in Udaipur was the highlight of our entire India trip. Incredible palace stays without any middlemen hassle."
    },
    {
      name: "Liam & Sophie Anderson",
      country: "Sydney, Australia",
      score: "4.9",
      review: "Glamping under the star-lit sky in the Thar dunes was unforgettable. Authentic Kalbeliya folk music and delicious local Rajasthani cuisine."
    },
    {
      name: "Lucas & Hanna Müller",
      country: "Berlin, Germany",
      score: "5.0",
      review: "Exceptional tiger safari in Ranthambore! We spotted a royal tigress at dawn. Transparent WhatsApp planning and immediate responses."
    },
    {
      name: "Kenji & Aoi Takahashi",
      country: "Tokyo, Japan",
      score: "5.0",
      review: "The frescoed havelis in Bikaner and the Mehrangarh Fort in Jodhpur took our breath away. Truly royal treatment from start to end."
    }
  ];

  const rowTwoReviews = [
    {
      name: "Elena Rostova",
      country: "Saint Petersburg, Russia",
      score: "5.0",
      review: "The Great Wall of Kumbhalgarh and Dilwara marble temples were awe-inspiring. Flawless vehicle condition and 24/7 care by Roam Rajasthan."
    },
    {
      name: "Ananya & Rohan Sharma",
      country: "Mumbai, India",
      score: "5.0",
      review: "We booked the Keoladeo and Sariska wildlife circuit with our parents. The cycle rickshaw bird naturalist was truly phenomenal."
    },
    {
      name: "David & Jessica Miller",
      country: "New York, United States",
      score: "4.9",
      review: "Direct honest pricing without shady commission shops. The sunset over Nahargarh Fort in Jaipur is something we will cherish forever."
    },
    {
      name: "Matteo & Giulia Rossi",
      country: "Milan, Italy",
      score: "5.0",
      review: "Best travel coordinators in Rajasthan! Everything ran like clockwork from airport pickup to our heritage boutique check-ins."
    },
    {
      name: "Tariq & Fatima Al-Mansoor",
      country: "Dubai, United Arab Emirates",
      score: "5.0",
      review: "Unrivaled luxury hospitality. Our family was pampered with royal heritage hospitality and magnificent haveli stays in Udaipur."
    }
  ];

  // Duplicate for seamless loop
  const marqueeOne = [...rowOneReviews, ...rowOneReviews];
  const marqueeTwo = [...rowTwoReviews, ...rowTwoReviews];

  return (
    <section className="testimonials-marquee-section">
      <div className="section-header-centered" style={{ marginBottom: '1.8rem' }}>
        <h3 className="section-title">Loved by Travelers Worldwide</h3>
        <p className="section-subtitle">
          Real guest experiences from discerning travelers across the globe who explored Rajasthan with us.
        </p>
      </div>

      {/* Row 1: Smooth sliding from right to left */}
      <div className="marquee-container">
        <div className="marquee-track marquee-scroll-left">
          {marqueeOne.map((item, idx) => (
            <div key={`r1-${idx}`} className="testimonial-text-card">
              <div className="testi-card-top">
                <div className="testi-score-badge">
                  <Star size={13} fill="#b08110" color="#b08110" />
                  <span>{item.score}</span>
                </div>
                <div className="testi-country-tag">
                  <MapPin size={12} />
                  <span>{item.country}</span>
                </div>
              </div>
              <p className="testi-review-quote">"{item.review}"</p>
              <div className="testi-author-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Smooth sliding in reverse direction */}
      <div className="marquee-container" style={{ marginTop: '1rem' }}>
        <div className="marquee-track marquee-scroll-right">
          {marqueeTwo.map((item, idx) => (
            <div key={`r2-${idx}`} className="testimonial-text-card">
              <div className="testi-card-top">
                <div className="testi-score-badge">
                  <Star size={13} fill="#b08110" color="#b08110" />
                  <span>{item.score}</span>
                </div>
                <div className="testi-country-tag">
                  <MapPin size={12} />
                  <span>{item.country}</span>
                </div>
              </div>
              <p className="testi-review-quote">"{item.review}"</p>
              <div className="testi-author-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
