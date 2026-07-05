'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/media-operations.jpg"
              alt="Media Operations and AI Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-red/10 to-transparent mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <SectionTag>Our Story</SectionTag>
            </div>
            
            <h2 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-espresso">
              Built on the Frontlines of <br/>
              <span className="font-medium text-deep-red">Media Transformation.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-espresso/70 font-light leading-relaxed">
              <p>
                Wisdomahead was founded on a singular observation: the world's most influential media organizations were struggling not with content, but with the systems behind it. Decades of institutional knowledge sat trapped in legacy workflows.
              </p>
              <p>
                AI promised transformation, but public, cloud-dependent solutions posed unacceptable risks to proprietary data and competitive advantage. We set out to change that, combining four decades of C-suite media leadership with deep expertise in sovereign AI architecture.
              </p>
              <p>
                We don't implement off-the-shelf software. We design intelligent operational systems that are private, secure, and purpose-built for the unique demands of media enterprises who understand that operational excellence is the foundation of editorial excellence.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              className="mt-12 grid grid-cols-2 gap-8 pt-10 border-t border-espresso/10"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <h4 className="text-3xl md:text-4xl font-medium text-espresso mb-2">40+</h4>
                <p className="text-xs md:text-sm text-espresso/60 uppercase tracking-wider leading-relaxed">Years Media Leadership</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <h4 className="text-3xl md:text-4xl font-medium text-espresso mb-2">100%</h4>
                <p className="text-xs md:text-sm text-espresso/60 uppercase tracking-wider leading-relaxed">Data Sovereignty</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
