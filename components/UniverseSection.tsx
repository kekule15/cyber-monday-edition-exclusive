'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, X, Check, Flame } from 'lucide-react';

interface UniverseItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  details: string[];
  reversed: boolean; // Visual position: false = text left / visual right, true = visual left / text right
}

const UNIVERSES: UniverseItem[] = [
  {
    id: 'tech',
    number: '01',
    title: 'TECH',
    tagline: 'Dispositifs haute performance, acoustique spatiale et informatique de pointe.',
    details: ['Ordinateurs portables IA', 'Casques Hi-Res réducteurs de bruit', 'Smartphones & tablettes OLED'],
    reversed: false,
  },
  {
    id: 'maison',
    number: '02',
    title: 'MAISON',
    tagline: 'Design d’intérieur contemporain, luminaires sculpturaux et mobilier minimaliste.',
    details: ['Luminaires d’ambiance connectés', 'Objets d’art fonctionnels', 'Art de la table architectural'],
    reversed: true,
  },
  {
    id: 'mode',
    number: '03',
    title: 'MODE',
    tagline: 'Pièces d’exception, sneakers techniques et accessoires de maroquinerie moderne.',
    details: ['Sneakers aérodynamiques', 'Sacs de voyage obsidian', 'Vestes techniques déperlantes'],
    reversed: false,
  },
  {
    id: 'bien-etre',
    number: '04',
    title: 'BIEN-ÊTRE',
    tagline: 'Équipements de récupération avancée, soins soniques et rituels quotidiens.',
    details: ['Pistolets de percussion pro', 'Diffuseurs ultrasoniques d’ambiance', 'Bouteilles thermiques intelligentes'],
    reversed: true,
  },
];

export default function UniverseSection() {
  const [activeUniverse, setActiveUniverse] = useState<UniverseItem | null>(null);

  return (
    <section id="collections" className="relative py-24 sm:py-32 lg:py-40 bg-[#0B0B0D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6A00]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#FFB000]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header: Minimal & Editorial */}
        <div className="max-w-2xl mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#FF6A00] rotate-45" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
              EXPLOREZ LA SÉLECTION
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F5F5F5] tracking-tight"
          >
            Des offres pour chaque univers.
          </motion.h2>
        </div>

        {/* Vertically Stacked Alternating Editorial Panels */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
          {UNIVERSES.map((universe, index) => {
            const isReversed = universe.reversed;

            return (
              <motion.div
                key={universe.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveUniverse(universe)}
                className="group relative cursor-pointer rounded-[28px] sm:rounded-[36px] bg-[#121215] border border-[#202026] hover:border-[#FF6A00]/50 transition-all duration-300 p-8 sm:p-10 lg:p-14 overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Subtle Electric Orange Ambient Backlight on Hover */}
                <div
                  className={`absolute top-1/2 ${
                    isReversed ? 'left-1/4' : 'right-1/4'
                  } -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-[#FF6A00]/8 group-hover:bg-[#FF6A00]/18 rounded-full blur-[100px] transition-all duration-500 pointer-events-none`}
                />

                {/* Subtle Linear Gradient Texture */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#15151A]/40 to-transparent opacity-80 pointer-events-none" />

                {/* Grid Container */}
                <div
                  className={`relative z-10 flex flex-col ${
                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center justify-between gap-8 sm:gap-12 lg:gap-16`}
                >
                  
                  {/* Text Column (Dominant Editorial Typography) */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between items-start order-2 md:order-none">
                    
                    {/* Small Label (01, 02, 03, 04) */}
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF6A00]">
                        {universe.number}
                      </span>
                      <span className="w-6 h-px bg-[#FF6A00]/40" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#929292]">
                        SÉLECTION ÉDITORIALE
                      </span>
                    </div>

                    {/* Large Category Title */}
                    <h3 className="font-['Syne'] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase text-[#F5F5F5] group-hover:text-gradient-orange transition-all duration-300 leading-none mb-6">
                      {universe.title}
                    </h3>

                    {/* Short Tagline */}
                    <p className="text-sm sm:text-base text-[#929292] font-normal leading-relaxed max-w-md mb-8">
                      {universe.tagline}
                    </p>

                    {/* Action Button: Explorer → */}
                    <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F5F5] group-hover:text-[#FF6A00] transition-colors duration-200">
                      <span>Explorer</span>
                      <ArrowRight
                        size={16}
                        className="text-[#FF6A00] transition-transform duration-200 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Visual Column: Premium Graphic Render (Order 1 on mobile) */}
                  <div className="w-full md:w-1/2 order-1 md:order-none aspect-[16/10] sm:aspect-[16/9] max-h-[300px] sm:max-h-[340px] flex items-center justify-center relative">
                    <div className="w-full h-full max-w-[460px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                      {renderUniverseVisual(universe.id)}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Universe Drawer / Modal (Accessible, 100% French, No dead clicks) */}
      <AnimatePresence>
        {activeUniverse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#151518] border border-[#2F2F3A] rounded-[24px] p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6A00]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A00]">
                    UNIVERS {activeUniverse.number} · CYBER MONDAY
                  </span>
                  <h3 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] mt-1">
                    {activeUniverse.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveUniverse(null)}
                  className="p-1.5 text-[#929292] hover:text-[#F5F5F5] bg-[#1E1E24] rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-[#929292] leading-relaxed mb-6">
                {activeUniverse.tagline}
              </p>

              <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#0B0B0D] border border-[#22222A]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A00] flex items-center gap-2">
                  <Flame size={14} />
                  <span>Offres exclusives incluses</span>
                </div>
                {activeUniverse.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                    <Check size={14} className="text-[#FF6A00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#23232C] flex items-center justify-between gap-4">
                <span className="text-xs text-[#929292]">Remises jusqu&apos;à -45 % disponibles aujourd&apos;hui</span>
                <button
                  type="button"
                  onClick={() => setActiveUniverse(null)}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-colors shadow-lg shadow-[#FF6A00]/30"
                >
                  <Sparkles size={15} />
                  <span>Accéder à la sélection</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━ BESPOKE EDITORIAL ARTWORK RENDERS FOR EACH UNIVERS ━━━━━━━━━━━━━━━━━━━━

function renderUniverseVisual(universeId: string) {
  switch (universeId) {
    case 'tech':
      return (
        /* TECH: Futuristic Obsidian Slate & Precision Studio Device */
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow(0 20px 35px rgba(0,0,0,0.85))"
        >
          <defs>
            <linearGradient id="techSlate" x1="80" y1="50" x2="420" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#25252D" />
              <stop offset="50%" stopColor="#15151B" />
              <stop offset="100%" stopColor="#0B0B0E" />
            </linearGradient>
            <linearGradient id="techGlow" x1="120" y1="60" x2="380" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#FFB000" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Cast Shadow */}
          <ellipse cx="250" cy="280" rx="190" ry="20" fill="#000000" opacity="0.8" filter="blur(14px)" />

          {/* Angled Tech Slate Frame */}
          <polygon
            points="100,240 180,70 410,70 330,240"
            fill="url(#techSlate)"
            stroke="#30303C"
            strokeWidth="2.5"
          />

          {/* Screen Surface */}
          <polygon
            points="115,230 190,82 398,82 322,230"
            fill="#09090C"
            stroke="#1C1C24"
            strokeWidth="1.5"
          />

          {/* Ambient Screen Light */}
          <polygon
            points="115,230 190,82 398,82 322,230"
            fill="url(#techGlow)"
          />

          {/* Orange Rim Glint Line */}
          <line x1="180" y1="70" x2="410" y2="70" stroke="#FF6A00" strokeWidth="2" strokeOpacity="0.9" />

          {/* Soundwave/Telemetry lines */}
          <line x1="170" y1="140" x2="340" y2="140" stroke="#FF6A00" strokeWidth="1.5" strokeDasharray="16 6" strokeOpacity="0.7" />
          <line x1="150" y1="160" x2="320" y2="160" stroke="#FFB000" strokeWidth="1.5" strokeDasharray="8 4" strokeOpacity="0.6" />

          {/* Floating Companion Audio Stylus/Orb */}
          <circle cx="390" cy="190" r="28" fill="#18181E" stroke="#FF6A00" strokeWidth="1.5" />
          <circle cx="390" cy="190" r="14" fill="#0E0E12" stroke="#FFB000" strokeWidth="1" />
          <circle cx="390" cy="190" r="4" fill="#FF6A00" />
        </svg>
      );

    case 'maison':
      return (
        /* MAISON: Minimal Contemporary Interior Object — Sculptural Cantilever Floor Lamp & Vessel */
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow(0 20px 35px rgba(0,0,0,0.85))"
        >
          <defs>
            <linearGradient id="maisonLamp" x1="150" y1="40" x2="260" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3A3A46" />
              <stop offset="60%" stopColor="#1E1E26" />
              <stop offset="100%" stopColor="#121217" />
            </linearGradient>
            <linearGradient id="warmLightCone" x1="280" y1="80" x2="380" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FFB000" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Pedestal / Ground Line */}
          <ellipse cx="250" cy="275" rx="180" ry="18" fill="#000000" opacity="0.75" filter="blur(12px)" />
          <rect x="80" y="270" width="340" height="4" rx="2" fill="#202026" />

          {/* Lamp Warm Ambient Light Cone */}
          <polygon points="260,95 190,270 380,270" fill="url(#warmLightCone)" />

          {/* Minimalist Cantilever Lamp Stem */}
          <path
            d="M 170 270 L 170 120 C 170 70, 260 60, 260 90"
            stroke="url(#maisonLamp)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Lamp Base */}
          <rect x="140" y="266" width="60" height="8" rx="4" fill="#25252E" stroke="#33333E" strokeWidth="1" />

          {/* Lamp Shade with Glowing Core */}
          <ellipse cx="260" cy="95" rx="22" ry="10" fill="#1C1C24" stroke="#FF6A00" strokeWidth="1.5" />
          <circle cx="260" cy="97" r="5" fill="#FF6A00" />

          {/* Minimalist Ceramic Vessel on Shelf */}
          <path
            d="M 320 270 L 330 200 C 330 185, 360 185, 360 200 L 370 270 Z"
            fill="#18181E"
            stroke="#2B2B36"
            strokeWidth="1.5"
          />
          <ellipse cx="345" cy="190" rx="14" ry="4" fill="#2D2D38" stroke="#FFB000" strokeWidth="1" strokeOpacity="0.6" />
        </svg>
      );

    case 'mode':
      return (
        /* MODE: Contemporary Aerodynamic Sneaker / Luxury Wearable Accessory */
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow(0 20px 35px rgba(0,0,0,0.85))"
        >
          <defs>
            <linearGradient id="sneakerUpper" x1="100" y1="120" x2="400" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2D2D37" />
              <stop offset="45%" stopColor="#1E1E26" />
              <stop offset="100%" stopColor="#111116" />
            </linearGradient>
            <linearGradient id="soleOrange" x1="100" y1="220" x2="390" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="60%" stopColor="#FF8533" />
              <stop offset="100%" stopColor="#FFB000" />
            </linearGradient>
          </defs>

          {/* Cast Shadow */}
          <ellipse cx="260" cy="270" rx="170" ry="18" fill="#000000" opacity="0.85" filter="blur(14px)" />

          {/* Sneaker Upper Profile */}
          <path
            d="M 120 220 C 135 170, 190 135, 230 135 C 260 135, 280 160, 310 170 C 350 185, 385 195, 395 220 L 390 235 L 120 235 Z"
            fill="url(#sneakerUpper)"
            stroke="#363644"
            strokeWidth="2"
          />

          {/* Dynamic Aerodynamic Sole (Electric Orange Accent) */}
          <path
            d="M 115 235 C 130 235, 170 238, 220 234 C 270 230, 320 235, 395 232 C 405 238, 400 248, 385 250 C 320 255, 180 255, 120 250 C 110 246, 110 238, 115 235 Z"
            fill="url(#soleOrange)"
            stroke="#FFB000"
            strokeWidth="1.5"
          />

          {/* Sole Air Cushion Pocket */}
          <rect x="145" y="240" width="45" height="6" rx="3" fill="#0B0B0D" stroke="#FF6A00" strokeWidth="1" />
          <rect x="200" y="240" width="35" height="6" rx="3" fill="#0B0B0D" stroke="#FF6A00" strokeWidth="1" />

          {/* Heel Collar & Pull Tab */}
          <path d="M 140 160 C 130 145, 135 125, 150 125 C 160 125, 175 145, 180 155" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" />

          {/* Technical Dynamic Waves / Overlay Panels */}
          <path d="M 210 155 C 240 175, 290 185, 340 190" stroke="#FFB000" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="5 3" />
        </svg>
      );

    case 'bien-etre':
      return (
        /* BIEN-ÊTRE: Modern Wellness Device — Minimalist Ultrasonic Mist Diffuser with Orange Ambient Glow */
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow(0 20px 35px rgba(0,0,0,0.85))"
        >
          <defs>
            <linearGradient id="diffuserBody" x1="180" y1="130" x2="320" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#30303B" />
              <stop offset="50%" stopColor="#1C1C24" />
              <stop offset="100%" stopColor="#101015" />
            </linearGradient>
            <linearGradient id="vaporGlow" x1="250" y1="30" x2="250" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFB000" stopOpacity="0" />
              <stop offset="40%" stopColor="#FF6A00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Cast Shadow */}
          <ellipse cx="250" cy="275" rx="140" ry="16" fill="#000000" opacity="0.8" filter="blur(12px)" />

          {/* Illuminated Orange Ultrasonic Mist Plume */}
          <path
            d="M 250 135 C 240 100, 220 70, 235 40 C 245 20, 255 20, 265 40 C 280 70, 260 100, 250 135 Z"
            fill="url(#vaporGlow)"
            filter="blur(5px)"
          />

          {/* Diffuser Outer Spherical / Teardrop Body */}
          <path
            d="M 250 130 C 200 130, 175 190, 180 230 C 185 260, 215 270, 250 270 C 285 270, 315 260, 320 230 C 325 190, 300 130, 250 130 Z"
            fill="url(#diffuserBody)"
            stroke="#383846"
            strokeWidth="2"
          />

          {/* Glowing Ambient Ring (Electric Orange) */}
          <ellipse cx="250" cy="225" rx="65" ry="12" fill="none" stroke="#FF6A00" strokeWidth="2.5" />
          <ellipse cx="250" cy="225" rx="65" ry="12" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0.6" filter="blur(3px)" />

          {/* Top Aperture */}
          <ellipse cx="250" cy="130" rx="16" ry="5" fill="#141418" stroke="#FF6A00" strokeWidth="1.5" />
          <circle cx="250" cy="130" r="3" fill="#FFB000" />
        </svg>
      );

    default:
      return null;
  }
}
