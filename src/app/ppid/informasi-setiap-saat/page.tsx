'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  DocumentTextIcon,
  ClockIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CalendarIcon,
  InformationCircleIcon,
  HandRaisedIcon,
  DocumentArrowDownIcon,
  PaperClipIcon
} from '@heroicons/react/24/outline';

export default function InformasiSetiapSaatPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);

  const informasiSetiapSaat = [
    {
      id: 1,
      title: 'Struktur Organisasi RSUD M. Natsir',
      category: 'organisasi',
      description: 'Bagan struktur organisasi lengkap beserta tugas dan fungsi setiap unit kerja di RSUD M. Natsir.',
      lastUpdated: '2024-11-01',
      fileSize: '1.8 MB',
      accessCount: 2450,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 2,
      title: 'Profil Direksi dan Manajemen',
      category: 'organisasi',
      description: 'Profil lengkap direktur, wakil direktur, dan jajaran manajemen RSUD M. Natsir.',
      lastUpdated: '2024-10-15',
      fileSize: '2.3 MB',
      accessCount: 1890,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 3,
      title: 'Daftar Tarif Layanan Kesehatan',
      category: 'tarif',
      description: 'Daftar lengkap tarif seluruh layanan kesehatan yang tersedia di RSUD M. Natsir.',
      lastUpdated: '2024-12-01',
      fileSize: '3.2 MB',
      accessCount: 3210,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 4,
      title: 'Standar Pelayanan Minimal (SPM)',
      category: 'pelayanan',
      description: 'Dokumen standar pelayanan minimal yang menjadi acuan kualitas layanan RSUD M. Natsir.',
      lastUpdated: '2024-09-20',
      fileSize: '2.7 MB',
      accessCount: 1560,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 5,
      title: 'Laporan Pengadaan Barang dan Jasa',
      category: 'pengadaan',
      description: 'Laporan transparan pengadaan barang dan jasa tahun 2024 sesuai ketentuan yang berlaku.',
      lastUpdated: '2024-11-25',
      fileSize: '4.1 MB',
      accessCount: 890,
      type: 'PDF',
      availability: 'Perlu Permohonan',
      requestTime: '3-7 hari'
    },
    {
      id: 6,
      title: 'Data Statistik Pasien dan Layanan',
      category: 'statistik',
      description: 'Data statistik komprehensif mengenai kunjungan pasien dan pemanfaatan layanan kesehatan.',
      lastUpdated: '2024-11-30',
      fileSize: '2.9 MB',
      accessCount: 1780,
      type: 'Excel',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 7,
      title: 'Rencana Kerja dan Anggaran (RKA)',
      category: 'keuangan',
      description: 'Dokumen perencanaan kerja dan anggaran RSUD M. Natsir untuk periode berjalan.',
      lastUpdated: '2024-08-10',
      fileSize: '5.3 MB',
      accessCount: 650,
      type: 'PDF',
      availability: 'Perlu Permohonan',
      requestTime: '7-14 hari'
    },
    {
      id: 8,
      title: 'Daftar Fasilitas dan Peralatan Medis',
      category: 'fasilitas',
      description: 'Inventaris lengkap fasilitas dan peralatan medis yang tersedia di RSUD M. Natsir.',
      lastUpdated: '2024-10-05',
      fileSize: '3.7 MB',
      accessCount: 1340,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    },
    {
      id: 9,
      title: 'Prosedur Pengaduan dan Penyelesaian',
      category: 'pelayanan',
      description: 'Alur dan prosedur lengkap untuk pengaduan masyarakat serta mekanisme penyelesaiannya.',
      lastUpdated: '2024-09-15',
      fileSize: '1.5 MB',
      accessCount: 2100,
      type: 'PDF',
      availability: 'Tersedia',
      requestTime: 'Langsung'
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Kategori', icon: FolderOpenIcon, count: informasiSetiapSaat.length },
    { value: 'organisasi', label: 'Organisasi', icon: UserGroupIcon, count: 2 },
    { value: 'tarif', label: 'Tarif', icon: CurrencyDollarIcon, count: 1 },
    { value: 'pelayanan', label: 'Pelayanan', icon: BuildingOfficeIcon, count: 2 },
    { value: 'pengadaan', label: 'Pengadaan', icon: DocumentTextIcon, count: 1 },
    { value: 'statistik', label: 'Statistik', icon: ChartBarIcon, count: 1 },
    { value: 'keuangan', label: 'Keuangan', icon: CurrencyDollarIcon, count: 1 },
    { value: 'fasilitas', label: 'Fasilitas', icon: BuildingOfficeIcon, count: 1 }
  ];

  const getAvailabilityStyle = (availability: string) => {
    switch (availability) {
      case 'Tersedia':
        return 'bg-green-100 text-green-800';
      case 'Perlu Permohonan':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInformasi = informasiSetiapSaat.filter(item => {
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

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-8 h-full transform rotate-6">
            {[...Array(64)].map((_, i) => (
              <FolderOpenIcon key={i} className="w-10 h-10 text-white animate-pulse" style={{animationDelay: `${i * 0.15}s`}} />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-purple-200 font-medium text-lg">PPID RSUD M. Natsir</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Informasi Setiap Saat
              <span className="block text-blue-300">Akses Kapan Saja</span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed max-w-3xl">
              Akses informasi publik yang tersedia setiap saat sesuai kebutuhan dan permintaan masyarakat
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{informasiSetiapSaat.filter(item => item.availability === 'Tersedia').length}</div>
                <div className="text-purple-200 text-sm">Tersedia Langsung</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{categories.length - 1}</div>
                <div className="text-purple-200 text-sm">Kategori</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-purple-200 text-sm">Akses Online</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 right-5 w-12 h-12 border-2 border-white/30 rounded-full"></div>
      </div>

      {/* Quick Access Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <InformationCircleIcon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">
                {informasiSetiapSaat.filter(item => item.availability === 'Tersedia').length} informasi tersedia untuk diakses langsung
              </span>
            </div>
            <button 
              onClick={() => setShowRequestForm(true)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <HandRaisedIcon className="w-4 h-4" />
              <span>Ajukan Permohonan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {/* Search Bar */}
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari informasi yang Anda butuhkan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kategori Informasi</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex items-center gap-2 p-3 rounded-lg font-medium transition-all duration-300 text-left ${
                        selectedCategory === category.value
                          ? 'bg-purple-600 text-white shadow-lg scale-105'
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

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredInformasi.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DocumentTextIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityStyle(item.availability)}`}>
                          {item.availability}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(item.lastUpdated)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PaperClipIcon className="w-4 h-4" />
                    <span>{item.fileSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    <span>{formatNumber(item.accessCount)} akses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{item.requestTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {item.availability === 'Tersedia' ? (
                    <>
                      <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>Lihat</span>
                      </button>
                      <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        <span>Unduh</span>
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => setShowRequestForm(true)}
                      className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <HandRaisedIcon className="w-4 h-4" />
                      <span>Ajukan Permohonan</span>
                    </button>
                  )}
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Informasi tidak ditemukan</h3>
            <p className="text-gray-600 mb-4">Coba ubah kata kunci pencarian atau kategori</p>
            <button 
              onClick={() => setShowRequestForm(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Ajukan Permohonan Informasi Khusus
            </button>
          </div>
        )}

        {/* Request Information Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <DocumentArrowDownIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Tidak Menemukan Informasi yang Dicari?
          </h3>
          <p className="text-purple-100 mb-6 text-lg max-w-2xl mx-auto">
            Ajukan permohonan informasi sesuai kebutuhan Anda. Tim PPID akan memproses dalam waktu sesuai ketentuan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowRequestForm(true)}
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ajukan Permohonan Informasi
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Panduan Permohonan
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {formatNumber(informasiSetiapSaat.reduce((sum, item) => sum + item.accessCount, 0))}
            </div>
            <div className="text-gray-700">Total Akses</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {informasiSetiapSaat.filter(item => item.availability === 'Tersedia').length}
            </div>
            <div className="text-gray-700">Tersedia Langsung</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700">Akses Online</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {informasiSetiapSaat.filter(item => item.availability === 'Perlu Permohonan').length}
            </div>
            <div className="text-gray-700">Perlu Permohonan</div>
          </div>
        </div>

        {/* Information Guide */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
            <InformationCircleIcon className="w-5 h-5" />
            Panduan Akses Informasi
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Informasi Tersedia Langsung:</h5>
              <ul className="space-y-1 text-blue-600 text-sm">
                <li>• Dapat diakses dan diunduh langsung</li>
                <li>• Tidak memerlukan permohonan khusus</li>
                <li>• Tersedia dalam format digital</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Informasi Perlu Permohonan:</h5>
              <ul className="space-y-1 text-blue-600 text-sm">
                <li>• Memerlukan pengajuan permohonan resmi</li>
                <li>• Proses 3-14 hari kerja</li>
                <li>• Sesuai ketentuan peraturan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Request Form Modal - Placeholder */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Form Permohonan Informasi</h3>
            <p className="text-gray-600 mb-4">
              Fitur form permohonan akan segera tersedia. Sementara ini, silakan hubungi PPID langsung.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowRequestForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Tutup
              </button>
              <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Hubungi PPID
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
