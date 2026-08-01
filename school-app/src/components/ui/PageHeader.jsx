import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

export default function PageHeader({ title, subtitle, backgroundImage }) {
  const ref = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, -rect.top)
      setScrollY(scrollProgress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const imageY = scrollY * 0.2
  const overlayBase = 0.55
  const overlayExtra = Math.min(scrollY / 500, 0.2)

  return (
    <section
      ref={ref}
      className="relative flex items-end min-h-[45vh] max-h-[55vh] overflow-hidden"
    >
      {/* Background image with parallax */}
      {backgroundImage && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${imageY}px)` }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-[120%] object-cover"
          />
        </div>
      )}

      {/* Dark overlay with scroll-based opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(20, 20, 22, ${overlayBase + overlayExtra})`,
        }}
      />

      {/* Decorative grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[3]">
        <svg className="w-full h-full">
          <filter id="header-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#header-grain)" />
        </svg>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent pointer-events-none z-[5]" />

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-24 h-24 border-b border-r border-[var(--gold-primary)] opacity-10 pointer-events-none z-[6] ml-[5%] mt-[5%]" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-t border-l border-[var(--gold-primary)] opacity-10 pointer-events-none z-[6] mr-[5%] mb-[20%]" />

      {/* Content */}
      <div className="relative z-10 w-full container-site pb-14 pt-28">
        <SectionReveal>
          {subtitle && (
            <p className="text-label text-[var(--gold-primary)] mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[var(--gold-primary)]" />
              {subtitle}
            </p>
          )}
          <h1 className="heading-xl text-[var(--text-primary)]">
            {title}
          </h1>
          {/* Gold underline decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-20 h-px bg-gradient-to-r from-[var(--gold-primary)] to-transparent mt-6 origin-left"
          />
        </SectionReveal>
      </div>
    </section>
  )
}
