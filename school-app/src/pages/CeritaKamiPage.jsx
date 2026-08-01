import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ceritaContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'
import Timeline from '../components/ui/Timeline'

const { title, subtitle, sections, timeline, cta } = ceritaContent

// Pull-quote data: a highlighted sentence from each story
const pullQuotes = [
  "Keyakinan kami sederhana: anak yang dekat dengan alam akan dekat dengan Penciptanya.",
  "Setiap pohon yang ditanam siswa menjadi saksi tumbuhnya ilmu dan akhlak.",
  "Kami terus mengembangkan kurikulum untuk mewujudkan generasi yang menjadi khalifah sejati di muka bumi.",
]

export default function CeritaKamiPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/cerita-awal.jpg"
      />

      {/* Story sections with alternating backgrounds */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`section-gap ${
            index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'
          }`}
        >
          <div className="container-site">
            <SectionReveal>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  section.imagePosition === 'right' ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="ratio-landscape relative overflow-hidden rounded-[4px] img-zoom-container"
                >
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="img-editorial"
                  />
                  <div className="absolute inset-0 bg-[var(--image-overlay)]" />
                </motion.div>

                {/* Text */}
                <div className="accent-line-left">
                  <span className="text-label text-[var(--gold-dim)] block mb-3">
                    Bagian {index + 1}
                  </span>
                  <h2 className="heading-md text-[var(--text-primary)] mb-4">
                    {section.heading}
                  </h2>
                  <GoldDivider className="mb-6 !ml-0" />
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Decorative pull-quote between sections (not after the last one) */}
          {index < sections.length - 1 && (
            <div className="container-site mt-8">
              <SectionReveal>
                <div className="max-w-[560px] mx-auto text-center py-6">
                  <span className="block font-[Cormorant_Garamond] text-6xl leading-none text-[var(--gold-primary)] opacity-30 mb-2 select-none">
                    &ldquo;
                  </span>
                  <p className="font-[Cormorant_Garamond] text-lg md:text-xl italic text-[var(--gold-primary)] opacity-80 leading-relaxed">
                    {pullQuotes[index]}
                  </p>
                  <GoldDivider className="mt-6" />
                </div>
              </SectionReveal>
            </div>
          )}
        </section>
      ))}

      {/* Timeline Section */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-label text-[var(--gold-primary)] mb-4">
                Perjalanan Kami
              </p>
              <h2 className="heading-lg text-[var(--text-primary)] mb-4">
                Jejak Milestone
              </h2>
              <GoldDivider />
            </div>
          </SectionReveal>
          <Timeline data={timeline} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <h2 className="heading-lg text-[var(--text-primary)] text-center max-w-[600px] mx-auto mb-6">
              {cta.text}
            </h2>
            <GoldDivider className="mb-8" />
            <div className="text-center">
              <Link to={cta.link}>
                <Button variant="primary">Daftar Sekarang</Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
