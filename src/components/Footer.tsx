import React from 'react';
import { HERO_DATA } from '../data/programData';
import { CompanyLogo } from './CompanyLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="contact"
      className="w-full bg-white py-12 sm:py-16 mb-16 md:mb-0 shadow-[0_-1px_12px_rgba(11,28,48,0.03)] border-t border-[#e5eeff]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand overview */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              <div className="bg-[#22288D] px-3.5 py-2 rounded-xl inline-flex items-center shadow-sm">
                <CompanyLogo className="h-10 sm:h-11 md:h-12 w-auto" />
              </div>
            </div>

            <p className="font-headline-sm text-[20px] font-bold text-[#22288D]">
              Skill Today. Success Tomorrow.
            </p>

            <p className="font-body-md text-[14px] text-[#44474c] max-w-md leading-relaxed">
              ६ महिन्यांचे प्रॅक्टिकल आणि करिअर-ओरिएंटेड मोफत मार्केटिंग
              ट्रेनिंग. Live Projects, Resume Building, Interview Preparation आणि
              100% Placement Assistance सह इंडस्ट्री रेडी व्हा.
            </p>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-title-md text-[16px] font-bold text-[#0b1c30]">
              Quick Navigation
            </span>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Home
              </a>
              <a
                href="#program"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('program');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Program Overview
              </a>
              <a
                href="#what-youll-learn"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('what-youll-learn');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Curriculum &amp; Practical Modules
              </a>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('benefits');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Key Benefits
              </a>
              <a
                href="#career-opportunities"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('career-opportunities');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Career Opportunities
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('faq');
                }}
                className="font-body-sm text-[14px] text-[#44474c] hover:text-[#0b1c30] transition-colors"
              >
                Frequently Asked Questions
              </a>
            </nav>
          </div>

          {/* Col 3: Contact & Admissions */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-title-md text-[16px] font-bold text-[#0b1c30]">
              Contact &amp; Admissions
            </span>
            <div className="flex flex-col gap-3 font-body-sm text-[14px] text-[#44474c]">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0">
                  call
                </span>
                <span>
                  Direct Helpline:{' '}
                  <a
                    className="font-semibold text-[#0b1c30] hover:text-[#855300]"
                    href={`tel:${HERO_DATA.phoneNumber}`}
                  >
                    {HERO_DATA.phoneNumber}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon size={20} animated={true} />
                <span>
                  WhatsApp Admission Desk:{' '}
                  <a
                    className="font-semibold text-[#0b1c30] hover:text-[#25D366] transition-colors"
                    href={`https://wa.me/${HERO_DATA.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 {HERO_DATA.phoneNumber}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0">
                  location_on
                </span>
                <span>Maharashtra, India (Online &amp; Practical Offline Hybrid)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px] shrink-0">
                  schedule
                </span>
                <span>Mon - Sat: 9:30 AM to 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e5eeff] flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-[13px] text-[#44474c]">
          <p>© 2025 Marketing Career Launch Program. All rights reserved.</p>
          <p className="text-[#855300] font-semibold">
            मोफत ६ महिने प्रॅक्टिकल करिअर ट्रान्सफॉर्मेशन उपक्रम
          </p>
        </div>
      </div>
    </footer>
  );
};
