// ============================================================================
// Static fallback data for Sekolah Alam Al-Hakim
// All text in Bahasa Indonesia. Descriptions kept concise per design rules.
// ============================================================================

export const schoolInfo = {
  name: "Sekolah Alam Al-Hakim",
  tagline: "Giri Tempa Bagi Ekspresi Fitrah Insani",
  logo: "/logo-gold.png",
  logoLight: "/logo-light.png",
  logoDark: "/logo-dark.png",
  phone: "+62 895-3267-69365",
  contacts: [
    {
      name: "Ecep Supriatna",
      phone: "+62 895-3267-69365",
      whatsapp: "62895326769365",
    },
    {
      name: "Fikri Fathul Islam",
      phone: "+62 089-3887-405",
      whatsapp: "620893887405",
    },
  ],
  email: "sekolahalamalhakimlembang@gmail.com",
  address: "Kampung Lebak Cihideung RT 02/17, Desa Jayagiri, Lembang, Jawa Barat",
  whatsapp: "62895326769365",
  socialMedia: {
    instagram: "https://instagram.com/sekolahalamalhakim",
    instagramHandle: "@sekolahalamalhakim",
    instagramSmp: "https://instagram.com/sekolahalamalhakim_smp",
    instagramSmpHandle: "@sekolahalamalhakim_smp",
    facebook: "https://facebook.com/SekolahAlamAlHakim",
    youtube: "https://youtube.com/@SekolahAlamAlHakim",
  },
};

export const visiMisiContent = {
  pendidikanKarakter: {
    nabawiyah: {
      title: "Pendidikan Karakter Nabawiyah (Pendidikan Fitrah)",
      description:
        "Sekolah yang menerapkan sistem pendidikan karakter nabawiyah yaitu menumbuhkan karakter iman, karakter belajar yang diselaraskan dengan karakter perkembangan anak. Karakter Iman adalah pondasi kepribadian seorang anak, maka harus ditumbuhkan terlebih dahulu sebelum menumbuhkan karakter lainnya. Tanpa keimanan dan kesadaran anak tidak mungkin akan menjadi pembelajar yang tangguh. Tanpa tumbuhnya karakter belajar juga tidak mungkin anak akan menghasilkan karya yang bermanfaat.",
    },
    aqilBaligh: {
      title: "Pendidikan Aqil Baligh",
      description:
        "Dan menerapkan Pendidikan Aqil Baligh, menempa santri agar memiliki karakter pemuda yaitu karakter tanggungjawab, kemandirian, kecakapan berfikir dan kecakapan sosial.",
    },
  },
  visi: {
    title: "Giri Tempa Bagi Ekspresi Fitrah Insani",
    description:
      "Sekolah Alam Al-Hakim adalah sebuah bumi penempaan dan pembentukan manusia dan kemanusiaan secara manusiawi dan fitri, agar terekspresikan dan teraktualisasikan kapasitas dan potensi santri.",
  },
  misi: [
    "Menumbuhkan karakter keimanan sebagai fondasi kehidupan.",
    "Mengembangkan potensi santri sesuai fitrahnya.",
    "Menyelenggarakan pembelajaran berbasis alam yang bermakna.",
    "Membentuk insan yang aqil baligh.",
  ],
  targetSD: {
    title: "Target Kompetensi SD",
    description:
      "Menjadi pemuda aqil baligh yang bersyukur. Bersyukur adalah mengetahui, menggunakan potensi yang dimiliki untuk digunakan di jalan Allah.",
  },
  budaya: [
    {
      title: "Insight Learning for Inside-out",
      description:
        "Insight Learning for Inside-out setiap santri Sekolah Alam Al-Hakim mampu mengambil hikmah pelajaran tersembunyi dalam setiap pengalaman belajar.",
    },
    {
      title: "Brothering",
      description:
        "Budaya yang terbangun di Sekolah Alam Al-Hakim adalah brothering. Silih asah asih asuh antar santri.",
    },
  ],
  motto: {
    title: "Tafakkur untuk Tadabbur Insan Bersyukur",
    description:
      "Insan yang mentafakkuri ayat-ayat kauni untuk mentadabburi ayat-ayat Qur’ani, agar terbentuk manusia yang mampu mendayagunakan seluruh karunia Allah untuk kemaslahatan hidup.",
  },
};

export const programs = [
  {
    id: 1,
    slug: "sd",
    name: "Sekolah Dasar Al-Hakim",
    shortName: "SD",
    ageRange: "6–12 tahun",
    description:
      "Pendidikan SD yang menargetkan santri menjadi pemuda aqil baligh yang bersyukur — mengetahui dan menggunakan potensi yang dimiliki untuk digunakan di jalan Allah.",
    targetKompetensi:
      "Menjadi pemuda aqil baligh yang bersyukur. Bersyukur adalah mengetahui, menggunakan potensi yang dimiliki untuk digunakan di jalan Allah.",
    features: [
      "Jelajah alam, supercamp & trekking",
      "Tahsin, tahfidz & implementasi Qur'an",
      "Penempaan aqil baligh & karakter pemuda",
    ],
    image: "/images/program-sd.jpg",
  },
];

export const homepageContent = {
  hero: {
    label: "Sekolah Alam Al-Hakim",
    title: "Giri Tempa Bagi Ekspresi\nFitrah Insani",
    subtitle:
      "Menerapkan Pendidikan Karakter Nabawiyah (Pendidikan fitrah) dan Pendidikan Aqil Baligh.",
    ctaText: "Daftarkan Putra-Putri Anda",
    ctaLink: "/pendaftaran",
  },
  intro: {
    label: "Kontak Kami",
    title: "Hubungi Sekolah Alam Al-Hakim",
    description:
      "Sekolah Alam Al-Hakim membuka komunikasi seluas-luasnya bagi orang tua yang ingin mengenal lebih jauh sistem pendidikan fitrah dan aqil baligh kami.",
  },
  programPreview: {
    label: "Program Kami",
    title: "Jenjang Pendidikan SD",
    description:
      "Menempa santri menjadi pemuda aqil baligh yang bersyukur, mengetahui dan menggunakan potensi yang dimiliki di jalan Allah.",
  },
  activityPreview: {
    label: "Aktivitas",
    title: "Kegiatan Pembelajaran",
    description:
      "Aktivitas jelajah alam, Al-Qur'an, dan penempaan aqil baligh yang menumbuhkan karakter pemuda bersyukur.",
    items: [
      {
        id: 1,
        title: "Jelajah Alam & Survival",
        category: "Alam",
        image: "/images/activity-ekspedisi.jpg",
      },
      {
        id: 2,
        title: "Tahsin & Tahfidz Qur'an",
        category: "Al-Qur'an",
        image: "/images/activity-tahfidz.jpg",
      },
      {
        id: 3,
        title: "Insight Learning",
        category: "Karakter",
        image: "/images/activity-pasar.jpg",
      },
      {
        id: 4,
        title: "Proyek Kebermanfaatan",
        category: "Aqil Baligh",
        image: "/images/activity-olahraga.jpg",
      },
    ],
  },
  cta: {
    title: "Siap mendampingi tumbuh kembang ananda menjadi pemuda aqil baligh yang bersyukur?",
    ctaText: "Daftar Sekarang",
    ctaLink: "/pendaftaran",
  },
};

export const ceritaContent = {
  title: "Cerita Kami",
  subtitle: "Perjalanan Sekolah Alam Al-Hakim dalam membentuk generasi berakhlak mulia",
  sections: [
    {
      heading: "Awal Mula: Panggilan Bumi dan Iman",
      text: "Sekolah Alam Al-Hakim berdiri pada tahun 2015 dari keprihatinan sekelompok orang tua terhadap pendidikan yang terasing dari alam dan nilai-nilai ketuhanan. Kami memulai dengan 12 siswa dan satu bangunan kayu sederhana di kaki perbukitan Cianjur. Keyakinan kami sederhana: anak yang dekat dengan alam akan dekat dengan Penciptanya.",
      image: "/images/cerita-awal.jpg",
      imagePosition: "left",
    },
    {
      heading: "Tumbuh Bersama Alam dan Komunitas",
      text: "Dalam perjalanannya, Al-Hakim berkembang menjadi komunitas pendidikan yang melibatkan orang tua, masyarakat sekitar, dan pemerintah desa. Kebun sekolah menjadi ruang kelas terbuka, dan setiap pohon yang ditanam siswa menjadi saksi tumbuhnya ilmu dan akhlak. Kini lebih dari 300 siswa menimba ilmu di sini.",
      image: "/images/cerita-tumbuh.jpg",
      imagePosition: "right",
    },
    {
      heading: "Visi ke Depan: Menjadi Cahaya",
      text: "Ke depan, Al-Hakim berkomitmen menjadi model pendidikan berbasis alam yang dapat direplikasi oleh komunitas lain di Indonesia. Kami terus mengembangkan kurikulum, melatih guru-guru alam, dan membangun kemitraan untuk mewujudkan generasi yang menjadi khalifah sejati di muka bumi.",
      image: "/images/cerita-visi.jpg",
      imagePosition: "left",
    },
  ],
  timeline: [
    { year: "2015", title: "Awal Mula", description: "Sekolah Alam Al-Hakim berdiri dengan 12 siswa dan satu bangunan kayu sederhana" },
    { year: "2017", title: "Ekspansi Pertama", description: "Membuka jenjang SD dan membangun 3 ruang kelas baru dari bahan alam" },
    { year: "2019", title: "Kebun Sekolah", description: "Program kebun sekolah resmi menjadi bagian kurikulum seluruh jenjang" },
    { year: "2021", title: "Jejaring Nasional", description: "Bergabung dengan Jejaring Sekolah Alam Indonesia dan membuka jenjang SMP" },
    { year: "2023", title: "SMA Al-Hakim", description: "Membuka jenjang SMA dengan program magang dan riset lingkungan" },
    { year: "2025", title: "300+ Siswa", description: "Melampaui 300 siswa aktif dari daycare hingga SMA dengan 45+ tenaga pendidik" },
  ],
  cta: {
    text: "Jadilah Bagian dari Cerita Kami",
    link: "/pendaftaran",
  },
};

export const kontakContent = {
  title: "Hubungi Kami",
  subtitle: "Informasi Lokasi & Kontak Sekolah",
  info: {
    address: "Kampung Lebak Cihideung RT 02/17, Desa Jayagiri, Lembang, Jawa Barat",
    phone: "+62 895-3267-69365",
    contacts: [
      {
        name: "Ecep Supriatna",
        phone: "+62 895-3267-69365",
        whatsapp: "62895326769365",
      },
      {
        name: "Fikri Fathul Islam",
        phone: "+62 089-3887-405",
        whatsapp: "620893887405",
      },
    ],
    email: "sekolahalamalhakimlembang@gmail.com",
    hours: "SD: 07.15 – 13.30 WIB | SMP: 07.15 – 14.30 WIB",
  },
  cta: {
    text: "Chat via WhatsApp",
    link: "https://wa.me/62895326769365?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim",
  },
};

export const kurikulumContent = {
  title: "Kurikulum & Domain Pembelajaran",
  subtitle: "Pendidikan Fitrah & Aqil Baligh",
  tabs: [
    {
      id: "karakter_alami",
      label: "1. Karakter Alami",
      subtitleLabel: "Keimanan & Ketauhidan",
      description:
        "Menumbuhkan keimanan (kesadaran, keyakinan, hikmah, mindset hidup) sebagai fondasi kepribadian utama santri sebelum menumbuhkan karakter lainnya.",
      pillars: [
        {
          title: "Pendidikan Alam",
          description:
            "Jelajah alam, backpacker, supercamp, jungle survival, trekking, dan jarambah untuk mentafakkuri ayat-ayat kauni Allah.",
        },
        {
          title: "Al-Qur'an",
          description:
            "Tahsin, Tahfidz, dan Implementasi ayat-ayat Qur'ani dalam setiap aspek kehidupan sehari-hari.",
        },
        {
          title: "Karakter Iman & Belajar",
          description:
            "Menumbuhkan kesadaran iman terlebih dahulu agar lahir santri sebagai pembelajar yang tangguh.",
        },
      ],
    },
    {
      id: "kedewasaan",
      label: "2. Kedewasaan / Aqil Baligh",
      subtitleLabel: "Karakter Pemuda Tangguh",
      description:
        "Menempa santri agar memiliki karakter pemuda yang mandiri, bertanggung jawab, matang secara intelektual, dan terampil dalam bersosialisasi.",
      pillars: [
        {
          title: "Kemandirian & Tanggung Jawab",
          description:
            "Melatih sikap mandiri dan siap bertanggung jawab penuh atas tugas kehidupan dan peran diri.",
        },
        {
          title: "Kecakapan Berpikir",
          description:
            "Mengasah daya pikir kritis, analitis, serta kemampuan mengambil keputusan yang bijak.",
        },
        {
          title: "Kecakapan Sosial & Brothering",
          description:
            "Membangun kepemimpinan, adab bermasyarakat, dan menerapkan budaya brothering (silih asah asih asuh).",
        },
      ],
    },
    {
      id: "akademik",
      label: "3. Akademik",
      subtitleLabel: "Keilmuan Terapan",
      description:
        "Penguasaan konsep keilmuan dan nalar analitis melalui pengalaman belajar yang nyata, kontekstual, dan bermakna.",
      pillars: [
        {
          title: "Sains & Observasi Alam",
          description:
            "Memahami hukum alam dan ilmu sains melalui laboratorium terbuka dan observasi lingkungan.",
        },
        {
          title: "Matematika & Logika",
          description:
            "Pengembangan berpikir logis, nalar kuantitatif, dan pemecahan masalah (problem solving).",
        },
        {
          title: "Literasi & Bahasa",
          description:
            "Kemampuan membaca, menulis karya bermakna, serta mengomunikasikan gagasan secara efektif.",
        },
      ],
    },
    {
      id: "kebermanfaatan",
      label: "4. Kebermanfaatan",
      subtitleLabel: "Insan Bersyukur & Berkemajuan",
      description:
        "Target kompetensi santri menjadi pemuda aqil baligh yang bersyukur — mengetahui dan mendayagunakan seluruh potensi yang dimiliki di jalan Allah untuk kemaslahatan hidup.",
      pillars: [
        {
          title: "Pendayagunaan Potensi Fitrah",
          description:
            "Mengetahui kelebihan dan potensi diri untuk dimanfaatkan secara maksimal di jalan Allah SWT.",
        },
        {
          title: "Insight Learning for Inside-out",
          description:
            "Mampu mengambil hikmah pelajaran tersembunyi dari setiap pengalaman belajar dan mewujudkannya menjadi karya bermanfaat.",
        },
        {
          title: "Kemaslahatan Ummat",
          description:
            "Memberikan kontribusi nyata, solusi sosial, dan kepedulian bagi sesama serta lingkungan.",
        },
      ],
    },
  ],
};

export const aktivitasContent = {
  title: "Aktivitas Santri",
  subtitle: "Kegiatan Belajar & Jelajah Alam",
  categories: ["Semua", "Akademik", "Alam", "Seni", "Olahraga"],
  items: [
    {
      id: 1,
      title: "Tahfidz Subuh",
      category: "Akademik",
      description:
        "Siswa memulai pagi dengan menghafal Al-Qur'an di mushalla terbuka sambil menikmati udara segar.",
      image: "/images/aktivitas-tahfidz.jpg",
    },
    {
      id: 2,
      title: "Ekspedisi Sungai",
      category: "Alam",
      description:
        "Penjelajahan sungai untuk mempelajari ekosistem air tawar dan praktik menjaga kebersian sungai.",
      image: "/images/aktivitas-sungai.jpg",
    },
    {
      id: 3,
      title: "Seni Batik Alam",
      category: "Seni",
      description:
        "Membatik menggunakan pewarna alami dari tanaman di sekitar sekolah seperti indigo dan kunyit.",
      image: "/images/aktivitas-batik.jpg",
    },
    {
      id: 4,
      title: "Pencak Silat",
      category: "Olahraga",
      description:
        "Latihan pencak silat sebagai olahraga bela diri tradisional yang melatih fisik dan kedisiplinan.",
      image: "/images/aktivitas-silat.jpg",
    },
    {
      id: 5,
      title: "Lab Sains Terbuka",
      category: "Akademik",
      description:
        "Eksperimen sains menggunakan bahan-bahan alam di laboratorium terbuka di bawah pohon rindang.",
      image: "/images/aktivitas-sains.jpg",
    },
    {
      id: 6,
      title: "Bercocok Tanam",
      category: "Alam",
      description:
        "Siswa merawat kebun kelas masing-masing dari benih hingga panen sebagai bagian dari kurikulum.",
      image: "/images/aktivitas-kebun.jpg",
    },
    {
      id: 7,
      title: "Teater Nabi & Sahabat",
      category: "Seni",
      description:
        "Pementasan drama bertema kisah para nabi dan sahabat untuk memperkuat iman dan keterampilan berkomunikasi.",
      image: "/images/aktivitas-teater.jpg",
    },
    {
      id: 8,
      title: "Outbound & Survival",
      category: "Olahraga",
      description:
        "Kegiatan berkemah dan survival di alam terbuka untuk melatih kemandirian dan kerja sama tim.",
      image: "/images/aktivitas-outbound.jpg",
    },
  ],
};

export const galleryContent = {
  title: "Galeri Sekolah",
  subtitle: "Dokumentasi & Momen Kegiatan",
  categories: ["Semua", "Kegiatan", "Alam", "Seni", "Akademik"],
  items: [
    {
      id: 1,
      title: "Menanam Benih di Kebun Sekolah",
      category: "Alam",
      image: "/images/gallery-1.jpg",
      description: "Tangan-tangan kecil membenamkan bibit tanaman ke dalam tanah kebun sekolah.",
    },
    {
      id: 2,
      title: "Membaca di Bawah Pohon Rindang",
      category: "Akademik",
      image: "/images/gallery-2.jpg",
      description: "Siswa menikmati buku bacaan di bawah naungan pohon besar di halaman sekolah.",
    },
    {
      id: 3,
      title: "Melukis dengan Cat Air di Luar Ruangan",
      category: "Seni",
      image: "/images/gallery-3.jpg",
      description: "Anak-anak berkarya dengan cat air di meja lukis terbuka ditemani angin sepoi.",
    },
    {
      id: 4,
      title: "Tarian Tradisional di Panggung Terbuka",
      category: "Kegiatan",
      image: "/images/gallery-4.jpg",
      description: "Siswa menampilkan tarian tradisional Indonesia di panggung outdoor sekolah.",
    },
    {
      id: 5,
      title: "Bermain di Tepi Sungai",
      category: "Alam",
      image: "/images/gallery-5.jpg",
      description: "Anak-anak mengeksplorasi sungai kecil dan belajar tentang ekosistem air.",
    },
    {
      id: 6,
      title: "Lingkaran Pagi bersama Guru",
      category: "Kegiatan",
      image: "/images/gallery-6.jpg",
      description: "Guru dan siswa memulai hari dengan lingkaran pagi di atas rumput hijau.",
    },
    {
      id: 7,
      title: "Membangun Struktur Bambu",
      category: "Kegiatan",
      image: "/images/gallery-7.jpg",
      description: "Siswa bekerja sama membangun kreasi dari bambu di area proyek sekolah.",
    },
    {
      id: 8,
      title: "Presentasi Proyek Sains Tanaman",
      category: "Akademik",
      image: "/images/gallery-8.jpg",
      description: "Siswa mempresentasikan hasil penelitian tentang pertumbuhan tanaman.",
    },
    {
      id: 9,
      title: "Memasak Makanan Tradisional",
      category: "Seni",
      image: "/images/gallery-9.jpg",
      description: "Anak-anak belajar memasak hidangan tradisional di dapur outdoor sekolah.",
    },
    {
      id: 10,
      title: "Shalat Berjamaah di Mushalla Terbuka",
      category: "Kegiatan",
      image: "/images/gallery-10.jpg",
      description: "Siswa melaksanakan shalat berjamaah di mushalla terbuka dengan pemandangan alam.",
    },
    {
      id: 11,
      title: "Bermain di Area Permainan Alam",
      category: "Alam",
      image: "/images/gallery-11.jpg",
      description: "Anak-anak memanjat dan bermain di area permainan alami dari kayu dan tali.",
    },
    {
      id: 12,
      title: "Wisuda dengan Pakaian Adat",
      category: "Akademik",
      image: "/images/gallery-12.jpg",
      description: "Siswa merayakan wisuda dengan mengenakan pakaian adat Nusantara.",
    },
  ],
};

export const pendaftaranContent = {
  title: "Pendaftaran Santri",
  subtitle: "Pendaftaran Peserta Didik Baru",
  steps: [
    {
      number: 1,
      title: "Isi Formulir Pendaftaran",
      description:
        "Hubungi Fikri Fathul Islam via WhatsApp untuk pengisian formulir & konsultasi pendaftaran santri.",
    },
    {
      number: 2,
      title: "Observasi & Wawancara",
      description:
        "Calon siswa dan orang tua diundang untuk sesi observasi kelas dan wawancara bersama tim pendidik kami.",
    },
    {
      number: 3,
      title: "Pengumuman Hasil",
      description:
        "Hasil seleksi diumumkan melalui email dan WhatsApp dalam waktu 5 hari kerja setelah wawancara.",
    },
    {
      number: 4,
      title: "Daftar Ulang & Orientasi",
      description:
        "Lakukan pembayaran daftar ulang dan ikuti program orientasi untuk mengenal lingkungan sekolah sebelum kelas dimulai.",
    },
  ],
  cta: {
    text: "Isi Formulir Pendaftaran",
    link: "https://wa.me/620893887405?text=Assalamu'alaikum,%20saya%20ingin%20mengisi%20formulir%20pendaftaran%20Sekolah%20Alam%20Al-Hakim",
  },
};

export const newsContent = {
  label: "Kabar Terbaru",
  title: "Berita & Kegiatan",
  items: [
    {
      id: 1,
      title: "Penerimaan Peserta Didik Baru 2025/2026 Telah Dibuka",
      excerpt: "Pendaftaran untuk tahun ajaran 2025/2026 resmi dibuka untuk seluruh jenjang. Dapatkan potongan biaya pendaftaran untuk pendaftar awal.",
      date: "15 Jan 2025",
      category: "Pengumuman",
      image: "/images/news-ppdb.jpg",
    },
    {
      id: 2,
      title: "Siswa SMA Al-Hakim Raih Penghargaan Riset Lingkungan",
      excerpt: "Dua siswa kelas XI berhasil meraih juara kedua dalam kompetisi riset lingkungan tingkat Jawa Barat dengan proyek biopori.",
      date: "28 Des 2024",
      category: "Prestasi",
      image: "/images/news-prestasi.jpg",
    },
    {
      id: 3,
      title: "Festival Alam 2024: Merayakan Kebersamaan",
      excerpt: "Festival tahunan Sekolah Alam Al-Hakim menghadirkan bazar produk siswa, pertunjukan seni, dan kegiatan konservasi pohon bersama masyarakat.",
      date: "10 Nov 2024",
      category: "Kegiatan",
      image: "/images/news-festival.jpg",
    },
  ],
};
