'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useActiveTab } from '@/hooks/useActiveTab'
import { processStepsData } from '@/lib/constants'
import GradientImagePanel from '@/component/ui/GradientImagePanel'
import SectionTag from '@/component/ui/SectionTag'

export default function ProcessSteps() {
  const { activeIndex, setActiveIndex } = useActiveTab(0)

  return (
    <section id="how-we-work" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <SectionTag>How We Work</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-espresso">
              Getting you results without the complexity.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left: Step List */}
            <div className="space-y-6">
              {processStepsData.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl p-6 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-tan/60 shadow-md'
                      : 'bg-transparent hover:bg-tan/30'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`text-sm font-medium ${
                        activeIndex === index ? 'text-espresso' : 'text-espresso/50'
                      }`}
                    >
                      {String(step.step).padStart(2, '0')}
                    </span>
                    <h3
                      className={`text-lg font-medium ${
                        activeIndex === index ? 'text-espresso' : 'text-espresso/70'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-espresso/10 px-3 py-1 text-xs font-medium text-espresso">
                      {step.timeline}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      activeIndex === index ? 'text-espresso/80' : 'text-espresso/60'
                    }`}
                  >
                    {step.description}
                  </p>
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
                        {processStepsData[activeIndex].title}
                      </h3>
                      <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
                        {processStepsData[activeIndex].timeline}
                      </span>
                      <p className="text-white/90">
                        {processStepsData[activeIndex].description}
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
