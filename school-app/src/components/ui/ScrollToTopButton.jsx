import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

      setScrollPercent(percent)
      setVisible(scrollTop > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Call once on mount to set initial state
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SVG circle progress ring parameters
  const size = 48
  const strokeWidth = 2.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - scrollPercent * circumference

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center text-[var(--gold-primary)] hover:text-[var(--text-on-gold)] transition-colors duration-300"
          aria-label="Scroll to top"
          style={{ width: size, height: size }}
        >
          {/* SVG Progress Ring */}
          <svg
            width={size}
            height={size}
            className="absolute inset-0 -rotate-90"
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* Background track circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--border-gold)"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--gold-primary)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.15s ease-out',
              }}
            />
          </svg>

          {/* Inner background circle */}
          <div
            className="absolute rounded-full bg-[var(--bg-card)] border border-[var(--border-gold)] hover:bg-[var(--gold-primary)] transition-colors duration-300"
            style={{
              width: size - strokeWidth * 2 - 4,
              height: size - strokeWidth * 2 - 4,
            }}
          />

          {/* Arrow icon */}
          <ArrowUp size={16} strokeWidth={1.5} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
