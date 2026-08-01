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
  const [skipped, setSkipped] = useState(false)
  const timersRef = useRef([])
  const isFirstRender = useRef(true)

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const skipTransition = useCallback(() => {
    setSkipped(true)
    clearAllTimers()
    setShowTitle(false)
    setShowOverlay(false)
    setTitle(null)
  }, [clearAllTimers])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const meta = routeMeta[location.pathname]

    if (!meta || !meta.title) {
      // Simple fade — brief overlay flash
      setShowOverlay(true)
      setShowTitle(false)
      setTitle(null)
      setSkipped(false)

      const t1 = setTimeout(() => setShowOverlay(false), 150)
      const t2 = setTimeout(() => setSkipped(false), 400)
      timersRef.current.push(t1, t2)

      return clearAllTimers
    }

    // Full title transition sequence
    setTitle(meta.title)
    setShowOverlay(true)
    setShowTitle(false)
    setSkipped(false)

    const addTimer = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timersRef.current.push(id)
    }

    // Phase 1: Overlay fades in (0.15s)
    // Phase 2: Title appears (at 150ms, animate 0.3s)
    addTimer(() => setShowTitle(true), 150)
    // Phase 3: Hold (title visible from ~450ms)
    // Phase 4: Title fades out (at 1050ms, animate 0.2s)
    addTimer(() => setShowTitle(false), 1050)
    // Phase 5: Overlay fades out (at 1250ms, animate 0.2s)
    addTimer(() => setShowOverlay(false), 1250)
    // Cleanup
    addTimer(() => {
      setTitle(null)
      setSkipped(false)
    }, 1500)

    return clearAllTimers
  }, [location.pathname, clearAllTimers])

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          onClick={skipTransition}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'var(--bg-overlay)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: skipped ? 0 : 0.15, ease: editorialEase },
          }}
          exit={{
            opacity: 0,
            transition: { duration: skipped ? 0 : 0.2, ease: editorialEase },
          }}
        >
          <AnimatePresence>
            {showTitle && title && (
              <motion.div
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: editorialEase },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, ease: editorialEase },
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 'clamp(48px, 8vw, 96px)',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '5px',
                    color: 'var(--gold-primary)',
                    marginTop: '1rem',
                  }}
                >
                  Sekolah Alam AL-Hakim
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
