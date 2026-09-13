import React, { useState } from 'react'
import { PenLine, Save, User, Phone, Instagram } from 'lucide-react'
import GoldDivider from '../ui/GoldDivider'
import Button from '../ui/Button'

export default function ContactSettings({ texts, updateTexts, triggerToast }) {
  const info = texts.kontak?.info || {}
  const contacts = info.contacts || [
    { name: 'Ka Ecep Supriatna', role: 'Humas & Pendaftaran', phone: '+62 895-3267-69365', whatsapp: '62895326769365' },
    { name: 'Ka Fikri Fathul Islam', role: 'Informasi & Layanan', phone: '+62 089-3887-405', whatsapp: '620893887405' },
  ]
  const social = texts.schoolInfo?.socialMedia || {}

  const [address, setAddress] = useState(info.address || '')
  const [email, setEmail] = useState(info.email || '')
  const [hours, setHours] = useState(info.hours || '')

  // Contact Persons
  const [ecepPhone, setEcepPhone] = useState(contacts[0]?.phone || '+62 895-3267-69365')
  const [fikriPhone, setFikriPhone] = useState(contacts[1]?.phone || '+62 089-3887-405')

  // Instagram Handles
  const [igMain, setIgMain] = useState(social.instagramHandle || '@sekolahalamalhakim')
  const [igSmp, setIgSmp] = useState(social.instagramSmpHandle || '@sekolahalamalhakim_smp')

  const handleSubmit = (e) => {
    e.preventDefault()

    const cleanEcepWa = ecepPhone.replace(/[^0-9]/g, '')
    const cleanFikriWa = fikriPhone.replace(/[^0-9]/g, '')

    const updatedContacts = [
      {
        name: 'Ka Ecep Supriatna',
        role: 'Humas & Pendaftaran',
        phone: ecepPhone,
        whatsapp: cleanEcepWa,
      },
      {
        name: 'Ka Fikri Fathul Islam',
        role: 'Informasi & Layanan',
        phone: fikriPhone,
        whatsapp: cleanFikriWa,
      },
    ]

    const updatedInfo = {
      ...info,
      address,
      email,
      hours,
      phone: ecepPhone,
      contacts: updatedContacts,
    }

    const updatedSocial = {
      ...social,
      instagram: `https://instagram.com/${igMain.replace('@', '')}`,
      instagramHandle: igMain.startsWith('@') ? igMain : `@${igMain}`,
      instagramSmp: `https://instagram.com/${igSmp.replace('@', '')}`,
      instagramSmpHandle: igSmp.startsWith('@') ? igSmp : `@${igSmp}`,
    }

    const updatedSchoolInfo = {
      ...texts.schoolInfo,
      phone: ecepPhone,
      contacts: updatedContacts,
      socialMedia: updatedSocial,
    }

    updateTexts({
      kontak: { ...texts.kontak, info: updatedInfo },
      schoolInfo: updatedSchoolInfo,
    })

    triggerToast('Informasi Kontak & Media Sosial berhasil diperbarui!')
  }

  return (
    <div className="max-w-3xl mx-auto content-card p-6 md:p-8 bg-[var(--bg-secondary)] border border-[var(--border-gold)]">
      <h3 className="heading-md text-[var(--text-primary)] mb-2 flex items-center gap-2">
        <PenLine size={20} /> Pengaturan Teks Informasi Kontak & Media Sosial
      </h3>
      <p className="text-xs text-[var(--text-secondary)] mb-6">
        Kelola kontak personal (Ka Ecep & Ka Fikri), media sosial (Instagram Sekolah & SMP), serta informasi lokasi & operasional.
      </p>
      <GoldDivider className="mb-6 !ml-0" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Contact Persons Section */}
        <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded flex flex-col gap-4">
          <h4 className="text-sm font-[Jost] uppercase tracking-wider text-[var(--gold-primary)] flex items-center gap-2">
            <User size={16} /> Kontak Admin & Staff
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">
                Ka Ecep Supriatna (WhatsApp / Telp)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={ecepPhone}
                  onChange={(e) => setEcepPhone(e.target.value)}
                  placeholder="+62 895-3267-69365"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)] pl-9"
                  required
                />
                <Phone size={15} className="absolute left-3 top-3 text-[var(--gold-dim)]" />
              </div>
            </div>

            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">
                Ka Fikri Fathul Islam (WhatsApp / Telp)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fikriPhone}
                  onChange={(e) => setFikriPhone(e.target.value)}
                  placeholder="+62 089-3887-405"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)] pl-9"
                  required
                />
                <Phone size={15} className="absolute left-3 top-3 text-[var(--gold-dim)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded flex flex-col gap-4">
          <h4 className="text-sm font-[Jost] uppercase tracking-wider text-[var(--gold-primary)] flex items-center gap-2">
            <Instagram size={16} /> Akun Instagram Official
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">
                Instagram Sekolah / SD / Utama
              </label>
              <input
                type="text"
                value={igMain}
                onChange={(e) => setIgMain(e.target.value)}
                placeholder="@sekolahalamalhakim"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
                required
              />
            </div>

            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">
                Instagram SMP Sekolah Alam Al-Hakim
              </label>
              <input
                type="text"
                value={igSmp}
                onChange={(e) => setIgSmp(e.target.value)}
                placeholder="@sekolahalamalhakim_smp"
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
                required
              />
            </div>
          </div>
        </div>

        {/* General Info Section */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Alamat Lengkap</label>
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">Alamat Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
                required
              />
            </div>

            <div>
              <label className="text-label text-[var(--text-secondary)] mb-1 block">Jam Operasional</label>
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
                required
              />
            </div>
          </div>
        </div>

        <Button variant="primary" type="submit" className="mt-2 justify-center">
          <Save size={16} className="mr-2" /> Simpan Informasi Kontak & Medsos
        </Button>
      </form>
    </div>
  )
}
