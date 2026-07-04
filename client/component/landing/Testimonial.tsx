'use client'

import { motion } from 'framer-motion'
import GradientImagePanel from '@/component/ui/GradientImagePanel'

export default function Testimonial() {
  const testimonial = {
    quote: "WisdomAhead didn't just give us a strategy. They engineered an intelligence architecture that gave us complete sovereignty over our data and a definitive edge in the market.",
    name: 'Sarah Chen',
    role: 'CEO, Global Media Corp',
  }

  return (
    <section className="py-32 bg-cream-alt overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-espresso/20 to-transparent" />
      
      <div className="mx-auto max-w-5xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="text-8xl font-serif text-deep-red/20 leading-none mb-6">"</div>
          
          <blockquote className="mb-16 text-3xl md:text-4xl lg:text-5xl font-light text-espresso leading-relaxed italic">
            {testimonial.quote}
          </blockquote>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-px bg-deep-red mb-4" />
            <p className="text-xl font-medium text-espresso uppercase tracking-widest">{testimonial.name}</p>
            <p className="text-sm font-light text-espresso/60 uppercase tracking-widest">{testimonial.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
