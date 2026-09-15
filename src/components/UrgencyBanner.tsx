import React from 'react';
import { HERO_DATA } from '../data/programData';

interface UrgencyBannerProps {
  onApplyClick: () => void;
}

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({
  onApplyClick,
}) => {
  return (
    <section className="w-full bg-[#0e1c2f] text-[#eaf1ff] py-12 sm:py-16 text-center relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 sm:gap-4 relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ba1a1a] text-white font-label-sm text-[11px] font-extrabold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          Final Call
        </span>

        <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[26px] sm:text-[36px] font-extrabold text-white">
          🔥 Seats Limited! आजच Registration करा.
        </h2>

        <p className="font-body-md text-[15px] text-[#d3e4fe] max-w-xl">
          वेळ वाया घालवू नका. ६ महिन्यांत स्वतःला एक यशस्वी आणि प्रॅक्टिकल
          मार्केटिंग व्यावसायिक बनवा.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            id="urgency-apply-btn"
            type="button"
            onClick={onApplyClick}
            className="px-8 py-3.5 rounded-xl bg-[#fea619] text-[#684000] font-label-lg text-[14px] font-extrabold shadow-lg hover:bg-[#ffddb8] hover:text-[#653e00] transition-all cursor-pointer"
          >
            Apply Now (मोफत प्रवेश)
          </button>

          <a
            id="urgency-call-btn"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#213145] text-[#eaf1ff] font-label-lg text-[14px] font-bold hover:bg-[#1a2838] transition-all border border-white/10"
            href={`tel:${HERO_DATA.phoneNumber}`}
          >
            <span className="material-symbols-outlined text-[#fea619] text-[20px]">
              call
            </span>
            <span>Call: {HERO_DATA.phoneNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
