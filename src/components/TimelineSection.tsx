import React from 'react';
import { TIMELINE_MONTHS } from '../data/programData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="program" className="w-full bg-[#e5eeff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Step-By-Step Growth
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30]">
            6 Months. Practical Skills. Real Experience.
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-1">
            प्रत्येक महिना तुम्हाला एका पायरीने कॉर्पोरेट रेडी बनवणारा एक ठोस
            रोडमॅप:
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          {TIMELINE_MONTHS.map((item) => (
            <div
              key={item.number}
              id={`timeline-month-${item.number.toLowerCase()}`}
              className="p-4 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative group hover:bg-[#0e1c2f] hover:text-white transition-all duration-300 border border-[#dce9ff]/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded font-label-sm text-[11px] font-bold bg-[#fea619] text-[#684000] group-hover:bg-[#fea619] group-hover:text-[#684000]">
                  {item.number}
                </span>
                <span className="material-symbols-outlined text-[22px] text-[#855300] group-hover:text-[#fea619] transition-colors">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="font-title-md text-[15px] font-bold text-[#0b1c30] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-sm text-[13px] text-[#44474c] group-hover:text-[#d3e4fe] mt-1.5 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
              <span className="mt-4 font-label-sm text-[11px] text-[#855300] group-hover:text-[#fea619] font-bold uppercase tracking-wide transition-colors">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
