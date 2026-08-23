import React from 'react'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'

export default function EditorialIntroSection() {
  return (
    <section className="section-gap bg-[#141414] relative overflow-hidden">
      {/* Subtle Luxury Watermark / Line Details */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 rounded-full border border-[var(--border-gold)] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 rounded-full border border-[var(--border-gold)] opacity-[0.03] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionReveal>
          <div className="max-w-[860px] mx-auto text-center py-4 md:py-8">
            
            {/* Main Header */}
            <h2 className="heading-lg text-[var(--text-primary)] mb-6 leading-tight tracking-[0.04em]">
              Sekolah Alam Al-Hakim
            </h2>

            <GoldDivider className="mb-10" />

            {/* High Editorial Minimalist Content (No Cards, No Emojis, Pure Typography & Negative Space) */}
            <div className="flex flex-col gap-8 text-[var(--text-primary)] font-[Jost] font-light text-base sm:text-lg md:text-xl leading-[1.8] md:leading-[1.9] text-center md:text-justify max-w-[780px] mx-auto">
              
              <p className="font-normal text-[var(--gold-pale)] text-lg sm:text-xl md:text-2xl leading-snug tracking-wide text-center drop-shadow-sm">
                Menerapkan Pendidikan Karakter Nabawiyah (Pendidikan Fitrah) dan Pendidikan Aqil Baligh.
              </p>

              <p className="text-[#F4EFE6] font-light text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
                Sekolah yang menerapkan sistem pendidikan karakter nabawiyah yaitu menumbuhkan karakter iman dan karakter belajar yang diselaraskan dengan karakter perkembangan anak.
              </p>

              <p className="text-[#F4EFE6] font-light text-sm sm:text-base md:text-lg leading-relaxed border-l-2 border-[var(--gold-primary)]/40 pl-4 md:pl-6 text-left my-2 bg-[var(--gold-ghost)]/30 py-4 pr-4 rounded-r drop-shadow-sm">
                Karakter Iman adalah pondasi kepribadian seorang anak, maka harus ditumbuhkan terlebih dahulu sebelum menumbuhkan karakter lainnya. Tanpa keimanan dan kesadaran, anak tidak mungkin akan menjadi pembelajar yang tangguh. Tanpa tumbuhnya karakter belajar, juga tidak mungkin anak akan menghasilkan karya yang bermanfaat.
              </p>

              <p className="text-[#F4EFE6] font-light text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
                Dan menerapkan Pendidikan Aqil Baligh, menempa santri agar memiliki karakter pemuda yaitu karakter tanggung jawab, kemandirian, kecakapan berpikir, dan kecakapan sosial.
              </p>

            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
