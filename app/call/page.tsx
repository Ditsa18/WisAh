import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Request a Briefing',
  description: 'Schedule a strategic briefing with WisdomAhead to discuss how secure, sovereign AI can transform your media operations.',
  alternates: {
    canonical: `${siteConfig.url}/call`,
  },
}

export default function CallPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Request Briefing', item: `${siteConfig.url}/call` },
    ],
  }

  return (
    <main className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-7xl px-6 py-32">
        <h1 className="text-4xl font-light text-espresso">Book a Free Call</h1>
        <p className="mt-4 text-lg text-espresso/70">
          Booking page placeholder — coming soon.
        </p>
      </div>
    </main>
  )
}
