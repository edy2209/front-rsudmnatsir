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
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function RawatInapInternePriaPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-bounce">
                <UserIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Rawat Inap Interne Pria
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ruang rawat inap khusus pria dengan pelayanan penyakit dalam yang komprehensif 
              dan fasilitas modern untuk kenyamanan pasien
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <HeartIcon className="h-5 w-5 mr-2" />
                <span>Perawatan Komprehensif</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Tim Medis Berpengalaman</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Monitoring 24/7</span>
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
              { id: 'rooms', label: 'Tipe Kamar', icon: UserIcon },
              { id: 'contact', label: 'Kontak', icon: PhoneIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
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
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Total Bed</p>
                    <p className="text-3xl font-bold">32</p>
                  </div>
                  <UserIcon className="h-8 w-8 text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm font-medium">Dokter Spesialis</p>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-indigo-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Pasien/Bulan</p>
                    <p className="text-3xl font-bold">280+</p>
                  </div>
                  <ChartBarIcon className="h-8 w-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Recovery Rate</p>
                    <p className="text-3xl font-bold">95%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ruang rawat inap modern dengan fasilitas lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim dokter spesialis penyakit dalam berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Monitoring 24 jam dengan perawat terlatih</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Akses mudah ke laboratorium dan radiologi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Visite Dokter</h4>
                    <p className="text-sm text-gray-600">Senin-Sabtu: 08.00-10.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Nurse Station</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Rawat Inap</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas modern dan lengkap untuk kenyamanan perawatan pasien pria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: UserIcon,
                  title: 'Nurse Station 24/7',
                  description: 'Pos perawat yang selalu siaga 24 jam dengan sistem monitoring terintegrasi',
                  color: 'blue'
                },
                {
                  icon: HeartIcon,
                  title: 'Cardiac Monitor',
                  description: 'Monitor jantung untuk pasien dengan kondisi kardiovaskular',
                  color: 'red'
                },
                {
                  icon: BeakerIcon,
                  title: 'Laboratory Access',
                  description: 'Akses cepat ke laboratorium untuk pemeriksaan penunjang',
                  color: 'green'
                },
                {
                  icon: EyeIcon,
                  title: 'Vital Sign Monitor',
                  description: 'Monitoring tanda vital kontinyu untuk observasi ketat',
                  color: 'purple'
                },
                {
                  icon: CogIcon,
                  title: 'Medical Equipment',
                  description: 'Peralatan medis lengkap untuk berbagai kondisi penyakit dalam',
                  color: 'orange'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Emergency Response',
                  description: 'Tim respon cepat untuk kondisi darurat medis',
                  color: 'yellow'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  red: 'from-red-500 to-red-600 text-red-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600',
                  orange: 'from-orange-500 to-orange-600 text-orange-600',
                  yellow: 'from-yellow-500 to-yellow-600 text-yellow-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.blue;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Penyakit Dalam</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pelayanan komprehensif untuk berbagai penyakit dalam dengan pendekatan holistik
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <HeartIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Penyakit Kardiovaskular
                </h3>
                <ul className="space-y-3">
                  {[
                    'Hipertensi dan komplikasinya',
                    'Penyakit jantung koroner',
                    'Gagal jantung',
                    'Aritmia',
                    'Penyakit katup jantung',
                    'Kardiomiopati'
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
                  <BeakerIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Penyakit Metabolik
                </h3>
                <ul className="space-y-3">
                  {[
                    'Diabetes mellitus dan komplikasinya',
                    'Dislipidemia',
                    'Gangguan tiroid',
                    'Obesitas',
                    'Sindrom metabolik',
                    'Gangguan elektrolit'
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
                  <CogIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Penyakit Sistem Pencernaan
                </h3>
                <ul className="space-y-3">
                  {[
                    'Gastritis dan GERD',
                    'Hepatitis dan sirosis',
                    'Inflammatory bowel disease',
                    'Pankreatitis',
                    'Gangguan pencernaan lainnya',
                    'Detoksifikasi hati'
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
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Penyakit Infeksi & Imunologi
                </h3>
                <ul className="space-y-3">
                  {[
                    'Demam dan infeksi bakterial',
                    'Infeksi virus',
                    'Tuberkulosis',
                    'Gangguan autoimun',
                    'Sepsis dan syok septic',
                    'HIV/AIDS dan komplikasinya'
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
                Dokter spesialis penyakit dalam dengan pengalaman dan kompetensi tinggi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Bambang Sutopo, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Kardiologi',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '18+ tahun'
                },
                {
                  name: 'Dr. Ahmad Hidayat, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Endokrinologi',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '15+ tahun'
                },
                {
                  name: 'Dr. Hendro Prasetyo, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Gastrohepatologi',
                  schedule: 'Senin, Kamis',
                  experience: '12+ tahun'
                },
                {
                  name: 'Dr. Dedy Kurniawan, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Infeksi Tropik',
                  schedule: 'Selasa, Jumat',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Irwan Budiman, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Nefrologi',
                  schedule: 'Rabu, Sabtu',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Rizki Pratama, Sp.PD',
                  specialty: 'Spesialis Penyakit Dalam',
                  subspecialty: 'Hematologi Onkologi',
                  schedule: 'Senin, Kamis, Sabtu',
                  experience: '11+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Rawat Inap</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pilihan kamar dengan fasilitas yang sesuai untuk kenyamanan perawatan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'Kelas VIP',
                  price: 'Rp 450.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV LCD 32"', 'Kulkas', 'Sofa tamu', 'Kamar mandi dalam', 'WiFi gratis', 'Nurse call'],
                  color: 'from-purple-500 to-purple-600',
                  available: 4
                },
                {
                  type: 'Kelas I',
                  price: 'Rp 280.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV LCD', 'Kamar mandi dalam', 'WiFi gratis', 'Nurse call'],
                  color: 'from-blue-500 to-blue-600',
                  available: 8
                },
                {
                  type: 'Kelas II',
                  price: 'Rp 180.000/hari',
                  features: ['2 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis', 'Nurse call'],
                  color: 'from-green-500 to-green-600',
                  available: 12
                },
                {
                  type: 'Kelas III',
                  price: 'Rp 120.000/hari',
                  features: ['4 tempat tidur', 'Kipas angin', 'TV', 'Kamar mandi bersama', 'WiFi gratis'],
                  color: 'from-orange-500 to-orange-600',
                  available: 8
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
                Hubungi kami untuk informasi lebih lanjut atau konsultasi rawat inap
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station</p>
                      <p className="text-gray-600">(0751) 7051103</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Informasi & Pendaftaran</p>
                      <p className="text-gray-600">(0751) 7051100</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 3, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulir Konsultasi</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan/Gejala</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Pilih keluhan utama</option>
                      <option>Penyakit Jantung</option>
                      <option>Diabetes</option>
                      <option>Hipertensi</option>
                      <option>Gangguan Pencernaan</option>
                      <option>Infeksi</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Jelaskan keluhan Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Perawatan Penyakit Dalam?</h2>
          <p className="text-xl mb-8 text-blue-100">Konsultasikan kondisi kesehatan Anda dengan dokter spesialis kami</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Konsultasi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors">
              Lihat Jadwal Dokter
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
