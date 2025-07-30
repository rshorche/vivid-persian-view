import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from './LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'fa' ? 'خطا' : 'Error',
        description: language === 'fa' 
          ? 'لطفاً همه فیلدها را پر کنید'
          : 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    // Simulate form submission
    toast({
      title: language === 'fa' ? 'موفقیت' : 'Success',
      description: language === 'fa'
        ? 'پیام شما با موفقیت ارسال شد'
        : 'Your message has been sent successfully',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: language === 'fa' ? 'ایمیل' : 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: Phone,
      label: language === 'fa' ? 'تلفن' : 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: language === 'fa' ? 'موقعیت' : 'Location',
      value: language === 'fa' ? 'تهران، ایران' : 'Tehran, Iran',
      href: '#',
    },
  ];

  return (
    <section id="contact" className={`py-20 bg-muted/30 ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('contactTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contactText')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {language === 'fa' ? 'اطلاعات تماس' : 'Contact Information'}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 elegant-card rounded-lg hover:shadow-glow transition-smooth group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div className={language === 'fa' ? 'text-right' : ''}>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="elegant-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  {language === 'fa' ? 'چرا با من کار کنید؟' : 'Why Work With Me?'}
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-persian-gold rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                    {language === 'fa' ? 'پاسخگویی سریع' : 'Quick Response Time'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-persian-teal rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                    {language === 'fa' ? 'کیفیت بالا' : 'High Quality Work'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-persian-blue rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                    {language === 'fa' ? 'قیمت منصفانه' : 'Fair Pricing'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-persian-sky rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                    {language === 'fa' ? 'پشتیبانی کامل' : 'Full Support'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="elegant-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {language === 'fa' ? 'ارسال پیام' : 'Send Message'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full transition-smooth focus:shadow-glow"
                    dir={language === 'fa' ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full transition-smooth focus:shadow-glow"
                    dir={language === 'fa' ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full transition-smooth focus:shadow-glow resize-none"
                    dir={language === 'fa' ? 'rtl' : 'ltr'}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-smooth"
                >
                  <Send size={20} className="mr-2 rtl:ml-2 rtl:mr-0" />
                  {t('send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;