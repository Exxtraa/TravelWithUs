import React, { useState } from 'react';
import SecondaryNav from '../components/SecondaryNav';
import LuxuryHero2 from '../components/LuxuryHero2';
import PopularDestinations from '../components/PopularDestinations';
import PerksBar from '../components/PerksBar';
import PlanTripSection from '../components/PlanTripSection';
import TestimonialsRow from '../components/TestimonialsRow';
import TravelBlog from '../components/TravelBlog';
import NewsletterFooter from '../components/NewsletterFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CustomPlanModal from '../components/CustomPlanModal';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const handleFilterChange = (destId) => {
    setActiveFilter(destId);
  };

  return (
    <div className="home-page-container">
      {/* Main website experience */}
      <div id="secondary-section">
        <SecondaryNav 
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
        />

        <LuxuryHero2 
          onFilterChange={handleFilterChange}
        />

        {/* Popular Destinations matching Image 2 (Jaipur, Jaisalmer, Jodhpur, Udaipur, Bikaner, Ajmer) */}
        <PopularDestinations activeFilter={activeFilter} />

        {/* Value Proposition Perks Strip matching Image 2 */}
        <PerksBar />

        {/* Plan Your Perfect Trip Split Card matching Image 2 */}
        <PlanTripSection onStartPlanning={() => setIsPlanModalOpen(true)} />

        {/* Testimonials Pills Row matching Image 2 */}
        <TestimonialsRow />

        {/* Travel Blog Cards matching Image 2 */}
        <TravelBlog />

        {/* Newsletter & Rich Green Footer matching Image 2 */}
        <NewsletterFooter />
      </div>

      {/* Global Floating WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Interactive Trip Planner Modal */}
      <CustomPlanModal 
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        initialDestination={activeFilter !== 'all' ? activeFilter : 'jaipur'}
      />
    </div>
  );
}
