import React from 'react';

export const TopAlert: React.FC = () => {
  return (
    <aside
      id="top-notification-bar"
      aria-label="Announcement"
      className="w-full bg-[#132669] text-[#eaf1ff] py-2 sm:py-2.5 px-3 sm:px-6 relative z-20 border-b border-[#1b3280]/60 shadow-sm"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        {/* Main Alert Message */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 mx-auto sm:mx-0 w-full sm:w-auto">
          {/* Badge with no-wrap */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ba1a1a] text-white font-label-sm text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
            <span>New Batch Open</span>
          </span>

          {/* Marath Announcement Text */}
          <span className="font-body-sm text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] text-[#d3e4fe] font-medium leading-tight sm:leading-normal">
            🔥 मर्यादित जागा!{' '}
            <strong className="text-white font-bold">
              ६ महिन्यांचे प्रॅक्टिकल ट्रेनिंग १००% मोफत
            </strong>{' '}
            — नावनोंदणी सुरू आहे.
          </span>
        </div>

        {/* Right Value Pills (Desktop / Large Tablet) */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-[#77849c] shrink-0">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#fea619]">
              workspace_premium
            </span>{' '}
            Govt. &amp; Industry Certified
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#fea619]">
              payments
            </span>{' '}
            Up to ₹50,000 Stipend*
          </span>
        </div>
      </div>
    </aside>
  );
};
