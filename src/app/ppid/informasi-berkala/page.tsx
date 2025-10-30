'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  DocumentTextIcon,
  CalendarIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  FolderIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function InformasiBerkalaPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const informasiBerkala = [
    {
      id: 1,
      title: 'Laporan Kinerja RSUD M. Natsir 2024',
      category: 'laporan-kinerja',
      description: 'Laporan tahunan kinerja dan capaian RSUD M. Natsir periode 2024',
      publishDate: '2024-12-01',
      fileSize: '2.5 MB',
      downloadCount: 1250,
      type: 'PDF',
      isNew: true
    },
    {
      id: 2,
      title: 'Profil RSUD M. Natsir 2024',
      category: 'profil',
      description: 'Profil lengkap rumah sakit meliputi visi, misi, struktur organisasi, dan fasilitas',
      publishDate: '2024-11-15',
      fileSize: '4.1 MB',
      downloadCount: 890,
      type: 'PDF',
      isNew: false
    },
    {
      id: 3,
      title: 'Rencana Strategis 2024-2029',
      category: 'renstra',
      description: 'Dokumen perencanaan strategis jangka menengah RSUD M. Natsir',
      publishDate: '2024-10-20',
      fileSize: '3.8 MB',
      downloadCount: 654,
      type: 'PDF',
      isNew: false
    },
    {
      id: 4,
      title: 'Laporan Keuangan Semester I 2024',
      category: 'keuangan',
      description: 'Laporan keuangan semester pertama tahun anggaran 2024',
      publishDate: '2024-09-30',
      fileSize: '1.9 MB',
      downloadCount: 432,
      type: 'PDF',
      isNew: false
    },
    {
      id: 5,
      title: 'Data Statistik Pelayanan 2024',
      category: 'statistik',
      description: 'Data statistik pelayanan kesehatan dan kunjungan pasien tahun 2024',
      publishDate: '2024-11-10',
      fileSize: '1.2 MB',
      downloadCount: 789,
      type: 'PDF',
      isNew: true
    },
    {
      id: 6,
      title: 'Prosedur Pelayanan Publik',
      category: 'prosedur',
      description: 'Standar operasional prosedur pelayanan publik di RSUD M. Natsir',
      publishDate: '2024-08-15',
      fileSize: '2.1 MB',
      downloadCount: 1100,
      type: 'PDF',
      isNew: false
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Kategori', icon: FolderIcon, count: informasiBerkala.length },
    { value: 'laporan-kinerja', label: 'Laporan Kinerja', icon: DocumentTextIcon, count: 1 },
    { value: 'profil', label: 'Profil', icon: UserGroupIcon, count: 1 },
    { value: 'renstra', label: 'Renstra', icon: ClockIcon, count: 1 },
    { value: 'keuangan', label: 'Keuangan', icon: DocumentTextIcon, count: 1 },
    { value: 'statistik', label: 'Statistik', icon: DocumentTextIcon, count: 1 },
    { value: 'prosedur', label: 'Prosedur', icon: DocumentTextIcon, count: 1 }
  ];

  const filteredInformasi = informasiBerkala.filter(item => {
    const matchesCategory = selectedCategory === 'semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full transform rotate-12">
            {[...Array(144)].map((_, i) => (
              <DocumentTextIcon key={i} className="w-6 h-6 text-white animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <DocumentTextIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-blue-200 font-medium text-lg">PPID RSUD M. Natsir</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Informasi Berkala
              <span className="block text-blue-300">Transparansi Publik</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Akses mudah ke dokumen dan informasi publik yang wajib disediakan secara berkala oleh RSUD M. Natsir
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{informasiBerkala.length}</div>
                <div className="text-blue-200 text-sm">Dokumen Tersedia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{categories.length - 1}</div>
                <div className="text-blue-200 text-sm">Kategori</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Akses Online</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-5 w-8 h-8 border border-white/20 rounded-lg"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {/* Search Bar */}
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari dokumen atau informasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Kategori</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex items-center gap-2 p-3 rounded-lg font-medium transition-all duration-300 text-left ${
                        selectedCategory === category.value
                          ? 'bg-blue-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <div>
                        <div className="text-sm font-medium">{category.label}</div>
                        <div className="text-xs opacity-75">{category.count} item</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-6">
          {filteredInformasi.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Document Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          {item.isNew && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              Baru
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{formatDate(item.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DocumentTextIcon className="w-4 h-4" />
                            <span>{item.type} • {item.fileSize}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EyeIcon className="w-4 h-4" />
                            <span>{item.downloadCount.toLocaleString()} unduhan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 lg:flex-col lg:w-auto w-full">
                    <button className="flex-1 lg:flex-none bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <EyeIcon className="w-4 h-4" />
                      <span>Lihat</span>
                    </button>
                    <button className="flex-1 lg:flex-none bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      <span>Unduh</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredInformasi.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada dokumen ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Butuh Informasi Lebih Lanjut?
          </h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Tim PPID RSUD M. Natsir siap membantu Anda mengakses informasi publik yang dibutuhkan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ajukan Permohonan Informasi
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Hubungi PPID
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-3">Informasi Penting</h4>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Semua dokumen tersedia dalam format PDF dan dapat diunduh secara gratis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Informasi berkala diperbarui sesuai dengan ketentuan peraturan perundang-undangan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Untuk informasi yang tidak tersedia di website, silakan ajukan permohonan informasi</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
