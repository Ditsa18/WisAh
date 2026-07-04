'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/component/ui/SectionTag'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Strategic Business Process Optimization',
    desc: 'We map every operational layer of your media organization — from editorial production to distribution logistics — identifying friction points where manual processes drain margin and slow decision-making. Our recommendations are grounded in four decades of C-suite media leadership, not theoretical frameworks.'
  },
  {
    num: '02',
    title: 'Intelligent Workflow Orchestration',
    desc: 'Media enterprises run on complex, interdependent workflows. We design AI-native orchestration systems that coordinate content production, cross-platform adaptation, and resource allocation — reducing time-to-market by 40-60% while preserving editorial quality and creative control.'
  },
  {
    num: '03',
    title: 'Secure Corporate Intelligence',
    desc: 'Your archives, subscriber data, and competitive research represent decades of proprietary value. We architect private intelligence systems that transform this data into real-time strategic insights — all while ensuring zero exposure to public AI platforms and complete regulatory compliance.'
  },
  {
    num: '04',
    title: 'Operational Cost Transformation',
    desc: 'True cost transformation in media requires more than automation — it requires reimagining how human capital is deployed. We help shift teams from repetitive execution to strategic oversight, using AI-led systems that augment rather than replace institutional expertise.'
  }
]

export default function ProcessSteps() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="capabilities" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-20">
            <SectionTag>Capabilities</SectionTag>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
              Four Pillars <br/>
              <span className="italic text-deep-red">of Transformation.</span>
            </h2>
            <p className="mt-6 text-xl text-espresso/70 font-light max-w-2xl">
              Our comprehensive approach combines strategic insight with technical excellence to deliver measurable results for media enterprises.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-10 rounded-[32px] bg-cream border border-espresso/5 hover:border-espresso/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl md:text-5xl font-light text-deep-red/40 mb-6 group-hover:text-deep-red transition-colors duration-500">
                    {pillar.num}
                  </div>
                  <h3 className="text-2xl font-medium text-espresso mb-4 leading-snug group-hover:text-deep-red transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-espresso/70 font-light leading-relaxed mb-10">
                    {pillar.desc}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-espresso group-hover:text-deep-red transition-colors pt-6 border-t border-espresso/10 cursor-pointer">
                  DETAILS 
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
