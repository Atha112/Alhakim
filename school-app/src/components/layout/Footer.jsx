import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Send, ArrowUp, Heart } from 'lucide-react'
import { schoolInfo } from '../../data/content'

const NAV_GROUPS = [
  {
    label: 'Tentang',
    links: [
      { name: 'Cerita Kami', to: '/tentang/cerita' },
      { name: 'Kontak Kami', to: '/tentang/kontak' },
    ],
  },
  {
    label: 'Program',
    links: [
      { name: 'Daycare', to: '/program/daycare' },
      { name: 'Preschool', to: '/program/preschool' },
      { name: 'SD', to: '/program/sd' },
      { name: 'SMP', to: '/program/smp' },
      { name: 'SMA', to: '/program/sma' },
    ],
  },
  {
    label: 'Lainnya',
    links: [
      { name: 'Kurikulum', to: '/kurikulum' },
      { name: 'Aktivitas', to: '/aktivitas' },
      { name: 'Galeri', to: '/galeri' },
      { name: 'Pendaftaran', to: '/pendaftaran' },
    ],
  },
]

const SOCIALS = [
  { icon: Instagram, href: schoolInfo.socialMedia.instagram, label: 'Instagram' },
  { icon: Facebook, href: schoolInfo.socialMedia.facebook, label: 'Facebook' },
  { icon: Youtube, href: schoolInfo.socialMedia.youtube, label: 'Youtube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    const trimmed = email.trim()

    // Validate email
    if (!trimmed) {
      setEmailError('Alamat email wajib diisi')
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(trimmed)) {
      setEmailError('Format email tidak valid')
      return
    }

    setEmailError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-[var(--border-gold)] bg-[var(--bg-secondary)] transition-colors duration-500">
      {/* ── Newsletter banner ── */}
      <div className="border-b border-[var(--border-gold)]">
        <div className="container-site py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] flex items-center justify-center shrink-0">
                <Send size={18} className="text-[var(--gold-primary)]" />
              </div>
              <div>
                <h3 className="font-[Cormorant_Garamond] font-light text-xl tracking-[0.04em] text-[var(--text-primary)] mb-1">
                  Dapatkan Info Terbaru
                </h3>
                <p className="font-[Jost] text-sm text-[var(--text-muted)]">
                  Berlangganan informasi pendaftaran dan kegiatan sekolah
                </p>
              </div>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-[var(--gold-primary)]">
                <Heart size={16} />
                <span className="font-[Jost] text-sm">Terima kasih telah berlangganan!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <div className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    placeholder="Alamat email Anda"
                    required
                    className={`flex-1 md:w-72 bg-[var(--bg-card)] border rounded-[2px] px-4 py-2.5 font-[Jost] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors duration-300 ${
                      emailError
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-[var(--border-subtle)] focus:border-[var(--gold-primary)]'
                    }`}
                  />
                  <button
                    type="submit"
                    className="cta-primary !py-2.5 !px-5 !text-[11px] shrink-0"
                  >
                    Langganan
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-400 text-xs font-[Jost]">{emailError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-[Cormorant_Garamond] text-2xl lg:text-3xl font-light tracking-[0.04em] text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300"
            >
              Sekolah Alam AL-Hakim
            </Link>
            <p className="text-label text-[var(--gold-dim)]">
              {schoolInfo.tagline}
            </p>
            {/* Gold divider */}
            <div className="w-12 h-px bg-[var(--gold-primary)] opacity-30 my-2" />
            {/* Social icons — mobile only under brand */}
            <div className="flex items-center gap-3 pt-1 md:hidden">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[var(--border-gold)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="grid grid-cols-3 gap-6">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <span className="text-label text-[var(--gold-dim)]">
                  {group.label}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300 inline-flex items-center gap-1 group hover-underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-5">
            {/* Contact lines */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-[var(--gold-primary)]" />
                </div>
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300 pt-1"
                >
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-[var(--gold-primary)]" />
                </div>
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300 pt-1"
                >
                  {schoolInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[var(--gold-primary)]" />
                </div>
                <span className="text-sm text-[var(--text-secondary)] pt-1">
                  {schoolInfo.address}
                </span>
              </li>
            </ul>

            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[var(--border-gold)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] hover:bg-[var(--gold-ghost)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container-site pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-gold)]">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            Dibuat dengan <Heart size={10} className="text-[var(--gold-primary)] inline" /> untuk pendidikan Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
