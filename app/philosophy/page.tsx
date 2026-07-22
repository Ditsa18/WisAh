import Navbar from '@/component/landing/Navbar'
import ComparisonSection from '@/component/landing/ComparisonSection'
import Footer from '@/component/landing/Footer'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Our Philosophy - The Advisory Standard',
  description: 'Discover how WisdomAhead sets the advisory standard for secure, media-native AI systems compared to traditional software vendors.',
  alternates: {
    canonical: `${siteConfig.url}/philosophy`,
  },
}

export default function PhilosophyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Philosophy', item: `${siteConfig.url}/philosophy` },
    ],
  }

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="pt-20">
        <ComparisonSection />
      </div>
      <Footer />
    </main>
  )
}
