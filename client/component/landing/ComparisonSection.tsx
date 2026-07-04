'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'

export default function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <SectionTag>Why Choose Us</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-espresso">
              We're not your typical AI agency.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-espresso/70">
              We skip the buzzwords and experimental projects to build systems that actually work for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Other Agencies Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8"
            >
              <h3 className="mb-6 text-2xl font-medium text-espresso">
                Other agencies
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                  Sell what's trendy
                </span>
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                  Unclear timelines
                </span>
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                  Hidden costs
                </span>
              </div>
              <p className="text-sm text-espresso/70">
                Other agencies overwhelm you with buzzwords, take months to deliver, and surprise you with hidden fees.
              </p>
            </motion.div>

            {/* WisdomAhead Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-8"
            >
              <h3 className="mb-6 text-2xl font-medium text-espresso">
                WisdomAhead
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  Build what matters
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  Done with you
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  Transparent process
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  Real results
                </span>
              </div>
              <p className="text-sm text-espresso/70">
                At WisdomAhead, we use simple language, deliver results in weeks, and show you exactly what you're paying for.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
