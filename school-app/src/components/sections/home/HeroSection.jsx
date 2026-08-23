import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { homepageContent } from '../../../data/content'

export default function HeroSection() {
  const { label, title, subtitle, ctaText, ctaLink } = homepageContent.hero
  const titleLines = title.split('\n').slice(0, 2)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with mobile object-position focus */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          className="w-full h-full object-cover object-[75%_center] md:object-center animate-hero-zoom"
          aria-hidden="true"
        />
      </div>

      {/* Global Gradient Overlay: Smooth transition focusing dark gradient on top for natural text integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-[rgba(18,18,20,0.92)] md:via-[rgba(18,18,20,0.5)] md:to-transparent z-[1]" />

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
      <div className="absolute inset-0 z-20 flex items-start md:items-center pt-28 sm:pt-32 md:pt-24 pb-24 md:pb-16">
        <div className="container-site h-full md:h-auto flex flex-col justify-between md:justify-center relative">
          {/* Top Text Block (Top Area) */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-label text-[var(--gold-primary)] mb-3 flex items-center gap-3 drop-shadow"
            >
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              {label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[Cormorant_Garamond] font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-4 md:mb-6 leading-tight md:leading-[1.05] tracking-[0.04em] md:tracking-[0.08em] drop-shadow-md overflow-hidden"
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
              className="font-[Jost] font-light text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-[480px] mb-6 md:mb-8 drop-shadow-md"
            >
              {subtitle}
            </motion.p>

            {/* Desktop CTA (Hidden on Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:block w-fit"
            >
              <Link to={ctaLink} className="cta-primary inline-block w-fit">
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile CTA: Positioned at Bottom-Left (absolute bottom-8 left-6 z-30), scrolls with Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="md:hidden absolute bottom-8 left-6 z-30 w-fit pb-[env(safe-area-inset-bottom)]"
      >
        <Link to={ctaLink} className="cta-primary inline-block w-fit shadow-lg backdrop-blur-md bg-black/45 border-[var(--gold-primary)] text-[var(--gold-primary)] hover:bg-[var(--gold-primary)] hover:text-[var(--text-on-gold)]">
          {ctaText}
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-36 md:h-48 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none z-10" />
    </section>
  )
}
