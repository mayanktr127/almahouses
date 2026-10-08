import React from 'react';
import { motion } from 'motion/react';
import { SPECIFICATIONS } from '../data/propertyData';

export const SiteSection: React.FC = () => {
  return (
    <section
      id="site"
      data-tone="light"
      className="bg-[#F7F5F0] px-5 pb-24 pt-28 text-[#14191E] sm:px-10 sm:pb-32 sm:pt-40 transition-colors"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Main 2-column Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-20 items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label text-[#78736B]">The site</p>
            <h2 className="display mt-6 text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.08] text-[#14191E]">
              Four houses on one shoreline, each turned to its own piece of water.
            </h2>
            <p className="mt-8 max-w-[46ch] text-[1.05rem] leading-[1.7] text-[#14191E]/75">
              One design, built four times and set at four angles, so no house looks into another and every terrace has the sun going down over the water.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <span className="h-[1px] w-12 bg-[#14191E]/20" />
              <p className="font-mono text-xs uppercase tracking-wider text-[#78736B]">
                Staggered privacy & uninterrupted horizon
              </p>
            </div>
          </motion.div>

          {/* Right Architectural Media Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[16/10] overflow-hidden rounded-[6px] shadow-[0_12px_40px_rgba(20,25,30,0.06)] lg:aspect-auto lg:min-h-[34rem]"
          >
            <img
              src="/assets/images/site/site-aerial.jpg"
              alt="High aerial view of the four ALMA houses along the coastal sound shoreline"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F7F5F0]/90">
              <span className="font-mono text-[0.72rem] tracking-wider">AERIAL SITE PLAN</span>
              <span className="text-[0.72rem] opacity-80">Orientation 270° West</span>
            </div>
          </motion.div>
        </div>

        {/* Specifications Bar */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[#14191E]/15 pt-10 sm:mt-24 lg:grid-cols-4"
        >
          {SPECIFICATIONS.map((spec) => (
            <div key={spec.label} className="group">
              <dt className="sr-only">{spec.label}</dt>
              <dd className="display text-[clamp(2.6rem,5vw,4.2rem)] font-light tabular-nums text-[#14191E] transition-colors group-hover:text-[#2B4C56]">
                {spec.value}
              </dd>
              <dd className="label mt-3 text-[#78736B] transition-colors group-hover:text-[#14191E]">
                {spec.label}
              </dd>
              <p className="mt-1 text-xs text-[#14191E]/50 line-clamp-1">
                {spec.detail}
              </p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
