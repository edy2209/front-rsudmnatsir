'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

export default function InovasiPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const innovations = [
    {
      id: 1,
      title: 'Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
      category: 'teknologi',
      description: 'Sistem terintegrasi untuk manajemen data pasien, administrasi, dan pelayanan medis yang memudahkan akses informasi secara real-time.',
      image: '/images/placeholder-innovation1.jpg',
      year: '2023',
      status: 'Implementasi',
      benefits: [
        'Efisiensi administrasi meningkat 70%',
        'Waktu tunggu pasien berkurang 50%',
        'Akurasi data meningkat 95%'
      ]
    },
    {
      id: 2,
      title: 'Telemedicine RSUD M. Natsir',
      category: 'pelayanan',
      description: 'Platform konsultasi medis jarak jauh yang memungkinkan pasien berkonsultasi dengan dokter tanpa datang langsung ke rumah sakit.',
      image: '/images/placeholder-innovation2.jpg',
      year: '2023',
      status: 'Aktif',
      benefits: [
        'Akses pelayanan 24/7',
        'Mengurangi risiko penularan',
        'Efisiensi biaya transport pasien'
      ]
    },
    {
      id: 3,
      title: 'Mobile Health (mHealth) Application',
      category: 'teknologi',
      description: 'Aplikasi mobile untuk pemantauan kesehatan pasien, jadwal kontrol, dan edukasi kesehatan yang dapat diakses kapan saja.',
      image: '/images/placeholder-innovation3.jpg',
      year: '2024',
      status: 'Pengembangan',
      benefits: [
        'Monitoring kesehatan berkelanjutan',
        'Reminder jadwal kontrol otomatis',
        'Edukasi kesehatan interaktif'
      ]
    },
    {
      id: 4,
      title: 'Program Green Hospital',
      category: 'lingkungan',
      description: 'Inisiatif ramah lingkungan dengan pengelolaan limbah medis yang inovatif dan penggunaan energi terbarukan.',
      image: '/images/placeholder-innovation4.jpg',
      year: '2023',
      status: 'Implementasi',
      benefits: [
        'Pengurangan limbah 60%',
        'Efisiensi energi 40%',
        'Lingkungan kerja lebih sehat'
      ]
    },
    {
      id: 5,
      title: 'AI-Assisted Diagnosis System',
      category: 'teknologi',
      description: 'Sistem bantuan diagnosis menggunakan kecerdasan buatan untuk meningkatkan akurasi dan kecepatan diagnosis medis.',
      image: '/images/placeholder-innovation5.jpg',
      year: '2024',
      status: 'Penelitian',
      benefits: [
        'Akurasi diagnosis meningkat 85%',
        'Waktu diagnosis lebih cepat',
        'Deteksi dini penyakit'
      ]
    },
    {
      id: 6,
      title: 'Gerakan 5R (Resik, Rapi, Rawat, Rajin, Ringkas)',
      category: 'manajemen',
      description: 'Program peningkatan kualitas pelayanan melalui budaya kerja 5R yang diterapkan di seluruh unit kerja.',
      image: '/images/placeholder-innovation6.jpg',
      year: '2023',
      status: 'Implementasi',
      benefits: [
        'Produktivitas meningkat 65%',
        'Kepuasan kerja tinggi',
        'Lingkungan kerja optimal'
      ]
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Kategori', icon: '🔍' },
    { value: 'teknologi', label: 'Teknologi', icon: '💻' },
    { value: 'pelayanan', label: 'Pelayanan', icon: '🏥' },
    { value: 'lingkungan', label: 'Lingkungan', icon: '🌿' },
    { value: 'manajemen', label: 'Manajemen', icon: '📊' }
  ];

  const statusColors: { [key: string]: string } = {
    'Aktif': 'bg-green-100 text-green-800',
    'Implementasi': 'bg-blue-100 text-blue-800',
    'Pengembangan': 'bg-yellow-100 text-yellow-800',
    'Penelitian': 'bg-purple-100 text-purple-800'
  };

  const filteredInnovations = selectedCategory === 'semua' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-transparent"></div>
        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">💡</span>
              </div>
              <span className="text-green-200 font-medium text-lg">Informasi Kesehatan</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Inovasi & Terobosan
              <span className="block text-green-300">RSUD M. Natsir</span>
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 mb-8 leading-relaxed max-w-3xl">
              Menghadirkan inovasi terdepan dalam pelayanan kesehatan untuk meningkatkan kualitas hidup masyarakat Solok
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{innovations.length}+</div>
                <div className="text-green-200 text-sm">Program Inovasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">4</div>
                <div className="text-green-200 text-sm">Kategori Inovasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">2023</div>
                <div className="text-green-200 text-sm">Tahun Mulai</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-5 w-8 h-8 border border-white/20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        {/* Filter Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Kategori Inovasi</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">💡</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[innovation.status]}`}>
                    {innovation.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                    {innovation.year}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {innovation.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {innovation.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Manfaat Utama:</h4>
                  <ul className="space-y-1">
                    {innovation.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Selengkapnya</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Punya Ide Inovasi untuk RSUD M. Natsir?
          </h3>
          <p className="text-green-100 mb-6 text-lg max-w-2xl mx-auto">
            Kami selalu terbuka untuk ide-ide inovatif yang dapat meningkatkan kualitas pelayanan kesehatan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Kirim Proposal
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
              Hubungi Tim Inovasi
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-700">Tingkat Keberhasilan</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
            <div className="text-gray-700">Peningkatan Efisiensi</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700">Kepuasan Pengguna</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-700">Layanan Tersedia</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
