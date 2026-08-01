import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageTransition from './components/ui/PageTransition'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollToTop from './components/ui/ScrollToTop'
import PageLayout from './components/layout/PageLayout'

import { ContentProvider } from './context/ContentContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const CeritaKamiPage = lazy(() => import('./pages/CeritaKamiPage'))
const KontakKamiPage = lazy(() => import('./pages/KontakKamiPage'))
const ProgramPage = lazy(() => import('./pages/ProgramPage'))
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage'))
const KurikulumPage = lazy(() => import('./pages/KurikulumPage'))
const AktivitasPage = lazy(() => import('./pages/AktivitasPage'))
const GaleriPage = lazy(() => import('./pages/GaleriPage'))
const PendaftaranPage = lazy(() => import('./pages/PendaftaranPage'))
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'))
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <ContentProvider>
      <PageLayout>
        <ScrollToTop />
        <LoadingScreen />
        <PageTransition />
        <Suspense fallback={
          <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--gold-primary)] opacity-20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--gold-primary)] animate-spin" />
            </div>
            <p className="font-[Jost] text-[11px] tracking-[3px] uppercase text-[var(--text-muted)] animate-pulse">
              Memuat...
            </p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang/cerita" element={<CeritaKamiPage />} />
            <Route path="/tentang/kontak" element={<KontakKamiPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/program/:slug" element={<ProgramDetailPage />} />
            <Route path="/kurikulum" element={<KurikulumPage />} />
            <Route path="/aktivitas" element={<AktivitasPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/pendaftaran" element={<PendaftaranPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageLayout>
    </ContentProvider>
  )
}

export default App
