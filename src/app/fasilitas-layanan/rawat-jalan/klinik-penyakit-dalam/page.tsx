'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  HeartIcon,
  BeakerIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  StarIcon,
  AcademicCapIcon,
  PlusCircleIcon,
  ListBulletIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function KlinikPenyakitDalamPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [selectedCondition, setSelectedCondition] = useState<'diabetes' | 'hipertensi' | 'jantung'>('diabetes');

  const layananPenyakitDalam = [
    {
      nama: 'Diabetes Melitus',
      deskripsi: 'Pengelolaan diabetes komprehensif dengan edukasi dan monitoring',
      icon: BeakerIcon,
      color: 'text-orange-500',
      prevalensi: '15%'
    },
    {
      nama: 'Hipertensi',
      deskripsi: 'Deteksi dan pengelolaan tekanan darah tinggi',
      icon: HeartIcon,
      color: 'text-red-500',
      prevalensi: '25%'
    },
    {
      nama: 'Penyakit Jantung',
      deskripsi: 'Diagnosis dan terapi penyakit kardiovaskular',
      icon: HeartIcon,
      color: 'text-pink-500',
      prevalensi: '12%'
    },
    {
      nama: 'Gangguan Ginjal',
      deskripsi: 'Pemeriksaan dan pengelolaan penyakit ginjal',
      icon: ShieldCheckIcon,
      color: 'text-blue-500',
      prevalensi: '8%'
    }
  ];

  const conditions = {
    diabetes: {
      title: 'Diabetes Melitus',
      description: 'Pengelolaan komprehensif diabetes tipe 1 dan tipe 2',
      symptoms: ['Sering haus', 'Sering buang air kecil', 'Penurunan berat badan', 'Penglihatan kabur'],
      treatments: ['Edukasi diet', 'Terapi insulin', 'Monitoring gula darah', 'Olahraga teratur'],
      color: 'orange'
    },
    hipertensi: {
      title: 'Hipertensi',
      description: 'Manajemen tekanan darah tinggi untuk mencegah komplikasi',
      symptoms: ['Sakit kepala', 'Pusing', 'Nyeri dada', 'Sesak napas'],
      treatments: ['Obat antihipertensi', 'Diet rendah garam', 'Olahraga rutin', 'Manajemen stress'],
      color: 'red'
    },
    jantung: {
      title: 'Penyakit Jantung',
      description: 'Diagnosis dan terapi berbagai gangguan kardiovaskular',
      symptoms: ['Nyeri dada', 'Sesak napas', 'Palpitasi', 'Kelelahan'],
      treatments: ['EKG rutin', 'Ekokardiografi', 'Terapi obat', 'Rehabilitasi jantung'],
      color: 'pink'
    }
  };

  const dokterSpesialis = [
    {
      nama: 'dr. Budi Internist, Sp.PD',
      spesialisasi: 'Spesialis Penyakit Dalam',
      subspesialisasi: 'Endokrinologi',
      jadwal: 'Senin - Kamis: 08:00-14:00',
      pengalaman: '18 tahun'
    },
    {
      nama: 'dr. Siti Medicina, Sp.PD',
      spesialisasi: 'Spesialis Penyakit Dalam',
      subspesialisasi: 'Kardiologi',
      jadwal: 'Selasa - Jumat: 14:00-20:00',
      pengalaman: '15 tahun'
    },
    {
      nama: 'dr. Ahmad Nephro, Sp.PD',
      spesialisasi: 'Spesialis Penyakit Dalam',
      subspesialisasi: 'Nefrologi',
      jadwal: 'Rabu - Sabtu: 08:00-16:00',
      pengalaman: '20 tahun'
    }
  ];

  const stats = [
    { label: 'Pasien per Bulan', value: '1200+', icon: UserGroupIcon },
    { label: 'Tingkat Kepuasan', value: '98%', icon: CheckCircleIcon },
    { label: 'Dokter Spesialis', value: '6', icon: AcademicCapIcon },
    { label: 'Tahun Pengalaman', value: '25+', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Medical Pattern */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Medical Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="bg-teal-600 rounded-full w-1 h-1 sm:w-2 sm:h-2 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements - hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-12 h-12 lg:w-16 lg:h-16 bg-teal-200/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-8 h-8 lg:w-12 lg:h-12 bg-emerald-200/40 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-cyan-200/50 rounded-full animate-float delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <PlusCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 mx-auto mb-4 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2">
              Klinik <span className="text-teal-600">Penyakit Dalam</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              Pelayanan komprehensif untuk diagnosis dan pengelolaan penyakit dalam dengan pendekatan holistik
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Konsultasi Medis
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                Medical Check-up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats with Animation */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
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
          <nav className="flex justify-center overflow-x-auto scrollbar-hide py-3 sm:py-4 gap-2 sm:gap-4 lg:gap-8">
            {[
              { id: 'layanan', label: 'Layanan', icon: ListBulletIcon },
              { id: 'kondisi', label: 'Kondisi Medis', icon: ChartBarIcon },
              { id: 'dokter', label: 'Dokter', icon: UserGroupIcon },
              { id: 'kontak', label: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">{item.label}</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
                Layanan <span className="text-teal-600">Medis</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Layanan diagnosis dan pengobatan komprehensif untuk berbagai penyakit dalam
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {layananPenyakitDalam.map((layanan, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-4">
                        <layanan.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${layanan.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-semibold">
                          {layanan.prevalensi}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{layanan.nama}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{layanan.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kondisi Medis Section */}
          {activeTab === 'kondisi' && (
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
                Kondisi <span className="text-teal-600">Medis</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Informasi detail tentang berbagai kondisi medis yang kami tangani
              </p>

              {/* Condition Selector */}
              <div className="flex justify-center mb-6 sm:mb-8 px-4">
                <div className="bg-gray-100 p-1 rounded-full overflow-x-auto max-w-full">
                  <div className="flex gap-1">
                    {(Object.keys(conditions) as Array<keyof typeof conditions>).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCondition(key)}
                        className={`px-3 sm:px-6 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                          selectedCondition === key
                            ? 'bg-teal-600 text-white shadow-lg'
                            : 'text-gray-600 hover:text-teal-600'
                        }`}
                      >
                        {conditions[key].title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Condition Details */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {conditions[selectedCondition].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    {conditions[selectedCondition].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        Gejala Umum
                      </h4>
                      <ul className="space-y-2">
                        {conditions[selectedCondition].symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        Pengobatan
                      </h4>
                      <ul className="space-y-2">
                        {conditions[selectedCondition].treatments.map((treatment, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dokter Section */}
          {activeTab === 'dokter' && (
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
                Tim <span className="text-teal-600">Dokter Spesialis</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Dokter spesialis penyakit dalam dengan keahlian di berbagai bidang
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {dokterSpesialis.map((dokter, index) => (
                  <div key={index} className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-teal-100 to-emerald-100 p-4 sm:p-6 rounded-full w-fit mx-auto mb-4">
                        <UserGroupIcon className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{dokter.nama}</h3>
                      <p className="text-teal-600 font-semibold mb-1 text-sm sm:text-base">{dokter.spesialisasi}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">{dokter.subspesialisasi}</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="text-center">{dokter.jadwal}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>Pengalaman: {dokter.pengalaman}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kontak Section */}
          {activeTab === 'kontak' && (
            <div className="fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Hubungi <span className="text-teal-600">Kami</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    Konsultasikan masalah kesehatan Anda dengan tim medis berpengalaman kami.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-teal-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Telepon</p>
                        <p className="text-gray-600 text-sm sm:text-base">(0751) 32082</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-teal-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                        <p className="text-gray-600 text-xs sm:text-sm break-all">penyakitdalam@rsudmnatsir.sumbar.go.id</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-teal-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Lokasi</p>
                        <p className="text-gray-600 text-sm sm:text-base">Lantai 1, Gedung Poliklinik</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-teal-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Jam Operasional</p>
                        <p className="text-gray-600 text-sm sm:text-base">Senin - Sabtu: 08:00 - 16:00</p>
                        <p className="text-gray-600 text-sm sm:text-base">Minggu: Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medical Consultation Form */}
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Konsultasi Medis</h3>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Umur</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Utama</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base">
                        <option>Pilih keluhan utama</option>
                        <option>Diabetes</option>
                        <option>Hipertensi</option>
                        <option>Penyakit Jantung</option>
                        <option>Gangguan Ginjal</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Detail Keluhan</label>
                      <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"></textarea>
                    </div>
                    <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 text-sm sm:text-base">
                      Kirim Konsultasi
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Kesehatan Adalah Investasi Terbaik
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Dapatkan pemeriksaan komprehensif dan pengelolaan penyakit dalam yang optimal
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Medical Check-up
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 text-sm sm:text-base">
              Buat Janji Temu
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 640px) {
          .delay-1000 {
            animation-delay: 1s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        }
      `}</style>
    </PageLayout>
  );
}
