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
            className="p-6 sm:p-8 rounded-3xl bg-[#eff4ff] flex flex-col gap-6 shadow-sm border border-[#dce9ff]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffdad6] text-[#93000a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  sentiment_dissatisfied
                </span>
              </div>
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#ba1a1a] font-bold">
                  सध्याची अडचण
                </span>
                <h3 className="font-headline-sm text-[20px] font-bold text-[#0b1c30]">
                  The Struggle of Freshers
                </h3>
              </div>
            </div>

            <ul className="flex flex-col gap-3 font-body-md text-[14px] text-[#44474c]">
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/90 shadow-2xs">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                  close
                </span>
                <span>
                  <strong className="text-[#0b1c30]">फक्त पुस्तकी ज्ञान:</strong>{' '}
                  कॉलेजमध्ये मार्केटिंगच्या संकल्पना शिकवल्या जातात, पण खऱ्या
                  कस्टमरशी कसे बोलायचे हे शिकवले जात नाही.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/90 shadow-2xs">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                  close
                </span>
                <span>
                  <strong className="text-[#0b1c30]">कॉल आणि संवादाची भीती:</strong>{' '}
                  अनपेक्षित ग्राहकांना सामोरे जाण्याचा आत्मविश्वास आणि फोनवर
                  व्यावसायिक बोलण्याची सवय नसते.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/90 shadow-2xs">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                  close
                </span>
                <span>
                  <strong className="text-[#0b1c30]">लीड जनरेशन माहित नाही:</strong>{' '}
                  व्यवसायासाठी योग्य ग्राहक (Leads) कसे शोधायचे आणि CRM टूल्स कसे
                  हाताळायचे याचा शून्य अनुभव.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/90 shadow-2xs">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                  close
                </span>
                <span>
                  <strong className="text-[#0b1c30]">'Experience हवा' हा रिजेक्शन:</strong>{' '}
                  प्रत्येक कंपनी १-२ वर्षांचा अनुभव मागते, पण अनुभव मिळवायचा कुठे?
                </span>
              </li>
            </ul>

            <div className="mt-auto p-4 rounded-xl bg-[#ffdad6]/60 text-[#93000a] font-label-md text-[13px] font-semibold flex items-center gap-2">
              <span>⚠️</span>
              <span>परिणाम: महिनोमहिने जॉबलेस राहणे किंवा अत्यंत कमी पगारात तडजोड करणे.</span>
            </div>
          </div>

          {/* What You Gain in this Program */}
          <div
            id="gains-of-program-card"
            className="p-6 sm:p-8 rounded-3xl bg-[#0e1c2f] text-[#eaf1ff] flex flex-col gap-6 shadow-xl border border-[#213145]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fea619] text-[#684000] flex items-center justify-center font-bold shadow-md">
                <span className="material-symbols-outlined text-[24px]">
                  verified
                </span>
              </div>
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#fea619] font-bold">
                  तुमचा फायदा
                </span>
                <h3 className="font-headline-sm text-[20px] font-bold text-white">
                  What You Gain in this Program
                </h3>
              </div>
            </div>

            <ul className="flex flex-col gap-3 font-body-md text-[14px]">
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#213145] text-[#eaf1ff]">
                <span className="material-symbols-outlined text-[#fea619] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong className="text-white">प्रत्यक्ष कस्टमर हँडलिंग:</strong>{' '}
                  पहिल्या महिन्यापासूनच रियल प्रॉडक्ट्स आणि सर्व्हिसेससाठी
                  ग्राहकांशी थेट संवाद.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#213145] text-[#eaf1ff]">
                <span className="material-symbols-outlined text-[#fea619] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong className="text-white">लाईव्ह लीड जनरेशन सिस्टीम:</strong>{' '}
                  Meta Ads, B2B कोल्ड आउटरीच आणि WhatsApp फनेल्सचा वापर करून
                  स्वतः लीड्स आणणे.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#213145] text-[#eaf1ff]">
                <span className="material-symbols-outlined text-[#fea619] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong className="text-white">सेल्स क्लोजिंग व निगोशिएशन:</strong>{' '}
                  किमतीवर घासाघिस करणाऱ्या ग्राहकांना समाधानकारक डील कशी द्यायची
                  याचे तंत्र.
                </span>
              </li>
              <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#213145] text-[#eaf1ff]">
                <span className="material-symbols-outlined text-[#fea619] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong className="text-white">इंटरिव्ह्यू क्रॅक करण्याची खात्री:</strong>{' '}
                  मॉक इंटरिव्ह्यू, कॉर्पोरेट ईमेल रायटिंग आणि प्रूव्हन पोर्टफोलिओ
                  सोबत रेझ्युमे.
                </span>
              </li>
            </ul>

            <div className="mt-auto p-4 rounded-xl bg-[#fea619] text-[#684000] font-label-md text-[13px] font-extrabold flex items-center justify-between shadow-md">
              <span>🚀 निकाल: कंपन्या तुम्हाला प्राधान्याने निवडतील!</span>
              <span className="material-symbols-outlined text-[20px]">
                trending_up
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
