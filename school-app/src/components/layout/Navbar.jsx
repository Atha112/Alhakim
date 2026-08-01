import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Program SD', to: '/program/sd' },
  { label: 'Kurikulum', to: '/kurikulum' },
  { label: 'Aktivitas', to: '/aktivitas' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Kontak Kami', to: '/tentang/kontak' },
]

function DropdownMenu({ items, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
    >
      <div className="dropdown-card p-2 min-w-[220px]">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="block px-4 py-2.5 font-[Jost] text-[13px] tracking-[2px] text-[var(--text-secondary)] rounded-lg hover:text-[var(--gold-primary)] hover:bg-[var(--gold-ghost)] transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

function MobileMenu({ isOpen, onClose }) {
  const location = useLocation()

  const isActive = (path) => {
    if (!path) return false
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-[100] flex flex-col overflow-y-auto"
          >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[var(--text-primary)] p-1 hover:text-[var(--gold-primary)] transition-colors duration-300"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 flex flex-col justify-center px-10 gap-1">
            {NAV_ITEMS.map((item, i) =>
              item.dropdown ? (
                <div key={item.label}>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * (i + 1), duration: 0.3 }}
                    className="block font-[Jost] text-[11px] tracking-[3px] uppercase text-[var(--text-muted)] py-3"
                  >
                    {item.label}
                  </motion.span>
                  {item.dropdown.map((sub, j) => (
                    <motion.div
                      key={sub.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 * (i + 1) + 0.04 * (j + 1),
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={sub.to}
                        onClick={onClose}
                        className={`block py-2.5 pl-5 font-[Jost] text-[15px] tracking-[2px] transition-colors duration-200 ${
                          isActive(sub.to)
                            ? 'text-[var(--gold-primary)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--gold-primary)]'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * (i + 1), duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className={`block py-3 font-[Jost] text-[15px] tracking-[3px] uppercase transition-colors duration-200 ${
                      isActive(item.to)
                        ? 'text-[var(--gold-primary)]'
                        : 'text-[var(--text-primary)] hover:text-[var(--gold-primary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * (NAV_ITEMS.length + 2), duration: 0.3 }}
            className="px-10 pb-10"
          >
            <Link
              to="/pendaftaran"
              onClick={onClose}
              className="cta-primary w-full justify-center"
            >
              Daftar Sekarang
            </Link>
          </motion.div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (path) => {
    if (!path) return false
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current)
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--navbar-bg)] backdrop-blur-xl shadow-[0_1px_0_rgba(184,150,62,0.1)]'
            : 'bg-transparent'
        }`}
      >
        {/* Gold line at bottom that appears on scroll */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-[var(--gold-primary)] transition-opacity duration-500 ${
            scrolled ? 'opacity-30' : 'opacity-0'
          }`}
        />
        <div className="container-site flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-[Cormorant_Garamond] text-[1.35rem] tracking-[0.04em] text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300 whitespace-nowrap"
          >
            Sekolah Alam AL-Hakim
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 font-[Jost] text-[13px] tracking-[2px] uppercase py-2 transition-colors duration-200 ${
                      isActive(item.dropdown[0]?.to?.split('/').slice(0, 2).join('/'))
                        ? 'text-[var(--gold-primary)]'
                        : 'text-[var(--text-primary)] hover:text-[var(--gold-primary)]'
                    }`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <DropdownMenu
                        items={item.dropdown}
                        onClose={() => setOpenDropdown(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`font-[Jost] text-[13px] tracking-[2px] uppercase py-2 transition-colors duration-200 ${
                    isActive(item.to)
                      ? 'text-[var(--gold-primary)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--gold-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link to="/pendaftaran" className="cta-primary text-[12px] px-4 py-2">
              Daftar Sekarang
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--text-primary)] p-1 hover:text-[var(--gold-primary)] transition-colors duration-300"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

export default Navbar
