import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const visited = sessionStorage.getItem('alhakim_visited')
    if (visited) {
      setMounted(false)
      return
    }

    setShow(true)

    const exitTimer = setTimeout(() => {
      setShow(false)
    }, 1700)

    const unmountTimer = setTimeout(() => {
      sessionStorage.setItem('alhakim_visited', 'true')
      setMounted(false)
    }, 2600)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(unmountTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[var(--bg-overlay)] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <div className="text-center">
            {/* Decorative top lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className="inline-block w-12 h-px bg-[var(--gold-primary)] opacity-40" />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] opacity-40" />
              <span className="inline-block w-12 h-px bg-[var(--gold-primary)] opacity-40" />
            </motion.div>

            {/* School name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[Cormorant_Garamond] font-light text-[clamp(2rem,5vw,3.5rem)] tracking-[0.08em] text-[var(--text-primary)] leading-[1.1]"
            >
              Sekolah Alam AL-Hakim
            </motion.div>

            {/* Gold line animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--gold-primary)] to-transparent mx-auto mt-6 origin-center"
            />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-[Jost] text-[11px] uppercase tracking-[5px] text-[var(--gold-primary)] mt-4"
            >
              Menumbuhkan Fitrah
            </motion.div>

            {/* Decorative bottom lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <span className="inline-block w-12 h-px bg-[var(--gold-primary)] opacity-40" />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] opacity-40" />
              <span className="inline-block w-12 h-px bg-[var(--gold-primary)] opacity-40" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
