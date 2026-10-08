import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MATERIALS } from '../data/propertyData';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);

  return (
    <section
      id="materials"
      data-tone="dark"
      className="relative bg-[#14191E] px-5 py-24 text-[#F7F5F0] sm:px-10 sm:py-36 transition-colors"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Header Block */}
        <div className="max-w-[50rem]">
          <p className="label text-[#78736B]">Materials</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5.2rem)] font-light text-[#F7F5F0]">
            Stone below, glass above.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-[1.7] text-[#F7F5F0]/85">
            Four materials, used everywhere and nowhere thin. Each is named here the way the drawings name it.
          </p>
        </div>

        {/* Interactive Material Architecture Showcase */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16 items-start">
          {/* Main Visual Plate: The Entrance Architecture with Hotspots */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:aspect-auto lg:min-h-[38rem]">
            <img
              src="/assets/images/materials/materials-entrance.jpg"
              alt="The entrance: a teak door in a travertine wall, glass to either side"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30 pointer-events-none" />

            {/* Hotspots for each material */}
            {MATERIALS.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setSelectedMaterial(mat)}
                  style={{ left: `${mat.hotspot.x}%`, top: `${mat.hotspot.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                  aria-label={`Inspect ${mat.name}`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#2B4C56] opacity-75 scale-125 animate-ping'
                          : 'bg-white/30 opacity-40 group-hover:scale-110'
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-4 w-4 rounded-full border border-white transition-all duration-300 ${
                        isSelected ? 'bg-white scale-110' : 'bg-[#14191E]/80 group-hover:bg-white'
                      }`}
                    />
                  </span>
                  <span
                    className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[#14191E]/90 px-2.5 py-1 text-[0.72rem] tracking-wider font-mono text-[#F7F5F0] backdrop-blur-md transition-all duration-300 ${
                      isSelected
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    {mat.name}
                  </span>
                </button>
              );
            })}

            {/* Bottom Plate Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F7F5F0]">
              <div>
                <p className="label text-[0.7rem] text-[#F7F5F0]/70">Architectural Portal</p>
                <p className="font-serif text-lg text-white">The Entrance</p>
              </div>
              <p className="text-xs text-[#F7F5F0]/60 max-w-[28ch] text-right hidden sm:block">
                A teak pivot door in a travertine wall, low-iron glass to either side.
              </p>
            </div>
          </div>

          {/* Right Column: Tactile Material Inspector */}
          <div className="flex flex-col space-y-6">
            {/* Material Selector Chips */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {MATERIALS.map((mat) => {
                const isSelected = selectedMaterial.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setSelectedMaterial(mat)}
                    className={`flex flex-col items-start rounded-[6px] border p-3.5 text-left transition-all duration-300 focus-visible:outline-none ${
                      isSelected
                        ? 'border-white/50 bg-white/10 text-white'
                        : 'border-white/10 bg-transparent text-[#F7F5F0]/60 hover:border-white/30 hover:text-[#F7F5F0]'
                    }`}
                  >
                    <span className="font-mono text-[0.68rem] tracking-wider text-[#78736B]">
                      0{MATERIALS.indexOf(mat) + 1}
                    </span>
                    <span className="font-serif text-base mt-1 text-inherit">
                      {mat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Material Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMaterial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="rounded-[6px] border border-white/15 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="label text-[0.68rem] text-[#78736B]">Origin</span>
                    <p className="font-mono text-sm text-[#F7F5F0] mt-0.5">{selectedMaterial.origin}</p>
                  </div>
                  <div className="text-right">
                    <span className="label text-[0.68rem] text-[#78736B]">Application</span>
                    <p className="text-xs text-[#F7F5F0]/80 mt-0.5 max-w-[16ch] truncate">
                      {selectedMaterial.application}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="label text-[0.68rem] text-[#78736B]">Tactile Specification</span>
                  <p className="mt-2 text-sm leading-[1.7] text-[#F7F5F0]/85">
                    {selectedMaterial.description}
                  </p>
                </div>

                {/* Texture Swatch Preview */}
                <div className="mt-6 overflow-hidden rounded-[4px] border border-white/10">
                  <div className="relative aspect-[16/7]">
                    <img
                      src={selectedMaterial.textureImage}
                      alt={`Tactile texture detail of ${selectedMaterial.name}`}
                      className="h-full w-full object-cover contrast-[1.1]"
                    />
                    <div className="absolute bottom-2 left-2.5 rounded bg-black/60 px-2 py-0.5 font-mono text-[0.62rem] text-[#F7F5F0]/90 backdrop-blur-sm">
                      MACRO TEXTURE STUDY · 1:1
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
