import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import EducationExperience from './sections/EducationExperience';
import Certifications from './sections/Certifications';
import CodingProfiles from './sections/CodingProfiles';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Premium background gradient patterns */}
      <BackgroundEffect />

      {/* Sticky transparent header */}
      <Navbar />

      {/* Main content layouts */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative border-t border-white/5 py-12 mt-12 bg-slate-950/60 backdrop-blur-md z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side copyright */}
            <div className="text-center md:text-left space-y-1.5">
              <p className="text-sm font-semibold tracking-wide text-white">
                Copyright © 2026 Sanku Ravi Kishore Dora Babu. All rights reserved.
              </p>
              <p className="text-xs text-text-secondary">
                Designed for placements, academic milestones, and engineering showcase.
              </p>
            </div>

            {/* Right side credits */}
            <div className="text-center md:text-right text-xs md:text-sm font-medium text-slate-400">
              <span>Made with React, Tailwind CSS, and </span>
              <span className="text-rose-500 animate-pulse inline-block">❤️</span>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating Back To Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary/20 hover:bg-primary text-white border border-primary/30 hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-500 z-50 hover:scale-110 cursor-pointer ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default App;
