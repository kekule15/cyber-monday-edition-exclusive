'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateHeadphones = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translatePhone = useTransform(smoothX, [-0.5, 0.5], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] mx-auto flex items-center justify-center select-none"
    >
      {/* 1. Dramatic Volumetric Orange Atmosphere & Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Core electric orange light orb */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.75, 0.9, 0.75],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[540px] h-[340px] sm:h-[460px] lg:h-[540px] rounded-full bg-radial from-[#FF6A00]/30 via-[#FF6A00]/10 to-transparent blur-[80px] sm:blur-[110px]"
        />

        {/* Amber secondary highlight halo */}
        <div className="absolute top-[35%] right-[20%] w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full bg-[#FFB000]/15 blur-[60px]" />

        {/* Deep ambient dark shadow ring for contrast */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0D]/40 to-[#0B0B0D] pointer-events-none" />
      </div>

      {/* 2. Interactive 3D Canvas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* 3. TYPOGRAPHIC DETAIL: Large Decorative "24H" & "OFFRES LIMITÉES" */}
        <div
          className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-none transform -translate-y-4"
          style={{ transform: 'translateZ(-40px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient backlight for the 24H letters */}
            <div className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extrabold font-['Syne'] tracking-tighter text-[#FF6A00]/25 blur-xl select-none">
              24H
            </div>

            {/* Foreground 24H with metallic dark gradient & sharp electric orange rim */}
            <span
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extrabold font-['Syne'] tracking-tighter leading-none select-none"
              style={{
                background: 'linear-gradient(180deg, #303038 0%, #15151A 50%, #0E0E12 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 2px rgba(255, 106, 0, 0.4), 0 10px 40px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(0 2px 8px rgba(255, 106, 0, 0.25))',
              }}
            >
              24H
            </span>
          </motion.div>

          {/* Supporting label: "OFFRES LIMITÉES" */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mt-1 sm:mt-2"
          >
            <span className="w-5 sm:w-8 h-px bg-gradient-to-r from-transparent to-[#FF6A00]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#FF6A00]">
              OFFRES LIMITÉES
            </span>
            <span className="w-5 sm:w-8 h-px bg-gradient-to-l from-transparent to-[#FF6A00]" />
          </motion.div>
        </div>

        {/* 4. Floating Geometric Elements (Prism & Amber Ring) */}
        {/* Floating Amber Refraction Ring */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transform: 'translateZ(-15px)' }}
          className="absolute -top-4 right-10 sm:right-16 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none opacity-80"
        >
          <svg viewBox="0 0 120 120" className="w-full h-full filter drop-shadow(0 0 16px rgba(255, 176, 0, 0.35))">
            <defs>
              <linearGradient id="amberRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB000" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#151518" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="url(#amberRingGrad)"
              strokeWidth="2.5"
              strokeDasharray="180 30"
            />
          </svg>
        </motion.div>

        {/* Floating Obsidian Faceted Prism */}
        <motion.div
          animate={{
            y: [8, -8, 8],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transform: 'translateZ(-25px)' }}
          className="absolute bottom-8 left-6 sm:left-12 w-20 sm:w-28 h-20 sm:h-28 pointer-events-none opacity-70"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow(0 15px 25px rgba(0,0,0,0.8))">
            <polygon points="50,10 90,80 10,80" fill="#151518" stroke="#FF6A00" strokeWidth="1" strokeOpacity="0.6" />
            <polygon points="50,10 90,80 50,60" fill="#1C1C22" stroke="#FFB000" strokeWidth="0.5" strokeOpacity="0.4" />
          </svg>
        </motion.div>

        {/* 5. Central 3D Product: Premium Luxury Obsidian Headphones */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            x: translateHeadphones,
            transform: 'translateZ(20px)',
          }}
          className="relative z-20 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[490px] aspect-[4/3] flex items-center justify-center"
        >
          <motion.div
            animate={{
              y: [-7, 7, -7],
              rotate: [-0.5, 0.5, -0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full flex items-center justify-center filter drop-shadow(0 30px 45px rgba(0,0,0,0.9))"
          >
            {/* Bespoke Editorial Vector Rendering of Luxury Studio Headphones */}
            <svg
              viewBox="0 0 520 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="headbandMetallic" x1="120" y1="50" x2="400" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#25252B" />
                  <stop offset="30%" stopColor="#3C3C45" />
                  <stop offset="50%" stopColor="#1C1C22" />
                  <stop offset="85%" stopColor="#4A4A55" />
                  <stop offset="100%" stopColor="#25252B" />
                </linearGradient>

                <linearGradient id="orangeRimGlow" x1="140" y1="40" x2="380" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#FFB000" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.8" />
                </linearGradient>

                <radialGradient id="cupSurfaceLeft" cx="40%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#2D2D35" />
                  <stop offset="60%" stopColor="#141418" />
                  <stop offset="100%" stopColor="#0B0B0D" />
                </radialGradient>

                <radialGradient id="cupSurfaceRight" cx="45%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#383842" />
                  <stop offset="55%" stopColor="#17171C" />
                  <stop offset="100%" stopColor="#0B0B0D" />
                </radialGradient>

                <linearGradient id="cupBevelOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#FFB000" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1E1E24" stopOpacity="0.1" />
                </linearGradient>

                <filter id="orangeAcousticGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Headband Shadow */}
              <path
                d="M 150 200 C 145 90, 375 90, 370 200"
                stroke="#000000"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.6"
                filter="blur(10px)"
              />

              {/* Headband Structural Arch */}
              <path
                d="M 155 200 C 150 95, 370 95, 365 200"
                stroke="url(#headbandMetallic)"
                strokeWidth="22"
                strokeLinecap="round"
              />

              {/* Headband Top Lighting Accent (Electric Orange Reflection) */}
              <path
                d="M 195 118 C 230 102, 290 102, 325 118"
                stroke="url(#orangeRimGlow)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#orangeAcousticGlow)"
              />

              {/* Left Yoke / Gimbal (Matte Dark Titanium) */}
              <path
                d="M 155 190 L 155 235 C 155 245, 140 255, 130 265"
                stroke="#2A2A32"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="155" cy="200" r="8" fill="#1C1C22" stroke="#FF6A00" strokeWidth="1.5" />

              {/* Right Yoke / Gimbal */}
              <path
                d="M 365 190 L 365 235 C 365 245, 380 255, 390 265"
                stroke="#32323B"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="365" cy="200" r="8" fill="#1C1C22" stroke="#FFB000" strokeWidth="1.5" />

              {/* Left Ear Cushion (Plush Obsidian Leather) */}
              <ellipse
                cx="135"
                cy="275"
                rx="48"
                ry="76"
                transform="rotate(-14 135 275)"
                fill="#121215"
                stroke="#202026"
                strokeWidth="3"
              />

              {/* Left Earcup Outer Shell */}
              <ellipse
                cx="128"
                cy="272"
                rx="42"
                ry="68"
                transform="rotate(-14 128 272)"
                fill="url(#cupSurfaceLeft)"
                stroke="url(#cupBevelOrange)"
                strokeWidth="2.5"
              />

              {/* Left Earcup Acoustic Center with Orange Accent Core */}
              <ellipse
                cx="128"
                cy="272"
                rx="22"
                ry="36"
                transform="rotate(-14 128 272)"
                fill="#0B0B0D"
                stroke="#FF6A00"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <circle cx="128" cy="272" r="6" fill="#FF6A00" opacity="0.8" />

              {/* Right Ear Cushion */}
              <ellipse
                cx="385"
                cy="275"
                rx="48"
                ry="76"
                transform="rotate(14 385 275)"
                fill="#121215"
                stroke="#202026"
                strokeWidth="3"
              />

              {/* Right Earcup Outer Shell (Dynamic Rim Lit) */}
              <ellipse
                cx="392"
                cy="272"
                rx="42"
                ry="68"
                transform="rotate(14 392 272)"
                fill="url(#cupSurfaceRight)"
                stroke="url(#cupBevelOrange)"
                strokeWidth="2.5"
              />

              {/* Right Earcup Acoustic Rings & Orange Core */}
              <ellipse
                cx="392"
                cy="272"
                rx="22"
                ry="36"
                transform="rotate(14 392 272)"
                fill="#0B0B0D"
                stroke="#FF6A00"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <circle cx="392" cy="272" r="6" fill="#FFB000" opacity="0.9" />

              {/* Right Earcup Edge Highlight */}
              <path
                d="M 425 240 C 435 265, 432 290, 420 315"
                stroke="#FF6A00"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
                filter="url(#orangeAcousticGlow)"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* 6. Overlapping Foreground Secondary Object: Flagship Titanium Smartphone */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            x: translatePhone,
            transform: 'translateZ(45px)',
          }}
          className="absolute -bottom-2 right-4 sm:right-10 lg:right-4 xl:right-12 z-30 w-[140px] sm:w-[180px] lg:w-[200px] aspect-[9/18]"
        >
          <motion.div
            animate={{
              y: [5, -5, 5],
              rotate: [1, -1, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="w-full h-full p-2.5 rounded-[28px] sm:rounded-[34px] bg-[#121216] border border-[#2D2D35] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_20px_rgba(255,106,0,0.2)] flex flex-col justify-between overflow-hidden relative"
          >
            {/* Phone Edge Glint (Electric Orange Rim) */}
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#FF6A00]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-80" />

            {/* Dynamic Glass Screen Content */}
            <div className="relative w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#070709] p-3 flex flex-col justify-between border border-[#1E1E24] overflow-hidden">
              {/* Screen Top Status / Dynamic Island */}
              <div className="flex items-center justify-between">
                <div className="w-10 sm:w-12 h-2.5 rounded-full bg-[#18181F] mx-auto" />
              </div>

              {/* Screen Graphic: Live Waveform / Event Graphic */}
              <div className="my-auto py-2 flex flex-col items-center">
                <div className="text-[9px] uppercase tracking-widest text-[#929292] font-medium mb-1">
                  CYBER LIVE
                </div>
                <div className="flex items-end gap-1 h-10 py-1">
                  {[40, 75, 100, 60, 90, 45, 80, 95, 60, 30].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h}%`, `${(h * 0.4 + 20)}%`, `${h}%`],
                      }}
                      transition={{
                        duration: 1.8 + (i % 3) * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-1 sm:w-1.5 bg-gradient-to-t from-[#FF6A00] to-[#FFB000] rounded-full"
                    />
                  ))}
                </div>
                <div className="mt-2 text-[10px] font-bold text-[#F5F5F5] tracking-wider">
                  -50% SUR LE DROP
                </div>
              </div>

              {/* Screen Bottom Bar */}
              <div className="w-12 h-1 rounded-full bg-[#2A2A33] mx-auto" />
            </div>
          </motion.div>
        </motion.div>

        {/* 7. Subtle Editorial Precision Markers (Grid / Coordinates) */}
        <div
          className="absolute top-2 left-2 text-[9px] font-mono text-[#929292]/40 tracking-widest hidden sm:block pointer-events-none"
          aria-hidden="true"
        >
          [REF: CM24-EDITION]
        </div>
        <div
          className="absolute bottom-2 right-2 text-[9px] font-mono text-[#FF6A00]/50 tracking-widest hidden sm:block pointer-events-none"
          aria-hidden="true"
        >
          + + ACCÈS IMMÉDIAT
        </div>
      </motion.div>
    </div>
  );
}
