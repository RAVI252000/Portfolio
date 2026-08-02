import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const AnimatedCounter: React.FC<StatProps> = ({ value, suffix = '', label }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <div className="glass-panel-interactive rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="font-display text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center justify-center">
        <span ref={ref}>0</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-sm font-semibold tracking-wider text-text-secondary uppercase">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 3, suffix: '', label: 'Projects Completed' },
    { value: 6, suffix: '', label: 'Programming Languages' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            About <span className="text-gradient-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brief Intro and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">
              B.Tech in Computer Science & Engineering
            </h3>
            
            <div className="space-y-4 text-text-secondary leading-relaxed text-base md:text-lg">
              <p>
                I am currently pursuing my undergraduate degree in Computer Science and Engineering at 
                <span className="text-white font-semibold"> MVGR College of Engineering</span> (expected graduation in 
                <span className="text-primary font-semibold"> 2027</span>).
              </p>
              <p>
                My passion lies at the intersection of software engineering, artificial intelligence, and web development. 
                I enjoy building modern digital applications that solve real-world problems and analyzing datasets to drive smart outcomes. 
                I am highly enthusiastic about practicing algorithms and data structures on competitive coding platforms, 
                striving to continuously elevate my capabilities and adapt to modern technological trends.
              </p>
              <p>
                I have active experience with AI-assisted prototype construction, interactive web applications using Flask/SQLAlchemy/React, and virtualization internships focusing on Data Analytics.
              </p>
            </div>

            {/* Micro details with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Institution</p>
                  <p className="text-sm font-medium">MVGR College of Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Graduation Year</p>
                  <p className="text-sm font-medium">2027</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-accent-purple">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm font-medium">Adagam, Gajapati, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-rose-500">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Core Interests</p>
                  <p className="text-sm font-medium">Web Apps, AI, Data Analytics</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Counters Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
