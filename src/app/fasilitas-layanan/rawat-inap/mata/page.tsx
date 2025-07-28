'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  EyeIcon,
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
  UserIcon,
  UserGroupIcon,
  StarIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function RawatInapMataPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-violet-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImV5ZSIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iMyIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNleWUpIi8+PC9zdmc+')] opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <EyeIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Rawat Inap Mata
            </h1>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Unit rawat inap mata dengan fasilitas oftalmologi terkini dan tim dokter spesialis mata berpengalaman 
              untuk memberikan perawatan mata terbaik
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <EyeIcon className="h-5 w-5 mr-2" />
                <span>Advanced Eye Care</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Dokter Spesialis Mata</span>
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
              { id: 'services', label: 'Layanan', icon: EyeIcon },
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
                      ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                      : 'border-transparent text-gray-600 hover:text-indigo-600 hover:border-indigo-300'
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
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm font-medium">Bed Mata</p>
                    <p className="text-3xl font-bold">16</p>
                  </div>
                  <EyeIcon className="h-8 w-8 text-indigo-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Dokter Spesialis</p>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-500 to-violet-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-violet-100 text-sm font-medium">Operasi/Bulan</p>
                    <p className="text-3xl font-bold">120+</p>
                  </div>
                  <CogIcon className="h-8 w-8 text-violet-200" />
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
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Teknologi oftalmologi terdepan dan modern</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim dokter spesialis mata dan sub-spesialis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Kamar operasi mata dengan standar internasional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Perawatan post-operasi dengan monitoring ketat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl shadow-xl p-8 border border-indigo-100">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jadwal Operasi</h4>
                    <p className="text-sm text-gray-600">Senin-Jumat: 08.00-16.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Mata</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051108</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Oftalmologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas mata terlengkap dengan teknologi terkini untuk diagnosis dan terapi mata
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: EyeIcon,
                  title: 'Phacoemulsification',
                  description: 'Teknologi terkini untuk operasi katarak dengan teknik minimal invasif',
                  color: 'indigo'
                },
                {
                  icon: BeakerIcon,
                  title: 'OCT (Optical Coherence Tomography)',
                  description: 'Pemeriksaan detail struktur retina dengan resolusi tinggi',
                  color: 'blue'
                },
                {
                  icon: CogIcon,
                  title: 'Vitrectomy System',
                  description: 'Sistem operasi vitreoretinal untuk gangguan retina kompleks',
                  color: 'violet'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Fundus Camera',
                  description: 'Foto fundus digital untuk dokumentasi dan monitoring retina',
                  color: 'purple'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Laser Therapy',
                  description: 'Terapi laser untuk berbagai kondisi mata seperti glaukoma dan retinopati',
                  color: 'green'
                },
                {
                  icon: StarIcon,
                  title: 'Corneal Topography',
                  description: 'Pemetaan kornea untuk diagnosis astigmatisme dan keratokonus',
                  color: 'yellow'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  indigo: 'from-indigo-500 to-indigo-600 text-indigo-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  violet: 'from-violet-500 to-violet-600 text-violet-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  yellow: 'from-yellow-500 to-yellow-600 text-yellow-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.indigo;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Mata</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Layanan komprehensif untuk berbagai penyakit mata dengan teknologi mutakhir
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <EyeIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  Bedah Katarak
                </h3>
                <ul className="space-y-3">
                  {[
                    'Phacoemulsification (PHACO)',
                    'Ekstraksi katarak ekstrakapsular',
                    'Implantasi lensa intraokular (IOL)',
                    'Operasi katarak kompleks',
                    'Laser-assisted cataract surgery',
                    'Premium IOL multifocal'
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
                  <BeakerIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  Terapi Retina
                </h3>
                <ul className="space-y-3">
                  {[
                    'Vitrectomy pars plana',
                    'Injeksi anti-VEGF intravitreal',
                    'Laser fotokoagulasi retina',
                    'Pengobatan retinopati diabetik',
                    'Terapi degenerasi makula',
                    'Pelepasan retina regmatogen'
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
                  <CogIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  Terapi Glaukoma
                </h3>
                <ul className="space-y-3">
                  {[
                    'Trabekulektomi',
                    'Laser trabekuloplasti',
                    'Iridotomi perifer laser',
                    'Implant drainage tube',
                    'Terapi medikamentosa glaukoma',
                    'Monitoring tekanan intraokular'
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
                  <ShieldCheckIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  Bedah Refraktif
                </h3>
                <ul className="space-y-3">
                  {[
                    'LASIK (Laser-Assisted In Situ Keratomileusis)',
                    'PRK (Photorefractive Keratectomy)',
                    'Implantable Contact Lens (ICL)',
                    'Cross-linking kornea',
                    'Keratoplasti penetrans',
                    'Pterygium excision'
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Dokter Spesialis Mata</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokter spesialis mata dan sub-spesialis dengan keahlian di berbagai bidang oftalmologi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Ahmad Rifai, Sp.M',
                  specialty: 'Spesialis Mata',
                  subspecialty: 'Vitreoretinal',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Sari Ophelia, Sp.M',
                  specialty: 'Spesialis Mata',
                  subspecialty: 'Katarak & Refraktif',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Bambang Setiawan, Sp.M',
                  specialty: 'Spesialis Mata',
                  subspecialty: 'Glaukoma',
                  schedule: 'Senin, Kamis',
                  experience: '18+ tahun'
                },
                {
                  name: 'Dr. Maya Cornelia, Sp.M',
                  specialty: 'Spesialis Mata',
                  subspecialty: 'Kornea & Eksternal',
                  schedule: 'Selasa, Jumat',
                  experience: '12+ tahun'
                },
                {
                  name: 'Dr. Hendri Gunawan, Sp.M',
                  specialty: 'Spesialis Mata',
                  subspecialty: 'Pediatric Ophthalmology',
                  schedule: 'Rabu, Sabtu',
                  experience: '15+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Rawat Inap Mata</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kamar rawat inap yang nyaman untuk pemulihan pasca operasi mata
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'VIP Eye Care',
                  price: 'Rp 450.000/hari',
                  features: ['1 tempat tidur', 'AC dengan filter HEPA', 'TV LCD', 'Pencahayaan mata-friendly', 'Kamar mandi dalam', 'WiFi gratis', 'Eye protection kit', 'Nurse call'],
                  color: 'from-indigo-500 to-indigo-600',
                  available: 3
                },
                {
                  type: 'Kelas I Mata',
                  price: 'Rp 300.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV', 'Lampu baca', 'Kamar mandi dalam', 'WiFi gratis', 'Eye shield'],
                  color: 'from-blue-500 to-blue-600',
                  available: 6
                },
                {
                  type: 'Kelas II Mata',
                  price: 'Rp 200.000/hari',
                  features: ['2 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis', 'Privacy curtain'],
                  color: 'from-violet-500 to-violet-600',
                  available: 4
                },
                {
                  type: 'Kelas III Mata',
                  price: 'Rp 150.000/hari',
                  features: ['4 tempat tidur', 'Kipas angin', 'TV', 'Kamar mandi bersama', 'WiFi gratis'],
                  color: 'from-purple-500 to-purple-600',
                  available: 3
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
                Hubungi kami untuk konsultasi mata dan informasi layanan oftalmologi
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Emergency Mata</p>
                      <p className="text-gray-600">(0751) 7051108</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station Mata</p>
                      <p className="text-gray-600">(0751) 7051109</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 5, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-indigo-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Mata</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Mata</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      <option>Pilih keluhan mata</option>
                      <option>Katarak</option>
                      <option>Glaukoma</option>
                      <option>Retinopati</option>
                      <option>Refraksi/Minus</option>
                      <option>Pterygium</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Detail</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Jelaskan keluhan mata Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-violet-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Jaga Kesehatan Mata Anda</h2>
          <p className="text-xl mb-8 text-indigo-100">Dapatkan perawatan mata terbaik dengan teknologi terdepan dan dokter spesialis berpengalaman</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
              Konsultasi Mata
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition-colors">
              Jadwal Dokter
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
