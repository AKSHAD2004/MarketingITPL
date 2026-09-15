import React, { useState } from 'react';
import { FAQS, TESTIMONIALS } from '../data/programData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([1]); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: number) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = searchQuery.trim()
    ? FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : FAQS;

  return (
    <section id="faq" className="w-full bg-[#f8f9ff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Real Stories
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30] mt-1">
            प्रशिक्षणार्थींचे अनुभव (Participant Reviews)
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-1">
            ज्यांनी हा प्रॅक्टिकल प्रवास अनुभवला त्यांच्याच शब्दांत ऐका:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              id={`testimonial-card-${idx + 1}`}
              className="p-6 sm:p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-5 border border-[#e5eeff]"
            >
              <div className="flex items-center gap-1 text-[#fea619]">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="font-body-md text-[14.5px] text-[#44474c] italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#f8f9ff]">
                <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center font-bold text-[#0b1c30] text-[14px]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-title-md text-[15px] font-bold text-[#0b1c30]">
                    {t.name}
                  </p>
                  <p className="font-body-sm text-[13px] text-[#855300] font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-4">
          <div className="text-center mb-8">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-headline-md text-[26px] sm:text-[28px] font-extrabold text-[#0b1c30] mt-1">
              वारंवार विचारले जाणारे प्रश्न (FAQ)
            </h2>

            {/* Quick search input */}
            <div className="mt-4 relative max-w-md mx-auto">
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="प्रश्नांमध्ये शोधा (Search FAQ)..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-white border border-[#dce9ff] text-[14px] text-[#0b1c30] placeholder-[#75777d] focus:outline-none focus:ring-2 focus:ring-[#855300]"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[20px] text-[#75777d]">
                search
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#75777d] hover:text-[#0b1c30] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="rounded-xl bg-white shadow-sm overflow-hidden border border-[#e5eeff] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4.5 flex items-center justify-between text-left focus:outline-none hover:bg-[#eff4ff] transition-colors cursor-pointer"
                  >
                    <span className="font-title-md text-[15px] sm:text-[16px] font-bold text-[#0b1c30] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined transition-transform duration-200 text-[#44474c] shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4.5 pt-0 text-[#44474c] font-body-sm text-[14px] leading-relaxed border-t border-[#f8f9ff]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <p className="text-center text-[#75777d] py-6">
                कोणतेही प्रश्न सापडले नाहीत. कृपया वेगळा शब्द वापरून शोधा.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
