import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validations
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          // Live Web3Forms Access Key
          access_key: "98bf1f3c-3197-4678-8f6b-b794cf10413f", 
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "Sanku Ravi Kishore Dora Babu Portfolio"
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please check your access key.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Glow orb background */}
      <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full glow-orb-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Get In <span className="text-gradient-primary">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-primary mx-auto mt-4 origin-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                Let's discuss opportunities
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Whether you want to hire me, collaborate on a project, or just talk tech, feel free to send a message or connect with me directly!
              </p>
            </div>

            {/* Direct Info Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold">Email Me</p>
                  <a href="mailto:ravikishoresanku@gmail.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                    ravikishoresanku@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm font-semibold text-white">
                    Adagam, Gajapati, India
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="space-y-3">
              <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Connect Elsewhere</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RAVI252000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-slate-500 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-inner"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sanku-ravi-kishore-dora-babu-4bb25a280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-inner"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden shadow-2xl">
              
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-4 rounded-full bg-green-500/10 border border-green-500/25 text-green-400">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-text-secondary max-w-sm">
                    Thank you for reaching out. Sanku Ravi Kishore Dora Babu will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      disabled={status === 'submitting'}
                      className="w-full rounded-xl bg-dark-bg/60 border border-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 disabled:opacity-55"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      disabled={status === 'submitting'}
                      className="w-full rounded-xl bg-dark-bg/60 border border-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 disabled:opacity-55"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Ravi Kishore, I would like to discuss..."
                      disabled={status === 'submitting'}
                      className="w-full rounded-xl bg-dark-bg/60 border border-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-600 resize-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 disabled:opacity-55"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold"
                    >
                      <AlertCircle className="h-4.5 w-4.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:bg-primary/95 hover:shadow-primary/30 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
