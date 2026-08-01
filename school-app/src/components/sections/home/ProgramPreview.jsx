import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { homepageContent, programs } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'
import ProgramCard from '../shared/ProgramCard'

export default function ProgramPreview() {
  const { label, title, description } = homepageContent.programPreview

  return (
    <section className="section-gap bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-[var(--border-gold)] rounded-bl-[100px] opacity-[0.06] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-label text-[var(--gold-primary)] mb-6 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              {label}
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
            </p>

            <h2 className="heading-lg text-[var(--text-primary)] mb-8">
              {title}
            </h2>

            <GoldDivider className="mb-8" />

            <p className="font-[Jost] font-light text-[var(--text-secondary)] text-lg leading-relaxed max-w-[680px] mx-auto">
              {description}
            </p>
          </div>
        </SectionReveal>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          {programs.map((program, index) => (
            <SectionReveal key={program.id} delay={index * 0.08}>
              <ProgramCard program={program} />
            </SectionReveal>
          ))}
        </div>

        {/* Tablet grid */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-5">
          {programs.slice(0, 3).map((program, index) => (
            <SectionReveal key={program.id} delay={index * 0.08}>
              <ProgramCard program={program} />
            </SectionReveal>
          ))}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 mt-5 max-w-[calc(66.666%+0.625rem)] mx-auto">
          {programs.slice(3).map((program, index) => (
            <SectionReveal key={program.id} delay={0.24 + index * 0.08}>
              <ProgramCard program={program} />
            </SectionReveal>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-x-custom">
          {programs.map((program) => (
            <div
              key={program.id}
              className="snap-start min-w-[280px] flex-shrink-0"
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* CTA link */}
        <SectionReveal>
          <div className="text-center mt-12">
            <Link
              to="/kurikulum"
              className="font-[Jost] text-[var(--gold-primary)] text-sm tracking-[1px] inline-flex items-center gap-2 hover:text-[var(--gold-pale)] transition-colors duration-300 group hover-underline"
            >
              Lihat Kurikulum Kami
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
