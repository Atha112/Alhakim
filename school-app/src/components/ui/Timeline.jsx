import React from 'react'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const editorialEase = [0.25, 0.1, 0.25, 1]

function TimelineItem({ item, index, total }) {
  const isEven = index % 2 === 0
  const isLast = index === total - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: editorialEase,
        delay: index * 0.15,
      }}
      className="relative"
    >
      {/* Desktop: alternating left/right layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
        {/* Left content (even items) */}
        <div className={`${isEven ? '' : 'order-3'}`}>
          {isEven ? (
            <div className="text-right pr-4 pt-2">
              <p className="heading-md text-[var(--gold-primary)] mb-1">
                {item.year}
              </p>
              <h3 className="heading-md text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ) : (
            <div className="pl-4 pt-2" />
          )}
        </div>

        {/* Center line + node */}
        <div className="flex flex-col items-center order-2 relative">
          {/* Node circle */}
          <div className="relative z-10">
            <div
              className="w-4 h-4 rounded-full border-2 border-[var(--gold-primary)] bg-[var(--bg-primary)] transition-all duration-300 hover:bg-[var(--gold-primary)] hover:scale-125"
            />
          </div>

          {/* Vertical line */}
          {!isLast && (
            <div className="w-[3px] flex-1 bg-[var(--gold-primary)] opacity-30 min-h-[60px]" />
          )}
          {isLast && (
            <div className="w-[3px] flex-1 min-h-[20px]" />
          )}
        </div>

        {/* Right content (odd items) */}
        <div className={`${isEven ? 'order-3' : ''}`}>
          {!isEven ? (
            <div className="pl-4 pt-2">
              <p className="heading-md text-[var(--gold-primary)] mb-1">
                {item.year}
              </p>
              <h3 className="heading-md text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ) : (
            <div className="pr-4 pt-2" />
          )}
        </div>
      </div>

      {/* Mobile: all left-aligned */}
      <div className="md:hidden flex items-start gap-4">
        {/* Left: center line + node */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Node */}
          <div className="relative z-10">
            <div
              className="w-4 h-4 rounded-full border-2 border-[var(--gold-primary)] bg-[var(--bg-primary)] transition-all duration-300 hover:bg-[var(--gold-primary)]"
            />
          </div>
          {/* Vertical line */}
          {!isLast && (
            <div className="w-[3px] flex-1 bg-[var(--gold-primary)] opacity-30 min-h-[40px]" />
          )}
        </div>

        {/* Content */}
        <div className="pb-8">
          <p className="heading-md text-[var(--gold-primary)] mb-1">
            {item.year}
          </p>
          <h3 className="heading-md text-[var(--text-primary)] mb-2 text-lg">
            {item.title}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline({ data = [] }) {
  if (!data.length) return null

  return (
    <SectionReveal>
      <div className="relative max-w-[900px] mx-auto">
        {data.map((item, index) => (
          <TimelineItem
            key={item.year}
            item={item}
            index={index}
            total={data.length}
          />
        ))}
      </div>
    </SectionReveal>
  )
}
