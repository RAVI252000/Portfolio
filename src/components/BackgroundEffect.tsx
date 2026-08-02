import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-dark-bg">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial ambient glow orbs */}
      <div 
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full glow-orb-primary opacity-20 blur-[120px] md:opacity-30 md:blur-[160px] animate-pulse-slow"
        style={{ animationDuration: '8s' }}
      />
      
      <div 
        className="absolute top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full glow-orb-accent opacity-20 blur-[100px] md:opacity-25 md:blur-[140px] animate-pulse-slow"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />

      <div 
        className="absolute -bottom-[10%] left-[20%] h-[550px] w-[550px] rounded-full glow-orb-purple opacity-15 blur-[120px] md:opacity-20 md:blur-[150px] animate-pulse-slow"
        style={{ animationDuration: '10s', animationDelay: '4s' }}
      />

      {/* Subtle light streak */}
      <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[1px]" />
    </div>
  );
};

export default BackgroundEffect;
