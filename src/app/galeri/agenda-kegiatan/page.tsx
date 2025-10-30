'use client';

/**
 * Halaman Agenda Kegiatan - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Kalender kegiatan dan agenda rumah sakit dengan filter dan pencarian
 */

import React, { useState } from 'react';
import { 
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  participants: number;
  maxParticipants?: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  registrationRequired: boolean;
  featured: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Seminar Kesehatan Jantung',
    description: 'Seminar edukasi tentang pencegahan penyakit jantung dan gaya hidup sehat untuk masyarakat umum',
    date: '2025-07-20',
    time: '09:00 - 12:00',
    location: 'Auditorium Utama',
    category: 'Seminar',
    organizer: 'Instalasi Jantung',
    participants: 85,
    maxParticipants: 150,
    status: 'upcoming',
    priority: 'high',
    tags: ['Kesehatan Jantung', 'Edukasi', 'Masyarakat'],
    registrationRequired: true,
    featured: true
  },
  {
    id: 2,
    title: 'Pelatihan BLS (Basic Life Support)',
    description: 'Pelatihan dasar bantuan hidup untuk tenaga medis dan paramedis rumah sakit',
    date: '2025-07-18',
    time: '08:00 - 16:00',
    location: 'Ruang Training Lt. 3',
    category: 'Pelatihan',
    organizer: 'Diklat RS',
    participants: 24,
    maxParticipants: 30,
    status: 'upcoming',
    priority: 'high',
    tags: ['BLS', 'Medical Training', 'Emergency'],
    registrationRequired: true,
    featured: false
  },
  {
    id: 3,
    title: 'Bakti Sosial Kesehatan',
    description: 'Pemeriksaan kesehatan gratis dan pembagian obat untuk masyarakat kurang mampu',
    date: '2025-07-25',
    time: '08:00 - 14:00',
    location: 'Balai Desa Koto Baru',
    category: 'Bakti Sosial',
    organizer: 'Humas & CSR',
    participants: 12,
    status: 'upcoming',
    priority: 'medium',
    tags: ['Baksos', 'Pemeriksaan Gratis', 'Masyarakat'],
    registrationRequired: false,
    featured: true
  },
  {
    id: 4,
    title: 'Workshop Keselamatan Pasien',
    description: 'Workshop internal untuk meningkatkan budaya keselamatan pasien di seluruh unit',
    date: '2025-07-15',
    time: '13:00 - 17:00',
    location: 'Ruang Serbaguna',
    category: 'Workshop',
    organizer: 'Komite Keselamatan Pasien',
    participants: 65,
    maxParticipants: 80,
    status: 'completed',
    priority: 'high',
    tags: ['Patient Safety', 'Quality', 'Internal'],
    registrationRequired: true,
    featured: false
  },
  {
    id: 5,
    title: 'Sosialisasi SIMRS Baru',
    description: 'Sosialisasi dan pelatihan penggunaan sistem informasi manajemen rumah sakit yang baru',
    date: '2025-07-22',
    time: '09:00 - 15:00',
    location: 'Lab Komputer',
    category: 'Sosialisasi',
    organizer: 'IT Department',
    participants: 42,
    maxParticipants: 50,
    status: 'upcoming',
    priority: 'medium',
    tags: ['SIMRS', 'Technology', 'Training'],
    registrationRequired: true,
    featured: false
  },
  {
    id: 6,
    title: 'Webinar Telemedicine',
    description: 'Webinar nasional tentang implementasi telemedicine dalam pelayanan kesehatan modern',
    date: '2025-07-30',
    time: '10:00 - 12:00',
    location: 'Virtual Meeting',
    category: 'Webinar',
    organizer: 'Medical Committee',
    participants: 200,
    maxParticipants: 500,
    status: 'upcoming',
    priority: 'high',
    tags: ['Telemedicine', 'Digital Health', 'Innovation'],
    registrationRequired: true,
    featured: true
  }
];

const categories = ['Semua', 'Seminar', 'Pelatihan', 'Workshop', 'Bakti Sosial', 'Sosialisasi', 'Webinar'];
const statuses = ['Semua', 'Upcoming', 'Ongoing', 'Completed'];

const statistics = [
  { label: 'Total Agenda', value: '24' },
  { label: 'Bulan Ini', value: '8' },
  { label: 'Peserta Aktif', value: '450+' },
  { label: 'Event Selesai', value: '15' }
];

export default function AgendaKegiatanPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedStatus, setSelectedStatus] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'Semua' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Semua' || event.status === selectedStatus.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20 overflow-hidden -mt-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-12 gap-4 h-full opacity-10">
              {[...Array(60)].map((_, i) => (
                <CalendarDaysIcon 
                  key={i} 
                  className="w-6 h-6 text-white animate-pulse" 
                  style={{animationDelay: `${i * 0.1}s`}} 
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <CalendarDaysIcon className="w-16 h-16 text-green-300 animate-bounce" />
                <ArrowRightIcon className="w-12 h-12 text-blue-300 animate-pulse" />
                <UserGroupIcon className="w-16 h-16 text-green-300 animate-bounce" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Agenda <span className="text-green-300">Kegiatan</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Jadwal lengkap kegiatan, seminar, dan program RSUD M. Natsir Solok
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Event Berkualitas
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Registrasi Online
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Update Real-time
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-lg mx-auto">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari agenda atau kegiatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 py-2 px-3">Kategori:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 py-2 px-3">Status:</span>
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedStatus === status
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getPriorityColor(event.priority)} hover:border-green-200 transform hover:-translate-y-1`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                      {event.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {event.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDaysIcon className="w-4 h-4 text-green-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <UserGroupIcon className="w-4 h-4 text-purple-600" />
                      <span>
                        {event.participants} 
                        {event.maxParticipants && ` / ${event.maxParticipants}`} peserta
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {event.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {event.tags.length > 3 && (
                        <span className="text-blue-600 text-xs font-medium">
                          +{event.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                      by {event.organizer}
                    </span>
                    {event.registrationRequired && event.status === 'upcoming' && (
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-green-700 transition-colors duration-300">
                        Daftar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <CalendarDaysIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Tidak ada agenda ditemukan</h3>
                <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <PlusIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ingin Mengadakan Event?
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam mengadakan kegiatan edukasi kesehatan dan pengembangan SDM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Ajukan Proposal
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Hubungi Event Manager
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </PageLayout>
  );
}
