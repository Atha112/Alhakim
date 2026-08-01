# Task 5-a: Gallery Builder — Work Record

## Task
Build a Gallery page with masonry grid and lightbox at `/galeri` route

## Work Completed

### 1. Added `galleryContent` to `src/data/content.js`
- New export with title "Galeri", subtitle in Bahasa Indonesia
- 5 categories: ["Semua", "Kegiatan", "Alam", "Seni", "Akademik"]
- 12 gallery items, each with: id, title, category, image path, description

### 2. Created `src/pages/GaleriPage.jsx`
- PageHeader with `/images/galeri-header.jpg` background
- Category filter buttons (text-label styling, same pattern as AktivitasPage)
- Masonry grid via CSS columns (`columns-1 sm:columns-2 lg:columns-3 gap-4`)
- Gallery cards with hover overlay (gradient from bottom), category badge
- Lightbox integration on card click with global index tracking
- AnimatePresence mode="popLayout" for filter transitions
- SectionReveal wrapper for scroll animations

### 3. Updated `src/App.jsx`
- Imported GaleriPage
- Added `/galeri` route between `/aktivitas` and `/pendaftaran`

### 4. Updated `src/lib/routeMeta.js`
- Added `/galeri` entry with title "Galeri" and docTitle "Galeri — Sekolah Alam Al-Hakim"

### 5. Updated `src/components/layout/Navbar.jsx`
- Added `{ label: 'Galeri', to: '/galeri' }` after Aktivitas in NAV_ITEMS

### 6. Generated 13 AI images via z-ai CLI
- gallery-1.jpg through gallery-12.jpg
- galeri-header.jpg
- All at 800x600, warm natural lighting, Indonesian nature school theme

## Key Decisions
- Used CSS `columns-*` approach for masonry instead of JS-based layout (simpler, performs well)
- Lightbox uses global index (from all items) so navigation cycles through all images regardless of active filter
- Hover overlay uses gradient (bottom-up) with category label + title, matching design system patterns
- Category badge always visible (top-left) for quick identification without hover

## Produced Artifacts
- `src/pages/GaleriPage.jsx` — new page component
- `src/data/content.js` — added galleryContent export
- `src/App.jsx` — added route
- `src/lib/routeMeta.js` — added meta entry
- `src/components/layout/Navbar.jsx` — added nav item
- 13 images in `public/images/` (gallery-1 through gallery-12 + galeri-header)
