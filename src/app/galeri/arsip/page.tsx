'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  CalendarDaysIcon, 
  DocumentTextIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

// Data arsip dummy untuk demo
const arsipData = [
  {
    id: 1,
    title: 'Laporan Tahunan RSUD M Natsir 2023',
    type: 'document',
    category: 'Laporan',
    date: '2023-12-15',
    size: '2.5 MB',
    description: 'Laporan tahunan kegiatan dan kinerja rumah sakit tahun 2023',
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Dokumentasi Pelantikan Direksi Baru',
    type: 'image',
    category: 'Acara',
    date: '2023-11-20',
    size: '15.2 MB',
    description: 'Koleksi foto pelantikan direksi periode 2023-2028',
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Video Profil RSUD M Natsir',
    type: 'video',
    category: 'Promosi',
    date: '2023-10-10',
    size: '125 MB',
    description: 'Video profil rumah sakit untuk keperluan promosi dan edukasi',
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Sertifikat Akreditasi SNARS 2023',
    type: 'document',
    category: 'Sertifikat',
    date: '2023-09-05',
    size: '1.8 MB',
    description: 'Sertifikat akreditasi SNARS edisi 2 tahun 2023',
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'Album Kegiatan Bakti Sosial',
    type: 'image',
    category: 'Kegiatan',
    date: '2023-08-17',
    size: '8.7 MB',
    description: 'Dokumentasi kegiatan bakti sosial dalam rangka HUT RI',
    image: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Standar Operasional Prosedur 2023',
    type: 'document',
    category: 'SOP',
    date: '2023-07-01',
    size: '4.2 MB',
    description: 'Kumpulan SOP terbaru untuk seluruh unit kerja',
    image: '/api/placeholder/300/200'
  }
];

const categories = ['Semua', 'Laporan', 'Acara', 'Promosi', 'Sertifikat', 'Kegiatan', 'SOP'];
const types = ['Semua', 'document', 'image', 'video'];

export default function ArsipPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedType, setSelectedType] = useState('Semua');

  const filteredArsip = arsipData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesType = selectedType === 'Semua' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <DocumentTextIcon className="w-5 h-5" />;
      case 'image':
        return <PhotoIcon className="w-5 h-5" />;
      case 'video':
        return <VideoCameraIcon className="w-5 h-5" />;
      default:
        return <DocumentTextIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'document':
        return 'bg-blue-100 text-blue-600';
      case 'image':
        return 'bg-green-100 text-green-600';
      case 'video':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Arsip Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Pusat dokumentasi dan arsip RSUD M Natsir Solok
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📄 {arsipData.filter(item => item.type === 'document').length} Dokumen
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                🖼️ {arsipData.filter(item => item.type === 'image').length} Album Foto
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                🎥 {arsipData.filter(item => item.type === 'video').length} Video
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari arsip..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <FunnelIcon className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'Semua' ? 'Semua Tipe' : type === 'document' ? 'Dokumen' : type === 'image' ? 'Gambar' : 'Video'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Hasil Pencarian ({filteredArsip.length} item)
          </h2>
        </div>

        {/* Arsip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArsip.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                  {item.type === 'document' ? 'Dokumen' : item.type === 'image' ? 'Gambar' : 'Video'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {item.size}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  
                  <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArsip.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <DocumentTextIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada arsip ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Arsip Digital</h2>
            <p className="text-gray-600 mb-8">
              Arsip digital RSUD M Natsir menyimpan berbagai dokumen penting, dokumentasi kegiatan, 
              dan materi promosi untuk mendukung transparansi dan akuntabilitas pelayanan kesehatan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <DocumentTextIcon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Dokumen Resmi</h3>
                <p className="text-gray-600 text-sm">Laporan, sertifikat, dan dokumen resmi lainnya</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <PhotoIcon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Dokumentasi Foto</h3>
                <p className="text-gray-600 text-sm">Album kegiatan dan dokumentasi acara penting</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <VideoCameraIcon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Konten Video</h3>
                <p className="text-gray-600 text-sm">Video profil, edukasi, dan promosi rumah sakit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
