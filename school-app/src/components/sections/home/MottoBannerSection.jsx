import React from 'react'
import SectionReveal from '../../ui/SectionReveal'

export default function MottoBannerSection() {
  return (
    <section className="py-20 md:py-28 bg-[#141414] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold-primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Header Kiri (span 4): Label & Quotation Mark Raksasa Emas */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-[Cormorant_Garamond] text-xl md:text-2xl tracking-[0.2em] text-[#D4AF37] uppercase font-semibold block mb-4">
                  MOTTO KAMI
                </span>
                <span className="font-[Cormorant_Garamond] text-7xl md:text-8xl text-[#D4AF37]/25 leading-none block select-none">
                  “
                </span>
              </div>
            </div>

            {/* Konten Kanan (span 8): Headline Serif & Deskripsi dengan aksen garis kiri */}
            <div className="md:col-span-8 border-l border-[#D4AF37]/30 pl-6 md:pl-10 py-1">
              {/* Headline Motto */}
              <h2 className="text-3xl md:text-5xl font-bold font-[Cormorant_Garamond] text-[#F4EFE6] leading-tight mb-6 drop-shadow-sm">
                Tafakkur untuk Tadabbur Insan Bersyukur
              </h2>

              {/* Deskripsi Motto */}
              <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                Insan yang mentafakkuri ayat-ayat kauni untuk mentadabburi ayat-ayat Qur’ani, agar terbentuk manusia yang mampu mendayagunakan seluruh karunia Allah untuk kemaslahatan hidup.
              </p>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
