// ============================================================================
// Static fallback data for Sekolah Alam Al-Hakim
// All text in Bahasa Indonesia. Descriptions kept concise per design rules.
// ============================================================================

export const schoolInfo = {
  name: "Sekolah Alam Al-Hakim",
  tagline: "Menumbuhkan Generasi Berakhlak, Cinta Alam & Berilmu",
  phone: "+62 812-3456-7890",
  email: "info@sekolahalam-alhakim.sch.id",
  address: "Jl. Bumi Persada No. 17, Desa Ciputri, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43262",
  whatsapp: "6281234567890",
  socialMedia: {
    instagram: "https://instagram.com/sekolahalam_alhakim",
    facebook: "https://facebook.com/SekolahAlamAlHakim",
    youtube: "https://youtube.com/@SekolahAlamAlHakim",
  },
};

export const programs = [
  {
    id: 1,
    slug: "daycare",
    name: "Daycare Al-Hakim",
    shortName: "Daycare",
    ageRange: "1–3 tahun",
    description:
      "Ruang bermain dan belajar yang aman untuk anak usia dini, dirancang untuk merangsang motorik halus dan kasar melalui eksplorasi alam. Setiap aktivitas difokuskan pada tumbuh kembang anak secara holistik.",
    features: ["Rasio pengasuh 1:4", "Area bermain outdoor", "Stimulasi sensori alam"],
    image: "/images/program-daycare.jpg",
  },
  {
    id: 2,
    slug: "preschool",
    name: "Playgroup & Kindergarten",
    shortName: "Preschool",
    ageRange: "3–6 tahun",
    description:
      "Program pendidikan anak usia dini berbasis alam yang mengintegrasikan bermain, berkarya, dan beribadah. Anak-anak belajar melalui proyek kebun, seni alam, dan kegiatan keislaman harian.",
    features: ["Proyek kebun & cooking class", "Tahsin & hafalan surat pendek", "Field trip bulanan"],
    image: "/images/program-preschool.jpg",
  },
  {
    id: 3,
    slug: "sd",
    name: "Sekolah Dasar Al-Hakim",
    shortName: "SD",
    ageRange: "6–12 tahun",
    description:
      "Kurikulum merdeka yang dipadukan dengan pembelajaran berbasis alam dan karakter Islami. Siswa belajar melalui proyek nyata, expedisi alam, dan pembiasaan ibadah.",
    features: ["Ekspedisi alam mingguan", "Tahfidz & adab sehari-hari", "Proyek berbasis komunitas"],
    image: "/images/program-sd.jpg",
  },
  {
    id: 4,
    slug: "smp",
    name: "Sekolah Menengah Pertama Al-Hakim",
    shortName: "SMP",
    ageRange: "12–15 tahun",
    description:
      "Pembelajaran tematik-integratif yang menekankan kemandirian, kepemimpinan, dan kepedulian lingkungan. Siswa terlibat dalam program kewirausahaan sosial dan bimbingan akhlak intensif.",
    features: ["Program kewirausahaan siswa", "Bimbingan akhlak & mentoring", "Penelitian lingkungan hidup"],
    image: "/images/program-smp.jpg",
  },
  {
    id: 5,
    slug: "sma",
    name: "Sekolah Menengah Atas Al-Hakim",
    shortName: "SMA",
    ageRange: "15–18 tahun",
    description:
      "Program pendidikan yang mempersiapkan generasi muda menjadi pemimpin berintegritas dan khalifah di muka bumi. Kurikulum dipadukan dengan magang profesional, riset lingkungan, dan pendalaman Al-Qur'an.",
    features: ["Magang & study tour profesional", "Riset lingkungan terapan", "Tahfidz intensif & kajian"],
    image: "/images/program-sma.jpg",
  },
];

export const homepageContent = {
  hero: {
    label: "Sekolah Alam Al-Hakim",
    title: "Menumbuhkan Generasi\nKhalifah di Muka Bumi",
    subtitle:
      "Pendidikan berbasis alam yang membentuk karakter Islami, kecerdasan akal, dan kepekaan hati sejak usia dini.",
    ctaText: "Daftarkan Putra-Putri Anda",
    ctaLink: "/pendaftaran",
  },
  intro: {
    label: "Tentang Kami",
    title: "Sekolah Alam untuk Generasi Berakhlak",
    description:
      "Sekolah Alam Al-Hakim menyelenggarakan pendidikan yang menempatkan alam sebagai laboratorium utama. Kami percaya anak belajar terbaik ketika berinteraksi langsung dengan ciptaan Allah. Dengan menggabungkan kurikulum merdeka, nilai-nilai Islam, dan kearifan lokal, kami menyiapkan generasi yang berilmu, berakhlak, dan cinta lingkungan.",
  },
  programPreview: {
    label: "Program Kami",
    title: "Jenjang Pendidikan",
    description:
      "Dari daycare hingga SMA, setiap jenjang dirancang untuk memenuhi kebutuhan tumbuh kembang anak secara bertahap dan bermakna.",
  },
  activityPreview: {
    label: "Aktivitas",
    title: "Kegiatan Bermakna",
    description:
      "Beragam aktivitas yang dirancang untuk mengasah keterampilan, membangun karakter, dan mempererat ukhuwah.",
    items: [
      {
        id: 1,
        title: "Ekspedisi Hutan",
        category: "Alam",
        image: "/images/activity-ekspedisi.jpg",
      },
      {
        id: 2,
        title: "Pasar Kreatif Siswa",
        category: "Seni",
        image: "/images/activity-pasar.jpg",
      },
      {
        id: 3,
        title: "Tahfidz Pagi",
        category: "Akademik",
        image: "/images/activity-tahfidz.jpg",
      },
      {
        id: 4,
        title: "Olahraga Tradisional",
        category: "Olahraga",
        image: "/images/activity-olahraga.jpg",
      },
    ],
  },
  cta: {
    title: "Siap bergabung membesarkan generasi berakhlak bersama Sekolah Alam Al-Hakim?",
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
  subtitle: "Kami senang mendengar dari Anda — silakan sampaikan pertanyaan atau kunjungi kami langsung",
  info: {
    address: "Jl. Bumi Persada No. 17, Desa Ciputri, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43262",
    phone: "+62 812-3456-7890",
    email: "info@sekolahalam-alhakim.sch.id",
    hours: "Senin – Jumat: 07.30 – 15.00 WIB | Sabtu: 08.00 – 12.00 WIB",
  },
  cta: {
    text: "Chat via WhatsApp",
    link: "https://wa.me/6281234567890?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20Sekolah%20Alam%20Al-Hakim",
  },
};

export const kurikulumContent = {
  title: "Kurikulum",
  subtitle: "Kurikulum berbasis alam yang memadukan keimanan, keilmuan, dan kepekaan lingkungan",
  tabs: [
    {
      id: "keimanan",
      label: "Keimanan & Akhlak",
      description:
        "Pondasi utama seluruh kegiatan belajar di Al-Hakim, menanamkan tauhid dan adab dalam setiap aspek kehidupan.",
      pillars: [
        {
          title: "Tahfidz & Tahsin",
          description:
            "Program menghafal dan memperindah bacaan Al-Qur'an setiap hari dengan target hafalan sesuai jenjang usia.",
        },
        {
          title: "Adab & Akhlak Islami",
          description:
            "Pembiasaan adab kepada orang tua, guru, sesama teman, dan alam melalui keteladanan dan habituation harian.",
        },
        {
          title: "Kajian & Hikmah",
          description:
            "Kajian kisah para nabi, sahabat, dan ilmuwan Muslim untuk menumbuhkan semangat meneladani teladan terbaik.",
        },
      ],
    },
    {
      id: "keilmuan",
      label: "Keilmuan & Kecakapan",
      description:
        "Penguasaan ilmu pengetahuan dan keterampilan abad 21 melalui pendekatan proyek dan eksplorasi langsung.",
      pillars: [
        {
          title: "Literasi & Numerasi",
          description:
            "Pengembangan kemampuan membaca, menulis, dan berhitung melalui konteks nyata dan bahan-bahan alam.",
        },
        {
          title: "Proyek & Eksperimen",
          description:
            "Pembelajaran berbasis proyek (PBL) di mana siswa menyelesaikan masalah autentik dari lingkungan sekitar.",
        },
        {
          title: "Keterampilan Abad 21",
          description:
            "Pelatihan berpikir kritis, kolaborasi, kreativitas, dan komunikasi yang terintegrasi dalam setiap mata pelajaran.",
        },
      ],
    },
    {
      id: "kepekaan",
      label: "Kepekaan Lingkungan",
      description:
        "Menumbuhkan kesadaran dan tanggung jawab terhadap kelestarian alam sebagai amanah Allah.",
      pillars: [
        {
          title: "Kebun Sekolah",
          description:
            "Setiap kelas mengelola kebun sendiri — menanam, merawat, dan memanen sebagai bagian dari pembelajaran.",
        },
        {
          title: "Ekspedisi & Riset Alam",
          description:
            "Kegiatan rutin menjelajah hutan, sungai, dan ekosistem lokal untuk memahami keanekaragaman hayati secara langsung.",
        },
        {
          title: "Aksi Lingkungan",
          description:
            "Program pengelolaan sampah, penanaman pohon, dan kampanye lingkungan bersama masyarakat desa.",
        },
      ],
    },
    {
      id: "kekuatan",
      label: "Kekuatan Fisik & Jiwa",
      description:
        "Pembinaan jasmani dan mental yang tangguh melalui aktivitas outdoor dan pembentukan karakter.",
      pillars: [
        {
          title: "Olahraga & Kebugaran",
          description:
            "Aktivitas fisik harian termasuk senam pagi, pencak silat, dan olahraga tradisional untuk membangun kebugaran.",
        },
        {
          title: "Survival & Outdoor Skill",
          description:
            "Keterampilan berkemah, navigasi alam, dan pertolongan pertama yang melatih kemandirian dan ketangguhan.",
        },
        {
          title: "Mental & Resiliensi",
          description:
            "Program mentoring, jurnal refleksi, dan diskusi kelompok untuk membangun jiwa yang kuat dan adaptif.",
        },
      ],
    },
  ],
};

export const aktivitasContent = {
  title: "Aktivitas",
  subtitle: "Beragam kegiatan yang memadukan belajar, berkarya, dan beribadah dalam keseharian siswa",
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
  title: "Galeri",
  subtitle: "Momen-momen berharga dari kegiatan belajar dan bermain di Sekolah Alam Al-Hakim",
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
  title: "Pendaftaran",
  subtitle: "Langkah mudah untuk bergabung dengan keluarga besar Sekolah Alam Al-Hakim",
  steps: [
    {
      number: 1,
      title: "Isi Formulir Pendaftaran",
      description:
        "Lengkapi formulir pendaftaran online dengan data calon siswa dan orang tua. Pastikan semua informasi terisi dengan benar.",
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
    link: "https://forms.google.com/sekolahalam-alhakim",
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
