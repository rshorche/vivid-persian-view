import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const AboutSection = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Code2,
      title: language === 'fa' ? 'کد تمیز' : 'Clean Code',
      description: language === 'fa' ? 'نوشتن کد قابل نگهداری و بهینه' : 'Writing maintainable and optimized code',
    },
    {
      icon: Palette,
      title: language === 'fa' ? 'طراحی زیبا' : 'Beautiful Design',
      description: language === 'fa' ? 'ایجاد رابط‌های کاربری جذاب و کاربردی' : 'Creating attractive and functional user interfaces',
    },
    {
      icon: Rocket,
      title: language === 'fa' ? 'عملکرد بالا' : 'High Performance',
      description: language === 'fa' ? 'بهینه‌سازی سرعت و تجربه کاربری' : 'Optimizing speed and user experience',
    },
  ];

  return (
    <section id="about" className={`py-20 bg-background ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutText')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'fa' 
                  ? 'با تجربه در ساخت وب‌سایت‌های واکنش‌گرا و اپلیکیشن‌های تک‌صفحه‌ای، همیشه به دنبال یادگیری تکنولوژی‌های جدید و بهبود مهارت‌هایم هستم.'
                  : 'With experience in building responsive websites and single-page applications, I am always seeking to learn new technologies and improve my skills.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 elegant-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">
                    {language === 'fa' ? 'سال تجربه' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center p-4 elegant-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">
                    {language === 'fa' ? 'پروژه تکمیل شده' : 'Projects Completed'}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 rtl:space-x-reverse p-6 elegant-card rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div className={language === 'fa' ? 'text-right' : ''}>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;