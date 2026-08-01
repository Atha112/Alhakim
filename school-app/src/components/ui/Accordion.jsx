import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={['flex flex-col', className].join(' ')}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            border-b border-[var(--border-gold)]
            ${index === 0 ? 'border-t' : ''}
          `}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between text-left py-5 cursor-pointer group"
            aria-expanded={openIndex === index}
          >
            <span className="font-[Jost] font-normal text-sm tracking-[1px] text-[var(--text-primary)] pr-4 group-hover:text-[var(--gold-primary)] transition-colors duration-300">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="shrink-0 text-[var(--gold-primary)]"
            >
              <ChevronDown size={18} strokeWidth={1.5} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                  opacity: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="overflow-hidden"
              >
                <p className="font-[Jost] font-light text-sm text-[var(--text-secondary)] leading-relaxed pb-5">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
