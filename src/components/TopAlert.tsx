import React from 'react';

export const TopAlert: React.FC = () => {
  return (
    <aside
      id="top-notification-bar"
      aria-label="Announcement"
      className="w-full bg-[#1a2072] text-[#eaf1ff] py-1.5 sm:py-2 px-2 xs:px-4 sm:px-6 relative z-20 border-b border-[#2d36a8]/60 shadow-sm"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-center sm:justify-between gap-2 sm:gap-4 w-full">
        {/* Main Alert Message in Single Line */}
        <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 min-w-0 shrink flex-nowrap">
          {/* Badge with no-wrap */}
          <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 py-0.5 rounded-full bg-[#ba1a1a] text-white font-label-sm text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
            <span>New Batch</span>
          </span>

          {/* Marathi Announcement Text (Single-line on mobile and desktop) */}
          <span className="font-body-sm text-[11px] xs:text-[12px] sm:text-[13px] text-[#dce7fa] font-medium whitespace-nowrap truncate sm:overflow-visible">
            🔥 मर्यादित जागा!{' '}
            <strong className="text-white font-bold">
              ६ महिन्यांचे प्रॅक्टिकल ट्रेनिंग १००% मोफत
            </strong>
            <span className="hidden sm:inline"> — नावनोंदणी सुरू आहे.</span>
          </span>
        </div>

        {/* Right Value Pills (Desktop / Large Tablet) */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-[#a0b3d6] shrink-0 whitespace-nowrap">
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

