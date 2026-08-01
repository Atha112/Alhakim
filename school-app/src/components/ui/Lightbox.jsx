import React, { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const lightboxRef = useRef(null)
  const closeBtnRef = useRef(null)
  const previousFocus = useRef(null)

  // Sync index when initialIndex changes or lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // Body scroll lock + focus trap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      previousFocus.current = document.activeElement
      // Focus the close button after a short delay for animation
      setTimeout(() => {
        closeBtnRef.current?.focus()
      }, 100)
    } else {
      document.body.style.overflow = ''
      // Restore focus to previously focused element
      previousFocus.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return

      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      const focusableElements = lightboxRef.current?.querySelectorAll(focusableSelectors)
      if (!focusableElements || focusableElements.length === 0) return

      const firstEl = focusableElements[0]
      const lastEl = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }

    window.addEventListener('keydown', handleTabKey)
    return () => window.removeEventListener('keydown', handleTabKey)
  }, [isOpen])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrev()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, goToPrev, goToNext])

  if (!images || images.length === 0) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={lightboxRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[rgba(14,14,16,0.94)] backdrop-blur-md" />

          {/* Close button */}
          <button
            ref={closeBtnRef}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            aria-label="Tutup"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              className="absolute left-3 md:left-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-3 md:right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              aria-label="Selanjutnya"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-[1] max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 font-[Jost] text-sm text-white/60 tracking-[2px] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/15">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Keyboard hint */}
          <div className="absolute bottom-5 right-5 z-10 hidden md:flex items-center gap-3 font-[Jost] text-[11px] text-white/30 tracking-[1px]">
            <span>ESC tutup</span>
            <span>•</span>
            <span>← → navigasi</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
