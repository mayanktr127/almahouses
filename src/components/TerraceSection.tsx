import React from 'react';
import { motion } from 'motion/react';

export const TerraceSection: React.FC = () => {
  return (
    <section
      id="terrace"
      data-tone="dark"
      className="relative flex h-[92svh] min-h-[560px] w-full flex-col justify-end overflow-hidden bg-[#14191E] text-[#F7F5F0] transition-colors"
      aria-label="The terrace and 14-meter pool facing the sunset over the lagoon"
    >
      {/* Background Cinematic Visual Plate */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/terrace/terrace-sunset.jpg"
          alt="The 14-meter dark pool on the terrace at sunset, looking out to calm coastal waters"
          className="h-full w-full object-cover object-center brightness-[0.9] contrast-[1.05]"
          loading="lazy"
        />
        {/* Cinematic Dusk Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Typographic Overlay at the Bottom */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 sm:px-10 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[50rem]"
        >
          <p className="label tracking-[0.2em] text-[#F7F5F0]/80">
            The terrace
          </p>
          <h2 className="display mt-5 max-w-[14ch] text-[clamp(2.8rem,6.8vw,6.2rem)] font-light leading-[1.04] text-[#F7F5F0]">
            Built for the evening light.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-[1.7] text-[#F7F5F0]/85">
            Every house faces west over the water. The pool runs the length of the terrace, fourteen metres, and the sun goes down at the end of it.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="font-mono text-xs tracking-wider text-[#F7F5F0]/60">
              ORIENTATION: 270° WEST
            </span>
            <span className="h-[1px] w-8 bg-white/25" />
            <span className="font-mono text-xs tracking-wider text-[#F7F5F0]/60">
              14.0 METRE WATER RUN
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
