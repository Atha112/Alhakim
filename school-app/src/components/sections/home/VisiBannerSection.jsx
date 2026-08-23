import React from 'react'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'

export default function VisiBannerSection() {
  return (
    <section className="bg-[#141414] py-20 md:py-28 relative overflow-hidden border-y border-white/5">
      {/* Subtle radial gold glow for shiny highlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[var(--gold-primary)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionReveal>
          {/* Subtle Label */}
          <span className="text-[11px] md:text-xs tracking-[0.35em] text-[var(--gold-primary)] uppercase font-medium block mb-4">
            VISI UTAMA
          </span>

          {/* Headline Utama Visi - White Shiny (#F4EFE6 + MV Boli Font) */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE6] leading-tight mb-6 tracking-[0.02em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'MV Boli', 'Cormorant Garamond', cursive, serif" }}
          >
            Giri Tempa Bagi Ekspresi Fitrah Insani
          </h2>

          {/* Gold Divider Accent */}
          <GoldDivider className="mb-6 opacity-80" />

          {/* Deskripsi Visi - Soft Shiny Off-White */}
          <p className="text-stone-300 font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Sekolah Alam Al-Hakim adalah sebuah bumi penempaan dan pembentukan manusia dan kemanusiaan secara manusiawi dan fitri, agar terekspresikan dan teraktualisasikan kapasitas dan potensi santri.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
