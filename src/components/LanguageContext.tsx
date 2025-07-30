import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Frontend Developer',
    heroSubtitle: 'Crafting Beautiful Digital Experiences',
    heroDescription: 'I create modern, responsive web applications with attention to detail and user experience. Passionate about clean code and innovative design.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText: 'I am a passionate frontend developer with expertise in React, TypeScript, and modern web technologies. I love creating intuitive user interfaces and bringing designs to life.',
    
    // Skills Section
    skillsTitle: 'Technical Skills',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    viewProject: 'View Project',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactText: 'I\'m always interested in new opportunities and collaborations.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
  },
  fa: {
    // Navigation
    about: 'درباره من',
    skills: 'مهارت‌ها',
    projects: 'پروژه‌ها',
    contact: 'تماس',
    
    // Hero Section
    heroTitle: 'توسعه‌دهنده فرانت‌اند',
    heroSubtitle: 'خلق تجربیات دیجیتال زیبا',
    heroDescription: 'من اپلیکیشن‌های وب مدرن و واکنش‌گرا با توجه به جزئیات و تجربه کاربری می‌سازم. علاقه‌مند به کد تمیز و طراحی نوآورانه هستم.',
    viewWork: 'مشاهده کارها',
    contactMe: 'تماس با من',
    
    // About Section
    aboutTitle: 'درباره من',
    aboutText: 'من یک توسعه‌دهنده فرانت‌اند با علاقه هستم که تخصص در React، TypeScript و تکنولوژی‌های مدرن وب دارم. عاشق ایجاد رابط‌های کاربری شهودی و زنده کردن طراحی‌ها هستم.',
    
    // Skills Section
    skillsTitle: 'مهارت‌های فنی',
    
    // Projects Section
    projectsTitle: 'پروژه‌های منتخب',
    viewProject: 'مشاهده پروژه',
    
    // Contact Section
    contactTitle: 'ارتباط برقرار کنید',
    contactText: 'همیشه به فرصت‌ها و همکاری‌های جدید علاقه‌مندم.',
    name: 'نام',
    email: 'ایمیل',
    message: 'پیام',
    send: 'ارسال پیام',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fa')) {
      setLanguage(savedLang);
    }
    
    // Set document direction based on language
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};