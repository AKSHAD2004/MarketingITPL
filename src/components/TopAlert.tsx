import React from 'react';

export const TopAlert: React.FC = () => {
  const tickerItems = [
    '🔥 मर्यादित जागा! ६ महिन्यांचे प्रॅक्टिकल मार्केटिंग ट्रेनिंग १००% मोफत — नावनोंदणी सुरू आहे!',
    '✨ Live Projects & Real Client Handling',
    '💼 १००% Placement Assistance',
    '💰 ₹५०,००० पर्यंत Stipend ची संधी',
    '🎓 Govt. & Industry Certified Program',
  ];

  return (
    <aside
      id="top-notification-bar"
      aria-label="Announcement"
      className="w-full bg-[#181e6e] text-[#eaf1ff] py-1.5 sm:py-2 relative z-20 border-b border-[#2d36a8]/60 shadow-sm overflow-hidden select-none"
    >
      <div className="w-full flex items-center">
        {/* Fixed Left Badge */}
        <div className="z-20 bg-[#181e6e] pl-3 sm:pl-6 pr-2 sm:pr-3 flex items-center shrink-0 shadow-[4px_0_12px_#181e6e]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ba1a1a] text-white font-label-sm text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
            <span>New Batch</span>
          </span>
          <div className="h-4 w-px bg-white/20 ml-2.5 sm:ml-3" />
        </div>

        {/* Continuous Moving Ticker Track */}
        <div className="overflow-hidden flex-1 relative flex items-center [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]">
          <div className="animate-marquee-scroll flex items-center gap-8 py-0.5 whitespace-nowrap cursor-default">
            {/* Set 1 */}
            {tickerItems.map((item, idx) => (
              <span
                key={`t1-${idx}`}
                className="font-body-sm text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] text-[#dce7fa] font-medium flex items-center gap-8"
              >
                <span className="font-semibold text-white tracking-wide">{item}</span>
                <span className="text-[#fea619] text-[14px]">✦</span>
              </span>
            ))}

            {/* Set 2 (for seamless loop) */}
            {tickerItems.map((item, idx) => (
              <span
                key={`t2-${idx}`}
                className="font-body-sm text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] text-[#dce7fa] font-medium flex items-center gap-8"
              >
                <span className="font-semibold text-white tracking-wide">{item}</span>
                <span className="text-[#fea619] text-[14px]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};


