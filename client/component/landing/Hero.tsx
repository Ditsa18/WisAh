'use client'

import { motion } from 'framer-motion'
import Button from '@/component/ui/Button'
import GradientImagePanel from '@/component/ui/GradientImagePanel'
import DotGridOverlay from '@/component/ui/DotGridOverlay'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block bg-tan/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-espresso">
              Sovereign AI Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-light text-5xl md:text-6xl lg:text-7xl text-espresso">
            From AI confusion to clarity.
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-2xl mx-auto text-lg text-espresso/70">
            We help media enterprises and C-suite leaders implement AI solutions that actually work—no buzzwords, just results.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contact">
              <Button size="lg">Contact Us</Button>
            </a>
            <a href="#how-we-work">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <span>How we work</span>
                {/* TODO: Add play icon component */}
              </Button>
            </a>
          </div>

          {/* Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <GradientImagePanel className="h-full w-full" showDotGrid>
              <div className="flex h-full items-center justify-center">
                {/* TODO: Replace with actual hero image */}
                <p className="text-white/80 text-lg">Hero Image Placeholder</p>
              </div>
            </GradientImagePanel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
