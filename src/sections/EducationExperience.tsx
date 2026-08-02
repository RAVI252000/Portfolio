import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  details: string[];
  icon: React.ReactNode;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, location, details, icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative pl-8 pb-10 last:pb-0">
      {/* Connector Line */}
      <div className="absolute left-[15px] top-[26px] bottom-0 w-[2px] bg-slate-800 last:hidden" />
      
      {/* Node Bullet */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-dark-bg border-2 border-primary flex items-center justify-center text-primary z-10 shadow-lg shadow-primary/20"
      >
        {icon}
      </motion.div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-primary/25 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 h-16 w-16 rounded-full glow-orb-primary opacity-10 blur-sm pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h4 className="font-display font-bold text-white text-base md:text-lg tracking-wide group-hover:text-primary transition-colors">
            {title}
          </h4>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary bg-white/5 border border-white/5 rounded-full px-3 py-1">
            <Calendar className="h-3 w-3" /> {period}
          </span>
        </div>

        <h5 className="text-sm font-semibold text-slate-300 mb-2">{subtitle}</h5>
        
        {location && (
          <p className="flex items-center gap-1 text-xs text-text-secondary mb-3">
            <MapPin className="h-3.5 w-3.5" /> {location}
          </p>
        )}

        <ul className="space-y-1.5 text-xs md:text-sm text-text-secondary list-disc pl-4 leading-relaxed">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const EducationExperience: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const educationItems = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'MVGR College of Engineering',
      period: '2023 – 2027',
      location: 'Vizianagaram, AP, India',
      details: [
        'Score: 8.01 CGPA',
      ],
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      title: 'Intermediate Education',
      subtitle: 'Kavitha Junior College',
      period: '2021 – 2023',
      location: 'Srikakulam, AP, India',
      details: [
        'Score: 95.6%',
      ],
      icon: <Award className="h-4 w-4" />
    },
    {
      title: 'Secondary Education (ICSE)',
      subtitle: 'Nava Jeevan Public School',
      period: 'Completed 2021',
      location: 'Visakhapatnam, AP, India',
      details: [
        'Syllabus: ICSE',
        'Score: 89.6%',
      ],
      icon: <Award className="h-4 w-4" />
    }
  ];

  const experienceItems = [
    {
      title: 'AI Intern',
      subtitle: 'Infosys Springboard',
      period: 'July 2026 – Present',
      location: 'Remote, India',
      details: [
        'Performing data preprocessing, analysis, and visualization using Python and Power BI.',
        'Building interactive dashboards and generating business insights from structured datasets.',
        'Applying machine learning concepts through guided projects and practical assignments.',
        'Enhancing analytical, problem-solving, and data-driven decision-making skills.',
      ],
      icon: <Briefcase className="h-4 w-4" />
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Segment anchor for experience scrolling */}
      <div id="experience" className="absolute -top-20" />
      
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sections Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Education & <span className="text-gradient-primary">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Dual Grid Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">Education</h3>
            </div>
            
            <div className="relative">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  period={item.period}
                  location={item.location}
                  details={item.details}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">Work Experience</h3>
            </div>
            
            <div className="relative">
              {experienceItems.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  period={item.period}
                  location={item.location}
                  details={item.details}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationExperience;
