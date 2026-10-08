import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS } from '../data/propertyData';

export const InsideSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentRoom = ROOMS[activeIndex];

  return (
    <section
      id="inside"
      data-tone="light"
      className="bg-[#ECE7DF] px-5 py-24 sm:px-10 sm:py-32 lg:py-40 transition-colors"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-20 items-center">
          {/* Left Column: Spatial Narrative */}
          <div className="flex flex-col justify-center">
            <p className="label text-[#78736B]">Inside</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.1] text-[#14191E]">
              Five bedrooms, and the water from every one.
            </h2>

            {/* Room Stage Selectors */}
            <ol className="mt-8 space-y-2 sm:mt-10 sm:space-y-3">
              {ROOMS.map((room, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li key={room.id}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`group flex w-full items-baseline gap-4 py-1.5 text-left transition-all duration-500 focus-visible:outline-none ${
                        isActive
                          ? 'opacity-100 translate-x-2'
                          : 'opacity-35 hover:opacity-75 translate-x-0'
                      }`}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <span className="font-mono text-xs tabular-nums text-[#78736B] transition-colors group-hover:text-[#14191E]">
                        {room.index}
                      </span>
                      <span className="font-serif text-[1.6rem] leading-none sm:text-[2rem] text-[#14191E]">
                        {room.name}
                      </span>
                      {isActive && (
                        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2B4C56]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Room Tagline & Description Display */}
            <div className="relative mt-8 min-h-[110px] max-w-[42ch]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoom.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-[1.05rem] font-medium leading-[1.6] text-[#14191E]">
                    {currentRoom.tagline}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-[1.65] text-[#14191E]/70">
                    {currentRoom.description}
                  </p>
                  
                  {/* Material specification pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentRoom.materialsUsed.map((mat) => (
                      <span
                        key={mat}
                        className="font-mono text-[0.68rem] tracking-wider uppercase rounded-full bg-[#14191E]/5 px-2.5 py-1 text-[#14191E]/75"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : ROOMS.length - 1))}
                className="label flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#14191E] transition-colors hover:border-black/50 hover:bg-[#14191E] hover:text-[#F7F5F0]"
                aria-label="Previous room"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev < ROOMS.length - 1 ? prev + 1 : 0))}
                className="label flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#14191E] transition-colors hover:border-black/50 hover:bg-[#14191E] hover:text-[#F7F5F0]"
                aria-label="Next room"
              >
                →
              </button>
              <span className="font-mono text-xs text-[#78736B] ml-2">
                {activeIndex + 1} / {ROOMS.length}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Spatial Imagery */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] shadow-[0_12px_44px_rgba(20,25,30,0.08)] lg:aspect-auto lg:min-h-[38rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoom.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full"
              >
                <img
                  src={currentRoom.image}
                  alt={`${currentRoom.name}: ${currentRoom.tagline}`}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#F7F5F0]">
                  <span className="label text-[0.72rem] tracking-widest text-[#F7F5F0]/90">
                    STAGE {currentRoom.index} · {currentRoom.name}
                  </span>
                  <span className="font-mono text-xs opacity-75">INTERIOR PLATE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
