import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SiteSection } from './components/SiteSection';
import { InsideSection } from './components/InsideSection';
import { MaterialsSection } from './components/MaterialsSection';
import { TerraceSection } from './components/TerraceSection';
import { HousesSection } from './components/HousesSection';
import { ViewingsSection } from './components/ViewingsSection';
import { Footer } from './components/Footer';
import { HouseDetailModal } from './components/HouseDetailModal';
import type { HouseProperty } from './types';
import { BRAND } from './data/propertyData';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHouseForViewing, setSelectedHouseForViewing] = useState('House IV');
  const [inspectedHouse, setInspectedHouse] = useState<HouseProperty | null>(null);

  // Cinematic initial load sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#F7F5F0] text-[#14191E] selection:bg-[#2B4C56] selection:text-[#F7F5F0]">
      {/* Subtle cinematic tactile film grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Cinematic Introductory Loading Screen */}
      {isLoading && (
        <div
          role="status"
          aria-label="Loading architectural experience"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14191E] text-[#F7F5F0] transition-opacity duration-700"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light tracking-[0.38em] text-[#F7F5F0] animate-pulse">
              {BRAND.name}
            </span>
            <span className="label mt-4 text-[0.72rem] tracking-[0.24em] text-[#78736B]">
              HOUSES BY THE WATER
            </span>
            <div className="mt-8 h-[1px] w-28 overflow-hidden bg-white/10">
              <div className="h-full w-full bg-white/70 animate-[indeterminate_1s_infinite_linear]" />
            </div>
          </div>
        </div>
      )}

      {/* Main Architectural Header */}
      <Header />

      {/* Main Editorial Storytelling Canvas */}
      <main id="main-content">
        {/* 00 Hero */}
        <Hero />

        {/* 01 The Site & Specifications */}
        <SiteSection />

        {/* 02 Inside: Spatial Walkthrough */}
        <InsideSection />

        {/* 03 Materials: Tactile Study */}
        <MaterialsSection />

        {/* 04 The Terrace: Sunset Water Run */}
        <TerraceSection />

        {/* 05 The Houses: Dual-Elevation Plates */}
        <HousesSection
          onSelectHouseForViewing={(houseRoman) => {
            setSelectedHouseForViewing(houseRoman);
          }}
          onOpenHouseDetail={(house) => {
            setInspectedHouse(house);
          }}
        />

        {/* 06 Viewings: Interactive Sunset Concierge */}
        <ViewingsSection
          selectedHouse={selectedHouseForViewing}
          onSelectHouse={setSelectedHouseForViewing}
        />
      </main>

      {/* 07 Understated Architectural Footer */}
      <Footer />

      {/* House Specification Detail Modal */}
      <HouseDetailModal
        house={inspectedHouse}
        onClose={() => setInspectedHouse(null)}
        onSelectForViewing={(houseRoman) => {
          setSelectedHouseForViewing(houseRoman);
        }}
      />
    </div>
  );
}

export default App;
