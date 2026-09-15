import React from 'react';

interface StipendBannerProps {
  onCheckEligibility: () => void;
}

export const StipendBanner: React.FC<StipendBannerProps> = ({
  onCheckEligibility,
}) => {
  return (
    <section className="w-full bg-[#f8f9ff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#fea619] text-[#684000] relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#fea619]">
          <div className="flex flex-col items-start gap-3 max-w-xl z-10">
            <span className="px-3.5 py-1 rounded-full bg-[#684000] text-[#fea619] font-label-sm text-[11px] font-extrabold uppercase tracking-wider shadow-xs">
              LIMITED OPPORTUNITY
            </span>
            <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold leading-tight text-[#684000]">
              ₹५०,००० पर्यंत Stipend कमावण्याची संधी!
            </h2>
            <p className="font-body-md text-[15px] text-[#684000]/90 leading-relaxed font-medium">
              ट्रेनिंग दरम्यान प्रत्यक्ष प्रोजेक्ट्स आणि क्लायंट डिलिव्हरेबल्सवर काम
              करताना उत्कृष्ट कामगिरी दाखवणाऱ्या प्रशिक्षणार्थींना स्टायपेंड दिला
              जातो.
            </p>
            <span className="font-label-sm text-[12px] text-[#684000]/80">
              * अटी व पात्रता निकष लागू (Performance &amp; attendance based criteria apply).
            </span>
          </div>

          <div className="z-10 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              id="stipend-check-eligibility-btn"
              type="button"
              onClick={onCheckEligibility}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0e1c2f] text-[#eaf1ff] font-label-lg text-[14px] font-extrabold shadow-lg hover:bg-[#213145] transition-all text-center cursor-pointer transform hover:-translate-y-0.5"
            >
              Check Your Eligibility (पात्रता तपासा)
            </button>
          </div>

          {/* Decorative background subtle shapes */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-[#ffddb8]/40 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-white/20 blur-xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
