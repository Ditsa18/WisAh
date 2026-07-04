'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { faqData } from '@/lib/constants'
import AccordionItem from '@/component/ui/AccordionItem'
import SectionTag from '@/component/ui/SectionTag'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <SectionTag>FAQ</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-espresso">
              Your questions answered.
            </h2>
            <p className="mt-4 text-lg text-espresso/70">
              Everything you need to know about working with us. Still have questions? Book a free call and we'll walk you through it.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
