import React, { useState } from 'react';
import { CURRICULUM_MODULES } from '../data/programData';

interface CurriculumSectionProps {
  onOpenSyllabusModal: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onOpenSyllabusModal,
}) => {
  // All opened by default or individual toggle
  const [openModuleIds, setOpenModuleIds] = useState<string[]>([
    'mod-1',
    'mod-2',
    'mod-3',
    'mod-4',
    'mod-5',
    'mod-6',
    'mod-7',
  ]);

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (openModuleIds.length === CURRICULUM_MODULES.length) {
      setOpenModuleIds([]);
    } else {
      setOpenModuleIds(CURRICULUM_MODULES.map((m) => m.id));
    }
  };

  return (
    <section
      id="what-youll-learn"
      className="w-full bg-[#f8f9ff] py-10 sm:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
              Deep Dive Syllabus
            </span>
            <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30]">
              अभ्यासक्रम: काय शिकणार? (Curriculum)
            </h2>
            <p className="font-body-md text-[15px] text-[#44474c] mt-1 max-w-xl">
              ७ सखोल मॉड्युल्स जे थिअरी आणि प्रॅक्टिकलचे १००% परिपूर्ण मिश्रण
              आहेत. प्रत्येक विषयावर क्लिक करून पाहा:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="curriculum-toggle-all-btn"
              type="button"
              onClick={toggleAll}
              className="px-3.5 py-2.5 rounded-xl border border-[#dce9ff] bg-white font-label-md text-[12px] font-bold text-[#44474c] hover:bg-[#e5eeff] hover:text-[#0b1c30] transition-colors cursor-pointer"
            >
              {openModuleIds.length === CURRICULUM_MODULES.length
                ? 'Collapse All'
                : 'Expand All'}
            </button>
            <button
              id="curriculum-download-pdf-btn"
              type="button"
              onClick={onOpenSyllabusModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e5eeff] font-label-lg text-[14px] font-bold text-[#0b1c30] hover:bg-[#dce9ff] transition-colors cursor-pointer"
            >
              <span>Download Syllabus PDF</span>
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
            </button>
          </div>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {CURRICULUM_MODULES.map((module) => {
            const isOpen = openModuleIds.includes(module.id);
            const isFullWidth = module.id === 'mod-7';

            return (
              <div
                key={module.id}
                id={`curriculum-card-${module.id}`}
                className={`rounded-2xl bg-white shadow-sm overflow-hidden border border-[#e5eeff] transition-shadow duration-200 ${
                  isFullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none bg-[#eff4ff]/50 hover:bg-[#eff4ff] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg font-label-md text-[13px] font-bold flex items-center justify-center shrink-0 ${
                        module.id === 'mod-7'
                          ? 'bg-[#fea619] text-[#684000]'
                          : 'bg-[#0e1c2f] text-[#fea619]'
                      }`}
                    >
                      {module.number}
                    </span>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#855300] font-bold uppercase">
                        {module.tag}
                      </span>
                      <h3 className="font-title-md text-[16px] font-bold text-[#0b1c30]">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`material-symbols-outlined transition-transform duration-200 text-[#44474c] ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-white">
                    {module.id === 'mod-7' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        <ul className="flex flex-col gap-2 font-body-sm text-[13.5px] text-[#44474c]">
                          {module.points.slice(0, 2).map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-[#855300] text-[18px] shrink-0 mt-0.5">
                                check
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="flex flex-col gap-2 font-body-sm text-[13.5px] text-[#44474c]">
                          {module.points.slice(2).map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-[#855300] text-[18px] shrink-0 mt-0.5">
                                check
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul className="flex flex-col gap-2.5 font-body-sm text-[13.5px] text-[#44474c] pt-3">
                        {module.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-[#855300] text-[18px] shrink-0 mt-0.5">
                              check
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
