import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Calendar,
  Image as ImageIcon,
  Edit3,
  Key,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Upload,
} from 'lucide-react'
import { useContent } from '../../context/ContentContext'
import Button from '../../components/ui/Button'
import GoldDivider from '../../components/ui/GoldDivider'

export default function AdminDashboardPage() {
  const {
    isAuthenticated,
    logout,
    changePin,
    texts,
    updateTexts,
    activities,
    addActivity,
    updateActivity,
    deleteActivity,
    gallery,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    processAndCompressImage,
    resetToDefault,
  } = useContent()

  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000)
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 text-center">
        <div className="content-card max-w-md">
          <AlertCircle size={40} className="text-red-400 mx-auto mb-4" />
          <h2 className="heading-md text-[var(--text-primary)] mb-2">Akses Ditolak</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Anda harus login terlebih dahulu untuk mengakses Dashboard Admin.
          </p>
          <Link to="/admin/login">
            <Button variant="primary">Masuk ke Halaman Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-[100] px-5 py-3 rounded border flex items-center gap-3 shadow-2xl backdrop-blur-md ${
              toast.type === 'success'
                ? 'bg-[var(--bg-card)]/90 border-[var(--gold-primary)] text-[var(--gold-light)]'
                : 'bg-red-950/90 border-red-500 text-red-200'
            }`}
          >
            <CheckCircle size={18} className="shrink-0" />
            <span className="text-sm font-[Jost] font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-site">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-gold)]">
          <div>
            <span className="text-label text-[var(--gold-primary)] block mb-1">CMS Panel</span>
            <h1 className="heading-lg text-[var(--text-primary)]">Dashboard Admin Sekolah</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke default revisi awal?')) {
                  resetToDefault()
                  triggerToast('Konten berhasil di-reset ke default awal!')
                }
              }}
              className="px-3.5 py-2 text-xs font-[Jost] tracking-wider uppercase text-[var(--text-muted)] hover:text-red-400 border border-[var(--border-subtle)] hover:border-red-400/40 rounded transition-colors flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Reset Content
            </button>
            <Button
              variant="outline"
              onClick={() => {
                logout()
                navigate('/admin/login')
              }}
              className="!py-2 !px-4 !text-xs"
            >
              <LogOut size={14} /> Keluar
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 border-b border-[var(--border-subtle)] scroll-x-custom">
          {[
            { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard },
            { id: 'aktivitas', label: 'Kelola Aktivitas', icon: Calendar },
            { id: 'galeri', label: 'Kelola Galeri', icon: ImageIcon },
            { id: 'teks', label: 'Edit Teks Kontak & Visi', icon: Edit3 },
            { id: 'pin', label: 'Ubah PIN Admin', icon: Key },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[2px] font-[Jost] text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[var(--gold-primary)] text-[var(--text-on-gold)] font-medium shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--gold-primary)] bg-[var(--bg-secondary)]'
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content Panels */}
        {activeTab === 'overview' && (
          <OverviewTab
            activitiesCount={activities.length}
            galleryCount={gallery.length}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'aktivitas' && (
          <AktivitasAdminTab
            activities={activities}
            addActivity={addActivity}
            updateActivity={updateActivity}
            deleteActivity={deleteActivity}
            processAndCompressImage={processAndCompressImage}
            triggerToast={triggerToast}
          />
        )}

        {activeTab === 'galeri' && (
          <GaleriAdminTab
            gallery={gallery}
            addGalleryItem={addGalleryItem}
            updateGalleryItem={updateGalleryItem}
            deleteGalleryItem={deleteGalleryItem}
            processAndCompressImage={processAndCompressImage}
            triggerToast={triggerToast}
          />
        )}

        {activeTab === 'teks' && (
          <TeksAdminTab
            texts={texts}
            updateTexts={updateTexts}
            triggerToast={triggerToast}
          />
        )}

        {activeTab === 'pin' && (
          <PinAdminTab
            changePin={changePin}
            triggerToast={triggerToast}
          />
        )}
      </div>
    </div>
  )
}

// ============================================================================
// TAB 1: OVERVIEW TAB
// ============================================================================
function OverviewTab({ activitiesCount, galleryCount, setActiveTab }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Total Aktivitas</span>
        <h2 className="heading-xl text-[var(--text-primary)] mb-2">{activitiesCount}</h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Kegiatan santri terpublikasi</p>
        <button
          onClick={() => setActiveTab('aktivitas')}
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)]"
        >
          Kelola Aktivitas &rarr;
        </button>
      </div>

      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Total Galeri</span>
        <h2 className="heading-xl text-[var(--text-primary)] mb-2">{galleryCount}</h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Foto dokumentasi terpublikasi</p>
        <button
          onClick={() => setActiveTab('galeri')}
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)]"
        >
          Kelola Galeri &rarr;
        </button>
      </div>

      <div className="content-card p-6 border border-[var(--border-gold)]">
        <span className="text-label text-[var(--gold-primary)] block mb-2">Status Website</span>
        <h2 className="heading-md text-emerald-400 mb-2">Aktif / Live</h2>
        <p className="text-xs text-[var(--text-secondary)] mb-4">Perubahan tersimpan otomatis</p>
        <Link
          to="/"
          target="_blank"
          className="text-xs font-[Jost] text-[var(--gold-primary)] underline hover:text-[var(--gold-pale)]"
        >
          Buka Tampilan Publik &rarr;
        </Link>
      </div>
    </div>
  )
}

// ============================================================================
// TAB 2: KELOLA AKTIVITAS TAB (WITH WEBP IMAGE UPLOAD)
// ============================================================================
function AktivitasAdminTab({
  activities,
  addActivity,
  updateActivity,
  deleteActivity,
  processAndCompressImage,
  triggerToast,
}) {
  const [form, setForm] = useState({ title: '', category: 'Alam', description: '', image: '' })
  const [isCompressing, setIsCompressing] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setIsCompressing(true)
    try {
      const webpImage = await processAndCompressImage(file, 1200, 0.8)
      setForm((prev) => ({ ...prev, image: webpImage }))
      triggerToast('Foto berhasil di-upload & dikompres WebP!')
    } catch (err) {
      alert(err.message)
    } finally {
      setIsCompressing(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.description) {
      alert('Judul dan deskripsi wajib diisi')
      return
    }

    const defaultImg = form.image || '/images/activity-ekspedisi.jpg'

    if (editingId) {
      updateActivity(editingId, { ...form, image: defaultImg })
      triggerToast('Aktivitas berhasil diperbarui!')
      setEditingId(null)
    } else {
      addActivity({ ...form, image: defaultImg })
      triggerToast('Aktivitas baru berhasil ditambahkan!')
    }

    setForm({ title: '', category: 'Alam', description: '', image: '' })
  }

  const handleEditClick = (item) => {
    setEditingId(item.id)
    setForm({
      title: item.title,
      category: item.category || 'Alam',
      description: item.description,
      image: item.image,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Add/Edit */}
      <div className="content-card p-6 bg-[var(--bg-secondary)] border border-[var(--border-gold)] h-fit">
        <h3 className="heading-md text-[var(--text-primary)] mb-4 flex items-center gap-2">
          {editingId ? <Edit size={18} /> : <Plus size={18} />}
          {editingId ? 'Edit Aktivitas' : 'Tambah Aktivitas'}
        </h3>
        <GoldDivider className="mb-6 !ml-0" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Judul Kegiatan</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Contoh: Supercamp & Survival Alam"
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
              required
            />
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Kategori</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
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
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Upload Foto (Otomatis WebP)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full text-xs text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[var(--gold-primary)] file:text-[var(--text-on-gold)] hover:file:opacity-90"
            />
            {isCompressing && <p className="text-xs text-[var(--gold-primary)] mt-1 animate-pulse">Mengompres foto ke format WebP...</p>}
            {form.image && (
              <div className="mt-3 aspect-video relative rounded overflow-hidden border border-[var(--border-gold)]">
                <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Deskripsi Singkat</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
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
                  setForm({ title: '', category: 'Alam', description: '', image: '' })
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* List Activities */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h3 className="heading-md text-[var(--text-primary)]">Daftar Aktivitas ({activities.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((item) => (
            <div key={item.id} className="content-card p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <div className="aspect-video mb-3 rounded overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-[10px] uppercase font-[Jost] tracking-wider bg-black/70 text-[var(--gold-primary)] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
                <h4 className="heading-sm text-[var(--text-primary)] mb-1">{item.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">{item.description}</p>
              </div>
              <div className="flex justify-end gap-2 pt-4 mt-2 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => handleEditClick(item)}
                  className="p-1.5 text-xs text-[var(--gold-primary)] hover:bg-[var(--gold-ghost)] rounded"
                >
                  <Edit size={16} />
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

// ============================================================================
// TAB 3: KELOLA GALERI TAB
// ============================================================================
function GaleriAdminTab({
  gallery,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  processAndCompressImage,
  triggerToast,
}) {
  const [form, setForm] = useState({ title: '', category: 'Kegiatan', description: '', image: '' })
  const [isCompressing, setIsCompressing] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setIsCompressing(true)
    try {
      const webpImage = await processAndCompressImage(file, 1200, 0.8)
      setForm((prev) => ({ ...prev, image: webpImage }))
      triggerToast('Foto galeri berhasil di-upload WebP!')
    } catch (err) {
      alert(err.message)
    } finally {
      setIsCompressing(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title) {
      alert('Judul foto wajib diisi')
      return
    }

    const defaultImg = form.image || '/images/gallery-1.jpg'

    if (editingId) {
      updateGalleryItem(editingId, { ...form, image: defaultImg })
      triggerToast('Item galeri berhasil diperbarui!')
      setEditingId(null)
    } else {
      addGalleryItem({ ...form, image: defaultImg })
      triggerToast('Foto baru berhasil ditambahkan ke galeri!')
    }

    setForm({ title: '', category: 'Kegiatan', description: '', image: '' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form */}
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
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Contoh: Jelajah Hutan & Sungai"
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
              required
            />
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Kategori</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
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
              onChange={handleFileUpload}
              className="w-full text-xs text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[var(--gold-primary)] file:text-[var(--text-on-gold)]"
            />
            {isCompressing && <p className="text-xs text-[var(--gold-primary)] mt-1 animate-pulse">Mengompres foto...</p>}
            {form.image && (
              <div className="mt-3 aspect-video relative rounded overflow-hidden border border-[var(--border-gold)]">
                <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="text-label text-[var(--text-secondary)] mb-1 block">Keterangan Foto</label>
            <input
              type="text"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Keterangan singkat momen foto..."
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-2.5 text-sm text-[var(--text-primary)]"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="primary" type="submit" className="flex-1 justify-center">
              {editingId ? 'Simpan Perubahan' : 'Tambah Foto Galeri'}
            </Button>
            {editingId && (
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setForm({ title: '', category: 'Kegiatan', description: '', image: '' })
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Grid Galeri */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h3 className="heading-md text-[var(--text-primary)]">Foto Galeri ({gallery.length})</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div key={item.id} className="content-card !p-2 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative group">
              <div className="aspect-square rounded overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(item.id)
                      setForm({
                        title: item.title || '',
                        category: item.category || 'Kegiatan',
                        description: item.description || '',
                        image: item.image || '',
                      })
                    }}
                    className="p-2 bg-[var(--gold-primary)] text-black rounded-full hover:scale-110 transition-transform"
                    title="Edit foto"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Hapus foto ini dari galeri?')) {
                        deleteGalleryItem(item.id)
                        triggerToast('Foto galeri dihapus')
                      }
                    }}
                    className="p-2 bg-red-500 text-white rounded-full hover:scale-110 transition-transform"
                    title="Hapus foto"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="text-xs text-[var(--text-primary)] font-medium mt-2 truncate px-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// TAB 4: TEKS ADMIN TAB (EDIT CONTACT & TEXTS)
// ============================================================================
function TeksAdminTab({ texts, updateTexts, triggerToast }) {
  const [kontakForm, setKontakForm] = useState(texts?.kontak?.info || {})

  useEffect(() => {
    if (texts?.kontak?.info) {
      setKontakForm(texts.kontak.info)
    }
  }, [texts])

  const handleSaveKontak = (e) => {
    e.preventDefault()
    updateTexts({
      kontak: {
        ...texts.kontak,
        info: kontakForm,
      },
    })
    triggerToast('Informasi Kontak berhasil diperbarui!')
  }

  return (
    <div className="max-w-2xl mx-auto content-card p-6 md:p-8 bg-[var(--bg-secondary)] border border-[var(--border-gold)]">
      <h3 className="heading-md text-[var(--text-primary)] mb-2 flex items-center gap-2">
        <Edit3 size={20} /> Pengaturan Teks Informasi Kontak
      </h3>
      <p className="text-xs text-[var(--text-secondary)] mb-6">
        Ubah alamat, nomor telepon, email, dan jam operasional sekolah secara langsung.
      </p>
      <GoldDivider className="mb-6 !ml-0" />

      <form onSubmit={handleSaveKontak} className="flex flex-col gap-4">
        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">Alamat Lengkap</label>
          <textarea
            rows={2}
            value={kontakForm.address}
            onChange={(e) => setKontakForm({ ...kontakForm, address: e.target.value })}
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">Nomor Telepon / WhatsApp</label>
          <input
            type="text"
            value={kontakForm.phone}
            onChange={(e) => setKontakForm({ ...kontakForm, phone: e.target.value })}
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">Alamat Email</label>
          <input
            type="email"
            value={kontakForm.email}
            onChange={(e) => setKontakForm({ ...kontakForm, email: e.target.value })}
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <div>
          <label className="text-label text-[var(--text-secondary)] mb-1 block">Jam Operasional</label>
          <input
            type="text"
            value={kontakForm.hours}
            onChange={(e) => setKontakForm({ ...kontakForm, hours: e.target.value })}
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        <Button variant="primary" type="submit" className="mt-4 justify-center">
          <Save size={16} /> Simpan Informasi Kontak
        </Button>
      </form>
    </div>
  )
}

// ============================================================================
// TAB 5: PIN ADMIN TAB (DYNAMIC PIN CHANGE)
// ============================================================================
function PinAdminTab({ changePin, triggerToast }) {
  const [oldPin, setOldPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [error, setError] = useState('')

  const handlePinSubmit = (e) => {
    e.preventDefault()
    if (newPin !== confirmPin) {
      setError('Konfirmasi PIN baru tidak cocok')
      return
    }

    const res = changePin(oldPin, newPin)
    if (res.success) {
      triggerToast(res.message)
      setOldPin('')
      setNewPin('')
      setConfirmPin('')
      setError('')
    } else {
      setError(res.message)
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

      <form onSubmit={handlePinSubmit} className="flex flex-col gap-4">
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
          <label className="text-label text-[var(--text-secondary)] mb-1 block">Konfirmasi PIN Baru</label>
          <input
            type="password"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            placeholder="Ketik ulang PIN baru"
            className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded p-3 text-sm text-[var(--text-primary)]"
            required
          />
        </div>

        {error && <p className="text-xs text-red-400 font-[Jost]">{error}</p>}

        <Button variant="primary" type="submit" className="mt-4 justify-center">
          Ubah PIN Admin
        </Button>
      </form>
    </div>
  )
}
