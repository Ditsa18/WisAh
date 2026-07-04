'use client'

import { footerLinks } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Decorative gradient image at top */}
        <div className="mb-12 h-32 rounded-3xl bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 opacity-50" />

        {/* 4-column link layout */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-medium text-espresso">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-espresso/70 hover:text-espresso transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-espresso">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-espresso/70 hover:text-espresso transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-espresso">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-espresso/70 hover:text-espresso transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-espresso">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-espresso/70 hover:text-espresso transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-tan/60 pt-8 md:flex-row">
          <p className="text-sm text-espresso/60">
            © {new Date().getFullYear()} WisdomAhead. All rights reserved.
          </p>
          <p className="text-sm text-espresso/60">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
