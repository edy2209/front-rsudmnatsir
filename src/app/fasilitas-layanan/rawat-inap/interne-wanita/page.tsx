'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  UserIcon,
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
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function RawatInapInterneWanitaPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZmxvd2VyIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjMiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2Zsb3dlcikiLz48L3N2Zz4=')] opacity-40"></div>
        </div>
        
        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <SparklesIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Rawat Inap Interne Wanita
            </h1>
            <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Ruang rawat inap khusus wanita dengan pelayanan penyakit dalam yang komprehensif 
              dalam lingkungan yang nyaman dan ramah wanita
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <HeartIcon className="h-5 w-5 mr-2" />
                <span>Women-Friendly Care</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Tim Medis Berpengalaman</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Perawatan 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
              { id: 'facilities', label: 'Fasilitas', icon: CogIcon },
              { id: 'services', label: 'Layanan', icon: HeartIcon },
              { id: 'doctors', label: 'Tim Dokter', icon: UserGroupIcon },
              { id: 'rooms', label: 'Tipe Kamar', icon: SparklesIcon },
              { id: 'contact', label: 'Kontak', icon: PhoneIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-pink-600 text-pink-600 bg-pink-50'
                      : 'border-transparent text-gray-600 hover:text-pink-600 hover:border-pink-300'
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
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm font-medium">Total Bed</p>
                    <p className="text-3xl font-bold">28</p>
                  </div>
                  <SparklesIcon className="h-8 w-8 text-pink-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-rose-100 text-sm font-medium">Dokter Spesialis</p>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-rose-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Pasien/Bulan</p>
                    <p className="text-3xl font-bold">240+</p>
                  </div>
                  <ChartBarIcon className="h-8 w-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Satisfaction Rate</p>
                    <p className="text-3xl font-bold">97%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ruang rawat inap khusus wanita dengan privacy terjaga</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim dokter dan perawat wanita yang berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Fasilitas tambahan untuk kebutuhan khusus wanita</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Konseling dan edukasi kesehatan wanita</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-pink-100">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Visite Dokter</h4>
                    <p className="text-sm text-gray-600">Senin-Sabtu: 08.00-10.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Nurse Station</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051104</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Khusus Wanita</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas lengkap yang dirancang khusus untuk kenyamanan dan kebutuhan pasien wanita
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: SparklesIcon,
                  title: 'Women-Only Area',
                  description: 'Area khusus wanita dengan akses terbatas untuk menjaga privacy dan kenyamanan',
                  color: 'pink'
                },
                {
                  icon: HeartIcon,
                  title: 'Cardiac Care Unit',
                  description: 'Unit perawatan khusus untuk kondisi kardiovaskular pada wanita',
                  color: 'red'
                },
                {
                  icon: BeakerIcon,
                  title: 'Women Health Lab',
                  description: 'Laboratorium dengan pemeriksaan khusus kesehatan reproduksi wanita',
                  color: 'purple'
                },
                {
                  icon: EyeIcon,
                  title: 'Privacy Monitors',
                  description: 'Sistem monitoring yang menjaga privacy dengan teknologi terkini',
                  color: 'blue'
                },
                {
                  icon: CogIcon,
                  title: 'Comfort Amenities',
                  description: 'Fasilitas tambahan seperti hair dryer, cermin rias, dan perlengkapan wanita',
                  color: 'green'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Safety & Security',
                  description: 'Sistem keamanan berlapis untuk keselamatan pasien wanita',
                  color: 'orange'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  pink: 'from-pink-500 to-pink-600 text-pink-600',
                  red: 'from-red-500 to-red-600 text-red-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  orange: 'from-orange-500 to-orange-600 text-orange-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.pink;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kesehatan Wanita</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pelayanan komprehensif penyakit dalam dengan fokus khusus pada kesehatan wanita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <HeartIcon className="h-6 w-6 text-pink-600 mr-3" />
                  Kesehatan Kardiovaskular Wanita
                </h3>
                <ul className="space-y-3">
                  {[
                    'Hipertensi pada kehamilan',
                    'Penyakit jantung iskemik pada wanita',
                    'Gagal jantung dengan preserved ejection fraction',
                    'Aritmia terkait hormonal',
                    'Kardiotoksisitas kemoterapi',
                    'Sindrom takotsubo'
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
                  <BeakerIcon className="h-6 w-6 text-pink-600 mr-3" />
                  Endokrinologi Wanita
                </h3>
                <ul className="space-y-3">
                  {[
                    'Diabetes gestasional dan pre-gestasional',
                    'PCOS (Polycystic Ovary Syndrome)',
                    'Gangguan tiroid pada wanita',
                    'Osteoporosis dan metabolisme tulang',
                    'Sindrom menopause',
                    'Gangguan hormonal reproduksi'
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
                  <CogIcon className="h-6 w-6 text-pink-600 mr-3" />
                  Gastroenterologi Wanita
                </h3>
                <ul className="space-y-3">
                  {[
                    'IBS (Irritable Bowel Syndrome)',
                    'GERD dalam kehamilan',
                    'Hepatitis autoimun',
                    'Penyakit Crohn dan kolitis ulseratif',
                    'Gangguan fungsi hati',
                    'Gastroparesis diabetik'
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
                  <ShieldCheckIcon className="h-6 w-6 text-pink-600 mr-3" />
                  Reumatologi & Imunologi
                </h3>
                <ul className="space-y-3">
                  {[
                    'Lupus eritematosus sistemik',
                    'Rheumatoid arthritis',
                    'Sindrom Sjögren',
                    'Fibromyalgia',
                    'Osteoarthritis',
                    'Vaskulitis sistemik'
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
                Dokter spesialis berpengalaman dalam menangani penyakit dalam pada wanita
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Sari Dewi, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Endokrinologi',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Maya Indira, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Kardiologi',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Rina Permata, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Reumatologi',
                  schedule: 'Senin, Kamis',
                  experience: '13+ tahun'
                },
                {
                  name: 'Dr. Fitri Handayani, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Gastrohepatologi',
                  schedule: 'Selasa, Jumat',
                  experience: '15+ tahun'
                },
                {
                  name: 'Dr. Nur Aini, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Geriatri',
                  schedule: 'Rabu, Sabtu',
                  experience: '12+ tahun'
                },
                {
                  name: 'Dr. Lestari Wulan, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Hematologi',
                  schedule: 'Senin, Rabu, Sabtu',
                  experience: '11+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-pink-600 font-medium">{doctor.specialty}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Khusus Wanita</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kamar rawat inap dengan desain dan fasilitas yang memperhatikan kebutuhan khusus wanita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'Suite VIP Wanita',
                  price: 'Rp 550.000/hari',
                  features: ['1 tempat tidur premium', 'AC', 'TV LCD 42"', 'Mini bar', 'Sofa set', 'Kamar mandi luxe', 'Hair dryer', 'WiFi premium', 'Nurse call', 'Privacy curtain'],
                  color: 'from-pink-500 to-pink-600',
                  available: 3
                },
                {
                  type: 'Kelas I Wanita',
                  price: 'Rp 320.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV LCD', 'Kamar mandi dalam', 'Hair dryer', 'WiFi gratis', 'Nurse call', 'Privacy screen'],
                  color: 'from-purple-500 to-purple-600',
                  available: 8
                },
                {
                  type: 'Kelas II Wanita',
                  price: 'Rp 220.000/hari',
                  features: ['2 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis', 'Nurse call', 'Privacy curtain'],
                  color: 'from-rose-500 to-rose-600',
                  available: 10
                },
                {
                  type: 'Kelas III Wanita',
                  price: 'Rp 150.000/hari',
                  features: ['4 tempat tidur', 'Kipas angin', 'TV', 'Kamar mandi bersama', 'WiFi gratis', 'Privacy area'],
                  color: 'from-orange-500 to-orange-600',
                  available: 7
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
                Hubungi kami untuk informasi lebih lanjut tentang layanan rawat inap wanita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station Wanita</p>
                      <p className="text-gray-600">(0751) 7051104</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Konsultasi Kesehatan Wanita</p>
                      <p className="text-gray-600">(0751) 7051105</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 2, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Kesehatan Wanita</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Utama</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option>Pilih keluhan utama</option>
                      <option>Gangguan Hormonal</option>
                      <option>Penyakit Jantung</option>
                      <option>Diabetes</option>
                      <option>Hipertensi</option>
                      <option>Gangguan Pencernaan</option>
                      <option>Reumatologi</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Jelaskan keluhan Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-700 hover:to-pink-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Perawatan Kesehatan Wanita Terbaik</h2>
          <p className="text-xl mb-8 text-pink-100">Dapatkan perawatan terbaik dengan tim medis yang memahami kebutuhan khusus wanita</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-900 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition-colors">
              Konsultasi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-pink-900 transition-colors">
              Lihat Jadwal Dokter
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
