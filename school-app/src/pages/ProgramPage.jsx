import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { programs } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'

export default function ProgramPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Program Pendidikan"
        subtitle="Dari usia dini hingga jenjang SMA"
        backgroundImage="/images/program-sd.jpg"
      />

      {/* Intro text */}
      <section className="section-gap pb-0">
        <div className="container-site">
          <SectionReveal>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl">
              Dari usia dini hingga jenjang SMA, setiap program dirancang untuk menumbuhkan fitrah terbaik setiap anak.
            </p>
            <GoldDivider className="mt-8" />
          </SectionReveal>
        </div>
      </section>

      {/* Program Grid */}
      <section className="section-gap">
        <div className="container-site">
          {/* First 3 programs — 3-col on desktop, 2-col on tablet, 1-col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {programs.slice(0, 3).map((program, index) => (
              <SectionReveal key={program.id} delay={index * 0.1}>
                <ProgramCard program={program} />
              </SectionReveal>
            ))}
          </div>

          {/* Remaining 2 programs — 2-col centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.666%+0.75rem)] lg:max-w-[calc(66.666%+0.75rem)] mx-auto lg:mx-auto">
            {programs.slice(3).map((program, index) => (
              <SectionReveal key={program.id} delay={(index + 3) * 0.1}>
                <ProgramCard program={program} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site text-center">
          <SectionReveal>
            <p className="text-label text-[var(--gold-primary)] mb-3">Bergabunglah</p>
            <h2 className="heading-lg text-[var(--text-primary)] max-w-[600px] mx-auto mb-6">
              Siap Menumbuhkan Fitrah Terbaik Anak Anda?
            </h2>
            <GoldDivider className="mb-8" />
            <Link to="/pendaftaran" className="cta-primary">
              Daftar Sekarang
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

function ProgramCard({ program }) {
  return (
    <motion.div
      className="content-card !p-0 overflow-hidden group relative"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top accent line — animated on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 overflow-hidden">
        <motion.div
          className="h-full bg-[var(--gold-primary)] origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Image */}
      <div className="ratio-landscape relative overflow-hidden img-zoom-container">
        <img
          src={program.image}
          alt={program.name}
          className="img-editorial"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[var(--image-overlay)] group-hover:opacity-0 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Age range badge */}
        <span className="inline-block text-label text-[var(--gold-primary)] mb-3 px-3 py-1 border border-[var(--border-gold)] rounded-[2px] bg-[var(--gold-ghost)]">
          {program.ageRange}
        </span>

        {/* Program name */}
        <h3 className="heading-md text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold-primary)] transition-colors duration-300">
          {program.name}
        </h3>

        {/* Short description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 mb-4">
          {program.description}
        </p>

        {/* Link */}
        <Link
          to={`/program/${program.slug}`}
          className="inline-flex items-center gap-2 font-[Jost] text-[13px] tracking-[2px] uppercase text-[var(--gold-primary)] hover:text-[var(--gold-pale)] transition-colors duration-300 group/link"
        >
          Pelajari
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  )
}
