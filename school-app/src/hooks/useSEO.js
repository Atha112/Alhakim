import { useEffect, useRef } from 'react'

const DEFAULT_OG_IMAGE = '/images/hero.jpg'

/**
 * Custom hook for managing SEO meta tags per route.
 * Sets document.title, meta description, and Open Graph tags.
 * Cleans up created meta tags on unmount.
 *
 * @param {Object} options
 * @param {string} options.title - Page title (also used for og:title)
 * @param {string} [options.description] - Meta description (also used for og:description)
 * @param {string} [options.image] - OG image URL (defaults to /images/hero.jpg)
 */
export default function useSEO({ title, description, image } = {}) {
  // Track meta elements we create so we can remove them on cleanup
  const createdElements = useRef([])

  useEffect(() => {
    const created = []

    // Set document title
    if (title) {
      document.title = title
    }

    // Helper: set or create a meta tag
    const setMeta = (attr, attrValue, content) => {
      if (content === undefined || content === null) return null

      let el = document.querySelector(`meta[${attr}="${attrValue}"]`)

      if (el) {
        // Update existing tag
        el.setAttribute('content', content)
        return null // We didn't create it, so no cleanup needed
      } else {
        // Create new tag
        el = document.createElement('meta')
        el.setAttribute(attr, attrValue)
        el.setAttribute('content', content)
        document.head.appendChild(el)
        return el // Return for cleanup
      }
    }

    // Set meta description
    const descEl = setMeta('name', 'description', description)
    if (descEl) created.push(descEl)

    // Set og:title
    const ogTitleEl = setMeta('property', 'og:title', title)
    if (ogTitleEl) created.push(ogTitleEl)

    // Set og:description
    const ogDescEl = setMeta('property', 'og:description', description)
    if (ogDescEl) created.push(ogDescEl)

    // Set og:type
    const ogTypeEl = setMeta('property', 'og:type', 'website')
    if (ogTypeEl) created.push(ogTypeEl)

    // Set og:image (optional, with default fallback)
    const ogImage = image || DEFAULT_OG_IMAGE
    const ogImageEl = setMeta('property', 'og:image', ogImage)
    if (ogImageEl) created.push(ogImageEl)

    // Store created elements for cleanup
    createdElements.current = created

    // Cleanup: remove only the meta tags we created (not pre-existing ones)
    return () => {
      createdElements.current.forEach((el) => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el)
        }
      })
      createdElements.current = []
    }
  }, [title, description, image])
}
