'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DealsSection from '@/components/DealsSection';
import UniverseSection from '@/components/UniverseSection';
import DailyDealSection from '@/components/DailyDealSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const dealsRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<HTMLDivElement>(null);
  const dailyDealRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  const handleCtaTrigger = () => {
    // Smooth scroll down to the Deals section
    const target = document.getElementById('offres') || dealsRef.current;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (section: string) => {
    if (section === 'Offres') {
      const target = document.getElementById('offres') || dealsRef.current;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (section === 'Collections' || section === 'À propos') {
      const target = document.getElementById('collections') || universeRef.current;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#F5F5F5] overflow-x-hidden selection:bg-[#FF6A00] selection:text-black">
      {/* Subtle Atmospheric Background Gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Top-right subtle electric orange ambient illumination */}
        <div className="absolute -top-32 right-0 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] bg-gradient-to-b from-[#FF6A00]/12 via-[#FFB000]/5 to-transparent rounded-full blur-[140px]" />
        
        {/* Bottom-left quiet obsidian tone */}
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#151518]/60 rounded-full blur-[120px]" />
        
        {/* Subtle hairline edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,11,13,0.8)_100%)]" />
      </div>

      {/* 1. Minimal Sticky Navigation */}
      <Navbar onCtaClick={handleCtaTrigger} onNavigate={handleNavigate} />

      {/* 2. Primary Hero Section */}
      <main ref={heroRef} className="relative z-10">
        <HeroSection onCtaClick={handleCtaTrigger} />
        
        {/* 3. Les Offres du Moment Section */}
        <div ref={dealsRef}>
          <DealsSection />
        </div>

        {/* 4. Les Univers à Découvrir Section */}
        <div ref={universeRef}>
          <UniverseSection />
        </div>

        {/* 5. L'Offre du Jour Section */}
        <div ref={dailyDealRef}>
          <DailyDealSection />
        </div>

        {/* 6. Dernière Chance (Final CTA Section) */}
        <div ref={finalCtaRef}>
          <FinalCtaSection onCtaClick={handleCtaTrigger} />
        </div>
      </main>

      {/* 7. Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
