import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TopAlert } from './components/TopAlert';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { WhyThisProgram } from './components/WhyThisProgram';
import { TimelineSection } from './components/TimelineSection';
import { CurriculumSection } from './components/CurriculumSection';
import { RealWorldExperience } from './components/RealWorldExperience';
import { CareerOpportunities } from './components/CareerOpportunities';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { StipendBanner } from './components/StipendBanner';
import { CareerJourneySection } from './components/CareerJourneySection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { RegistrationForm } from './components/RegistrationForm';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EligibilityModal } from './components/EligibilityModal';
import { SyllabusModal } from './components/SyllabusModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    let targetId = id;
    if (id === 'apply-now') targetId = 'register';
    if (id === 'program') targetId = 'program';

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const handleApplyClick = () => {
    scrollToSection('register');
    const nameInput = document.getElementById('form-input-name');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 500);
    }
  };

  // ScrollSpy to track active section
  useEffect(() => {
    const sections = [
      'home',
      'program',
      'what-youll-learn',
      'benefits',
      'career-opportunities',
      'faq',
      'register',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure favicon is set to the authoritative emblem
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/favicon.png';
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] antialiased flex flex-col selection:bg-[#fea619] selection:text-[#684000]">
      {/* 1. Header with fixed navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenApply={handleApplyClick}
      />

      {/* Main Page Content */}
      <main className="w-full pt-[76px] sm:pt-[84px] bg-[#f8f9ff] min-h-screen flex flex-col">
        {/* Top Urgency / Notification Announcement */}
        <TopAlert />

        {/* 1. Hero Section */}
        <HeroSection onApplyClick={handleApplyClick} />

        {/* 2. Key Program Pillars & Benefits Strip */}
        <BenefitsSection />

        {/* 3. 'Why This Program?' (Freshers Struggle vs Program Gains) */}
        <WhyThisProgram />

        {/* 4. Program Overview (6-Month Visual Timeline) */}
        <TimelineSection />

        {/* 5. Interactive Curriculum (7 Comprehensive Modules) */}
        <CurriculumSection
          onOpenSyllabusModal={() => setIsSyllabusModalOpen(true)}
        />

        {/* 6. Real-World Experience (4 Spotlight Cards) */}
        <RealWorldExperience />

        {/* 7. Career Opportunities (8 Targeted Job Roles) */}
        <CareerOpportunities />

        {/* 8. Who Is This Program For? (6 Segment Cards) */}
        <TargetAudienceSection />

        {/* 9. Stipend & Opportunity Spotlight (₹50,000 Banner) */}
        <StipendBanner
          onCheckEligibility={() => setIsEligibilityModalOpen(true)}
        />

        {/* 10. Visual Career Journey (8 Connected Steps) */}
        <CareerJourneySection />

        {/* 11. Authentic Testimonials & FAQ Section */}
        <TestimonialsAndFaq />

        {/* 12. High-Converting Registration / Lead Form */}
        <RegistrationForm />

        {/* 13. Urgency Banner (Final Call) */}
        <UrgencyBanner onApplyClick={handleApplyClick} />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* 15. Floating Quick Connect & Mobile Bottom Sticky Bar */}
      <FloatingActions onApplyClick={handleApplyClick} />

      {/* Interactive Modals */}
      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
        onProceedToApply={handleApplyClick}
      />

      <SyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        onApply={handleApplyClick}
      />
    </div>
  );
}
