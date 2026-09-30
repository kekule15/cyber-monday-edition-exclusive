'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick?: () => void;
}

export default function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const target = document.getElementById('offres');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-28 sm:py-36 lg:py-48 bg-[#0B0B0D] overflow-hidden text-center select-none">
      {/* 1. Large Electric Orange Radial Gradient Atmosphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] lg:w-[850px] h-[480px] sm:h-[680px] lg:h-[850px] bg-radial from-[#FF6A00]/22 via-[#FFB000]/8 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" aria-hidden="true" />

      {/* 2. Abstract Geometric Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Floating amber ring accent */}
        <div className="absolute top-12 left-[12%] w-32 h-32 rounded-full border border-[#FFB000]/15 opacity-60" />
        {/* Floating subtle orange square */}
        <div className="absolute bottom-16 right-[14%] w-24 h-24 rotate-45 border border-[#FF6A00]/20 opacity-50" />
      </div>

      {/* 3. Huge Decorative "24H" Background Element */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span
          className="block font-['Syne'] font-extrabold text-[12rem] sm:text-[18rem] md:text-[24rem] lg:text-[28rem] tracking-tighter leading-none text-white/[0.025]"
          style={{
            textShadow: '0 0 80px rgba(255, 106, 0, 0.08)',
          }}
        >
          24H
        </span>
      </div>

      {/* Content Container (Elevated Above Background) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col items-center">
        
        {/* Eyebrow: CYBER MONDAY */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 mb-5 sm:mb-6"
        >
          <span className="w-2 h-2 bg-[#FF6A00] rotate-45" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6A00]">
            CYBER MONDAY
          </p>
          <span className="w-2 h-2 bg-[#FF6A00] rotate-45" aria-hidden="true" />
        </motion.div>

        {/* Main Heading: Après aujourd'hui, il sera trop tard. */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Syne'] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-[#F5F5F5] mb-6 sm:mb-8 text-balance leading-[1.02]"
        >
          <span>Après aujourd&apos;hui,</span>
          <span className="block text-gradient-orange mt-1">il sera trop tard.</span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#929292] font-normal leading-relaxed max-w-xl mb-10 sm:mb-12"
        >
          Profitez des offres Cyber Monday avant qu&apos;elles ne disparaissent.
        </motion.p>

        {/* Primary CTA Button: Voir toutes les offres → */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={handleClick}
            className="cursor-pointer group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-all duration-200 active:scale-[0.98] shadow-[0_14px_40px_-8px_rgba(255,106,0,0.65)] hover:shadow-[0_18px_50px_-6px_rgba(255,106,0,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
          >
            <span>Voir toutes les offres</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
