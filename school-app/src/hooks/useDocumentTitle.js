import { useLocation } from 'react-router-dom'
import { routeMeta } from '../lib/routeMeta'
import { programs } from '../data/content'
import useSEO from './useSEO'

const DEFAULT_TITLE = 'Sekolah Alam Al-Hakim'
const DEFAULT_DESCRIPTION = 'Sekolah Alam Al-Hakim — sekolah berbasis alam di Bogor yang menumbuhkan fitrah generasi khalifah melalui pendidikan berbasis keimanan, cinta alam, dan kemandirian.'

/**
 * Hook that sets document title and SEO meta tags per route.
 * Uses useSEO internally for full meta tag management.
 * Backward compatible — call with no arguments from PageLayout.
 */
export default function useDocumentTitle() {
  const location = useLocation()

  // Find matching route meta (handle dynamic routes)
  let meta = null

  // Exact match first
  if (routeMeta[location.pathname]) {
    meta = routeMeta[location.pathname]
  } else {
    // Try dynamic route matching (e.g., /program/:slug)
    for (const [pattern, value] of Object.entries(routeMeta)) {
      if (pattern.includes(':')) {
        const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$')
        if (regex.test(location.pathname)) {
          meta = value
          break
        }
      }
    }
  }

  // Dynamic title/description for program pages
  let title = meta?.docTitle || DEFAULT_TITLE
  let description = meta?.description || DEFAULT_DESCRIPTION
  let image = meta?.ogImage

  if (location.pathname.startsWith('/program/')) {
    const slug = location.pathname.split('/program/')[1]
    const program = programs.find(p => p.slug === slug)
    if (program) {
      title = `${program.name} — Sekolah Alam Al-Hakim`
      description = program.description || `Program ${program.name} di Sekolah Alam Al-Hakim untuk anak usia ${program.ageRange}.`
      image = program.image || meta?.ogImage
    }
  }

  useSEO({ title, description, image })
}
