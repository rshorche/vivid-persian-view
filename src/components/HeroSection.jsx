import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const { language, t } = useLanguage();
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto ${
        language === 'fa' ? 'font-vazir' : 'font-inter'
      }`}>
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {t('heroTitle')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('heroSubtitle')}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {t('heroDescription')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleViewWork}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg transition-smooth shadow-glow hover:shadow-elegant"
            >
              {t('viewWork')}
            </Button>
            <Button
              onClick={handleContactMe}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-smooth"
            >
              {t('contactMe')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-persian-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-persian-teal rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-persian-sky rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;