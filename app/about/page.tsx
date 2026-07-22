import Navbar from '@/component/landing/Navbar'
import About from '@/component/landing/About'
import Founder from '@/component/landing/Founder'
import Footer from '@/component/landing/Footer'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'About & Leadership',
  description: 'Learn about D. D. Purkayastha and the decades of media leadership driving WisdomAhead\'s enterprise AI transformation.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'D. D. Purkayastha',
      jobTitle: 'Founder and Principal Advisor',
      worksFor: { '@id': `${siteConfig.url}/#organization` },
      sameAs: [siteConfig.links.linkedin],
    }
  ]

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="pt-20">
        <About />
        <Founder />
      </div>
      <Footer />
    </main>
  )
}
