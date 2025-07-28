'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  CpuChipIcon,
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
  BoltIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function RawatInapNeurologiPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9Im5ldXJvbiIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjYiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48bGluZSB4MT0iNzUiIHkxPSI3NSIgeDI9IjEyMCIgeTI9IjMwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSI3NSIgeTE9Ijc1IiB4Mj0iMzAiIHkyPSIxMjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25ldXJvbikiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <CpuChipIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Rawat Inap Neurologi
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Unit rawat inap neurologi dengan teknologi canggih dan tim dokter spesialis saraf 
              berpengalaman untuk penanganan gangguan sistem saraf pusat dan tepi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <CpuChipIcon className="h-5 w-5 mr-2" />
                <span>Advanced Neurology Care</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Neurologist Team</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>24/7 Stroke Unit</span>
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
              { id: 'services', label: 'Layanan', icon: CpuChipIcon },
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
                      ? 'border-purple-600 text-purple-600 bg-purple-50'
                      : 'border-transparent text-gray-600 hover:text-purple-600 hover:border-purple-300'
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
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Bed Neurologi</p>
                    <p className="text-3xl font-bold">20</p>
                  </div>
                  <CpuChipIcon className="h-8 w-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-500 to-violet-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-violet-100 text-sm font-medium">Neurologist</p>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                  <UserGroupIcon className="h-8 w-8 text-violet-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm font-medium">Stroke Cases/Bulan</p>
                    <p className="text-3xl font-bold">85+</p>
                  </div>
                  <BoltIcon className="h-8 w-8 text-indigo-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Recovery Rate</p>
                    <p className="text-3xl font-bold">92%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Stroke unit dengan monitoring 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim neurologi dengan sub-spesialisasi lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Teknologi neuroimaging terkini</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Rehabilitasi neurologis terintegrasi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl shadow-xl p-8 border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Stroke Unit</h4>
                    <p className="text-sm text-gray-600">24 jam monitoring intensif</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Stroke</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051110</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Neurologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas neurologi terlengkap untuk diagnosis dan terapi gangguan sistem saraf
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: CpuChipIcon,
                  title: 'EEG Digital',
                  description: 'Elektroensefalografi digital untuk monitoring aktivitas otak',
                  color: 'purple'
                },
                {
                  icon: BoltIcon,
                  title: 'EMG/NCV',
                  description: 'Elektromiografi dan nerve conduction velocity untuk diagnosis neuropati',
                  color: 'violet'
                },
                {
                  icon: BeakerIcon,
                  title: 'Lumbar Puncture Unit',
                  description: 'Fasilitas pungsi lumbal untuk analisis cairan serebrospinal',
                  color: 'indigo'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Neuro Monitoring',
                  description: 'Monitoring neurologis kontinyu untuk pasien kritis',
                  color: 'blue'
                },
                {
                  icon: CogIcon,
                  title: 'Stroke Unit',
                  description: 'Unit khusus stroke dengan peralatan monitoring canggih',
                  color: 'green'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Neuro Rehabilitation',
                  description: 'Pusat rehabilitasi neurologi dengan fisioterapi dan okupasi terapi',
                  color: 'orange'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  purple: 'from-purple-500 to-purple-600 text-purple-600',
                  violet: 'from-violet-500 to-violet-600 text-violet-600',
                  indigo: 'from-indigo-500 to-indigo-600 text-indigo-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  orange: 'from-orange-500 to-orange-600 text-orange-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.purple;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Neurologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pelayanan komprehensif untuk gangguan sistem saraf pusat dan perifer
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CpuChipIcon className="h-6 w-6 text-purple-600 mr-3" />
                  Gangguan Serebrovaskular
                </h3>
                <ul className="space-y-3">
                  {[
                    'Stroke iskemik dan hemoragik',
                    'Transient ischemic attack (TIA)',
                    'Aneurisma serebral',
                    'Arteriovenous malformation (AVM)',
                    'Carotid stenosis',
                    'Trombosis vena serebral'
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
                  <BoltIcon className="h-6 w-6 text-purple-600 mr-3" />
                  Gangguan Epilepsi
                </h3>
                <ul className="space-y-3">
                  {[
                    'Epilepsi focal dan generalized',
                    'Status epilepticus',
                    'Epilepsi refrakter',
                    'Video EEG monitoring',
                    'Terapi anti-epilepsi',
                    'Epilepsi pada anak dan dewasa'
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
                  <BeakerIcon className="h-6 w-6 text-purple-600 mr-3" />
                  Gangguan Neuromuskular
                </h3>
                <ul className="space-y-3">
                  {[
                    'Myasthenia gravis',
                    'Distrofi muskular',
                    'Neuropati perifer',
                    'Guillain-Barré syndrome',
                    'Amyotrophic lateral sclerosis (ALS)',
                    'Myopati inflamatori'
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
                  <CogIcon className="h-6 w-6 text-purple-600 mr-3" />
                  Gangguan Neurodegeneratif
                </h3>
                <ul className="space-y-3">
                  {[
                    'Penyakit Parkinson',
                    'Alzheimer dan demensia',
                    'Huntington disease',
                    'Multiple sclerosis',
                    'Ataksia herediter',
                    'Progressive supranuclear palsy'
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Dokter Spesialis Neurologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokter spesialis neurologi dengan sub-spesialisasi di berbagai bidang
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Ahmad Syahrul, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Stroke & Neurovaskular',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '17+ tahun'
                },
                {
                  name: 'Dr. Sari Neurinda, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Epileptologi',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '15+ tahun'
                },
                {
                  name: 'Dr. Bambang Setiawan, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Neuromuskular',
                  schedule: 'Senin, Kamis',
                  experience: '19+ tahun'
                },
                {
                  name: 'Dr. Maya Kusuma, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Movement Disorder',
                  schedule: 'Selasa, Jumat',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Hendri Gunawan, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Neurokritis',
                  schedule: 'Rabu, Sabtu',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Rina Purnama, Sp.S',
                  specialty: 'Spesialis Neurologi',
                  subspecialty: 'Neurodegeneratif',
                  schedule: 'Senin, Rabu, Sabtu',
                  experience: '13+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-purple-600 font-medium">{doctor.specialty}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Rawat Inap Neurologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kamar rawat inap yang tenang dan nyaman untuk pemulihan neurologis
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'Neuro ICU',
                  price: 'Rp 800.000/hari',
                  features: ['1 tempat tidur ICU', 'Ventilator ready', 'Neuro monitoring', 'AC steril', 'Nurse 1:1', 'Family room', 'WiFi premium'],
                  color: 'from-purple-500 to-purple-600',
                  available: 4
                },
                {
                  type: 'VIP Neurologi',
                  price: 'Rp 500.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV LCD', 'Quiet zone', 'Kamar mandi dalam', 'WiFi gratis', 'Neuro assessment'],
                  color: 'from-violet-500 to-violet-600',
                  available: 6
                },
                {
                  type: 'Kelas I Neurologi',
                  price: 'Rp 350.000/hari',
                  features: ['1 tempat tidur', 'AC', 'TV', 'Low noise', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-indigo-500 to-indigo-600',
                  available: 6
                },
                {
                  type: 'Kelas II Neurologi',
                  price: 'Rp 250.000/hari',
                  features: ['2 tempat tidur', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis', 'Privacy curtain'],
                  color: 'from-blue-500 to-blue-600',
                  available: 4
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
                Hubungi kami untuk konsultasi neurologi dan emergency stroke
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Emergency Stroke</p>
                      <p className="text-gray-600">(0751) 7051110</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station Neurologi</p>
                      <p className="text-gray-600">(0751) 7051111</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 6, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Neurologi</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Neurologis</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Pilih keluhan neurologis</option>
                      <option>Stroke</option>
                      <option>Epilepsi/Kejang</option>
                      <option>Sakit Kepala</option>
                      <option>Kelemahan Otot</option>
                      <option>Tremor/Gerakan Abnormal</option>
                      <option>Gangguan Memori</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Keluhan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Jelaskan keluhan neurologis Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 to-violet-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Deteksi Dini Gangguan Neurologis</h2>
          <p className="text-xl mb-8 text-purple-100">Konsultasikan gejala neurologis Anda dengan tim ahli saraf berpengalaman</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
              Konsultasi Neurologi
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors">
              Emergency Stroke
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
