'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  CloudIcon,
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
  ArrowPathIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function RawatInapParuPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-teal-900 text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImFpciIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xMikiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjxwYXRoIGQ9Ik0yMCA1MFE1MCAzMCA4MCA1MFE1MCA3MCAyMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYWlyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full animate-pulse">
                <CloudIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Rawat Inap Paru
            </h1>
            <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Unit rawat inap paru dengan fasilitas respirologi modern dan tim dokter spesialis paru 
              berpengalaman untuk perawatan gangguan pernapasan dan penyakit paru
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <CloudIcon className="h-5 w-5 mr-2" />
                <span>Advanced Pulmonology</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>Pulmonologist Team</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Respiratory Care 24/7</span>
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
              { id: 'services', label: 'Layanan', icon: CloudIcon },
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
                      ? 'border-cyan-600 text-cyan-600 bg-cyan-50'
                      : 'border-transparent text-gray-600 hover:text-cyan-600 hover:border-cyan-300'
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
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cyan-100 text-sm font-medium">Bed Paru</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <CloudIcon className="h-8 w-8 text-cyan-200" />
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
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-100 text-sm font-medium">Pasien/Bulan</p>
                    <p className="text-3xl font-bold">200+</p>
                  </div>
                  <ChartBarIcon className="h-8 w-8 text-teal-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Recovery Rate</p>
                    <p className="text-3xl font-bold">94%</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <ShieldCheckIcon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Keunggulan Kami</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Unit respirologi dengan ventilator terkini</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tim spesialis paru dan critical care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bronkoskopi dan intervensi paru</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Rehabilitasi paru terintegrasi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-cyan-100">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jadwal & Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                    <p className="text-sm text-gray-600">Senin-Minggu: 10.00-12.00 & 16.00-20.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Bronkoskopi</h4>
                    <p className="text-sm text-gray-600">Senin-Jumat: 08.00-16.00 WIB</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Respirasi</h4>
                    <p className="text-sm text-gray-600">24 jam: (0751) 7051112</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Respirologi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fasilitas respirologi lengkap untuk diagnosis dan terapi penyakit paru-paru
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: CloudIcon,
                  title: 'Ventilator ICU',
                  description: 'Ventilator modern untuk dukungan pernapasan pasien kritis',
                  color: 'cyan'
                },
                {
                  icon: BeakerIcon,
                  title: 'Bronkoskopi',
                  description: 'Fasilitas bronkoskopi fleksibel untuk diagnosis dan terapi',
                  color: 'blue'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Spirometri',
                  description: 'Pemeriksaan fungsi paru dengan teknologi digital',
                  color: 'teal'
                },
                {
                  icon: ArrowPathIcon,
                  title: 'CPAP/BiPAP',
                  description: 'Terapi non-invasive ventilation untuk sleep apnea dan COPD',
                  color: 'green'
                },
                {
                  icon: CogIcon,
                  title: 'Thoracentesis Unit',
                  description: 'Fasilitas torakosintesis dan chest tube insertion',
                  color: 'blue'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Pulmonary Rehab',
                  description: 'Program rehabilitasi paru untuk pemulihan fungsi pernapasan',
                  color: 'purple'
                }
              ].map((facility, index) => {
                const Icon = facility.icon;
                const colorClasses: Record<string, string> = {
                  cyan: 'from-cyan-500 to-cyan-600 text-cyan-600',
                  blue: 'from-blue-500 to-blue-600 text-blue-600',
                  teal: 'from-teal-500 to-teal-600 text-teal-600',
                  green: 'from-green-500 to-green-600 text-green-600',
                  purple: 'from-purple-500 to-purple-600 text-purple-600'
                };

                const colorClass = colorClasses[facility.color] || colorClasses.cyan;
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Paru</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pelayanan komprehensif untuk berbagai penyakit paru dan gangguan pernapasan
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CloudIcon className="h-6 w-6 text-cyan-600 mr-3" />
                  Penyakit Obstruktif
                </h3>
                <ul className="space-y-3">
                  {[
                    'COPD (Chronic Obstructive Pulmonary Disease)',
                    'Asma bronkial',
                    'Bronkiektasis',
                    'Emfisema',
                    'Bronkitis kronis',
                    'Terapi inhalasi dan nebulisasi'
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
                  <BeakerIcon className="h-6 w-6 text-cyan-600 mr-3" />
                  Penyakit Infeksi Paru
                </h3>
                <ul className="space-y-3">
                  {[
                    'Pneumonia komunitas dan nosokomial',
                    'Tuberkulosis paru',
                    'Infeksi jamur paru',
                    'Pneumonia aspirasi',
                    'Abses paru',
                    'Empyema thoracis'
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
                  <ChartBarIcon className="h-6 w-6 text-cyan-600 mr-3" />
                  Penyakit Interstisial
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fibrosis paru idiopatik',
                    'Pneumonitis hipersensitivitas',
                    'Sarkoidosis',
                    'Pneumokoniosis',
                    'Drug-induced lung disease',
                    'Connective tissue disease-ILD'
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
                  <ArrowPathIcon className="h-6 w-6 text-cyan-600 mr-3" />
                  Gangguan Tidur & Kritis
                </h3>
                <ul className="space-y-3">
                  {[
                    'Sleep apnea syndrome',
                    'Gagal napas akut',
                    'ARDS (Acute Respiratory Distress Syndrome)',
                    'Pneumothorax',
                    'Pleural effusion',
                    'Respiratory failure'
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Dokter Spesialis Paru</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokter spesialis paru dan konsultan respirologi dengan keahlian sub-spesialis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Dr. Ahmad Respiria, Sp.P',
                  specialty: 'Spesialis Paru',
                  subspecialty: 'Konsultan COPD/Asma',
                  schedule: 'Senin, Rabu, Jumat',
                  experience: '16+ tahun'
                },
                {
                  name: 'Dr. Sari Pneumo, Sp.P',
                  specialty: 'Spesialis Paru',
                  subspecialty: 'Konsultan Infeksi Paru',
                  schedule: 'Selasa, Kamis, Sabtu',
                  experience: '14+ tahun'
                },
                {
                  name: 'Dr. Bambang Thorax, Sp.P',
                  specialty: 'Spesialis Paru',
                  subspecialty: 'Konsultan Onkologi Paru',
                  schedule: 'Senin, Kamis',
                  experience: '18+ tahun'
                },
                {
                  name: 'Dr. Maya Alveoli, Sp.P',
                  specialty: 'Spesialis Paru',
                  subspecialty: 'Konsultan Penyakit Interstisial',
                  schedule: 'Selasa, Jumat',
                  experience: '13+ tahun'
                },
                {
                  name: 'Dr. Hendri Broncho, Sp.P',
                  specialty: 'Spesialis Paru',
                  subspecialty: 'Konsultan Critical Care',
                  schedule: 'Rabu, Sabtu',
                  experience: '15+ tahun'
                }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
                      <UserIcon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-cyan-600 font-medium">{doctor.specialty}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipe Kamar Rawat Inap Paru</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kamar rawat inap dengan sistem ventilasi khusus untuk pasien paru
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  type: 'Respiratory ICU',
                  price: 'Rp 750.000/hari',
                  features: ['1 tempat tidur ICU', 'Ventilator ready', 'Oksigen sentral', 'AC HEPA filter', 'Monitoring 24/7', 'Nurse 1:1', 'Family room'],
                  color: 'from-cyan-500 to-cyan-600',
                  available: 6
                },
                {
                  type: 'VIP Respirologi',
                  price: 'Rp 450.000/hari',
                  features: ['1 tempat tidur', 'Oksigen sentral', 'AC dengan filter', 'TV LCD', 'Kamar mandi dalam', 'WiFi gratis', 'Nebulizer'],
                  color: 'from-blue-500 to-blue-600',
                  available: 8
                },
                {
                  type: 'Kelas I Paru',
                  price: 'Rp 300.000/hari',
                  features: ['1 tempat tidur', 'Oksigen wall', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-teal-500 to-teal-600',
                  available: 6
                },
                {
                  type: 'Kelas II Paru',
                  price: 'Rp 200.000/hari',
                  features: ['2 tempat tidur', 'Oksigen wall', 'AC', 'TV', 'Kamar mandi dalam', 'WiFi gratis'],
                  color: 'from-green-500 to-green-600',
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
                Hubungi kami untuk konsultasi paru dan emergency respiratory
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-cyan-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Emergency Respirasi</p>
                      <p className="text-gray-600">(0751) 7051112</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-cyan-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Nurse Station Paru</p>
                      <p className="text-gray-600">(0751) 7051113</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-cyan-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Lantai 7, Gedung Rawat Inap<br/>Jl. Ahmad Yani No. 58, Padang</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-cyan-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-800">Jam Besuk</p>
                      <p className="text-gray-600">10.00-12.00 & 16.00-20.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Konsultasi Paru</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Pernapasan</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option>Pilih keluhan pernapasan</option>
                      <option>Sesak Napas</option>
                      <option>Batuk Kronis</option>
                      <option>Asma</option>
                      <option>TB Paru</option>
                      <option>Pneumonia</option>
                      <option>Sleep Apnea</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Keluhan</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Jelaskan keluhan pernapasan Anda..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-700 hover:to-cyan-800 transition-colors">
                    Kirim Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Jaga Kesehatan Paru Anda</h2>
          <p className="text-xl mb-8 text-cyan-100">Dapatkan perawatan paru terbaik dengan teknologi respirologi terdepan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors">
              Konsultasi Paru
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-900 transition-colors">
              Emergency Respirasi
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
