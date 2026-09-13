import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, MessageCircle, User } from 'lucide-react'
import { kontakContent } from '../data/content'
import { useContent } from '../context/ContentContext'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Button from '../components/ui/Button'

const errorVariants = {
  initial: { opacity: 0, y: -4, height: 0 },
  animate: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -4, height: 0 },
}

const validationRules = {
  name: { required: true, minLength: 3, message: 'Nama minimal 3 karakter' },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Format email tidak valid' },
  subject: { required: true, minLength: 5, message: 'Subjek minimal 5 karakter' },
  message: { required: true, minLength: 10, message: 'Pesan minimal 10 karakter' },
}

const requiredMessage = 'Wajib diisi'

function validateField(name, value) {
  const rules = validationRules[name]
  if (!rules) return ''
  if (rules.required && (!value || !value.trim())) return requiredMessage
  if (rules.minLength && value.trim().length < rules.minLength) return rules.message
  if (rules.pattern && !rules.pattern.test(value)) return rules.message
  return ''
}

export default function KontakKamiPage() {
  const { texts } = useContent()
  const info = texts?.kontak?.info || kontakContent.info
  const cta = texts?.kontak?.cta || kontakContent.cta
  const schoolInfo = texts?.schoolInfo || {}

  const contacts = info.contacts || [
    { name: 'Ka Ecep Supriatna', role: 'Humas & Pendaftaran', phone: '+62 895-3267-69365', whatsapp: '62895326769365' },
    { name: 'Ka Fikri Fathul Islam', role: 'Informasi & Layanan', phone: '+62 089-3887-405', whatsapp: '620893887405' },
  ]

  const socialMedia = schoolInfo.socialMedia || {
    instagram: 'https://instagram.com/sekolahalamalhakim',
    instagramHandle: '@sekolahalamalhakim',
    instagramSmp: 'https://instagram.com/sekolahalamalhakim_smp',
    instagramSmpHandle: '@sekolahalamalhakim_smp',
  }

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    let hasError = false
    for (const field of Object.keys(validationRules)) {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
        hasError = true
      }
    }
    if (hasError) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const getInputClasses = (fieldName) => {
    const hasError = !!errors[fieldName]
    return `w-full bg-[var(--bg-secondary)] border rounded-[2px] px-4 py-3 font-[Jost] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors duration-300 ${
      hasError
        ? 'border-red-400 focus:border-red-400'
        : 'border-[var(--border-subtle)] focus:border-[var(--gold-primary)]'
    }`
  }

  return (
    <>
      {/* Header */}
      <PageHeader
        title={kontakContent.title}
        subtitle={kontakContent.subtitle}
        backgroundImage="/images/kontak-header.jpg"
      />

      {/* Contact info section */}
      <section className="section-gap pb-0">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center max-w-[800px] mx-auto mb-10">
              <p className="font-[Jost] font-light text-[var(--text-secondary)] text-lg leading-relaxed">
                Sekolah Alam Al-Hakim membuka komunikasi seluas-luasnya bagi orang tua yang ingin mengenal lebih jauh sistem pendidikan fitrah dan aqil baligh kami.
              </p>
              <GoldDivider className="mt-6" />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information & Staff Cards */}
              <div className="flex flex-col gap-6">
                {/* Contact Persons */}
                <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-gold)]">
                  <h3 className="text-label text-[var(--gold-primary)] mb-4 flex items-center gap-2">
                    <User size={16} /> Kontak Admin & Staff Pendaftaran
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contacts.map((c, idx) => (
                      <div key={idx} className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[4px] flex flex-col gap-2">
                        <span className="font-[Jost] font-medium text-sm text-[var(--text-primary)]">
                          {c.name}
                        </span>
                        <span className="text-[11px] text-[var(--gold-dim)] uppercase tracking-wider">
                          {c.role || 'Informasi & Layanan'}
                        </span>
                        <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
                          <a
                            href={`https://wa.me/${c.whatsapp || c.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--gold-primary)] hover:underline flex items-center gap-1 font-[Jost]"
                          >
                            <MessageCircle size={14} /> {c.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media Instagram Cards */}
                <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <h3 className="text-label text-[var(--gold-primary)] mb-4 flex items-center gap-2">
                    <Instagram size={16} /> Akun Instagram Official
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded hover:border-[var(--gold-primary)] transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-colors">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] block">IG Utama & SD</span>
                        <span className="text-xs font-[Jost] text-[var(--text-primary)] font-medium group-hover:text-[var(--gold-primary)]">
                          {socialMedia.instagramHandle || '@sekolahalamalhakim'}
                        </span>
                      </div>
                    </a>

                    <a
                      href={socialMedia.instagramSmp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded hover:border-[var(--gold-primary)] transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--gold-ghost)] flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-black transition-colors">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[var(--text-muted)] block">IG SMP Al-Hakim</span>
                        <span className="text-xs font-[Jost] text-[var(--text-primary)] font-medium group-hover:text-[var(--gold-primary)]">
                          {socialMedia.instagramSmpHandle || '@sekolahalamalhakim_smp'}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location & Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="content-card flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-label text-[var(--gold-primary)] mb-1">Alamat</p>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{info.address}</p>
                    </div>
                  </div>

                  <div className="content-card flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] text-[var(--gold-primary)]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-label text-[var(--gold-primary)] mb-1">Jam Operasional</p>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="min-h-[420px] rounded-[4px] overflow-hidden border border-[var(--border-subtle)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.8!3d-6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sekolah Alam Al-Hakim"
                  className="w-full h-full min-h-[420px]"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center mb-10">
              <p className="text-label text-[var(--gold-primary)] mb-3">Pesan</p>
              <h2 className="heading-md text-[var(--text-primary)]">
                Kirim Pesan kepada Kami
              </h2>
            </div>

            <div className="content-card max-w-[640px] mx-auto">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-[var(--gold-primary)] mx-auto mb-4" />
                  <p className="text-[var(--text-primary)] font-[Jost] text-sm leading-relaxed">
                    Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label className="text-label text-[var(--text-secondary)] mb-2 block">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      minLength={3}
                      className={getInputClasses('name')}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          variants={errorVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-xs font-[Jost] mt-1.5 overflow-hidden"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="text-label text-[var(--text-secondary)] mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan alamat email Anda"
                      required
                      className={getInputClasses('email')}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          variants={errorVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-xs font-[Jost] mt-1.5 overflow-hidden"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="text-label text-[var(--text-secondary)] mb-2 block">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Masukkan subjek pesan"
                      required
                      minLength={5}
                      className={getInputClasses('subject')}
                    />
                    <AnimatePresence>
                      {errors.subject && (
                        <motion.p
                          variants={errorVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-xs font-[Jost] mt-1.5 overflow-hidden"
                        >
                          {errors.subject}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="text-label text-[var(--text-secondary)] mb-2 block">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      required
                      minLength={10}
                      className={`${getInputClasses('message')} resize-none`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          variants={errorVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-xs font-[Jost] mt-1.5 overflow-hidden"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" type="submit">
                      <Send size={16} strokeWidth={1.5} className="mr-2" />
                      Kirim Pesan
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap bg-[var(--bg-secondary)] border-t border-[var(--border-gold)]">
        <div className="container-site">
          <SectionReveal>
            <div className="text-center max-w-[600px] mx-auto">
              <Send size={28} className="text-[var(--gold-primary)] mx-auto mb-4 opacity-60" />
              <h2 className="heading-lg text-[var(--text-primary)] mb-6">
                {cta.text}
              </h2>
              <GoldDivider className="mb-8" />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${contacts[0]?.whatsapp || '62895326769365'}?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Chat Ka Ecep Supriatna</Button>
                </a>
                <a
                  href={`https://wa.me/${contacts[1]?.whatsapp || '620893887405'}?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Chat Ka Fikri Fathul Islam</Button>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
