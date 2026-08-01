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
      className="relative flex items-end min-h-[40vh] md:min-h-[48vh] max-h-[55vh] overflow-hidden"
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
            className="w-full h-[120%] object-cover object-center"
          />
        </div>
      )}

      {/* Dark overlay with higher contrast for subtitle & title clarity */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundColor: `rgba(18, 18, 20, ${overlayBase + overlayExtra + 0.15})`,
        }}
      />

      {/* Subtle radial gradient focus on content */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[rgba(18,18,20,0.4)] to-[rgba(18,18,20,0.85)] z-[3] pointer-events-none" />

      {/* Decorative grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-[4]">
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

      {/* Decorative bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent pointer-events-none z-[5]" />

      {/* Content */}
      <div className="relative z-10 w-full container-site pb-10 md:pb-14 pt-28 md:pt-32">
        <SectionReveal>
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[rgba(184,150,62,0.15)] border border-[var(--gold-primary)]/40 backdrop-blur-md mb-3.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--gold-primary)]" />
              <p className="font-[Jost] text-[11px] md:text-[12px] tracking-[2.5px] uppercase font-medium text-[var(--gold-light)]">
                {subtitle}
              </p>
            </div>
          )}
          <h1 className="heading-xl text-[var(--text-primary)] drop-shadow-md text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light">
            {title}
          </h1>
          {/* Gold underline decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-[var(--gold-primary)] via-[var(--gold-pale)] to-transparent mt-4 md:mt-5 origin-left"
          />
        </SectionReveal>
      </div>
    </section>
  )
}
