import React, { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminOverview from '../../components/admin/AdminOverview'
import ActivityManager from '../../components/admin/ActivityManager'
import GalleryManager from '../../components/admin/GalleryManager'
import ContactSettings from '../../components/admin/ContactSettings'
import PinSettings from '../../components/admin/PinSettings'

export default function AdminDashboardPage() {
  const {
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
    changePin,
    processAndCompressImage,
  } = useContent()

  const [activeTab, setActiveTab] = useState('overview')
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000)
  }

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab} toast={toast} triggerToast={triggerToast}>
      {activeTab === 'overview' && (
        <AdminOverview
          activitiesCount={activities.length}
          galleryCount={gallery.length}
          setActiveTab={setActiveTab}
        />
      )}

      {activeTab === 'aktivitas' && (
        <ActivityManager
          activities={activities}
          addActivity={addActivity}
          updateActivity={updateActivity}
          deleteActivity={deleteActivity}
          processAndCompressImage={processAndCompressImage}
          triggerToast={triggerToast}
        />
      )}

      {activeTab === 'galeri' && (
        <GalleryManager
          gallery={gallery}
          addGalleryItem={addGalleryItem}
          updateGalleryItem={updateGalleryItem}
          deleteGalleryItem={deleteGalleryItem}
          processAndCompressImage={processAndCompressImage}
          triggerToast={triggerToast}
        />
      )}

      {activeTab === 'teks' && (
        <ContactSettings texts={texts} updateTexts={updateTexts} triggerToast={triggerToast} />
      )}

      {activeTab === 'pin' && <PinSettings changePin={changePin} triggerToast={triggerToast} />}
    </AdminLayout>
  )
}
