'use client';

/**
 * Halaman Info Publik - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Informasi publik sesuai UU No. 14 Tahun 2008
 */

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  InformationCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  EyeIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

// Data informasi publik dummy
const informasiPublikData = [
  {
    id: 1,
    title: 'Laporan Keuangan Audited 2023',
    category: 'berkala',
    type: 'Laporan Keuangan',
    date: '2024-03-15',
    size: '2.8 MB',
    format: 'PDF',
    description: 'Laporan keuangan tahunan yang telah diaudit oleh akuntan publik independen',
    downloads: 1250,
    status: 'published',
    isHighlight: true
  },
  {
    id: 2,
    title: 'Profil Rumah Sakit dan Struktur Organisasi',
    category: 'setiap-saat',
    type: 'Profil Organisasi',
    date: '2024-01-10',
    size: '1.5 MB',
    format: 'PDF',
    description: 'Informasi lengkap profil rumah sakit, visi misi, dan struktur organisasi',
    downloads: 890,
    status: 'published',
    isHighlight: false
  },
  {
    id: 3,
    title: 'Daftar Informasi Publik (DIP) 2024',
    category: 'setiap-saat',
    type: 'Daftar Informasi',
    date: '2024-01-01',
    size: '950 KB',
    format: 'PDF',
    description: 'Daftar lengkap informasi publik yang wajib disediakan dan dapat diakses masyarakat',
    downloads: 456,
    status: 'published',
    isHighlight: true
  },
  {
    id: 4,
    title: 'Laporan Kinerja Triwulan IV 2023',
    category: 'berkala',
    type: 'Laporan Kinerja',
    date: '2024-01-20',
    size: '3.2 MB',
    format: 'PDF',
    description: 'Laporan capaian kinerja rumah sakit triwulan keempat tahun 2023',
    downloads: 234,
    status: 'published',
    isHighlight: false
  },
  {
    id: 5,
    title: 'Informasi Tarif Pelayanan Kesehatan',
    category: 'serta-merta',
    type: 'Tarif Layanan',
    date: '2024-02-01',
    size: '1.1 MB',
    format: 'PDF',
    description: 'Daftar tarif pelayanan kesehatan yang berlaku saat ini',
    downloads: 2100,
    status: 'published',
    isHighlight: true
  },
  {
    id: 6,
    title: 'Rencana Strategis (Renstra) 2024-2029',
    category: 'setiap-saat',
    type: 'Perencanaan',
    date: '2024-01-15',
    size: '4.5 MB',
    format: 'PDF',
    description: 'Dokumen rencana strategis pembangunan rumah sakit periode 2024-2029',
    downloads: 345,
    status: 'published',
    isHighlight: false
  },
  {
    id: 7,
    title: 'Standar Operasional Prosedur (SOP) Pelayanan',
    category: 'setiap-saat',
    type: 'SOP',
    date: '2024-01-08',
    size: '2.7 MB',
    format: 'PDF',
    description: 'Kumpulan SOP pelayanan untuk menjamin kualitas dan standar pelayanan',
    downloads: 567,
    status: 'published',
    isHighlight: false
  },
  {
    id: 8,
    title: 'Pengumuman Pengadaan Barang dan Jasa',
    category: 'serta-merta',
    type: 'Pengadaan',
    date: '2024-03-01',
    size: '800 KB',
    format: 'PDF',
    description: 'Informasi pengadaan barang dan jasa yang sedang berlangsung',
    downloads: 123,
    status: 'published',
    isHighlight: false
  }
];

const categories = [
  { id: 'semua', name: 'Semua Informasi', icon: InformationCircleIcon },
  { id: 'berkala', name: 'Informasi Berkala', icon: ClockIcon },
  { id: 'serta-merta', name: 'Serta Merta', icon: ExclamationTriangleIcon },
  { id: 'setiap-saat', name: 'Setiap Saat', icon: EyeIcon }
];

const statistik = [
  { label: 'Total Dokumen', value: '150+', icon: DocumentTextIcon, color: 'text-blue-600' },
  { label: 'Unduhan Bulan Ini', value: '2,450', icon: ArrowDownTrayIcon, color: 'text-green-600' },
  { label: 'Pengunjung Aktif', value: '1,200', icon: UserGroupIcon, color: 'text-purple-600' },
  { label: 'Update Terakhir', value: '1 Hari', icon: CalendarDaysIcon, color: 'text-orange-600' }
];

const jenisInformasi = [
  {
    title: 'Informasi Berkala',
    description: 'Informasi yang harus diumumkan secara berkala',
    icon: ClockIcon,
    color: 'bg-blue-100 text-blue-600',
    items: ['Laporan Keuangan', 'Laporan Kinerja', 'Laporan Tahunan', 'Data Statistik']
  },
  {
    title: 'Informasi Serta Merta',
    description: 'Informasi yang harus diumumkan segera',
    icon: ExclamationTriangleIcon,
    color: 'bg-red-100 text-red-600',
    items: ['Kebijakan Baru', 'Perubahan Tarif', 'Pengumuman Penting', 'Info Darurat']
  },
  {
    title: 'Informasi Setiap Saat',
    description: 'Informasi yang selalu tersedia untuk diakses',
    icon: EyeIcon,
    color: 'bg-green-100 text-green-600',
    items: ['Profil Organisasi', 'SOP Pelayanan', 'Struktur Organisasi', 'Peraturan']
  }
];

export default function InfoPublikPage() {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = informasiPublikData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'semua' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const highlightedItems = filteredData.filter(item => item.isHighlight);
  const regularItems = filteredData.filter(item => !item.isHighlight);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'berkala':
        return <ClockIcon className="w-4 h-4" />;
      case 'serta-merta':
        return <ExclamationTriangleIcon className="w-4 h-4" />;
      case 'setiap-saat':
        return <EyeIcon className="w-4 h-4" />;
      default:
        return <InformationCircleIcon className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'berkala':
        return 'bg-blue-100 text-blue-600';
      case 'serta-merta':
        return 'bg-red-100 text-red-600';
      case 'setiap-saat':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'berkala':
        return 'Berkala';
      case 'serta-merta':
        return 'Serta Merta';
      case 'setiap-saat':
        return 'Setiap Saat';
      default:
        return 'Umum';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-8 gap-8 h-full opacity-10">
              {[...Array(32)].map((_, i) => (
                <DocumentTextIcon 
                  key={i} 
                  className="w-8 h-8 text-white animate-pulse" 
                  style={{animationDelay: `${i * 0.2}s`}} 
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <InformationCircleIcon className="w-16 h-16 text-blue-300 animate-bounce" />
                <DocumentTextIcon className="w-16 h-16 text-blue-300 animate-bounce" />
                <ShieldCheckIcon className="w-16 h-16 text-blue-300 animate-bounce" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Informasi <span className="text-blue-300">Publik</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Akses informasi publik sesuai UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  🏛️ Transparansi
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  📊 Akuntabilitas
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  🔍 Keterbukaan
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistik.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jenis Informasi Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Jenis <span className="text-blue-600">Informasi Publik</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Informasi publik dikategorikan berdasarkan sifat dan waktu pengumumannya
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {jenisInformasi.map((jenis, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 ${jenis.color} rounded-xl flex items-center justify-center mb-6`}>
                    <jenis.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{jenis.title}</h3>
                  <p className="text-gray-600 mb-6">{jenis.description}</p>
                  
                  <div className="space-y-2">
                    {jenis.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-grow">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari informasi publik..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Highlighted Documents */}
            {highlightedItems.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  ⭐ Dokumen Unggulan
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {highlightedItems.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {getCategoryIcon(item.category)}
                          {getCategoryName(item.category)}
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          Unggulan
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <CalendarDaysIcon className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString('id-ID')}
                          </div>
                          <span>{item.size}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          {item.downloads.toLocaleString()}
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        Download {item.format}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Documents */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Semua Dokumen ({regularItems.length} dokumen)
              </h2>
              
              <div className="space-y-4">
                {regularItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex flex-wrap gap-2">
                            <span className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                              {getCategoryIcon(item.category)}
                              {getCategoryName(item.category)}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <CalendarDaysIcon className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <DocumentTextIcon className="w-4 h-4" />
                            {item.format} • {item.size}
                          </div>
                          <div className="flex items-center gap-1">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                            {item.downloads.toLocaleString()} unduhan
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-48 flex flex-col gap-2">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                          <EyeIcon className="w-4 h-4" />
                          Lihat
                        </button>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <DocumentTextIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada dokumen ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Pertanyaan <span className="text-blue-600">Umum</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-3">Bagaimana cara mengakses informasi publik?</h3>
                  <p className="text-gray-600 text-sm">
                    Anda dapat mengunduh dokumen yang tersedia atau mengajukan permohonan informasi publik 
                    melalui formulir yang disediakan.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-3">Apakah ada biaya untuk mengakses informasi?</h3>
                  <p className="text-gray-600 text-sm">
                    Sebagian besar informasi dapat diakses secara gratis. Biaya mungkin dikenakan 
                    untuk penggandaan dokumen fisik.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-3">Berapa lama waktu penyediaan informasi?</h3>
                  <p className="text-gray-600 text-sm">
                    Sesuai UU KIP, kami menyediakan informasi dalam waktu maksimal 10 hari kerja 
                    untuk permohonan tertulis.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-3">Bagaimana cara mengajukan keberatan?</h3>
                  <p className="text-gray-600 text-sm">
                    Jika permohonan ditolak, Anda dapat mengajukan keberatan melalui prosedur 
                    yang telah ditetapkan dalam regulasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <InformationCircleIcon className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim PPID kami siap membantu Anda mengakses informasi publik yang dibutuhkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ppid"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Hubungi PPID
              </a>
              <a
                href="mailto:ppid@rsudmnatsir.go.id"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PageLayout>
  );
}
