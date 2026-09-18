import React, { useState, useEffect } from 'react';

interface SplashBannerProps {
  onEnterSite: () => void;
  onApplyDirectly: () => void;
}

export const SplashBanner: React.FC<SplashBannerProps> = ({
  onEnterSite,
  onApplyDirectly,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1-second interval countdown
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onEnterSite();
    }, 350);
  };

  const handleApplyClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onApplyDirectly();
    }, 350);
  };

  return (
    <div
      id="splash-intro-banner-overlay"
      className={`fixed inset-0 z-[99999] bg-[#071322]/90 backdrop-blur-md flex items-center justify-center p-3 xs:p-4 sm:p-6 transition-opacity duration-300 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Announcement Banner"
    >
      <div className="relative w-full max-w-[540px] flex flex-col items-center gap-3 animate-in zoom-in-95 duration-300">
        {/* Top Floating Control Bar */}
        <div className="w-full flex items-center justify-between px-1 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22288D]/90 border border-white/20 backdrop-blur-sm text-xs font-bold text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#fea619] animate-ping" />
            <span>
              Opening in <strong className="text-[#fea619] text-[13px]">{secondsLeft}s</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-label-md text-[12px] font-bold transition-colors cursor-pointer border border-white/20 backdrop-blur-sm shadow-sm"
          >
            <span>Skip to Website</span>
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Main Banner Card */}
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/25 bg-[#0e1c2f] relative group">
          <img
            src="/assets/intro-banner.jpg"
            alt="INFOYASHONAND 6 Months FREE Practical Marketing Training Banner"
            className="w-full h-auto object-contain block max-h-[75vh]"
            loading="eager"
          />

          {/* Quick Apply Action Overlay at Bottom */}
          <div className="p-3 sm:p-4 bg-gradient-to-t from-[#0e1c2f] via-[#0e1c2f]/90 to-transparent flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <p className="text-white text-xs sm:text-[13px] font-medium text-center sm:text-left">
              🔥 <strong className="text-[#fea619]">१००% मोफत प्रवेश</strong> • मर्यादित जागा!
            </p>
            <button
              type="button"
              onClick={handleApplyClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#fea619] text-[#122262] font-extrabold text-[13px] sm:text-[14px] shadow-lg hover:bg-[#ffb733] transition-all transform hover:scale-[1.02] cursor-pointer text-center whitespace-nowrap"
            >
              Apply Now (मोफत प्रवेश)
            </button>
          </div>
        </div>

        {/* 5-Second Linear Progress Bar */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-1 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#fea619] to-[#ffb733] rounded-full transition-all ease-linear"
            style={{
              width: `${((5 - secondsLeft) / 5) * 100}%`,
              transitionDuration: '1000ms',
            }}
          />
        </div>
      </div>
    </div>
  );
};
