import React from 'react';

export const RealWorldExperience: React.FC = () => {
  const spotlightItems = [
    {
      id: 'spotlight-1',
      metric: 'Field Metric #01',
      icon: 'people',
      title: 'REAL CUSTOMERS',
      desc: 'डमी प्रॅक्टिस नाही! खऱ्या ग्राहकांशी प्रत्यक्ष संवाद साधून त्यांचे समाधान करणे.',
      badge: '100% Live Interaction',
    },
    {
      id: 'spotlight-2',
      metric: 'Field Metric #02',
      icon: 'contact_phone',
      title: 'REAL LEADS',
      desc: 'वेगवेगळ्या बिझनेसेससाठी क्वालिफाइड संभाव्य ग्राहक शोधणे व पाइपलाइन भरणे.',
      badge: 'Multi-Channel Generation',
    },
    {
      id: 'spotlight-3',
      metric: 'Field Metric #03',
      icon: 'paid',
      title: 'REAL SALES',
      desc: 'ऑर्डर घेणे, पेमेंट गोळा करणे आणि क्लोजिंगचा प्रत्यक्ष अनुभव प्राप्त करणे.',
      badge: 'Live Revenue Impact',
    },
    {
      id: 'spotlight-4',
      metric: 'Field Metric #04',
      icon: 'monitoring',
      title: 'REAL TARGETS',
      desc: 'आठवड्याचे उद्दिष्ट पूर्ण करून कॉर्पोरेट परफॉरमन्सच्या दबावाला सामोरे जाणे.',
      badge: 'Weekly Milestone Reviews',
    },
  ];

  return (
    <section
      id="real-world-experience"
      className="w-full bg-[#0e1c2f] text-[#eaf1ff] py-10 sm:py-16 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#fea619] font-bold">
            Practical Immersion
          </span>
          <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-white mt-1">
            Learn By Doing, Not Just Watching
          </h2>
          <p className="font-body-md text-[15px] text-[#d3e4fe] mt-2">
            आमच्या प्रशिक्षणार्थींना प्रत्यक्ष मैदानात उतरवून शिकवले जाते, जेणेकरून
            पहिल्याच दिवसापासून कामाचा खरा अनुभव मिळतो.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="p-6 rounded-2xl bg-[#213145] flex flex-col gap-3 shadow-md hover:-translate-y-1 transition-all duration-200 border border-white/5 hover:border-[#fea619]/40"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fea619] text-[#684000] flex items-center justify-center font-bold shadow-sm">
                <span className="material-symbols-outlined text-[28px]">
                  {item.icon}
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-[#fea619] font-extrabold uppercase tracking-wide">
                {item.metric}
              </span>
              <h3 className="font-title-lg text-[18px] font-bold text-white">
                {item.title}
              </h3>
              <p className="font-body-sm text-[13px] text-[#d3e4fe] leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-3 border-t border-white/10 font-label-md text-[12px] font-bold text-[#ffddb8]">
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
