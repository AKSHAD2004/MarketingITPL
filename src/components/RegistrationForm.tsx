import React, { useState } from 'react';
import { HERO_DATA } from '../data/programData';
import { LeadFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    qualification: '',
    currentStatus: '',
    primaryInterest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Save lead to localStorage
    try {
      const existingLeads = JSON.parse(
        localStorage.getItem('marketing_career_leads') || '[]'
      );
      const newLead = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem(
        'marketing_career_leads',
        JSON.stringify([newLead, ...existingLeads])
      );
    } catch (err) {
      console.error('Failed to save to local storage', err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      qualification: '',
      currentStatus: '',
      primaryInterest: '',
    });
  };

  const whatsappConfirmUrl = `https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello, मी फॉर्म भरला आहे. माझे नाव: ${formData.fullName || 'विद्यार्थी'}, मोबाईल: ${formData.phone}, शहर: ${formData.city}. कृपया ॲप्लिकेशनचे स्टेटस कळवा.`
  )}`;

  return (
    <section
      id="register"
      className="w-full bg-[#eff4ff] py-10 sm:py-16 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Form Left Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdad6] text-[#93000a] font-label-md text-[12px] font-bold w-max">
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
              <span>Registration Desk Active</span>
            </div>

            <h2 className="font-headline-lg-mobile sm:font-headline-lg text-[28px] sm:text-[38px] font-extrabold text-[#0b1c30] leading-tight">
              Ready to Start Your Marketing Career?
            </h2>

            <p className="font-body-md text-[15px] text-[#44474c] leading-relaxed">
              तुमचा अर्ज सादर करा. आमची ॲडमिशन टीम २४ तासांच्या आत तुमच्याशी
              संपर्क साधून पुढील मुलाखत व बॅच डिटेल्स शेअर करेल.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    verified_user
                  </span>
                </div>
                <span className="font-body-sm text-[13.5px] font-semibold text-[#0b1c30]">
                  १००% मोफत • कोणतीही ॲप्लिकेशन फी नाही
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    phone_in_talk
                  </span>
                </div>
                <span className="font-body-sm text-[13.5px] font-semibold text-[#0b1c30]">
                  हेल्पलाईन:{' '}
                  <a
                    href={`tel:${HERO_DATA.phoneNumber}`}
                    className="underline text-[#855300] hover:text-[#0b1c30]"
                  >
                    {HERO_DATA.phoneNumber}
                  </a>{' '}
                  वर थेट बोला
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    pin_drop
                  </span>
                </div>
                <span className="font-body-sm text-[13.5px] font-semibold text-[#0b1c30]">
                  महाराष्ट्रभरातून विद्यार्थी अर्ज करू शकतात
                </span>
              </div>
            </div>
          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white shadow-xl border border-[#dce9ff]/70 relative overflow-hidden">
              {isSubmitted ? (
                /* Form Success Banner */
                <div
                  id="form-success-banner"
                  className="p-6 sm:p-8 rounded-2xl bg-[#ffddb8] text-[#653e00] text-center flex flex-col items-center gap-3 animate-in zoom-in-95 duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[32px]">
                      done_all
                    </span>
                  </div>
                  <h3 className="font-title-lg text-[20px] font-bold text-[#653e00]">
                    Thank you! Your application has been received.
                  </h3>
                  <p className="font-body-sm text-[14px] text-[#653e00]/90 max-w-md">
                    आमची ॲडमिशन टीम लवकरच तुम्हाला संपर्क करेल. जलद पडताळणीसाठी तुम्ही
                    आम्हाला WhatsApp वर थेट मेसेजही करू शकता.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-3 w-full sm:w-auto">
                    <a
                      id="form-whatsapp-confirm-btn"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#0e1c2f] text-white font-label-lg text-[14px] font-bold shadow-md hover:bg-[#213145] transition-all w-full sm:w-auto border border-[#25D366]/40 hover:border-[#25D366]"
                      href={whatsappConfirmUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <WhatsAppIcon size={20} animated={true} />
                      <span>Send WhatsApp Confirmation</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl border border-[#653e00]/30 font-label-md text-[13px] font-bold text-[#653e00] hover:bg-white/40 transition-colors w-full sm:w-auto cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form
                  id="launch-application-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        पूर्ण नाव (Full Name) *
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="उदा. राहुल सचिन पाटील"
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        मोबाईल / WhatsApp नंबर *
                      </label>
                      <input
                        id="form-input-phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="१० अंकी नंबर (उदा. 98xxxxxxxx)"
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        ईमेल पत्ता (Email) *
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@gmail.com"
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      />
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        तुमचे शहर / जिल्हा (City) *
                      </label>
                      <input
                        id="form-input-city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="उदा. पुणे / नाशिक / मुंबई"
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Education */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        शिक्षण (Highest Qualification) *
                      </label>
                      <select
                        id="form-select-education"
                        required
                        value={formData.qualification}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            qualification: e.target.value,
                          })
                        }
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      >
                        <option value="">निवडा (Select Qualification)</option>
                        <option value="Graduate">
                          Graduate (BBA / B.Com / BA / BSc etc.)
                        </option>
                        <option value="Post Graduate">
                          Post Graduate (MBA / MCA etc.)
                        </option>
                        <option value="Diploma">Diploma / 12th Pass</option>
                        <option value="Final Year">Final Year Student</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Current Status */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                        सध्याची स्थिती (Current Status) *
                      </label>
                      <select
                        id="form-select-status"
                        required
                        value={formData.currentStatus}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            currentStatus: e.target.value,
                          })
                        }
                        className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                      >
                        <option value="">निवडा (Select Status)</option>
                        <option value="Fresher">
                          College Fresher (कोणताही अनुभव नाही)
                        </option>
                        <option value="Job Seeker">
                          Job Seeker (नोकरी शोधत आहे)
                        </option>
                        <option value="Working Professional">
                          Working Professional (फील्ड बदलायची आहे)
                        </option>
                        <option value="Business Owner">
                          Business Owner / उद्योजक
                        </option>
                        <option value="Student">Current Student</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-[13px] font-bold text-[#0b1c30]">
                      मुख्य स्वारस्य (Primary Interest) *
                    </label>
                    <select
                      id="form-select-interest"
                      required
                      value={formData.primaryInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryInterest: e.target.value,
                        })
                      }
                      className="h-12 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-body-sm text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#855300] border border-[#dce9ff] transition-all"
                    >
                      <option value="">निवडा (Select Primary Focus)</option>
                      <option value="Marketing">
                        Practical Marketing &amp; Brand Strategy
                      </option>
                      <option value="Sales">
                        Sales Execution &amp; High-Value Closing
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing &amp; Meta Ads
                      </option>
                      <option value="Business Development">
                        Business Development (BDE/BDA)
                      </option>
                      <option value="Customer Handling">
                        Customer Relationship &amp; Communication
                      </option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 py-4 rounded-xl bg-[#fea619] text-[#684000] font-label-lg text-[14px] font-extrabold shadow-[0_10px_24px_-4px_rgba(245,158,11,0.45)] hover:bg-[#ffddb8] hover:text-[#653e00] transition-all duration-200 cursor-pointer disabled:opacity-70"
                  >
                    {submitting
                      ? 'Submitting Application...'
                      : 'SUBMIT FREE APPLICATION (मोफत अर्ज सादर करा)'}
                  </button>

                  <p className="text-center font-label-sm text-[11px] text-[#44474c]">
                    🔒 तुमची माहिती सुरक्षित आहे. स्पॅम केला जाणार नाही.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
