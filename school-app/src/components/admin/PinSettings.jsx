import React, { useState } from 'react'
import { Key } from 'lucide-react'
import GoldDivider from '../ui/GoldDivider'
import Button from '../ui/Button'

export default function PinSettings({ changePin, triggerToast }) {
  const [oldPin, setOldPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPin !== confirmPin) {
      setErrorMsg('Konfirmasi PIN baru tidak cocok')
      return
    }

    const res = changePin(oldPin, newPin)
    if (res.success) {
      triggerToast(res.message)
      setOldPin('')
      setNewPin('')
      setConfirmPin('')
      setErrorMsg('')
    } else {
      setErrorMsg(res.message)
    }
  }

  return (
    <div className="max-w-md mx-auto content-card p-6 md:p-8 bg-[var(--bg-secondary)] border border-[var(--border-gold)]">
      <h3 className="heading-md text-[var(--text-primary)] mb-2 flex items-center gap-2">
        <Key size={20} /> Ubah PIN Akses Admin
      </h3>
      <p className="text-xs text-[var(--text-secondary)] mb-6">
        Ganti PIN lama dengan PIN baru untuk mengamankan portal admin.
      </p>
      <GoldDivider className="mb-6 !ml-0" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">PIN Lama</label>
          <input
            type="password"
            value={oldPin}
            onChange={(e) => setOldPin(e.target.value)}
            placeholder="Masukkan PIN lama"
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">PIN Baru</label>
          <input
            type="password"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
            placeholder="Minimal 4 karakter"
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">
            Konfirmasi PIN Baru
          </label>
          <input
            type="password"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            placeholder="Ketik ulang PIN baru"
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        {errorMsg && <p className="text-xs text-red-400 font-[Jost]">{errorMsg}</p>}

        <Button variant="primary" type="submit" className="mt-4 justify-center">
          Ubah PIN Admin
        </Button>
      </form>
    </div>
  )
}
