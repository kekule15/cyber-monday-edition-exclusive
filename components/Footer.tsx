'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [activeModal, setActiveModal] = useState<'conditions' | 'confidentialite' | null>(null);

  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
      return;
    }
    const idMap: Record<string, string> = {
      Offres: 'offres',
      Collections: 'collections',
      'À propos': 'collections',
    };
    const targetId = idMap[section];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0B0B0D] border-t border-[#1C1C22] pt-16 sm:pt-20 pb-12 sm:pb-16 text-[#929292]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Top Grid: Brand, Nav, Secondary & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 sm:pb-16 border-b border-[#18181F]">
          
          {/* Left Column: Brand & Description (Col span 5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-['Syne'] font-extrabold text-xl tracking-wider uppercase text-[#F5F5F5] mb-3">
              CYBER MONDAY
            </span>
            <p className="text-sm text-[#929292] font-normal leading-relaxed max-w-sm">
              Le rendez-vous des offres exceptionnelles.
            </p>
          </div>

          {/* Center-Right Columns: Navigation, Secondary & Social Links (Col span 7) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Primary Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#offres"
                    onClick={(e) => handleLinkClick(e, 'Offres')}
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    Offres
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={(e) => handleLinkClick(e, 'Collections')}
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#a-propos"
                    onClick={(e) => handleLinkClick(e, 'À propos')}
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    À propos
                  </a>
                </li>
              </ul>
            </div>

            {/* Secondary Legal Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
                Informations
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('conditions')}
                    className="hover:text-[#FF6A00] transition-colors text-left cursor-pointer"
                  >
                    Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal('confidentialite')}
                    className="hover:text-[#FF6A00] transition-colors text-left cursor-pointer"
                  >
                    Confidentialité
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Labels */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
                Suivez-nous
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#929292]">
          <p>© 2026 Cyber Monday. Tous droits réservés.</p>
          <p className="text-[11px] text-[#929292]/60">Édition exclusive limitée à 24 heures.</p>
        </div>

      </div>

      {/* Modal for Conditions & Confidentialité */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#151518] border border-[#2F2F3A] rounded-[24px] p-6 sm:p-8 shadow-2xl text-[#F5F5F5]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-['Syne'] font-bold text-xl uppercase tracking-wider text-[#FF6A00]">
                  {activeModal === 'conditions' ? 'Conditions Générales' : 'Politique de Confidentialité'}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="p-1 text-[#929292] hover:text-white"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-[#929292] leading-relaxed mb-6">
                {activeModal === 'conditions'
                  ? 'Toutes les offres présentées dans le cadre du Cyber Monday 2026 sont valables exclusivement pendant 24 heures et dans la limite des stocks alloués.'
                  : 'Vos données personnelles et préférences de navigation sont protégées avec la plus grande rigueur selon les standards européens de confidentialité (RGPD).'}
              </p>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#FF6A00] hover:bg-[#FF8024] rounded-none transition-colors cursor-pointer"
              >
                Compris
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
