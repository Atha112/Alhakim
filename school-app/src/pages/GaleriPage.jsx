import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import Lightbox from '../components/ui/Lightbox'

const { title, subtitle, categories, items } = galleryContent

export default function GaleriPage() {
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
        backgroundImage="/images/galeri-header.jpg"
      />

      {/* Gallery section */}
      <section className="section-gap">
        <div className="container-site">
          <SectionReveal>
            {/* Section header */}
            <div className="text-center mb-8">
              <h2 className="heading-md text-[var(--text-primary)] mb-3">
                Jelajahi Koleksi Foto Kami
              </h2>
              <GoldDivider />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
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
                </button>
              ))}
            </div>

            {/* Count indicator */}
            <p className="text-center text-[var(--text-muted)] font-[Jost] text-sm mb-12">
              Menampilkan {filteredItems.length} foto
            </p>
          </SectionReveal>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                const globalIndex = items.findIndex((i) => i.id === item.id)
                const isOdd = idx % 2 !== 0
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ y: -4 }}
                    className="break-inside-avoid mb-4"
                  >
                    <div
                      className="content-card !p-0 overflow-hidden group cursor-pointer rounded-[4px]"
                      onClick={() => openLightbox(globalIndex)}
                    >
                      {/* Image with hover overlay */}
                      <div className="relative overflow-hidden img-zoom-container">
                        <div className={isOdd ? 'aspect-[3/4]' : 'ratio-landscape'}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-editorial w-full h-full object-cover"
                          />
                        </div>

                        {/* Always-visible bottom gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-overlay)] via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-overlay)] via-[rgba(0,0,0,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                          <span className="text-label text-[var(--gold-primary)] mb-2 inline-block">
                            {item.category}
                          </span>
                          <h3 className="heading-md text-[var(--text-primary)]">
                            {item.title}
                          </h3>
                        </div>
                        {/* Category badge (always visible) */}
                        <span className="absolute top-3 left-3 text-label bg-[var(--badge-bg)] text-[var(--gold-primary)] px-3 py-1 rounded-[2px] backdrop-blur-sm z-10">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-muted)] font-[Jost]">
                Belum ada foto dalam kategori ini.
              </p>
            </div>
          )}
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
