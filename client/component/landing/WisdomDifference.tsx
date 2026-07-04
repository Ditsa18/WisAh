'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'

export default function WisdomDifference() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>The Wisdom Difference</SectionTag>
          <h2 className="mb-4 text-3xl md:text-4xl font-light text-espresso">
            <span className="text-espresso">Board-Level</span>{' '}
            <span className="text-brown/80">AI Strategy</span>
          </h2>
          <p className="mb-6 text-lg font-medium text-espresso">
            We don't sell software. We advise leadership.
          </p>
          <p className="max-w-2xl mx-auto text-espresso/70">
            Our approach is rooted in real-world media experience—focused on building resilient, autonomous, and future-ready organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
