import React, { useEffect } from 'react'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Leaf, ArrowLeft, ArrowUp } from 'lucide-react'
import { programs } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'

const featureIcons = [Check, Leaf, Check]

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const program = programs.find((p) => p.slug === slug)

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  // If slug doesn't match any program, redirect to home
  if (!program) {
    return <Navigate to="/" replace />
  }

  const otherPrograms = programs.filter((p) => p.slug !== slug)

  return (
    <>
      {/* Back link */}
      <div className="bg-[var(--bg-primary)] pt-20">
        <div className="container-site">
          <Link
            to="/program"
            className="inline-flex items-center gap-2 font-[Jost] text-[var(--text-secondary)] text-sm tracking-[1px] hover:text-[var(--gold-primary)] transition-colors duration-300 py-3 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Kembali ke Program</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <PageHeader
        title={program.name}
        subtitle={program.shortName}
        backgroundImage={program.image}
      />

      {/* Program Overview */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image with entrance animation */}
              <motion.div
                className="ratio-landscape relative overflow-hidden rounded-[4px] img-zoom-container"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="img-editorial"
                />
                <div className="absolute inset-0 bg-[var(--image-overlay)]" />
              </motion.div>

              {/* Text */}
              <div>
                {/* Age range badge */}
                <span className="inline-block text-label text-[var(--gold-primary)] mb-4 px-3 py-1.5 border border-[var(--border-gold)] rounded-[2px] bg-[var(--gold-ghost)]">
                  {program.ageRange}
                </span>

                <h2 className="heading-md text-[var(--text-primary)] mb-4">
                  Tentang Program
                </h2>
                <GoldDivider className="mb-6 !ml-0" />
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  {program.features.map((feature, index) => {
                    const IconComponent = featureIcons[index % featureIcons.length]
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 px-4 py-3 bg-[var(--gold-ghost)] border border-[var(--border-gold)] rounded-[4px] hover:bg-[rgba(184,150,62,0.12)] transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <IconComponent
                          size={16}
                          className="text-[var(--gold-primary)] shrink-0"
                        />
                        <span className="font-[Jost] font-light text-[var(--text-primary)] text-sm tracking-[0.5px]">
                          {feature}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>



      {/* Back to top link */}
      <div className="container-site">
        <div className="flex justify-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-[Jost] text-sm text-[var(--gold-primary)] tracking-[1px] hover:gap-3 transition-all duration-300"
          >
            <ArrowUp size={14} />
            Kembali ke Atas
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-primary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <h2 className="heading-lg text-[var(--text-primary)] text-center max-w-[600px] mx-auto mb-6">
              Tertarik dengan program {program.shortName}?
            </h2>
            <GoldDivider className="mb-8" />
            <div className="text-center">
              <Link to="/pendaftaran">
                <Button variant="outline">Daftar Sekarang</Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
