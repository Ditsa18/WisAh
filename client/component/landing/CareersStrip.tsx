'use client'

import { motion } from 'framer-motion'
import Button from '@/component/ui/Button'
import TagPill from '@/component/ui/TagPill'

export default function CareersStrip() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-tan/60 p-6 md:flex-row md:p-8"
        >
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="text-lg font-medium text-espresso">
              Want to be part of the team?
            </h3>
            <TagPill>3 vacancies available</TagPill>
          </div>
          <Button size="md">Apply now</Button>
        </motion.div>
      </div>
    </section>
  )
}
