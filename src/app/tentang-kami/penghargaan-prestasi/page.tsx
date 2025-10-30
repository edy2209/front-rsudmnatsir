'use client';

import React, { useState } from 'react';
import { TrophyIcon, StarIcon, CalendarIcon, UserGroupIcon, AcademicCapIcon, ShieldCheckIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Award {
  id: number;
  title: string;
  category: string;
  year: number;
  institution: string;
  description: string;
  level: 'nasional' | 'regional' | 'internasional' | 'lokal';
  icon: string;
  image?: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  value: string;
  icon: string;
  color: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: 'Rumah Sakit Terakreditasi Paripurna',
    category: 'Akreditasi',
    year: 2024,
    institution: 'Komisi Akreditasi Rumah Sakit (KARS)',
    description: 'Pencapaian akreditasi tertinggi untuk rumah sakit dengan standar internasional dalam pelayanan kesehatan',
    level: 'nasional',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 2,
    title: 'ISO 9001:2015 Quality Management System',
    category: 'Sertifikasi Mutu',
    year: 2023,
    institution: 'International Organization for Standardization',
    description: 'Sertifikasi sistem manajemen mutu internasional untuk pelayanan kesehatan yang berkelanjutan',
    level: 'internasional',
    icon: 'GlobeAltIcon'
  },
  {
    id: 3,
    title: 'Juara 1 Inovasi Pelayanan Kesehatan',
    category: 'Inovasi',
    year: 2023,
    institution: 'Kementerian Kesehatan RI',
    description: 'Penghargaan untuk inovasi telemedicine dan digitalisasi pelayanan kesehatan',
    level: 'nasional',
    icon: 'TrophyIcon'
  },
  {
    id: 4,
    title: 'Penghargaan Zona Integritas WBK',
    category: 'Tata Kelola',
    year: 2022,
    institution: 'Kementerian PANRB',
    description: 'Wilayah Bebas dari Korupsi dan Wilayah Birokrasi Bersih dan Melayani',
    level: 'nasional',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 5,
    title: 'Best Hospital Service West Sumatra',
    category: 'Pelayanan',
    year: 2022,
    institution: 'Dinas Kesehatan Provinsi Sumbar',
    description: 'Rumah sakit dengan pelayanan terbaik di Sumatera Barat berdasarkan survei kepuasan pasien',
    level: 'regional',
    icon: 'StarIcon'
  },
  {
    id: 6,
    title: 'Green Hospital Award',
    category: 'Lingkungan',
    year: 2021,
    institution: 'Indonesia Green Building Council',
    description: 'Penghargaan untuk rumah sakit ramah lingkungan dengan pengelolaan limbah terbaik',
    level: 'nasional',
    icon: 'GlobeAltIcon'
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Tingkat Kepuasan Pasien',
    description: 'Rata-rata tingkat kepuasan pasien berdasarkan survei independen',
    value: '96.8%',
    icon: 'UserGroupIcon',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Akreditasi SNARS',
    description: 'Standar Nasional Akreditasi Rumah Sakit tingkat Paripurna',
    value: '98.5%',
    icon: 'ShieldCheckIcon',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Dokter Spesialis Bersertifikat',
    description: 'Persentase dokter spesialis dengan sertifikasi kompetensi',
    value: '100%',
    icon: 'AcademicCapIcon',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 4,
    title: 'Pelatihan Berkelanjutan',
    description: 'Jam pelatihan SDM per tahun untuk peningkatan kompetensi',
    value: '2,400+',
    icon: 'DocumentTextIcon',
    color: 'from-orange-500 to-red-500'
  }
];

const statistics = [
  { label: 'Total Penghargaan', value: '25+' },
  { label: 'Sertifikasi Internasional', value: '8' },
  { label: 'Tahun Beroperasi', value: '45+' },
  { label: 'Rating Akreditasi', value: 'Paripurna' }
];

export default function PenghargaanPrestasiPage() {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      TrophyIcon,
      StarIcon,
      ShieldCheckIcon,
      GlobeAltIcon,
      UserGroupIcon,
      AcademicCapIcon,
      DocumentTextIcon,
      CalendarIcon
    };
    
    const IconComponent = iconMap[iconName] || TrophyIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'internasional': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'nasional': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      case 'regional': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'lokal': return 'bg-gradient-to-r from-purple-500 to-violet-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const filteredAwards = activeCategory === 'semua' 
    ? awards 
    : awards.filter(award => award.level === activeCategory);

  const categories = [
    { id: 'semua', label: 'Semua', count: awards.length },
    { id: 'internasional', label: 'Internasional', count: awards.filter(a => a.level === 'internasional').length },
    { id: 'nasional', label: 'Nasional', count: awards.filter(a => a.level === 'nasional').length },
    { id: 'regional', label: 'Regional', count: awards.filter(a => a.level === 'regional').length }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-20 -mt-20 pt-32">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <TrophyIcon className="w-16 h-16 text-yellow-300 animate-pulse" />
                <StarIcon className="w-12 h-12 text-orange-300 animate-bounce" />
                <TrophyIcon className="w-16 h-16 text-yellow-300 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Penghargaan & <span className="text-yellow-300">Prestasi</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100">
                Dedikasi Kami dalam Memberikan Pelayanan Kesehatan Terbaik
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white text-yellow-700 px-4 py-2 rounded-full font-medium">
                  Akreditasi Paripurna
                </span>
                <span className="bg-white text-yellow-700 px-4 py-2 rounded-full font-medium">
                  ISO Certified
                </span>
                <span className="bg-white text-yellow-700 px-4 py-2 rounded-full font-medium">
                  25+ Penghargaan
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pencapaian <span className="text-yellow-600">Utama</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Komitmen kami dalam memberikan pelayanan kesehatan berkualitas tinggi tercermin dari berbagai pencapaian dan pengakuan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                    {getIconComponent(achievement.icon)}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.value}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Penghargaan & <span className="text-yellow-600">Sertifikasi</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Berbagai penghargaan dan sertifikasi yang telah diraih sebagai bukti komitmen terhadap kualitas pelayanan
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-yellow-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAwards.map((award) => (
                <div
                  key={award.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedAward(award)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${getLevelColor(award.level)}`}>
                      {getIconComponent(award.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{award.year}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(award.level)}`}>
                      {award.level.charAt(0).toUpperCase() + award.level.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{award.title}</h3>
                  <p className="text-yellow-600 font-medium text-sm mb-2">{award.category}</p>
                  <p className="text-gray-600 text-sm mb-3">{award.institution}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Award Detail Modal */}
        {selectedAward && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl ${getLevelColor(selectedAward.level)}`}>
                    {getIconComponent(selectedAward.icon)}
                  </div>
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white ${getLevelColor(selectedAward.level)}`}>
                    {selectedAward.level.charAt(0).toUpperCase() + selectedAward.level.slice(1)}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedAward.title}</h2>
                <p className="text-yellow-600 font-semibold mb-2">{selectedAward.category}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Tahun</p>
                    <p className="font-semibold">{selectedAward.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Institusi</p>
                    <p className="font-semibold">{selectedAward.institution}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{selectedAward.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <TrophyIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Komitmen Berkelanjutan
            </h2>
            <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
              Kami terus berkomitmen untuk memberikan pelayanan kesehatan terbaik dan meraih prestasi yang lebih tinggi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Lihat Sertifikat
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Hubungi Kami
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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
