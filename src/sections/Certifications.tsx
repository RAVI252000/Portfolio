import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  badgeColor: string;
}

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certificatesList: Certificate[] = [
    {
      title: 'AI Primer Certification',
      issuer: 'Infosys Springboard',
      date: 'July 2026',
      verificationUrl: '#',
      badgeColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Principles of Generative AI',
      issuer: 'Infosys Springboard',
      date: 'July 2026',
      verificationUrl: '#',
      badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'AI Certification',
      issuer: 'Infosys Springboard',
      date: 'July 2026',
      verificationUrl: '#',
      badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <section id="certifications" ref={ref} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Licenses & <span className="text-gradient-primary">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-interactive rounded-2xl p-6 border border-white/5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border ${cert.badgeColor}`}>
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-text-secondary">
                    <Calendar className="h-3 w-3" /> {cert.date}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-white text-base leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-secondary font-medium tracking-wide">
                    Issued by: <span className="text-slate-300">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-6 mt-6 border-t border-white/5 flex justify-end items-center">
                {cert.verificationUrl !== '#' ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors"
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs font-bold text-slate-500 select-none flex items-center gap-1">
                    Verified <ShieldCheck className="h-3 w-3 text-slate-500" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
