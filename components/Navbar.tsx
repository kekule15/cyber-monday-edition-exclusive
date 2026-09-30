'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onCtaClick?: () => void;
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onCtaClick, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionName: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionName);
    }
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#1F1F24] py-3.5 shadow-xl shadow-black/40'
            : 'bg-transparent border-b border-[#18181C]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'Accueil')}
            className="group flex items-center gap-2 tracking-tight text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6A00]"
          >
            <span className="font-['Syne'] font-extrabold text-lg sm:text-xl tracking-wider uppercase text-[#F5F5F5] group-hover:text-[#FF6A00] transition-colors duration-200">
              CYBER MONDAY
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide text-[#929292]"
          >
            <a
              href="#offres"
              onClick={(e) => handleLinkClick(e, 'Offres')}
              className="hover:text-[#F5F5F5] transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
            >
              Offres
            </a>
            <a
              href="#collections"
              onClick={(e) => handleLinkClick(e, 'Collections')}
              className="hover:text-[#F5F5F5] transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
            >
              Collections
            </a>
            <a
              href="#a-propos"
              onClick={(e) => handleLinkClick(e, 'À propos')}
              className="hover:text-[#F5F5F5] transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
            >
              À propos
            </a>
          </nav>

          {/* Zone 3: Compact CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={handleActionClick}
              className="cursor-pointer group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#151518] hover:bg-[#1E1E24] border border-[#2A2A30] hover:border-[#FF6A00]/70 rounded-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6A00]"
            >
              <span className="whitespace-nowrap">Voir les offres</span>
              <ArrowUpRight
                size={14}
                className="text-[#FF6A00] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Mobile Clean Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F5] hover:text-[#FF6A00] hover:bg-[#151518] border border-transparent hover:border-[#2A2A30] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6A00]"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[61px] z-40 bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-[#23232A] p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a
                href="#offres"
                onClick={(e) => handleLinkClick(e, 'Offres')}
                className="text-[#929292] hover:text-[#F5F5F5] py-2 border-b border-[#18181C] transition-colors"
              >
                Offres
              </a>
              <a
                href="#collections"
                onClick={(e) => handleLinkClick(e, 'Collections')}
                className="text-[#929292] hover:text-[#F5F5F5] py-2 border-b border-[#18181C] transition-colors"
              >
                Collections
              </a>
              <a
                href="#a-propos"
                onClick={(e) => handleLinkClick(e, 'À propos')}
                className="text-[#929292] hover:text-[#F5F5F5] py-2 border-b border-[#18181C] transition-colors"
              >
                À propos
              </a>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8533] transition-colors cursor-pointer"
                >
                  <span>Voir les offres</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
