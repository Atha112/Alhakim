import React, { useState } from 'react'
import { Image as ImageIcon, SquarePen, Trash2 } from 'lucide-react'
import GoldDivider from '../ui/GoldDivider'
import Button from '../ui/Button'

export default function GalleryManager({
  gallery,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  processAndCompressImage,
  triggerToast,
}) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Kegiatan',
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
        triggerToast('Foto galeri berhasil di-upload WebP!')
      } catch (err) {
        alert(err.message)
      } finally {
        setIsProcessing(false)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title) {
      alert('Judul foto wajib diisi')
      return
    }

    const defaultImg = formData.image || '/images/gallery-1.jpg'

    if (editingId) {
      updateGalleryItem(editingId, { ...formData, image: defaultImg })
      triggerToast('Item galeri berhasil diperbarui!')
      setEditingId(null)
    } else {
      addGalleryItem({ ...formData, image: defaultImg })
      triggerToast('Foto baru berhasil ditambahkan ke galeri!')
    }

    setFormData({ title: '', category: 'Kegiatan', description: '', image: '' })
  }

  const startEdit = (item) => {
    setEditingId(item.id)
    setFormData({
      title: item.title,
      category: item.category || 'Kegiatan',
      description: item.description || '',
      image: item.image,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form section */}
      <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-gold)] h-fit">
        <h3 className="heading-md text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <ImageIcon size={18} />
          {editingId ? 'Edit Foto Galeri' : 'Tambah Foto Galeri'}
        </h3>
        <GoldDivider className="mb-6 !ml-0" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Judul Foto</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Contoh: Jelajah Hutan & Sungai"
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
              <option value="Kegiatan">Kegiatan</option>
              <option value="Alam">Alam</option>
              <option value="Seni">Seni</option>
              <option value="Akademik">Akademik</option>
            </select>
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Upload Foto Galeri</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-xs text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[var(--gold-primary)] file:text-[var(--text-on-gold)]"
            />
            {isProcessing && (
              <p className="text-xs text-[var(--gold-primary)] mt-1 animate-pulse">
                Mengompres foto...
              </p>
            )}
            {formData.image && (
              <div className="mt-3 aspect-video relative rounded overflow-hidden border border-[var(--border-gold)]">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Keterangan Foto</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Keterangan singkat momen foto..."
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
            />
          </div>

          <Button variant="primary" type="submit" className="w-full justify-center">
            {editingId ? 'Simpan Perubahan' : 'Tambah Foto Galeri'}
          </Button>
        </form>
      </div>

      {/* Grid section */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h3 className="heading-md text-[var(--text-primary)]">
          Foto Galeri ({gallery.length})
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="content-card !p-2 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative group"
            >
              <div className="aspect-square rounded overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => startEdit(item)}
                    className="p-2 bg-[var(--gold-primary)] text-black rounded-full"
                  >
                    <SquarePen size={14} />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Hapus foto ini dari galeri?')) {
                        deleteGalleryItem(item.id)
                        triggerToast('Foto galeri dihapus')
                      }
                    }}
                    className="p-2 bg-red-500 text-white rounded-full"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="text-xs text-[var(--text-primary)] font-medium mt-2 truncate px-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
