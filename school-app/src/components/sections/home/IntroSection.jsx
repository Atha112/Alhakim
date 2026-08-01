import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { homepageContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'

export default function IntroSection() {
  const { label, title, description } = homepageContent.intro

  return (
    <section className="section-gap bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[5%] w-48 h-48 border border-[var(--border-gold)] rounded-full opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[3%] w-24 h-24 border border-[var(--border-gold)] rotate-12 opacity-[0.06] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionReveal>
          <div className="text-center max-w-[800px] mx-auto">
            {/* Label with decorative line */}
            <p className="text-label text-[var(--gold-primary)] mb-6 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              {label}
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
            </p>

            <h2 className="heading-lg text-[var(--text-primary)] mb-8">
              {title}
            </h2>

            <GoldDivider className="mb-8" />

            <p className="font-[Jost] font-light text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              {description}
            </p>

            <Link
              to="/tentang/cerita"
              className="font-[Jost] text-[var(--gold-primary)] text-sm tracking-[1px] inline-flex items-center gap-2 hover:text-[var(--gold-pale)] transition-colors duration-300 group hover-underline"
            >
              Baca Cerita Kami
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
