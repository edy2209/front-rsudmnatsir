'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  BeakerIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  StarIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  CalculatorIcon,
  MagnifyingGlassIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

export default function LabPatologiKlinikPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const stats = [
    {
      value: '24/7',
      label: 'Layanan Emergency',
      icon: ClockIcon
    },
    {
      value: '500+',
      label: 'Jenis Pemeriksaan',
      icon: BeakerIcon
    },
    {
      value: '&lt;2 Jam',
      label: 'Hasil CITO',
      icon: ChartBarIcon
    },
    {
      value: 'ISO 15189',
      label: 'Certified',
      icon: ShieldCheckIcon
    }
  ];

  const testCategories = [
    {
      id: 'hematologi',
      name: 'Hematologi',
      description: 'Pemeriksaan darah lengkap dan kelainan darah',
      duration: '30 menit - 2 jam',
      price: 'Rp 50.000 - Rp 200.000',
      tests: ['Darah Lengkap', 'LED', 'Golongan Darah', 'Hemostasis', 'Retikulosit'],
      specialTests: ['Flow Cytometry', 'Bone Marrow', 'Coagulation Studies'],
      color: 'from-red-500 to-pink-500',
      icon: CircleStackIcon
    },
    {
      id: 'kimia-klinik',
      name: 'Kimia Klinik',
      description: 'Analisis biokimia untuk fungsi organ dan metabolisme',
      duration: '1-4 jam',
      price: 'Rp 30.000 - Rp 300.000',
      tests: ['Gula Darah', 'Kolesterol', 'Fungsi Hati', 'Fungsi Ginjal', 'Elektrolit'],
      specialTests: ['HbA1c', 'Tumor Marker', 'Cardiac Marker', 'Drug Monitoring'],
      color: 'from-blue-500 to-cyan-500',
      icon: BeakerIcon
    },
    {
      id: 'mikrobiologi',
      name: 'Mikrobiologi',
      description: 'Identifikasi bakteri, virus, jamur dan parasit',
      duration: '24-72 jam',
      price: 'Rp 100.000 - Rp 400.000',
      tests: ['Kultur Bakteri', 'Uji Kepekaan', 'Parasitologi', 'Mycobacterium'],
      specialTests: ['PCR Molekuler', 'Antigen Test', 'Serology', 'Rapid Test'],
      color: 'from-green-500 to-emerald-500',
      icon: MagnifyingGlassIcon
    },
    {
      id: 'urinalisis',
      name: 'Urinalisis',
      description: 'Pemeriksaan urine untuk diagnosis penyakit ginjal dan metabolik',
      duration: '30 menit - 1 jam',
      price: 'Rp 25.000 - Rp 100.000',
      tests: ['Urine Lengkap', 'Protein Urine', 'Mikroalbumin', 'Sedimen Urine'],
      specialTests: ['Urine Culture', '24h Urine Collection', 'Pregnancy Test'],
      color: 'from-yellow-500 to-orange-500',
      icon: ClipboardDocumentListIcon
    },
    {
      id: 'imunologi',
      name: 'Imunologi & Serologi',
      description: 'Pemeriksaan sistem imun dan infeksi',
      duration: '2-24 jam',
      price: 'Rp 80.000 - Rp 500.000',
      tests: ['Hepatitis Panel', 'HIV Test', 'Torch', 'Rheumatoid Factor', 'CRP'],
      specialTests: ['Autoimmune Panel', 'Allergy Test', 'Complement', 'Cytokines'],
      color: 'from-purple-500 to-indigo-500',
      icon: ShieldCheckIcon
    },
    {
      id: 'endokrinologi',
      name: 'Endokrinologi',
      description: 'Pemeriksaan hormon dan kelenjar endokrin',
      duration: '2-6 jam',
      price: 'Rp 150.000 - Rp 600.000',
      tests: ['Hormon Tiroid', 'Insulin', 'Kortisol', 'Hormon Reproduksi'],
      specialTests: ['Growth Hormone', 'OGTT', 'Dexamethasone Test', 'Fertility Panel'],
      color: 'from-teal-500 to-blue-500',
      icon: CalculatorIcon
    }
  ];

  const equipment = [
    {
      category: 'Hematologi',
      items: [
        'Sysmex XN-1000 (CBC Analyzer)',
        'Sysmex CS-5100 (Coagulation)',
        'Flow Cytometer BD FACSCanto',
        'Reticulocyte Counter'
      ],
      icon: CircleStackIcon
    },
    {
      category: 'Kimia Klinik',
      items: [
        'Roche Cobas 8000 (Chemistry)',
        'Abbott Architect ci8200',
        'Siemens Atellica Solution',
        'Point-of-Care Testing'
      ],
      icon: BeakerIcon
    },
    {
      category: 'Mikrobiologi',
      items: [
        'VITEK 2 Compact (ID/AST)',
        'BacT/ALERT 3D (Blood Culture)',
        'GeneXpert MTB/RIF',
        'MALDI-TOF MS'
      ],
      icon: MagnifyingGlassIcon
    },
    {
      category: 'Imunologi',
      items: [
        'Abbott Architect i2000SR',
        'Roche Elecsys 2010',
        'ELISA Washer/Reader',
        'Luminex xMAP Technology'
      ],
      icon: ShieldCheckIcon
    }
  ];

  const staff = [
    {
      name: 'Dr. Andi Kurniawan, Sp.PK',
      role: 'Dokter Spesialis Patologi Klinik',
      experience: '18 tahun',
      specialization: 'Hematologi, Hemostasis',
      schedule: 'Senin-Jumat: 07:00-16:00'
    },
    {
      name: 'Dr. Maya Sari, Sp.PK, M.Kes',
      role: 'Dokter Spesialis Patologi Klinik',
      experience: '14 tahun',
      specialization: 'Kimia Klinik, Endokrinologi',
      schedule: 'Senin-Sabtu: 08:00-15:00'
    },
    {
      name: 'Dr. Rizki Pratama, Sp.PK',
      role: 'Dokter Spesialis Patologi Klinik',
      experience: '10 tahun',
      specialization: 'Mikrobiologi, Imunologi',
      schedule: 'Senin-Minggu: 08:00-16:00'
    },
    {
      name: 'Dewi Kartika, S.Si, M.Si',
      role: 'Analis Kesehatan Senior',
      experience: '12 tahun',
      specialization: 'Quality Control, Validasi',
      schedule: 'Senin-Sabtu: 06:00-14:00'
    }
  ];

  const qualityStandards = [
    {
      title: 'ISO 15189:2012',
      description: 'Standar internasional untuk laboratorium medis dengan fokus pada kompetensi dan kualitas',
      icon: ShieldCheckIcon
    },
    {
      title: 'CAP Laboratory',
      description: 'College of American Pathologists standards untuk excellence dalam laboratory medicine',
      icon: AcademicCapIcon
    },
    {
      title: 'NABL Accreditation',
      description: 'National Accreditation Board for Testing and Calibration Laboratories',
      icon: CheckCircleIcon
    },
    {
      title: 'Internal QC',
      description: 'Program kontrol kualitas internal harian untuk memastikan akurasi hasil',
      icon: ChartBarIcon
    },
    {
      title: 'External QA',
      description: 'Partisipasi dalam program pemantapan mutu eksternal nasional dan internasional',
      icon: StarIcon
    },
    {
      title: 'CLIA Standards',
      description: 'Clinical Laboratory Improvement Amendments compliance untuk patient safety',
      icon: ExclamationTriangleIcon
    }
  ];

  const operationalInfo = {
    hours: {
      regular: 'Senin-Jumat: 06:00-20:00',
      weekend: 'Sabtu-Minggu: 08:00-16:00',
      emergency: '24/7 untuk pemeriksaan CITO'
    },
    location: {
      address: 'Lantai 2, Gedung Utama RSUD M. Natsir',
      phone: '(0751) 7051-789',
      ext: 'ext. 234',
      whatsapp: '+62 812-3456-7890'
    },
    services: {
      homeService: 'Layanan ambil sampel di rumah',
      onlineResult: 'Hasil online melalui website',
      consultation: 'Konsultasi interpretasi hasil',
      emergency: 'Layanan CITO 24 jam'
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white overflow-hidden -mt-20 pt-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Lab. <span className="text-yellow-300">Patologi</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                    Klinik
                  </h2>
                </div>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Laboratorium Patologi Klinik dengan teknologi terdepan untuk pemeriksaan 
                  hematologi, kimia klinik, mikrobiologi, dan imunologi yang akurat dan cepat.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <CircleStackIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Hematologi</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <BeakerIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">Kimia Klinik</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">24/7 Emergency</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center group">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Konsultasi Sekarang
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Cek Hasil Lab
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Laboratorium Patologi Klinik</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Laboratorium Patologi Klinik RSUD M. Natsir adalah pusat diagnostik yang menyediakan 
                  layanan pemeriksaan laboratorium komprehensif dengan teknologi canggih dan standar 
                  internasional untuk mendukung diagnosis dan monitoring pengobatan yang akurat.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CircleStackIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Pemeriksaan Rutin</h3>
                  <p className="text-gray-600">
                    Darah lengkap, urine, gula darah, kolesterol, dan pemeriksaan kesehatan umum lainnya.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ClockIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Layanan CITO</h3>
                  <p className="text-gray-600">
                    Hasil pemeriksaan cepat dalam 30 menit - 2 jam untuk kebutuhan emergency dan rawat inap.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Standar Internasional</h3>
                  <p className="text-gray-600">
                    Terakreditasi ISO 15189 dengan kontrol kualitas ketat dan partisipasi program EQA.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Keunggulan Laboratorium Kami</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BeakerIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">500+ Parameter</h4>
                    <p className="text-sm opacity-90">Pemeriksaan lengkap dan komprehensif</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">24/7 Service</h4>
                    <p className="text-sm opacity-90">Layanan emergency sepanjang waktu</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChartBarIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Hasil Akurat</h4>
                    <p className="text-sm opacity-90">Quality control dan proficiency testing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UserGroupIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Tim Ahli</h4>
                    <p className="text-sm opacity-90">Dokter spesialis dan analis berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tests Tab */}
          {activeTab === 'tests' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Jenis Pemeriksaan Laboratorium</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Layanan pemeriksaan laboratorium lengkap dengan teknologi canggih dan hasil yang akurat
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {testCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <category.icon className="h-8 w-8 mr-4" />
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                      </div>
                      <p className="text-blue-100 mb-4">{category.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Waktu:</span> {category.duration}
                        </div>
                        <div>
                          <span className="font-semibold">Tarif:</span> {category.price}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <button
                        onClick={() => setSelectedTest(selectedTest === category.id ? null : category.id)}
                        className="w-full text-left mb-4 flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <span>Lihat Detail Pemeriksaan</span>
                        <ChartBarIcon className={`h-5 w-5 transform transition-transform ${selectedTest === category.id ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {selectedTest === category.id && (
                        <div className="space-y-6 animate-fadeIn">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Pemeriksaan Rutin:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {category.tests.map((test, idx) => (
                                <div key={idx} className="flex items-center text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                                  {test}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Pemeriksaan Khusus:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.specialTests.map((test, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                  {test}
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
                  Teknologi canggih dan peralatan modern untuk hasil pemeriksaan yang akurat dan cepat
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

              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Teknologi Terdepan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Automation</h4>
                    <p className="text-sm opacity-90">Sistem otomatis untuk efisiensi dan konsistensi hasil</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChartBarIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                    <p className="text-sm opacity-90">Monitoring kualitas dan performa alat secara real-time</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DocumentTextIcon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Digital Integration</h4>
                    <p className="text-sm opacity-90">Integrasi dengan sistem informasi rumah sakit</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Staff Tab */}
          {activeTab === 'staff' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Ahli Laboratorium</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tim dokter spesialis dan analis kesehatan berpengalaman untuk hasil yang akurat
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {staff.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserGroupIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 mr-2 text-yellow-500" />
                            <span>Pengalaman: {member.experience}</span>
                          </div>
                          <div className="flex items-center">
                            <AcademicCapIcon className="h-4 w-4 mr-2 text-green-500" />
                            <span>Spesialisasi: {member.specialization}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <span>Jadwal: {member.schedule}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Komitmen Tim Kami</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartIcon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Patient Care</h4>
                    <p className="text-gray-600 text-sm">Mengutamakan kenyamanan dan kepuasan pasien</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Accuracy</h4>
                    <p className="text-gray-600 text-sm">Komitmen pada hasil yang akurat dan reliable</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ClockIcon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Timeliness</h4>
                    <p className="text-gray-600 text-sm">Hasil tepat waktu sesuai kebutuhan klinis</p>
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
                  Sistem manajemen kualitas yang ketat untuk memastikan hasil laboratorium yang akurat dan reliable
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <standard.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{standard.title}</h3>
                    <p className="text-gray-600 text-sm">{standard.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Program Quality Assurance</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Internal Quality Control</h4>
                    <ul className="space-y-2 text-green-100">
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Daily quality control testing
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Equipment calibration & maintenance
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Temperature monitoring
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Staff competency assessment
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">External Quality Assessment</h4>
                    <ul className="space-y-2 text-green-100">
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        PNPK (Indonesian EQA Program)
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        CAP Proficiency Testing
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        EQAS participation
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Inter-laboratory comparison
                      </li>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Informasi Layanan</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Informasi lengkap tentang jam operasional, lokasi, dan cara menghubungi laboratorium
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <ClockIcon className="h-6 w-6 mr-3 text-blue-500" />
                      Jam Operasional
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-gray-800">Hari Kerja</span>
                        <span className="text-blue-600 font-medium">{operationalInfo.hours.regular}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="font-semibold text-gray-800">Akhir Pekan</span>
                        <span className="text-green-600 font-medium">{operationalInfo.hours.weekend}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                        <span className="font-semibold text-gray-800">Emergency</span>
                        <span className="text-red-600 font-medium">{operationalInfo.hours.emergency}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <DocumentTextIcon className="h-6 w-6 mr-3 text-green-500" />
                      Layanan Tambahan
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BuildingOffice2Icon className="h-5 w-5 mr-3 text-blue-500" />
                        <span className="text-gray-700">{operationalInfo.services.homeService}</span>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <DocumentTextIcon className="h-5 w-5 mr-3 text-green-500" />
                        <span className="text-gray-700">{operationalInfo.services.onlineResult}</span>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <UserGroupIcon className="h-5 w-5 mr-3 text-purple-500" />
                        <span className="text-gray-700">{operationalInfo.services.consultation}</span>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <ClockIcon className="h-5 w-5 mr-3 text-red-500" />
                        <span className="text-gray-700">{operationalInfo.services.emergency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <MapPinIcon className="h-6 w-6 mr-3 text-red-500" />
                      Lokasi & Kontak
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Alamat:</h4>
                        <p className="text-gray-600">{operationalInfo.location.address}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Telepon:</h4>
                        <p className="text-blue-600 font-medium">{operationalInfo.location.phone}</p>
                        <p className="text-gray-500 text-sm">{operationalInfo.location.ext}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">WhatsApp:</h4>
                        <p className="text-green-600 font-medium">{operationalInfo.location.whatsapp}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4">Waktu Hasil</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold text-yellow-100 mb-2">Pemeriksaan Rutin:</h5>
                        <ul className="space-y-1 text-yellow-50">
                          <li>• Darah rutin: 30-60 menit</li>
                          <li>• Kimia darah: 1-2 jam</li>
                          <li>• Urinalisis: 30 menit</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-100 mb-2">Pemeriksaan Khusus:</h5>
                        <ul className="space-y-1 text-yellow-50">
                          <li>• Hormon: 2-4 jam</li>
                          <li>• Kultur: 2-3 hari</li>
                          <li>• Molekuler: 1-7 hari</li>
                        </ul>
                      </div>
                    </div>
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
              Butuh Pemeriksaan Laboratorium?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Tim ahli laboratorium kami siap memberikan hasil yang akurat dengan 
              teknologi terdepan dan layanan 24/7 untuk kebutuhan emergency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                Konsultasi Lab
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
