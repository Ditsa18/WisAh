import Navbar from '@/component/landing/Navbar'
import Hero from '@/component/landing/Hero'
import ServicesTabs from '@/component/landing/ServicesTabs'
import ProcessSteps from '@/component/landing/ProcessSteps'
import ContactForm from '@/component/landing/ContactForm'
import WisdomDifference from '@/component/landing/WisdomDifference'
import Footer from '@/component/landing/Footer'

import SplashScreen from '@/component/landing/SplashScreen'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise AI Consulting',
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    description: 'Custom AI solutions, workflow automation, and private AI infrastructure for media enterprises.',
    serviceType: 'Consulting',
  }

  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SplashScreen />
      <Navbar />
      <Hero />
      <ServicesTabs id="services" />
      <ProcessSteps />
      <ContactForm />
      <WisdomDifference />
      <Footer />
    </main>
  )
}
