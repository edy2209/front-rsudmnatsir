'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { 
  BeakerIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  ArrowRightIcon,
  CogIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  SparklesIcon,
  BoltIcon,
  AcademicCapIcon,
  CubeIcon,
  EyeIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline';

export default function LaboratoriumPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({ tests: 0, accuracy: 0, time: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers(prev => ({
        tests: Math.min(prev.tests + 100, 15000),
        accuracy: Math.min(prev.accuracy + 1, 99),
        time: Math.min(prev.time + 1, 120)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const tabMenu = [
    { id: 'layanan', label: 'Layanan Lab', icon: BeakerIcon },
    { id: 'spesialisasi', label: 'Spesialisasi', icon: AcademicCapIcon },
    { id: 'teknologi', label: 'Teknologi', icon: ComputerDesktopIcon },
    { id: 'informasi', label: 'Info & Kontak', icon: DocumentTextIcon }
  ];

  const layananLaboratorium = [
    {
      id: 1,
      nama: 'Hematologi',
      deskripsi: 'Pemeriksaan darah lengkap untuk diagnosis gangguan darah dan infeksi',
      icon: HeartIcon,
      color: 'from-red-500 to-pink-600',
      waktu: '30 menit',
      tests: ['Hemoglobin', 'Leukosit', 'Trombosit', 'Hematokrit', 'LED'],
      persiapan: 'Tidak perlu puasa',
      harga: 'Rp 45.000 - 120.000',
      akurasi: '99.5%'
    },
    {
      id: 2,
      nama: 'Kimia Klinik',
      deskripsi: 'Analisis biokimia untuk fungsi organ dan metabolisme tubuh',
      icon: BeakerIcon,
      color: 'from-blue-500 to-indigo-600',
      waktu: '45 menit',
      tests: ['Gula Darah', 'Kolesterol', 'Fungsi Ginjal', 'Fungsi Hati', 'Elektrolit'],
      persiapan: 'Puasa 10-12 jam',
      harga: 'Rp 35.000 - 200.000',
      akurasi: '99.8%'
    },
    {
      id: 3,
      nama: 'Mikrobiologi',
      deskripsi: 'Identifikasi mikroorganisme penyebab infeksi dan uji kepekaan antibiotik',
      icon: MagnifyingGlassIcon,
      color: 'from-green-500 to-emerald-600',
      waktu: '24-72 jam',
      tests: ['Kultur Bakteri', 'Uji Kepekaan', 'Parasit', 'Jamur', 'TB'],
      persiapan: 'Sesuai jenis sampel',
      harga: 'Rp 75.000 - 300.000',
      akurasi: '98.5%'
    },
    {
      id: 4,
      nama: 'Serologi & Imunologi',
      deskripsi: 'Pemeriksaan antibodi dan penanda infeksi virus serta autoimun',
      icon: ShieldCheckIcon,
      color: 'from-purple-500 to-violet-600',
      waktu: '2-4 jam',
      tests: ['Hepatitis', 'HIV', 'TORCH', 'Tumor Marker', 'Autoimun'],
      persiapan: 'Tidak perlu puasa',
      harga: 'Rp 65.000 - 500.000',
      akurasi: '99.2%'
    },
    {
      id: 5,
      nama: 'Urinalisis',
      deskripsi: 'Pemeriksaan urin lengkap untuk evaluasi fungsi ginjal dan saluran kemih',
      icon: CubeIcon,
      color: 'from-yellow-500 to-orange-600',
      waktu: '20 menit',
      tests: ['Protein', 'Glukosa', 'Sedimen', 'Berat Jenis', 'Nitrit'],
      persiapan: 'Urin pagi pertama',
      harga: 'Rp 25.000 - 75.000',
      akurasi: '99.0%'
    },
    {
      id: 6,
      nama: 'Hormon & Endokrin',
      deskripsi: 'Analisis hormon untuk diagnosis gangguan endokrin dan reproduksi',
      icon: FireIcon,
      color: 'from-pink-500 to-rose-600',
      waktu: '3-6 jam',
      tests: ['Tiroid', 'Insulin', 'Kortisol', 'Hormon Reproduksi', 'Paratiroid'],
      persiapan: 'Sesuai jenis hormon',
      harga: 'Rp 85.000 - 400.000',
      akurasi: '99.7%'
    }
  ];

  const spesialisasiLab = [
    {
      nama: 'Patologi Klinik',
      deskripsi: 'Diagnosis penyakit melalui analisis cairan tubuh',
      icon: BeakerIcon,
      link: '/fasilitas-layanan/pelayanan-penunjang/laboratorium/patologi-klinik',
      layanan: ['Hematologi', 'Kimia Klinik', 'Urinalisis', 'Feses'],
      dokter: 'Dr. Ahmad Syarif, Sp.PK'
    },
    {
      nama: 'Patologi Anatomik',
      deskripsi: 'Diagnosis melalui pemeriksaan jaringan dan sel',
      icon: EyeIcon,
      link: '/fasilitas-layanan/pelayanan-penunjang/laboratorium/patologi-anatomik',
      layanan: ['Histopatologi', 'Sitologi', 'Biopsi', 'Forensik'],
      dokter: 'Dr. Siti Aminah, Sp.PA'
    }
  ];

  const teknologiCanggih = [
    {
      nama: 'Automated Chemistry Analyzer',
      deskripsi: 'Sistem otomatis untuk analisis kimia klinik dengan throughput tinggi',
      kapasitas: '800 test/jam',
      akurasi: '99.8%'
    },
    {
      nama: 'Hematology Analyzer',
      deskripsi: 'Analisis otomatis parameter hematologi dengan teknologi flow cytometry',
      kapasitas: '100 sampel/jam',
      akurasi: '99.5%'
    },
    {
      nama: 'PCR Real-Time',
      deskripsi: 'Deteksi molekuler untuk virus, bakteri, dan genetic testing',
      kapasitas: '96 sampel/run',
      akurasi: '99.9%'
    },
    {
      nama: 'ELISA Automation',
      deskripsi: 'Sistem otomatis untuk pemeriksaan serologi dan hormon',
      kapasitas: '200 test/jam',
      akurasi: '99.2%'
    }
  ];

  const statsLab = [
    { label: 'Pemeriksaan/Hari', value: animatedNumbers.tests.toLocaleString(), icon: ChartBarIcon, color: 'text-blue-600' },
    { label: 'Akurasi Hasil', value: `${animatedNumbers.accuracy}.5%`, icon: ShieldCheckIcon, color: 'text-green-600' },
    { label: 'Waktu Hasil', value: `< ${animatedNumbers.time} menit`, icon: ClockIcon, color: 'text-orange-600' },
    { label: 'Kepuasan Pasien', value: '98%', icon: StarIcon, color: 'text-yellow-600' }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 relative overflow-hidden">
          {/* Animated Lab Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full animate-bounce"></div>
            <div className="absolute top-32 right-20 w-12 h-12 bg-white rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-32 w-20 h-20 bg-white rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-40 right-10 w-8 h-8 bg-white rounded-full animate-bounce delay-500"></div>
          </div>
          
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mr-4">
                    <BeakerIcon className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      Laboratorium
                      <span className="block text-blue-200">Klinik</span>
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Pelayanan laboratorium lengkap dengan teknologi terdepan dan tim ahli 
                  berpengalaman untuk diagnosis yang akurat dan cepat
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>24/7 Emergency</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span>ISO 15189</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    <span>Automated</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                    Daftar Pemeriksaan
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Lihat Hasil Online
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-6">
                  {statsLab.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                      <stat.icon className="h-10 w-10 mx-auto mb-3 text-blue-200" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Content Sections */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          {activeTab === 'layanan' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Laboratorium Unggulan</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Berbagai jenis pemeriksaan laboratorium dengan teknologi canggih dan hasil yang akurat
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {layananLaboratorium.map((layanan) => (
                  <div 
                    key={layanan.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                    onClick={() => setSelectedTest(selectedTest === layanan.id ? null : layanan.id)}
                  >
                    <div className={`bg-gradient-to-r ${layanan.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="relative z-10">
                        <layanan.icon className="h-10 w-10 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{layanan.nama}</h3>
                        <p className="text-sm opacity-90">{layanan.deskripsi}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <ClockIcon className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                          <div className="text-sm font-semibold text-gray-800">{layanan.waktu}</div>
                          <div className="text-xs text-gray-600">Waktu</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <ShieldCheckIcon className="h-5 w-5 mx-auto mb-1 text-green-600" />
                          <div className="text-sm font-semibold text-gray-800">{layanan.akurasi}</div>
                          <div className="text-xs text-gray-600">Akurasi</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-1">Harga: <span className="font-semibold text-blue-600">{layanan.harga}</span></div>
                        <div className="text-sm text-gray-600">Persiapan: <span className="font-medium">{layanan.persiapan}</span></div>
                      </div>
                      
                      {selectedTest === layanan.id && (
                        <div className="border-t pt-4 space-y-3 animate-fadeIn">
                          <h4 className="font-semibold text-gray-800">Parameter Pemeriksaan:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {layanan.tests.map((test, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {test}
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

          {activeTab === 'spesialisasi' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Spesialisasi Laboratorium</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Tim dokter spesialis laboratorium dengan keahlian di berbagai bidang diagnostik
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {spesialisasiLab.map((spesialis, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                      <div className="flex items-center mb-4">
                        <spesialis.icon className="h-12 w-12 mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold">{spesialis.nama}</h3>
                          <p className="text-indigo-200">{spesialis.deskripsi}</p>
                        </div>
                      </div>
                      <div className="text-center bg-white/10 rounded-lg p-3">
                        <UserGroupIcon className="h-6 w-6 mx-auto mb-2" />
                        <div className="font-semibold">{spesialis.dokter}</div>
                        <div className="text-sm text-indigo-200">Dokter Spesialis</div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Layanan Unggulan:</h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {spesialis.layanan.map((layanan, i) => (
                          <div key={i} className="bg-indigo-50 rounded-lg px-3 py-2 text-sm text-indigo-700 text-center font-medium">
                            {layanan}
                          </div>
                        ))}
                      </div>
                      
                      <Link href={spesialis.link}>
                        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                          Lihat Detail
                          <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'teknologi' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Teknologi Canggih</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Peralatan laboratorium terdepan untuk hasil pemeriksaan yang akurat dan cepat
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {teknologiCanggih.map((tech, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl mr-4">
                        <ComputerDesktopIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{tech.nama}</h3>
                        <p className="text-gray-600">{tech.deskripsi}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl text-center">
                        <BoltIcon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                        <div className="font-semibold text-blue-800">{tech.kapasitas}</div>
                        <div className="text-sm text-blue-600">Kapasitas</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <ShieldCheckIcon className="h-6 w-6 mx-auto mb-2 text-green-600" />
                        <div className="font-semibold text-green-800">{tech.akurasi}</div>
                        <div className="text-sm text-green-600">Akurasi</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'informasi' && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Panduan Pemeriksaan Lab */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Panduan Pemeriksaan</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Pendaftaran dapat dilakukan online atau langsung ke laboratorium',
                      'Bawa kartu identitas dan surat pengantar dokter',
                      'Ikuti petunjuk persiapan khusus sesuai jenis pemeriksaan',
                      'Pengambilan sampel dilakukan oleh petugas terlatih',
                      'Hasil dapat diambil sesuai jadwal atau dikirim via email',
                      'Konsultasi hasil dengan dokter yang merujuk'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Jam Operasional & Kontak */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Informasi Layanan</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Jam Operasional:</h4>
                      <div className="space-y-2 text-blue-100">
                        <div>Senin - Jumat: 06:00 - 21:00 WIB</div>
                        <div>Sabtu: 06:00 - 18:00 WIB</div>
                        <div>Minggu: 08:00 - 16:00 WIB</div>
                        <div className="font-semibold text-yellow-300">Emergency: 24 Jam</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-blue-400 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <PhoneIcon className="w-5 h-5" />
                        <div>
                          <p className="font-semibold">Hotline Lab</p>
                          <p className="text-blue-200">(0751) 32082 ext. 150</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="w-5 h-5" />
                        <div>
                          <p className="font-semibold">Lokasi</p>
                          <p className="text-blue-200">Gedung Diagnostik, Lantai 2</p>
                        </div>
                      </div>
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
