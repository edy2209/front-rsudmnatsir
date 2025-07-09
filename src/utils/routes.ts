// File untuk mengatur semua routing aplikasi RSUD M. Natsir

export const routes = {
  // Main routes
  home: '/',
  
  // Fasilitas dan Layanan
  fasilitasLayanan: '/fasilitas-layanan',
  layananUnggulan: '/fasilitas-layanan/layanan-unggulan',
  
  // Rawat Jalan
  rawatJalan: '/fasilitas-layanan/rawat-jalan',
  klinikPenyakitDalam: '/fasilitas-layanan/rawat-jalan/klinik-penyakit-dalam',
  klinikBedah: '/fasilitas-layanan/rawat-jalan/klinik-bedah',
  klinikMata: '/fasilitas-layanan/rawat-jalan/klinik-mata',
  klinikTHT: '/fasilitas-layanan/rawat-jalan/klinik-tht',
  klinikNeurologi: '/fasilitas-layanan/rawat-jalan/klinik-neurologi',
  klinikKebidanan: '/fasilitas-layanan/rawat-jalan/klinik-kebidanan',
  klinikAnak: '/fasilitas-layanan/rawat-jalan/klinik-anak',
  klinikGizi: '/fasilitas-layanan/rawat-jalan/klinik-gizi',
  klinikJantung: '/fasilitas-layanan/rawat-jalan/klinik-jantung',
  klinikParu: '/fasilitas-layanan/rawat-jalan/klinik-paru',
  klinikVCT: '/fasilitas-layanan/rawat-jalan/klinik-vct',
  
  // Rawat Inap
  rawatInap: '/fasilitas-layanan/rawat-inap',
  rawatInapInterneWanita: '/fasilitas-layanan/rawat-inap/interne-wanita',
  rawatInapInternePria: '/fasilitas-layanan/rawat-inap/interne-pria',
  rawatInapBedah: '/fasilitas-layanan/rawat-inap/bedah',
  rawatInapMata: '/fasilitas-layanan/rawat-inap/mata',
  rawatInapTHT: '/fasilitas-layanan/rawat-inap/tht',
  rawatInapNeurologi: '/fasilitas-layanan/rawat-inap/neurologi',
  rawatInapKebidanan: '/fasilitas-layanan/rawat-inap/kebidanan',
  rawatInapAnak: '/fasilitas-layanan/rawat-inap/anak',
  rawatInapJantung: '/fasilitas-layanan/rawat-inap/jantung',
  rawatInapParu: '/fasilitas-layanan/rawat-inap/paru',
  
  // Fasilitas Umum
  fasilitasUmum: '/fasilitas-layanan/fasilitas-umum',
  apotik: '/fasilitas-layanan/fasilitas-umum/apotik',
  masjid: '/fasilitas-layanan/fasilitas-umum/masjid',
  kantin: '/fasilitas-layanan/fasilitas-umum/kantin',
  parkir: '/fasilitas-layanan/fasilitas-umum/parkir',
  
  // Pelayanan Penunjang
  pelayananPenunjang: '/fasilitas-layanan/pelayanan-penunjang',
  laboratorium: '/fasilitas-layanan/pelayanan-penunjang/laboratorium',
  labPatologiKlinik: '/fasilitas-layanan/pelayanan-penunjang/laboratorium/patologi-klinik',
  labPatologiAnatomik: '/fasilitas-layanan/pelayanan-penunjang/laboratorium/patologi-anatomik',
  radiologi: '/fasilitas-layanan/pelayanan-penunjang/radiologi',
  kamarOperasi: '/fasilitas-layanan/pelayanan-penunjang/kamar-operasi',
  fisiotherapi: '/fasilitas-layanan/pelayanan-penunjang/fisiotherapi',
  
  // Alur Pelayanan
  alurPelayanan: '/fasilitas-layanan/alur-pelayanan',
  alurRawatJalan: '/fasilitas-layanan/alur-pelayanan/rawat-jalan',
  alurRawatInap: '/fasilitas-layanan/alur-pelayanan/rawat-inap',
  alurICU: '/fasilitas-layanan/alur-pelayanan/icu',
  alurFarmasi: '/fasilitas-layanan/alur-pelayanan/farmasi',
  alurLaboratorium: '/fasilitas-layanan/alur-pelayanan/laboratorium',
  alurPONEK: '/fasilitas-layanan/alur-pelayanan/ponek',
  alurAdmission: '/fasilitas-layanan/alur-pelayanan/admission',
  alurBankDarah: '/fasilitas-layanan/alur-pelayanan/bank-darah',
  alurRadiologi: '/fasilitas-layanan/alur-pelayanan/radiologi',
  
  // Tentang Kami
  tentangKami: '/tentang-kami',
  visiMisiLogo: '/tentang-kami/visi-misi-logo',
  penghargaanPrestasi: '/tentang-kami/penghargaan-prestasi',
  denahLokasi: '/tentang-kami/denah-lokasi',
  manajemen: '/tentang-kami/manajemen',
  sejarah: '/tentang-kami/sejarah',
  profil: '/tentang-kami/profil',
  kerjaSama: '/tentang-kami/kerja-sama',
  
  // Galeri
  galeri: '/galeri',
  galeriVideo: '/galeri/video',
  galeriImages: '/galeri/images',
  agendaKegiatan: '/galeri/agenda-kegiatan',
  arsip: '/galeri/arsip',
  pengumuman: '/galeri/pengumuman',
  
  // Info Publik
  infoPublik: '/info-publik',
  
  // Sakip
  sakip: '/sakip',
  
  // WBK dan WBBM
  wbkWbbm: '/wbk-wbbm',
  whistleblowerSystem: '/wbk-wbbm/whistleblower-system',
  gratifikasi: '/wbk-wbbm/gratifikasi',
  benturanKepentingan: '/wbk-wbbm/benturan-kepentingan',
  
  // Informasi Kesehatan
  informasiKesehatan: '/informasi-kesehatan',
  mediaPromkes: '/informasi-kesehatan/media-promkes',
  leaflet: '/informasi-kesehatan/media-promkes/leaflet',
  banner: '/informasi-kesehatan/media-promkes/banner',
  poster: '/informasi-kesehatan/media-promkes/poster',
  bukuSaku: '/informasi-kesehatan/media-promkes/buku-saku',
  inovasi: '/informasi-kesehatan/inovasi',
  videoKesehatan: '/informasi-kesehatan/video-kesehatan',
  
  // PPID
  ppid: '/ppid',
  informasiBerkala: '/ppid/informasi-berkala',
  informasiSetiapSaat: '/ppid/informasi-setiap-saat',
  informasiSertaMerta: '/ppid/informasi-serta-merta',
  
  // About & Info (existing)
  about: '/about',
  contact: '/contact',
  services: '/services',
  
  // Appointments - untuk janji temu
  appointments: '/appointments',
} as const;

export type RouteKey = keyof typeof routes;

// Helper function untuk navigasi
export const getRoute = (key: RouteKey): string => {
  const route = routes[key];
  return route as string;
};

// Menu items untuk navigation beranda
export const mainMenuItems = [
  { label: 'Beranda', route: routes.home, icon: 'home' },
  { label: 'Tentang Kami', route: routes.tentangKami, icon: 'about' },
  { label: 'Fasilitas & Layanan', route: routes.fasilitasLayanan, icon: 'services' },
  { label: 'Galeri', route: routes.galeri, icon: 'gallery' },
  { label: 'Info Publik', route: routes.infoPublik, icon: 'info' },
  { label: 'PPID', route: routes.ppid, icon: 'ppid' },
];

export const settingsMenuItems = [
  { label: 'Kontak', route: routes.contact, icon: 'contact' },
  { label: 'About', route: routes.about, icon: 'info' },
  { label: 'Services', route: routes.services, icon: 'services' },
];
