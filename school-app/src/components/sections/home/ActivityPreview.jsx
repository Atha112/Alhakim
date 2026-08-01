import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { homepageContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'
import ActivityCard from '../shared/ActivityCard'

const { activityPreview } = homepageContent

export default function ActivityPreview() {
  const items = activityPreview.items.slice(0, 4)

  return (
    <section className="section-gap bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-diagonal opacity-20 pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-label text-[var(--gold-primary)] mb-4 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              {activityPreview.label}
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
            </p>

            <h2 className="heading-lg text-[var(--text-primary)] mb-6">
              {activityPreview.title}
            </h2>

            <GoldDivider className="mb-6" />

            <p className="font-[Jost] font-light text-[var(--text-secondary)] max-w-[680px] mx-auto text-lg leading-relaxed">
              {activityPreview.description}
            </p>
          </div>
        </SectionReveal>

        {/* Activity grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {items.map((activity, index) => (
            <SectionReveal key={activity.id} delay={index * 0.08}>
              <ActivityCard activity={activity} />
            </SectionReveal>
          ))}
        </div>

        {/* CTA link */}
        <SectionReveal>
          <div className="text-center">
            <Link
              to="/aktivitas"
              className="cta-primary"
            >
              Lihat Semua Aktivitas
              <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
