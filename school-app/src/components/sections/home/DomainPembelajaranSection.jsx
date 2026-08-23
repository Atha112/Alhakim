import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { kurikulumContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'

export default function DomainPembelajaranSection() {
  const domainImages = [
    '/images/activity-ekspedisi.jpg', // Domain 1: Karakter Alami
    '/images/activity-olahraga.jpg',  // Domain 2: Kedewasaan / Aqil Baligh
    '/images/activity-tahfidz.jpg',   // Domain 3: Akademik & Sains Terbuka
    '/images/activity-pasar.jpg',     // Domain 4: Kebermanfaatan Hidup
  ]

  return (
    <section className="bg-[#141414] py-24 md:py-32 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION (Rata Tengah) */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
            <span className="text-xs text-[#D4AF37] tracking-[0.2em] uppercase mb-4 block font-semibold">
              STRUKTUR PENDIDIKAN
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F4EFE6] leading-tight mb-6 font-light drop-shadow-sm">
              4 Domain Pembelajaran Utama
            </h2>
            <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed">
              Kurikulum terpadu yang memadukan keimanan alami, kedewasaan aqil baligh, sains akademik, dan kebermanfaatan hidup.
            </p>
          </div>
        </SectionReveal>

        {/* ========================================================================= */}
        {/* LAYOUT ZIG-ZAG 4 DOMAIN PEMBELAJARAN (ORGANIC EDITORIAL - DARK HARMONY) */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-24 md:gap-32">
          {kurikulumContent.tabs.map((tab, idx) => {
            const isEven = idx % 2 === 1

            return (
              <SectionReveal key={tab.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                  
                  {/* TEXT AREA (Dengan md:order-last untuk item genap 02 & 04) */}
                  <div className={`flex flex-col justify-center ${isEven ? 'md:order-last' : ''}`}>
                    {/* Angka Urut Raksasa Serif Emas */}
                    <span className="font-[Cormorant_Garamond] text-5xl md:text-7xl font-light text-[#D4AF37] opacity-90 leading-none mb-4 block">
                      0{idx + 1}
                    </span>

                    {/* Judul Domain */}
                    <h3 className="text-3xl md:text-4xl font-[Cormorant_Garamond] text-[#F4EFE6] font-light leading-snug mb-4 drop-shadow-sm">
                      {tab.label.replace(/^\d+\.\s*/, '')}
                    </h3>

                    {/* Subtitle Domain */}
                    {tab.subtitleLabel && (
                      <span className="text-xs uppercase tracking-[0.15em] font-medium text-[var(--gold-primary)] mb-4 block">
                        {tab.subtitleLabel}
                      </span>
                    )}

                    {/* Deskripsi Domain */}
                    <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed mb-6">
                      {tab.description}
                    </p>

                    {/* Pillars Highlights */}
                    {tab.pillars && (
                      <ul className="space-y-2 mb-6 border-l-2 border-[#D4AF37]/40 pl-4">
                        {tab.pillars.map((pillar, pIdx) => (
                          <li key={pIdx} className="text-stone-200 text-sm font-medium">
                            • {pillar.title}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Link Inline Text */}
                    <div>
                      <Link
                        to="/kurikulum"
                        className="text-[#D4AF37] hover:text-white transition-colors tracking-widest text-xs font-semibold uppercase inline-flex items-center gap-2 group"
                      >
                        SELENGKAPNYA <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* IMAGE AREA (Styling Organik Rounded-[2.5rem] Dark Border) */}
                  <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl group border border-white/10">
                    <img
                      src={domainImages[idx] || '/images/hero.jpg'}
                      alt={tab.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                </div>
              </SectionReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
