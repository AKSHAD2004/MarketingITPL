import React, { useState } from 'react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToApply: () => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onProceedToApply,
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    education: '',
    timeCommitment: '',
    callingComfort: '',
  });

  if (!isOpen) return null;

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Result
    }
  };

  const handleResetQuiz = () => {
    setStep(1);
    setAnswers({ education: '', timeCommitment: '', callingComfort: '' });
  };

  return (
    <div
      id="eligibility-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="eligibility-modal-card"
        className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-[#dce9ff]"
      >
        <button
          id="close-eligibility-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#eff4ff] text-[#0b1c30] flex items-center justify-center hover:bg-[#dce9ff] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-xl bg-[#fea619] text-[#684000] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[18px]">
              verified
            </span>
          </span>
          <div>
            <span className="font-label-sm text-[11px] text-[#855300] font-bold uppercase">
              Stipend &amp; Admission Eligibility
            </span>
            <h3 className="font-title-lg text-[18px] font-bold text-[#0b1c30]">
              ३० सेकंदात पात्रता तपासा
            </h3>
          </div>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-4 py-2">
            <p className="font-body-md text-[15px] font-semibold text-[#0b1c30]">
              १. तुमचे शिक्षण काय झाले आहे?
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'पदवीधर (Graduate: BBA, B.Com, BA, BSc, etc.)', val: 'grad' },
                { label: 'पदव्युत्तर (Post Graduate: MBA, MCA, MA, etc.)', val: 'pg' },
                { label: 'शेवटचे वर्ष / १२ वी / डिप्लोमा (Final Year / Diploma)', val: 'final' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelect('education', opt.val)}
                  className="w-full p-3.5 rounded-xl border border-[#dce9ff] text-left font-body-sm text-[14px] text-[#0b1c30] hover:bg-[#eff4ff] hover:border-[#855300] transition-colors cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <span className="font-label-sm text-[11px] text-[#75777d] mt-2">
              टप्पा १ / ३
            </span>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4 py-2">
            <p className="font-body-md text-[15px] font-semibold text-[#0b1c30]">
              २. तुम्ही प्रॅक्टिकल ट्रेनिंगसाठी किती वेळ देऊ शकता?
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'पूर्ण वेळ (Full Time: ५-६ तास दररोज)', val: 'full' },
                { label: 'अर्धा वेळ (Part Time: २-३ तास दररोज)', val: 'part' },
                { label: 'आठवड्याचे शेवटचे दिवस (Weekends Only)', val: 'weekend' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelect('timeCommitment', opt.val)}
                  className="w-full p-3.5 rounded-xl border border-[#dce9ff] text-left font-body-sm text-[14px] text-[#0b1c30] hover:bg-[#eff4ff] hover:border-[#855300] transition-colors cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-label-sm text-[11px] text-[#75777d]">
                टप्पा २ / ३
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#855300] underline cursor-pointer"
              >
                मागे जा
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-4 py-2">
            <p className="font-body-md text-[15px] font-semibold text-[#0b1c30]">
              ३. खऱ्या ग्राहकांशी फोनवर किंवा समोरासमोर बोलण्यास तयार आहात का?
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'होय, मला प्रत्यक्ष अनुभव घेऊन शिकायचे आहे!', val: 'yes_eager' },
                { label: 'सुरुवातीला भीती वाटते, पण मार्गदर्शनाने नक्की शिकेन.', val: 'yes_nervous' },
                { label: 'फक्त थिअरी शिकायचे आहे.', val: 'theory_only' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelect('callingComfort', opt.val)}
                  className="w-full p-3.5 rounded-xl border border-[#dce9ff] text-left font-body-sm text-[14px] text-[#0b1c30] hover:bg-[#eff4ff] hover:border-[#855300] transition-colors cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-label-sm text-[11px] text-[#75777d]">
                टप्पा ३ / ३
              </span>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-[#855300] underline cursor-pointer"
              >
                मागे जा
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center text-center gap-4 py-3 animate-in zoom-in-95 duration-150">
            <div className="w-14 h-14 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[32px]">
                verified
              </span>
            </div>
            <div>
              <h4 className="font-title-lg text-[20px] font-extrabold text-[#0b1c30]">
                🎉 अभिनंदन! तुम्ही १००% पात्र आहात!
              </h4>
              <p className="font-body-sm text-[14px] text-[#44474c] mt-2 leading-relaxed">
                तुमच्या प्रोफाईलनुसार तुम्ही <strong>१००% मोफत ट्रेनिंग</strong>{' '}
                आणि उत्कृष्ट कामगिरीवर{' '}
                <strong>₹५०,००० पर्यंतच्या स्टायपेंड</strong> साठी पात्र आहात.
              </p>
            </div>

            <div className="w-full p-3.5 rounded-2xl bg-[#eff4ff] border border-[#dce9ff] text-left text-xs text-[#0b1c30] flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[#855300] font-bold">✓</span>
                <span>मोफत ॲडमिशन: मंजूर (Approved)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#855300] font-bold">✓</span>
                <span>स्टायपेंड स्लॉट: उपलब्ध (Performance Based)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#855300] font-bold">✓</span>
                <span>प्लेसमेंट सपोर्ट: १००% हमी</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
              <button
                id="eligibility-claim-seat-btn"
                type="button"
                onClick={() => {
                  onClose();
                  onProceedToApply();
                }}
                className="w-full py-3.5 rounded-xl bg-[#fea619] text-[#684000] font-label-lg text-[14px] font-extrabold shadow-md hover:bg-[#ffddb8] transition-all cursor-pointer"
              >
                Claim Your Free Seat Now
              </button>
              <button
                type="button"
                onClick={handleResetQuiz}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-[#dce9ff] text-[#44474c] font-label-md text-[12px] font-bold hover:bg-[#eff4ff] transition-colors cursor-pointer"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
