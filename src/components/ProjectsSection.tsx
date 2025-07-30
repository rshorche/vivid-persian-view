import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';

const ProjectsSection = () => {
  const { language, t } = useLanguage();

  const projects = [
    {
      title: language === 'fa' ? 'اپلیکیشن تجارت الکترونیک' : 'E-Commerce Application',
      description: language === 'fa' 
        ? 'پلتفرم تجارت الکترونیک کامل با React و TypeScript'
        : 'Complete e-commerce platform built with React and TypeScript',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: language === 'fa' ? 'داشبورد مدیریت' : 'Admin Dashboard',
      description: language === 'fa'
        ? 'داشبورد مدیریت مدرن با چارت‌ها و گزارش‌های تحلیلی'
        : 'Modern admin dashboard with charts and analytics reports',
      tech: ['React', 'Next.js', 'Chart.js', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: language === 'fa' ? 'اپلیکیشن موبایل' : 'Mobile Application',
      description: language === 'fa'
        ? 'اپلیکیشن موبایل کراس پلتفرم با React Native'
        : 'Cross-platform mobile application built with React Native',
      tech: ['React Native', 'Expo', 'AsyncStorage', 'Redux'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className={`py-20 bg-background ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('projectsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fa'
                ? 'نمونه‌ای از پروژه‌هایی که روی آن‌ها کار کرده‌ام'
                : 'A showcase of projects I have worked on'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="elegant-card rounded-lg overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      {language === 'fa' ? 'کد' : 'Code'}
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-white"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {t('viewProject')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;