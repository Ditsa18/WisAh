'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useActiveTab } from '@/hooks/useActiveTab'
import SectionTag from '@/component/ui/SectionTag'
import Button from '@/component/ui/Button'
import { Check } from 'lucide-react'

const newServicesData = [
  {
    id: 1,
    title: 'Predictive Intelligence',
    subtitle: 'AI-Powered Forecasting',
    description: 'Anticipate raw material pricing fluctuations, subscriber churn patterns, and advertising demand cycles before they impact your P&L. Our sovereign forecasting models ingest proprietary operational data — not third-party aggregates — to generate predictions with board-level confidence.',
    features: [
      'Newsprint & raw material cost forecasting',
      'Subscriber retention risk scoring',
      'Ad inventory yield optimization',
      'Regional content demand prediction'
    ]
  },
  {
    id: 2,
    title: 'Governance & Risk',
    subtitle: 'Sovereign AI Governance',
    description: 'Media organizations operate under intense regulatory and reputational scrutiny. We architect AI governance frameworks that ensure every automated decision is explainable, compliant, and aligned with your editorial values — while maintaining full data sovereignty.',
    features: [
      'AI ethics & editorial compliance frameworks',
      'Data residency & sovereignty audits',
      'Automated decision audit trails',
      'Regulatory readiness assessments'
    ]
  },
  {
    id: 3,
    title: 'Workflow Orchestration',
    subtitle: 'Intelligent Operations',
    description: 'Transform fragmented, manual processes into seamless, AI-coordinated workflows. From content production pipelines to distribution logistics, we redesign how work flows through your organization — reducing cycle times and freeing creative talent for higher-value work.',
    features: [
      'Editorial production pipeline automation',
      'Cross-platform content adaptation',
      'Real-time resource allocation',
      'Vendor & freelancer coordination'
    ]
  },
  {
    id: 4,
    title: 'Corporate Intelligence',
    subtitle: 'Private Knowledge Systems',
    description: 'Your organization possesses decades of proprietary institutional knowledge trapped in disconnected systems. We build private intelligence layers that unify this data — making it queryable, analyzable, and actionable without ever exposing it to external AI platforms.',
    features: [
      'Unified enterprise knowledge graphs',
      'Historical archive intelligence',
      'Competitive signal detection',
      'Executive decision support systems'
    ]
  }
]

interface ServicesTabsProps {
  id?: string
}

export default function ServicesTabs({ id }: ServicesTabsProps) {
  const { activeIndex, setActiveIndex } = useActiveTab(0)

  return (
    <section id={id} className="py-20 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-20">
            <SectionTag>Specialized Services</SectionTag>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-espresso leading-tight">
              Advisory Services <br/>
              <span className="italic text-deep-red">for Media Complexity.</span>
            </h2>
            <p className="mt-6 text-xl text-espresso/70 font-light max-w-2xl">
              Strategic AI transformation services designed for modern media enterprises navigating operational, editorial, and intelligence complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Tab List */}
            <div className="lg:col-span-5 space-y-2">
              {newServicesData.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left transition-all duration-500 py-6 px-8 rounded-r-2xl group ${
                    activeIndex === index
                      ? 'bg-cream-alt'
                      : 'bg-transparent hover:bg-cream-alt/50'
                  }`}
                >
                  {/* Active Indicator */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500 ${
                      activeIndex === index ? 'bg-deep-red scale-y-100' : 'bg-transparent scale-y-0 group-hover:bg-espresso/10 group-hover:scale-y-50'
                    }`}
                  />
                  
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-medium transition-colors duration-500 ${
                        activeIndex === index ? 'text-deep-red' : 'text-espresso/30 group-hover:text-espresso/60'
                      }`}
                    >
                      {String(service.id).padStart(2, '0')}
                    </span>
                    <h3
                      className={`text-2xl font-light transition-colors duration-500 ${
                        activeIndex === index ? 'text-espresso font-medium' : 'text-espresso/70 group-hover:text-espresso'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Content Panel */}
            <div className="lg:col-span-7 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-cream-alt p-8 sm:p-10 md:p-14 rounded-[32px] border border-espresso/5 shadow-xl flex flex-col justify-between w-full h-full min-h-[500px]"
                >
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-deep-red mb-4">
                      {newServicesData[activeIndex].subtitle}
                    </h3>
                    <p className="text-2xl text-espresso/80 font-light leading-relaxed mb-10">
                      {newServicesData[activeIndex].description}
                    </p>
                    
                    <ul className="space-y-4 mb-12">
                      {newServicesData[activeIndex].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="flex-shrink-0 mt-1">
                            <Check size={18} className="text-deep-red" />
                          </span>
                          <span className="text-espresso/80 text-lg font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <Button size="lg" className="px-8 shadow-md hover:shadow-xl group">
                      Request Briefing
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
