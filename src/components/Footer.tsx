import React from 'react';
import { BRAND } from '../data/propertyData';

export const Footer: React.FC = () => {
  return (
    <footer
      data-tone="dark"
      className="bg-[#14191E] px-5 pb-12 pt-24 text-[#F7F5F0] sm:px-10 sm:pt-32 transition-colors border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Main Brand & Details Row */}
        <div className="flex flex-wrap items-end justify-between gap-12 pb-16 border-b border-white/10">
          <div>
            <p className="font-serif text-[clamp(3.4rem,9vw,7.5rem)] font-light leading-none tracking-[0.1em] text-[#F7F5F0]">
              {BRAND.name}
            </p>
            <p className="label mt-5 text-[#F7F5F0]/70 tracking-[0.2em]">
              {BRAND.tagline}
            </p>
          </div>

          <div className="space-y-4 text-[0.95rem] text-[#F7F5F0]/75">
            <p className="font-mono text-xs tracking-wider text-[#F7F5F0]/90">
              {BRAND.viewingHours}
            </p>
            <p className="text-sm text-[#F7F5F0]/70">
              {BRAND.location} · {BRAND.coordinates}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F7F5F0]/60 pt-2">
              <a
                href="#site"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
              >
                The Site
              </a>
              <span>·</span>
              <a
                href="#inside"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
              >
                Inside
              </a>
              <span>·</span>
              <a
                href="#materials"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
              >
                Materials
              </a>
              <span>·</span>
              <a
                href="#houses"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
              >
                Houses
              </a>
              <span>·</span>
              <a
                href="#viewings"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
              >
                Viewings
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Micro-Meta Row */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#78736B]">
          <p>© 2026 {BRAND.name} Architectural Residences. All rights reserved.</p>
          <p className="font-mono text-[0.72rem] tracking-wider text-[#F7F5F0]/40">
            MINIMALIST WATERFRONT DEVELOPMENT
          </p>
        </div>
      </div>
    </footer>
  );
};
