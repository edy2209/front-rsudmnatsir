'use client';

/**
 * Halaman Profil RSUD M. Natsir Solok - 2025
 * Fitur: Profil rumah sakit lengkap dengan sejarah, visi misi, dan fasilitas
 * Responsive design dengan animasi modern
 */

import React, { useState } from 'react';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  AcademicCapIcon,
  TruckIcon,
  CameraIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface ProfileData {
  title: string;
  value: string;
  icon: any;
  color: string;
}

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: any;
}

const profileStats: ProfileData[] = [
  {
    title: 'Tahun Berdiri',
    value: '1985',
    icon: CalendarIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Jumlah Tempat Tidur',
    value: '300+',
    icon: BuildingOfficeIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Tenaga Medis',
    value: '450+',
    icon: UserGroupIcon,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Pasien per Tahun',
    value: '50.000+',
    icon: HeartIcon,
    color: 'from-red-500 to-red-600'
  }
];

const achievements: Achievement[] = [
  {
    year: '2024',
    title: 'Akreditasi Paripurna',
    description: 'Meraih akreditasi tertinggi dari KARS untuk standar pelayanan kesehatan',
    icon: ShieldCheckIcon
  },
  {
    year: '2023',
    title: 'ISO 9001:2015',
    description: 'Sertifikasi sistem manajemen mutu internasional',
    icon: StarIcon
  },
  {
    year: '2022',
    title: 'Zona Integritas WBK',
    description: 'Wilayah Bebas dari Korupsi dan Wilayah Birokrasi Bersih Melayani',
    icon: ShieldCheckIcon
  },
  {
    year: '2021',
    title: 'Green Hospital Award',
    description: 'Penghargaan rumah sakit ramah lingkungan',
    icon: HeartIcon
  }
];

const facilities = [
  {
    category: 'Pelayanan Medis',
    items: [
      'IGD 24 Jam',
      'ICU/NICU/PICU',
      'Kamar Operasi Modern',
      'Poliklinik Spesialis',
      'Rawat Inap Kelas VIP-III',
      'One Day Care'
    ],
    icon: HeartIcon,
    color: 'text-red-500'
  },
  {
    category: 'Penunjang Medis',
    items: [
      'Laboratorium Terintegrasi',
      'Radiologi Digital',
      'CT Scan & MRI',
      'USG 4D',
      'Farmasi 24 Jam',
      'Bank Darah'
    ],
    icon: CameraIcon,
    color: 'text-blue-500'
  },
  {
    category: 'Fasilitas Umum',
    items: [
      'Parkir Luas',
      'Kantin & Food Court',
      'Musholla',
      'ATM Center',
      'WiFi Gratis',
      'Ambulans 24/7'
    ],
    icon: BuildingOfficeIcon,
    color: 'text-green-500'
  }
];

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect untuk header
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 100);
    });
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 sm:py-20 lg:py-24 overflow-hidden -mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 md:grid-cols-12 gap-4 h-full">
            {[...Array(96)].map((_, i) => (
              <BuildingOfficeIcon 
                key={i} 
                className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" 
                style={{animationDelay: `${i * 0.1}s`}} 
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center items-center gap-4 mb-6">
              <BuildingOfficeIcon className="w-16 h-16 sm:w-20 sm:h-20 text-blue-300 animate-bounce" />
              <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red-300 animate-pulse" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              RSUD <span className="text-blue-300">M. Natsir</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Rumah Sakit Umum Daerah M. Natsir Solok
            </p>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Melayani dengan sepenuh hati untuk kesehatan masyarakat Solok dan sekitarnya sejak 1985
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Layanan Kami
              </button>
              <button className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-300 hover:text-blue-900 transition-all duration-300">
                Kontak Informasi
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {profileStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 py-4">
            {[
              { id: 'profil', label: 'Profil', icon: BuildingOfficeIcon },
              { id: 'fasilitas', label: 'Fasilitas', icon: HeartIcon },
              { id: 'prestasi', label: 'Prestasi', icon: StarIcon },
              { id: 'kontak', label: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Profil Section */}
          {activeTab === 'profil' && (
            <div className="fade-in">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Tentang <span className="text-blue-600">RSUD M. Natsir</span>
                  </h2>
                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                      RSUD M. Natsir Solok merupakan rumah sakit umum daerah yang telah melayani masyarakat 
                      Solok dan sekitarnya sejak tahun 1985. Sebagai rumah sakit rujukan utama di wilayah Solok, 
                      kami berkomitmen memberikan pelayanan kesehatan yang berkualitas dan terjangkau.
                    </p>
                    <p>
                      Dengan dukungan tenaga medis profesional dan fasilitas modern, kami terus berinovasi 
                      dalam memberikan pelayanan kesehatan yang komprehensif mulai dari pelayanan dasar 
                      hingga pelayanan spesialistik.
                    </p>
                    <p>
                      Sebagai rumah sakit terakreditasi paripurna, kami selalu mengutamakan keselamatan 
                      pasien dan kualitas pelayanan sesuai dengan standar nasional dan internasional.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <MapPinIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">Lokasi Strategis</h4>
                        <p className="text-sm text-gray-600">Jantung Kota Solok, mudah dijangkau</p>
                      </div>
                      <div className="text-center">
                        <ClockIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">Pelayanan 24/7</h4>
                        <p className="text-sm text-gray-600">IGD dan layanan darurat non-stop</p>
                      </div>
                      <div className="text-center">
                        <AcademicCapIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">SDM Kompeten</h4>
                        <p className="text-sm text-gray-600">Dokter spesialis berpengalaman</p>
                      </div>
                      <div className="text-center">
                        <ShieldCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">Terakreditasi</h4>
                        <p className="text-sm text-gray-600">Standar pelayanan terjamin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fasilitas Section */}
          {activeTab === 'fasilitas' && (
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Fasilitas <span className="text-blue-600">Lengkap</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="bg-gray-50 p-4 rounded-full w-fit mx-auto mb-4">
                        <facility.icon className={`w-12 h-12 ${facility.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{facility.category}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {facility.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prestasi Section */}
          {activeTab === 'prestasi' && (
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Prestasi & <span className="text-blue-600">Penghargaan</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Kontak Section */}
          {activeTab === 'kontak' && (
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Hubungi <span className="text-blue-600">Kami</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Dr. Mohammad Hatta No. 1<br />
                        Solok, Sumatera Barat 27313
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <PhoneIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Telepon</h4>
                      <p className="text-gray-600">
                        (0755) 123456<br />
                        IGD: (0755) 654321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <EnvelopeIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <p className="text-gray-600">
                        info@rsudmnatsir.solok.go.id<br />
                        humas@rsudmnatsir.solok.go.id
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <ClockIcon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Poliklinik: 08:00 - 16:00<br />
                        IGD: 24 Jam
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                      <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <HeartIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kesehatan Anda, Prioritas Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dengan dedikasi tinggi, kami siap melayani kebutuhan kesehatan Anda dan keluarga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Buat Janji Temu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Layanan Darurat
            </button>
          </div>
        </div>
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
