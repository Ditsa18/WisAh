'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/component/ui/Button'
import GradientImagePanel from '@/component/ui/GradientImagePanel'
import RadioPill from '@/component/ui/RadioPill'
import { Star } from 'lucide-react'
import { serviceOptions, challengeOptions } from '@/lib/constants'
import SectionTag from '@/component/ui/SectionTag'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    challenge: '',
    message: '',
  })

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const handleChallengeChange = (value: string) => {
    setFormData({ ...formData, challenge: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <SectionTag>Contact</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-espresso">
              Turn confusion into clarity, today.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left: Image Panel */}
            <div className="relative h-[500px]">
              <GradientImagePanel className="h-full w-full">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brown text-brown" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm font-medium text-white/90">
                    Helped over 100+ businesses
                  </p>
                  <h3 className="mb-4 text-2xl font-light text-white">
                    Turn confusion into clarity, today.
                  </h3>
                  <p className="text-white/80">
                    Book a free 30-minute assessment and we'll show you exactly where AI can save you time and money.
                  </p>
                </div>
              </GradientImagePanel>
            </div>

            {/* Right: Form */}
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-espresso">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border-2 border-tan/60 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/40 focus:border-brown focus:outline-none focus:ring-2 focus:ring-brown/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-espresso">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border-2 border-tan/60 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/40 focus:border-brown focus:outline-none focus:ring-2 focus:ring-brown/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-espresso">
                    What services are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((option) => (
                      <RadioPill
                        key={option}
                        name="service"
                        value={option}
                        label={option}
                        checked={formData.service === option}
                        onChange={handleServiceChange}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-espresso">
                    What's your biggest automation challenge?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {challengeOptions.map((option) => (
                      <RadioPill
                        key={option}
                        name="challenge"
                        value={option}
                        label={option}
                        checked={formData.challenge === option}
                        onChange={handleChallengeChange}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-espresso">
                    Tell us about your business...
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-2xl border-2 border-tan/60 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/40 focus:border-brown focus:outline-none focus:ring-2 focus:ring-brown/20"
                    placeholder="Brief description of your business and goals"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Contact Us
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
