import React from 'react'
import { visiMisiContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'

export default function MisiSection() {
  const listMisi = [
    "Menumbuhkan karakter keimanan sebagai fondasi kehidupan.",
    "Mengembangkan potensi santri sesuai fitrahnya.",
    "Menyelenggarakan pembelajaran berbasis alam yang bermakna.",
    "Membentuk insan yang aqil baligh."
  ]

  return (
    <section className="bg-[#141414] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="max-w-4xl mx-auto">
            {/* Header Section: Teks 'Misi Kami' di bagian atas rata kiri */}
            <p className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase mb-12 font-medium">
              MISI KAMI
            </p>

            {/* Layout List Misi (Grid Vertikal / Flex Col dengan space-y lega) */}
            <div className="flex flex-col space-y-12 md:space-y-14">
              {listMisi.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-5">
                  {/* Angka (Bullet Point Serif Besar Transparan 40%) */}
                  <span className="font-[Cormorant_Garamond] text-4xl md:text-6xl text-[#D4AF37]/40 font-light leading-none shrink-0">
                    0{idx + 1}
                  </span>

                  {/* Teks Misi (Solid, Font Normal, Ukuran text-xl md:text-2xl) */}
                  <p className="text-stone-200 font-normal text-xl md:text-2xl leading-snug drop-shadow-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
