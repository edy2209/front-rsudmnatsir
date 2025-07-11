'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  ScissorsIcon,
  UserGroupIcon,
  ClockIcon,
  CogIcon,
  HeartIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  ShieldCheckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function RawatInapBedahPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <ScissorsIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Rawat Inap Bedah
            </h1>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Unit rawat inap bedah dengan fasilitas modern dan tim ahli bedah berpengalaman untuk memberikan 
              perawatan terbaik bagi pasien yang memerlukan tindakan operasi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                <span>Kamar Operasi Modern</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Tim Bedah Berpengalaman</span>
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
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
              { id: 'facilities', label: 'Fasilitas', icon: CogIcon },
              { id: 'services', label: 'Layanan Bedah', icon: ScissorsIcon },
              { id: 'doctors', label: 'Tim Dokter', icon: UserGroupIcon },
              { id: 'rooms', label: 'Tipe Kamar', icon: HeartIcon },
              { id: 'contact', label: 'Kontak', icon: PhoneIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600 bg-red-50'
                      : 'border-transparent text-gray-600 hover:text-red-600 hover:border-red-300'
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
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm font-medium">Kamar Operasi</p>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <ScissorsIcon className="h-8 w-8 text-red-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">Dokter Bedah</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-orange-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm font-medium">Operasi/Bulan</p>
                    <p className="text-3xl font-bold">450+</p>
                  </div>
                  <BeakerIcon className="h-8 w-8 text-yellow-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Success Rate</p>
                    <p className="text-3xl font-bold">98%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Kamar operasi dengan teknologi terkini</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim dokter spesialis bedah berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Peralatan medis canggih dan steril</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Perawatan post-operasi berkualitas tinggi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Info Penting</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Persiapan Pre-Operasi</h4>
                    <p className="text-sm text-gray-600">Konsultasi, pemeriksaan lab, dan puasa sesuai instruksi dokter</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency</h4>
                    <p className="text-sm text-gray-600">Unit Gawat Darurat 24 jam: (0751) 7051102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Rawat Inap Bedah</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas modern dan lengkap untuk mendukung perawatan bedah terbaik
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ScissorsIcon,
                  title: 'Kamar Operasi Modern',
                  description: '8 kamar operasi dengan teknologi terkini dan sistem ventilasi khusus',
                  color: 'red'
                },
                {
                  icon: HeartIcon,
                  title: 'ICU Post-Operasi',
                  description: 'Unit perawatan intensif khusus pasien post-operasi dengan monitoring 24/7',
                  color: 'orange'
                },
                {
                  icon: BeakerIcon,
                  title: 'Recovery Room',
                  description: 'Ruang pemulihan dengan fasilitas monitoring dan perawatan khusus',
                  color: 'yellow'
                },
                {
                  icon: CogIcon,
                  title: 'Peralatan Canggih',
                  description: 'Anesthesi machine, electrocautery, dan peralatan bedah modern',
                  color: 'green'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Sterilisasi Central',
                  description: 'Pusat sterilisasi dengan teknologi terkini untuk keamanan operasi',
                  color: 'blue'
                },
                {
                  icon: UserGroupIcon,
                  title: 'Nurse Station',
                  description: 'Pos perawat dengan sistem monitoring terintegrasi',
                  color: 'purple'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  red: 'from-red-500 to-red-600 text-red-600',
                  orange: 'from-orange-500 to-orange-600 text-orange-600',
                  yellow: 'from-yellow-500 to-yellow-600 text-yellow-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.red;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Bedah</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Berbagai jenis tindakan bedah dengan standar internasional
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <ScissorsIcon className="h-6 w-6 text-red-600 mr-3" />
                  Bedah Umum
                </h3>
                <ul className="space-y-3">
                  {[
                    'Appendektomi (operasi usus buntu)',
                    'Hernioplasti (operasi hernia)',
                    'Kolesistektomi (operasi kantung empedu)',
                    'Operasi tumor jinak',
                    'Bedah trauma',
                    'Bedah emergensi'
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
                  <HeartIcon className="h-6 w-6 text-red-600 mr-3" />
                  Bedah Khusus
                </h3>
                <ul className="space-y-3">
                  {[
                    'Bedah digestif',
                    'Bedah urologi',
                    'Bedah orthopedi',
                    'Bedah ginekologi',
                    'Bedah plastik',
                    'Bedah minimal invasif'
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Dokter Bedah</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokter spesialis bedah berpengalaman dengan kompetensi internasional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Ahmad Fauzi, Sp.B',
                  specialty: 'Spesialis Bedah Umum',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '15+ tahun'
                },
                {
                  name: 'Dr. Siti Nurhaliza, Sp.B',
                  specialty: 'Spesialis Bedah Digestif',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '12+ tahun'
                },
                {
                  name: 'Dr. Bambang Sutrisno, Sp.B',
                  specialty: 'Spesialis Bedah Trauma',
                  schedule: 'Senin - Minggu (On Call)',
                  experience: '18+ tahun'
                },
                {
                  name: 'Dr. Maya Sari, Sp.B',
                  specialty: 'Spesialis Bedah Minimal Invasif',
                  schedule: 'Senin, Kamis, Sabtu',
                  experience: '10+ tahun'
                },
                {
                  name: 'Dr. Hendri Gunawan, Sp.B',
                  specialty: 'Spesialis Bedah Urologi',
                  schedule: 'Selasa, Jumat',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Rina Agustina, Sp.B',
                  specialty: 'Spesialis Bedah Plastik',
                  schedule: 'Rabu, Sabtu',
                  experience: '11+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-red-600 font-medium">{doctor.specialty}</p>
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
                Berbagai pilihan kamar dengan fasilitas lengkap untuk kenyamanan pasien
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  type: 'Kelas VIP',
                  price: 'Rp 500.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV LCD', 'Kulkas', 'Sofa', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  type: 'Kelas I',
                  price: 'Rp 300.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  type: 'Kelas II',
                  price: 'Rp 200.000/hari',
                  features: ['2 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-green-500 to-green-600'
                },
                {
                  type: 'Kelas III',
                  price: 'Rp 150.000/hari',
                  features: ['4 tempat tidur', 'Kipas angin', 'TV', 'Kamar mandi bersama', 'WiFi gratis'],
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((room, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${room.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold mb-2">{room.type}</h3>
                    <p className="text-2xl font-bold">{room.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {room.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontak & Lokasi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih lanjut atau konsultasi
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Telepon</p>
                      <p className="text-gray-600">(0751) 7051102</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Operasional</p>
                      <p className="text-gray-600">24 jam (Emergency)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Pre-Operasi</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Bedah</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Pilih jenis bedah</option>
                      <option>Bedah Umum</option>
                      <option>Bedah Digestif</option>
                      <option>Bedah Urologi</option>
                      <option>Bedah Orthopedi</option>
                      <option>Bedah Plastik</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Tindakan Bedah?</h2>
          <p className="text-xl mb-8 text-red-100">Konsultasikan dengan tim ahli bedah kami untuk penanganan terbaik</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-900 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors">
              Konsultasi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-900 transition-colors">
              Lihat Jadwal Dokter
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
