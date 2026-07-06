import type { Translation } from './types'

export const id: Translation = {
  hud: {
    sector: 'SEKTOR 7G // RUANG ANGKASA',
    signal: 'SINYAL: KUAT',
    ind: 'IND',
    eng: 'ENG',
  },
  boot: {
    terminal: 'KONSOL UTAMA — TERMINAL',
    nav: 'SISTEM KAPAL',
    lines: [
      { text: 'HAIL MARY ONBOARD SYSTEM v2.0', color: 'text-hazard-amber' },
      { text: 'MENGINISIALISASI KONSOL UTAMA...' },
      { text: 'CEK LIFE SUPPORT: NOMINAL', color: 'text-astrophage' },
      { text: 'MANIFES KRUI: 1/1 — KOMANDAN ARIANSYAH' },
      { text: 'PROPULSI: DRIVE ASTROPHAGE ONLINE', color: 'text-astrophage' },
      { text: 'NAVIGASI: TERKUNCI PADA TARGET' },
      { text: 'JAM MISI: TERSINGKRONISASI' },
      { text: '—————————————————————————————', color: 'text-static-gray' },
      { text: 'SELAMAT DATANG, KOMANDAN ARIANSYAH.', color: 'text-signal-white' },
    ],
    skip: 'KLIK ATAU TEKAN TOMBOL APAPUN UNTUK SKIP',
  },
  nav: {
    access: 'AKSES',
    sections: [
      { id: 'log-00', label: 'KONSOL UTAMA' },
      { id: 'log-01', label: 'DATA PERSONIL' },
      { id: 'log-02', label: 'ARSIP MISI' },
      { id: 'log-03', label: 'SISTEM KAPAL' },
      { id: 'log-04', label: 'REKAM LATIHAN' },
      { id: 'log-05', label: 'TRANSMISI' },
    ],
  },
  hero: {
    eyebrow: 'KONSOL UTAMA // ONLINE',
    name1: 'Ariansyah',
    name2: 'Maulana',
    commander: 'KOMANDAN // ILMU KOMPUTER',
    tagline:
      'Membangun sistem dari awal — full-stack web developer dengan kecenderungan pada arsitektur bersih dan kode jujur. Saat ini menjalani tahun terakhir studi Ilmu Komputer sambil merilis produk nyata.',
    ctaMission: 'LIHAT ARSIP MISI',
    ctaChannel: 'BUKA KANAL',
    scroll: 'GULIR',
  },
  personnel: {
    eyebrow: '01 // DATA PERSONIL',
    title: 'Catatan Lapangan',
    bio1:
      'Mahasiswa aktif, saat ini di tahun terakhir Ilmu Komputer. Saya membangun hal-hal untuk web — dari backend API hingga antarmuka yang benar-benar digunakan orang. Pendekatan saya: pahami masalahnya dulu, lalu tulis kode paling sederhana yang menyelesaikannya dengan jujur.',
    bio2:
      'Saat tidak sedang coding, saya biasanya membaca tentang system design, mengerjakan side project, atau meyakinkan rekan tim bahwa konvensi penamaan yang jelas layak diperdebatkan.',
    status: 'STATUS:',
    statusValue: 'MAHASISWA AKTIF',
    availability: 'KETERSEDIAAN:',
    availabilityValue: 'TERBUKA UNTUK KERJA',
    location: 'LOKASI:',
    locationValue: 'INDONESIA',
    equipment: 'PERLENGKAPAN',
  },
  mission: {
    eyebrow: '02 // ARSIP MISI',
    title: 'Projek Terselesaikan',
    classification: 'KLASIFIKASI:',
    completed: 'SELESAI',
    operational: 'BEROPERASI',
    missions: [
      {
        code: 'MSN-01',
        title: 'Platform E-Commerce',
        classification: 'APLIKASI WEB FULLSTACK',
        description:
          'Platform e-commerce fitur lengkap dibangun dengan Laravel dan React. Mencakup manajemen produk, alur keranjang, pelacakan pesanan, dan dashboard admin dengan akses berbasis peran.',
        tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
        status: 'COMPLETED',
      },
      {
        code: 'MSN-02',
        title: 'Sistem Manajemen Tugas',
        classification: 'PERALATAN OPS INTERNAL',
        description:
          'Aplikasi manajemen tugas tim dengan papan Kanban drag-and-drop, pembaruan real-time, label prioritas, dan pelacakan tenggat. Dibangun untuk tim dev kecil.',
        tech: ['React', 'TypeScript', 'PostgreSQL', 'REST API'],
        status: 'OPERATIONAL',
      },
      {
        code: 'MSN-03',
        title: 'Portal Universitas',
        classification: 'SISTEM INFORMASI AKADEMIK',
        description:
          'Portal informasi mahasiswa yang menangani pendaftaran kursus, pelaporan nilai, dan kalender akademik. Backend di Java Spring Boot, frontend di vanilla JS.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
        status: 'COMPLETED',
      },
      {
        code: 'MSN-04',
        title: 'Manajemen Inventaris',
        classification: 'PERALATAN OPS INTERNAL',
        description:
          'Sistem inventaris gudang dengan dukungan pemindaian barcode, peringatan stok, manajemen pemasok, dan ekspor CSV untuk keperluan audit.',
        tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        status: 'COMPLETED',
      },
    ],
    viewDemo: 'LIHAT DEMO',
    source: 'SUMBER',
  },
  shipSystems: {
    eyebrow: '03 // DIAGNOSTIK SISTEM KAPAL',
    title: 'Keahlian & Kemampuan',
    systemHealth: 'KESEHATAN SISTEM',
    systems: [
      {
        name: 'SISTEM BACKEND',
        icon: '</>',
        health: 88,
        items: [
          'PHP & Laravel',
          'Java & Spring Boot',
          'REST API Design',
          'MySQL & PostgreSQL',
          'Authentication & RBAC',
          'MVC Architecture',
        ],
      },
      {
        name: 'ANTARMUKA FRONTEND',
        icon: '[]',
        health: 83,
        items: [
          'React & TypeScript',
          'Tailwind CSS',
          'HTML & CSS',
          'JavaScript (ES2022+)',
          'Responsive Design',
          'Component Architecture',
        ],
      },
      {
        name: 'PERALATAN & INSTRUMEN',
        icon: '>_',
        health: 91,
        items: [
          'Git & GitHub',
          'Figma',
          'Postman',
          'VS Code',
          'Arch Linux',
          'Docker (basic)',
        ],
      },
    ],
  },
  training: {
    eyebrow: '04 // REKAM LATIHAN',
    title: 'Pendidikan',
    institution: 'INSTITUSI',
    major: 'S1 Informatika — Ilmu Komputer',
    inProgress: 'SEDANG BERJALAN',
    period: 'PERIODE',
    periodValue: '2023 — Sekarang',
    ipk: 'IPK',
    ipkValue: '3.72 / 4.00',
    semester: 'SEMESTER',
    semesterValue: '6',
    status: 'STATUS',
    statusValue: 'AKTIF',
    fieldNotes: 'CATATAN LAPANGAN',
    notes:
      'Fokus pada mata kuliah rekayasa perangkat lunak, sistem basis data, algoritma, dan pengembangan web. Melengkapi studi akademis dengan pengalaman projek langsung dan kontribusi open-source selama program.',
  },
  transmission: {
    eyebrow: '05 // KANAL TERBUKA',
    title: 'Mari Membangun Sesuatu Bersama',
    description:
      'Apakah Anda memiliki projek, ingin berkolaborasi, atau sekadar menyapa — saya bisa dihubungi. Waktu respons: biasanya dalam 24 jam.',
    transmittingOn: 'MENTRANSMISIKAN PADA: EMAIL_FREQ',
    copyright: '\u00a9 {year} ARIANSYAH MAULANA. HAK CIPTA DILINDUNGI.',
    systemBuild: 'SISTEM BUILD v2.0',
  },
}
