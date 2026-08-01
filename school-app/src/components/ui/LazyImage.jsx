import { useState, useRef, useEffect } from 'react'

export default function LazyImage({
  src,
  alt,
  className = '',
  aspectRatio = 'landscape', // 'portrait' | 'landscape' | 'square'
  overlay = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const ratioClass =
    aspectRatio === 'portrait'
      ? 'ratio-portrait'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'ratio-landscape'

  return (
    <div ref={ref} className={`${ratioClass} relative overflow-hidden w-full h-full rounded-inherit ${className}`}>
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-[var(--bg-secondary)] transition-opacity duration-700 overflow-hidden ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 skeleton" />
      </div>

      {/* Actual image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}

      {/* Optional overlay */}
      {overlay && <div className="absolute inset-0 bg-[var(--image-overlay)] pointer-events-none" />}
    </div>
  )
}
