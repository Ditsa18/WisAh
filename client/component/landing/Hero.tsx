'use client'

import { motion } from 'framer-motion'
import Button from '@/component/ui/Button'
import GradientImagePanel from '@/component/ui/GradientImagePanel'
import DotGridOverlay from '@/component/ui/DotGridOverlay'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center pt-32 pb-20 md:pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6">
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
          <div className="mb-24 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a href="#contact">
              <Button size="lg" className="px-10 py-4 text-lg">Contact Us</Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="flex items-center gap-3 px-10 py-4 text-lg">
                <span>Services</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-espresso/10 text-xs">
                  ▶
                </span>
              </Button>
            </a>
          </div>

          {/* Image Banner */}
          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-6xl aspect-square sm:aspect-[4/3] md:aspect-[16/9] rounded-[32px] md:rounded-[40px] overflow-hidden border border-espresso/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] group bg-tan/20"
          >
            {/* Fallback gradient if video is not available */}
            <GradientImagePanel className="absolute inset-0 h-full w-full opacity-50" showDotGrid />
            
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-espresso/5 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
