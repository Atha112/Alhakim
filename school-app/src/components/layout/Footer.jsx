import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Heart, MessageCircle } from 'lucide-react'
import { useContent } from '../../context/ContentContext'

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

export default function Footer() {
  const { texts } = useContent()
  const info = texts?.kontak?.info || {}
  const schoolInfo = texts?.schoolInfo || {}

  const contacts = info.contacts || [
    { name: 'Ka Ecep Supriatna', phone: '+62 895-3267-69365', whatsapp: '62895326769365' },
    { name: 'Ka Fikri Fathul Islam', phone: '+62 089-3887-405', whatsapp: '620893887405' },
  ]

  const socialMedia = schoolInfo.socialMedia || {
    instagram: 'https://instagram.com/sekolahalamalhakim',
    instagramHandle: '@sekolahalamalhakim',
    instagramSmp: 'https://instagram.com/sekolahalamalhakim_smp',
    instagramSmpHandle: '@sekolahalamalhakim_smp',
    facebook: 'https://facebook.com/SekolahAlamAlHakim',
    youtube: 'https://youtube.com/@SekolahAlamAlHakim',
  }

  const socials = [
    { icon: Instagram, href: socialMedia.instagram, label: socialMedia.instagramHandle || 'IG Utama' },
    { icon: Instagram, href: socialMedia.instagramSmp, label: socialMedia.instagramSmpHandle || 'IG SMP' },
    { icon: Facebook, href: socialMedia.facebook, label: 'Facebook' },
    { icon: Youtube, href: socialMedia.youtube, label: 'Youtube' },
  ]

  return (
    <footer className="border-t border-[var(--border-gold)] bg-[#141414] transition-colors duration-500">
      {/* ── Main columns ── */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo-gold.png"
                alt="Logo Sekolah Alam Al-Hakim"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-label text-[var(--gold-dim)]">{schoolInfo.tagline}</p>
            {/* Gold divider */}
            <div className="w-12 h-px bg-[var(--gold-primary)] opacity-30 my-2" />

            {/* Social handles list */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[var(--gold-primary)] font-[Jost] tracking-wider uppercase">
                Instagram Official
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--text-secondary)] hover:text-[var(--gold-primary)] bg-black/40 px-3 py-1.5 rounded border border-[var(--border-subtle)] flex items-center gap-1.5 transition-colors"
                >
                  <Instagram size={13} className="text-[var(--gold-primary)]" />
                  {socialMedia.instagramHandle || '@sekolahalamalhakim'}
                </a>
                <a
                  href={socialMedia.instagramSmp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--text-secondary)] hover:text-[var(--gold-primary)] bg-black/40 px-3 py-1.5 rounded border border-[var(--border-subtle)] flex items-center gap-1.5 transition-colors"
                >
                  <Instagram size={13} className="text-[var(--gold-primary)]" />
                  {socialMedia.instagramSmpHandle || '@sekolahalamalhakim_smp'}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="grid grid-cols-2 gap-6">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <span className="text-label text-[var(--gold-dim)]">{group.label}</span>
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
            <span className="text-label text-[var(--gold-dim)]">Kontak & Admin</span>
            <ul className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5 border border-[var(--border-gold)]">
                    <Phone size={13} className="text-[var(--gold-primary)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-[Jost] text-[var(--text-primary)] font-medium">
                      {c.name} {c.role ? `(${c.role})` : ''}
                    </span>
                    <a
                      href={`https://wa.me/${c.whatsapp || c.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--gold-primary)] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle size={11} /> {c.phone}
                    </a>
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-[var(--gold-primary)]" />
                </div>
                <a
                  href={`mailto:${info.email || 'info@sekolahalam-alhakim.sch.id'}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300 pt-1"
                >
                  {info.email || 'info@sekolahalam-alhakim.sch.id'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[var(--gold-primary)]" />
                </div>
                <span className="text-sm text-[var(--text-secondary)] pt-1">
                  {info.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container-site pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-gold)]">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {schoolInfo.name || 'Sekolah Alam Al-Hakim'}. All rights reserved.
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
