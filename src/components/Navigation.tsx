import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'glass shadow-elegant' : 'bg-transparent'
    } ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            {language === 'fa' ? 'پورتفولیو' : 'Portfolio'}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-smooth hover:bg-muted"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="transition-smooth hover:bg-muted"
            >
              <Globe size={20} />
              <span className="ml-1 text-sm">
                {language === 'en' ? 'فا' : 'EN'}
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden transition-smooth hover:bg-muted"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-smooth text-left py-2"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;