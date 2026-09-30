'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, ShieldCheck, Zap } from 'lucide-react';

interface DealItem {
  id: string;
  category: string;
  product: string;
  price: string;
  previousPrice: string;
  discount: string;
  description: string;
  highlights: string[];
}

const DEALS_DATA: Record<string, DealItem> = {
  laptop: {
    id: 'laptop',
    category: 'TECH',
    product: 'Ordinateur portable nouvelle génération',
    price: '899 €',
    previousPrice: '1 299 €',
    discount: '-31 %',
    description: 'Châssis ultra-fin en titane obsidian, processeur IA haute performance et écran OLED 120 Hz bord à bord.',
    highlights: ['Écran 14.5" OLED 3K', '32 Go RAM · SSD 1 To', 'Autonomie record 22h'],
  },
  headphones: {
    id: 'headphones',
    category: 'AUDIO',
    product: 'Casque sans fil',
    price: '149 €',
    previousPrice: '219 €',
    discount: '-32 %',
    description: 'Réduction active du bruit adaptative, transducteurs en béryllium et acoustique spatiale immersive.',
    highlights: ['Isolation phonique 45 dB', 'Bluetooth 5.4 Hi-Res', 'Charge ultra-rapide'],
  },
  watch: {
    id: 'watch',
    category: 'STYLE',
    product: 'Montre connectée',
    price: '129 €',
    previousPrice: '189 €',
    discount: '-32 %',
    description: 'Boîtier en céramique mate, suivi biométrique en continu et verre saphir ultra-résistant.',
    highlights: ['Capteur cardiaque & SpO2', 'Étanchéité 50 mètres', 'Écran Always-On AMOLED'],
  },
};

export default function DealsSection() {
  const [selectedDeal, setSelectedDeal] = useState<DealItem | null>(null);
  const [savedNotification, setSavedNotification] = useState<string | null>(null);

  const handleOpenDeal = (dealKey: string) => {
    setSelectedDeal(DEALS_DATA[dealKey]);
  };

  const handleClaimOffer = (productName: string) => {
    setSelectedDeal(null);
    setSavedNotification(`Offre réservée pour : ${productName}`);
    setTimeout(() => setSavedNotification(null), 4000);
  };

  return (
    <section id="offres" className="relative py-24 sm:py-28 lg:py-36 bg-[#0B0B0D] overflow-hidden">
      {/* Background Lighting Nuances */}
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-[#FF6A00]/7 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[380px] h-[380px] bg-[#FFB000]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header: Minimal & Editorial */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#FF6A00] rotate-45" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
              À NE PAS MANQUER
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F5F5F5] tracking-tight mb-4"
          >
            Les offres du moment.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#929292] font-normal leading-relaxed"
          >
            Des prix exceptionnels, disponibles pour une durée limitée.
          </motion.p>
        </div>

        {/* Asymmetric Editorial Deals Layout:
            - Desktop: 1 Large Featured (~2/3, col-span-7 or 8) + 2 Stacked Smaller (~1/3, col-span-5 or 4)
            - Tablet: Featured on top, 2 smaller below in 2 columns
            - Mobile: Stacked vertically
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ━━━━━━━━━━━━━━━━━━━━ LARGE FEATURED DEAL (2/3 width) ━━━━━━━━━━━━━━━━━━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-8 group relative rounded-[28px] bg-[#151518] border border-[#23232A] hover:border-[#FF6A00]/50 transition-all duration-300 p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
          >
            {/* Subtle Electric Orange Ambient Backlight Glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#FF6A00]/12 group-hover:bg-[#FF6A00]/22 rounded-full blur-[90px] transition-all duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Top Row: Category + Discount Tag */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#929292]">
                TECH
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-bold tracking-wider text-[#FF6A00] bg-[#FF6A00]/12 border border-[#FF6A00]/30 rounded-full">
                -31 %
              </span>
            </div>

            {/* Dominant Product Visual: Laptop Nouvelle Génération */}
            <div className="relative z-10 my-8 sm:my-10 w-full aspect-[16/10] max-h-[340px] flex items-center justify-center">
              <motion.div
                className="w-full h-full max-w-[540px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              >
                <svg
                  viewBox="0 0 600 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full filter drop-shadow(0 28px 45px rgba(0,0,0,0.9))"
                >
                  <defs>
                    <linearGradient id="laptopLid" x1="100" y1="40" x2="500" y2="240" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2A2A33" />
                      <stop offset="50%" stopColor="#18181E" />
                      <stop offset="100%" stopColor="#0E0E12" />
                    </linearGradient>
                    <linearGradient id="screenGlass" x1="120" y1="50" x2="480" y2="230" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0B0B0E" />
                      <stop offset="60%" stopColor="#121217" />
                      <stop offset="100%" stopColor="#08080A" />
                    </linearGradient>
                    <linearGradient id="keyboardBase" x1="50" y1="240" x2="550" y2="340" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#25252D" />
                      <stop offset="40%" stopColor="#1B1B22" />
                      <stop offset="100%" stopColor="#111116" />
                    </linearGradient>
                    <linearGradient id="orangeScreenGlow" x1="150" y1="60" x2="450" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="#FFB000" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
                    </linearGradient>
                    <filter id="laptopSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Cast Shadow under the laptop base */}
                  <ellipse cx="300" cy="340" rx="240" ry="24" fill="#000000" opacity="0.8" filter="blur(16px)" />

                  {/* Laptop Display (Lid) with dynamic perspective angle */}
                  <path
                    d="M 120 50 L 480 50 L 460 250 L 140 250 Z"
                    fill="url(#laptopLid)"
                    stroke="#32323D"
                    strokeWidth="3"
                  />

                  {/* Display Screen Glass */}
                  <path
                    d="M 132 60 L 468 60 L 450 240 L 150 240 Z"
                    fill="url(#screenGlass)"
                    stroke="#181820"
                    strokeWidth="1.5"
                  />

                  {/* Screen Content: Editorial Dark UI Waveform with Electric Orange */}
                  <path
                    d="M 132 60 L 468 60 L 450 240 L 150 240 Z"
                    fill="url(#orangeScreenGlow)"
                  />

                  {/* Sleek Screen Header Accent Line */}
                  <line x1="160" y1="75" x2="440" y2="75" stroke="#FF6A00" strokeWidth="1.5" strokeOpacity="0.6" />

                  {/* Minimal Tech Soundwave / Graphic on Screen */}
                  <path
                    d="M 180 160 Q 220 130 260 160 T 340 160 T 420 160"
                    fill="none"
                    stroke="#FF6A00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#laptopSoftGlow)"
                  />
                  <path
                    d="M 210 180 Q 250 160 290 180 T 370 180 T 400 180"
                    fill="none"
                    stroke="#FFB000"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                  />

                  {/* Camera / Sensor Notch */}
                  <circle cx="300" cy="55" r="2.5" fill="#3D3D48" />

                  {/* Hinge Connection */}
                  <rect x="230" y="247" width="140" height="7" rx="3" fill="#0A0A0C" stroke="#25252D" strokeWidth="1" />

                  {/* Keyboard Deck Base (Lower Chassis) */}
                  <polygon
                    points="60,325 140,252 460,252 540,325"
                    fill="url(#keyboardBase)"
                    stroke="#2D2D38"
                    strokeWidth="2.5"
                  />

                  {/* Base Front Lip & Bevel */}
                  <path
                    d="M 60 325 L 70 332 L 530 332 L 540 325 Z"
                    fill="#15151A"
                    stroke="#222228"
                    strokeWidth="1"
                  />

                  {/* Front Edge Orange Glint */}
                  <line x1="180" y1="332" x2="420" y2="332" stroke="#FF6A00" strokeWidth="2" strokeOpacity="0.75" />

                  {/* Keyboard Well */}
                  <polygon
                    points="120,295 160,260 440,260 480,295"
                    fill="#0E0E12"
                    stroke="#1C1C24"
                    strokeWidth="1.5"
                  />

                  {/* Minimal Key Rows */}
                  {[267, 275, 283, 291].map((y, i) => (
                    <line
                      key={i}
                      x1={162 - i * 10}
                      y1={y}
                      x2={438 + i * 10}
                      y2={y}
                      stroke="#22222A"
                      strokeWidth="3.5"
                      strokeDasharray="18 4"
                    />
                  ))}

                  {/* Precision Trackpad with Orange Rim Lighting */}
                  <polygon
                    points="245,325 255,302 345,302 355,325"
                    fill="#131317"
                    stroke="#282832"
                    strokeWidth="1"
                  />
                  <line x1="256" y1="303" x2="344" y2="303" stroke="#FF6A00" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </motion.div>
            </div>

            {/* Bottom Content: Product Details, Pricing & CTA */}
            <div className="relative z-10 pt-4 border-t border-[#1F1F26] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h3 className="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight leading-snug">
                  Ordinateur portable nouvelle génération
                </h3>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] tracking-tight">
                    899 €
                  </span>
                  <span className="text-[#929292] line-through text-base sm:text-lg font-medium">
                    1 299 €
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleOpenDeal('laptop')}
                className="cursor-pointer group/btn inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-all duration-200 active:scale-[0.98] shadow-[0_8px_24px_-6px_rgba(255,106,0,0.5)] whitespace-nowrap self-start sm:self-auto"
              >
                <span>Découvrir</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </motion.div>

          {/* ━━━━━━━━━━━━━━━━━━━━ TWO SMALLER DEALS (Stacked vertically on Desktop, 2-cols on Tablet) ━━━━━━━━━━━━━━━━━━━━ */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-8">
            
            {/* ━━━━━━━━━━━━━━━━━━━━ SMALL DEAL 01: AUDIO ━━━━━━━━━━━━━━━━━━━━ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] bg-[#151518] border border-[#23232A] hover:border-[#FF6A00]/50 transition-all duration-300 p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-[#FF6A00]/10 group-hover:bg-[#FF6A00]/18 rounded-full blur-[60px] transition-all duration-500 pointer-events-none" />

              {/* Top Row: Category + Discount */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#929292]">
                  AUDIO
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold tracking-wider text-[#FF6A00] bg-[#FF6A00]/12 border border-[#FF6A00]/30 rounded-full">
                  -32 %
                </span>
              </div>

              {/* Product Visual: Casque Sans Fil */}
              <div className="relative z-10 my-4 sm:my-6 w-full aspect-[16/9] max-h-[170px] flex items-center justify-center">
                <motion.div className="w-full h-full max-w-[240px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <svg
                    viewBox="0 0 300 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full filter drop-shadow(0 16px 28px rgba(0,0,0,0.85))"
                  >
                    <defs>
                      <linearGradient id="smallHeadband" x1="80" y1="40" x2="220" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2A2A33" />
                        <stop offset="50%" stopColor="#40404C" />
                        <stop offset="100%" stopColor="#1E1E24" />
                      </linearGradient>
                      <linearGradient id="smallCupOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#18181E" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    {/* Headband arch */}
                    <path d="M 85 110 C 80 40, 220 40, 215 110" stroke="url(#smallHeadband)" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 120 54 C 140 45, 165 45, 185 54" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

                    {/* Left Cup */}
                    <ellipse cx="80" cy="125" rx="26" ry="42" transform="rotate(-10 80 125)" fill="#141418" stroke="url(#smallCupOrange)" strokeWidth="2" />
                    <circle cx="80" cy="125" r="7" fill="#0E0E12" stroke="#FF6A00" strokeWidth="1.5" />

                    {/* Right Cup */}
                    <ellipse cx="220" cy="125" rx="26" ry="42" transform="rotate(10 220 125)" fill="#141418" stroke="url(#smallCupOrange)" strokeWidth="2" />
                    <circle cx="220" cy="125" r="7" fill="#0E0E12" stroke="#FFB000" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>

              {/* Product Information */}
              <div className="relative z-10 pt-3 border-t border-[#1F1F26] flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-['Syne'] font-bold text-xl sm:text-2xl text-[#F5F5F5] tracking-tight">
                    Casque sans fil
                  </h3>
                  <div className="flex items-baseline gap-2.5 mt-2">
                    <span className="font-['Syne'] font-extrabold text-2xl text-[#F5F5F5] tracking-tight">
                      149 €
                    </span>
                    <span className="text-[#929292] line-through text-sm font-medium">
                      219 €
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenDeal('headphones')}
                  className="cursor-pointer group/btn inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#1E1E24] hover:bg-[#FF6A00] hover:text-black border border-[#2F2F38] hover:border-[#FF6A00] rounded-none transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Découvrir</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.div>

            {/* ━━━━━━━━━━━━━━━━━━━━ SMALL DEAL 02: STYLE ━━━━━━━━━━━━━━━━━━━━ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] bg-[#151518] border border-[#23232A] hover:border-[#FFB000]/50 transition-all duration-300 p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-[#FFB000]/10 group-hover:bg-[#FFB000]/18 rounded-full blur-[60px] transition-all duration-500 pointer-events-none" />

              {/* Top Row: Category + Discount */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#929292]">
                  STYLE
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold tracking-wider text-[#FFB000] bg-[#FFB000]/12 border border-[#FFB000]/30 rounded-full">
                  -32 %
                </span>
              </div>

              {/* Product Visual: Montre Connectée */}
              <div className="relative z-10 my-4 sm:my-6 w-full aspect-[16/9] max-h-[170px] flex items-center justify-center">
                <motion.div className="w-full h-full max-w-[240px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <svg
                    viewBox="0 0 300 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full filter drop-shadow(0 16px 28px rgba(0,0,0,0.85))"
                  >
                    <defs>
                      <linearGradient id="watchCase" x1="100" y1="60" x2="200" y2="140" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2E2E38" />
                        <stop offset="50%" stopColor="#1C1C22" />
                        <stop offset="100%" stopColor="#0F0F14" />
                      </linearGradient>
                      <linearGradient id="watchStrap" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#18181E" />
                        <stop offset="50%" stopColor="#25252D" />
                        <stop offset="100%" stopColor="#18181E" />
                      </linearGradient>
                    </defs>

                    {/* Straps */}
                    <rect x="125" y="10" width="50" height="50" rx="8" fill="url(#watchStrap)" stroke="#2C2C36" strokeWidth="1.5" />
                    <rect x="125" y="140" width="50" height="50" rx="8" fill="url(#watchStrap)" stroke="#2C2C36" strokeWidth="1.5" />

                    {/* Watch Case */}
                    <rect x="110" y="55" width="80" height="90" rx="22" fill="url(#watchCase)" stroke="#383845" strokeWidth="2" />

                    {/* Watch Dial Screen */}
                    <rect x="118" y="63" width="64" height="74" rx="16" fill="#0A0A0D" stroke="#1C1C22" strokeWidth="1.5" />

                    {/* Dynamic Dial Rings in Amber/Orange */}
                    <circle cx="150" cy="100" r="24" fill="none" stroke="#22222A" strokeWidth="4" />
                    <circle
                      cx="150"
                      cy="100"
                      r="24"
                      fill="none"
                      stroke="#FFB000"
                      strokeWidth="4"
                      strokeDasharray="110 50"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="150"
                      cy="100"
                      r="16"
                      fill="none"
                      stroke="#FF6A00"
                      strokeWidth="3"
                      strokeDasharray="70 40"
                      strokeLinecap="round"
                    />

                    {/* Digital Time Indicator */}
                    <text x="150" y="104" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="sans-serif" fontWeight="700">
                      09:41
                    </text>

                    {/* Crown Button */}
                    <rect x="190" y="88" width="5" height="16" rx="2" fill="#3D3D4A" stroke="#FFB000" strokeWidth="0.8" />
                  </svg>
                </motion.div>
              </div>

              {/* Product Information */}
              <div className="relative z-10 pt-3 border-t border-[#1F1F26] flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-['Syne'] font-bold text-xl sm:text-2xl text-[#F5F5F5] tracking-tight">
                    Montre connectée
                  </h3>
                  <div className="flex items-baseline gap-2.5 mt-2">
                    <span className="font-['Syne'] font-extrabold text-2xl text-[#F5F5F5] tracking-tight">
                      129 €
                    </span>
                    <span className="text-[#929292] line-through text-sm font-medium">
                      189 €
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenDeal('watch')}
                  className="cursor-pointer group/btn inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#1E1E24] hover:bg-[#FFB000] hover:text-black border border-[#2F2F38] hover:border-[#FFB000] rounded-none transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Découvrir</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━ DETAIL MODAL (No dead clicks, 100% French) ━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {selectedDeal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#151518] border border-[#2F2F3A] rounded-[24px] p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Ambient Top Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6A00]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A00]">
                    {selectedDeal.category} · OFFRE CYBER MONDAY
                  </span>
                  <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] mt-1">
                    {selectedDeal.product}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDeal(null)}
                  className="p-1.5 text-[#929292] hover:text-[#F5F5F5] bg-[#1E1E24] rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-[#929292] leading-relaxed mb-6">
                {selectedDeal.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-[#0B0B0D] border border-[#22222A]">
                {selectedDeal.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                    <Check size={14} className="text-[#FF6A00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price & Primary Action */}
              <div className="pt-4 border-t border-[#23232C] flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#929292]">Prix exclusif</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Syne'] font-extrabold text-3xl text-[#F5F5F5]">
                      {selectedDeal.price}
                    </span>
                    <span className="text-sm text-[#929292] line-through">
                      {selectedDeal.previousPrice}
                    </span>
                    <span className="text-xs font-bold text-[#FF6A00]">
                      {selectedDeal.discount}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleClaimOffer(selectedDeal.product)}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-colors shadow-lg shadow-[#FF6A00]/30"
                >
                  <Zap size={15} />
                  <span>Profiter de l&apos;offre</span>
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-[#929292]">
                <ShieldCheck size={13} className="text-[#FFB000]" />
                <span>Expédition express 24h & retours gratuits pendant 30 jours.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation Toast */}
      <AnimatePresence>
        {savedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-none bg-[#151518] border border-[#FF6A00] text-[#F5F5F5] text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <span>{savedNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
