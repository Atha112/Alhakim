import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { routeMeta } from '../../lib/routeMeta'

const editorialEase = [0.25, 0.1, 0.25, 1]

export default function PageTransition() {
  const location = useLocation()
  const [showOverlay, setShowOverlay] = useState(false)
  const [title, setTitle] = useState(null)
  const [showTitle, setShowTitle] = useState(false)
  
  const timersRef = useRef([])
  const isFirstRender = useRef(true)

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const forceHideOverlay = useCallback(() => {
    clearAllTimers()
    setShowTitle(false)
    setShowOverlay(false)
    setTitle(null)
  }, [clearAllTimers])

  useEffect(() => {
    // Skip opening animation on initial site landing (let LoadingScreen handle landing)
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Always reset previous transition immediately when route changes or back button clicked
    forceHideOverlay()

    // Determine target page title
    const currentPath = location.pathname
    const meta = routeMeta[currentPath] || routeMeta[currentPath.replace(/\/$/, '')]
    const displayTitle = meta && meta.title ? meta.title : 'Al-Hakim'

    setTitle(displayTitle)
    setShowOverlay(true)
    setShowTitle(false)

    const addTimer = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timersRef.current.push(id)
    }

    // Phase 1: Show Title (100ms)
    addTimer(() => setShowTitle(true), 100)
    
    // Phase 2: Fade Title Out (750ms)
    addTimer(() => setShowTitle(false), 750)

    // Phase 3: Slide curtain up to reveal page (900ms)
    addTimer(() => setShowOverlay(false), 900)

    // Phase 4: Full State Reset (1100ms)
    addTimer(() => forceHideOverlay(), 1100)

    // Fail-safe cleanup: Force kill overlay after 1.5s max in case user navigates rapidly
    addTimer(() => forceHideOverlay(), 1500)

    return clearAllTimers
  }, [location.pathname, clearAllTimers, forceHideOverlay])

  // Safety listener for Browser Back / Forward Navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      forceHideOverlay()
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [forceHideOverlay])

  return (
    <AnimatePresence mode="wait">
      {showOverlay && (
        <motion.div
          key="transition-curtain"
          onClick={forceHideOverlay}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'var(--bg-overlay)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            pointerEvents: 'auto',
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.18, ease: editorialEase },
          }}
          exit={{
            y: '-100%',
            opacity: 1,
            transition: { duration: 0.5, ease: editorialEase },
          }}
        >
          {showTitle && title && (
            <motion.div
              key="transition-title"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: editorialEase },
              }}
              exit={{
                opacity: 0,
                y: -10,
                transition: { duration: 0.2, ease: editorialEase },
              }}
            >
              {/* Decorative Accent */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[var(--gold-primary)] opacity-40" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] opacity-40" />
                <span className="w-8 h-px bg-[var(--gold-primary)] opacity-40" />
              </div>

              {/* Title Opening */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  paddingInline: '1.5rem',
                }}
              >
                {title}
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '5px',
                  color: 'var(--gold-primary)',
                  marginTop: '1.25rem',
                }}
              >
                Sekolah Alam AL-Hakim
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
