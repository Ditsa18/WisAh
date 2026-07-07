'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '@/component/ui/Button'
import DotGridOverlay from '@/component/ui/DotGridOverlay'
import { X, PlayCircle } from 'lucide-react'

export default function Hero() {
  const [videoState, setVideoState] = useState<'closed' | 'explicit' | 'idle'>('closed');

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const handleActivity = () => {
      // If idle screensaver is playing, any activity closes it
      if (videoState === 'idle') {
        setVideoState('closed');
      }

      // Reset the idle timer if video is not manually open
      clearTimeout(idleTimer);
      if (videoState !== 'explicit') {
        idleTimer = setTimeout(() => {
          setVideoState('idle');
        }, 15000);
      }
    };

    // Set initial timer
    if (videoState !== 'explicit') {
      idleTimer = setTimeout(() => {
        setVideoState('idle');
      }, 15000);
    }

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [videoState]);
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden flex items-center">
      <DotGridOverlay className="opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full"
        >
          {/* Badge */}
          <div className="mb-10">
            <span className="inline-block bg-tan/50 rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase text-espresso">
              Sovereign AI Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 md:mb-8 font-light text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight md:leading-[1.1] tracking-tight text-espresso">
            Operational Excellence <br className="hidden md:block"/> Through <span className="italic text-deep-red">Sovereign AI.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 md:mb-14 max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-espresso/70 leading-relaxed font-light px-4">
            We architect secure, private AI systems that transform internal operations — making media organizations faster, leaner, and more intelligent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a href="/#contact">
                <Button size="lg" className="px-10 py-4 text-lg shadow-md hover:shadow-xl">Contact Us</Button>
              </a>
              <a href="/#services">
                <Button variant="outline" size="lg" className="flex items-center gap-3 px-10 py-4 text-lg">
                  <span>Services</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-espresso/10 text-xs">
                    ▶
                  </span>
                </Button>
              </a>
            </div>

            {/* New Video Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent immediate trigger of activity listener
                setVideoState('explicit');
              }} 
              className="group flex items-center gap-3 text-deep-red font-medium tracking-wide uppercase text-sm mt-4 transition-all hover:opacity-80"
            >
              <PlayCircle size={28} strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
              <span className="border-b border-transparent group-hover:border-deep-red/30 pb-0.5 transition-colors">
                Discover Our Vision
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoState !== 'closed' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 backdrop-blur-xl"
          >
            {videoState === 'explicit' && (
              <button 
                onClick={() => setVideoState('closed')}
                className="absolute top-8 right-8 p-2 text-cream/50 hover:text-white transition-colors z-50"
              >
                <X size={40} strokeWidth={1} />
              </button>
            )}
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-7xl aspect-square sm:aspect-video bg-black/50 overflow-hidden shadow-2xl mx-6 rounded-[24px] md:rounded-[40px] border border-white/10 ${
                videoState === 'idle' ? 'pointer-events-none' : ''
              }`}
            >
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted={videoState === 'idle'} // Screensaver is muted, explicit gets sound if available
                controls={videoState === 'explicit'}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
