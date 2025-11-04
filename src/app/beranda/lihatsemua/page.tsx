'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  NewspaperIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

// API Base URL untuk gambar
const IMAGE_API_BASE = 'https://picsum.photos/seed';

// Data berita lengkap untuk halaman Lihat Semua
const newsData = [
  {
    id: 1,
    title: 'RSUD M Natsir Raih Akreditasi Paripurna 2024',
    excerpt: 'Pencapaian gemilang RSUD M Natsir Solok dalam meraih akreditasi paripurna dari KARS, menunjukkan komitmen dalam pelayanan kesehatan berkualitas.',
    image: `${IMAGE_API_BASE}/news-accreditation/800/600`,
    category: 'Prestasi',
    author: 'Humas RSUD',
    date: '2024-03-15',
    readTime: '5 menit',
    views: 1245,
    likes: 89,
    tags: ['Akreditasi', 'KARS', 'Prestasi']
  },
  {
    id: 2,
    title: 'Launching Telemedicine untuk Pelayanan Pasien',
    excerpt: 'Inovasi terbaru RSUD M Natsir dengan layanan telemedicine yang memudahkan konsultasi kesehatan jarak jauh bagi masyarakat.',
    image: `${IMAGE_API_BASE}/news-telemedicine/800/600`,
    category: 'Inovasi',
    author: 'Tim IT',
    date: '2024-03-10',
    readTime: '4 menit',
    views: 892,
    likes: 67,
    tags: ['Telemedicine', 'Digital', 'Inovasi']
  },
  {
    id: 3,
    title: 'Operasi Jantung Pertama di RSUD M Natsir',
    excerpt: 'Tim medis RSUD M Natsir berhasil melakukan operasi jantung pertama dengan tingkat keberhasilan tinggi, membuka era baru pelayanan kardiovaskular.',
    image: `${IMAGE_API_BASE}/news-heart-surgery/800/600`,
    category: 'Medis',
    author: 'Dr. Ahmad Syafei',
    date: '2024-03-08',
    readTime: '6 menit',
    views: 2341,
    likes: 156,
    tags: ['Operasi', 'Jantung', 'Medis']
  },
  {
    id: 4,
    title: 'Program Vaksinasi COVID-19 Booster Gratis',
    excerpt: 'RSUD M Natsir menggelar program vaksinasi booster gratis untuk masyarakat umum sebagai upaya penanggulangan pandemi.',
    image: `${IMAGE_API_BASE}/news-vaccination/800/600`,
    category: 'Program',
    author: 'Instalasi Farmasi',
    date: '2024-03-05',
    readTime: '3 menit',
    views: 1567,
    likes: 98,
    tags: ['Vaksinasi', 'COVID-19', 'Kesehatan']
  },
  {
    id: 5,
    title: 'Renovasi Ruang IGD untuk Pelayanan Lebih Baik',
    excerpt: 'Ruang IGD RSUD M Natsir menjalani renovasi total dengan penambahan fasilitas modern untuk meningkatkan kecepatan dan kualitas layanan darurat.',
    image: `${IMAGE_API_BASE}/news-igd-renovation/800/600`,
    category: 'Fasilitas',
    author: 'Manajemen RS',
    date: '2024-03-01',
    readTime: '4 menit',
    views: 1034,
    likes: 72,
    tags: ['Renovasi', 'IGD', 'Fasilitas']
  },
  {
    id: 6,
    title: 'Pelatihan BLS untuk Tenaga Medis',
    excerpt: 'Workshop Basic Life Support (BLS) diselenggarakan untuk meningkatkan kompetensi tenaga medis dalam penanganan gawat darurat.',
    image: `${IMAGE_API_BASE}/news-bls-training/800/600`,
    category: 'Pelatihan',
    author: 'Diklat RS',
    date: '2024-02-28',
    readTime: '5 menit',
    views: 876,
    likes: 54,
    tags: ['BLS', 'Pelatihan', 'SDM']
  },
  {
    id: 7,
    title: 'Kerjasama dengan Universitas untuk Riset Kesehatan',
    excerpt: 'Penandatanganan MOU antara RSUD M Natsir dengan Universitas terkemuka untuk pengembangan riset dan inovasi di bidang kesehatan.',
    image: `${IMAGE_API_BASE}/news-university-partnership/800/600`,
    category: 'Kerjasama',
    author: 'Direktur RSUD',
    date: '2024-02-25',
    readTime: '4 menit',
    views: 1289,
    likes: 91,
    tags: ['MOU', 'Riset', 'Kerjasama']
  },
  {
    id: 8,
    title: 'Bakti Sosial Pemeriksaan Kesehatan Gratis',
    excerpt: 'RSUD M Natsir menggelar bakti sosial pemeriksaan kesehatan gratis di desa-desa terpencil untuk meningkatkan akses kesehatan masyarakat.',
    image: `${IMAGE_API_BASE}/news-social-service/800/600`,
    category: 'Sosial',
    author: 'Tim CSR',
    date: '2024-02-20',
    readTime: '3 menit',
    views: 1445,
    likes: 112,
    tags: ['Baksos', 'Gratis', 'Masyarakat']
  },
  {
    id: 9,
    title: 'Penambahan Alat Medis Canggih di Laboratorium',
    excerpt: 'Investasi besar untuk pengadaan alat laboratorium terkini guna meningkatkan akurasi dan kecepatan pemeriksaan diagnostik.',
    image: `${IMAGE_API_BASE}/news-lab-equipment/800/600`,
    category: 'Fasilitas',
    author: 'Instalasi Lab',
    date: '2024-02-18',
    readTime: '5 menit',
    views: 967,
    likes: 68,
    tags: ['Laboratorium', 'Alat Medis', 'Teknologi']
  },
  {
    id: 10,
    title: 'Seminar Nasional Kesehatan Ibu dan Anak',
    excerpt: 'RSUD M Natsir menjadi tuan rumah seminar nasional dengan tema kesehatan ibu dan anak yang dihadiri ratusan peserta dari seluruh Indonesia.',
    image: `${IMAGE_API_BASE}/news-maternal-seminar/800/600`,
    category: 'Acara',
    author: 'Panitia Seminar',
    date: '2024-02-15',
    readTime: '6 menit',
    views: 1823,
    likes: 134,
    tags: ['Seminar', 'KIA', 'Nasional']
  },
  {
    id: 11,
    title: 'Program Stop TB untuk Masyarakat',
    excerpt: 'Kampanye dan program pencegahan tuberkulosis dengan pemeriksaan gratis dan edukasi kesehatan paru-paru untuk masyarakat.',
    image: `${IMAGE_API_BASE}/news-tb-program/800/600`,
    category: 'Program',
    author: 'Poli Paru',
    date: '2024-02-12',
    readTime: '4 menit',
    views: 734,
    likes: 45,
    tags: ['TB', 'Paru', 'Kampanye']
  },
  {
    id: 12,
    title: 'Kunjungan Gubernur Sumbar ke RSUD M Natsir',
    excerpt: 'Gubernur Sumatera Barat melakukan kunjungan kerja untuk meninjau perkembangan dan memberikan apresiasi terhadap pelayanan rumah sakit.',
    image: `${IMAGE_API_BASE}/news-governor-visit/800/600`,
    category: 'Berita',
    author: 'Humas RSUD',
    date: '2024-02-10',
    readTime: '5 menit',
    views: 2156,
    likes: 178,
    tags: ['Gubernur', 'Kunjungan', 'Pemerintah']
  },
  {
    id: 13,
    title: 'Implementasi Sistem Informasi Rumah Sakit Baru',
    excerpt: 'Go-live sistem informasi manajemen rumah sakit berbasis cloud untuk meningkatkan efisiensi dan integrasi data pelayanan.',
    image: `${IMAGE_API_BASE}/news-simrs/800/600`,
    category: 'Teknologi',
    author: 'IT Department',
    date: '2024-02-08',
    readTime: '4 menit',
    views: 1098,
    likes: 82,
    tags: ['SIMRS', 'Digital', 'Cloud']
  },
  {
    id: 14,
    title: 'Peringatan HUT Kemerdekaan RI di RSUD',
    excerpt: 'Rangkaian acara peringatan HUT RI ke-79 dengan berbagai lomba dan kegiatan untuk memeriahkan kemerdekaan Indonesia.',
    image: `${IMAGE_API_BASE}/news-independence-day/800/600`,
    category: 'Acara',
    author: 'Panitia HUT',
    date: '2024-02-05',
    readTime: '3 menit',
    views: 1345,
    likes: 95,
    tags: ['HUT RI', 'Kemerdekaan', 'Perayaan']
  },
  {
    id: 15,
    title: 'Peluncuran Aplikasi Mobile RSUD M Natsir',
    excerpt: 'Aplikasi mobile resmi untuk memudahkan pasien dalam pendaftaran online, cek jadwal dokter, dan akses informasi kesehatan.',
    image: `${IMAGE_API_BASE}/news-mobile-app/800/600`,
    category: 'Inovasi',
    author: 'Tim Digital',
    date: '2024-02-01',
    readTime: '4 menit',
    views: 1678,
    likes: 123,
    tags: ['Mobile App', 'Digital', 'Layanan']
  },
  {
    id: 16,
    title: 'Workshop Keselamatan Pasien untuk Perawat',
    excerpt: 'Pelatihan intensif tentang patient safety dan pencegahan insiden keselamatan pasien untuk seluruh perawat.',
    image: `${IMAGE_API_BASE}/news-patient-safety/800/600`,
    category: 'Pelatihan',
    author: 'Komite Mutu',
    date: '2024-01-28',
    readTime: '5 menit',
    views: 923,
    likes: 67,
    tags: ['Patient Safety', 'Workshop', 'Perawat']
  },
  {
    id: 17,
    title: 'Penghargaan Pelayanan Terbaik dari Kemenkes',
    excerpt: 'RSUD M Natsir menerima penghargaan pelayanan rumah sakit terbaik dari Kementerian Kesehatan RI untuk kategori rumah sakit tipe B.',
    image: `${IMAGE_API_BASE}/news-award-kemenkes/800/600`,
    category: 'Prestasi',
    author: 'Humas RSUD',
    date: '2024-01-25',
    readTime: '4 menit',
    views: 1876,
    likes: 145,
    tags: ['Penghargaan', 'Kemenkes', 'Prestasi']
  },
  {
    id: 18,
    title: 'Program Deteksi Dini Kanker untuk Wanita',
    excerpt: 'Pemeriksaan mammografi dan pap smear gratis sebagai upaya deteksi dini kanker payudara dan serviks untuk wanita.',
    image: `${IMAGE_API_BASE}/news-cancer-screening/800/600`,
    category: 'Program',
    author: 'Poli Kebidanan',
    date: '2024-01-22',
    readTime: '5 menit',
    views: 1234,
    likes: 98,
    tags: ['Kanker', 'Deteksi Dini', 'Wanita']
  },
  {
    id: 19,
    title: 'Studi Banding dari RS Malaysia',
    excerpt: 'Tim manajemen rumah sakit dari Malaysia melakukan studi banding tentang manajemen pelayanan dan sistem informasi kesehatan.',
    image: `${IMAGE_API_BASE}/news-malaysia-study/800/600`,
    category: 'Kerjasama',
    author: 'Direktur RSUD',
    date: '2024-01-20',
    readTime: '4 menit',
    views: 1456,
    likes: 102,
    tags: ['Studi Banding', 'Malaysia', 'Internasional']
  },
  {
    id: 20,
    title: 'Donor Darah Rutin Pegawai RSUD',
    excerpt: 'Kegiatan donor darah rutin diikuti oleh ratusan pegawai RSUD M Natsir untuk membantu ketersediaan stok darah di PMI.',
    image: `${IMAGE_API_BASE}/news-blood-donation/800/600`,
    category: 'Sosial',
    author: 'Bank Darah',
    date: '2024-01-18',
    readTime: '3 menit',
    views: 989,
    likes: 71,
    tags: ['Donor Darah', 'PMI', 'Kemanusiaan']
  }
];

const categories = ['Semua', 'Prestasi', 'Inovasi', 'Medis', 'Program', 'Fasilitas', 'Pelatihan', 'Kerjasama', 'Sosial', 'Acara', 'Berita', 'Teknologi'];

export default function LihatSemuaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedNews, setLikedNews] = useState<number[]>([]);
  const itemsPerPage = 12;

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Semua' || news.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const toggleLike = (newsId: number) => {
    if (likedNews.includes(newsId)) {
      setLikedNews(likedNews.filter(id => id !== newsId));
    } else {
      setLikedNews([...likedNews, newsId]);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <NewspaperIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Berita & Informasi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Update terkini seputar kegiatan, inovasi, dan pencapaian RSUD M Natsir Solok
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm relative z-20">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📰 {newsData.length} Artikel
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                👁️ {newsData.reduce((total, news) => total + news.views, 0).toLocaleString()} Views
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ❤️ {newsData.reduce((total, news) => total + news.likes, 0)} Likes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-lg sticky top-0 z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Semua Berita ({filteredNews.length} artikel)
          </h2>
          {filteredNews.length > 0 && (
            <p className="text-sm text-gray-600">
              Halaman {currentPage} dari {totalPages}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {currentNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {news.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 leading-tight text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{formatDate(news.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{news.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{news.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs truncate max-w-[100px]">{news.author}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(news.id);
                    }}
                    className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    {likedNews.includes(news.id) ? (
                      <HeartSolidIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    ) : (
                      <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm">{news.likes + (likedNews.includes(news.id) ? 1 : 0)}</span>
                  </button>
                  
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm font-medium">
                    Baca
                    <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <NewspaperIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada berita ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
          </div>
        )}

        {/* Pagination */}
        {filteredNews.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Sebelumnya
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
