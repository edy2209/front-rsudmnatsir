'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  ShieldCheckIcon,
  EyeSlashIcon,
  HeartIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  LockClosedIcon,
  StarIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export default function KlinikVCTPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [showPrivacyInfo, setShowPrivacyInfo] = useState(false);

  const layananVCT = [
    {
      nama: 'HIV Testing',
      deskripsi: 'Tes HIV dengan konseling sebelum dan sesudah tes',
      icon: ShieldCheckIcon,
      color: 'text-purple-600',
      durasi: '30 menit',
      konfidensial: true
    },
    {
      nama: 'Hepatitis Testing',
      deskripsi: 'Pemeriksaan hepatitis B dan C',
      icon: HeartIcon,
      color: 'text-red-600',
      durasi: '20 menit',
      konfidensial: true
    },
    {
      nama: 'Syphilis Testing',
      deskripsi: 'Deteksi dan diagnosis sifilis',
      icon: CheckCircleIcon,
      color: 'text-blue-600',
      durasi: '15 menit',
      konfidensial: true
    },
    {
      nama: 'Konseling Risiko',
      deskripsi: 'Edukasi pencegahan dan pengurangan risiko',
      icon: InformationCircleIcon,
      color: 'text-green-600',
      durasi: '45 menit',
      konfidensial: true
    }
  ];

  const layananKhusus = [
    {
      nama: 'Pre-Exposure Prophylaxis (PrEP)',
      deskripsi: 'Pencegahan HIV untuk individu berisiko tinggi',
      target: 'Individu berisiko tinggi',
      manfaat: ['Pencegahan 99% efektif', 'Konsultasi rutin', 'Monitoring kesehatan']
    },
    {
      nama: 'Post-Exposure Prophylaxis (PEP)',
      deskripsi: 'Pengobatan darurat setelah paparan HIV',
      target: 'Paparan dalam 72 jam',
      manfaat: ['Pengobatan darurat', 'Follow-up ketat', 'Dukungan psikologis']
    },
    {
      nama: 'Support Group',
      deskripsi: 'Kelompok dukungan untuk ODHA dan keluarga',
      target: 'ODHA dan keluarga',
      manfaat: ['Dukungan emosional', 'Sharing pengalaman', 'Edukasi berkelanjutan']
    }
  ];

  const prosedurTesting = [
    {
      step: 1,
      title: 'Registrasi Anonim',
      description: 'Pendaftaran tanpa identitas asli untuk menjaga privasi',
      icon: EyeSlashIcon
    },
    {
      step: 2,
      title: 'Pre-Test Counseling',
      description: 'Konseling sebelum tes untuk persiapan mental',
      icon: InformationCircleIcon
    },
    {
      step: 3,
      title: 'Pengambilan Sampel',
      description: 'Pengambilan darah dengan prosedur steril',
      icon: HeartIcon
    },
    {
      step: 4,
      title: 'Post-Test Counseling',
      description: 'Konseling hasil tes dan langkah selanjutnya',
      icon: CheckCircleIcon
    }
  ];

  const stats = [
    { label: 'Tes per Bulan', value: '500+', icon: UserGroupIcon },
    { label: 'Tingkat Akurasi', value: '99.9%', icon: CheckCircleIcon },
    { label: 'Konselor Terlatih', value: '8', icon: AcademicCapIcon },
    { label: 'Tahun Pengalaman', value: '15+', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Privacy Theme */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Privacy Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-8 h-full">
            {[...Array(24)].map((_, i) => (
              <LockClosedIcon key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
        </div>
        
        {/* Shield Animation - hidden on mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
          <ShieldCheckIcon className="w-72 h-72 xl:w-96 xl:h-96 text-white animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4">
                <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 animate-pulse" />
                <EyeSlashIcon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-300 animate-bounce" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Klinik <span className="text-purple-300">VCT</span>
            </h1>
            <p className="text-base sm:text-lg text-purple-100 mb-2">Voluntary Counseling and Testing</p>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Layanan tes HIV dan konseling sukarela yang aman, rahasia, dan profesional
            </p>
            
            {/* Privacy Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <LockClosedIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-purple-100">100% Konfidensial & Anonim</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Konsultasi Sekarang
              </button>
              <button 
                onClick={() => setShowPrivacyInfo(!showPrivacyInfo)}
                className="border-2 border-purple-300 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 text-sm sm:text-base"
              >
                Kebijakan Privasi
              </button>
            </div>

            {/* Privacy Info Popup */}
            {showPrivacyInfo && (
              <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left mx-4 sm:mx-0">
                <h3 className="text-lg sm:text-xl font-bold text-purple-200 mb-3 sm:mb-4">Jaminan Privasi Kami:</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Registrasi menggunakan kode anonim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Data tidak disimpan dengan identitas asli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Konseling dalam ruang pribadi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Tim medis terikat rahasia medis</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-3 sm:py-4">
            {[
              { id: 'layanan', label: 'Layanan VCT', shortLabel: 'Layanan', icon: ShieldCheckIcon },
              { id: 'prosedur', label: 'Prosedur', shortLabel: 'Prosedur', icon: DocumentTextIcon },
              { id: 'khusus', label: 'Layanan Khusus', shortLabel: 'Khusus', icon: HeartIcon },
              { id: 'kontak', label: 'Kontak', shortLabel: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  activeTab === item.id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">{item.label}</span>
                <span className="font-medium sm:hidden">{item.shortLabel}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          
          {/* Layanan Section */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-purple-600">VCT</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Layanan tes dan konseling sukarela dengan jaminan kerahasiaan penuh
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {layananVCT.map((layanan, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <layanan.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${layanan.color} group-hover:scale-110 transition-transform duration-300`} />
                        {layanan.konfidensial && (
                          <div className="bg-purple-100 p-1 rounded-full">
                            <LockClosedIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{layanan.nama}</h3>
                      <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{layanan.deskripsi}</p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Durasi: {layanan.durasi}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prosedur Section */}
          {activeTab === 'prosedur' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Prosedur <span className="text-purple-600">Testing</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Langkah-langkah tes VCT yang aman dan terjamin kerahasiaannya
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {prosedurTesting.map((prosedur, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-purple-100 p-4 sm:p-6 rounded-full w-fit mx-auto mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                        <prosedur.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-600" />
                      </div>
                      <div className="bg-purple-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mx-auto mb-2 sm:mb-3">
                        {prosedur.step}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">{prosedur.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">{prosedur.description}</p>
                    </div>
                  ))}
                </div>

                {/* Important Notes */}
                <div className="mt-8 sm:mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <ExclamationTriangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">Informasi Penting</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Persiapan Sebelum Tes:</h4>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>• Tidak perlu puasa</li>
                        <li>• Bawa identitas diri</li>
                        <li>• Siapkan mental untuk hasil</li>
                        <li>• Pertimbangkan periode jendela</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Setelah Tes:</h4>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>• Hasil tersedia dalam 30 menit</li>
                        <li>• Konseling lanjutan tersedia</li>
                        <li>• Rujukan jika diperlukan</li>
                        <li>• Follow-up berkala</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layanan Khusus Section */}
          {activeTab === 'khusus' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-purple-600">Khusus</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Program khusus untuk pencegahan dan dukungan komprehensif
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {layananKhusus.map((layanan, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{layanan.nama}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{layanan.deskripsi}</p>
                    <div className="bg-purple-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                      <p className="text-xs sm:text-sm font-semibold text-purple-700 mb-1">Target:</p>
                      <p className="text-xs sm:text-sm text-purple-600">{layanan.target}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Manfaat:</p>
                      <ul className="space-y-1">
                        {layanan.manfaat.map((manfaat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{manfaat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kontak Section */}
          {activeTab === 'kontak' && (
            <div className="fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Hubungi <span className="text-purple-600">Kami</span>
                  </h2>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Tim konselor VCT siap membantu Anda dengan profesional dan menjaga kerahasiaan.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Hotline VCT</p>
                        <p className="text-gray-600 text-sm sm:text-base">(0751) 32082 ext. 301</p>
                        <p className="text-xs text-gray-500">24 jam, 7 hari seminggu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Email Konsultasi</p>
                        <p className="text-gray-600 text-sm sm:text-base break-all">vct@rsudmnatsir.sumbar.go.id</p>
                        <p className="text-xs text-gray-500">Respon dalam 24 jam</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Lokasi</p>
                        <p className="text-gray-600 text-sm sm:text-base">Lantai 1, Gedung Khusus VCT</p>
                        <p className="text-xs text-gray-500">Akses terpisah untuk privasi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Jam Operasional</p>
                        <p className="text-gray-600 text-sm sm:text-base">Senin - Jumat: 08:00 - 20:00</p>
                        <p className="text-gray-600 text-sm sm:text-base">Sabtu: 08:00 - 16:00</p>
                        <p className="text-xs text-gray-500">Minggu: Emergency konsultasi</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anonymous Consultation Form */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Konsultasi Anonim</h3>
                  </div>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Kode Anonim (opsional)</label>
                      <input type="text" placeholder="Buat kode unik Anda" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Umur</label>
                      <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base">
                        <option>Pilih rentang umur</option>
                        <option>15-20 tahun</option>
                        <option>21-30 tahun</option>
                        <option>31-40 tahun</option>
                        <option>41+ tahun</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Jenis Konsultasi</label>
                      <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base">
                        <option>Pilih jenis konsultasi</option>
                        <option>Tes HIV</option>
                        <option>Informasi pencegahan</option>
                        <option>Konseling pre-tes</option>
                        <option>Dukungan emosional</option>
                        <option>Informasi PrEP/PEP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Pertanyaan/Kekhawatiran</label>
                      <textarea rows={4} placeholder="Sampaikan kekhawatiran Anda..." className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"></textarea>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base">
                      Kirim Konsultasi Anonim
                    </button>
                    <div className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <LockClosedIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Data Anda 100% aman dan terenkripsi</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Ketahui Status Kesehatan Anda
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Tes VCT adalah langkah pertama untuk hidup sehat dan melindungi orang yang Anda sayangi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Daftar Tes Sekarang
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm sm:text-base">
              Konsultasi Dulu
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PageLayout>
  );
}
