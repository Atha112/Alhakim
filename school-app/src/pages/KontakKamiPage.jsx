import React from 'react'
import { MapPin, Mail, Clock, Instagram, User } from 'lucide-react'
import { kontakContent } from '../data/content'
import { useContent } from '../context/ContentContext'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'

export default function KontakKamiPage() {
  const { texts } = useContent()
  const info = texts?.kontak?.info || kontakContent.info
  const cta = texts?.kontak?.cta || kontakContent.cta
  const schoolInfo = texts?.schoolInfo || {}

  const contacts = info.contacts || [
    { name: 'Ecep Supriatna', phone: '+62 895-3267-69365', whatsapp: '62895326769365' },
    { name: 'Fikri Fathul Islam', phone: '+62 089-3887-405', whatsapp: '620893887405' },
  ]

  const socialMedia = schoolInfo.socialMedia || {
    instagram: 'https://instagram.com/sekolahalamalhakim',
    instagramHandle: '@sekolahalamalhakim',
    instagramSmp: 'https://instagram.com/sekolahalamalhakim_smp',
    instagramSmpHandle: '@sekolahalamalhakim_smp',
  }

  return (
    <>
      {/* Header */}
      <PageHeader
        title={kontakContent.title}
        subtitle={kontakContent.subtitle}
        backgroundImage="/images/kontak-header.jpg"
      />

      {/* Contact info section */}
      <section className="section-gap pb-0">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center max-w-[800px] mx-auto mb-10">
              <p className="font-[Jost] font-light text-[var(--text-secondary)] text-lg leading-relaxed">
                Sekolah Alam Al-Hakim membuka komunikasi seluas-luasnya bagi orang tua yang ingin mengenal lebih jauh sistem pendidikan fitrah dan aqil baligh kami.
              </p>
              <GoldDivider className="mt-6" />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information & Staff Cards */}
              <div className="flex flex-col gap-6">
                {/* Contact Persons */}
                <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-gold)]">
                  <h3 className="text-label text-[var(--gold-primary)] mb-4 flex items-center gap-2">
                    <User size={16} /> Kontak Admin & Staff
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contacts.map((c, idx) => {
                      const cleanName = c.name.replace(/^Ka\s+/i, '')
                      return (
                        <div key={idx} className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[4px] flex flex-col gap-3">
                          <span className="font-[Jost] font-medium text-sm text-[var(--text-primary)]">
                            {cleanName}
                          </span>
                          <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
                            <a
                              href={`https://wa.me/${c.whatsapp || c.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[var(--gold-primary)] hover:underline flex items-center gap-1.5 font-[Jost]"
                            >
                              <WhatsAppIcon size={15} className="text-emerald-400 shrink-0" />
                              {c.phone}
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Social Media Instagram Cards */}
                <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <h3 className="text-label text-[var(--gold-primary)] mb-4 flex items-center gap-2">
                    <Instagram size={16} /> Akun Instagram Official
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded hover:border-[var(--gold-primary)] transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-colors">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] block">IG Utama & SD</span>
                        <span className="text-xs font-[Jost] text-[var(--text-primary)] font-medium group-hover:text-[var(--gold-primary)]">
                          {socialMedia.instagramHandle || '@sekolahalamalhakim'}
                        </span>
                      </div>
                    </a>

                    <a
                      href={socialMedia.instagramSmp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded hover:border-[var(--gold-primary)] transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-colors">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] block">IG SMP Al-Hakim</span>
                        <span className="text-xs font-[Jost] text-[var(--text-primary)] font-medium group-hover:text-[var(--gold-primary)]">
                          {socialMedia.instagramSmpHandle || '@sekolahalamalhakim_smp'}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location & Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="content-card flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-label text-[var(--gold-primary)] mb-1">Alamat</p>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{info.address}</p>
                    </div>
                  </div>

                  <div className="content-card flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-label text-[var(--gold-primary)] mb-1">Jam Operasional</p>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed & Share Location Helper */}
              <div className="flex flex-col gap-4">
                <div className="h-[360px] rounded-[4px] overflow-hidden border border-[var(--border-subtle)] relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Desa+Jayagiri+Lembang+Jawa+Barat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '360px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Desa Jayagiri Lembang"
                    className="w-full h-full"
                  />
                </div>

                <div className="content-card p-4 bg-[var(--bg-secondary)] border border-[var(--border-gold)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div>
                    <h4 className="font-[Jost] text-xs uppercase tracking-wider text-[var(--gold-primary)] font-medium">
                      Butuh Panduan Rute / Drop Pin GPS?
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      Hubungi tim admin untuk mendapatkan titik lokasi presisi (*Google Maps Drop Pin*).
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${contacts[0]?.whatsapp || '62895326769365'}?text=Assalamu'alaikum,%20mohon%20kirim%20share%20location%20(drop%20pin%20Google%20Maps)%20Sekolah%20Alam%20Al-Hakim%20Cihideung%20Jayagiri%20Lembang`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Button variant="primary" className="!py-2 !px-3.5 !text-xs whitespace-nowrap">
                      <WhatsAppIcon size={15} className="mr-1.5" /> Minta Share Location WA
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center max-w-[600px] mx-auto">
              <h2 className="heading-lg text-[var(--text-primary)] mb-6">
                {cta.text}
              </h2>
              <GoldDivider className="mb-8" />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${contacts[0]?.whatsapp || '62895326769365'}?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="flex items-center gap-2">
                    <WhatsAppIcon size={16} /> Chat {contacts[0]?.name?.replace(/^Ka\s+/i, '') || 'Ecep Supriatna'}
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${contacts[1]?.whatsapp || '620893887405'}?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="flex items-center gap-2">
                    <WhatsAppIcon size={16} /> Chat {contacts[1]?.name?.replace(/^Ka\s+/i, '') || 'Fikri Fathul Islam'}
                  </Button>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
