'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SectionTag from '@/component/ui/SectionTag'
import { ArrowRight } from 'lucide-react'

type CategoryType = 'Strategic Insights' | 'Transformation Cases' | 'Advisory Frameworks';

const hubData: Record<CategoryType, any[]> = {
  'Strategic Insights': [
    {
      metaLeft: '8 min read',
      title: 'The Sovereign AI Imperative for Media Enterprises',
      description: 'Why the world\'s largest media organizations are moving away from cloud-dependent AI and toward private, sovereign intelligence architectures.',
      metaRight: 'March 2026',
      cta: 'Coming Soon'
    },
    {
      metaLeft: '6 min read',
      title: 'Operational Excellence vs. Editorial Excellence',
      description: 'The hidden truth: operational friction costs media organizations more than competitive content strategy. How AI transforms the back office into a strategic asset.',
      metaRight: 'February 2026',
      cta: 'Coming Soon'
    },
    {
      metaLeft: '10 min read',
      title: 'Board-Level AI Governance: A Framework for Media CEOs',
      description: 'A practical governance framework for media executives who must balance innovation velocity with data sovereignty and regulatory compliance.',
      metaRight: 'January 2026',
      cta: 'Coming Soon'
    }
  ],
  'Transformation Cases': [
    {
      metaLeft: 'Multi-Platform Media',
      title: 'Transforming a Legacy Print-to-Digital Operation',
      description: 'How a century-old media group reduced operational costs by 34% and accelerated digital content velocity through sovereign AI workflow orchestration.',
      metaRight: '34% cost reduction',
      cta: 'Coming Soon'
    },
    {
      metaLeft: 'Broadcast News',
      title: 'Building a Private Intelligence Layer for Broadcast News',
      description: 'Architecting a secure, on-premise AI system that transformed decades of archival footage and transcripts into a real-time editorial intelligence engine.',
      metaRight: '60% faster research cycles',
      cta: 'Coming Soon'
    },
    {
      metaLeft: 'Regional News Network',
      title: 'Consolidating 14 Siloed Data Systems into One AI-Native Platform',
      description: 'A phased migration strategy that preserved institutional knowledge while eliminating redundant manual processes across regional news bureaus.',
      metaRight: '12 systems decommissioned',
      cta: 'Coming Soon'
    }
  ],
  'Advisory Frameworks': [
    {
      metaLeft: 'Assessment Tool',
      title: 'The WISDOM Transformation Matrix',
      description: 'Our proprietary 6-dimensional assessment framework for evaluating AI readiness across Workflow, Intelligence, Strategy, Data, Operations, and Management.',
      metaRight: 'Resource',
      cta: 'Coming Soon'
    },
    {
      metaLeft: 'Technical Guide',
      title: 'Sovereign AI Architecture Blueprint',
      description: 'A technical and strategic blueprint for designing private AI systems that maintain full data control while enabling advanced operational intelligence.',
      metaRight: 'Resource',
      cta: 'Coming Soon'
    },
    {
      metaLeft: 'Implementation Roadmap',
      title: 'The 90-Day Executive Activation Roadmap',
      description: 'A phased implementation roadmap designed for C-suite media leaders who need to demonstrate measurable AI impact within a single quarter.',
      metaRight: 'Resource',
      cta: 'Coming Soon'
    },
    {
      metaLeft: 'Governance Checklist',
      title: 'Risk & Compliance Checklist for Media AI',
      description: 'A comprehensive governance checklist covering data privacy, IP protection, regulatory compliance, and ethical AI deployment in media contexts.',
      metaRight: 'Resource',
      cta: 'Coming Soon'
    }
  ]
}

interface KnowledgeHubProps {
  id?: string
}

export default function KnowledgeHub({ id }: KnowledgeHubProps) {
  const filters: CategoryType[] = ['Strategic Insights', 'Transformation Cases', 'Advisory Frameworks']
  const [activeFilter, setActiveFilter] = useState<CategoryType>(filters[0])

  return (
    <section id={id} className="py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-20">
            <SectionTag>Knowledge Hub</SectionTag>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
              Strategic intelligence for <br/>
              <span className="italic text-deep-red">media leaders navigating the sovereign AI era.</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="mb-12 md:mb-16 flex overflow-x-auto no-scrollbar gap-4 border-b border-espresso/10 pb-6 -mx-6 px-6 md:mx-0 md:px-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs md:text-sm whitespace-nowrap font-medium uppercase tracking-widest transition-all pb-4 border-b-2 -mb-[26px] ${
                  activeFilter === filter
                    ? 'border-deep-red text-deep-red'
                    : 'border-transparent text-espresso/40 hover:text-espresso'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {hubData[activeFilter].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group cursor-pointer flex flex-col p-8 md:p-10 rounded-[32px] bg-cream-alt border border-espresso/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-widest text-espresso/60 mb-6">
                      <span className="text-deep-red">{item.metaLeft}</span>
                      {item.metaRight && <span>{item.metaRight}</span>}
                    </div>
                    
                    <h3 className="text-2xl font-medium text-espresso mb-4 leading-snug group-hover:text-deep-red transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-espresso/70 font-light text-lg leading-relaxed mb-10 flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-espresso group-hover:text-deep-red transition-colors pt-6 border-t border-espresso/10">
                      {item.cta} 
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
