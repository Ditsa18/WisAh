import Navbar from '@/component/landing/Navbar'
import Hero from '@/component/landing/Hero'
import ServicesTabs from '@/component/landing/ServicesTabs'
import ProcessSteps from '@/component/landing/ProcessSteps'
import ContactForm from '@/component/landing/ContactForm'
import WisdomDifference from '@/component/landing/WisdomDifference'
import Footer from '@/component/landing/Footer'

import SplashScreen from '@/component/landing/SplashScreen'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
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
