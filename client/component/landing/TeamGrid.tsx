'use client'

import { motion } from 'framer-motion'
import { teamData } from '@/lib/constants'
import GradientImagePanel from '@/component/ui/GradientImagePanel'

export default function TeamGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-3xl md:text-4xl font-light text-espresso">
            Meet the team
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
              >
                <GradientImagePanel className="h-full w-full">
                  <div className="flex h-full items-center justify-center">
                    {/* TODO: Replace with actual team member photos */}
                    <p className="text-white/80">Team Photo</p>
                  </div>
                </GradientImagePanel>
                {/* Gradient Scrim */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-6">
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
