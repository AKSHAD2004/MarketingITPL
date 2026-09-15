import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../data/programData';
import { CompanyLogo } from './CompanyLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenApply,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key or window resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: 'home', icon: 'home' },
    { label: 'Program', path: 'program', icon: 'timeline' },
    { label: "What You'll Learn", path: 'what-youll-learn', icon: 'menu_book' },
    { label: 'Benefits', path: 'benefits', icon: 'verified' },
    { label: 'Career Opportunities', path: 'career-opportunities', icon: 'work' },
    { label: 'FAQ', path: 'faq', icon: 'help_outline' },
    { label: 'Contact', path: 'contact', icon: 'call' },
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#22288D] ${
        isScrolled
          ? 'shadow-[0_4px_25px_rgba(10,20,60,0.45)] border-b border-[#181d66]'
          : 'shadow-[0_2px_15px_rgba(10,20,60,0.25)] border-b border-[#2d34a8]'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* ========================================================
            AUTHORITATIVE BRAND LOGO & COMPANY IDENTITY (LEFT)
            ======================================================== */}
        <a
          id="header-brand-logo"
          href="#home"
          onClick={(e) => handleNavClick('home', e)}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fea619] rounded-lg shrink-0"
          aria-label="INFOYASHONAND TECHNOLOGY PVT. LTD. Home"
          title="INFOYASHONAND TECHNOLOGY PVT. LTD."
        >
          <CompanyLogo className="h-11 sm:h-13 md:h-14 lg:h-[62px] w-auto" />
        </a>

        {/* ========================================================
            RIGHT CONTAINER (NAV TABS + ACTION BUTTONS)
            ======================================================== */}
        <div className="flex items-center gap-3 xl:gap-5">
          {/* NAVIGATION TABS */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation Tabs"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <a
                  key={item.path}
                  id={`nav-link-${item.path}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-2.5 xl:px-3.5 py-2 rounded-xl font-bold text-[12.5px] xl:text-[13.5px] whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-sm ring-1 ring-white/30'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  href={`#${item.path}`}
                  onClick={(e) => handleNavClick(item.path, e)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Link */}
            <a
              id="header-phone-link"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-white font-bold text-[13px] md:text-[14px] hover:bg-white/10 hover:text-[#fea619] transition-colors"
              href={`tel:${HERO_DATA.phoneNumber}`}
              title={`Call: ${HERO_DATA.phoneNumber}`}
            >
              <span className="material-symbols-outlined text-[#fea619] text-[18px] md:text-[20px]">
                call
              </span>
              <span className="hidden md:inline">{HERO_DATA.phoneNumber}</span>
            </a>

            {/* Apply Now CTA */}
            <button
              id="header-apply-btn"
              type="button"
              onClick={onOpenApply}
              className="hidden xs:inline-flex items-center justify-center px-4 md:px-5 py-2.5 rounded-xl bg-[#fea619] text-[#122262] font-extrabold text-[12px] sm:text-[13px] md:text-[14px] shadow-[0_4px_16px_rgba(254,166,25,0.45)] hover:bg-[#ffb733] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              Apply Now
            </button>

            {/* Clean 3-Bar Hamburger Toggle Button (#FFFFFF, 3px bars, 5px gap, rounded caps) */}
            <button
              id="mobile-menu-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-colors cursor-pointer shrink-0 flex flex-col justify-center items-center gap-[5px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              {/* Top Bar */}
              <span
                className={`w-6 h-[3px] bg-[#FFFFFF] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              {/* Middle Bar */}
              <span
                className={`w-6 h-[3px] bg-[#FFFFFF] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Bottom Bar */}
              <span
                className={`w-6 h-[3px] bg-[#FFFFFF] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] sm:top-[78px] z-40 lg:hidden flex flex-col">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10 transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Content */}
          <div
            id="mobile-nav-drawer"
            className="bg-[#22288D] text-white px-4 sm:px-6 py-5 shadow-2xl border-t border-[#2d34a8] max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-3 duration-200"
          >
            {/* Quick Header in Drawer */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <CompanyLogo className="h-9 sm:h-10 w-auto" />
              <span className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-[#fea619]">
                Menu &amp; Navigation
              </span>
            </div>

            {/* Navigation Tabs List */}
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation Tabs">
              {navItems.map((item) => {
                const isActive = activeSection === item.path;
                return (
                  <a
                    key={item.path}
                    id={`mobile-nav-${item.path}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] sm:text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white font-bold ring-1 ring-white/25'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                    href={`#${item.path}`}
                    onClick={(e) => handleNavClick(item.path, e)}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#fea619]">
                      {item.icon}
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#fea619] shadow-sm"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="mt-5 pt-4 border-t border-white/15 flex flex-col gap-3">
              <a
                id="mobile-call-link"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/10 text-white font-bold text-[14px] hover:bg-white/20 transition-colors"
                href={`tel:${HERO_DATA.phoneNumber}`}
              >
                <span className="material-symbols-outlined text-[#fea619]">call</span>
                <span>Call Helpline: {HERO_DATA.phoneNumber}</span>
              </a>

              <button
                id="mobile-apply-now-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[#fea619] text-[#122262] font-extrabold text-[15px] shadow-lg hover:bg-[#ffb733] transition-colors cursor-pointer"
              >
                Apply Now (मोफत प्रवेश)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
