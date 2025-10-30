'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  BeakerIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  StarIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

export default function LabPatologiAnatomikPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const testTypes = [
    {
      id: 'histopatologi',
      name: 'Histopatologi',
      description: 'Pemeriksaan jaringan dengan mikroskop untuk diagnosis penyakit',
      duration: '3-7 hari kerja',
      price: 'Rp 250.000 - Rp 500.000',
      specimens: ['Biopsi', 'Eksisi', 'Kuretase', 'Endoskopi'],
      procedures: ['Fiksasi', 'Processing', 'Embedding', 'Sectioning', 'Staining', 'Diagnosis'],
      color: 'from-blue-500 to-cyan-500',
      icon: MagnifyingGlassIcon
    },
    {
      id: 'sitologi',
      name: 'Sitologi',
      description: 'Pemeriksaan sel-sel untuk deteksi kelainan dan kanker',
      duration: '2-5 hari kerja',
      price: 'Rp 150.000 - Rp 300.000',
      specimens: ['Pap Smear', 'FNAB', 'Cairan tubuh', 'Brushing'],
      procedures: ['Fiksasi', 'Staining', 'Screening', 'Interpretasi'],
      color: 'from-green-500 to-emerald-500',
      icon: EyeIcon
    },
    {
      id: 'imunohistokimia',
      name: 'Imunohistokimia',
      description: 'Pemeriksaan protein spesifik untuk diagnosis yang lebih akurat',
      duration: '5-10 hari kerja',
      price: 'Rp 400.000 - Rp 800.000',
      specimens: ['Tissue Block', 'Slide Histologi'],
      procedures: ['Antigen Retrieval', 'Antibody Incubation', 'Detection', 'Counterstaining'],
      color: 'from-purple-500 to-pink-500',
      icon: BeakerIcon
    },
    {
      id: 'autopsi',
      name: 'Autopsi',
      description: 'Pemeriksaan post-mortem untuk menentukan penyebab kematian',
      duration: '7-14 hari kerja',
      price: 'Rp 1.000.000 - Rp 2.000.000',
      specimens: ['Organ internal', 'Jaringan makroskopis'],
      procedures: ['Eksternal exam', 'Internal exam', 'Histologi', 'Toxicology'],
      color: 'from-red-500 to-orange-500',
      icon: ClipboardDocumentListIcon
    }
  ];

  const equipment = [
    {
      category: 'Mikroskopi',
      items: [
        'Mikroskop Olympus BX53',
        'Mikroskop Digital DP74',
        'Stereo Mikroskop',
        'Fluorescence Mikroskop'
      ],
      icon: EyeIcon
    },
    {
      category: 'Processing',
      items: [
        'Tissue Processor Leica TP1020',
        'Embedding Center',
        'Microtome Leica RM2255',
        'Cryostat Leica CM1950'
      ],
      icon: CogIcon
    },
    {
      category: 'Staining',
      items: [
        'Autostainer Leica ST5020',
        'Coverslipper CV5030',
        'Special Stain Equipment',
        'IHC Stainer Bond-III'
      ],
      icon: BeakerIcon
    },
    {
      category: 'Documentation',
      items: [
        'Digital Camera System',
        'Image Analysis Software',
        'Slide Scanner',
        'PACS Integration'
      ],
      icon: DocumentTextIcon
    }
  ];

  const staff = [
    {
      name: 'Dr. Siti Rahmawati, Sp.PA',
      role: 'Dokter Spesialis Patologi Anatomik',
      experience: '15 tahun',
      specialization: 'Onkopatologi, Dermatopatologi',
      schedule: 'Senin-Jumat: 08:00-16:00'
    },
    {
      name: 'Dr. Ahmad Fauzi, Sp.PA',
      role: 'Dokter Spesialis Patologi Anatomik',
      experience: '12 tahun',
      specialization: 'Histopatologi Umum, Sitologi',
      schedule: 'Senin-Sabtu: 08:00-15:00'
    },
    {
      name: 'Budi Santoso, A.Md.AK',
      role: 'Analis Kesehatan Senior',
      experience: '10 tahun',
      specialization: 'Histoteknologi, Quality Control',
      schedule: 'Senin-Sabtu: 07:00-15:00'
    }
  ];

  const qualityStandards = [
    {
      title: 'ISO 15189:2012',
      description: 'Standar internasional untuk laboratorium medis',
      icon: ShieldCheckIcon
    },
    {
      title: 'CAP Accreditation',
      description: 'College of American Pathologists standards',
      icon: AcademicCapIcon
    },
    {
      title: 'Internal QC',
      description: 'Quality control harian dan mingguan',
      icon: CheckCircleIcon
    },
    {
      title: 'External QA',
      description: 'Proficiency testing berkala',
      icon: StarIcon
    }
  ];

  const stats = [
    { label: 'Spesimen/Bulan', value: '1,200+', icon: BeakerIcon },
    { label: 'Akurasi Diagnosis', value: '99.2%', icon: CheckCircleIcon },
    { label: 'Turnaround Time', value: '&lt; 7 hari', icon: ClockIcon },
    { label: 'Tahun Beroperasi', value: '20+', icon: StarIcon }
  ];

  const diagnosticAreas = [
    'Onkopatologi (Kanker)',
    'Dermatopatologi (Kulit)',
    'Gastrointestinal Patologi',
    'Ginekologi Patologi',
    'Urologi Patologi',
    'Patologi Payudara',
    'Patologi Paru',
    'Patologi Hati',
    'Neuropatologi',
    'Pediatric Patologi',
    'Forensik Patologi',
    'Transplantasi Patologi'
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden -mt-20 pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
          </div>
          
          <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Lab. <span className="text-yellow-300">Patologi</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                    Anatomik
                  </h2>
                </div>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Laboratorium Patologi Anatomik dengan teknologi canggih untuk diagnosis 
                  yang akurat melalui pemeriksaan histopatologi, sitologi, dan imunohistokimia.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Histopatologi</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <BeakerIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Imunohistokimia</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">ISO Certified</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center group">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Konsultasi Sekarang
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Lihat Hasil Lab
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
                    <div className="text-3xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: stat.value }}></div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
                { id: 'tests', label: 'Jenis Pemeriksaan', icon: BeakerIcon },
                { id: 'equipment', label: 'Peralatan', icon: CogIcon },
                { id: 'staff', label: 'Tim Ahli', icon: UserGroupIcon },
                { id: 'quality', label: 'Quality Assurance', icon: ShieldCheckIcon },
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Laboratorium Patologi Anatomik</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Laboratorium Patologi Anatomik RSUD M. Natsir adalah pusat diagnostik terdepan yang 
                  menyediakan layanan pemeriksaan histopatologi, sitologi, dan imunohistokimia dengan 
                  standar internasional untuk mendukung diagnosis yang akurat dan pengobatan yang tepat.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MagnifyingGlassIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Diagnosis Akurat</h3>
                    <p className="text-gray-600">
                      Pemeriksaan mikroskopis yang teliti untuk diagnosis yang tepat dan akurat
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BeakerIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Teknologi Modern</h3>
                    <p className="text-gray-600">
                      Peralatan canggih dan teknik pemeriksaan terkini untuk hasil optimal
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Standar Internasional</h3>
                    <p className="text-gray-600">
                      Menerapkan standar ISO 15189 dan quality assurance yang ketat
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Area Diagnostik</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diagnosticAreas.map((area, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircleIcon className="h-5 w-5 mr-3 text-yellow-300" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tests Tab */}
          {activeTab === 'tests' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Jenis Pemeriksaan</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Berbagai jenis pemeriksaan patologi anatomik untuk mendukung diagnosis yang komprehensif
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {testTypes.map((test) => (
                  <div
                    key={test.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedTest === test.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedTest(selectedTest === test.id ? null : test.id)}
                  >
                    <div className={`bg-gradient-to-r ${test.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="relative z-10 flex items-center">
                        <test.icon className="h-12 w-12 mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold">{test.name}</h3>
                          <p className="opacity-90">{test.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <ClockIcon className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                          <div className="font-semibold text-gray-800">{test.duration}</div>
                          <div className="text-sm text-gray-600">Waktu Pemeriksaan</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600 mb-1">{test.price}</div>
                          <div className="text-sm text-gray-600">Biaya</div>
                        </div>
                      </div>

                      {selectedTest === test.id && (
                        <div className="border-t pt-4 space-y-4 animate-fadeIn">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Jenis Spesimen:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {test.specimens.map((specimen, idx) => (
                                <div key={idx} className="flex items-center text-gray-600 text-sm">
                                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                                  {specimen}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Prosedur:</h4>
                            <div className="flex flex-wrap gap-2">
                              {test.procedures.map((procedure, idx) => (
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Peralatan Laboratorium</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Peralatan canggih dan modern untuk mendukung pemeriksaan patologi anatomik yang akurat
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {equipment.map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
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

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Teknologi Terdepan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <EyeIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Digital Pathology</h4>
                    <p className="text-sm opacity-90">Slide scanner dan analisis digital untuk diagnosis yang lebih akurat</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BeakerIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Molecular Pathology</h4>
                    <p className="text-sm opacity-90">Teknik molekuler untuk diagnosis kanker dan penyakit genetik</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Automation</h4>
                    <p className="text-sm opacity-90">Sistem otomatis untuk efisiensi dan konsistensi hasil</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Staff Tab */}
          {activeTab === 'staff' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Ahli Patologi</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tim dokter spesialis dan analis kesehatan berpengalaman untuk diagnosis yang akurat
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {staff.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserGroupIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                      <div className="space-y-2 text-gray-600 text-sm">
                        <div className="flex items-center justify-center">
                          <StarIcon className="h-4 w-4 mr-2" />
                          <span>Pengalaman: {member.experience}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <AcademicCapIcon className="h-4 w-4 mr-2" />
                          <span>{member.specialization}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          <span>{member.schedule}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Prosedur Konsultasi
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Untuk Dokter Pengirim:</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Sertakan informasi klinis lengkap</li>
                      <li>• Jelaskan diagnosis kerja/differensial</li>
                      <li>• Cantumkan pertanyaan spesifik</li>
                      <li>• Konsultasi langsung jika diperlukan</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Untuk Pasien:</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Diskusi hasil dengan dokter pengirim</li>
                      <li>• Second opinion tersedia</li>
                      <li>• Konsultasi genetik jika diperlukan</li>
                      <li>• Edukasi pasien dan keluarga</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quality Tab */}
          {activeTab === 'quality' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality Assurance</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Sistem manajemen kualitas yang ketat untuk memastikan akurasi dan reliabilitas hasil pemeriksaan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <standard.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{standard.title}</h3>
                      <p className="text-gray-600 text-sm">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <CheckCircleIcon className="h-8 w-8 mr-3 text-green-500" />
                    Internal Quality Control
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Daily QC:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Kontrol staining setiap hari</li>
                        <li>• Kalibrasi alat otomatis</li>
                        <li>• Monitoring suhu dan kelembaban</li>
                        <li>• Dokumentasi lengkap</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Weekly QC:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Review kasus sulit</li>
                        <li>• Diskusi multidisiplin</li>
                        <li>• Audit sampling</li>
                        <li>• Evaluasi TAT</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <StarIcon className="h-8 w-8 mr-3 text-yellow-500" />
                    External Quality Assessment
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Proficiency Testing:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Partisipasi CAP Survey</li>
                        <li>• RCPA Quality Assurance</li>
                        <li>• APCCLS Proficiency Test</li>
                        <li>• Evaluasi berkala</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Continuous Improvement:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Root cause analysis</li>
                        <li>• Corrective action plan</li>
                        <li>• Staff training program</li>
                        <li>• Equipment upgrade</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <ExclamationTriangleIcon className="h-8 w-8 mr-3" />
                  Critical Values Management
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Immediate Notification:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Malignant cells in routine cytology</li>
                      <li>• Positive margins in cancer surgery</li>
                      <li>• Unexpected malignancy</li>
                      <li>• Discrepant frozen section</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Communication Protocol:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Direct call to clinician</li>
                      <li>• Written documentation</li>
                      <li>• Follow-up confirmation</li>
                      <li>• Time-stamped records</li>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Informasi Laboratorium</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Hubungi kami untuk konsultasi dan informasi tentang pemeriksaan patologi anatomik
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
                        <p className="text-gray-600">Lantai 2, Gedung Laboratorium<br />RSUD M. Natsir Solok</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-green-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
                        <p className="text-gray-600">
                          Penerimaan Spesimen:<br />
                          Senin-Jumat: 07:00-15:00 WIB<br />
                          Sabtu: 07:00-12:00 WIB<br />
                          Emergency: 24 jam
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Kontak</h4>
                        <p className="text-gray-600">
                          Telepon: (0755) 21292 ext. 205<br />
                          WhatsApp: 0812-6789-0125<br />
                          Email: patologi@rsudmnatsir.go.id
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Panduan Pengiriman Spesimen</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📋 Persyaratan Spesimen</h4>
                      <p className="text-sm opacity-90">Fiksasi dengan formalin 10%, ratio 1:10, suhu ruang</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🏷️ Labeling & Identitas</h4>
                      <p className="text-sm opacity-90">Label jelas, tahan air, informasi pasien lengkap</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📄 Formulir Permintaan</h4>
                      <p className="text-sm opacity-90">Isi lengkap data klinis, anamnesis, dan diagnosis kerja</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🚚 Transportasi</h4>
                      <p className="text-sm opacity-90">Kemasan aman, suhu ruang, hindari goncangan berlebihan</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Download Formulir
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-bold text-yellow-800 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Turnaround Time (TAT)
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Histopatologi Rutin:</h5>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Biopsi kecil: 3-5 hari</li>
                      <li>• Spesimen besar: 5-7 hari</li>
                      <li>• Konsultasi: +2 hari</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Sitologi:</h5>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Pap smear: 3-5 hari</li>
                      <li>• FNAB: 2-4 hari</li>
                      <li>• Cairan: 1-3 hari</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Imunohistokimia:</h5>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Panel rutin: 5-7 hari</li>
                      <li>• Panel khusus: 7-10 hari</li>
                      <li>• Molekuler: 10-14 hari</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Butuh Pemeriksaan Patologi Anatomik?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Tim ahli patologi kami siap memberikan diagnosis yang akurat dengan 
              teknologi terdepan dan standar internasional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                Konsultasi Patologi
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Cek Hasil Lab
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
