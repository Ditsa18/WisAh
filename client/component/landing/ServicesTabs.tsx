'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useActiveTab } from '@/hooks/useActiveTab'
import { servicesData } from '@/lib/constants'
import GradientImagePanel from '@/component/ui/GradientImagePanel'
import SectionTag from '@/component/ui/SectionTag'

interface ServicesTabsProps {
  id?: string
}

export default function ServicesTabs({ id }: ServicesTabsProps) {
  const { activeIndex, setActiveIndex } = useActiveTab(0)

  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Services</SectionTag>
          <h2 className="mb-12 text-3xl md:text-4xl font-light text-espresso">
            We handle everything so you don't have to.
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left: Tab List */}
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl p-6 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-tan/60 shadow-md'
                      : 'bg-transparent hover:bg-tan/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-medium ${
                        activeIndex === index ? 'text-espresso' : 'text-espresso/50'
                      }`}
                    >
                      {String(service.id).padStart(2, '0')}
                    </span>
                    <h3
                      className={`text-lg font-medium ${
                        activeIndex === index ? 'text-espresso' : 'text-espresso/70'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Image Panel */}
            <div className="relative h-[400px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <GradientImagePanel className="h-full w-full">
                    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                      <h3 className="mb-4 text-2xl font-medium text-white">
                        {servicesData[activeIndex].title}
                      </h3>
                      <p className="text-white/90">
                        {servicesData[activeIndex].description}
                      </p>
                    </div>
                  </GradientImagePanel>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
