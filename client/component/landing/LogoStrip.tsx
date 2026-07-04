'use client'

import { motion } from 'framer-motion'

export default function LogoStrip() {
  // TODO: Replace with actual client logos
  const placeholderLogos = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-medium text-espresso/60 uppercase tracking-wider">
            Brands we've helped implement AI:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {placeholderLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg font-medium text-espresso/40 hover:text-espresso/60 transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
