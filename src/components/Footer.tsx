import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-background border-t border-border py-12 ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">
                {language === 'fa' ? 'پورتفولیو' : 'Portfolio'}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fa'
                  ? 'توسعه‌دهنده فرانت‌اند با تمرکز بر ایجاد تجربیات وب زیبا و کاربردی'
                  : 'Frontend developer focused on creating beautiful and functional web experiences'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {language === 'fa' ? 'لینک‌های سریع' : 'Quick Links'}
              </h3>
              <div className="space-y-2">
                {[
                  { key: 'about', href: '#about' },
                  { key: 'skills', href: '#skills' },
                  { key: 'projects', href: '#projects' },
                  { key: 'contact', href: '#contact' },
                ].map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {language === 'fa' ? {
                      about: 'درباره من',
                      skills: 'مهارت‌ها',
                      projects: 'پروژه‌ها',
                      contact: 'تماس',
                    }[link.key] : {
                      about: 'About',
                      skills: 'Skills',
                      projects: 'Projects',
                      contact: 'Contact',
                    }[link.key]}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {language === 'fa' ? 'شبکه‌های اجتماعی' : 'Follow Me'}
              </h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-lg flex items-center justify-center transition-smooth hover:scale-110 transform"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 md:mb-0">
              <span>
                © {currentYear} {language === 'fa' ? 'تمام حقوق محفوظ است' : 'All rights reserved'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>
                {language === 'fa' ? 'ساخته شده با' : 'Made with'}
              </span>
              <Heart className="text-red-500" size={16} />
              <span>
                {language === 'fa' ? 'و' : 'and'}
              </span>
              <span className="text-primary font-medium">React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;