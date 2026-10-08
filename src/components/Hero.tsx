import React from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../data/propertyData';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      data-tone="dark"
      className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#14191E] text-[#F7F5F0]"
      aria-label="Waterfront residence with dark infinity pool facing the evening lagoon"
    >
      {/* Background Architectural Media Plate */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero/hero-main.jpg"
          alt="ALMA private residence at dusk, travertine stone and infinity pool reflecting the lagoon"
          className="h-full w-full object-cover object-center brightness-[0.88] contrast-[1.05] scale-[1.02] transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Subtle Atmospheric Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1318]/60 via-transparent to-[#0D1318]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(13,19,24,0.4)_100%)] pointer-events-none" />
      </div>

      {/* Top Spacer for Header */}
      <div className="relative z-10 h-[110px]" />

      {/* Central Typographic Composition */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center px-5 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <p className="label tracking-[0.24em] text-[#F7F5F0]/85 uppercase">
            {BRAND.tagline}
          </p>

          {/* Monumental Editorial Headline */}
          <h1 className="display mt-3 text-[clamp(4.6rem,14vw,11rem)] font-light tracking-[0.08em] text-[#F7F5F0] drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {BRAND.name}
          </h1>

          {/* Architectural Subtitle */}
          <p className="mt-4 max-w-[42ch] text-[1.05rem] leading-[1.65] text-[#F7F5F0]/90 font-light sm:text-[1.15rem]">
            {BRAND.concept}
          </p>

          {/* Secondary Action */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#site"
              className="label group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-xs text-[#F7F5F0] backdrop-blur-md no-underline transition-all hover:bg-white hover:text-[#14191E]"
            >
              <span>Explore the architecture</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Architectural Bar & Scroll Indicator */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between px-5 pb-8 sm:px-10">
        <div className="hidden sm:block">
          <p className="font-mono text-[0.72rem] tracking-wider text-[#F7F5F0]/60">
            {BRAND.coordinates}
          </p>
          <p className="label text-[0.68rem] text-[#F7F5F0]/50 mt-1">
            Coastal Waterfront Estate
          </p>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#site"
          className="label ml-auto flex items-center gap-2 text-[0.74rem] text-[#F7F5F0]/70 no-underline hover:text-[#F7F5F0] transition-colors"
          aria-label="Scroll down to the site section"
        >
          <span>Scroll</span>
          <span className="inline-block h-3 w-[1px] bg-white/40 animate-pulse" />
        </a>
      </div>
    </section>
  );
};
