import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

const Resume: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" ref={ref} className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            My <span className="text-gradient-primary">Resume</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        {/* Resume Card Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 h-32 w-32 rounded-full glow-orb-primary opacity-10 blur-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full glow-orb-purple opacity-10 blur-xl pointer-events-none" />

            {/* Graphic Representation */}
            <div className="relative flex justify-center items-center h-48 w-48 rounded-2xl bg-white/5 border border-white/5 flex-shrink-0 shadow-inner group overflow-hidden">
              {/* Spinning decor */}
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '40s' }} />
              <FileText className="h-20 w-20 text-primary group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-4 right-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 p-1.5 shadow-lg">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </div>

            {/* Description and Action */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  Looking for the complete profile?
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  Download my comprehensive resume outlining academic achievements, technical projects, 
                  virtual internships, certifications, and programming competency in Java, Python, and React.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto md:mx-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>B.Tech CSE Student (2027)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>AI & Data Analytics Internship</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>4+ Key Software Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Gold Badge Coding Stats</span>
                </div>
              </div>

              {/* Large Download Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="/resume.pdf"
                  download="Sanku_Ravi_Kishore_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-cyan-500/35 hover:scale-105 group"
                >
                  <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                  Download Resume PDF
                </a>
                
                <span className="text-xs text-text-secondary font-mono select-none">
                  PDF format (under 200KB)
                </span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
