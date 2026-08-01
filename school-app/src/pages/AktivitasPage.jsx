import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aktivitasContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Lightbox from '../components/ui/Lightbox'

const { title, subtitle, categories, items } = aktivitasContent

export default function AktivitasPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems =
    activeCategory === 'Semua'
      ? items
      : items.filter((item) => item.category === activeCategory)

  const lightboxImages = items.map((item) => ({
    src: item.image,
    alt: item.title,
  }))

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Header */}
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/aktivitas-header.jpg"
      />

      {/* Activity section */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            {/* Category filter with stagger entrance */}
            <div className="flex flex-wrap gap-3 mb-4 justify-center">
              {categories.map((cat, catIdx) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    text-label px-5 py-2.5 rounded-[2px] transition-all duration-300
                    ${
                      activeCategory === cat
                        ? 'bg-[var(--gold-primary)] text-[var(--text-on-gold)] shadow-[0_4px_16px_rgba(184,150,62,0.25)]'
                        : 'border border-[var(--gold-primary)] text-[var(--gold-primary)] hover:bg-[var(--gold-primary)] hover:text-[var(--text-on-gold)]'
                    }
                  `}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Count indicator */}
            <p className="text-center text-[var(--text-muted)] font-[Jost] text-sm mb-12">
              Menampilkan {filteredItems.length} aktivitas
            </p>
          </SectionReveal>

          {/* Activity grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div
                    className="content-card overflow-hidden !p-0 group cursor-pointer"
                    onClick={() => openLightbox(items.findIndex((i) => i.id === item.id))}
                  >
                    {/* Image */}
                    <div className="relative ratio-landscape overflow-hidden img-zoom-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-editorial"
                      />
                      {/* Stronger overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[var(--image-overlay)] to-[var(--image-overlay)] group-hover:opacity-0 transition-opacity duration-500" />
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 text-label bg-[var(--badge-bg)] text-[var(--gold-primary)] px-3 py-1 rounded-[2px] backdrop-blur-sm z-10">
                        {item.category}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="p-6">
                      <h3 className="heading-md text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold-primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <GoldDivider className="mb-3 !ml-0" />
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-muted)] font-[Jost]">
                Belum ada aktivitas dalam kategori ini.
              </p>
            </div>
          )}

          {/* Link to gallery */}
          <div className="text-center mt-12">
            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 font-[Jost] text-sm tracking-[1px] text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors duration-300 group"
            >
              <span>Lihat Foto Lainnya</span>
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
