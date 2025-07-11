'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CogIcon,
  BeakerIcon,
  EyeIcon,
  StarIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export default function KamarOperasiPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const operatingRooms = [
    {
      id: 'or-1',
      name: 'OR 1 - General Surgery',
      type: 'Bedah Umum',
      description: 'Kamar operasi utama untuk prosedur bedah umum dan elektif',
      capacity: '6-8 orang',
      equipment: ['Laminin LED', 'Monitoring System', 'Electrosurgery Unit', 'Anesthesia Machine'],
      procedures: ['Appendektomi', 'Herniotomi', 'Cholecystektomi', 'Mastektomi'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'or-2',
      name: 'OR 2 - Emergency Surgery',
      type: 'Bedah Darurat',
      description: 'Kamar operasi khusus untuk kasus emergency dan trauma',
      capacity: '8-10 orang',
      equipment: ['Advanced Monitoring', 'Trauma Set', 'Blood Warmer', 'C-Arm Fluoroscopy'],
      procedures: ['Laparotomi', 'Craniotomy', 'Thoracotomy', 'Vascular Surgery'],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'or-3',
      name: 'OR 3 - Minimally Invasive',
      type: 'Bedah Minimal Invasif',
      description: 'Kamar operasi dengan teknologi laparoskopi dan endoskopi',
      capacity: '5-6 orang',
      equipment: ['Laparoscopy Tower', 'HD Monitor', 'CO2 Insufflator', 'Harmonic Scalpel'],
      procedures: ['Laparoscopic Surgery', 'Endoscopic Surgery', 'Arthroscopy', 'ERCP'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'or-4',
      name: 'OR 4 - Orthopedic Surgery',
      type: 'Bedah Ortopedi',
      description: 'Kamar operasi khusus untuk prosedur bedah tulang dan sendi',
      capacity: '6-8 orang',
      equipment: ['Orthopedic Table', 'Image Intensifier', 'Bone Drill', 'Pneumatic Tourniquet'],
      procedures: ['ORIF', 'Joint Replacement', 'Arthroscopy', 'Spinal Surgery'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const surgicalTeam = [
    {
      role: 'Dokter Bedah',
      specialists: [
        'Dr. Ahmad Santoso, Sp.B - Bedah Umum',
        'Dr. Sari Dewi, Sp.OT - Bedah Ortopedi',
        'Dr. Budi Hartono, Sp.BS - Bedah Saraf'
      ]
    },
    {
      role: 'Dokter Anestesi',
      specialists: [
        'Dr. Linda Sari, Sp.An - Anestesiologi',
        'Dr. Rahman Hakim, Sp.An - Anestesiologi'
      ]
    },
    {
      role: 'Perawat Instrumen',
      specialists: [
        'Ns. Fitri Handayani, S.Kep',
        'Ns. Dedi Kurniawan, S.Kep',
        'Ns. Maya Sari, S.Kep'
      ]
    }
  ];

  const safetyProtocols = [
    {
      title: 'WHO Surgical Safety Checklist',
      description: 'Protokol keselamatan standar WHO yang diterapkan pada setiap operasi',
      steps: ['Sign In', 'Time Out', 'Sign Out'],
      icon: CheckCircleIcon
    },
    {
      title: 'Infection Control',
      description: 'Protokol pencegahan infeksi dan sterilisasi yang ketat',
      steps: ['Hand Hygiene', 'Sterile Technique', 'Environmental Control'],
      icon: ShieldCheckIcon
    },
    {
      title: 'Patient Identification',
      description: 'Sistem identifikasi pasien yang akurat dan aman',
      steps: ['Double Check', 'Wristband Verification', 'Surgical Site Marking'],
      icon: UserGroupIcon
    }
  ];

  const stats = [
    { label: 'Operasi/Bulan', value: '450+', icon: CogIcon },
    { label: 'Tingkat Keberhasilan', value: '98.5%', icon: StarIcon },
    { label: 'Kamar Operasi', value: '4', icon: BuildingOffice2Icon },
    { label: 'Tim Medis', value: '25+', icon: UserGroupIcon }
  ];

  const equipmentCategories = [
    {
      category: 'Anesthesia Equipment',
      items: ['Anesthesia Machine', 'Ventilator', 'Monitoring System', 'Defibrillator'],
      icon: HeartIcon
    },
    {
      category: 'Surgical Instruments',
      items: ['Electrosurgery Unit', 'Harmonic Scalpel', 'Surgical Microscope', 'Endoscopy'],
      icon: CogIcon
    },
    {
      category: 'Imaging & Navigation',
      items: ['C-Arm Fluoroscopy', 'Ultrasound', 'Navigation System', 'Image Intensifier'],
      icon: EyeIcon
    },
    {
      category: 'Safety & Support',
      items: ['HEPA Filter', 'Emergency Cart', 'Blood Warmer', 'Fluid Management'],
      icon: ShieldCheckIcon
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white overflow-hidden">
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
                    Kamar <span className="text-yellow-300">Operasi</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                    Modern & Steril
                  </h2>
                </div>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Fasilitas kamar operasi modern dengan teknologi terdepan dan 
                  protokol keselamatan standar internasional untuk prosedur bedah yang optimal.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">WHO Safety Standards</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <CogIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Advanced Technology</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <UserGroupIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Expert Team</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center group">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Konsultasi Bedah
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Jadwal Operasi
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
                { id: 'rooms', label: 'Kamar Operasi', icon: BuildingOffice2Icon },
                { id: 'equipment', label: 'Peralatan', icon: CogIcon },
                { id: 'team', label: 'Tim Bedah', icon: UserGroupIcon },
                { id: 'safety', label: 'Keselamatan', icon: ShieldCheckIcon },
                { id: 'contact', label: 'Informasi', icon: PhoneIcon }
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Unit Kamar Operasi</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Unit Kamar Operasi RSUD M. Natsir dilengkapi dengan teknologi medis terdepan dan 
                  menerapkan protokol keselamatan standar internasional WHO untuk menjamin keberhasilan 
                  setiap prosedur bedah dengan risiko minimal.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Teknologi Canggih</h3>
                    <p className="text-gray-600">
                      Peralatan medis modern dan sistem monitoring terdepan untuk prosedur bedah optimal
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Keselamatan Maksimal</h3>
                    <p className="text-gray-600">
                      Protokol keselamatan WHO dan sistem kontrol infeksi yang ketat
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Tim Ahli</h3>
                    <p className="text-gray-600">
                      Dokter bedah bersertifikat dan tim medis berpengalaman
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Jenis Operasi yang Dilayani</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Bedah Umum', 'Bedah Ortopedi', 'Bedah Saraf', 'Bedah Urologi',
                    'Bedah Digestif', 'Bedah Trauma', 'Bedah Minimal Invasif', 'Bedah Plastik',
                    'Bedah Vaskular', 'Bedah Pediatrik', 'Bedah Onkologi', 'Bedah Darurat'
                  ].map((surgery, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircleIcon className="h-5 w-5 mr-3 text-yellow-300" />
                      <span>{surgery}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Operating Rooms Tab */}
          {activeTab === 'rooms' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Kamar Operasi</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  4 kamar operasi modern dengan spesialisasi berbeda untuk melayani berbagai jenis prosedur bedah
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {operatingRooms.map((room) => (
                  <div
                    key={room.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedRoom === room.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                  >
                    <div className={`bg-gradient-to-r ${room.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                        <p className="text-lg opacity-90 mb-2">{room.type}</p>
                        <p className="opacity-80">{room.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <UserGroupIcon className="h-5 w-5 mr-3 text-blue-500" />
                          <span><strong>Kapasitas:</strong> {room.capacity}</span>
                        </div>
                      </div>

                      {selectedRoom === room.id && (
                        <div className="border-t pt-4 space-y-4 animate-fadeIn">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Peralatan Utama:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {room.equipment.map((equipment, idx) => (
                                <div key={idx} className="flex items-center text-gray-600 text-sm">
                                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                                  {equipment}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Prosedur Umum:</h4>
                            <div className="flex flex-wrap gap-2">
                              {room.procedures.map((procedure, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                  {procedure}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Equipment Tab */}
          {activeTab === 'equipment' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Peralatan Medis</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Peralatan medis canggih dan modern untuk mendukung berbagai prosedur bedah
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {equipmentCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <CogIcon className="h-4 w-4 mr-3 text-blue-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Standar Kualitas</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">ISO Certified</h4>
                    <p className="text-sm opacity-90">Semua peralatan bersertifikat ISO dan FDA</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BeakerIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Regular Maintenance</h4>
                    <p className="text-sm opacity-90">Perawatan berkala sesuai standar pabrik</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AcademicCapIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Trained Operators</h4>
                    <p className="text-sm opacity-90">Operator terlatih dan bersertifikat</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Surgical Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Bedah</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tim medis profesional dan berpengalaman untuk menjamin keberhasilan setiap prosedur bedah
                </p>
              </div>

              <div className="grid gap-8">
                {surgicalTeam.map((team, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <UserGroupIcon className="h-8 w-8 mr-3 text-blue-500" />
                      {team.role}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {team.specialists.map((specialist, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                              <HandRaisedIcon className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-medium text-gray-800">{specialist}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Jadwal Tim Bedah
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Operasi Elektif:</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Senin - Jumat: 08:00 - 16:00 WIB</li>
                      <li>• Sabtu: 08:00 - 12:00 WIB</li>
                      <li>• Tim lengkap tersedia</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Operasi Darurat:</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• 24 jam / 7 hari</li>
                      <li>• Tim jaga selalu siap</li>
                      <li>• Response time &lt; 30 menit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Tab */}
          {activeTab === 'safety' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Protokol Keselamatan</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Standar keselamatan internasional WHO untuk meminimalkan risiko dan memastikan keberhasilan operasi
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {safetyProtocols.map((protocol, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <protocol.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{protocol.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{protocol.description}</p>
                    <div className="space-y-2">
                      {protocol.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 mr-3 text-green-500" />
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Kontrol Infeksi</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Sterilisasi & Desinfeksi:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Autoclave untuk sterilisasi instrumen</li>
                      <li>• HEPA filter untuk filtrasi udara</li>
                      <li>• Desinfeksi rutin setiap hari</li>
                      <li>• Monitoring kultur berkala</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Prosedur Kebersihan:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Hand hygiene 5 moments WHO</li>
                      <li>• Gowning & gloving procedure</li>
                      <li>• Surgical site preparation</li>
                      <li>• Traffic control dalam OK</li>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Informasi Kamar Operasi</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hubungi kami untuk informasi jadwal operasi dan konsultasi bedah
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Kontak & Lokasi</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPinIcon className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Lokasi</h4>
                        <p className="text-gray-600">Lantai 3, Gedung Bedah Sentral<br />RSUD M. Natsir Solok</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-green-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
                        <p className="text-gray-600">
                          Elektif: Senin-Sabtu 08:00-16:00<br />
                          Emergency: 24 jam / 7 hari<br />
                          Konsultasi: 08:00-15:00 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Kontak</h4>
                        <p className="text-gray-600">
                          Telepon: (0755) 21292 ext. 301<br />
                          Emergency: (0755) 21292 ext. 911<br />
                          WhatsApp: 0812-6789-0124
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Persiapan Operasi</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📋 Persiapan Pra-Operasi</h4>
                      <p className="text-sm opacity-90">Puasa 8 jam, pemeriksaan lab lengkap, konsultasi anestesi</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">⚕️ Informed Consent</h4>
                      <p className="text-sm opacity-90">Penjelasan lengkap prosedur, risiko, dan persetujuan tindakan</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🏥 Perawatan Pasca Operasi</h4>
                      <p className="text-sm opacity-90">Monitoring ketat, manajemen nyeri, dan perawatan luka</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Jadwalkan Konsultasi
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
              Butuh Konsultasi Bedah?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Tim ahli bedah kami siap memberikan pelayanan terbaik dengan teknologi modern 
              dan standar keselamatan internasional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                Konsultasi Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Lihat Jadwal Dokter
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
