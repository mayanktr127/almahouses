import React, { useState } from 'react';
import { HOUSES } from '../data/propertyData';
import type { HouseProperty } from '../types';

interface HousesSectionProps {
  onSelectHouseForViewing?: (houseRoman: string) => void;
  onOpenHouseDetail?: (house: HouseProperty) => void;
}

export const HousesSection: React.FC<HousesSectionProps> = ({
  onSelectHouseForViewing,
  onOpenHouseDetail,
}) => {
  const [flippedHouses, setFlippedHouses] = useState<Record<string, boolean>>({});

  const toggleFlip = (houseId: string) => {
    setFlippedHouses((prev) => ({ ...prev, [houseId]: !prev[houseId] }));
  };

  return (
    <section
      id="houses"
      data-tone="light"
      className="bg-[#F7F5F0] px-5 py-28 text-[#14191E] sm:px-10 sm:py-36 transition-colors"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#14191E]/10 pb-10">
          <div>
            <p className="label text-[#78736B]">The houses</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.08] text-[#14191E]">
              Two sold, one reserved, one left.
            </h2>
          </div>
          <p className="text-[0.92rem] text-[#14191E]/60 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#2B4C56]" />
            <span>Hover or tap any house to inspect the lagoon elevation.</span>
          </p>
        </div>

        {/* 4 Houses Grid */}
        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {HOUSES.map((house) => {
            const isFlipped = flippedHouses[house.id];

            return (
              <article key={house.id} className="group flex flex-col justify-between">
                <div>
                  {/* Interactive Dual-View Image Container */}
                  <div
                    onClick={() => toggleFlip(house.id)}
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[6px] bg-[#ECE7DF] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                    style={{ touchAction: 'pan-y' }}
                    title="Click or hover to alternate elevations"
                  >
                    {/* Front Image */}
                    <img
                      src={house.frontImage}
                      alt={`${house.romanNumeral} entrance elevation`}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isFlipped
                          ? 'opacity-0 scale-[1.03]'
                          : 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-[1.03]'
                      }`}
                    />

                    {/* Back Lagoon Elevation Image */}
                    <img
                      src={house.backImage}
                      alt={`${house.romanNumeral} rear terrace elevation`}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isFlipped
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    />

                    {/* Status Badge */}
                    <span
                      className={`label absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[0.7rem] backdrop-blur-md shadow-sm transition-colors ${
                        house.status === 'available'
                          ? 'bg-[#2B4C56] text-[#F7F5F0]'
                          : 'bg-[#F7F5F0]/90 text-[#14191E]'
                      }`}
                    >
                      {house.status === 'sold' && 'Sold'}
                      {house.status === 'reserved' && 'Reserved'}
                      {house.status === 'available' && 'Available'}
                    </span>

                    {/* Elevation Mode Indicator Tag */}
                    <span className="font-mono absolute right-4 bottom-3 text-[0.65rem] tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {isFlipped ? 'REAR ELEVATION' : 'FRONT / REAR'}
                    </span>
                  </div>

                  {/* Title & Pricing/Status Line */}
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[1.95rem] leading-none text-[#14191E]">
                      {house.romanNumeral}
                    </h3>
                    <p className="label font-mono text-xs text-[#78736B] tabular-nums">
                      {house.status === 'sold' && 'Sold'}
                      {house.status === 'reserved' && 'Reserved'}
                      {house.status === 'available' && (house.price || 'Inquire')}
                    </p>
                  </div>

                  {/* Architectural Specs Summary */}
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[#14191E]/70">
                    {house.bedrooms} bedrooms · {house.plotSize} m² plot · Built {house.builtArea} m² · Faces {house.faces}
                  </p>

                  <p className="mt-2 text-xs leading-normal text-[#78736B] line-clamp-2">
                    {house.summary}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-[#14191E]/10 pt-4">
                  {onOpenHouseDetail && (
                    <button
                      type="button"
                      onClick={() => onOpenHouseDetail(house)}
                      className="label text-[0.72rem] text-[#78736B] hover:text-[#14191E] transition-colors"
                    >
                      View plate specs
                    </button>
                  )}

                  {house.status !== 'sold' ? (
                    <a
                      href="#viewings"
                      onClick={() => onSelectHouseForViewing && onSelectHouseForViewing(house.romanNumeral)}
                      className="label inline-flex items-center gap-1.5 text-[0.74rem] text-[#14191E] no-underline hover:text-[#2B4C56] transition-colors font-medium ml-auto"
                    >
                      <span>Book viewing</span>
                      <span>→</span>
                    </a>
                  ) : (
                    <span className="label text-[0.72rem] text-[#78736B]/60 ml-auto">
                      Archived
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
