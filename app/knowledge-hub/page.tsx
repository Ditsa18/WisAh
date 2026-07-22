import Navbar from '@/component/landing/Navbar'
import KnowledgeHub from '@/component/landing/KnowledgeHub'
import Footer from '@/component/landing/Footer'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Knowledge Hub',
  description: 'Explore insights, case studies, and strategic thought leadership on Enterprise AI and digital transformation from WisdomAhead.',
  alternates: {
    canonical: `${siteConfig.url}/knowledge-hub`,
  },
}

export default function KnowledgeHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Knowledge Hub', item: `${siteConfig.url}/knowledge-hub` },
    ],
  }

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="pt-20">
        <KnowledgeHub />
      </div>
      <Footer />
    </main>
  )
}
