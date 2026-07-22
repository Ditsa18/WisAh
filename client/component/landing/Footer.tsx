'use client'

import { footerLinks } from '@/lib/constants'
import Image from 'next/image'
import Button from '@/component/ui/Button'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 rounded-t-[40px] mt-20 border-t border-espresso/10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top: Newsletter & Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 border-b border-espresso/10 pb-16">
          <div className="max-w-md">
            <Image
              src="/logo.png"
              alt="WisdomAhead Enterprise AI Logo"
              width={140}
              height={48}
              className="w-auto h-10 mb-6"
            />
            <p className="text-espresso/70 font-light leading-relaxed mb-8">
              Strategic intelligence and sovereign AI advisory for the world's leading media enterprises.
            </p>
          </div>
          
          <div className="w-full lg:w-auto">
            <h4 className="text-lg font-medium text-espresso mb-4">Subscribe to our executive brief</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-cream-alt border border-espresso/20 rounded-full px-6 py-4 text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-deep-red w-full sm:w-auto sm:min-w-[300px] transition-colors shadow-sm"
              />
              <Button className="bg-deep-red text-white hover:bg-deep-red/90 px-8 py-4 shrink-0 shadow-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* 4-column link layout */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 mb-20">
          <div>
            <h4 className="mb-6 font-medium text-espresso uppercase tracking-widest text-sm">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-espresso/60 hover:text-deep-red transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium text-espresso uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-espresso/60 hover:text-deep-red transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium text-espresso uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-espresso/60 hover:text-deep-red transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium text-espresso uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-espresso/60 hover:text-deep-red transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-espresso/10 pt-8 md:flex-row">
          <p className="text-sm text-espresso/50 font-light">
            © {new Date().getFullYear()} WisdomAhead. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-espresso/50 font-light cursor-pointer hover:text-espresso transition-colors">Privacy Policy</span>
            <span className="text-sm text-espresso/50 font-light cursor-pointer hover:text-espresso transition-colors">Terms of Service</span>
          </div>
        </div>
        </motion.div>
      </div>
    </footer>
  )
}
