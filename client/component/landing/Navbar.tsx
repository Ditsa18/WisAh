'use client'

import { cn } from '@/lib/utils'
import Button from '@/component/ui/Button'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Capabilities', href: '/#capabilities' },
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-cream/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-cream py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* Left: Nav Links (Desktop) */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-espresso/70 transition-all duration-300 hover:text-deep-red hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <Image
                src="/logo.png"
                alt="WisdomAhead"
                width={250}
                height={80}
                className="h-10 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Right: CTA Button / Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a href="/#contact">
                <Button size="sm" className="hidden md:inline-flex">
                  Contact Us
                </Button>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-espresso"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Moved outside nav to avoid backdrop-filter stacking context issues) */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 top-0 pt-24 bg-cream z-40 flex flex-col items-center justify-start h-screen w-full"
        >
          <div className="flex flex-col items-center gap-8 px-6 mt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-espresso transition-colors hover:text-deep-red"
              >
                {link.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <Button size="lg" className="px-10 py-4 text-lg">Contact Us</Button>
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
