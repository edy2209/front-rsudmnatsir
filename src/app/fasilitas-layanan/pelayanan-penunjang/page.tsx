'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { 
  BeakerIcon,
  CameraIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  ArrowRightIcon,
  CogIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  ChartBarIcon,
  SparklesIcon,
  BoltIcon,
  AcademicCapIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

export default function PelayananPenunjangPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const pelayananPenunjang = [
    {
      id: 'laboratorium',
      nama: 'Laboratorium',
      deskripsi: 'Pelayanan pemeriksaan laboratorium lengkap dengan teknologi terkini dan hasil akurat',
      icon: BeakerIcon,
      color: 'from-emerald-500 to-green-600',
      link: '/fasilitas-layanan/pelayanan-penunjang/laboratorium',
      jamBuka: '24 Jam',
      kategori: 'diagnostik',
      fitur: ['Hematologi', 'Kimia Klinik', 'Mikrobiologi', 'Serologi'],
      rating: 4.9,
      pelayanan: 'Fast Result',
      stats: { pasien: '500+/hari', akurasi: '99.5%', waktu: '< 2 jam' },
      teknologi: ['Automated Analyzer', 'Digital Microscopy', 'POCT'],
      spesialisasi: ['Patologi Klinik', 'Patologi Anatomik']
    },
    {
      id: 'radiologi',
      nama: 'Radiologi',
      deskripsi: 'Pelayanan pencitraan medis canggih untuk diagnosis yang tepat dan cepat',
      icon: CameraIcon,
      color: 'from-blue-500 to-indigo-600',
      link: '/fasilitas-layanan/pelayanan-penunjang/radiologi',
      jamBuka: '24 Jam',
      kategori: 'imaging',
      fitur: ['CT Scan', 'MRI', 'X-Ray Digital', 'USG 4D'],
      rating: 4.8,
      pelayanan: 'Digital Imaging',
      stats: { pasien: '300+/hari', teknologi: '5 modalitas', resolusi: 'HD+' },
      teknologi: ['Digital Radiography', '3D Reconstruction', 'PACS'],
      spesialisasi: ['Radiologi Diagnostik', 'Radiologi Intervensi']
    },
    {
      id: 'kamar-operasi',
      nama: 'Kamar Operasi',
      deskripsi: 'Fasilitas bedah modern dengan standar internasional dan tim ahli berpengalaman',
      icon: WrenchScrewdriverIcon,
      color: 'from-red-500 to-pink-600',
      link: '/fasilitas-layanan/pelayanan-penunjang/kamar-operasi',
      jamBuka: '24 Jam',
      kategori: 'bedah',
      fitur: ['Operasi Mayor', 'Operasi Minor', 'Laparoskopi', 'Emergency'],
      rating: 4.9,
      pelayanan: 'Surgical Excellence',
      stats: { operasi: '150+/bulan', success: '98.5%', kamar: '8 ruang' },
      teknologi: ['Laminar Air Flow', 'Anesthesia Machine', 'Monitoring System'],
      spesialisasi: ['Bedah Umum', 'Bedah Khusus', 'Emergency Surgery']
    },
    {
      id: 'fisiotherapi',
      nama: 'Fisioterapi',
      deskripsi: 'Pelayanan rehabilitasi medik komprehensif untuk pemulihan fungsi tubuh optimal',
      icon: HeartIcon,
      color: 'from-orange-500 to-yellow-600',
      link: '/fasilitas-layanan/pelayanan-penunjang/fisiotherapi',
      jamBuka: '07:00-16:00',
      kategori: 'rehabilitasi',
      fitur: ['Terapi Manual', 'Elektroterapi', 'Hidroterapi', 'Exercise Therapy'],
      rating: 4.7,
      pelayanan: 'Rehabilitation Care',
      stats: { pasien: '100+/hari', recovery: '85%', terapis: '12 orang' },
      teknologi: ['Ultrasound Therapy', 'Electrical Stimulation', 'Laser Therapy'],
      spesialisasi: ['Neuro Rehab', 'Ortho Rehab', 'Sports Therapy']
    }
  ];

  const statistikUmum = [
    { label: 'Total Pemeriksaan/Bulan', value: '15,000+', icon: ChartBarIcon, color: 'text-blue-600' },
    { label: 'Tingkat Akurasi', value: '99.2%', icon: ShieldCheckIcon, color: 'text-green-600' },
    { label: 'Waktu Tunggu Rata-rata', value: '< 30 min', icon: ClockIcon, color: 'text-orange-600' },
    { label: 'Kepuasan Pasien', value: '97%', icon: StarIcon, color: 'text-yellow-600' }
  ];

  const teknologiUnggulan = [
    {
      nama: 'AI-Assisted Diagnosis',
      deskripsi: 'Sistem diagnosis berbantuan AI untuk akurasi tinggi',
      icon: ComputerDesktopIcon,
      status: 'Active'
    },
    {
      nama: 'Digital Integration',
      deskripsi: 'Integrasi digital antar unit penunjang',
      icon: CogIcon,
      status: 'Implemented'
    },
    {
      nama: 'Real-time Monitoring',
      deskripsi: 'Monitoring hasil dan status pemeriksaan secara real-time',
      icon: BoltIcon,
      status: 'Live'
    },
    {
      nama: 'Quality Assurance',
      deskripsi: 'Sistem kontrol kualitas terpadu',
      icon: AcademicCapIcon,
      status: 'Certified'
    }
  ];

  const filteredPelayanan = activeFilter === 'all' 
    ? pelayananPenunjang 
    : pelayananPenunjang.filter(item => item.kategori === activeFilter);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mr-4">
                    <BuildingOffice2Icon className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      Pelayanan
                      <span className="block text-purple-200">Penunjang</span>
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Sistem pelayanan penunjang medis terintegrasi dengan teknologi terdepan 
                  untuk mendukung diagnosis yang akurat dan perawatan yang optimal
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    <span>Advanced Tech</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg">
                    Lihat Semua Layanan
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                    Jadwalkan Pemeriksaan
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {statistikUmum.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                      <stat.icon className="h-10 w-10 mx-auto mb-3 text-purple-200" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-purple-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Jelajahi <span className="text-indigo-600">Layanan Kami</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Pilih kategori pelayanan penunjang yang sesuai dengan kebutuhan medis Anda
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'all', label: 'Semua Layanan', icon: BuildingOffice2Icon },
              { id: 'diagnostik', label: 'Diagnostik', icon: BeakerIcon },
              { id: 'imaging', label: 'Pencitraan', icon: CameraIcon },
              { id: 'bedah', label: 'Bedah', icon: WrenchScrewdriverIcon },
              { id: 'rehabilitasi', label: 'Rehabilitasi', icon: HeartIcon }
            ].map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPelayanan.map((layanan, index) => (
              <div 
                key={layanan.id} 
                className="group relative"
                onMouseEnter={() => setHoveredService(layanan.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Link href={layanan.link}>
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                    {/* Header with Gradient */}
                    <div className={`bg-gradient-to-r ${layanan.color} p-8 text-white relative overflow-hidden`}>
                      {/* Animated Background Elements */}
                      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-white/10 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white/10 rounded-full transform group-hover:scale-110 transition-transform duration-500 delay-100"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <layanan.icon className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-right">
                            <div className="flex items-center">
                              <StarIcon className="w-5 h-5 text-yellow-300 mr-1" />
                              <span className="font-bold text-lg">{layanan.rating}</span>
                            </div>
                            <div className="text-xs text-white/80">{Object.keys(layanan.stats).length} metrics</div>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-3">{layanan.nama}</h3>
                        <p className="text-sm opacity-90 mb-6 leading-relaxed">{layanan.deskripsi}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                            {layanan.pelayanan}
                          </span>
                          <ArrowRightIcon className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(layanan.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                            <div className="text-sm font-semibold text-gray-800">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Service Info */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4 text-indigo-500" />
                          <span>Operasional: {layanan.jamBuka}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <SparklesIcon className="w-4 h-4 text-indigo-500" />
                          <span className="capitalize">Kategori: {layanan.kategori}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Layanan Unggulan:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {layanan.fitur.map((fitur, i) => (
                            <div key={i} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg px-3 py-2 text-xs text-indigo-700 text-center font-medium">
                              {fitur}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Tags */}
                      {hoveredService === layanan.id && (
                        <div className="mb-6 animate-fadeIn">
                          <h4 className="font-semibold text-gray-800 mb-3">Teknologi:</h4>
                          <div className="flex flex-wrap gap-2">
                            {layanan.teknologi.map((tech, i) => (
                              <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        Lihat Detail Layanan
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Teknologi <span className="text-indigo-600">Unggulan</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Didukung oleh teknologi medis terdepan untuk memberikan hasil yang akurat dan pelayanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teknologiUnggulan.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-indigo-100">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.nama}</h3>
                <p className="text-gray-600 text-sm mb-4">{tech.deskripsi}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  {tech.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information & Contact Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Panduan Pemeriksaan */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-indigo-100">
                <div className="flex items-center mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Panduan Pemeriksaan</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Daftar online atau datang langsung ke unit terkait',
                    'Siapkan kartu identitas dan surat rujukan dokter',
                    'Ikuti petunjuk persiapan khusus sesuai jenis pemeriksaan',
                    'Hasil pemeriksaan dapat diambil sesuai jadwal yang ditentukan',
                    'Konsultasi hasil dengan dokter yang merujuk'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-indigo-100 rounded-full p-1 mr-2 mt-1">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kontak & Informasi */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-3xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Informasi & Bantuan</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Hotline Penunjang</p>
                      <p className="text-indigo-200">(0751) 32082 ext. 200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Lokasi Utama</p>
                      <p className="text-indigo-200">Gedung Diagnostik, Lantai 1-3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <ClockIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Jam Operasional</p>
                      <p className="text-indigo-200">24 Jam (Emergency)</p>
                      <p className="text-indigo-200">07:00-21:00 (Rutin)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BuildingOffice2Icon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Diagnostik Akurat, Perawatan Optimal
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Percayakan kebutuhan pemeriksaan penunjang Anda kepada tim profesional dengan 
              teknologi terdepan dan standar pelayanan internasional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Jadwalkan Pemeriksaan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Hubungi Customer Service
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </PageLayout>
  );
}
