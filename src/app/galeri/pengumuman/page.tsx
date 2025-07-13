'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  SpeakerWaveIcon, 
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  BellIcon
} from '@heroicons/react/24/outline';

// Data pengumuman dummy untuk demo
const pengumumanData = [
  {
    id: 1,
    title: 'Penutupan Sementara Poliklinik Mata',
    type: 'urgent',
    category: 'Layanan',
    date: '2024-01-15',
    time: '08:00',
    author: 'Humas RSUD M Natsir',
    summary: 'Poliklinik mata akan ditutup sementara tanggal 20-22 Januari 2024 untuk renovasi',
    content: 'Diberitahukan kepada seluruh pasien dan keluarga bahwa Poliklinik Mata RSUD M Natsir akan ditutup sementara mulai tanggal 20-22 Januari 2024 untuk kegiatan renovasi dan peningkatan fasilitas. Pasien yang memiliki jadwal kontrol dapat menghubungi bagian pendaftaran untuk penjadwalan ulang.',
    isActive: true,
    isPinned: true
  },
  {
    id: 2,
    title: 'Jadwal Pelayanan Libur Tahun Baru 2024',
    type: 'info',
    category: 'Jadwal',
    date: '2024-01-10',
    time: '14:30',
    author: 'Bagian Umum',
    summary: 'Informasi jadwal pelayanan selama libur tahun baru 2024',
    content: 'Dalam rangka libur tahun baru 2024, RSUD M Natsir akan melayani sesuai jadwal sebagai berikut: 1) IGD 24 jam normal, 2) Poliklinik tutup 1 Januari 2024, 3) Farmasi buka terbatas jam 08:00-12:00, 4) Laboratorium emergency only.',
    isActive: true,
    isPinned: false
  },
  {
    id: 3,
    title: 'Rekrutmen Tenaga Kesehatan 2024',
    type: 'success',
    category: 'Karir',
    date: '2024-01-08',
    time: '10:15',
    author: 'HRD RSUD M Natsir',
    summary: 'Pembukaan lowongan kerja untuk tenaga kesehatan tahun 2024',
    content: 'RSUD M Natsir membuka kesempatan berkarir untuk: 1) Dokter Spesialis Anak (1 orang), 2) Perawat D3/S1 (5 orang), 3) Analis Laboratorium (2 orang), 4) Radiografer (1 orang). Pendaftaran dibuka hingga 31 Januari 2024.',
    isActive: true,
    isPinned: false
  },
  {
    id: 4,
    title: 'Update Tarif Pelayanan Tahun 2024',
    type: 'info',
    category: 'Tarif',
    date: '2024-01-05',
    time: '16:45',
    author: 'Bagian Keuangan',
    summary: 'Penyesuaian tarif pelayanan kesehatan berlaku mulai 1 Februari 2024',
    content: 'Mulai tanggal 1 Februari 2024, akan berlaku penyesuaian tarif pelayanan kesehatan sesuai dengan Peraturan Daerah terbaru. Detail tarif dapat dilihat di website resmi atau menghubungi bagian informasi.',
    isActive: true,
    isPinned: false
  },
  {
    id: 5,
    title: 'Maintenance Sistem Informasi Rumah Sakit',
    type: 'urgent',
    category: 'Sistem',
    date: '2024-01-03',
    time: '09:20',
    author: 'IT Support',
    summary: 'Maintenance sistem akan dilakukan pada hari Minggu, 7 Januari 2024',
    content: 'Maintenance rutin sistem informasi rumah sakit akan dilakukan pada hari Minggu, 7 Januari 2024 pukul 00:00-06:00 WIB. Selama maintenance, beberapa layanan online mungkin tidak dapat diakses.',
    isActive: false,
    isPinned: false
  },
  {
    id: 6,
    title: 'Program Vaksinasi COVID-19 Booster',
    type: 'success',
    category: 'Kesehatan',
    date: '2024-01-01',
    time: '11:00',
    author: 'Tim Vaksinasi',
    summary: 'Program vaksinasi booster COVID-19 untuk masyarakat umum',
    content: 'RSUD M Natsir menyelenggarakan program vaksinasi COVID-19 booster untuk masyarakat umum setiap hari Selasa dan Kamis pukul 08:00-12:00. Syarat: KTP, kartu vaksin sebelumnya, dan kondisi sehat.',
    isActive: true,
    isPinned: false
  }
];

const categories = ['Semua', 'Layanan', 'Jadwal', 'Karir', 'Tarif', 'Sistem', 'Kesehatan'];
const types = ['Semua', 'urgent', 'info', 'success'];

export default function PengumumanPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedType, setSelectedType] = useState('Semua');
  const [showOnlyActive, setShowOnlyActive] = useState(true);

  const filteredPengumuman = pengumumanData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesType = selectedType === 'Semua' || item.type === selectedType;
    const matchesActive = !showOnlyActive || item.isActive;
    
    return matchesSearch && matchesCategory && matchesType && matchesActive;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <ExclamationTriangleIcon className="w-5 h-5" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5" />;
      case 'success':
        return <CheckCircleIcon className="w-5 h-5" />;
      default:
        return <BellIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-100 text-red-600 border-red-200';
      case 'info':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'success':
        return 'bg-green-100 text-green-600 border-green-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'Penting';
      case 'info':
        return 'Informasi';
      case 'success':
        return 'Pengumuman';
      default:
        return 'Umum';
    }
  };

  // Separate pinned and regular announcements
  const pinnedAnnouncements = filteredPengumuman.filter(item => item.isPinned);
  const regularAnnouncements = filteredPengumuman.filter(item => !item.isPinned);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SpeakerWaveIcon className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pengumuman
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Informasi terkini dan pengumuman penting RSUD M Natsir
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📢 {pengumumanData.filter(item => item.isActive).length} Aktif
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📌 {pengumumanData.filter(item => item.isPinned).length} Disematkan
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                🏥 Resmi RSUD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pengumuman..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <FunnelIcon className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'Semua' ? 'Semua Tipe' : getTypeName(type)}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showOnlyActive}
                  onChange={(e) => setShowOnlyActive(e.target.checked)}
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                Hanya Aktif
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📌 Pengumuman Disematkan
            </h2>
            <div className="space-y-4">
              {pinnedAnnouncements.map((item) => (
                <div key={item.id} className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300`}>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg border ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                              {getTypeName(item.type)}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {item.category}
                            </span>
                            {!item.isActive && (
                              <span className="bg-gray-300 text-gray-600 px-2 py-1 rounded text-xs">
                                Tidak Aktif
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {item.summary}
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-64 text-sm text-gray-500 space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {item.time} WIB
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        {item.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Semua Pengumuman ({regularAnnouncements.length} item)
          </h2>
        </div>

        <div className="space-y-6">
          {regularAnnouncements.map((item) => (
            <div key={item.id} className={`bg-white border rounded-lg p-6 hover:shadow-md transition-shadow duration-300 ${!item.isActive ? 'opacity-60' : ''}`}>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg border ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                          {getTypeName(item.type)}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {item.category}
                        </span>
                        {!item.isActive && (
                          <span className="bg-gray-300 text-gray-600 px-2 py-1 rounded text-xs">
                            Tidak Aktif
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {item.summary}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-64 text-sm text-gray-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    {item.time} WIB
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    {item.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPengumuman.length === 0 && (
          <div className="text-center py-12">
            <SpeakerWaveIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada pengumuman ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter</p>
          </div>
        )}
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Statistik Pengumuman</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {pengumumanData.filter(item => item.type === 'urgent').length}
                </div>
                <div className="text-gray-600">Pengumuman Penting</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {pengumumanData.filter(item => item.isActive).length}
                </div>
                <div className="text-gray-600">Pengumuman Aktif</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-gray-600">Kategori</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
