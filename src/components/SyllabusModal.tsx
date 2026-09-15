import React from 'react';
import { CURRICULUM_MODULES, HERO_DATA } from '../data/programData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappSyllabusUrl = `https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent(
    'Hello, मला Marketing Career Launch चा सविस्तर Syllabus PDF WhatsApp वर पाठवा.'
  )}`;

  return (
    <div
      id="syllabus-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="syllabus-modal-card"
        className="bg-white w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-[#dce9ff] max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e5eeff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0e1c2f] flex items-center justify-center text-[#fea619] font-bold text-[18px]">
              M
            </div>
            <div>
              <span className="font-label-sm text-[11px] text-[#855300] font-bold uppercase">
                Official Syllabus Document
              </span>
              <h3 className="font-title-lg text-[18px] font-bold text-[#0b1c30]">
                ६ महिन्यांचे Practical Marketing Training अभ्यासक्रम
              </h3>
            </div>
          </div>
          <button
            id="close-syllabus-modal-btn"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#0b1c30] flex items-center justify-center hover:bg-[#dce9ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 flex flex-col gap-6 pr-2">
          {/* Overview Note */}
          <div className="p-4 rounded-2xl bg-[#e5eeff] text-[#0b1c30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-label-md text-[13px] font-bold">
                प्रोग्राम कालावधी: ६ महिने (Hybrid: Online + Field Work)
              </p>
              <p className="font-body-sm text-[12px] text-[#44474c] mt-0.5">
                फी: १००% मोफत • स्टायपेंड: कामगिरीनुसार ₹५०,००० पर्यंत
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-white text-[#0b1c30] font-label-md text-[12px] font-bold border border-[#dce9ff] hover:bg-[#eff4ff] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">
                  print
                </span>
                <span>Print / Save PDF</span>
              </button>
              <a
                href={whatsappSyllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#213145] text-white font-label-md text-[12px] font-bold hover:bg-[#0e1c2f] transition-colors flex items-center gap-1.5 border border-[#25D366]/40 hover:border-[#25D366]"
              >
                <WhatsAppIcon size={16} animated={true} />
                <span>Get on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Modules List */}
          <div className="flex flex-col gap-4">
            {CURRICULUM_MODULES.map((mod) => (
              <div
                key={mod.id}
                className="p-4 rounded-xl border border-[#e5eeff] bg-[#f8f9ff]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#0e1c2f] text-[#fea619] font-label-sm text-[11px] font-bold">
                    Module {mod.number}
                  </span>
                  <h4 className="font-title-md text-[15px] font-bold text-[#0b1c30]">
                    {mod.title}
                  </h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {mod.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#44474c]"
                    >
                      <span className="material-symbols-outlined text-[#855300] text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="p-4 rounded-xl bg-white border border-[#dce9ff]">
            <h4 className="font-label-md text-[13px] font-bold text-[#0b1c30] mb-2 uppercase tracking-wider text-[#855300]">
              हाताळली जाणारी सॉफ्टवेअर आणि टूल्स (Tools You Will Master):
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Meta Ads Manager',
                'Facebook & Instagram Lead Forms',
                'WhatsApp Business API',
                'CRM Tools (HubSpot / LeadSquared)',
                'Canva For Ads',
                'Google Business Profile (Local SEO)',
                'Daily Sales Reporting (DSR)',
                'LinkedIn Outreach',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] font-semibold border border-[#dce9ff]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#e5eeff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#75777d]">
            * अभ्यासक्रम वेळोवेळी इंडस्ट्रीच्या गरजेनुसार अपडेट केला जातो.
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#dce9ff] text-xs font-bold text-[#44474c] hover:bg-[#eff4ff] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onApply();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#fea619] text-[#684000] font-label-md text-[13px] font-bold shadow-sm hover:bg-[#ffddb8] transition-colors cursor-pointer"
            >
              Apply For This Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
