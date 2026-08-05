import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LazyImage from '../../ui/LazyImage'

export default function ProgramCard({ program }) {
  const { slug, name, shortName, ageRange, description } = program

  return (
    <motion.div
      className="content-card !p-0 overflow-hidden flex flex-col group rounded-[4px] relative isolation-auto"
      style={{ borderRadius: '4px', overflow: 'hidden' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image area with lazy loading */}
      <div
        className="img-zoom-container relative w-full overflow-hidden rounded-t-[4px]"
        style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px', overflow: 'hidden' }}
      >
        <LazyImage
          src={program.image}
          alt={name}
          aspectRatio="portrait"
          className="bg-[var(--bg-secondary)] w-full h-full object-cover rounded-t-[4px]"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-[Cormorant_Garamond] font-light text-[var(--text-primary)] text-xl tracking-[0.04em] mb-2 group-hover:text-[var(--gold-primary)] transition-colors duration-300">
          {name}
        </h3>

        <p className="font-[Jost] uppercase text-[11px] tracking-[5px] text-[var(--gold-primary)] mb-4">
          {ageRange}
        </p>

        <p className="font-[Jost] font-light text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {description}
        </p>

        <Link
          to={`/program/${slug}`}
          className="font-[Jost] font-light text-[var(--gold-primary)] text-sm tracking-[1px] inline-flex items-center gap-1.5 group/link hover:text-[var(--gold-pale)] transition-colors duration-300"
        >
          Pelajari
          <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </motion.div>
  )
}
