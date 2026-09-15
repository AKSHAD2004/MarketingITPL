import React from 'react';
import { HERO_DATA } from '../data/programData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  const whatsappUrl = `https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent(
    HERO_DATA.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f8f9ff] py-10 sm:py-16 lg:py-16"
    >
      {/* Ambient glowing backdrop blurs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#fea619]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-[#dce9ff]/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Hero Text Content (7 cols desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Urgency Badge */}
            <div
              id="hero-urgency-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdad6] text-[#93000a] font-label-md text-[12px] font-bold shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
              <span>🔥 Limited Seats Available • 100% FREE</span>
            </div>

            {/* Bilingual Problem-Solution Hook */}
            <div className="flex flex-col gap-2">
              <p className="font-headline-sm text-[22px] font-extrabold text-[#0b1c30] tracking-tight">
                Job शोधताय? Experience नाही म्हणून अडचण येतेय?
              </p>
              <div className="inline-block">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#ffddb8] text-[#653e00] font-label-lg text-[14px] font-extrabold tracking-wide uppercase shadow-sm">
                  Experience मिळवा. Skills शिका. Career सुरू करा.
                </span>
              </div>
              <h1 className="font-display-mobile sm:font-display text-[34px] sm:text-[54px] font-extrabold text-[#0e1c2f] tracking-tight leading-[1.14] sm:leading-[1.1] mt-2">
                ६ महिन्यांचे{' '}
                <span className="font-black animate-text-glow-shimmer tracking-tight">
                  FREE Practical
                </span>{' '}
                Marketing Training
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="font-body-lg text-[17px] sm:text-[18px] text-[#44474c] max-w-2xl leading-relaxed">
              फक्त Theory नाही!{' '}
              <strong className="text-[#0b1c30]">Real Customers</strong>,{' '}
              <strong className="text-[#0b1c30]">Real Leads</strong> आणि{' '}
              <strong className="text-[#0b1c30]">Real Sales</strong> वर प्रत्यक्ष
              काम करण्याचा अनुभव मिळवा आणि आत्मविश्वासाने कॉर्पोरेट जॉब मिळवा.
            </p>

            {/* Dual Conversion Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-apply-now-btn"
                type="button"
                onClick={onApplyClick}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fea619] text-[#684000] font-label-lg text-[14px] font-extrabold shadow-[0_10px_24px_-4px_rgba(245,158,11,0.45)] hover:bg-[#ffddb8] hover:text-[#653e00] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>APPLY NOW (मोफत प्रवेश)</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <a
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#213145] text-[#eaf1ff] font-label-lg text-[14px] font-bold shadow-md hover:bg-[#0e1c2f] transition-all border border-[#25D366]/40 hover:border-[#25D366]"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon size={22} animated={true} />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Feature Bullets Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
              <div className="flex items-center gap-1.5 font-label-md text-[12px] text-[#0b1c30] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#855300]">
                  ✓
                </span>
                <span>100% FREE Training</span>
              </div>
              <div className="flex items-center gap-1.5 font-label-md text-[12px] text-[#0b1c30] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#855300]">
                  ✓
                </span>
                <span>Practical Field Exp</span>
              </div>
              <div className="flex items-center gap-1.5 font-label-md text-[12px] text-[#0b1c30] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#855300]">
                  ✓
                </span>
                <span>Govt-Recognized Cert</span>
              </div>
              <div className="flex items-center gap-1.5 font-label-md text-[12px] text-[#0b1c30] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#855300]">
                  ✓
                </span>
                <span>100% Placement Desk</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase Frame (5 cols desktop) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Glassmorphic Elevated Container */}
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-xl border border-[#dce9ff]/60">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] w-full bg-[#eff4ff]">
                <img
                  id="hero-main-photo"
                  alt="Marketing Career Student at work with analytics board"
                  className="w-full h-full object-cover"
                  src={HERO_DATA.heroImageUrl}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/80 via-transparent to-transparent"></div>

                {/* Bottom Inner Banner inside photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-label-sm text-[11px] text-[#855300] font-bold uppercase tracking-wider">
                        Batches In Progress
                      </p>
                      <p className="font-title-md text-[16px] font-bold text-[#0b1c30]">
                        500+ Freshers Placed
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#fea619]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating interactive micro-badges */}
              <div className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-xl bg-[#0e1c2f] text-[#fea619] font-label-md text-[12px] font-bold shadow-lg flex items-center gap-1.5 animate-bounce">
                <span className="material-symbols-outlined text-[16px]">
                  target
                </span>
                <span>Real Leads</span>
              </div>
              <div className="absolute top-1/4 -left-3 px-3 py-1.5 rounded-xl bg-white text-[#0b1c30] font-label-md text-[12px] font-bold shadow-lg flex items-center gap-1.5 border border-[#e5eeff]">
                <span className="material-symbols-outlined text-[#855300] text-[16px]">
                  point_of_sale
                </span>
                <span>Sales Execution</span>
              </div>
              <div className="absolute bottom-20 -right-3 px-3 py-1.5 rounded-xl bg-white text-[#0b1c30] font-label-md text-[12px] font-bold shadow-lg flex items-center gap-1.5 border border-[#e5eeff]">
                <span className="material-symbols-outlined text-[#855300] text-[16px]">
                  trending_up
                </span>
                <span>Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
