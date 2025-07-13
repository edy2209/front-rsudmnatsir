'use client';

/**
 * Halaman Galeri - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Hub galeri multimedia dengan berbagai kategori konten
 */

import React, { useState } from 'react';
import { 
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  MegaphoneIcon,
  FolderIcon,
  ArrowRightIcon,
  EyeIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  itemCount: number;
  lastUpdate: string;
  featured: boolean;
  href: string;
  preview: string[];
}

const galleryCategories: GalleryCategory[] = [
  {
    id: 'images',
    title: 'Galeri Foto',
    description: 'Dokumentasi kegiatan dan fasilitas rumah sakit dalam bentuk foto berkualitas tinggi',
    icon: PhotoIcon,
    color: 'from-blue-500 to-blue-600',
    itemCount: 250,
    lastUpdate: '2 hari yang lalu',
    featured: true,
    href: '/galeri/images',
    preview: ['Fasilitas Medis', 'Kegiatan Pelayanan', 'Tim Medis', 'Infrastruktur']
  },
  {
    id: 'video',
    title: 'Galeri Video',
    description: 'Koleksi video dokumenter, tutorial medis, dan profil layanan rumah sakit',
    icon: VideoCameraIcon,
    color: 'from-red-500 to-red-600',
    itemCount: 45,
    lastUpdate: '1 minggu yang lalu',
    featured: true,
    href: '/galeri/video',
    preview: ['Profil RS', 'Tutorial Medis', 'Patient Stories', 'Virtual Tour']
  },
  {
    id: 'agenda-kegiatan',
    title: 'Agenda Kegiatan',
    description: 'Dokumentasi agenda dan jadwal kegiatan rumah sakit terkini',
    icon: CalendarDaysIcon,
    color: 'from-green-500 to-green-600',
    itemCount: 120,
    lastUpdate: '3 hari yang lalu',
    featured: false,
    href: '/galeri/agenda-kegiatan',
    preview: ['Seminar Medis', 'Pelatihan', 'Sosialisasi', 'Event Kesehatan']
  },
  {
    id: 'pengumuman',
    title: 'Pengumuman',
    description: 'Informasi dan pengumuman penting untuk pasien dan masyarakat',
    icon: MegaphoneIcon,
    color: 'from-yellow-500 to-orange-600',
    itemCount: 35,
    lastUpdate: '1 hari yang lalu',
    featured: true,
    href: '/galeri/pengumuman',
    preview: ['Info Layanan', 'Jadwal Dokter', 'Kebijakan Baru', 'Maintenance']
  },
  {
    id: 'arsip',
    title: 'Arsip Dokumentasi',
    description: 'Koleksi arsip dokumentasi kegiatan dan pencapaian rumah sakit',
    icon: FolderIcon,
    color: 'from-purple-500 to-purple-600',
    itemCount: 180,
    lastUpdate: '5 hari yang lalu',
    featured: false,
    href: '/galeri/arsip',
    preview: ['Arsip Kegiatan', 'Dokumentasi Historis', 'Pencapaian', 'Milestone']
  }
];

const recentHighlights = [
  {
    title: 'Peresmian Unit Hemodialisa Baru',
    type: 'Foto',
    date: '10 Juli 2025',
    views: 1250,
    category: 'images'
  },
  {
    title: 'Virtual Tour Fasilitas ICU',
    type: 'Video',
    date: '8 Juli 2025',
    views: 890,
    category: 'video'
  },
  {
    title: 'Seminar Kesehatan Jantung',
    type: 'Agenda',
    date: '12 Juli 2025',
    views: 650,
    category: 'agenda-kegiatan'
  },
  {
    title: 'Perubahan Jam Operasional',
    type: 'Pengumuman',
    date: '11 Juli 2025',
    views: 2100,
    category: 'pengumuman'
  }
];

const statistics = [
  { label: 'Total Konten', value: '630+' },
  { label: 'Foto Tersedia', value: '250+' },
  { label: 'Video Koleksi', value: '45+' },
  { label: 'Monthly Views', value: '15K+' }
];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? galleryCategories 
    : galleryCategories.filter(cat => selectedCategory === 'featured' ? cat.featured : cat.id === selectedCategory);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-10 gap-6 h-full opacity-10">
              {[...Array(50)].map((_, i) => {
                const icons = [PhotoIcon, VideoCameraIcon, DocumentTextIcon, CalendarDaysIcon];
                const IconComponent = icons[i % icons.length];
                return (
                  <IconComponent 
                    key={i} 
                    className="w-6 h-6 text-white animate-pulse" 
                    style={{animationDelay: `${i * 0.1}s`}} 
                  />
                );
              })}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <PhotoIcon className="w-16 h-16 text-indigo-300 animate-bounce" />
                <ArrowRightIcon className="w-12 h-12 text-purple-300 animate-pulse" />
                <VideoCameraIcon className="w-16 h-16 text-indigo-300 animate-bounce" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Galeri <span className="text-indigo-300">Multimedia</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-indigo-100">
                Jendela visual untuk melihat aktivitas dan pencapaian RSUD M. Natsir Solok
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Dokumentasi Lengkap
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Update Berkala
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  High Quality
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'all', label: 'Semua Kategori' },
                { id: 'featured', label: 'Unggulan' },
                { id: 'images', label: 'Foto' },
                { id: 'video', label: 'Video' },
                { id: 'pengumuman', label: 'Pengumuman' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === filter.id
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <Link key={category.id} href={category.href}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      {category.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Unggulan
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Total Item:</span>
                        <span className="font-semibold text-gray-800">{category.itemCount}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Update Terakhir:</span>
                        <span className="text-green-600 font-medium">{category.lastUpdate}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Preview Konten:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.preview.slice(0, 3).map((item, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                        {category.preview.length > 3 && (
                          <span className="text-indigo-600 text-xs font-medium">
                            +{category.preview.length - 3} lainnya
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-indigo-600 font-medium text-sm group-hover:underline">
                        Lihat Selengkapnya
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Sorotan <span className="text-indigo-600">Terbaru</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Konten terbaru dan paling populer dari berbagai kategori galeri
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentHighlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      highlight.type === 'Foto' ? 'bg-blue-100 text-blue-800' :
                      highlight.type === 'Video' ? 'bg-red-100 text-red-800' :
                      highlight.type === 'Agenda' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {highlight.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <EyeIcon className="w-3 h-3" />
                      <span>{highlight.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                    {highlight.title}
                  </h4>
                  
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <ClockIcon className="w-3 h-3" />
                    <span>{highlight.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <PhotoIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ikuti Perkembangan Kami
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Dapatkan update terbaru tentang kegiatan, fasilitas, dan layanan RSUD M. Natsir Solok
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe Newsletter
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Follow Social Media
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .fade-in {
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
