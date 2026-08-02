import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Monitor, Server, Database, Terminal, BookOpen } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
      color: 'border-blue-500/25 shadow-blue-500/5',
    },
    {
      title: 'Web Development',
      icon: <Monitor className="h-6 w-6 text-cyan-400" />,
      skills: ['HTML5', 'CSS3', 'React.js', 'Flask', 'FastAPI'],
      color: 'border-cyan-500/25 shadow-cyan-500/5',
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6 text-emerald-400" />,
      skills: ['PostgreSQL', 'MySQL'],
      color: 'border-emerald-500/25 shadow-emerald-500/5',
    },
    {
      title: 'Data Analytics',
      icon: <Server className="h-6 w-6 text-indigo-400" />,
      skills: ['Power BI', 'Power Query', 'DAX', 'Data Visualization'],
      color: 'border-indigo-500/25 shadow-indigo-500/5',
    },
    {
      title: 'Developer Tools',
      icon: <Terminal className="h-6 w-6 text-pink-400" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'XAMPP'],
      color: 'border-pink-500/25 shadow-pink-500/5',
    },
    {
      title: 'Core Skills',
      icon: <BookOpen className="h-6 w-6 text-amber-400" />,
      skills: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Debugging', 'SDLC', 'Problem Solving'],
      color: 'border-amber-500/25 shadow-amber-500/5',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full glow-orb-accent opacity-10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Technical <span className="text-gradient-primary">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel-interactive rounded-2xl p-6 border shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${category.color} group relative overflow-hidden`}
            >
              {/* Orb hover effect inside cards */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-md" />

              {/* Card Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base tracking-wide md:text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-200 select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
