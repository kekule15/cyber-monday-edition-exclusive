'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Flame, ShieldCheck, Check, X, Clock } from 'lucide-react';

export default function DailyDealSection() {
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  const handleClaim = () => {
    setShowClaimModal(true);
  };

  const handleConfirmReservation = () => {
    setShowClaimModal(false);
    setClaimSuccess(true);
    setTimeout(() => setClaimSuccess(false), 4500);
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#0B0B0D] overflow-hidden">
      {/* Background Architectural Atmosphere & Glow concentrated on the product */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] bg-[#FF6A00]/9 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Large Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Visual (occupies significant portion ~ 52%) */}
          <motion.div
            initial={{ opacity: 0, x: -25, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center"
          >
            {/* Ambient Concentrated Electric Orange Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[420px] lg:h-[480px] bg-radial from-[#FF6A00]/30 via-[#FF6A00]/10 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"
            />

            {/* Floating 3D Vector Product Artwork */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-0.6, 0.6, -0.6],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full max-w-[480px] lg:max-w-[580px] aspect-[4/3] flex items-center justify-center filter drop-shadow(0 35px 50px rgba(0,0,0,0.95))"
            >
              <svg
                viewBox="0 0 540 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  {/* Metallic headband gradient */}
                  <linearGradient id="dealHeadband" x1="100" y1="50" x2="440" y2="140" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#282832" />
                    <stop offset="35%" stopColor="#454552" />
                    <stop offset="55%" stopColor="#1E1E26" />
                    <stop offset="85%" stopColor="#3C3C48" />
                    <stop offset="100%" stopColor="#22222A" />
                  </linearGradient>

                  {/* Electric Orange rim lighting */}
                  <linearGradient id="dealOrangeRim" x1="160" y1="45" x2="380" y2="45" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#FFB000" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Earcup surface gradients */}
                  <radialGradient id="dealCupSurfaceL" cx="42%" cy="40%" r="65%">
                    <stop offset="0%" stopColor="#32323D" />
                    <stop offset="55%" stopColor="#17171E" />
                    <stop offset="100%" stopColor="#0B0B0E" />
                  </radialGradient>
                  <radialGradient id="dealCupSurfaceR" cx="44%" cy="38%" r="65%">
                    <stop offset="0%" stopColor="#3E3E4B" />
                    <stop offset="55%" stopColor="#1A1A22" />
                    <stop offset="100%" stopColor="#0B0B0E" />
                  </radialGradient>

                  <linearGradient id="dealCupOrangeEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#FFB000" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1A1A20" stopOpacity="0.1" />
                  </linearGradient>

                  <filter id="dealOrangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Cast Shadow under headphones */}
                <ellipse cx="270" cy="385" rx="190" ry="24" fill="#000000" opacity="0.8" filter="blur(16px)" />

                {/* Headband Structural Arc */}
                <path
                  d="M 155 205 C 150 90, 390 90, 385 205"
                  stroke="url(#dealHeadband)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />

                {/* Headband Electric Orange Highlight Rim */}
                <path
                  d="M 195 116 C 235 98, 305 98, 345 116"
                  stroke="url(#dealOrangeRim)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#dealOrangeGlow)"
                />

                {/* Left Gimbal / Yoke */}
                <path
                  d="M 155 195 L 155 240 C 155 252, 140 262, 130 272"
                  stroke="#2E2E38"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
                <circle cx="155" cy="205" r="9" fill="#181820" stroke="#FF6A00" strokeWidth="1.5" />

                {/* Right Gimbal / Yoke */}
                <path
                  d="M 385 195 L 385 240 C 385 252, 400 262, 410 272"
                  stroke="#353542"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
                <circle cx="385" cy="205" r="9" fill="#181820" stroke="#FFB000" strokeWidth="1.5" />

                {/* Left Ear Cushion (Plush Dark Obsidian) */}
                <ellipse
                  cx="135"
                  cy="282"
                  rx="52"
                  ry="82"
                  transform="rotate(-15 135 282)"
                  fill="#111115"
                  stroke="#22222A"
                  strokeWidth="3.5"
                />

                {/* Left Earcup Shell */}
                <ellipse
                  cx="128"
                  cy="278"
                  rx="45"
                  ry="74"
                  transform="rotate(-15 128 278)"
                  fill="url(#dealCupSurfaceL)"
                  stroke="url(#dealCupOrangeEdge)"
                  strokeWidth="2.5"
                />

                {/* Left Earcup Core Ring */}
                <ellipse
                  cx="128"
                  cy="278"
                  rx="24"
                  ry="38"
                  transform="rotate(-15 128 278)"
                  fill="#09090C"
                  stroke="#FF6A00"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                />
                <circle cx="128" cy="278" r="7" fill="#FF6A00" opacity="0.85" />

                {/* Right Ear Cushion */}
                <ellipse
                  cx="405"
                  cy="282"
                  rx="52"
                  ry="82"
                  transform="rotate(15 405 282)"
                  fill="#111115"
                  stroke="#22222A"
                  strokeWidth="3.5"
                />

                {/* Right Earcup Shell (Dynamic Highlighted) */}
                <ellipse
                  cx="412"
                  cy="278"
                  rx="45"
                  ry="74"
                  transform="rotate(15 412 278)"
                  fill="url(#dealCupSurfaceR)"
                  stroke="url(#dealCupOrangeEdge)"
                  strokeWidth="2.5"
                />

                {/* Right Earcup Core Ring */}
                <ellipse
                  cx="412"
                  cy="278"
                  rx="24"
                  ry="38"
                  transform="rotate(15 412 278)"
                  fill="#09090C"
                  stroke="#FF6A00"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                />
                <circle cx="412" cy="278" r="7" fill="#FFB000" opacity="0.95" />

                {/* Right Outer Rim Glint */}
                <path
                  d="M 445 245 C 456 270, 452 300, 440 325"
                  stroke="#FF6A00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                  filter="url(#dealOrangeGlow)"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Column: Promotional Content & Deal Details (~ 48%) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start"
          >
            {/* Header Lockup: Eyebrow + Stock Limité Label */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF6A00] rotate-45" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                  OFFRE DU JOUR
                </span>
              </div>
              <span className="text-[#929292]/40">·</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#18181E] border border-[#2A2A33] text-[11px] font-bold uppercase tracking-wider text-[#FFB000]">
                <Flame size={12} className="text-[#FF6A00]" />
                <span>STOCK LIMITÉ</span>
              </div>
            </div>

            {/* Main Heading: Le produit que tout le monde attendait. */}
            <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F5F5F5] tracking-tight leading-[1.08] mb-4">
              Le produit que tout le monde attendait.
            </h2>

            {/* Product Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight mb-3">
              Casque audio haute fidélité
            </h3>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#929292] font-normal leading-relaxed mb-8 max-w-lg">
              Une offre exceptionnelle, disponible pendant une durée limitée.
            </p>

            {/* Clean Price Hierarchy */}
            <div className="p-6 sm:p-7 rounded-[22px] bg-[#151518] border border-[#23232C] w-full max-w-md mb-8 shadow-xl">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#929292] mb-2">
                <span>Tarif Cyber Monday</span>
                <span className="text-[#FF6A00]">Économisez 80 €</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-['Syne'] font-black text-5xl sm:text-6xl text-[#F5F5F5] tracking-tight">
                  99 €
                </span>
                <span className="text-xl sm:text-2xl text-[#929292] line-through font-normal">
                  179 €
                </span>
                <span className="ml-auto inline-flex items-center px-3 py-1 text-sm font-bold tracking-wider text-[#FF6A00] bg-[#FF6A00]/15 border border-[#FF6A00]/40 rounded-full">
                  -45 %
                </span>
              </div>
            </div>

            {/* Primary CTA: Profiter de l'offre → */}
            <button
              type="button"
              onClick={handleClaim}
              className="cursor-pointer group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-all duration-200 active:scale-[0.98] shadow-[0_12px_32px_-8px_rgba(255,106,0,0.6)] hover:shadow-[0_16px_40px_-6px_rgba(255,106,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
            >
              <span>Profiter de l&apos;offre</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </button>

            {/* Reassurance text */}
            <p className="mt-4 text-xs text-[#929292] flex items-center gap-2">
              <Clock size={13} className="text-[#FFB000]" />
              <span>Garantie prix le plus bas · Livraison express 24h</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* Reservation Confirmation Modal (Guarantees zero dead clicks, 100% French) */}
      <AnimatePresence>
        {showClaimModal && (
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
                    OFFRE DU JOUR · RÉSERVATION IMMÉDIATE
                  </span>
                  <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] mt-1">
                    Casque audio haute fidélité
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowClaimModal(false)}
                  className="p-1.5 text-[#929292] hover:text-[#F5F5F5] bg-[#1E1E24] rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#22222A] space-y-2 mb-6 text-xs sm:text-sm text-[#F5F5F5]">
                <div className="flex items-center justify-between">
                  <span className="text-[#929292]">Tarif de lancement :</span>
                  <span className="line-through text-[#929292]">179 €</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span className="text-[#FF6A00]">Tarif Cyber Monday (-45%) :</span>
                  <span className="font-['Syne'] text-xl text-[#F5F5F5]">99 €</span>
                </div>
                <div className="pt-2 border-t border-[#1C1C24] flex items-center gap-2 text-xs text-[#929292]">
                  <Check size={14} className="text-[#FF6A00]" />
                  <span>Réservation bloquée pendant 15 minutes</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#23232C]">
                <button
                  type="button"
                  onClick={() => setShowClaimModal(false)}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#929292] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReservation}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-colors shadow-lg shadow-[#FF6A00]/30"
                >
                  <span>Valider mon tarif réservé</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation Toast */}
      <AnimatePresence>
        {claimSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-none bg-[#151518] border border-[#FF6A00] text-[#F5F5F5] text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-3"
          >
            <ShieldCheck size={18} className="text-[#FF6A00]" />
            <span>Tarif de 99 € réservé avec succès pour le Casque audio haute fidélité.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
