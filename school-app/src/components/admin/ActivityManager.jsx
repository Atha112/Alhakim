import React, { useState } from 'react'
import { Plus, SquarePen, Trash2 } from 'lucide-react'
import GoldDivider from '../ui/GoldDivider'
import Button from '../ui/Button'

export default function ActivityManager({
  activities,
  addActivity,
  updateActivity,
  deleteActivity,
  processAndCompressImage,
  triggerToast,
}) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Alam',
    description: '',
    image: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsProcessing(true)
      try {
        const compressedWebP = await processAndCompressImage(file, 1200, 0.8)
        setFormData((prev) => ({ ...prev, image: compressedWebP }))
        triggerToast('Foto berhasil di-upload & dikompres WebP!')
      } catch (err) {
        alert(err.message)
      } finally {
        setIsProcessing(false)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.description) {
      alert('Judul dan deskripsi wajib diisi')
      return
    }

    const defaultImg = formData.image || '/images/activity-ekspedisi.jpg'

    if (editingId) {
      updateActivity(editingId, { ...formData, image: defaultImg })
      triggerToast('Aktivitas berhasil diperbarui!')
      setEditingId(null)
    } else {
      addActivity({ ...formData, image: defaultImg })
      triggerToast('Aktivitas baru berhasil ditambahkan!')
    }

    setFormData({ title: '', category: 'Alam', description: '', image: '' })
  }

  const startEdit = (item) => {
    setEditingId(item.id)
    setFormData({
      title: item.title,
      category: item.category || 'Alam',
      description: item.description,
      image: item.image,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form section */}
      <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-gold)] h-fit">
        <h3 className="heading-md text-[var(--text-primary)] mb-4 flex items-center gap-2">
          {editingId ? <SquarePen size={18} /> : <Plus size={18} />}
          {editingId ? 'Edit Aktivitas' : 'Tambah Aktivitas'}
        </h3>
        <GoldDivider className="mb-6 !ml-0" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Judul Kegiatan</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Contoh: Supercamp & Survival Alam"
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
              required
            />
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Kategori</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
            >
              <option value="Alam">Alam</option>
              <option value="Al-Qur'an">Al-Qur'an</option>
              <option value="Karakter">Karakter</option>
              <option value="Akademik">Akademik</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Seni">Seni</option>
            </select>
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">
              Upload Foto (Otomatis WebP)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-xs text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[var(--gold-primary)] file:text-[var(--text-on-gold)] hover:file:opacity-90"
            />
            {isProcessing && (
              <p className="text-xs text-[var(--gold-primary)] mt-1 animate-pulse">
                Mengompres foto ke format WebP...
              </p>
            )}
            {formData.image && (
              <div className="mt-3 aspect-video relative rounded overflow-hidden border border-[var(--border-gold)]">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Deskripsi Singkat</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Penjelasan ringkas tentang kegiatan santri..."
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)] resize-none"
              required
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="primary" type="submit" className="flex-1 justify-center">
              {editingId ? 'Simpan Perubahan' : 'Tambah Aktivitas'}
            </Button>
            {editingId && (
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setFormData({ title: '', category: 'Alam', description: '', image: '' })
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* List section */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h3 className="heading-md text-[var(--text-primary)]">
          Daftar Aktivitas ({activities.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((item) => (
            <div
              key={item.id}
              className="content-card p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video mb-3 rounded overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-[Jost] tracking-wider bg-black/70 text-[var(--gold-primary)] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
                <h4 className="heading-sm text-[var(--text-primary)] mb-1">{item.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-4 mt-2 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => startEdit(item)}
                  className="p-1.5 text-xs text-[var(--gold-primary)] hover:bg-[var(--gold-ghost)] rounded"
                >
                  <SquarePen size={16} />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Hapus aktivitas ini?')) {
                      deleteActivity(item.id)
                      triggerToast('Aktivitas telah dihapus')
                    }
                  }}
                  className="p-1.5 text-xs text-red-400 hover:bg-red-950/30 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
