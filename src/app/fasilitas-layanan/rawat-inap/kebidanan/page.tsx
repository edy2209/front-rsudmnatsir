'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  HeartIcon,
  ClockIcon,
  CogIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChartBarIcon,
  EyeIcon,
  UserGroupIcon,
  SparklesIcon,
  StarIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function RawatInapKebidananPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImJhYnkiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYmFieSki Lz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <HeartIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Rawat Inap Kebidanan
            </h1>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Ruang rawat inap khusus ibu dan bayi dengan fasilitas modern dan tim medis berpengalaman 
              untuk memberikan perawatan terbaik selama masa kehamilan, persalinan, dan nifas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <HeartIcon className="h-5 w-5 mr-2" />
                <span>Mother & Baby Care</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Tim Obstetri Berpengalaman</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Siaga 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
              { id: 'facilities', label: 'Fasilitas', icon: CogIcon },
              { id: 'services', label: 'Layanan', icon: HeartIcon },
              { id: 'doctors', label: 'Tim Dokter', icon: UserGroupIcon },
              { id: 'rooms', label: 'Tipe Kamar', icon: HomeIcon },
              { id: 'contact', label: 'Kontak', icon: PhoneIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-600 bg-emerald-50'
                      : 'border-transparent text-gray-600 hover:text-emerald-600 hover:border-emerald-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm font-medium">Bed Kebidanan</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <HomeIcon className="h-8 w-8 text-emerald-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-100 text-sm font-medium">Dokter Obsgyn</p>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-teal-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cyan-100 text-sm font-medium">Persalinan/Bulan</p>
                    <p className="text-3xl font-bold">180+</p>
                  </div>
                  <ChartBarIcon className="h-8 w-8 text-cyan-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Safety Rate</p>
                    <p className="text-3xl font-bold">99%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ruang bersalin modern dengan peralatan canggih</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim dokter spesialis obstetri ginekologi berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">NICU (Neonatal Intensive Care Unit) level II</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Konseling laktasi dan perawatan bayi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Kelas Ibu Hamil</h4>
                    <p className="text-sm text-gray-600">Setiap Sabtu: 09.00-11.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Obstetri</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051106</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Kebidanan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas lengkap dan modern untuk mendukung proses kehamilan, persalinan, dan perawatan bayi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: HomeIcon,
                  title: 'Ruang Bersalin Modern',
                  description: '6 ruang bersalin dengan peralatan medis terkini dan sistem monitoring canggih',
                  color: 'emerald'
                },
                {
                  icon: HeartIcon,
                  title: 'NICU Level II',
                  description: 'Unit perawatan intensif neonatal untuk bayi prematur dan kondisi khusus',
                  color: 'teal'
                },
                {
                  icon: BeakerIcon,
                  title: 'Laboratorium 24 Jam',
                  description: 'Pemeriksaan lab cepat untuk monitoring kehamilan dan kondisi darurat',
                  color: 'cyan'
                },
                {
                  icon: EyeIcon,
                  title: 'USG 4D',
                  description: 'Fasilitas USG terkini untuk monitoring perkembangan janin',
                  color: 'green'
                },
                {
                  icon: CogIcon,
                  title: 'Ruang Operasi Obstetri',
                  description: 'Kamar operasi khusus untuk tindakan sectio caesarea dan operasi lainnya',
                  color: 'blue'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Lactation Center',
                  description: 'Pusat konseling laktasi dan edukasi perawatan bayi baru lahir',
                  color: 'purple'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  emerald: 'from-emerald-500 to-emerald-600 text-emerald-600',
                  teal: 'from-teal-500 to-teal-600 text-teal-600',
                  cyan: 'from-cyan-500 to-cyan-600 text-cyan-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.emerald;
                const [gradientFrom, gradientTo, textColor] = colorClass.split(' ');

                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kebidanan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pelayanan komprehensif untuk ibu dan bayi mulai dari kehamilan hingga perawatan nifas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <HeartIcon className="h-6 w-6 text-emerald-600 mr-3" />
                  Pelayanan Kehamilan
                </h3>
                <ul className="space-y-3">
                  {[
                    'Antenatal care (ANC) rutin',
                    'USG kehamilan dan monitoring janin',
                    'Konseling prenatal dan gizi',
                    'Senam hamil dan kelas ibu',
                    'Deteksi dini komplikasi kehamilan',
                    'Imunisasi ibu hamil'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <SparklesIcon className="h-6 w-6 text-emerald-600 mr-3" />
                  Pelayanan Persalinan
                </h3>
                <ul className="space-y-3">
                  {[
                    'Persalinan normal dengan bantuan',
                    'Sectio caesarea (operasi caesar)',
                    'Persalinan dengan epidural',
                    'Vacuum dan forceps extraction',
                    'Emergency obstetri 24 jam',
                    'Water birth (persalinan air)'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <BeakerIcon className="h-6 w-6 text-emerald-600 mr-3" />
                  Perawatan Nifas
                </h3>
                <ul className="space-y-3">
                  {[
                    'Monitoring post partum',
                    'Perawatan luka operasi/episiotomi',
                    'Konseling laktasi dan ASI eksklusif',
                    'Deteksi dini baby blues/depresi',
                    'KB pasca persalinan',
                    'Imunisasi bayi baru lahir'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <StarIcon className="h-6 w-6 text-emerald-600 mr-3" />
                  Perawatan Bayi
                </h3>
                <ul className="space-y-3">
                  {[
                    'Neonatal intensive care (NICU)',
                    'Perawatan bayi prematur',
                    'Screening bayi baru lahir',
                    'Fototerapi hiperbilirubin',
                    'Resusitasi neonatal',
                    'Konsultasi tumbuh kembang'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Dokter Spesialis</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokter spesialis obstetri ginekologi dan konsultan maternal fetal medicine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Sari Indrawati, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Konsultan Fetomaternal',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '18+ tahun'
                },
                {
                  name: 'Dr. Maya Kusuma, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Konsultan Onkologi Ginekologi',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '15+ tahun'
                },
                {
                  name: 'Dr. Fitri Handayani, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Konsultan Reproduksi',
                  schedule: 'Senin, Kamis',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Rina Purnama, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Konsultan Uroginekologi',
                  schedule: 'Selasa, Jumat',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Lestari Dewi, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Konsultan Endokrinologi Reproduksi',
                  schedule: 'Rabu, Sabtu',
                  experience: '13+ tahun'
                },
                {
                  name: 'Dr. Nur Aini, Sp.OG',
                  specialty: 'Spesialis Obstetri Ginekologi',
                  subspecialty: 'Emergency Obstetri',
                  schedule: 'On Call 24/7',
                  experience: '12+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <HeartIcon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
                      <p className="text-sm text-gray-500">{doctor.subspecialty}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{doctor.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      <span>Pengalaman: {doctor.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Kebidanan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kamar rawat inap yang nyaman untuk ibu dan bayi dengan fasilitas lengkap
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'Suite Keluarga',
                  price: 'Rp 750.000/hari',
                  features: ['1 tempat tidur king size', 'Ruang keluarga', 'Baby cot premium', 'AC', 'TV LCD 50"', 'Kulkas & minibar', 'Kamar mandi luxe', 'Sofa bed pengunjung', 'WiFi premium', 'Baby care kit'],
                  color: 'from-emerald-500 to-emerald-600',
                  available: 2
                },
                {
                  type: 'VIP Kebidanan',
                  price: 'Rp 500.000/hari',
                  features: ['1 tempat tidur', 'Baby cot', 'AC', 'TV LCD 42"', 'Kulkas', 'Kamar mandi dalam', 'Sofa pengunjung', 'WiFi gratis', 'Baby monitor'],
                  color: 'from-teal-500 to-teal-600',
                  available: 4
                },
                {
                  type: 'Kelas I Kebidanan',
                  price: 'Rp 350.000/hari',
                  features: ['1 tempat tidur', 'Baby cot', 'AC', 'TV LCD', 'Kamar mandi dalam', 'WiFi gratis', 'Kursi menyusui'],
                  color: 'from-cyan-500 to-cyan-600',
                  available: 8
                },
                {
                  type: 'Kelas II Kebidanan',
                  price: 'Rp 250.000/hari',
                  features: ['2 tempat tidur', 'Baby cot bersama', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-green-500 to-green-600',
                  available: 10
                }
              ].map((room, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${room.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold mb-2">{room.type}</h3>
                    <p className="text-2xl font-bold mb-2">{room.price}</p>
                    <p className="text-sm opacity-90">Tersedia: {room.available} kamar</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {room.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontak & Informasi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hubungi kami untuk konsultasi kehamilan dan informasi layanan kebidanan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Emergency Obstetri</p>
                      <p className="text-gray-600">(0751) 7051106</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station Kebidanan</p>
                      <p className="text-gray-600">(0751) 7051107</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 4, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Kehamilan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Usia Kehamilan</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option>Pilih usia kehamilan</option>
                      <option>Trimester 1 (0-12 minggu)</option>
                      <option>Trimester 2 (13-27 minggu)</option>
                      <option>Trimester 3 (28-40 minggu)</option>
                      <option>Program hamil</option>
                      <option>Konsultasi KB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan/Pertanyaan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Jelaskan keluhan atau pertanyaan Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Selamat Datang Calon Ibu</h2>
          <p className="text-xl mb-8 text-emerald-100">Percayakan kehamilan dan persalinan Anda pada tim obstetri terbaik kami</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
              Konsultasi Kehamilan
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-emerald-900 transition-colors">
              Daftar Kelas Ibu Hamil
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
