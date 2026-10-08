import React, { useState } from 'react';
import { BRAND, VIEWING_DAYS, VIEWING_TIMES } from '../data/propertyData';

interface ViewingsSectionProps {
  selectedHouse: string;
  onSelectHouse: (house: string) => void;
}

export const ViewingsSection: React.FC<ViewingsSectionProps> = ({
  selectedHouse,
  onSelectHouse,
}) => {
  const [selectedDay, setSelectedDay] = useState(VIEWING_DAYS[0].label);
  const [selectedTime, setSelectedTime] = useState(VIEWING_TIMES[1].label);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Dynamic message construction
  const generatedMessage = `Hello ${BRAND.name}, I would like to see ${selectedHouse} on ${selectedDay} at ${selectedTime}.`;
  
  // Encoded WhatsApp URL
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoModal(true);
  };

  return (
    <section
      id="viewings"
      data-tone="light"
      className="bg-[#ECE7DF] px-5 py-28 text-[#14191E] sm:px-10 sm:py-36 transition-colors"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-20 items-center">
          {/* Left Column: Form & Dynamic Message */}
          <div>
            <p className="label text-[#78736B]">Viewings</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.08] text-[#14191E]">
              See it in the evening.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-[1.7] text-[#14191E]/75">
              Viewings are on Fridays and Saturdays, in the last two hours of light. Choose a house, a day and a time; the message is written for you.
            </p>

            {/* Fieldset: House */}
            <fieldset className="mt-8 border-none p-0">
              <legend className="label text-[#78736B]">House</legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {['House III', 'House IV'].map((house) => {
                  const isChecked = selectedHouse === house;
                  return (
                    <button
                      key={house}
                      type="button"
                      onClick={() => onSelectHouse(house)}
                      className={`inline-flex min-h-[44px] items-center rounded-full border px-5 text-[0.92rem] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#2B4C56] ${
                        isChecked
                          ? 'border-[#14191E] bg-[#14191E] text-[#F7F5F0]'
                          : 'border-[#14191E]/25 bg-transparent text-[#14191E] hover:border-[#14191E]/60'
                      }`}
                    >
                      {house}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Fieldset: Day */}
            <fieldset className="mt-7 border-none p-0">
              <legend className="label text-[#78736B]">Day</legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {VIEWING_DAYS.map((day) => {
                  const isChecked = selectedDay === day.label;
                  return (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => setSelectedDay(day.label)}
                      className={`inline-flex min-h-[44px] items-center rounded-full border px-5 text-[0.92rem] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#2B4C56] ${
                        isChecked
                          ? 'border-[#14191E] bg-[#14191E] text-[#F7F5F0]'
                          : 'border-[#14191E]/25 bg-transparent text-[#14191E] hover:border-[#14191E]/60'
                      }`}
                    >
                      {day.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Fieldset: Time */}
            <fieldset className="mt-7 border-none p-0">
              <legend className="label text-[#78736B]">Time (Sunset Window)</legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {VIEWING_TIMES.map((time) => {
                  const isChecked = selectedTime === time.label;
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setSelectedTime(time.label)}
                      className={`inline-flex min-h-[44px] items-center rounded-full border px-5 font-mono text-[0.88rem] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#2B4C56] ${
                        isChecked
                          ? 'border-[#14191E] bg-[#14191E] text-[#F7F5F0]'
                          : 'border-[#14191E]/25 bg-transparent text-[#14191E] hover:border-[#14191E]/60'
                      }`}
                      title={time.note}
                    >
                      {time.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Action Button: WhatsApp */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-[#14191E] px-8 text-[#F7F5F0] transition-all duration-300 hover:bg-[#2B4C56] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B4C56]"
              >
                <span className="label text-[0.78rem] tracking-wider">Ask on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </button>

              <span className="font-mono text-xs text-[#78736B]">
                Immediate concierge response
              </span>
            </div>

            {/* Live Message Preview */}
            <p className="mt-5 max-w-[44ch] text-[0.92rem] italic text-[#14191E]/65 border-l-2 border-[#2B4C56]/40 pl-4 py-1">
              "{generatedMessage}"
            </p>
          </div>

          {/* Right Column: Architectural Atmosphere Plate */}
          <div className="relative min-h-[30rem] overflow-hidden rounded-[6px] shadow-[0_12px_40px_rgba(20,25,30,0.06)]">
            <img
              src="/assets/images/site/lagoon-evening.jpg"
              alt="Palms and calm waters along the sound at sunset"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F7F5F0]">
              <div>
                <p className="label text-[0.7rem] text-[#F7F5F0]/80">Sunset Viewing Atmosphere</p>
                <p className="font-serif text-lg text-white">Quiet light over the sound</p>
              </div>
              <p className="font-mono text-xs text-[#F7F5F0]/70">17:15 HORIZON</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demonstration Dialog Modal matching VELA's elegant demo dialog */}
      {showDemoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
        >
          <div className="w-[min(34rem,calc(100vw-2rem))] rounded-[6px] bg-[#F7F5F0] p-7 text-[#14191E] shadow-2xl sm:p-10">
            <p className="label text-[#2B4C56]">This is where WhatsApp opens</p>
            <h3 className="display mt-3 text-[1.85rem] leading-tight text-[#14191E]">
              On {BRAND.name}'s live site, this starts a chat with the sales concierge.
            </h3>
            <p className="mt-4 text-[0.95rem] text-[#14191E]/75">
              The inquiry message is already formatted and ready:
            </p>
            <p className="mt-3 border-l-2 border-[#2B4C56]/50 bg-[#ECE7DF]/50 p-3 pl-4 text-[0.92rem] italic text-[#14191E]">
              "{generatedMessage}"
            </p>
            <p className="mt-4 text-xs text-[#14191E]/60">
              You can test the direct link or return to exploring the architectural plates.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3rem] items-center rounded-full bg-[#14191E] px-6 text-xs label text-[#F7F5F0] no-underline transition-colors hover:bg-[#2B4C56]"
              >
                Open WhatsApp Web →
              </a>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="label min-h-[3rem] text-xs text-[#14191E]/70 underline underline-offset-4 hover:text-[#14191E]"
              >
                Back to the residences
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
