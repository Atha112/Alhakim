import React from 'react'
import { FileText, ClipboardList, Bell, CheckCircle, ArrowRight } from 'lucide-react'
import { pendaftaranContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'

const { title, subtitle, steps, cta } = pendaftaranContent

const stepIcons = [FileText, ClipboardList, Bell, CheckCircle]

const requiredDocuments = [
  'Akta Kelahiran (fotokopi)',
  'Kartu Keluarga (fotokopi)',
  'Pas foto 3×4 berwarna (4 lembar)',
  'Rapor/keterangan dari sekolah sebelumnya (untuk jenjang SD ke atas)',
  'Surat keterangan sehat dari dokter',
]

export default function PendaftaranPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/pendaftaran-header.jpg"
      />

      {/* Steps section */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <p className="text-label text-[var(--gold-primary)] text-center mb-3">
              Langkah Pendaftaran
            </p>
            <h2 className="heading-lg text-[var(--text-primary)] text-center mb-14">
              Proses Pendaftaran
            </h2>
          </SectionReveal>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <SectionReveal key={step.number} delay={index * 0.1}>
                  <div className="content-card relative accent-line-left group">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="font-[Cormorant_Garamond] font-light text-[var(--gold-primary)] leading-none"
                        style={{ fontSize: '3.5rem' }}
                      >
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--text-on-gold)] transition-colors duration-300">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Step title */}
                    <h3 className="heading-md text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>

                    <GoldDivider className="mb-4 !ml-0" />

                    {/* Step description */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-[var(--gold-dim)] opacity-50">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Required documents section */}
      <section className="section-gap pt-0">
        <div className="container-site">
          <SectionReveal>
            <p className="text-label text-[var(--gold-primary)] text-center mb-3">
              Dokumen & Persyaratan
            </p>
            <h2 className="heading-lg text-[var(--text-primary)] text-center mb-10">
              Kelengkapan Berkas Pendaftaran
            </h2>
            <div className="content-card max-w-[720px] mx-auto p-6 md:p-8 border border-[var(--border-gold)]">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-[var(--text-primary)] text-base md:text-lg font-[Jost] font-light leading-relaxed p-3.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--gold-primary)] transition-colors duration-300"
                  >
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)] flex items-center justify-center text-sm font-[Jost] font-semibold">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <h2 className="heading-lg text-[var(--text-primary)] text-center max-w-[600px] mx-auto mb-4">
              Siap bergabung dengan keluarga besar Al-Hakim?
            </h2>
            <GoldDivider className="mb-8" />
            <div className="text-center">
              <a
                href="https://wa.me/620893887405?text=Assalamu'alaikum%20Ka%20Fikri,%20saya%20ingin%20mengisi%20formulir%20pendaftaran%20Sekolah%20Alam%20Al-Hakim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">
                  Isi Formulir Pendaftaran
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
