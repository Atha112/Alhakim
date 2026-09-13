import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useContent } from '../../context/ContentContext'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const { texts } = useContent()
  const waNumber = texts?.schoolInfo?.whatsapp || '62895326769365'
  const waLink = `https://wa.me/${waNumber}?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim`

  return (
    <div className="fixed bottom-6 right-5 z-[80] flex items-center gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block bg-[var(--bg-card)] border border-[var(--border-gold)] rounded-lg px-4 py-2 shadow-lg"
          >
            <p className="font-[Jost] text-xs text-[var(--text-secondary)] whitespace-nowrap">
              Chat dengan kami
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--gold-primary)] animate-pulse-wa shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Chat WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Phone className="w-6 h-6 text-[var(--text-on-gold)]" />
      </motion.a>
    </div>
  )
}
