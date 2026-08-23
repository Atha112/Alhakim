import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { homepageContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'
import Button from '../../ui/Button'

const { cta } = homepageContent

export default function CTASection() {
  return (
    <section className="section-gap bg-[#141414] border-t border-[var(--border-gold)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-[5%] w-px h-20 bg-gradient-to-b from-[var(--gold-primary)] to-transparent opacity-20" />
      <div className="absolute bottom-0 right-[8%] w-px h-28 bg-gradient-to-t from-[var(--gold-primary)] to-transparent opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--border-gold)] opacity-[0.04] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionReveal>
          <div className="text-center max-w-[640px] mx-auto">
            <p className="text-label text-[var(--gold-primary)] mb-6 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              Bergabunglah
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
            </p>

            <h2 className="heading-lg text-[var(--text-primary)] mb-6">
              {cta.title}
            </h2>

            <GoldDivider className="mb-10" />

            <Link to={cta.ctaLink}>
              <Button variant="primary" className="group">
                {cta.ctaText}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
