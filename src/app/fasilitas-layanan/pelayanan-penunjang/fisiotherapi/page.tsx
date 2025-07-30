'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  HeartIcon,
  BoltIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CogIcon,
  HandRaisedIcon,
  ArrowPathIcon,
  PlayIcon,
  StarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function FisioterapiPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      description: 'Teknik hands-on untuk mobilisasi sendi dan jaringan lunak',
      icon: HandRaisedIcon,
      duration: '45-60 menit',
      price: 'Rp 150.000',
      features: ['Joint Mobilization', 'Soft Tissue Mobilization', 'Myofascial Release'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'exercise-therapy',
      title: 'Exercise Therapy',
      description: 'Program latihan terapeutik untuk pemulihan fungsi',
      icon: ArrowPathIcon,
      duration: '30-45 menit',
      price: 'Rp 120.000',
      features: ['Strengthening Exercise', 'Flexibility Training', 'Balance Training'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'electrotherapy',
      title: 'Electrotherapy',
      description: 'Terapi menggunakan stimulasi listrik untuk nyeri',
      icon: BoltIcon,
      duration: '20-30 menit',
      price: 'Rp 100.000',
      features: ['TENS Therapy', 'Ultrasound', 'Laser Therapy'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'aqua-therapy',
      title: 'Aqua Therapy',
      description: 'Terapi air untuk rehabilitasi yang efektif',
      icon: HeartIcon,
      duration: '40-50 menit',
      price: 'Rp 180.000',
      features: ['Pool Exercise', 'Water Walking', 'Aqua Resistance'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const facilities = [
    {
      name: 'Gym Rehabilitasi',
      description: 'Area latihan dengan peralatan modern untuk terapi exercise',
      icon: CogIcon,
      capacity: '20 pasien',
      schedule: '07:00 - 16:00'
    },
    {
      name: 'Ruang Manual Therapy',
      description: 'Ruang privat untuk terapi manual dan assessment',
      icon: HandRaisedIcon,
      capacity: '8 ruang',
      schedule: '08:00 - 15:00'
    },
    {
      name: 'Pool Therapy',
      description: 'Kolam terapi dengan air hangat untuk aqua therapy',
      icon: HeartIcon,
      capacity: '6 pasien',
      schedule: '09:00 - 14:00'
    },
    {
      name: 'Ruang Elektroterapi',
      description: 'Ruang dengan peralatan elektroterapi lengkap',
      icon: BoltIcon,
      capacity: '10 bed',
      schedule: '07:00 - 16:00'
    }
  ];

  const conditions = [
    'Stroke Rehabilitation',
    'Cedera Olahraga',
    'Nyeri Punggung Bawah',
    'Frozen Shoulder',
    'Arthritis',
    'Post Operasi',
    'Scoliosis',
    'Parkinson Disease',
    'Cerebral Palsy',
    'Spinal Cord Injury'
  ];

  const stats = [
    { label: 'Pasien/Bulan', value: '750+', icon: UserGroupIcon },
    { label: 'Tingkat Kesembuhan', value: '85%', icon: ShieldCheckIcon },
    { label: 'Tahun Pengalaman', value: '15+', icon: StarIcon },
    { label: 'Terapis Bersertifikat', value: '12', icon: CheckCircleIcon }
  ];

  const doctors = [
    {
      name: 'Dr. Ahmad Santoso, Sp.KFR',
      specialization: 'Spesialis Kedokteran Fisik & Rehabilitasi',
      schedule: 'Senin - Rabu: 08:00-15:00',
      experience: '12 tahun'
    },
    {
      name: 'Dr. Sari Indrawati, Sp.KFR',
      specialization: 'Spesialis Kedokteran Fisik & Rehabilitasi',
      schedule: 'Kamis - Sabtu: 08:00-15:00',
      experience: '10 tahun'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white overflow-hidden -mt-20 pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Pusat <span className="text-yellow-300">Fisioterapi</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                    & Rehabilitasi Medis
                  </h2>
                </div>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Layanan rehabilitasi medis komprehensif dengan teknologi modern dan 
                  tenaga ahli berpengalaman untuk pemulihan optimal Anda.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <HandRaisedIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Manual Therapy</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <BoltIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Modern Equipment</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Evidence-Based</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center group">
                    <PlayIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Konsultasi Sekarang
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Lihat Layanan
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
                { id: 'services', label: 'Layanan', icon: HeartIcon },
                { id: 'facilities', label: 'Fasilitas', icon: CogIcon },
                { id: 'doctors', label: 'Dokter', icon: UserGroupIcon },
                { id: 'contact', label: 'Kontak', icon: PhoneIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Tentang Unit Fisioterapi</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Unit Fisioterapi RSUD M. Natsir adalah pusat rehabilitasi medis yang menyediakan 
                  layanan komprehensif untuk berbagai kondisi muskuloskeletal, neurologis, dan kardiopulmoner 
                  dengan menggunakan pendekatan evidence-based medicine.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Pelayanan Berkualitas</h3>
                    <p className="text-gray-600">
                      Standar pelayanan internasional dengan tenaga ahli bersertifikat
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Teknologi Modern</h3>
                    <p className="text-gray-600">
                      Peralatan terapi terkini untuk hasil pemulihan yang optimal
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Pendekatan Holistik</h3>
                    <p className="text-gray-600">
                      Penanganan menyeluruh sesuai kondisi dan kebutuhan pasien
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Kondisi yang Ditangani</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircleIcon className="h-5 w-5 mr-3 text-yellow-300" />
                      <span>{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Fisioterapi</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Berbagai program terapi yang disesuaikan dengan kondisi dan kebutuhan pemulihan Anda
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedService === service.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                  >
                    <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="relative z-10 flex items-center">
                        <service.icon className="h-12 w-12 mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="opacity-90">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <ClockIcon className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                          <div className="font-semibold text-gray-800">{service.duration}</div>
                          <div className="text-sm text-gray-600">Durasi</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-600">Per Sesi</div>
                        </div>
                      </div>

                      {selectedService === service.id && (
                        <div className="border-t pt-4 animate-fadeIn">
                          <h4 className="font-semibold text-gray-800 mb-3">Fitur Terapi:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Fasilitas Modern</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Fasilitas lengkap dan modern untuk mendukung proses rehabilitasi yang optimal
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <facility.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                        <p className="text-gray-600 mb-4">{facility.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <UserGroupIcon className="h-4 w-4 mr-2" />
                            {facility.capacity}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            {facility.schedule}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Peralatan Terapi Canggih</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BoltIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Elektroterapi</h4>
                    <p className="text-sm opacity-90">TENS, EMS, Ultrasound, Shortwave</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Exercise Equipment</h4>
                    <p className="text-sm opacity-90">Parallel Bar, Mat, Balance Trainer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Hydrotherapy</h4>
                    <p className="text-sm opacity-90">Therapeutic Pool, Whirlpool</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Doctors Tab */}
          {activeTab === 'doctors' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Dokter Spesialis</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Dokter spesialis kedokteran fisik dan rehabilitasi berpengalaman
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {doctors.map((doctor, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserGroupIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{doctor.specialization}</p>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center justify-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          <span className="text-sm">{doctor.schedule}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <StarIcon className="h-4 w-4 mr-2" />
                          <span className="text-sm">Pengalaman: {doctor.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-bold text-yellow-800 mb-4 flex items-center">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Cara Pendaftaran
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Persyaratan:</h5>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Surat rujukan dari dokter</li>
                      <li>• Kartu identitas (KTP/SIM)</li>
                      <li>• Kartu BPJS/Asuransi (jika ada)</li>
                      <li>• Hasil pemeriksaan penunjang</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Prosedur:</h5>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Daftar di loket pendaftaran</li>
                      <li>• Konsultasi dengan dokter spesialis</li>
                      <li>• Assessment fisioterapi</li>
                      <li>• Mulai program terapi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hubungi kami untuk konsultasi dan informasi lebih lanjut
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Layanan</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPinIcon className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Lokasi</h4>
                        <p className="text-gray-600">Lantai 2, Gedung Rehabilitasi Medik<br />RSUD M. Natsir Solok</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-green-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
                        <p className="text-gray-600">
                          Senin - Jumat: 08:00 - 15:00 WIB<br />
                          Sabtu: 08:00 - 12:00 WIB<br />
                          Minggu: Libur
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Kontak</h4>
                        <p className="text-gray-600">
                          Telepon: (0755) 21292<br />
                          WhatsApp: 0812-6789-0123<br />
                          Email: fisioterapi@rsudmnatsir.go.id
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Tips Kesehatan</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">💪 Olahraga Teratur</h4>
                      <p className="text-sm opacity-90">Lakukan aktivitas fisik minimal 30 menit per hari untuk menjaga kesehatan tulang dan otot</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🧘 Postur Tubuh</h4>
                      <p className="text-sm opacity-90">Jaga postur tubuh yang baik saat bekerja dan beristirahat untuk mencegah nyeri punggung</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🏃 Pemanasan</h4>
                      <p className="text-sm opacity-90">Selalu lakukan pemanasan sebelum berolahraga untuk mencegah cedera</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Konsultasi Gratis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Mulai Perjalanan Pemulihan Anda
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Tim ahli fisioterapi kami siap membantu Anda mencapai pemulihan optimal dengan 
              program terapi yang disesuaikan dengan kondisi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                Buat Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Hubungi Kami
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