import Navbar from '@/component/landing/Navbar'
import ComparisonSection from '@/component/landing/ComparisonSection'
import Footer from '@/component/landing/Footer'

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-20">
        <ComparisonSection />
      </div>
      <Footer />
    </main>
  )
}
