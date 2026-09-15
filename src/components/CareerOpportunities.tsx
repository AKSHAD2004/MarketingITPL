import React, { useState } from 'react';
import { CAREER_ROLES } from '../data/programData';

export const CareerOpportunities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'marketing' | 'sales' | 'growth'>('all');

  const filteredRoles =
    activeTab === 'all'
      ? CAREER_ROLES
      : CAREER_ROLES.filter((role) => role.category === activeTab);

  return (
    <section id="career-opportunities" className="w-full bg-[#f8f9ff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Career Pathways
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30] mt-1">
            Training नंतर तुम्ही काय करू शकता?
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-1">
            हे ६ महिने पूर्ण केल्यावर तुम्ही खालील ८ कॉर्पोरेट भूमिकांसाठी त्वरित
            पात्र व्हाल:
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All 8 Roles' },
              { id: 'marketing', label: 'Marketing' },
              { id: 'sales', label: 'Sales & Closing' },
              { id: 'growth', label: 'Business Development (BDE)' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`career-tab-${tab.id}`}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0e1c2f] text-white shadow-sm'
                    : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              id={role.id}
              className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col gap-2 border border-[#e5eeff] hover:border-[#fea619]/50"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#855300]">
                <span className="material-symbols-outlined text-[22px]">
                  {role.icon}
                </span>
              </div>
              <h3 className="font-title-md text-[16px] font-bold text-[#0b1c30]">
                {role.title}
              </h3>
              <p className="font-body-sm text-[13.5px] text-[#44474c] leading-relaxed">
                {role.description}
              </p>
              <span className="mt-auto pt-3 border-t border-[#f8f9ff] font-label-sm text-[11px] text-[#855300] font-bold">
                {role.keySkill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
