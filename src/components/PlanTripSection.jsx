import React from 'react';

export default function PlanTripSection({ onStartPlanning }) {
  return (
    <section id="plan-trip" className="plan-trip-section">
      <div className="plan-trip-card">
        {/* Left image column matching Image 2 */}
        <div className="plan-trip-image-col">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Udaipur_Lake_India.JPG/1280px-Udaipur_Lake_India.JPG"
            alt="Plan Your Perfect Trip Rajasthan"
            className="plan-trip-image"
            loading="lazy"
          />
        </div>

        {/* Right content column matching Image 2 */}
        <div className="plan-trip-content-col">
          <h3 className="plan-trip-title">Plan Your Perfect Trip</h3>

          <div className="plan-feature-list">
            <div className="plan-feature-item">
              <h4>Tailored Itineraries</h4>
              <p>
                Flexible day plans custom-matched to your pace, travel dates,
                honeymoon romance, family vacation, or cultural photography.
              </p>
            </div>

            <div className="plan-feature-item">
              <h4>Exclusive Access</h4>
              <p>
                Private desert dune dinners under the stars, skip-the-line fort entries,
                and royal Mewari folk music evenings away from crowded tourist spots.
              </p>
            </div>

            <div className="plan-feature-item">
              <h4>Expert Guidance</h4>
              <p>
                Authentic local Rajasthani hospitality managed directly by the Roam Rajasthan Team.
                Transparent communication, honest pricing, and 24/7 on-call coordination.
              </p>
            </div>
          </div>

          <button
            className="btn-start-planning"
            onClick={onStartPlanning}
          >
            Start Planning
          </button>
        </div>
      </div>
    </section>
  );
}
