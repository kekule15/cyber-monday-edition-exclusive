'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Clock, CheckCircle2, X } from 'lucide-react';
import HeroVisual from './HeroVisual';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [showEventDrawer, setShowEventDrawer] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [activeActionLabel, setActiveActionLabel] = useState<string>('');

  // 24H Live Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePrimaryClick = () => {
    setActiveActionLabel('Sélection d’offres activée');
    setShowEventDrawer(true);
    if (onCtaClick) onCtaClick();
  };

  const handleSecondaryClick = () => {
    setActiveActionLabel('Mode exploration 24H');
    setShowEventDrawer(true);
  };

  const formatDigits = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex items-center overflow-x-clip">
      {/* Background Architectural Grid & Gradients */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-60" aria-hidden="true" />
      
      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[350px] bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
        {/* Asymmetric Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Call-To-Actions (55% desktop presence) */}
          <div className="lg:col-span-7 xl:col-span-7 z-20 flex flex-col items-start pr-0 sm:pr-4 md:pr-6 lg:pr-10 xl:pr-14 max-w-full">
            
            {/* Small Eyebrow: LE GRAND RENDEZ-VOUS SHOPPING */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 bg-[#FF6A00] rounded-none rotate-45" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                LE GRAND RENDEZ-VOUS SHOPPING
              </p>
            </motion.div>

            {/* Main Headline: UNE JOURNÉE. DES OFFRES EXCEPTIONNELLES. */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Syne'] font-extrabold text-[1.65rem] min-[360px]:text-[1.85rem] min-[400px]:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.08] min-[360px]:leading-[1.04] sm:leading-[0.98] tracking-tight uppercase text-[#F5F5F5] mb-5 sm:mb-8 pr-2 sm:pr-4 max-w-xl lg:max-w-2xl text-balance"
            >
              <span className="block">UNE JOURNÉE.</span>
              <span className="block text-gradient-orange">DES OFFRES</span>
              <span className="block">EXCEPTIONNELLES.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#929292] font-normal leading-relaxed max-w-xl mb-9 sm:mb-11 pr-2 sm:pr-4"
            >
              Le Cyber Monday est arrivé. Découvrez une sélection d&apos;offres pensées pour aujourd&apos;hui, et seulement aujourd&apos;hui.
            </motion.p>

            {/* CTAs: Primary & Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA: SHOPPER LES OFFRES */}
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="cursor-pointer group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(255,106,0,0.5)] hover:shadow-[0_14px_38px_-8px_rgba(255,106,0,0.7)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
              >
                <span>SHOPPER LES OFFRES</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              {/* Secondary action: EXPLORER */}
              <button
                type="button"
                onClick={handleSecondaryClick}
                className="cursor-pointer group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:py-4.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#151518] hover:bg-[#1D1D22] border border-[#2B2B33] hover:border-[#FFB000]/60 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]"
              >
                <span>EXPLORER</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000] opacity-80 group-hover:scale-125 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Live Event Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex items-center gap-3 text-xs tracking-wider text-[#929292]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]" />
              </span>
              <span className="uppercase font-medium text-[#F5F5F5]">Événement en direct</span>
              <span className="text-[#929292]/50">·</span>
              <span className="font-mono tabular-nums text-[#FFB000]">
                {formatDigits(countdown.hours)}h {formatDigits(countdown.minutes)}m {formatDigits(countdown.seconds)}s
              </span>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Composition (45% asymmetric presence, extending slightly) */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-4 lg:mt-0">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* Interactive 24H Event Notification Drawer (Accessible on CTA click, strictly in French) */}
      <AnimatePresence>
        {showEventDrawer && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:right-8 sm:max-w-md z-50 bg-[#151518]/95 backdrop-blur-xl border border-[#2D2D36] p-5 shadow-2xl shadow-black/80"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FF6A00]/15 text-[#FF6A00] rounded-none">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#FF6A00]">
                    ACCÈS PRIVILÉGIÉ CONFIRMÉ
                  </h2>
                  <p className="text-sm font-semibold text-[#F5F5F5] mt-0.5">
                    {activeActionLabel || 'Offres Cyber Monday ouvertes'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEventDrawer(false)}
                className="text-[#929292] hover:text-[#F5F5F5] p-1 transition-colors"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-[#22222A] flex items-center justify-between text-xs text-[#929292]">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FFB000]" />
                <span>Fin des offres dans :</span>
              </div>
              <span className="font-mono tabular-nums font-bold text-[#F5F5F5]">
                {formatDigits(countdown.hours)}:{formatDigits(countdown.minutes)}:{formatDigits(countdown.seconds)}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-[#929292]">
              <CheckCircle2 size={13} className="text-[#FF6A00]" />
              <span>Garantie prix le plus bas pour 24 heures seulement.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
