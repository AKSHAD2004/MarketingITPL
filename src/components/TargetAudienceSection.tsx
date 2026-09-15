import React from 'react';
import { TARGET_AUDIENCE } from '../data/programData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="w-full bg-[#e5eeff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Target Candidates
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30] mt-1">
            हा Program कोणासाठी आहे?
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-1">
            जर तुम्ही खालीलपैकी एका गटात मोडत असाल, तर हा प्रोग्रॅम तुमच्यासाठी
            टर्निंग पॉईंट ठरेल:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TARGET_AUDIENCE.map((item) => (
            <div
              key={item.id}
              id={`target-audience-${item.id}`}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col gap-2.5 border border-[#dce9ff]/60"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ffddb8] flex items-center justify-center text-[#653e00] font-bold text-[16px]">
                {item.id}
              </div>
              <h3 className="font-title-lg text-[18px] font-bold text-[#0b1c30]">
                {item.title}
              </h3>
              <p className="font-body-sm text-[13.5px] text-[#44474c] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
