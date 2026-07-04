'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/component/ui/Button'
import SectionTag from '@/component/ui/SectionTag'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32">
            
            {/* Left: Heading & Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <SectionTag>Contact</SectionTag>
              </div>
              <h2 className="mb-8 text-4xl md:text-5xl font-light text-espresso leading-tight">
                Ready to explore what <br/>
                <span className="italic text-deep-red">sovereign AI</span> can do for your organisation?
              </h2>
              <p className="mb-16 text-xl text-espresso/70 font-light max-w-md">
                We work with a selective group of media executives — reach out to begin the conversation.
              </p>
              
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10 border-t border-espresso/10 pt-10">
                <div>
                  <h4 className="text-xl font-medium text-espresso mb-1">Quick Response</h4>
                  <p className="text-sm font-light text-espresso/70 uppercase tracking-wide">24–48 hour turnaround</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-espresso mb-1">Expert Team</h4>
                  <p className="text-sm font-light text-espresso/70 uppercase tracking-wide">Media specialists only</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-deep-red mb-1">500+</h4>
                  <p className="text-sm font-light text-espresso/70 uppercase tracking-wide">Media Companies</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-deep-red mb-1">98%</h4>
                  <p className="text-sm font-light text-espresso/70 uppercase tracking-wide">Client Retention</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="w-full space-y-6 md:space-y-8 bg-cream-alt p-8 sm:p-10 md:p-14 rounded-[32px] shadow-xl border border-espresso/5">
                <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-espresso uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-espresso/20 bg-transparent py-3 text-espresso placeholder:text-espresso/30 focus:border-deep-red focus:outline-none transition-colors rounded-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-espresso uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border-b border-espresso/20 bg-transparent py-3 text-espresso placeholder:text-espresso/30 focus:border-deep-red focus:outline-none transition-colors rounded-none"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-espresso uppercase tracking-wider">
                    Executive Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-espresso/20 bg-transparent py-3 text-espresso placeholder:text-espresso/30 focus:border-deep-red focus:outline-none transition-colors rounded-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-espresso uppercase tracking-wider">
                    Context
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b border-espresso/20 bg-transparent py-3 text-espresso placeholder:text-espresso/30 focus:border-deep-red focus:outline-none transition-colors rounded-none resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-5 text-lg mt-4 shadow-md hover:shadow-xl">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
