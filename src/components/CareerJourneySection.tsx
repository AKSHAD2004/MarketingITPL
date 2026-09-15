import React from 'react';
import { CAREER_STEPS } from '../data/programData';

export const CareerJourneySection: React.FC = () => {
  return (
    <section className="w-full bg-[#e5eeff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Your Success Path
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30]">
            तुमचा ८ टप्प्यांचा यशस्वी प्रवास
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-1">
            प्रवेशापासून ते पहिल्या ऑफर लेटरपर्यंत प्रत्येक टप्पा असा घडेल:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAREER_STEPS.map((item) => {
            const isFinalStep = item.step === 8;
            const isMidStep = item.step >= 5 && item.step <= 7;

            return (
              <div
                key={item.step}
                id={`journey-step-${item.step}`}
                className={`p-5 rounded-2xl shadow-sm flex flex-col gap-2.5 transition-all duration-200 hover:-translate-y-1 ${
                  isFinalStep
                    ? 'bg-[#0e1c2f] text-white shadow-lg border border-[#213145]'
                    : 'bg-white border border-[#dce9ff]/70 text-[#0b1c30]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full font-label-md text-[13px] font-bold flex items-center justify-center shrink-0 ${
                    isFinalStep
                      ? 'bg-[#fea619] text-[#684000]'
                      : isMidStep
                      ? 'bg-[#fea619] text-[#684000]'
                      : 'bg-[#0e1c2f] text-[#fea619]'
                  }`}
                >
                  {item.step}
                </div>
                <h3
                  className={`font-title-md text-[16px] font-bold ${
                    isFinalStep ? 'text-white' : 'text-[#0b1c30]'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-body-sm text-[13.5px] leading-relaxed ${
                    isFinalStep ? 'text-[#d3e4fe]' : 'text-[#44474c]'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
