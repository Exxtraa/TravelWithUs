import React, { useState } from 'react';
import HeaderHero1 from '../components/HeaderHero1';
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

  const scrollToSecondary = () => {
    const el = document.getElementById('secondary-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (destId) => {
    setActiveFilter(destId);
  };

  return (
    <div className="home-page-container">
      {/* 1. Landing Hero Screen matching Image 1 layout with Indian Heritage backdrop */}
      <HeaderHero1 
        onExploreClick={scrollToSecondary}
        onSearchChange={handleFilterChange}
      />

      {/* 2. Secondary Section matching Image 2 layout */}
      <div id="secondary-section">
        {/* Sticky Secondary Navigation matching Image 2 */}
        <SecondaryNav 
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
          onSearchClick={scrollToSecondary}
        />

        {/* Luxury Hero Banner & Floating Search Bar matching Image 2 */}
        <LuxuryHero2 
          onFilterChange={handleFilterChange}
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
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
