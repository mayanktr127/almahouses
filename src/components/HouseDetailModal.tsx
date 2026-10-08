import React from 'react';
import type { HouseProperty } from '../types';

interface HouseDetailModalProps {
  house: HouseProperty | null;
  onClose: () => void;
  onSelectForViewing: (houseRoman: string) => void;
}

export const HouseDetailModal: React.FC<HouseDetailModalProps> = ({
  house,
  onClose,
  onSelectForViewing,
}) => {
  if (!house) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md transition-opacity"
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[6px] bg-[#F7F5F0] text-[#14191E] shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-[#F7F5F0]/90 px-6 py-5 backdrop-blur-md sm:px-8">
          <div>
            <span className="label text-[#78736B]">Architectural Plate</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#14191E]">
              {house.romanNumeral}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="label rounded-full border border-black/20 px-4 py-2 text-xs hover:bg-[#14191E] hover:text-[#F7F5F0] transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Dual Visual Elevation Comparison */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <img
                src={house.frontImage}
                alt={`${house.romanNumeral} front facade`}
                className="h-full w-full object-cover"
              />
              <span className="label font-mono absolute bottom-3 left-3 rounded bg-black/60 px-2 py-0.5 text-[0.65rem] text-white">
                FACADE & WALLED ENTRY
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <img
                src={house.backImage}
                alt={`${house.romanNumeral} rear terrace elevation`}
                className="h-full w-full object-cover"
              />
              <span className="label font-mono absolute bottom-3 left-3 rounded bg-black/60 px-2 py-0.5 text-[0.65rem] text-white">
                LAGOON TERRACE & POOL
              </span>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-4 border-y border-black/10 py-6 sm:grid-cols-4">
            <div>
              <span className="label text-[0.68rem] text-[#78736B]">Plot Area</span>
              <p className="display text-2xl font-light tabular-nums mt-1">{house.plotSize} m²</p>
              <p className="text-xs text-[#78736B]">Walled boundary</p>
            </div>
            <div>
              <span className="label text-[0.68rem] text-[#78736B]">Built Interior</span>
              <p className="display text-2xl font-light tabular-nums mt-1">{house.builtArea} m²</p>
              <p className="text-xs text-[#78736B]">Two levels</p>
            </div>
            <div>
              <span className="label text-[0.68rem] text-[#78736B]">Bedrooms</span>
              <p className="display text-2xl font-light tabular-nums mt-1">{house.bedrooms}</p>
              <p className="text-xs text-[#78736B]">All en-suite suites</p>
            </div>
            <div>
              <span className="label text-[0.68rem] text-[#78736B]">Orientation</span>
              <p className="display text-2xl font-light mt-1">{house.faces}</p>
              <p className="text-xs text-[#78736B]">Direct sunset light</p>
            </div>
          </div>

          {/* Narrative Summary */}
          <div>
            <h4 className="label text-[#78736B]">Spatial Composition</h4>
            <p className="mt-2 text-base leading-relaxed text-[#14191E]/80">
              {house.summary}
            </p>
          </div>

          {/* Features List */}
          <div>
            <h4 className="label text-[#78736B]">Architectural Features</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {house.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-[#14191E]/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2B4C56]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
            <div>
              <span className="label text-[0.68rem] text-[#78736B]">Availability Status</span>
              <p className="font-serif text-lg text-[#14191E]">
                {house.status === 'sold' && 'Acquired by private owner'}
                {house.status === 'reserved' && 'Under reservation contract'}
                {house.status === 'available' && `Available at ${house.price}`}
              </p>
            </div>

            {house.status !== 'sold' ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectForViewing(house.romanNumeral);
                  const el = document.getElementById('viewings');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="label rounded-full bg-[#14191E] px-7 py-3 text-xs text-[#F7F5F0] hover:bg-[#2B4C56] transition-colors"
              >
                Schedule sunset viewing →
              </button>
            ) : (
              <span className="label text-xs text-[#78736B]">
                Plate archived in registry
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
