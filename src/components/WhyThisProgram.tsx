import React from 'react';

export const WhyThisProgram: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9ff] py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#855300] font-bold">
            Transformation Focus
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30] leading-tight mt-1">
            Certificate मिळवण्यासाठी नाही… <br className="hidden sm:inline" />
            Career घडवण्यासाठी हा Program आहे! 🚀
          </h2>
          <p className="font-body-md text-[15px] text-[#44474c] mt-2">
            डिग्री असूनही नोकरी मिळत नाही कारण कंपन्यांना 'प्रॅक्टिकल काम' येणारे
            लोक हवे आहेत. फरक स्वतः तपासा:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* The Struggle of Freshers */}
          <div
            id="struggle-of-freshers-card"
            className="p-6 sm:p-8 rounded-3xl bg-[#eff4ff] flex flex-col gap-6 shadow-sm border border-[#dce9ff] transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#ffdad6] text-[#93000a] flex items-center justify-center font-bold shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  sentiment_dissatisfied
                </span>
              </div>
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#ba1a1a] font-bold">
                  सध्याची अडचण
                </span>
                <h3 className="font-headline-sm text-[21px] sm:text-[23px] font-bold text-[#0b1c30] tracking-tight">
                  The Struggle of Freshers
                </h3>
              </div>
            </div>

            <ul className="flex flex-col gap-3 font-body-md text-[14px] sm:text-[14.5px] text-[#44474c]">
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#e2edff] shadow-xs transition-all duration-200 hover:bg-white hover:border-[#ffdad6] hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#ffdad6]/70 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </div>
                <span>
                  <strong className="text-[#0b1c30]">फक्त पुस्तकी ज्ञान:</strong>{' '}
                  कॉलेजमध्ये मार्केटिंगच्या संकल्पना शिकवल्या जातात, पण खऱ्या
                  कस्टमरशी कसे बोलायचे हे शिकवले जात नाही.
                </span>
              </li>
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#e2edff] shadow-xs transition-all duration-200 hover:bg-white hover:border-[#ffdad6] hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#ffdad6]/70 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </div>
                <span>
                  <strong className="text-[#0b1c30]">कॉल आणि संवादाची भीती:</strong>{' '}
                  अनपेक्षित ग्राहकांना सामोरे जाण्याचा आत्मविश्वास आणि फोनवर
                  व्यावसायिक बोलण्याची सवय नसते.
                </span>
              </li>
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#e2edff] shadow-xs transition-all duration-200 hover:bg-white hover:border-[#ffdad6] hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#ffdad6]/70 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </div>
                <span>
                  <strong className="text-[#0b1c30]">लीड जनरेशन माहित नाही:</strong>{' '}
                  व्यवसायासाठी योग्य ग्राहक (Leads) कसे शोधायचे आणि CRM टूल्स कसे
                  हाताळायचे याचा शून्य अनुभव.
                </span>
              </li>
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#e2edff] shadow-xs transition-all duration-200 hover:bg-white hover:border-[#ffdad6] hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#ffdad6]/70 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </div>
                <span>
                  <strong className="text-[#0b1c30]">'Experience हवा' हा रिजेक्शन:</strong>{' '}
                  प्रत्येक कंपनी १-२ वर्षांचा अनुभव मागते, पण अनुभव मिळवायचा कुठे?
                </span>
              </li>
            </ul>

            <div className="mt-auto p-4 rounded-2xl bg-[#ffdad6]/70 text-[#93000a] font-label-md text-[13px] font-bold flex items-center gap-2 border border-[#ffb4ab]/40">
              <span className="text-[16px]">⚠️</span>
              <span>परिणाम: महिनोमहिने जॉबलेस राहणे किंवा अत्यंत कमी पगारात तडजोड करणे.</span>
            </div>
          </div>

          {/* What You Gain in this Program */}
          <div
            id="gains-of-program-card"
            className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1829] via-[#10223a] to-[#07111e] text-[#eaf1ff] flex flex-col gap-6 shadow-[0_12px_35px_rgba(10,25,50,0.5)] border border-[#fea619]/35 transition-all duration-300 hover:border-[#fea619]/60 hover:shadow-[0_16px_45px_rgba(254,166,25,0.2)]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#22288D]/30 rounded-full blur-2xl pointer-events-none -z-0" />

            {/* Moving Sheen Effect */}
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none animate-card-sheen z-0" />

            {/* Header / Badge Area */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#ffb733] to-[#fea619] text-[#553300] flex items-center justify-center font-bold shadow-[0_4px_16px_rgba(254,166,25,0.4)] animate-gold-pulse shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  verified
                </span>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 font-label-sm text-[11px] uppercase tracking-wider text-[#fea619] font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-[#fea619] animate-ping inline-block" />
                  तुमचा फायदा
                </span>
                <h3 className="font-headline-sm text-[21px] sm:text-[23px] font-extrabold text-white tracking-tight">
                  What You Gain in this Program
                </h3>
              </div>
            </div>

            {/* Interactive Feature Cards */}
            <ul className="relative z-10 flex flex-col gap-3 font-body-md text-[14px] sm:text-[14.5px]">
              {/* Item 1 */}
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#16273e]/90 hover:bg-[#1d3350] border border-[#263e5e] hover:border-[#fea619]/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <div className="w-7 h-7 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#fea619] group-hover:text-[#553300] transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                </div>
                <span className="text-[#e1ebfa] leading-relaxed">
                  <strong className="text-white font-bold group-hover:text-[#ffca66] transition-colors">प्रत्यक्ष कस्टमर हँडलिंग:</strong>{' '}
                  पहिल्या महिन्यापासूनच रियल प्रॉडक्ट्स आणि सर्व्हिसेससाठी
                  ग्राहकांशी थेट संवाद.
                </span>
              </li>

              {/* Item 2 */}
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#16273e]/90 hover:bg-[#1d3350] border border-[#263e5e] hover:border-[#fea619]/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <div className="w-7 h-7 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#fea619] group-hover:text-[#553300] transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                </div>
                <span className="text-[#e1ebfa] leading-relaxed">
                  <strong className="text-white font-bold group-hover:text-[#ffca66] transition-colors">लाईव्ह लीड जनरेशन सिस्टीम:</strong>{' '}
                  Meta Ads, B2B कोल्ड आउटरीच आणि WhatsApp फनेल्सचा वापर करून
                  स्वतः लीड्स आणणे.
                </span>
              </li>

              {/* Item 3 */}
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#16273e]/90 hover:bg-[#1d3350] border border-[#263e5e] hover:border-[#fea619]/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <div className="w-7 h-7 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#fea619] group-hover:text-[#553300] transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                </div>
                <span className="text-[#e1ebfa] leading-relaxed">
                  <strong className="text-white font-bold group-hover:text-[#ffca66] transition-colors">सेल्स क्लोजिंग व निगोशिएशन:</strong>{' '}
                  किमतीवर घासाघिस करणाऱ्या ग्राहकांना समाधानकारक डील कशी द्यायची
                  याचे तंत्र.
                </span>
              </li>

              {/* Item 4 */}
              <li className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#16273e]/90 hover:bg-[#1d3350] border border-[#263e5e] hover:border-[#fea619]/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <div className="w-7 h-7 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#fea619] group-hover:text-[#553300] transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                </div>
                <span className="text-[#e1ebfa] leading-relaxed">
                  <strong className="text-white font-bold group-hover:text-[#ffca66] transition-colors">इंटरिव्ह्यू क्रॅक करण्याची खात्री:</strong>{' '}
                  मॉक इंटरिव्ह्यू, कॉर्पोरेट ईमेल रायटिंग आणि प्रूव्हन पोर्टफोलिओ
                  सोबत रेझ्युमे.
                </span>
              </li>
            </ul>

            {/* Dynamic Result Footer Strip */}
            <div className="relative z-10 mt-auto p-4 rounded-2xl bg-gradient-to-r from-[#fea619] via-[#ffb944] to-[#fea619] text-[#4d2d00] font-label-md text-[13.5px] font-extrabold flex items-center justify-between shadow-[0_6px_22px_rgba(254,166,25,0.4)] transition-transform duration-200 hover:scale-[1.02]">
              <span className="flex items-center gap-2">
                <span className="text-[17px] animate-badge-bounce">🚀</span>
                <span>निकाल: कंपन्या तुम्हाला प्राधान्याने निवडतील!</span>
              </span>
              <span className="material-symbols-outlined text-[22px] animate-bounce">
                trending_up
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
