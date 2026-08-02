import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send, Code2, Database, GitBranch } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';

const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Floating technology nodes
  const floatingTech = [
    { name: 'Java', icon: <Code2 className="h-5 w-5 text-orange-500" />, delay: 0, x: '-20%', y: '-30%', color: 'from-orange-500/20 to-red-500/20 border-orange-500/30' },
    { name: 'Python', icon: <Code2 className="h-5 w-5 text-yellow-500" />, delay: 1.5, x: '25%', y: '-35%', color: 'from-yellow-500/20 to-blue-500/20 border-yellow-500/30' },
    { name: 'React', icon: <Code2 className="h-5 w-5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />, delay: 0.8, x: '-30%', y: '25%', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-400/30' },
    { name: 'SQL', icon: <Database className="h-5 w-5 text-purple-400" />, delay: 2.2, x: '35%', y: '20%', color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30' },
    { name: 'Git', icon: <GitBranch className="h-5 w-5 text-red-400" />, delay: 1.2, x: '-5%', y: '-42%', color: 'from-red-500/20 to-pink-500/20 border-red-400/30' },
    { name: 'GitHub', icon: <GithubIcon className="h-5 w-5 text-slate-300" />, delay: 1.9, x: '10%', y: '35%', color: 'from-slate-500/20 to-slate-700/20 border-slate-400/30' },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
            >
              <span>Available for Placements & Internships</span>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                Hi, I'm <span className="text-gradient-primary">Sanku Ravi Kishore Dora Babu</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-slate-300 font-display"
              >
                Computer Science Engineering Student <span className="text-accent">|</span> Software Developer <span className="text-accent">|</span> AI & Data Analytics Enthusiast
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-text-secondary leading-relaxed"
              >
                I build modern web applications, explore AI-driven solutions, and enjoy solving programming problems while continuously learning new technologies.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll('#projects')}
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/95 hover:shadow-primary/45 hover:scale-105"
              >
                View Projects
              </button>
              
              <button
                onClick={() => handleScroll('#resume')}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
              >
                <FileText className="h-4 w-4" /> Download Resume
              </button>

              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-6 py-3.5 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent/15 hover:border-accent/30 hover:scale-105"
              >
                <Send className="h-4 w-4" /> Contact Me
              </button>
            </motion.div>
          </div>

          {/* Interactive Hero Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] md:h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex justify-center items-center"
            >
              {/* Outer rotating decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-accent/10 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Core glow */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-primary/10 via-accent/5 to-accent-purple/10 blur-xl animate-pulse" />
              
              {/* Glassmorphic central code panel */}
              <div className="absolute w-60 h-60 md:w-64 md:h-64 rounded-3xl glass-panel p-6 flex flex-col justify-between shadow-2xl border border-white/10 z-20">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">portfolio.tsx</span>
                </div>
                
                <div className="font-mono text-xs text-left py-4 space-y-1.5 overflow-hidden flex-1 select-none">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                  <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-300">"Sanku Ravi Kishore Dora Babu"</span>,</div>
                  <div className="pl-4"><span className="text-slate-400">role:</span> <span className="text-green-300">"CSE Student"</span>,</div>
                  <div className="pl-4"><span className="text-slate-400">passionate:</span> <span className="text-amber-300">true</span>,</div>
                  <div className="pl-4"><span className="text-slate-400">skills:</span> [</div>
                  <div className="pl-8 text-cyan-300">"Java", "Python", "React",</div>
                  <div className="pl-8 text-cyan-300">"FastAPI", "SQL", "Git"</div>
                  <div className="pl-4">]</div>
                  &#125;;
                </div>
                
                <div className="border-t border-white/5 pt-3 flex items-center justify-between text-slate-500 font-mono text-[9px]">
                  <span>UTF-8</span>
                  <span>TypeScript React</span>
                </div>
              </div>

              {/* Floating tech nodes around the center */}
              {floatingTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className={`absolute rounded-2xl bg-gradient-to-br ${tech.color} border px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-md z-30 select-none cursor-pointer`}
                  style={{ left: `calc(50% + ${tech.x})`, top: `calc(50% + ${tech.y})` }}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 4, -4, 0]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay
                  }}
                  whileHover={{ scale: 1.15, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  {tech.icon}
                  <span className="text-xs font-semibold text-white">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center items-center pt-24 pb-8"
        >
          <button
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-xs font-semibold text-text-secondary tracking-widest uppercase hover:text-white transition-colors"
          >
            Scroll Down
            <div className="rounded-full border border-white/10 p-1 bg-white/5">
              <ArrowDown className="h-3 w-3" />
            </div>
          </button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
