import Navbar from '@/component/landing/Navbar'
import About from '@/component/landing/About'
import Founder from '@/component/landing/Founder'
import Footer from '@/component/landing/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-20">
        <About />
        <Founder />
      </div>
      <Footer />
    </main>
  )
}
