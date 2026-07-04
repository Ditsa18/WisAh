'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTag from '@/component/ui/SectionTag'

interface KnowledgeHubProps {
  id?: string
}

export default function KnowledgeHub({ id }: KnowledgeHubProps) {
  const [activeFilter, setActiveFilter] = useState('Strategic Insights')

  const filters = ['Strategic Insights', 'Transformation Cases', 'Advisory Frameworks']

  const articles = [
    {
      category: 'STRATEGIC INSIGHTS',
      readTime: '8 min read',
      date: 'March 2026',
      title: 'The Sovereign AI Imperative for Media Enterprises',
      description: 'Why the world\'s largest media organizations are moving away from cloud-dependent AI and toward private, sovereign intelligence architectures.',
    },
    {
      category: 'STRATEGIC INSIGHTS',
      readTime: '6 min read',
      date: 'February 2026',
      title: 'Operational Excellence vs. Editorial Excellence',
      description: 'The hidden truth: operational friction costs media organizations more than competitive content strategy. How AI transforms the back office into a strategic asset.',
    },
    {
      category: 'STRATEGIC INSIGHTS',
      readTime: '10 min read',
      date: 'January 2026',
      title: 'Board-Level AI Governance: A Framework for Media CEOs',
      description: 'A practical governance framework for media executives who must balance innovation velocity with data sovereignty and regulatory compliance.',
    },
  ]

  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <SectionTag>Knowledge Hub</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-espresso">
              Strategic intelligence for media leaders navigating the sovereign AI era
            </h2>
          </div>

          {/* Sub-heading block */}
          <div className="mb-12 rounded-2xl bg-tan/30 p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brown">
              Curated Intelligence
            </p>
            <h3 className="mb-4 text-2xl font-light text-espresso">
              Insights for the Journey
            </h3>
            <p className="text-espresso/70">
              Strategic perspectives and actionable frameworks developed from four decades of media leadership and AI advisory.
            </p>
          </div>

          {/* Filter pills */}
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-espresso text-cream'
                    : 'bg-tan/60 text-espresso hover:bg-tan/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Selected focus callout */}
          <div className="mb-12 rounded-2xl border-2 border-brown/20 bg-cream p-6">
            <p className="text-sm font-medium text-espresso">
              <span className="font-semibold">Selected focus:</span> The End of Manual Workflow: Predictive Operations in Newsrooms.{' '}
              <span className="text-brown underline cursor-pointer">Request the full brief</span> to receive the complete executive memo.
            </p>
          </div>

          {/* Article cards grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-cream p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2 text-xs font-medium text-brown">
                  <span className="uppercase tracking-wide">{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mb-3 text-lg font-medium text-espresso">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm text-espresso/70">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-espresso/60">{article.date}</span>
                  <span className="text-sm font-medium text-brown">
                    Coming Soon →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
