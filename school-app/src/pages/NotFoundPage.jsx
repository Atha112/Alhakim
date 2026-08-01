import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'

const quickLinks = [
  { label: 'Program', to: '/program' },
  { label: 'Kurikulum', to: '/kurikulum' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Kontak', to: '/tentang/kontak' },
]

export default function NotFoundPage() {
  const location = useLocation()

  // Set proper 404 document title
  useEffect(() => {
    document.title = '404 — Halaman Tidak Ditemukan — Sekolah Alam Al-Hakim'
    return () => {
      // Title will be reset by useDocumentTitle on next route
    }
  }, [location.pathname])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold-primary)] to-transparent opacity-15" />
        <div className="absolute bottom-[15%] right-[15%] w-px h-40 bg-gradient-to-t from-transparent via-[var(--gold-primary)] to-transparent opacity-10" />
        <div className="absolute top-[40%] right-[20%] w-40 h-40 border border-[var(--border-gold)] rounded-full opacity-[0.05]" />
        <div className="absolute bottom-[30%] left-[25%] w-24 h-24 border border-[var(--border-gold)] rounded-[2px] rotate-12 opacity-[0.04]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center px-6 relative z-10"
      >
        {/* Large 404 number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="heading-xl text-[var(--gold-primary)] mb-4" style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}>
            404
          </h1>
        </motion.div>

        <GoldDivider className="mb-8" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="heading-lg text-[var(--text-primary)] mb-4"
        >
          Halaman Tidak Ditemukan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[var(--text-secondary)] font-[Jost] text-sm leading-relaxed max-w-[480px] mx-auto mb-10"
        >
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke beranda atau jelajahi halaman lainnya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link to="/">
            <Button variant="primary">
              <Home size={16} strokeWidth={1.5} className="mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="font-[Jost] text-[var(--text-secondary)] text-sm tracking-[1px] hover:text-[var(--gold-primary)] transition-colors duration-300 inline-flex items-center gap-2 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Halaman Sebelumnya</span>
          </button>
        </motion.div>

        {/* Quick nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          {quickLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <Link
                to={link.to}
                className="font-[Jost] text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300"
              >
                {link.label}
              </Link>
              {idx < quickLinks.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] opacity-50 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
