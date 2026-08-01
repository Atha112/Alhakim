# Component Rules — Sekolah Alam AL-Hakim
> Semua component wajib mengikuti rules ini. Tidak boleh ada improvisasi styling di luar rules ini.

## STACK CONSTRAINT — TIDAK BOLEH DILANGGAR

```
WAJIB : React 19 + Vite 8 + React Router DOM v6 + Tailwind CSS v4 + Framer Motion + Lucide React
DILARANG : Next.js, shadcn, Radix, Prisma, next-auth, dependency lain apapun
UI component : dibuat dari scratch dengan Tailwind, tidak boleh pakai library komponen
```

---

## COMPONENT MAP

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageLayout.jsx          ← wrapper semua page
│   ├── ui/
│   │   ├── LoadingScreen.jsx
│   │   ├── PageTransition.jsx      ← overlay + title intro
│   │   ├── SectionReveal.jsx       ← scroll reveal wrapper
│   │   ├── GoldDivider.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── Button.jsx
│   │   ├── PageHeader.jsx          ← header reusable per page
│   │   └── GrainOverlay.jsx
│   └── sections/
│       ├── home/
│       │   ├── HeroSection.jsx
│       │   ├── IntroSection.jsx
│       │   ├── ProgramPreview.jsx
│       │   ├── ActivityPreview.jsx
│       │   └── CTASection.jsx
│       └── shared/
│           ├── ProgramCard.jsx
│           └── ActivityCard.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── CeritaKamiPage.jsx
│   ├── KontakKamiPage.jsx
│   ├── ProgramPage.jsx             ← template, terima props/params
│   ├── KurikulumPage.jsx
│   ├── AktivitasPage.jsx
│   └── PendaftaranPage.jsx
├── lib/
│   ├── routeMeta.js
│   └── api.js
└── data/
    └── content.js                  ← fallback static
```

---

## COMPONENT RULES

### Button.jsx
```
Variants: 'primary' | 'outline' | 'ghost'

primary : bg gold-primary, text charcoal, hover bg gold-pale
outline : border gold-primary, text gold-primary, hover bg gold-primary text charcoal
ghost   : text gold-primary, no border, hover text gold-pale underline

Size    : default (py-3 px-6) | sm (py-2 px-4)
Font    : Jost, weight 400, uppercase, letter-spacing 3px, size 13px
Radius  : 2px (tidak bulat — sharp dan premium)
Transition: 0.25s ease
Tidak ada shadow, tidak ada glow
```

### PageHeader.jsx
```
Props   : title, subtitle?, backgroundImage?
Height  : 45vh – 55vh (bukan fullscreen)
Layout  : title di bawah-kiri, overlay gelap rgba(20,20,22,0.55)
Font    : Cormorant Garamond weight 300, tracking-widest
Tidak ada button di PageHeader
```

### ProgramCard.jsx
```
Layout  : vertical card
Image   : rasio 4:5, object-cover
Title   : Cormorant Garamond weight 300
Age badge : Jost uppercase 11px
Desc    : Jost weight 300, max 2 kalimat
CTA     : text link "Pelajari →" gold-primary
Hover   : border gold-dim 1px, tidak ada scale, tidak ada shadow besar
Radius  : 4px
```

### SectionReveal.jsx
```
Trigger : Intersection Observer, threshold 0.15
Animation:
  initial : { opacity: 0, y: 20 }
  animate : { opacity: 1, y: 0 }
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
Stagger (jika children multiple): 0.15s antar item
Tidak ada scale
Tidak ada blur
```

### PageTransition.jsx
```
Trigger   : route change via useLocation()
Lookup    : routeMeta[pathname]
Jika ada title:
  1. overlay charcoal fade in (0.15s)
  2. title: opacity 0→1, y 10→0 (0.3s), Cormorant Garamond weight 300, size clamp(48px,8vw,96px)
  3. subtext: nama sekolah, Jost uppercase 11px letter-spacing 5px, gold-primary
  4. hold (0.6s)
  5. title fade out (0.2s)
  6. overlay fade out (0.2s)
Jika tidak ada title:
  fade 0.3s saja
Skip: klik selama transisi = clearTimeout + langsung hide
Content render paralel (tidak blocking)
```

### GrainOverlay.jsx
```
Position: fixed, inset 0, pointer-events none, z-index tinggi
Opacity : 0.035 – 0.05 (sangat tipis)
Method  : SVG feTurbulence atau CSS noise via radial-gradient
Tidak menghalangi interaksi apapun
```

### WhatsAppButton.jsx
```
Position: fixed bottom-6 right-6, z-50
Icon    : WhatsApp SVG atau lucide
Color   : gold-primary
Pulse   : ring animation, interval 3s, warna gold-ghost
Hover   : scale 1.1, transition 0.2s
Link    : wa.me/{nomor}?text={pesan encoded}
```

### Navbar.jsx
```
State transparent → solid:
  scroll < 80px  : background transparent
  scroll >= 80px : background rgba(28,28,30,0.95), backdrop-blur-md
  transition     : 0.3s ease

Dropdown:
  position       : absolute, floating
  background     : rgba(28,28,30,0.85)
  backdrop-filter: blur(12px)
  border         : 1px solid rgba(184,150,62,0.2)
  border-radius  : 12px
  padding        : 8px
  animation      : opacity + y(8px→0), duration 0.2s
  item hover     : text gold-primary, bg gold-ghost, border-radius 8px

Mobile:
  hamburger → full overlay slide dari kanan
  overlay background: bg-primary
  items: stagger 0.08s
```

### LoadingScreen.jsx
```
Background: bg-overlay (#141416)
Content   : nama sekolah (Cormorant Garamond weight 300) + tagline kecil
Animation : fade in 0.8s, hold, lalu seluruh screen slide-up keluar
Duration  : 2.5 detik total
Trigger   : hanya first visit (sessionStorage flag)
Setelah exit: unmount dari DOM
```

---

## LAYOUT PATTERNS

### Pattern A — Image + Text (alternating)
```
Dipakai di: Cerita Kami, Program pages, Kurikulum

Desktop:
  Section ganjil : [Image 4:5 kiri] [Teks kanan]
  Section genap  : [Teks kiri] [Image 4:5 kanan]

Mobile:
  Image selalu di atas, teks di bawah

Grid: 12 kolom
  Image : span 5
  Gap   : span 1
  Teks  : span 6
```

### Pattern B — Full Width Header + Content
```
Dipakai di: Aktivitas, Pendaftaran

Header: image full width 16:9, overlay, title di tengah-bawah
Content: dibawah header, centered, max-width 800px
```

---

## LARANGAN GLOBAL

- ❌ Tidak ada `box-shadow` besar atau glow tebal
- ❌ Tidak ada `border-radius` > 12px kecuali dropdown
- ❌ Tidak ada gradient background selain overlay tipis
- ❌ Tidak ada font weight 700 atau bold di heading
- ❌ Tidak ada warna di luar design system
- ❌ Tidak ada component yang generate styling sendiri di luar tokens
- ❌ Tidak ada inline style kecuali dynamic value (opacity, transform dari JS)
- ❌ Tidak ada `!important`

---

## NAMING CONVENTION

```
Component files : PascalCase.jsx
Hooks           : camelCase, prefix use (useScrollPosition.js)
Utility         : camelCase.js
CSS classes     : Tailwind utility + CSS variables, tidak ada custom class baru
Data files      : camelCase.js
Page files      : PascalCase + suffix Page (HomePage.jsx)
```

---

## URUTAN GENERATE (z.ai execution order)

```
1.  globals.css + tailwind.config.js
2.  GrainOverlay.jsx
3.  LoadingScreen.jsx
4.  PageTransition.jsx + routeMeta.js
5.  SectionReveal.jsx
6.  Button.jsx
7.  GoldDivider.jsx
8.  Navbar.jsx
9.  Footer.jsx
10. PageLayout.jsx
11. WhatsAppButton.jsx
12. App.jsx (routing setup)
── FOUNDATION SELESAI ──
13. HeroSection.jsx
14. IntroSection.jsx
15. ProgramPreview.jsx + ProgramCard.jsx
16. ActivityPreview.jsx + ActivityCard.jsx
17. CTASection.jsx
18. HomePage.jsx (assembly)
── HOMEPAGE SELESAI ──
19. PageHeader.jsx
20. ProgramPage.jsx (template)
21. KurikulumPage.jsx
22. AktivitasPage.jsx
23. PendaftaranPage.jsx
24. CeritaKamiPage.jsx
25. KontakKamiPage.jsx
── ALL PAGES SELESAI ──
```
