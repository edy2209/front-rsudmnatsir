'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  CameraIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  CogIcon,
  BoltIcon,
  AcademicCapIcon,
  EyeIcon,
  HeartIcon,
  CubeIcon,
  FilmIcon,
  SpeakerWaveIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function RadiologiPage() {
  const [activeTab, setActiveTab] = useState('modalitas');
  const [selectedModality, setSelectedModality] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const tabMenu = [
    { id: 'modalitas', label: 'Modalitas Imaging', icon: CameraIcon },
    { id: 'prosedur', label: 'Prosedur', icon: DocumentTextIcon },
    { id: 'teknologi', label: 'Teknologi', icon: ComputerDesktopIcon },
    { id: 'informasi', label: 'Info & Kontak', icon: ClockIcon }
  ];

  const modalitasRadiologi = [
    {
      id: 'ct-scan',
      nama: 'CT Scan',
      deskripsi: 'Computed Tomography untuk pencitraan detail organ dalam dengan teknologi spiral',
      icon: ComputerDesktopIcon,
      color: 'from-blue-500 to-indigo-600',
      waktu: '15-30 menit',
      persiapan: 'Puasa 4-6 jam untuk kontras',
      harga: 'Rp 800.000 - 2.500.000',
      keunggulan: ['Resolusi tinggi', 'Cepat', '3D Reconstruction', 'Multi-planar'],
      indikasi: ['Stroke', 'Tumor', 'Trauma', 'Jantung'],
      kontras: 'Tersedia'
    },
    {
      id: 'mri',
      nama: 'MRI',
      deskripsi: 'Magnetic Resonance Imaging untuk detail jaringan lunak tanpa radiasi',
      icon: MagnifyingGlassIcon,
      color: 'from-purple-500 to-violet-600',
      waktu: '30-60 menit',
      persiapan: 'Lepas benda logam',
      harga: 'Rp 1.200.000 - 3.500.000',
      keunggulan: ['Tanpa radiasi', 'Detail jaringan lunak', 'Multiplanar', 'Functional imaging'],
      indikasi: ['Brain', 'Spine', 'Joint', 'Abdomen'],
      kontras: 'Gadolinium'
    },
    {
      id: 'xray',
      nama: 'Digital X-Ray',
      deskripsi: 'Radiografi digital untuk pemeriksaan tulang dan organ dengan dosis rendah',
      icon: FilmIcon,
      color: 'from-green-500 to-emerald-600',
      waktu: '5-10 menit',
      persiapan: 'Tidak perlu persiapan khusus',
      harga: 'Rp 150.000 - 400.000',
      keunggulan: ['Digital processing', 'Dosis rendah', 'Hasil cepat', 'PACS integrated'],
      indikasi: ['Tulang', 'Chest', 'Abdomen', 'Screening'],
      kontras: 'Tidak diperlukan'
    },
    {
      id: 'usg',
      nama: 'USG 4D',
      deskripsi: 'Ultrasonografi 4 dimensi untuk pemeriksaan real-time dengan kualitas HD',
      icon: SpeakerWaveIcon,
      color: 'from-orange-500 to-red-600',
      waktu: '20-45 menit',
      persiapan: 'Sesuai jenis pemeriksaan',
      harga: 'Rp 200.000 - 800.000',
      keunggulan: ['Real-time', '4D imaging', 'Doppler', 'Portable'],
      indikasi: ['Obstetri', 'Abdomen', 'Kardiak', 'Vaskular'],
      kontras: 'Microbubble'
    },
    {
      id: 'mammografi',
      nama: 'Mammografi Digital',
      deskripsi: 'Pemeriksaan khusus payudara untuk deteksi dini kanker dengan teknologi digital',
      icon: HeartIcon,
      color: 'from-pink-500 to-rose-600',
      waktu: '15-20 menit',
      persiapan: 'Hindari deodoran/lotion',
      harga: 'Rp 350.000 - 600.000',
      keunggulan: ['High resolution', 'Low dose', 'CAD system', 'Tomosynthesis'],
      indikasi: ['Screening', 'Diagnostic', 'Follow-up', 'Biopsy guide'],
      kontras: 'Tidak diperlukan'
    },
    {
      id: 'fluoroskopi',
      nama: 'Fluoroskopi',
      deskripsi: 'Pencitraan real-time untuk prosedur intervensi dan pemeriksaan dinamis',
      icon: BoltIcon,
      color: 'from-yellow-500 to-orange-600',
      waktu: '30-90 menit',
      persiapan: 'Puasa 6-8 jam',
      harga: 'Rp 500.000 - 1.500.000',
      keunggulan: ['Real-time', 'Interventional', 'Dynamic study', 'Road mapping'],
      indikasi: ['Angiografi', 'GI tract', 'Urografi', 'Arthrografi'],
      kontras: 'Iodine/Barium'
    }
  ];

  const teknologiCanggih = [
    {
      nama: 'PACS (Picture Archiving System)',
      deskripsi: 'Sistem penyimpanan dan distribusi gambar digital terintegrasi',
      fitur: ['Cloud storage', 'Remote access', 'AI-assisted', 'Mobile viewing'],
      status: 'Active'
    },
    {
      nama: 'AI-Powered Diagnosis',
      deskripsi: 'Sistem bantuan diagnosis berbasis artificial intelligence',
      fitur: ['Auto detection', 'Pattern recognition', 'Risk assessment', 'Report generation'],
      status: 'Implemented'
    },
    {
      nama: 'Dose Management System',
      deskripsi: 'Monitoring dan optimisasi dosis radiasi untuk keamanan pasien',
      fitur: ['Dose tracking', 'Alert system', 'Optimization', 'Compliance report'],
      status: 'Certified'
    },
    {
      nama: '3D/4D Reconstruction',
      deskripsi: 'Rekonstruksi gambar 3D dan 4D untuk visualisasi yang lebih baik',
      fitur: ['Volume rendering', 'Multi-planar', 'Virtual endoscopy', 'Motion analysis'],
      status: 'Advanced'
    }
  ];

  const statsRadiologi = [
    { label: 'Pemeriksaan/Hari', value: '300+', icon: CameraIcon, color: 'text-blue-600' },
    { label: 'Akurasi Diagnosis', value: '98.5%', icon: ShieldCheckIcon, color: 'text-green-600' },
    { label: 'Waktu Laporan', value: '< 2 jam', icon: ClockIcon, color: 'text-orange-600' },
    { label: 'Kepuasan Pasien', value: '97%', icon: StarIcon, color: 'text-yellow-600' }
  ];

  const dokterRadiologi = [
    {
      nama: 'Dr. Budi Santoso, Sp.Rad',
      spesialisasi: 'Radiologi Diagnostik',
      keahlian: ['CT Scan', 'MRI', 'Mammografi'],
      pengalaman: '15 tahun',
      jadwal: 'Senin-Jumat: 08:00-16:00'
    },
    {
      nama: 'Dr. Sari Dewi, Sp.Rad(K)',
      spesialisasi: 'Radiologi Intervensi',
      keahlian: ['Angiografi', 'Biopsi', 'Embolisasi'],
      pengalaman: '12 tahun',
      jadwal: 'Senin-Sabtu: 07:00-15:00'
    }
  ];

  const handleScanDemo = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 text-white py-16 relative overflow-hidden -mt-20 pt-20">
          {/* Animated Scanner Waves */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-1 bg-cyan-400 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-1 bg-blue-400 animate-pulse delay-300"></div>
            <div className="absolute bottom-32 left-40 w-40 h-1 bg-indigo-400 animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mr-4">
                    <CameraIcon className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      Radiologi
                      <span className="block text-cyan-300">Digital</span>
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Pelayanan pencitraan medis canggih dengan teknologi digital terdepan 
                  untuk diagnosis yang akurat dan cepat
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <BoltIcon className="h-5 w-5 mr-2" />
                    <span>Digital Imaging</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span>Low Radiation</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <RocketLaunchIcon className="h-5 w-5 mr-2" />
                    <span>AI-Powered</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleScanDemo}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                  >
                    {isScanning ? 'Scanning...' : 'Jadwalkan Pemeriksaan'}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300">
                    Lihat Hasil Online
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-6">
                  {statsRadiologi.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                      <stat.icon className="h-10 w-10 mx-auto mb-3 text-cyan-300" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scanning Animation Overlay */}
        {isScanning && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
              <p className="text-lg font-semibold text-gray-800">Memproses Scan...</p>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex overflow-x-auto">
              {tabMenu.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-cyan-600 border-b-2 border-cyan-600 bg-cyan-50'
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          {activeTab === 'modalitas' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Modalitas Pencitraan Medis</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Berbagai teknologi pencitraan canggih untuk diagnosis yang akurat dan komprehensif
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modalitasRadiologi.map((modalitas) => (
                  <div 
                    key={modalitas.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                    onClick={() => setSelectedModality(selectedModality === modalitas.id ? null : modalitas.id)}
                  >
                    <div className={`bg-gradient-to-r ${modalitas.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="relative z-10">
                        <modalitas.icon className="h-10 w-10 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{modalitas.nama}</h3>
                        <p className="text-sm opacity-90">{modalitas.deskripsi}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <ClockIcon className="h-5 w-5 mx-auto mb-1 text-cyan-600" />
                          <div className="text-sm font-semibold text-gray-800">{modalitas.waktu}</div>
                          <div className="text-xs text-gray-600">Durasi</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <CogIcon className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                          <div className="text-sm font-semibold text-gray-800">{modalitas.kontras}</div>
                          <div className="text-xs text-gray-600">Kontras</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-1">Harga: <span className="font-semibold text-cyan-600">{modalitas.harga}</span></div>
                        <div className="text-sm text-gray-600">Persiapan: <span className="font-medium">{modalitas.persiapan}</span></div>
                      </div>
                      
                      {selectedModality === modalitas.id && (
                        <div className="border-t pt-4 space-y-4 animate-fadeIn">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Keunggulan:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {modalitas.keunggulan.map((keunggulan, idx) => (
                                <div key={idx} className="bg-cyan-50 rounded-lg px-2 py-1 text-xs text-cyan-700 text-center">
                                  {keunggulan}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Indikasi:</h4>
                            <div className="flex flex-wrap gap-2">
                              {modalitas.indikasi.map((indikasi, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                  {indikasi}
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

          {activeTab === 'prosedur' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Prosedur Pemeriksaan</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Panduan lengkap prosedur pemeriksaan radiologi untuk kenyamanan pasien
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Prosedur Umum */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <DocumentTextIcon className="h-8 w-8 text-cyan-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Prosedur Umum</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Pendaftaran dan verifikasi identitas pasien',
                      'Konsultasi dengan teknisi radiologi',
                      'Persiapan pasien sesuai jenis pemeriksaan',
                      'Pelaksanaan pemeriksaan',
                      'Post-processing dan quality control',
                      'Interpretasi oleh dokter radiologi',
                      'Penyerahan hasil dan konsultasi'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-cyan-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keselamatan Radiasi */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-8 border border-orange-100">
                  <div className="flex items-center mb-6">
                    <ShieldCheckIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Keselamatan Radiasi</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Protokol ALARA (As Low As Reasonably Achievable)',
                      'Screening kehamilan untuk wanita usia subur',
                      'Penggunaan pelindung radiasi',
                      'Optimisasi parameter pemeriksaan',
                      'Monitoring dosis radiasi',
                      'Edukasi pasien tentang keamanan pemeriksaan'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                          <CheckCircleIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tim Radiologi */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Tim Dokter Radiologi</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {dokterRadiologi.map((dokter, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center mb-4">
                        <UserGroupIcon className="h-8 w-8 text-slate-600 mr-3" />
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{dokter.nama}</h4>
                          <p className="text-slate-600">{dokter.spesialisasi}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div><strong>Keahlian:</strong> {dokter.keahlian.join(', ')}</div>
                        <div><strong>Pengalaman:</strong> {dokter.pengalaman}</div>
                        <div><strong>Jadwal:</strong> {dokter.jadwal}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teknologi' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Teknologi Canggih</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Sistem teknologi terdepan untuk meningkatkan akurasi diagnosis dan keamanan pasien
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {teknologiCanggih.map((tech, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl mr-4">
                        <ComputerDesktopIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{tech.nama}</h3>
                        <p className="text-gray-600">{tech.deskripsi}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Fitur Unggulan:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tech.fitur.map((fitur, i) => (
                          <div key={i} className="bg-cyan-50 rounded-lg px-3 py-2 text-sm text-cyan-700 text-center">
                            {fitur}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                        Status: {tech.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'informasi' && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Jadwal & Kontak */}
                <div className="bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Informasi Layanan</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <ClockIcon className="h-5 w-5 mr-2" />
                        Jam Operasional:
                      </h4>
                      <div className="space-y-2 text-blue-100 ml-7">
                        <div>Senin - Jumat: 06:00 - 21:00 WIB</div>
                        <div>Sabtu: 07:00 - 18:00 WIB</div>
                        <div>Minggu: 08:00 - 16:00 WIB</div>
                        <div className="font-semibold text-cyan-300">CT/MRI Emergency: 24 Jam</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-blue-400 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <PhoneIcon className="w-5 h-5" />
                        <div>
                          <p className="font-semibold">Hotline Radiologi</p>
                          <p className="text-blue-200">(0751) 32082 ext. 180</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="w-5 h-5" />
                        <div>
                          <p className="font-semibold">Lokasi</p>
                          <p className="text-blue-200">Gedung Diagnostik, Lantai 1 & 3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Persiapan Khusus */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <DocumentTextIcon className="h-8 w-8 text-slate-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Persiapan Khusus</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">CT Scan dengan Kontras:</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Puasa 4-6 jam sebelum pemeriksaan</li>
                        <li>• Informasikan riwayat alergi</li>
                        <li>• Periksa fungsi ginjal</li>
                        <li>• Lepas perhiasan logam</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">MRI:</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Lepas semua benda logam</li>
                        <li>• Informasikan adanya implant</li>
                        <li>• Gunakan pakaian tanpa logam</li>
                        <li>• Tidak untuk claustrophobia berat</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">USG Abdomen:</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Puasa 6-8 jam untuk abdomen atas</li>
                        <li>• Minum air putih untuk pelvis</li>
                        <li>• Hindari makanan bergas</li>
                        <li>• Tahan buang air kecil</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
