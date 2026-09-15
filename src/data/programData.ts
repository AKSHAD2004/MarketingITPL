import {
  Benefit,
  CareerRole,
  CurriculumModule,
  FAQItem,
  TargetAudience,
  Testimonial,
  TimelineMonth,
} from '../types';

export const HERO_DATA = {
  phoneNumber: '8055514368',
  whatsappNumber: '918055514368',
  whatsappMessage:
    'Hello, मला Marketing Career Launch Program बद्दल माहिती हवी आहे. मला FREE Practical Marketing Training साठी apply करायचे आहे.',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBH7qKHBOTTA4JBCSE8w-7lbRfVsxZkyF1Aof8iTT3WwKcjlIxsThWn2nesE7iLx74avSw5R4UfeELprK0AbAPUGaKXGQphlx58F_DjfSaMi2sEbfTlM3p0uinVc1uXf-EqYWldk2dQlkilt0sDj7PN28tw749Xp1x25GIuj5kXc0KBhHjc7ingGyinRHKqVBuUk5zuVLgvHgJg7dHkgjx1FhO97s2rBLU4sXN3qBqojFLSpvuC9wU8BA',
  heroImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYXbCzCDLHp_DWwuvewZS_szohu4_x_6_W8qxbvHy0PBturEfB1sax9NSGUkwgTAv_iLcoRXFJDAIjEAhcu2yoToFFMPqWbAjUx5chKS8m32-w9qGAIM7fxNuULtx6q0-7YRqVRrlsWAUddN-z_MOs5ufe_h4L4BEYSBgV2vmWpEG6bkdNl5TpihUqkQzqrleCiAoeJDzxZOH_fTxgjqmiXakLp07rWaque2GCfCjG6n_KwDwnj16Sg',
};

export const BENEFITS: Benefit[] = [
  {
    id: 'benefit-1',
    icon: 'school',
    title: '100% FREE Training',
    description:
      'शून्य फी! आर्थिक अडचणींमुळे कोणीही शिक्षणापासून वंचित राहू नये यासाठी हा प्रॅक्टिकल उपक्रम मोफत आहे.',
    badge: 'Zero Tuition Fees',
  },
  {
    id: 'benefit-2',
    icon: 'payments',
    title: 'Up to ₹50,000 Stipend*',
    description:
      'उत्कृष्ट कामगिरी करणाऱ्या प्रशिक्षणार्थींना प्रॅक्टिकल प्रोजेक्ट्स दरम्यान भरघोस स्टायपेंड कमावण्याची संधी.',
    badge: 'Performance Criteria Apply*',
  },
  {
    id: 'benefit-3',
    icon: 'verified',
    title: 'Industry Certificate',
    description:
      'ट्रेनिंग पूर्ण केल्यावर कॉर्पोरेटमध्ये प्रमाणित असणारे अधिकृत Marketing Practitioner प्रमाणपत्र प्रदान केले जाते.',
    badge: 'Valuable Credential',
  },
  {
    id: 'benefit-4',
    icon: 'work',
    title: 'Placement Guarantee*',
    description:
      'रेझ्युमे बनवण्यापासून ते नामांकित कंपन्यांमध्ये थेट मुलाखत घडवून आणण्यापर्यंत संपूर्ण करिअर सपोर्ट.',
    badge: '100% Career Assistance',
  },
  {
    id: 'benefit-5',
    icon: 'group',
    title: 'Real Customers Handling',
    description:
      'खऱ्या ग्राहकांशी संवाद, आक्षेप निवारण (Objection Handling) आणि प्रत्यक्ष डील क्लोजिंगचे प्रत्यक्ष अनुभव.',
    badge: 'Direct Field & Phone Exposure',
  },
  {
    id: 'benefit-6',
    icon: 'rocket_launch',
    title: 'Career Growth',
    description:
      'हाय-डिमांड सेल्स आणि मार्केटिंग रोल्ससाठी आवश्यक कॉर्पोरेट संवाद व लीडरशिप कौशल्ये विकसित करा.',
    badge: 'Fast-track Promotion Path',
  },
];

export const TIMELINE_MONTHS: TimelineMonth[] = [
  {
    number: 'M-01',
    title: 'Marketing Fundamentals',
    description:
      'मार्केट रिसर्च, कस्टमर सायकॉलॉजी आणि ब्रँड पोझिशनिंगची मूलतत्त्वे.',
    badge: 'Foundation Built',
    icon: 'psychology',
  },
  {
    number: 'M-02',
    title: 'Lead Generation Systems',
    description:
      'B2B/B2C लीड्स, डेटाबेस तयार करणे व CRM पाइपलाइन मॅनेजमेंट.',
    badge: 'Inbound & Outbound',
    icon: 'filter_alt',
  },
  {
    number: 'M-03',
    title: 'Customer Handling',
    description:
      'प्रत्यक्ष फोन संभाषण, आक्षेप निराकरण व ग्राहकांच्या गरजांचे विश्लेषण.',
    badge: 'Objection Mastery',
    icon: 'support_agent',
  },
  {
    number: 'M-04',
    title: 'Sales Mastery & Deals',
    description:
      'हाय-व्हॅल्यू पिचिंग, निगोशिएशन टेक्निक्स आणि यशस्वी डील क्लोजिंग.',
    badge: 'Closing Architecture',
    icon: 'handshake',
  },
  {
    number: 'M-05',
    title: 'Practical Field & Ads',
    description:
      'ऑन-ग्राउंड कॅम्पेन्स, Meta ॲड्स, WhatsApp मार्केटिंग व वीकली टार्गेट्स.',
    badge: 'Live Conversion Runs',
    icon: 'campaign',
  },
  {
    number: 'M-06',
    title: 'Soft Skills & Interviews',
    description:
      'कॉर्पोरेट ईमेल, मुलाखतींची कसून तयारी, रेझ्युमे व १००% प्लेसमेंट ड्राईव्ह.',
    badge: 'Placement Ready',
    icon: 'badge',
  },
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'mod-1',
    number: '01',
    tag: 'Foundation',
    title: 'Marketing Fundamentals & Psychology',
    points: [
      'पारंपारिक (Traditional) विरुद्ध डिजिटल मार्केटिंग फरक आणि उपयोग.',
      'ग्राहक मानसशास्त्र (Consumer Psychology) आणि खरेदीचे निर्णय कसे होतात.',
      'Target Audience आणि Buyer Persona अचूक कसा तयार करायचा.',
      'स्पर्धकांचे विश्लेषण (Competitor Audit) आणि Unique Selling Proposition (USP).',
    ],
  },
  {
    id: 'mod-2',
    number: '02',
    tag: 'Pipeline Generation',
    title: 'Lead Generation & CRM Architecture',
    points: [
      'Inbound विरुद्ध Outbound लीड जनरेशन धोरणे.',
      'B2B आणि B2C व्यवसायांसाठी हाय-क्वालिटी लीड्स डेटाबेस गोळा करणे.',
      'CRM टूल्स (HubSpot, LeadSquared बेसिक्स) वापरून फॉलो-अप सिस्टीम चालवणे.',
      'कोल्ड आउटरीच: प्रोफेशनल कॉलिंग स्क्रिप्ट्स आणि संदेश.',
    ],
  },
  {
    id: 'mod-3',
    number: '03',
    tag: 'Client Relations',
    title: 'Customer Handling & Objection Solving',
    points: [
      'फोन आणि समोरासमोर संवाद साधताना आवाजातील आत्मविश्वास आणि टोन मॅनेजमेंट.',
      '"खूप महाग आहे", "मला विचार करावा लागेल" अशा कॉमन आक्षेपांवर मात (Objection Handling).',
      'नाराज ग्राहकांशी संवाद साधून विश्वास पुन्हा कसा मिळवायचा (De-escalation).',
      'सक्रिय श्रवण (Active Listening) आणि ग्राहकाच्या गरजेनुसार सोल्यूशन देणे.',
    ],
  },
  {
    id: 'mod-4',
    number: '04',
    tag: 'Revenue Generation',
    title: 'Sales Mastery, Pitching & Closing',
    points: [
      'इफेक्टिव्ह प्रॉडक्ट प्रेझेंटेशन आणि व्हॅल्यू पिचिंग मॉडेल.',
      'सेल्स फनेल मॅनेजमेंट: प्रोस्पेक्टपासून प्रत्यक्ष पेड कस्टमरपर्यंत प्रवास.',
      'प्रॅक्टिकल निगोशिएशन: नफ्यात तडजोड न करता डील फायनल करणे.',
      'अप्सेलिंग (Upselling) आणि क्रॉस-सेलिंग (Cross-selling) द्वारे व्हॅल्यू वाढवणे.',
    ],
  },
  {
    id: 'mod-5',
    number: '05',
    tag: 'On-Ground Execution',
    title: 'Practical Field & Live Project Marketing',
    points: [
      'लाईव्ह कस्टमर हँडलिंग सेशन्स आणि आठवड्याचे प्रत्यक्ष टार्गेट्स.',
      'ऑन-फील्ड कॅम्पेनिंग, बीट मॅपिंग आणि स्थानिक स्टोअर्स/क्लायंट्सचे ऑनबोर्डिंग.',
      'दैनिक विक्री अहवाल (DSR) आणि कामगिरीचे ॲनालिटिक्स तयार करणे.',
      'प्रॉब्लेम सॉल्व्हिंग रिव्ह्यू: जिथे अडचण आली तिथे मेंटॉरचे थेट मार्गदर्शन.',
    ],
  },
  {
    id: 'mod-6',
    number: '06',
    tag: 'Modern Channels',
    title: 'Digital Marketing & Meta Ads Basics',
    points: [
      'Facebook & Instagram Ads मॅनेजर सेटअप आणि लीड कॅम्पेन चालवणे.',
      'WhatsApp Business API आणि ऑटोमेटेड कस्टमर फनेल्स.',
      'कंटेंट क्रिएशन स्ट्रॅटेजी आणि हाय-कन्व्हर्टिंग ॲड कॉपीरायटिंग.',
      'Google Business Profile आणि स्थानिक लोकल SEO द्वारे ग्राहक मिळवणे.',
    ],
  },
  {
    id: 'mod-7',
    number: '07',
    tag: 'Job Readiness',
    title: 'Professional Soft Skills & Interview Cracking',
    points: [
      'कॉर्पोरेट ईमेल एटिकेट्स आणि बिझनेस कॉलिंग शिष्टाचार.',
      'टीमवर्क, प्रेशर हँडलिंग आणि टाइम मॅनेजमेंट सवयी.',
      'इम्प्रेसिव्ह वन-पेज रिझ्युमे आणि LinkedIn प्रोफाइल ऑप्टिमायझेशन.',
      'मॉक इंटरिव्ह्यू, पगार वाटाघाटी (Salary Negotiation) आणि थेट जॉब रेकमेंडेशन.',
    ],
  },
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'role-1',
    title: 'Marketing Executive',
    category: 'marketing',
    description:
      'ब्रँड प्रमोशन, स्थानिक मार्केटिंग मोहिमा आणि ग्राहक जोडणीचे व्यवस्थापन.',
    keySkill: 'Key: Brand & Campaigns',
    icon: 'badge',
  },
  {
    id: 'role-2',
    title: 'Sales Executive',
    category: 'sales',
    description:
      'थेट विक्री, क्लायंट व्हिजिट्स आणि कंपनीचे सेल्स उद्दिष्ट पूर्ण करणे.',
    keySkill: 'Key: Direct Conversions',
    icon: 'store',
  },
  {
    id: 'role-3',
    title: 'Business Development Exec (BDE)',
    category: 'growth',
    description:
      'नवीन कॉर्पोरेट भागीदार शोधणे आणि बिझनेसच्या नव्या संधी विकसित करणे.',
    keySkill: 'Key: Partnerships & B2B',
    icon: 'corporate_fare',
  },
  {
    id: 'role-4',
    title: 'Digital Marketing Executive',
    category: 'marketing',
    description:
      'सोशल मीडिया जाहिराती, मेटा ॲड्स आणि ऑनलाइन लीड ट्रॅकिंग हँडल करणे.',
    keySkill: 'Key: Meta Ads & Social',
    icon: 'ads_click',
  },
  {
    id: 'role-5',
    title: 'Lead Generation Executive',
    category: 'growth',
    description:
      'डेटा मायनिंग, लिंक्डइन स्क्रॅपिंग आणि संभाव्य ग्राहकांचा डेटाबेस तयार करणे.',
    keySkill: 'Key: Data & Cold Outreach',
    icon: 'person_search',
  },
  {
    id: 'role-6',
    title: 'Customer Relationship Exec (CRE)',
    category: 'sales',
    description:
      'ह्या ग्राहकांसोबत दीर्घकालीन नाते टिकवून ठेवणे आणि रिटेन्शन वाढवणे.',
    keySkill: 'Key: Retention & Support',
    icon: 'handshake',
  },
  {
    id: 'role-7',
    title: 'Inside Sales Executive',
    category: 'sales',
    description:
      'ऑफिसमधून फोन व ईमेलद्वारे संभाव्य ग्राहकांना उत्पादन समजावून सांगणे.',
    keySkill: 'Key: Virtual Closing',
    icon: 'call',
  },
  {
    id: 'role-8',
    title: 'Business Development Assoc (BDA)',
    category: 'growth',
    description:
      'फास्ट-ग्रोइंग स्टार्टअप्समध्ये हाय-पेकेट सेल्स व ग्रोथ स्ट्रॅटेजी राबवणे.',
    keySkill: 'Key: High Growth / High Incentives',
    icon: 'trending_up',
  },
];

export const TARGET_AUDIENCE: TargetAudience[] = [
  {
    id: 1,
    title: 'College Freshers / पदवीधर',
    description:
      'BBA, B.Com, BA, BSc किंवा कोणतीही पदवी नुकतीच पूर्ण केली आहे आणि पहिला चांगला जॉब शोधत आहात.',
  },
  {
    id: 2,
    title: 'Job Seekers (अनुभव नसलेले)',
    description:
      'इंटरव्ह्यू देत आहात पण "Work Experience" नसल्यामुळे वारंवार रिजेक्शन येत आहे अशा उमेदवारांसाठी.',
  },
  {
    id: 3,
    title: 'Career Switchers (फील्ड बदलणारे)',
    description:
      'सध्या कमी पगाराच्या किंवा विना-भविष्य असलेल्या क्षेत्रात अडकले आहेत आणि मार्केटिंगमध्ये करिअर करू इच्छितात.',
  },
  {
    id: 4,
    title: 'Small Business Owners / उद्योजक',
    description:
      'ज्यांना स्वतःच्या व्यवसायाची विक्री (Sales) वाढवण्यासाठी प्रॅक्टिकल मार्केटिंग आणि ग्राहक संपादन शिकायचे आहे.',
  },
  {
    id: 5,
    title: 'Communication Learners',
    description:
      'ज्यांना स्वतःचा न्यूनगंड घालवून लोकांशी आत्मविश्वासाने आणि प्रभावीपणे बोलण्याची कला विकसित करायची आहे.',
  },
  {
    id: 6,
    title: 'High Growth Seekers',
    description:
      'ज्यांना इन्सेंटिव्ह, कमिशन आणि जलद प्रमोशनच्या जोरावर स्वतःचे आर्थिक भविष्य मजबूत करायचे आहे.',
  },
];

export const CAREER_STEPS = [
  {
    step: 1,
    title: 'Join Program',
    description:
      'मोफत नोंदणी करा, स्क्रीनिंग पूर्ण करा आणि बॅचमध्ये प्रवेश निश्चित करा.',
  },
  {
    step: 2,
    title: 'Learn Marketing',
    description: 'मार्केटिंगचे कोर नियम, सायकॉलॉजी आणि आधुनिक टूल्स शिका.',
  },
  {
    step: 3,
    title: 'Practice With Leads',
    description:
      'खऱ्या डेटाबेसवर काम करून व्हॅलिडेटेड संभाव्य ग्राहक शोधा.',
  },
  {
    step: 4,
    title: 'Handle Customers',
    description: 'ग्राहकांसोबत प्रत्यक्ष संवाद साधून त्यांची समस्या समजून घ्या.',
  },
  {
    step: 5,
    title: 'Learn Sales Closing',
    description:
      'आक्षेप मिटवून ऑर्डर निश्चित करण्याचे व्यावसायिक तंत्र आत्मसात करा.',
  },
  {
    step: 6,
    title: 'Build Confidence',
    description:
      'व्यावसायिक इंग्रजी/मराठी संभाषण आणि ईमेल ड्राफ्टिंगमध्ये पारंगत व्हा.',
  },
  {
    step: 7,
    title: 'Interview Preparation',
    description:
      'मॉक इंटरिव्ह्यू आणि रेझ्युमे पॉलिशिंग करून आत्मविश्वास वाढवा.',
  },
  {
    step: 8,
    title: 'Start Your Career',
    description: 'चांगल्या पगारासह प्रतिष्ठित कंपनीत तुमचे करिअर सुरू करा!',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'रोहन साळुंखे',
    role: 'Now: BDE (₹3.6 LPA)',
    initials: 'RS',
    text: 'मी B.Com नंतर ६ महिने घरीच होतो. कोठेही अनुभव मागायचे. या ट्रेनिंगमध्ये प्रत्यक्ष ग्राहकांशी फोनवर आणि समोरासमोर बोलण्याचा सराव झाला. माझी भीती पूर्णपणे गेली आणि आज मी एका IT कंपनीत BDE म्हणून रुजू झालो आहे.',
    stars: 5,
  },
  {
    name: 'प्रियांका पाटील',
    role: 'Now: Digital Marketer',
    initials: 'PP',
    text: '१००% मोफत असूनही इतके दर्जेदार मार्गदर्शन मिळेल असे वाटले नव्हते. मेटा ॲड्स आणि लीड जनरेशन प्रत्यक्ष शिकायला मिळाले. ट्रेनिंगच्या ५ व्या महिन्यातच मला ₹१२,००० चा स्टायपेंड देखील मिळाला.',
    stars: 5,
  },
  {
    name: 'अमोल कुलकर्णी',
    role: 'Now: Sales Executive',
    initials: 'AK',
    text: 'मला इंग्रजी बोलण्याची भीती वाटायची. सरांनी कॉर्पोरेट कॉलिंग आणि ईमेल ड्राफ्टिंगची इतकी प्रॅक्टिस करून घेतली की इंटरिव्ह्यूच्या वेळी कोणताही ताण आला नाही. उत्तम उपक्रम!',
    stars: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: '१. हे ट्रेनिंग खरोखर १००% मोफत (FREE) आहे का?',
    answer:
      'होय, संपूर्ण ६ महिन्यांचे प्रॅक्टिकल ट्रेनिंग १००% मोफत आहे. कोणत्याही प्रकारची छुपी फी (No Hidden Charges) घेतली जात नाही.',
  },
  {
    id: 2,
    question: '२. प्रोग्रामचा कालावधी किती आहे?',
    answer:
      'हा प्रोग्राम एकूण ६ महिन्यांचा (6 Months) आहे. यामध्ये थिअरी, फिल्ड प्रॅक्टिस, डिजिटल ॲड्स आणि इंटरिव्ह्यू प्रिप यांचा समावेश आहे.',
  },
  {
    id: 3,
    question: '३. यासाठी शिक्षणाची काय पात्रता आवश्यक आहे?',
    answer:
      'कोणतीही पदवी (Graduate), डिप्लोमा किंवा शेवटच्या वर्षाचे विद्यार्थी ज्यांना शिकण्याची आणि करिअर करण्याची तीव्र इच्छा आहे ते अर्ज करू शकतात.',
  },
  {
    id: 4,
    question: '४. Up to ₹50,000 Stipend कसा मिळतो?',
    answer:
      'प्रॅक्टिकल प्रोजेक्ट्स, लीड जनरेशन आणि प्रत्यक्ष सेल्स टार्गेट्स उत्तम रीतीने पूर्ण करणाऱ्या प्रशिक्षणार्थींना कामगिरीनुसार स्टायपेंड दिला जातो.',
  },
  {
    id: 5,
    question: '५. ट्रेनिंग पूर्ण झाल्यावर सर्टिफिकेट मिळते का?',
    answer:
      'होय, सर्व मॉड्यूल्स आणि प्रत्यक्ष कामाचे मूल्यांकन पूर्ण झाल्यावर अधिकृत "Marketing Practitioner Certificate" प्रदान केले जाते.',
  },
  {
    id: 6,
    question: '६. जॉब मिळवून देण्यासाठी कशी मदत केली जाते?',
    answer:
      'आमची समर्पित प्लेसमेंट सेल तुमचा रेझ्युमे बनवते, मॉक मुलाखती घेते आणि नामांकित कंपन्यांमध्ये थेट मुलाखतींचे आयोजन करते.',
  },
  {
    id: 7,
    question: '७. मला मार्केटिंगचा काहीही अनुभव नाही, तरी मी करू शकतो का?',
    answer:
      'नक्कीच! हा कोर्स खास अशाच फ्रेशर्ससाठी डिझाइन केला आहे ज्यांना शून्य अनुभव आहे. आम्ही अगदी बेसिकपासून शिकवतो.',
  },
  {
    id: 8,
    question: '८. हे ऑनलाइन आहे की ऑफलाइन?',
    answer:
      'हे हायब्रिड मॉडेल आहे ज्यामध्ये डिजिटल लेक्चर्स ऑनलाइन आणि प्रत्यक्ष प्रॅक्टिकल कस्टमर हँडलिंग सेशन्स ऑफलाइन फिल्डवर होतात.',
  },
  {
    id: 9,
    question: '९. बॅचमध्ये किती जागा उपलब्ध आहेत?',
    answer:
      'प्रत्येक प्रशिक्षणार्थीला वैयक्तिक मार्गदर्शन मिळावे म्हणून एका बॅचमध्ये मर्यादित (फक्त २५ जागा) असतात.',
  },
  {
    id: 10,
    question: '१०. ॲप्लिकेशन कसे करावे आणि संपर्क कुठे करावा?',
    answer:
      'खालील फॉर्म भरून लगेच अर्ज करा किंवा अधिक माहितीसाठी थेट 8055514368 या क्रमांकावर कॉल किंवा WhatsApp करा.',
  },
];
