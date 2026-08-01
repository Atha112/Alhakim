import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { homepageContent } from '../../../data/content'

export default function HeroSection() {
  const { label, title, subtitle, ctaText, ctaLink } = homepageContent.hero
  const titleLines = title.split('\n').slice(0, 2)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          className="w-full h-full object-cover object-center animate-hero-zoom"
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay gradient for maximum text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,20,22,0.85)] via-[rgba(20,20,22,0.5)] to-[rgba(20,20,22,0.25)] z-[1]" />

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-[2]">
        <svg className="w-full h-full">
          <filter id="hero-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </div>

      {/* Responsive Content Alignment Container */}
      <div className="absolute inset-0 z-20 flex items-center pt-20 md:pt-24 pb-16">
        <div className="container-site">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-label text-[var(--gold-primary)] mb-3 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              {label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="heading-xl text-[var(--text-primary)] mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-lg"
            >
              {titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[Jost] font-light text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed max-w-[480px] mb-6 md:mb-8"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link to={ctaLink} className="cta-primary">
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none z-10" />
    </section>
  )
}
