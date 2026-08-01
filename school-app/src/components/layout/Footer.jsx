import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Send, ArrowUp, Heart } from 'lucide-react'
import { schoolInfo } from '../../data/content'

const NAV_GROUPS = [
  {
    label: 'Navigasi',
    links: [
      { name: 'Program SD', to: '/program/sd' },
      { name: 'Kurikulum', to: '/kurikulum' },
      { name: 'Aktivitas', to: '/aktivitas' },
    ],
  },
  {
    label: 'Lainnya',
    links: [
      { name: 'Galeri', to: '/galeri' },
      { name: 'Kontak Kami', to: '/tentang/kontak' },
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
  return (
    <footer className="border-t border-[var(--border-gold)] bg-[var(--bg-secondary)] transition-colors duration-500">

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
            Dibuat dengan <Heart size={10} className="text-[var(--gold-primary)] inline" /> untuk pendidikan Indonesia |{' '}
            <Link to="/admin/login" className="hover:text-[var(--gold-primary)] transition-colors">
              Portal Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
