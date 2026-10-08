import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/propertyData';

interface HeaderProps {
  currentTone?: 'light' | 'dark';
}

export const Header: React.FC<HeaderProps> = ({ currentTone = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [tone, setTone] = useState<'light' | 'dark'>(currentTone);

  // Detect scroll and active section tone
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Section tone detection
      const sections = document.querySelectorAll('section[data-tone]');
      let activeTone: 'light' | 'dark' = 'dark';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if header is currently inside this section (around top 50px)
        if (rect.top <= 60 && rect.bottom >= 60) {
          const sectionTone = section.getAttribute('data-tone') as 'light' | 'dark';
          if (sectionTone) activeTone = sectionTone;
        }
      });

      setTone(activeTone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = tone === 'dark';

  return (
    <>
      {/* Top Advisory Banner matching VELA */}
      <div 
        id="banner" 
        className="sticky top-0 z-50 flex h-[38px] w-full items-center justify-between border-b border-white/10 bg-[#14191E] px-4 text-[0.78rem] text-[#F7F5F0] sm:px-8"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3D6673] animate-pulse" />
          <span className="text-[#F7F5F0]/80">ALMA Architectural Residences</span>
          <span className="hidden text-[#F7F5F0]/40 sm:inline">|</span>
          <span className="hidden text-[#F7F5F0]/70 sm:inline">Four private houses on the coastal sound</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#F7F5F0]/60 hidden md:inline">Viewings Fri–Sat 16:30–18:30</span>
          <a 
            href="#viewings" 
            className="text-[#F7F5F0] hover:text-[#3D6673] transition-colors underline underline-offset-4"
          >
            Inquire private viewing →
          </a>
        </div>
      </div>

      {/* Main Sticky Architectural Header */}
      <header
        className={`pointer-events-none fixed inset-x-0 z-40 transition-all duration-500 top-[38px] ${
          isScrolled 
            ? isDark 
              ? 'bg-[#14191E]/80 backdrop-blur-md border-b border-white/5' 
              : 'bg-[#F7F5F0]/85 backdrop-blur-md border-b border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-transparent'
        }`}
        style={{ color: isDark ? 'var(--color-ivory)' : 'var(--color-ink)' }}
      >
        <div className="pointer-events-auto mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-10">
          {/* Brand Logo */}
          <a
            href="#top"
            className="font-serif text-[1.6rem] font-normal tracking-[0.38em] no-underline transition-opacity hover:opacity-75 focus-visible:outline-none"
            aria-label={`${BRAND.name}, back to top`}
          >
            {BRAND.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary sections">
            <a
              href="#site"
              className="label tracking-[0.16em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              The site
            </a>
            <a
              href="#inside"
              className="label tracking-[0.16em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              Inside
            </a>
            <a
              href="#materials"
              className="label tracking-[0.16em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              Materials
            </a>
            <a
              href="#houses"
              className="label tracking-[0.16em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              Houses
            </a>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#viewings"
              className={`label hidden rounded-full border px-5 py-2.5 text-[0.76rem] no-underline transition-all duration-300 sm:inline-block ${
                isDark
                  ? 'border-white/30 text-[#F7F5F0] hover:bg-white hover:text-[#14191E]'
                  : 'border-black/25 text-[#14191E] hover:bg-[#14191E] hover:text-[#F7F5F0]'
              }`}
            >
              Book a viewing
            </a>

            {/* Menu Trigger for Mobile and Tablet */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`label flex items-center gap-2 rounded-full border px-4 py-2 text-[0.74rem] transition-colors focus-visible:outline-none ${
                isDark
                  ? 'border-white/20 text-[#F7F5F0] hover:border-white/60'
                  : 'border-black/20 text-[#14191E] hover:border-black/60'
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
              <span className="flex flex-col gap-1 w-3.5">
                <span className={`block h-[1px] w-full bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
                <span className={`block h-[1px] w-full bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Architectural Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#14191E] text-[#F7F5F0] p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-12 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between border-b border-white/10 pb-6">
          <a
            href="#top"
            onClick={() => setIsMenuOpen(false)}
            className="font-serif text-[1.8rem] tracking-[0.38em]"
          >
            {BRAND.name}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="label rounded-full border border-white/30 px-5 py-2 hover:bg-white hover:text-[#14191E] transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Menu Navigation Links */}
        <div className="mx-auto my-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 py-8 md:grid-cols-2">
          <nav className="flex flex-col space-y-4 sm:space-y-6">
            <span className="label text-[#78736B]">Navigation</span>
            <a
              href="#top"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#F7F5F0]/90 hover:text-white"
            >
              00 Overview
            </a>
            <a
              href="#site"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#F7F5F0]/90 hover:text-white"
            >
              01 The Site
            </a>
            <a
              href="#inside"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#F7F5F0]/90 hover:text-white"
            >
              02 Interior Rooms
            </a>
            <a
              href="#materials"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#F7F5F0]/90 hover:text-white"
            >
              03 Materiality
            </a>
            <a
              href="#houses"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#F7F5F0]/90 hover:text-white"
            >
              04 Available Houses
            </a>
            <a
              href="#viewings"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl font-light hover:translate-x-3 transition-transform text-[#3D6673] hover:text-[#4A7C8C]"
            >
              05 Schedule Viewing
            </a>
          </nav>

          {/* Architectural Notes & Coordinates */}
          <div className="flex flex-col justify-end space-y-6 border-t border-white/10 pt-6 md:border-t-0 md:border-l md:border-white/10 md:pl-12 md:pt-0">
            <div>
              <p className="label text-[#78736B]">Location</p>
              <p className="font-serif text-2xl mt-1 text-[#F7F5F0]">{BRAND.location}</p>
              <p className="font-mono text-xs text-[#78736B] mt-1">{BRAND.coordinates}</p>
            </div>
            <div>
              <p className="label text-[#78736B]">Viewing Times</p>
              <p className="text-sm text-[#F7F5F0]/80 mt-1">{BRAND.viewingHours}</p>
              <p className="text-xs text-[#78736B] mt-0.5">By advance appointment during sunset lighting</p>
            </div>
            <div>
              <p className="label text-[#78736B]">Private Concierge</p>
              <p className="text-sm text-[#F7F5F0]/80 mt-1">{BRAND.contactEmail}</p>
              <p className="text-xs text-[#78736B] mt-0.5">Direct sales office dispatch</p>
            </div>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between border-t border-white/10 pt-6 text-xs text-[#78736B]">
          <span>© 2026 {BRAND.name} Architectural Residences</span>
          <span className="font-mono">FOUR HOUSES · ONE SHORELINE</span>
        </div>
      </div>
    </>
  );
};
