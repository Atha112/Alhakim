# Task 6-a: SEO & Maps Builder

## Task Description
Create useSEO hook + Enhanced routeMeta + Google Maps embed

## Work Completed

### 1. Created `/home/z/my-project/school-app/src/hooks/useSEO.js`
- Custom hook for managing SEO meta tags per route
- Sets document.title
- Sets or creates `<meta name="description">`
- Sets or creates `<meta property="og:title">`
- Sets or creates `<meta property="og:description">`
- Sets or creates `<meta property="og:type">` (always "website")
- Sets or creates `<meta property="og:image">` (optional, defaults to /images/hero.jpg)
- Cleanup: removes only meta tags created by the hook on unmount (preserves pre-existing ones)
- No external dependencies - pure DOM manipulation via useRef + useEffect
- Hook signature: `useSEO({ title, description, image })`

### 2. Updated `/home/z/my-project/school-app/src/hooks/useDocumentTitle.js`
- Now uses useSEO internally for full meta tag management
- Backward compatible - still called with no arguments from PageLayout
- Passes title, description, and ogImage from routeMeta to useSEO
- Handles dynamic program routes with per-program description and image
- Falls back to DEFAULT_DESCRIPTION for routes without explicit description

### 3. Updated `/home/z/my-project/school-app/src/lib/routeMeta.js`
- Added `description` and `ogImage` fields for each route
- All descriptions in Bahasa Indonesia (1-2 sentences each)
- ogImage points to existing header/hero images in public/images/

### 4. PageLayout.jsx - No changes needed
- Already calls useDocumentTitle() which now uses useSEO internally

### 5. Updated `/home/z/my-project/school-app/src/pages/KontakKamiPage.jsx`
- Replaced map placeholder with Google Maps embed iframe
- Removed: MapPin icon placeholder, "Peta Lokasi" text, schoolInfo.address display, decorative grid pattern overlay
- Added: `<iframe>` with Google Maps embed URL for Sekolah Alam Al-Hakim, Bogor
- Styled: full width/height, min-h-[380px], rounded-[4px], border border-[var(--border-subtle)]
- Added: allowFullScreen, loading="lazy", referrerPolicy="no-referrer-when-downgrade", title="Lokasi Sekolah Alam Al-Hakim"
- Removed unused schoolInfo import

## Files Changed
- `src/hooks/useSEO.js` (NEW)
- `src/hooks/useDocumentTitle.js` (MODIFIED)
- `src/lib/routeMeta.js` (MODIFIED)
- `src/pages/KontakKamiPage.jsx` (MODIFIED)

## Verification
- All modules served correctly by Vite dev server
- Zero runtime errors
- Existing design patterns preserved (CSS variables, Tailwind classes, component structure)
