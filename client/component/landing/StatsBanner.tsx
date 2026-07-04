'use client'

import { motion } from 'framer-motion'

export default function StatsBanner() {
  const stats = [
    {
      value: '1,500+',
      label: 'Hours saved for clients monthly',
    },
    {
      value: '35%',
      label: 'Average reduction in manual work',
    },
    {
      value: '45 days',
      label: 'Average time to measurable ROI',
    },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-teal-600 via-teal-500 to-orange-500 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="mb-2 text-4xl md:text-5xl font-light text-white">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-white/90">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
