'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function Founder() {
  return (
    <section id="founder" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content (Spans 7 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="mb-8">
              <SectionTag>Leadership</SectionTag>
            </div>
            
            <h2 className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-espresso">
              D. D. Purkayastha
            </h2>
            <p className="text-deep-red mb-2 uppercase tracking-widest text-sm font-medium">Founder and Principal Advisor</p>
            <p className="text-espresso/60 mb-10 uppercase tracking-wider text-xs">Global Media Leader · Author · Board-Level Strategist</p>
            
            <div className="mb-10 pb-8 border-b border-espresso/10">
               <h4 className="text-4xl sm:text-5xl font-light text-espresso mb-2">40+</h4>
               <p className="text-xs sm:text-sm text-espresso/60 uppercase tracking-wider">Years in Media Leadership</p>
            </div>

            <div className="space-y-6 text-lg text-espresso/70 font-light leading-relaxed mb-10">
              <p>
                With over four decades of leadership in the media industry, D. D. Purkayastha brings deep, institutional knowledge at the intersection of media, technology, and business transformation. As the former Managing Director & CEO of the ABP Group, he led one of India's most influential media organizations through multiple phases of evolution — across print, broadcast, and digital. Having worked at the highest levels, he understands:
              </p>
              
              <ul className="space-y-4 pt-4">
                 <li className="flex gap-4 items-start">
                    <span className="text-deep-red font-medium text-sm mt-1">01</span>
                    <span>How large media organizations scale</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="text-deep-red font-medium text-sm mt-1">02</span>
                    <span>Where inefficiencies exist within legacy systems</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="text-deep-red font-medium text-sm mt-1">03</span>
                    <span>How technology can transform operational economics</span>
                 </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-espresso/10 mt-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-espresso/90 font-light leading-relaxed mb-8 italic">
                "We don't just advise transformation. We've led it."
              </p>
              
              <a 
                href="https://www.linkedin.com/in/d-d-purkayastha-3bb71466/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-espresso transition-all hover:text-deep-red group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 group-hover:border-deep-red group-hover:scale-110 transition-all duration-300">
                  <Linkedin size={18} className="group-hover:text-deep-red transition-colors" />
                </span>
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Portrait (Spans 5 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <Image
              src="/founder-portrait.jpg"
              alt="Ditsa18 - Founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-espresso/5 mix-blend-multiply pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
