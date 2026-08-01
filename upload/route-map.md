# Route Map — Sekolah Alam AL-Hakim

---

## ROUTE TABLE

| Path                 | Page              | Intro Title                | Transition Type |
| -------------------- | ----------------- | -------------------------- | --------------- |
| `/`                  | Homepage          | — (loading screen)         | First load only |
| `/tentang/cerita`    | Cerita Kami       | "Cerita Kami"              | Major           |
| `/tentang/kontak`    | Kontak Kami       | "Kontak Kami"              | Major           |
| `/program/daycare`   | Program Daycare   | "Daycare"                  | Major           |
| `/program/preschool` | Program Preschool | "Preschool"                | Minor           |
| `/program/sd`        | Program SD        | "Sekolah Dasar"            | Minor           |
| `/program/smp`       | Program SMP       | "Sekolah Menengah Pertama" | Minor           |
| `/program/sma`       | Program SMA       | "Sekolah Menengah Atas"    | Minor           |
| `/kurikulum`         | Kurikulum         | "Kurikulum"                | Major           |
| `/aktivitas`         | Aktivitas         | "Aktivitas"                | Major           |
| `/galeri`            | Galeri            | "Galeri"                   | Major           |
| `/pendaftaran`       | Pendaftaran       | "Pendaftaran"              | Major           |

> **Major** = charcoal overlay + title tengah, ~1.45 detik
> **Minor** = fade 0.3 detik (antar sub-program, user sudah dalam konteks yang sama)

---

## NAVBAR STRUCTURE

```
Logo (kiri)                          Nav Items (kanan)
─────────────────────────────────────────────────────
Sekolah Alam AL-Hakim    Tentang Kami ▾   Program ▾   Kurikulum   Aktivitas   Galeri   [Daftar Sekarang]
```

### Dropdown: Tentang Kami

```
┌─────────────────────┐
│  Cerita Kami        │
│  Kontak Kami        │
└─────────────────────┘
floating card, rounded, blur bg, gold border
```

### Dropdown: Program

```
┌─────────────────────┐
│  Daycare            │
│  Preschool          │
│  Sekolah Dasar      │
│  Sekolah Menengah   │
│  Pertama            │
│  Sekolah Menengah   │
│  Atas               │
└─────────────────────┘
```

---

## HOMEPAGE SECTIONS (urutan)

1. **Hero** — fullscreen layered composition
2. **Intro** — 2–3 kalimat, whitespace besar
3. **Program Preview** — 5 cards, klik → dedicated page
4. **Aktivitas Preview** — image grid, klik → /aktivitas
5. **CTA** — WhatsApp button, satu kalimat

---

## PAGE SECTIONS

### /tentang/cerita

1. Page Header (image + title overlay)
2. Konten cerita (Pattern A: image kiri, teks kanan)
3. CTA kontak

### /tentang/kontak

1. Page Header
2. Info kontak + map embed
3. WhatsApp CTA

### /program/\* (template reusable, isi beda)

1. Page Header (image besar + nama program)
2. Deskripsi program (Pattern A: alternating)
3. CTA pendaftaran

### /kurikulum

1. Page Header
2. Tab switcher per jenjang (Preschool / SD / SMP / SMA)
3. Konten kurikulum per tab

### /aktivitas

1. Page Header (Pattern B: full width)
2. Grid aktivitas dengan filter kategori
3. CTA

### /pendaftaran

1. Page Header
2. Visual step flow (image/ilustrasi alur)
3. WhatsApp CTA

---

## routeMeta.js (implementasi)

```js
export const routeMeta = {
  "/": { title: null, description: "Sekolah Alam AL-Hakim" },
  "/tentang/cerita": {
    title: "Cerita Kami",
    description: "Sekolah Alam AL-Hakim",
  },
  "/tentang/kontak": {
    title: "Kontak Kami",
    description: "Sekolah Alam AL-Hakim",
  },
  "/program/daycare": {
    title: "Daycare",
    description: "Sekolah Alam AL-Hakim",
  },
  "/program/preschool": {
    title: "Preschool",
    description: "Sekolah Alam AL-Hakim",
  },
  "/program/sd": {
    title: "Sekolah Dasar",
    description: "Sekolah Alam AL-Hakim",
  },
  "/program/smp": {
    title: "Sekolah Menengah Pertama",
    description: "Sekolah Alam AL-Hakim",
  },
  "/program/sma": {
    title: "Sekolah Menengah Atas",
    description: "Sekolah Alam AL-Hakim",
  },
  "/kurikulum": { title: "Kurikulum", description: "Sekolah Alam AL-Hakim" },
  "/aktivitas": { title: "Aktivitas", description: "Sekolah Alam AL-Hakim" },
  "/galeri": { title: "Galeri", description: "Sekolah Alam AL-Hakim" },
  "/pendaftaran": {
    title: "Pendaftaran",
    description: "Sekolah Alam AL-Hakim",
  },
};
```
