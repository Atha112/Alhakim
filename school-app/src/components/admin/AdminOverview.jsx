import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Image as ImageIcon, Globe, ArrowRight } from 'lucide-react'

export default function AdminOverview({ activitiesCount, galleryCount, setActiveTab }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Total Aktivitas</span>
        <h2 className="heading-xl text-[var(--text-primary)] mb-2">{activitiesCount}</h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Kegiatan santri terpublikasi</p>
        <button
          onClick={() => setActiveTab('aktivitas')}
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)] flex items-center gap-1"
        >
          Kelola Aktivitas <ArrowRight size={12} />
        </button>
      </div>

      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Total Galeri</span>
        <h2 className="heading-xl text-[var(--text-primary)] mb-2">{galleryCount}</h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Foto dokumentasi terpublikasi</p>
        <button
          onClick={() => setActiveTab('galeri')}
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)] flex items-center gap-1"
        >
          Kelola Galeri <ArrowRight size={12} />
        </button>
      </div>

      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Status Website</span>
        <h2 className="heading-md text-emerald-400 mb-2 flex items-center gap-2">
          <Globe size={18} /> Aktif / Live
        </h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Perubahan tersimpan otomatis</p>
        <Link
          to="/"
          target="_blank"
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)] flex items-center gap-1"
        >
          Buka Tampilan Publik <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}
