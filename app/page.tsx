import Navbar from '@/component/landing/Navbar'
import Hero from '@/component/landing/Hero'
import About from '@/component/landing/About'
import StatsBanner from '@/component/landing/StatsBanner'
import CareersStrip from '@/component/landing/CareersStrip'
import LogoStrip from '@/component/landing/LogoStrip'
import ServicesTabs from '@/component/landing/ServicesTabs'
import Testimonial from '@/component/landing/Testimonial'
import ProcessSteps from '@/component/landing/ProcessSteps'
import ComparisonSection from '@/component/landing/ComparisonSection'
import KnowledgeHub from '@/component/landing/KnowledgeHub'
import FAQ from '@/component/landing/FAQ'
import ContactForm from '@/component/landing/ContactForm'
import WisdomDifference from '@/component/landing/WisdomDifference'
import Footer from '@/component/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <StatsBanner />
      <CareersStrip />
      <LogoStrip />
      <ServicesTabs id="services" />
      <Testimonial />
      <ProcessSteps />
      <ComparisonSection />
      <KnowledgeHub id="capabilities" />
      <FAQ />
      <ContactForm />
      <WisdomDifference />
      <Footer />
    </main>
  )
}
