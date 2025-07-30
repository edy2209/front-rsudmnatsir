'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { 
  BuildingOfficeIcon,
  ClockIcon,
  HeartIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChartBarIcon,
  StarIcon,
  CogIcon,
  HomeIcon,
  SparklesIcon,
  ArrowRightIcon,
  WifiIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

export default function FasilitasUmumPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const fasilitasUmum = [
    {
      id: 'apotik',
      nama: 'Apotek RSUD',
      deskripsi: 'Apotek lengkap dengan obat-obatan berkualitas dan pelayanan farmasi 24 jam',
      icon: BeakerIcon,
      color: 'from-green-500 to-emerald-600',
      link: '/fasilitas-layanan/fasilitas-umum/apotik',
      jamBuka: '24 Jam',
      kategori: 'medis',
      fitur: ['Obat Resep', 'Obat Bebas', 'Konsultasi Farmasi', 'Home Care'],
      rating: 4.8,
      pelayanan: 'Express'
    },
    {
      id: 'kantin',
      nama: 'Food Court',
      deskripsi: 'Area makan dengan berbagai pilihan makanan sehat dan bergizi untuk pasien dan keluarga',
      icon: HeartIcon,
      color: 'from-orange-500 to-red-600',
      link: '/fasilitas-layanan/fasilitas-umum/kantin',
      jamBuka: '06:00-22:00',
      kategori: 'kuliner',
      fitur: ['Diet Khusus', 'Makanan Halal', 'Menu Sehat', 'Delivery'],
      rating: 4.6,
      pelayanan: 'Healthy Menu'
    },
    {
      id: 'masjid',
      nama: 'Masjid Al-Shifa',
      deskripsi: 'Tempat ibadah yang nyaman dengan fasilitas lengkap untuk jamaah dan keluarga pasien',
      icon: HomeIcon,
      color: 'from-blue-500 to-indigo-600',
      link: '/fasilitas-layanan/fasilitas-umum/masjid',
      jamBuka: '24 Jam',
      kategori: 'ibadah',
      fitur: ['Ruang Sholat', 'Tempat Wudhu', 'Kajian Rutin', 'AC'],
      rating: 4.9,
      pelayanan: 'Spiritual Care'
    },
    {
      id: 'parkir',
      nama: 'Area Parkir',
      deskripsi: 'Lahan parkir luas dan aman dengan sistem keamanan 24 jam untuk kendaraan pengunjung',
      icon: CogIcon,
      color: 'from-purple-500 to-violet-600',
      link: '/fasilitas-layanan/fasilitas-umum/parkir',
      jamBuka: '24 Jam',
      kategori: 'transportasi',
      fitur: ['CCTV', 'Security', 'Valet Parking', 'Motor & Mobil'],
      rating: 4.5,
      pelayanan: 'Secure Parking'
    }
  ];

  const statistik = [
    { label: 'Fasilitas Tersedia', value: '15+', icon: BuildingOfficeIcon, color: 'text-blue-600' },
    { label: 'Kepuasan Pengunjung', value: '96%', icon: StarIcon, color: 'text-yellow-600' },
    { label: 'Layanan 24 Jam', value: '8', icon: ClockIcon, color: 'text-green-600' },
    { label: 'Staff Pelayanan', value: '45+', icon: UserGroupIcon, color: 'text-purple-600' }
  ];

  const layananTambahan = [
    {
      nama: 'WiFi Gratis',
      deskripsi: 'Internet gratis di seluruh area rumah sakit',
      icon: WifiIcon,
      status: 'Aktif'
    },
    {
      nama: 'ATM Center',
      deskripsi: 'Mesin ATM berbagai bank tersedia 24 jam',
      icon: CogIcon,
      status: 'Tersedia'
    },
    {
      nama: 'CCTV Monitoring',
      deskripsi: 'Sistem keamanan terintegrasi di seluruh area',
      icon: CameraIcon,
      status: 'Aktif'
    },
    {
      nama: 'Info Center',
      deskripsi: 'Pusat informasi dan bantuan pengunjung',
      icon: DocumentTextIcon,
      status: 'Buka 24 Jam'
    }
  ];

  const filteredFasilitas = activeFilter === 'all' 
    ? fasilitasUmum 
    : fasilitasUmum.filter(item => item.kategori === activeFilter);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImZhY2lsaXR5IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZmFjaWxpdHkpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <BuildingOfficeIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Fasilitas <span className="text-blue-200">Umum</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nikmati berbagai fasilitas umum lengkap dan modern yang dirancang untuk kenyamanan 
              pasien, keluarga, dan pengunjung selama berada di RSUD M. Natsir
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Layanan 24/7</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                <span>Aman & Nyaman</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <StarIcon className="h-5 w-5 mr-2" />
                <span>Berkualitas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistik.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jelajahi <span className="text-blue-600">Fasilitas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Pilih kategori fasilitas yang ingin Anda ketahui lebih lanjut
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'all', label: 'Semua Fasilitas', icon: BuildingOfficeIcon },
                { id: 'medis', label: 'Medis', icon: BeakerIcon },
                { id: 'kuliner', label: 'Kuliner', icon: HeartIcon },
                { id: 'ibadah', label: 'Ibadah', icon: HomeIcon },
                { id: 'transportasi', label: 'Transportasi', icon: CogIcon }
              ].map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
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
      </div>

      {/* Facilities Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFasilitas.map((fasilitas, index) => (
              <div key={fasilitas.id} className="group">
                <Link href={fasilitas.link}>
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                    {/* Header with Gradient */}
                    <div className={`bg-gradient-to-r ${fasilitas.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-24 h-24 bg-white/10 rounded-full"></div>
                      
                      <div className="flex items-center justify-between relative z-10 mb-4">
                        <fasilitas.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-right">
                          <div className="flex items-center">
                            <StarIcon className="w-5 h-5 text-yellow-300 mr-1" />
                            <span className="font-bold">{fasilitas.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{fasilitas.nama}</h3>
                      <p className="text-sm opacity-90 mb-4">{fasilitas.deskripsi}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {fasilitas.pelayanan}
                        </span>
                        <ArrowRightIcon className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4" />
                          <span>Buka: {fasilitas.jamBuka}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <SparklesIcon className="w-4 h-4" />
                          <span className="capitalize">{fasilitas.kategori}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Fitur Unggulan:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {fasilitas.fitur.map((fitur, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-700 text-center">
                              {fitur}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        Lihat Detail Fasilitas
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Layanan <span className="text-blue-600">Tambahan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas penunjang lainnya untuk melengkapi kenyamanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananTambahan.map((layanan, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors duration-300 group">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <layanan.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{layanan.nama}</h3>
                <p className="text-gray-600 text-sm mb-3">{layanan.deskripsi}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  {layanan.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Panduan Penggunaan */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Panduan Penggunaan Fasilitas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Semua fasilitas umum dapat digunakan secara gratis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Jaga kebersihan dan ketertiban area fasilitas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patuhi protokol kesehatan yang berlaku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hubungi petugas jika memerlukan bantuan</span>
                  </li>
                </ul>
              </div>

              {/* Kontak Informasi */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi & Bantuan</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Info Center</p>
                      <p className="text-gray-600">(0751) 32082 ext. 101</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Lokasi</p>
                      <p className="text-gray-600">Lantai 1, Lobby Utama</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Jam Pelayanan</p>
                      <p className="text-gray-600">24 Jam Setiap Hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <BuildingOfficeIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nikmati Kenyamanan Fasilitas Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fasilitas modern dan lengkap untuk mendukung proses penyembuhan dan kenyamanan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Lihat Semua Fasilitas
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Hubungi Info Center
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
