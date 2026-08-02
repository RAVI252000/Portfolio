import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

interface Profile {
  name: string;
  url: string;
  icon: React.ReactNode;
  username: string;
  metrics: string;
  color: string;
}

const CodingProfiles: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const profilesList: Profile[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/RAVI252000',
      username: '@RAVI252000',
      metrics: '3 key software projects | Software & AI',
      color: 'border-slate-800 shadow-slate-900/10 group-hover:border-slate-500',
      icon: <GithubIcon className="h-7 w-7 text-slate-200" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanku-ravi-kishore-dora-babu-4bb25a280/',
      username: 'Sanku Ravi Kishore Dora Babu',
      metrics: 'Connect for collaborations & placements',
      color: 'border-blue-900 shadow-blue-900/5 group-hover:border-[#0A66C2]',
      icon: <LinkedinIcon className="h-7 w-7 text-[#0A66C2]" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ravikishoresanku/',
      username: 'ravikishoresanku',
      metrics: 'Problem Solving | DSA',
      color: 'border-amber-900 shadow-amber-900/5 group-hover:border-[#FFA116]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-[#FFA116]">
          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.72c-.466-.45-.466-1.177 0-1.627l8-7.72c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.177 0 1.627L10.3 13l5.802 4.93z" />
        </svg>
      )
    }
  ];

  return (
    <section id="profiles" ref={ref} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Coding & professional <span className="text-gradient-primary">Profiles</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
          {profilesList.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel-interactive rounded-2xl p-6 border flex items-start gap-4 group cursor-pointer ${profile.color}`}
            >
              {/* Profile Icon */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                {profile.icon}
              </div>

              {/* Card Meta */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-white text-base">
                    {profile.name}
                  </h3>
                  <ExternalLink className="h-3.5 w-3.5 text-text-secondary group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-xs font-semibold text-primary tracking-wide truncate">
                  {profile.username}
                </p>
                <p className="text-xs text-text-secondary leading-normal">
                  {profile.metrics}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
