import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageGraphic: React.ReactNode; // Premium custom SVG graphics
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projectsList: Project[] = [
    {
      title: 'Result Management Portal',
      description: 'Developed a web-based application to manage student records and examination results. Implemented CRUD operations and automated Excel data import for efficient result management. Built backend APIs using Flask and validated application workflows using Postman. Improved data accessibility and reduced manual effort in result processing.',
      technologies: ['Flask', 'Python', 'MySQL (XAMPP)', 'Postman'],
      imageGraphic: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="url(#result-grad)" />
          {/* Grid lines */}
          <path d="M40 0V200M80 0V200M120 0V200M160 0V200M200 0V200" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
          {/* Database Stack */}
          <g transform="translate(80, 60)">
            <ellipse cx="60" cy="30" rx="30" ry="10" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M30 30V50C30 55.5 43.4 60 60 60C76.6 60 90 55.5 90 50V30" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M30 50V70C30 75.5 43.4 80 60 80C76.6 80 90 75.5 90 70V50" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="1.5" />
          </g>
          {/* Excel sheet shape */}
          <g transform="translate(210, 50)">
            <rect x="0" y="0" width="90" height="90" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="15" y1="20" x2="75" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="15" y1="35" x2="75" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="15" y1="50" x2="75" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="15" y1="65" x2="75" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            {/* Checkmark */}
            <path d="M40 75 L45 80 L55 70" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* Arrow flow */}
          <path d="M165 90 H 195" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,2" />
          <defs>
            <linearGradient id="result-grad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: 'Foundation Website',
      description: 'Developed and deployed a responsive website for a charitable foundation using React. Built reusable UI components to display activities, events, and volunteer information. Implemented contact and volunteer forms with email integration. Optimized the website for improved responsiveness across desktop and mobile devices.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      imageGraphic: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="url(#foundation-grad)" />
          {/* Wireframe items */}
          <rect x="50" y="40" width="300" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <rect x="70" y="60" width="70" height="40" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <rect x="155" y="60" width="175" height="10" rx="2" fill="rgba(59, 130, 246, 0.3)" />
          <rect x="155" y="78" width="175" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="155" y="90" width="100" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
          
          <rect x="70" y="115" width="75" height="25" rx="12" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="108" cy="127" r="4" fill="#06b6d4" />
          <rect x="160" y="115" width="75" height="25" rx="12" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1.5" />
          <defs>
            <linearGradient id="foundation-grad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: 'AI Smart Traffic Prediction & Congestion Management System',
      description: 'Developing an AI-powered traffic management system to predict congestion using real-time and historical traffic data. Built and trained an XGBoost model to forecast congestion levels by analyzing traffic volume, weather conditions, and temporal features, and achieved a prediction accuracy of 88%. Building interactive dashboards for monitoring traffic density, incidents, and road network performance. Implementing REST APIs, JWT-based authentication, and PostgreSQL for secure data management.',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'XGBoost'],
      imageGraphic: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="url(#traffic-grad)" />
          {/* Map Grid */}
          <path d="M50 0V200M150 0V200M250 0V200M350 0V200M0 50H400M0 150H400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          {/* Routes */}
          <path d="M0 100H400" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
          <path d="M200 0V200" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
          {/* Moving signals */}
          <circle cx="200" cy="100" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,3" className="animate-spin" style={{ transformOrigin: '200px 100px', animationDuration: '10s' }} />
          <circle cx="200" cy="100" r="6" fill="#06b6d4" />
          <circle cx="100" cy="100" r="4" fill="#ef4444" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="300" cy="100" r="4" fill="#22c55e" />
          <circle cx="200" cy="50" r="4" fill="#eab308" />
          {/* Glow orbs */}
          <circle cx="200" cy="100" r="80" fill="url(#traffic-glow)" />
          <defs>
            <linearGradient id="traffic-grad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
            <radialGradient id="traffic-glow" cx="200" cy="100" r="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col group transition-all duration-300 hover:border-primary/20 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)]"
            >
              {/* Project Image Panel */}
              <div className="w-full relative overflow-hidden aspect-video border-b border-white/5">
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                  {project.imageGraphic}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-semibold text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
