# UI Rules — Sekolah Alam AL-Hakim
> Constitution visual untuk seluruh project. Wajib di-paste ke z.ai sebelum setiap prompt generation.

---

## IDENTITY

- **Feel**: Modern editorial school — warm, clean, premium tapi tidak intimidating
- **Bukan**: Corporate kaku / luxury hotel / template sekolah generik / artistic berlebihan
- **Referensi feel**: Editorial magazine + modern institution

---

## COLOR SYSTEM

```css
:root {
  --bg-primary:    #1C1C1E;
  --bg-secondary:  #252528;
  --bg-card:       #2A2A2D;
  --bg-overlay:    #141416;

  --gold-primary:  #B8963E;
  --gold-light:    #C9A84C;
  --gold-pale:     #D4AC5A;
  --gold-dim:      #8A6E2F;
  --gold-ghost:    rgba(184,150,62,0.08);

  --text-primary:  #F0EBE0;
  --text-secondary:#A09880;
  --text-muted:    #6B6355;
}
```

**Aturan warna:**
- Emas HANYA untuk: border, underline, icon accent, CTA button stroke/fill
- Tidak ada fill emas di area besar
- Background hanya charcoal variants
- Tidak ada warna cerah, neon, atau gradien pelangi

---

## TYPOGRAPHY

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| H1, H2 | Cormorant Garamond | 300 | tracking lebar |
| H3, H4 | Cormorant Garamond | 400 | — |
| Body | Jost | 300–400 | — |
| Label/Accent | Jost uppercase | 400 | 11px, letter-spacing 5px |

**Larangan:** Tidak ada Inter, Roboto, Arial, system-font di heading apapun.

---

## SPACING & LAYOUT

- Whitespace besar antar section — jangan rapat
- Max 3 section per page (homepage: 5 section)
- Max 3 kalimat teks per section
- Satu CTA per section, tidak lebih
- Tidak ada list panjang di homepage

---

## IMAGE RULES

- Rasio wajib: `4:5` (portrait) atau `16:9` (landscape)
- Overlay: `rgba(28,28,30,0.3)` — tipis
- Border-radius max: `4px`
- Frame emas (gold border) HANYA di hero, tidak dipakai di image lain
- Tidak ada drop-shadow besar atau efek berlebihan

---

## MOTION RULES

| Parameter | Value |
|-----------|-------|
| Max elemen bergerak per section | 2 |
| Duration | 0.7s – 1.0s |
| Easing | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Scroll reveal | opacity + y(20px) saja |
| Scale animasi | TIDAK dipakai (kecuali hero slow zoom) |
| Parallax | HANYA di hero |
| Loop animasi | HANYA WhatsApp pulse |

**Larangan motion:**
- Tidak ada bounce, elastic, atau spring berlebihan
- Tidak ada particles
- Tidak ada shimmer/glitter
- Tidak ada animasi yang blocking interaction

---

## TRANSITION SYSTEM

### First Load (sekali saja)
- Loading screen charcoal + nama sekolah fade in
- Durasi: 2.5 detik
- Exit: slide-up (bukan fade)

### Major Route Change
- Charcoal overlay fade in
- Page title muncul besar di tengah (Cormorant Garamond, weight 300)
- Subtext: nama sekolah (Jost uppercase, 11px)
- Hold, lalu overlay fade out → page visible
- Total durasi: ~1.45 detik
- Skip: klik kedua selama transisi = langsung clear
- Content render paralel dengan overlay (tidak sequential/blocking)

### Minor Route Change (antar sub-program)
- Simple fade: 0.3 detik

---

## NAVBAR RULES

- Transparent saat di hero
- Solid `var(--bg-primary)/95` + `backdrop-blur(12px)` setelah scroll 80px
- Transisi: 0.3s smooth
- Dropdown: floating card, `border-radius: 12px`, border `1px solid rgba(184,150,62,0.2)`, `backdrop-filter: blur(12px)`

---

## HERO RULES

- Layered composition — bukan full bleed image
- Image framed asimetris, posisi kanan
- Grain overlay tipis di seluruh hero area
- Slow zoom pada image: `scale 1.0 → 1.04` dalam 8 detik
- Teks kiri: label + H1 (2 baris max) + 1 kalimat + 1 CTA

---

## FORBIDDEN PATTERNS

- ❌ Section prestasi / mitra / acara / stats generik
- ❌ Form pendaftaran panjang
- ❌ List bullet panjang di homepage
- ❌ Teks paragraf lebih dari 3 kalimat per section
- ❌ Lebih dari 1 CTA per section
- ❌ Warna selain charcoal + gold + cream
- ❌ Font selain Cormorant Garamond + Jost
- ❌ Animasi scale, bounce, elastic
- ❌ Infinite loop selain WhatsApp pulse
- ❌ Section builder / layout dinamis dari admin

---

## STACK

```
Frontend : React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + React Router v6
Backend  : Laravel 13 (API-only, beda subdomain)
Image    : Laravel → R2/S3-compatible CDN
SEO      : react-helmet-async, dynamic meta per route
```

## STACK CONSTRAINT — WAJIB DI-PASTE KE Z.AI SETIAP SESI

```
STACK WAJIB:
- React 19 + Vite 8
- React Router DOM v6
- Tailwind CSS v4
- Framer Motion
- Lucide React
DILARANG: Next.js, shadcn, Radix, Prisma, next-auth, dependency lain apapun.
Semua UI component dibuat dari scratch dengan Tailwind.
```
