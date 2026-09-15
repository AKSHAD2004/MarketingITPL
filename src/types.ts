export interface CurriculumModule {
  id: string;
  number: string;
  tag: string;
  title: string;
  points: string[];
}

export interface CareerRole {
  id: string;
  title: string;
  category: 'marketing' | 'sales' | 'growth';
  description: string;
  keySkill: string;
  icon: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface TargetAudience {
  id: number;
  title: string;
  description: string;
}

export interface TimelineMonth {
  number: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
  stars: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  qualification: string;
  currentStatus: string;
  primaryInterest: string;
}
