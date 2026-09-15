import React from 'react';
import { BENEFITS } from '../data/programData';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="w-full bg-[#e5eeff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Key Program Pillars
          </span>
          <h2 className="font-headline-md text-[26px] sm:text-[28px] font-extrabold text-[#0b1c30] mt-1">
            ६ मोठे फायदे जे तुमचे करिअर घडवतील
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              id={benefit.id}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col gap-3 group border border-transparent hover:border-[#fea619]/40"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#855300] group-hover:bg-[#fea619] group-hover:text-[#684000] transition-colors duration-200">
                <span className="material-symbols-outlined text-[28px]">
                  {benefit.icon}
                </span>
              </div>
              <div>
                <h3 className="font-title-lg text-[18px] font-bold text-[#0b1c30]">
                  {benefit.title}
                </h3>
                <p className="font-body-sm text-[14px] text-[#44474c] mt-1 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <span className="mt-auto pt-2 font-label-sm text-[11px] font-bold text-[#855300] uppercase tracking-wide">
                {benefit.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
