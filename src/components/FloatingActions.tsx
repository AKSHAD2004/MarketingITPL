import React from 'react';
import { HERO_DATA } from '../data/programData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionsProps {
  onApplyClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onApplyClick,
}) => {
  const whatsappUrl = `https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I am interested in the Marketing Career Launch Program (६ महिन्यांचे FREE Practical Marketing Training). Please guide me with admission details.'
  )}`;

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar */}
      <aside
        id="mobile-bottom-bar"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#22288D]/95 backdrop-blur-xl px-3 sm:px-4 py-2.5 shadow-[0_-4px_20px_rgba(15,23,42,0.25)] border-t border-white/15"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <a
            id="mobile-bar-call-btn"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            href={`tel:${HERO_DATA.phoneNumber}`}
          >
            <span className="material-symbols-outlined text-[22px] text-[#fea619]">
              call
            </span>
            <span className="font-label-sm text-[11px] font-semibold">Call</span>
          </a>

          <a
            id="mobile-bar-whatsapp-btn"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon size={24} animated={true} />
            <span className="font-label-sm text-[11px] font-semibold">
              WhatsApp
            </span>
          </a>

          <button
            id="mobile-bar-apply-btn"
            type="button"
            onClick={onApplyClick}
            className="flex-[2] flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#fea619] text-[#122262] font-label-lg text-[13px] xs:text-[14px] font-extrabold shadow-md hover:bg-[#ffb733] transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </aside>
    </>
  );
};
