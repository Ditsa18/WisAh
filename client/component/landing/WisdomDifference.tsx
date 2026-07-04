'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'

export default function WisdomDifference() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTag>The Wisdom Difference</SectionTag>
          <h2 className="mt-6 mb-6 text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
            <span className="text-espresso">Board-Level</span>{' '}
            <span className="italic text-deep-red">AI Strategy</span>
          </h2>
          <p className="mb-6 text-xl font-medium text-espresso">
            We don't sell software. We advise leadership.
          </p>
          <p className="max-w-2xl mx-auto text-lg text-espresso/70 font-light leading-relaxed">
            Our approach is rooted in real-world media experience—focused on building resilient, autonomous, and future-ready organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
