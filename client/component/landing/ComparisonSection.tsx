'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'
import { X, Check } from 'lucide-react'

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-cream-alt">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-20 text-center flex flex-col items-center">
            <SectionTag>Our Philosophy</SectionTag>
            <h2 className="mt-6 text-4xl md:text-5xl font-light text-espresso">
              The Advisory <span className="italic text-deep-red">Standard.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-espresso/70 font-light leading-relaxed">
              We reject the typical software vendor model. Our approach is designed for media enterprises that require strategic alignment, not just technological implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* The Vendor Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] bg-transparent border border-espresso/10 p-10 md:p-14"
            >
              <h3 className="mb-8 text-2xl font-light text-espresso/50 uppercase tracking-widest text-sm">
                The Vendor Approach
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <X size={20} className="text-espresso/30 shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso/70 font-light">Pushing off-the-shelf, generalized AI tools.</span>
                </li>
                <li className="flex items-start gap-4">
                  <X size={20} className="text-espresso/30 shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso/70 font-light">Exposing proprietary media archives to public LLMs.</span>
                </li>
                <li className="flex items-start gap-4">
                  <X size={20} className="text-espresso/30 shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso/70 font-light">Focusing entirely on technology rather than editorial workflow.</span>
                </li>
                <li className="flex items-start gap-4">
                  <X size={20} className="text-espresso/30 shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso/70 font-light">Lengthy implementations with ambiguous ROI.</span>
                </li>
              </ul>
            </motion.div>

            {/* The Wisdom Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-espresso/5 p-10 md:p-14 relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-deep-red" />
              
              <h3 className="mb-8 text-2xl font-medium text-espresso uppercase tracking-widest text-sm">
                The Wisdom Approach
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check size={20} className="text-deep-red shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso font-light">Architecting bespoke, media-native intelligence systems.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={20} className="text-deep-red shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso font-light">Ensuring 100% data sovereignty and regulatory compliance.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={20} className="text-deep-red shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso font-light">Optimizing the intersection of operations and editorial quality.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={20} className="text-deep-red shrink-0 mt-0.5" />
                  <span className="text-lg text-espresso font-light">Measurable operational cost reduction in a 90-day window.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
