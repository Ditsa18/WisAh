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
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/80 backdrop-blur-md' : 'bg-cream'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-espresso/80 transition-colors hover:text-espresso"
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
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Right: CTA Button / Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a href="#contact">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 top-16 bg-cream/80 backdrop-blur-lg z-40"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-espresso transition-colors hover:text-brown"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg">Contact Us</Button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
