import React from 'react'
import { Link } from 'react-router-dom'
import { Award, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react'
import { visiMisiContent, kurikulumContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'

export default function RebuiltFilosofiSection() {
  const { budaya, targetSD } = visiMisiContent

  return (
    <section className="bg-[#141414] py-20 md:py-28 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* BUDAYA SEKOLAH & TARGET KOMPETENSI (Editorial Asymmetric Layout) */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div>
            <div className="text-center mb-10">
              <span className="text-label text-[var(--gold-primary)] block mb-2">Penanaman Nilai & Target</span>
              <h3 className="heading-md text-[#F4EFE6] drop-shadow-sm">
                Budaya Sekolah & Target Kompetensi
              </h3>
              <GoldDivider className="mt-4" />
            </div>

            {/* Asymmetrical Editorial Grid Layout (No Cards/Borders) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-20 mt-16 md:mt-24 items-start">
              
              {/* Kolom Kiri (Target SD - Porsi Besar md:col-span-7) */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Award size={18} className="text-[var(--gold-primary)]" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--gold-primary)]">
                      Target Kompetensi SD
                    </span>
                  </div>

                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-[Cormorant_Garamond] font-light text-[#F4EFE6] leading-tight my-6 drop-shadow-sm">
                    {targetSD.title}
                  </h4>

                  <p className="text-stone-400 font-light text-lg md:text-xl leading-relaxed max-w-xl">
                    {targetSD.description}
                  </p>
                </div>

                <div>
                  <Link
                    to="/program/sd"
                    className="text-[var(--gold-primary)] hover:text-white transition-colors tracking-wide text-sm font-medium uppercase mt-8 inline-flex items-center gap-2 group"
                  >
                    Lihat Detail Program SD <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Kolom Kanan (Budaya - Ditumpuk Vertikal md:col-span-5) */}
              <div className="md:col-span-5 flex flex-col gap-12 relative md:border-l md:border-white/10 md:pl-16">
                {/* Item Atas: Insight Learning */}
                {budaya[0] && (
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={16} className="text-[var(--gold-primary)]" />
                        <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--gold-primary)]">
                          Budaya Pembelajaran
                        </span>
                      </div>

                      <h5 className="heading-sm text-[#F4EFE6] mb-3 drop-shadow-sm">
                        {budaya[0].title}
                      </h5>

                      <p className="text-stone-400 font-light text-base leading-relaxed">
                        {budaya[0].description}
                      </p>
                    </div>

                    <Link
                      to="/kurikulum"
                      className="text-[var(--gold-primary)] hover:text-white transition-colors tracking-wide text-xs font-medium uppercase mt-6 inline-flex items-center gap-1.5 group"
                    >
                      Eksplorasi Kurikulum <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}

                {/* Item Bawah: Brothering */}
                {budaya[1] && (
                  <div className="flex flex-col justify-between pt-8 border-t border-white/5 md:border-t-0 md:pt-0">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck size={16} className="text-[var(--gold-primary)]" />
                        <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--gold-primary)]">
                          Budaya Sosial Santri
                        </span>
                      </div>

                      <h5 className="heading-sm text-[#F4EFE6] mb-3 drop-shadow-sm">
                        {budaya[1].title}
                      </h5>

                      <p className="text-stone-400 font-light text-base leading-relaxed">
                        {budaya[1].description}
                      </p>
                    </div>

                    <Link
                      to="/kurikulum"
                      className="text-[var(--gold-primary)] hover:text-white transition-colors tracking-wide text-xs font-medium uppercase mt-6 inline-flex items-center gap-1.5 group"
                    >
                      Eksplorasi Kurikulum <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
