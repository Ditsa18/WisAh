import Navbar from '@/component/landing/Navbar'
import Hero from '@/component/landing/Hero'
import About from '@/component/landing/About'
import Founder from '@/component/landing/Founder'
import ServicesTabs from '@/component/landing/ServicesTabs'
import ProcessSteps from '@/component/landing/ProcessSteps'
import ComparisonSection from '@/component/landing/ComparisonSection'
import KnowledgeHub from '@/component/landing/KnowledgeHub'
import ContactForm from '@/component/landing/ContactForm'
import WisdomDifference from '@/component/landing/WisdomDifference'
import Footer from '@/component/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <ServicesTabs id="services" />
      <ProcessSteps />
      <ComparisonSection />
      <KnowledgeHub id="knowledge-hub" />
      <ContactForm />
      <WisdomDifference />
      <Footer />
    </main>
  )
}
