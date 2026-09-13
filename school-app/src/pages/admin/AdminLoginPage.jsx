import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, ShieldAlert, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react'
import { useContent } from '../../context/ContentContext'
import Button from '../../components/ui/Button'
import GoldDivider from '../../components/ui/GoldDivider'

export default function AdminLoginPage() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [infoMsg, setInfoMsg] = useState('')
  const { login, resetPin } = useContent()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!pin.trim()) {
      setError('Masukkan PIN Admin')
      return
    }

    const result = login(pin)
    if (result.success) {
      navigate('/admin')
    } else {
      setError(result.message)
    }
  }

  const handleResetPin = () => {
    if (window.confirm('Reset PIN ke PIN bawaan awal (alhakim2026)?')) {
      const res = resetPin()
      setPin('alhakim2026')
      setError('')
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(''), 4000)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--border-gold)] opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[var(--bg-secondary)] border border-[var(--border-gold)] p-8 md:p-10 rounded-[4px] shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <img src="/logo-gold.png" alt="Logo Sekolah Alam Al-Hakim" className="h-14 w-auto mx-auto mb-4 object-contain" />
          <p className="text-label text-[var(--gold-primary)] mb-2">Portal Monitoring</p>
          <h1 className="heading-md text-[var(--text-primary)] mb-2">Login Admin</h1>
          <p className="text-xs text-[var(--text-muted)] font-[Jost]">
            Sekolah Alam Al-Hakim CMS
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {infoMsg && (
          <div className="mb-4 p-3 rounded bg-[var(--bg-card)] border border-[var(--gold-primary)] text-[var(--gold-light)] text-xs font-[Jost] flex items-center gap-2 shadow">
            <CheckCircle size={16} className="shrink-0" />
            <span>{infoMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-label text-[var(--text-secondary)] mb-2 block">
              PIN Akses Admin
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value)
                if (error) setError('')
              }}
              placeholder="Masukkan PIN Admin"
              className={`w-full bg-[var(--bg-card)] border rounded-[2px] px-4 py-3 font-[Jost] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors duration-300 ${
                error ? 'border-red-400 focus:border-red-400' : 'border-[var(--border-subtle)] focus:border-[var(--gold-primary)]'
              }`}
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-xs font-[Jost] mt-2 flex items-center gap-1">
                <ShieldAlert size={14} /> {error}
              </p>
            )}
          </div>

          <Button variant="primary" type="submit" className="w-full justify-center mt-2">
            Masuk ke Dashboard
            <ArrowRight size={16} />
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col items-center gap-2 text-center">
          <p className="text-[11px] text-[var(--text-muted)]">
            PIN Bawaan Awal: <code className="text-[var(--gold-primary)] font-semibold">alhakim2026</code>
          </p>
          <button
            type="button"
            onClick={handleResetPin}
            className="text-xs font-[Jost] text-[var(--gold-primary)] hover:underline flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity mt-1"
          >
            <RotateCcw size={12} /> Reset PIN ke Default (alhakim2026)
          </button>
        </div>
      </motion.div>
    </div>
  )
}
