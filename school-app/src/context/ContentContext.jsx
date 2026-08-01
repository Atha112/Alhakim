import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  schoolInfo as defaultSchoolInfo,
  visiMisiContent as defaultVisiMisiContent,
  homepageContent as defaultHomepageContent,
  kontakContent as defaultKontakContent,
  kurikulumContent as defaultKurikulumContent,
  aktivitasContent as defaultAktivitasContent,
  galleryContent as defaultGalleryContent,
} from '../data/content'

const ContentContext = createContext()

const STORAGE_KEYS = {
  PIN: 'alhakim_admin_pin',
  AUTH: 'alhakim_admin_auth',
  TEXTS: 'alhakim_content_texts',
  ACTIVITIES: 'alhakim_content_activities',
  GALLERY: 'alhakim_content_gallery',
}

const DEFAULT_PIN = 'alhakim2026'

export function ContentProvider({ children }) {
  // ── PIN & Auth State ──
  const [adminPin, setAdminPin] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.PIN) || DEFAULT_PIN
  })
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true'
  })

  // ── Main Content States ──
  const [texts, setTexts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TEXTS)
    if (saved) {
      try { return JSON.parse(saved) } catch (e) { console.error(e) }
    }
    return {
      schoolInfo: defaultSchoolInfo,
      visiMisi: defaultVisiMisiContent,
      homepage: defaultHomepageContent,
      kontak: defaultKontakContent,
      kurikulum: defaultKurikulumContent,
    }
  })

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVITIES)
    if (saved) {
      try { return JSON.parse(saved) } catch (e) { console.error(e) }
    }
    return defaultAktivitasContent.items
  })

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY)
    if (saved) {
      try { return JSON.parse(saved) } catch (e) { console.error(e) }
    }
    return defaultGalleryContent.items
  })

  // ── Save States to LocalStorage ──
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PIN, adminPin)
  }, [adminPin])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTH, isAuthenticated ? 'true' : 'false')
  }, [isAuthenticated])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TEXTS, JSON.stringify(texts))
  }, [texts])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities))
  }, [activities])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery))
  }, [gallery])

  // ── Auth Handlers ──
  const login = (pinInput) => {
    if (pinInput === adminPin) {
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false, message: 'PIN yang Anda masukkan salah' }
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const changePin = (oldPin, newPin) => {
    if (oldPin !== adminPin) {
      return { success: false, message: 'PIN lama tidak sesuai' }
    }
    if (!newPin || newPin.length < 4) {
      return { success: false, message: 'PIN baru minimal 4 karakter' }
    }
    setAdminPin(newPin)
    return { success: true, message: 'PIN berhasil diperbarui' }
  }

  // ── WebP Image Converter & Compressor ──
  // Maximum width: 1200px, Quality: 80% (WebP Format)
  const processAndCompressImage = (file, maxWidth = 1200, quality = 0.8) => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        return reject(new Error('File harus berupa gambar'))
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width)
            width = maxWidth
          }

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)

          // Convert canvas to WebP format
          const webpDataUrl = canvas.toDataURL('image/webp', quality)
          resolve(webpDataUrl)
        }
        img.onerror = () => reject(new Error('Gagal memuat gambar'))
        img.src = e.target.result
      }
      reader.onerror = () => reject(new Error('Gagal membaca file'))
      reader.readAsDataURL(file)
    })
  }

  // ── Activity CRUD Handlers ──
  const addActivity = (item) => {
    const newItem = {
      id: Date.now(),
      ...item,
    }
    setActivities((prev) => [newItem, ...prev])
  }

  const updateActivity = (id, updatedFields) => {
    setActivities((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    )
  }

  const deleteActivity = (id) => {
    setActivities((prev) => prev.filter((item) => item.id !== id))
  }

  // ── Gallery CRUD Handlers ──
  const addGalleryItem = (item) => {
    const newItem = {
      id: Date.now(),
      ...item,
    }
    setGallery((prev) => [newItem, ...prev])
  }

  const updateGalleryItem = (id, updatedFields) => {
    setGallery((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    )
  }

  const deleteGalleryItem = (id) => {
    setGallery((prev) => prev.filter((item) => item.id !== id))
  }

  // ── Text Updates ──
  const updateTexts = (newTexts) => {
    setTexts((prev) => ({ ...prev, ...newTexts }))
  }

  // ── Reset to Default ──
  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEYS.TEXTS)
    localStorage.removeItem(STORAGE_KEYS.ACTIVITIES)
    localStorage.removeItem(STORAGE_KEYS.GALLERY)
    setTexts({
      schoolInfo: defaultSchoolInfo,
      visiMisi: defaultVisiMisiContent,
      homepage: defaultHomepageContent,
      kontak: defaultKontakContent,
      kurikulum: defaultKurikulumContent,
    })
    setActivities(defaultAktivitasContent.items)
    setGallery(defaultGalleryContent.items)
  }

  return (
    <ContentContext.Provider
      value={{
        adminPin,
        isAuthenticated,
        login,
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
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}
