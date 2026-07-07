import Navbar from '@/component/landing/Navbar'
import KnowledgeHub from '@/component/landing/KnowledgeHub'
import Footer from '@/component/landing/Footer'

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-20">
        <KnowledgeHub />
      </div>
      <Footer />
    </main>
  )
}
