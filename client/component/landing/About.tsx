'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>About</SectionTag>
          <h2 className="text-3xl md:text-4xl font-light text-espresso">
            About WisdomAhead
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-espresso/70">
            We help media enterprises and C-suite leaders implement AI solutions that actually work—no buzzwords, just results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
