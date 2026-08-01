import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from '../ui/WhatsAppButton'
import ScrollToTopButton from '../ui/ScrollToTopButton'
import ScrollProgress from '../ui/ScrollProgress'
import GrainOverlay from '../ui/GrainOverlay'
import useDocumentTitle from '../../hooks/useDocumentTitle'

export default function PageLayout({ children }) {
  useDocumentTitle()

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--gold-primary)] focus:text-[var(--text-on-gold)] focus:rounded focus:text-sm focus:font-[Jost] focus:tracking-[1px]"
      >
        Langsung ke konten utama
      </a>
      <ScrollProgress />
      <GrainOverlay />
      <Navbar />
      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}
