import React from 'react'
import { FileText, ClipboardList, Bell, CheckCircle, ArrowRight } from 'lucide-react'
import { pendaftaranContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'

const { title, subtitle, steps, cta } = pendaftaranContent

const stepIcons = [FileText, ClipboardList, Bell, CheckCircle]

const faqItems = [
  {
    question: 'Berapa biaya pendaftaran?',
    answer: 'Biaya pendaftaran bervariasi sesuai jenjang pendidikan. Untuk informasi detail biaya, silakan hubungi tim admisi kami melalui WhatsApp atau telepon.',
  },
  {
    question: 'Apakah tersedia program beasiswa?',
    answer: 'Ya, Sekolah Alam Al-Hakim menyediakan program beasiswa parsial untuk siswa berprestasi dari keluarga kurang mampu. Informasi lebih lanjut dapat ditanyakan saat sesi wawancara.',
  },
  {
    question: 'Kapan tahun ajaran baru dimulai?',
    answer: 'Tahun ajaran baru dimulai setiap bulan Juli. Namun, pendaftaran dibuka sejak bulan Januari hingga Mei setiap tahunnya.',
  },
  {
    question: 'Apakah siswa harus sudah bisa membaca untuk masuk SD?',
    answer: 'Tidak harus. Kami melakukan observasi dan penilaian perkembangan anak secara holistik, bukan hanya kemampuan akademik. Setiap anak diterima berdasarkan kesiapan perkembangannya.',
  },
  {
    question: 'Bagaimana sistem pembelajaran di sekolah ini berbeda dari sekolah reguler?',
    answer: 'Kami menggunakan pendekatan pembelajaran berbasis alam (nature-based learning) di mana alam menjadi laboratorium utama. Siswa belajar melalui eksplorasi langsung, proyek nyata, dan pengalaman hands-on yang terintegrasi dengan nilai-nilai Islam.',
  },
  {
    question: 'Apakah sekolah menyediakan transportasi/jemput putra-putri?',
    answer: 'Saat ini kami belum menyediakan layanan transportasi. Namun, kami membantu koordinasi antar orang tua untuk carpooling dan menyediakan informasi transportasi umum yang menuju ke area sekolah.',
  },
  {
    question: 'Bagaimana sistem penilaian di Sekolah Alam Al-Hakim?',
    answer: 'Kami menggunakan penilaian berbasis kompetensi yang mencakup aspek kognitif, afektif, dan psikomotorik. Penilaian dilakukan melalui observasi harian, portofolio karya siswa, proyek, dan evaluasi berkala — bukan hanya ujian tertulis.',
  },
  {
    question: 'Apakah siswa bisa masuk di tengah tahun ajaran?',
    answer: 'Ya, kami menerima siswa pindahan di tengah tahun ajaran sesuai ketersediaan kuota. Calon siswa akan melalui proses observasi dan penyesuaian terlebih dahulu untuk memastikan transisi yang nyaman bagi anak.',
  },
  {
    question: 'Apa saja kegiatan ekstrakurikuler yang tersedia?',
    answer: 'Kami menawarkan berbagai kegiatan ekstrakurikuler yang terintegrasi dengan nilai alam dan Islam, termasuk pencak silat, seni batik, tahfidz intensif, pramuka alam, jurnalistik, dan kewirausahaan siswa.',
  },
  {
    question: 'Bagaimana peran orang tua dalam pendidikan di Al-Hakim?',
    answer: 'Orang tua merupakan mitra utama dalam pendidikan. Kami mengadakan pertemuan orang tua bulanan, workshop parenting, dan kegiatan kolaborasi orang tua-siswa. Komunikasi perkembangan anak dilaporkan secara rutin melalui aplikasi dan pertemuan tatap muka.',
  },
]

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
              Dokumen
            </p>
            <h2 className="heading-md text-[var(--text-primary)] text-center mb-10">
              Kelengkapan Berkas
            </h2>
            <div className="content-card max-w-[640px] mx-auto">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)] flex items-center justify-center text-[11px] font-[Jost] font-medium mt-0.5">
                      {index + 1}
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gap pt-0">
        <div className="container-site">
          <SectionReveal>
            <p className="text-label text-[var(--gold-primary)] text-center mb-3">
              FAQ
            </p>
            <h2 className="heading-md text-[var(--text-primary)] text-center mb-10">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="max-w-[640px] mx-auto">
              <Accordion items={faqItems} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <h2 className="heading-lg text-[var(--text-primary)] text-center max-w-[600px] mx-auto mb-6">
              Siap bergabung dengan keluarga besar Al-Hakim?
            </h2>
            <GoldDivider className="mb-8" />
            <div className="text-center">
              <a href={cta.link} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  {cta.text}
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
