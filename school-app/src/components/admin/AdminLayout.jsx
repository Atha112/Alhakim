import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Calendar,
  Image as ImageIcon,
  PenLine,
  Key,
  LogOut,
  RotateCcw,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react'
import { useContent } from '../../context/ContentContext'
import Button from '../ui/Button'

const TABS = [
  { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard },
  { id: 'aktivitas', label: 'Kelola Aktivitas', icon: Calendar },
  { id: 'galeri', label: 'Kelola Galeri', icon: ImageIcon },
  { id: 'teks', label: 'Kontak & Medsos', icon: PenLine },
  { id: 'pin', label: 'Ubah PIN Admin', icon: Key },
]

export default function AdminLayout({ activeTab, setActiveTab, toast, triggerToast, children }) {
  const { isAuthenticated, logout, resetToDefault } = useContent()
  const navigate = useNavigate()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 text-center">
        <div className="content-card max-w-md">
          <ShieldAlert size={40} className="text-red-400 mx-auto mb-4" />
          <h2 className="heading-md text-[var(--text-primary)] mb-2">Akses Ditolak</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Anda harus login terlebih dahulu untuk mengakses Dashboard Admin.
          </p>
          <Link to="/admin/login">
            <Button variant="primary">Masuk ke Halaman Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">
      {/* Notification Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-[100] px-5 py-3 rounded border flex items-center gap-3 shadow-xl ${
              toast.type === 'success'
                ? 'bg-[var(--bg-card)] border-[var(--gold-primary)] text-[var(--gold-light)]'
                : 'bg-red-950 border-red-500 text-red-200'
            }`}
          >
            <CheckCircle2 size={18} />
            <span className="text-sm font-[Jost]">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-site">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-gold)]">
          <div className="flex items-center gap-4">
            <img src="/logo-gold.png" alt="Logo Sekolah" className="h-10 w-auto object-contain" />
            <div>
              <span className="text-label text-[var(--gold-primary)] block mb-0.5">
                CMS Panel & Portal Admin
              </span>
              <h1 className="heading-lg text-[var(--text-primary)]">
                Sekolah Alam Al-Hakim
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke default awal?')) {
                  resetToDefault()
                  triggerToast('Konten berhasil di-reset ke default awal!')
                }
              }}
              className="px-3.5 py-2 text-xs font-[Jost] tracking-wider uppercase text-[var(--text-muted)] hover:text-red-400 border border-[var(--border-subtle)] hover:border-red-400/40 rounded transition-colors flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Reset Content
            </button>
            <Button
              variant="outline"
              onClick={() => {
                logout()
                navigate('/admin/login')
              }}
              className="!py-2 !px-4 !text-xs"
            >
              <LogOut size={14} /> Keluar
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 border-b border-[var(--border-subtle)] scroll-x-custom">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isCurrent = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[2px] font-[Jost] text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  isCurrent
                    ? 'bg-[var(--gold-primary)] text-[var(--text-on-gold)] font-medium shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--gold-primary)] bg-[var(--bg-secondary)]'
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content area */}
        {children}
      </div>
    </div>
  )
}
