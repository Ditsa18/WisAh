'use client'

import { motion } from 'framer-motion'
import GradientImagePanel from '@/component/ui/GradientImagePanel'

export default function Testimonial() {
  // TODO: Replace with actual testimonial data
  const testimonial = {
    quote: "We don't just advise transformation. We've led it.",
    name: 'Sarah Chen',
    role: 'CEO, MediaCorp',
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Left: Founder Portrait */}
          <div className="relative h-[400px] md:h-[500px]">
            <GradientImagePanel className="h-full w-full" backgroundImage="/founder-portrait.jpg">
              <div className="h-full" />
            </GradientImagePanel>
          </div>

          {/* Right: Quote */}
          <div className="flex flex-col justify-center">
            <blockquote className="mb-8 text-2xl md:text-3xl font-light text-espresso leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-auto">
              <p className="text-lg font-medium text-espresso">{testimonial.name}</p>
              <p className="text-espresso/70">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
