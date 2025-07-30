import React from 'react';
import { useLanguage } from './LanguageContext';

const SkillsSection = () => {
  const { language, t } = useLanguage();

  const skillCategories = [
    {
      title: language === 'fa' ? 'فرانت‌اند' : 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: language === 'fa' ? 'ابزارها و تکنولوژی‌ها' : 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ],
    },
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className={`py-20 bg-muted/30 ${language === 'fa' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('skillsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fa'
                ? 'تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم و تجربه دارم'
                : 'Technologies and tools I work with and have experience in'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="elegant-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              {language === 'fa' ? 'سایر تکنولوژی‌ها' : 'Other Technologies'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'React Native',
                'Vue.js',
                'Sass/SCSS',
                'MongoDB',
                'Node.js',
                'Python',
                'Docker',
                'AWS',
                'Firebase',
                'Jest',
                'Cypress',
                'Redux',
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 elegant-card rounded-lg hover:shadow-glow transition-smooth"
                >
                  <span className="text-foreground font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;