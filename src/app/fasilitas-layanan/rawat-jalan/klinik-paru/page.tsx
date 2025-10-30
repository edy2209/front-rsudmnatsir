'use client';

/**
 * Halaman Klinik Paru - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Layanan klinik paru komprehensif dengan teknologi modern
 * Added: Responsive design, interactive tabs, consultation form
 */

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  HeartIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  StarIcon,
  AcademicCapIcon,
  CloudIcon,
  SunIcon
} from '@heroicons/react/24/outline';

export default function KlinikParuPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for sticky navigation
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 100);
    });
  }

  const layananParu = [
    {
      nama: 'Spirometri',
      deskripsi: 'Pemeriksaan fungsi paru untuk mendiagnosis gangguan pernapasan',
      icon: CloudIcon,
      color: 'text-blue-500'
    },
    {
      nama: 'Bronkoskopi',
      deskripsi: 'Pemeriksaan saluran napas dengan kamera fiber optik',
      icon: CloudIcon,
      color: 'text-cyan-500'
    },
    {
      nama: 'Tes Tuberkulin',
      deskripsi: 'Pemeriksaan untuk mendeteksi infeksi tuberkulosis',
      icon: ShieldCheckIcon,
      color: 'text-green-500'
    },
    {
      nama: 'Rehabilitasi Paru',
      deskripsi: 'Program rehabilitasi untuk pasien penyakit paru kronis',
      icon: HeartIcon,
      color: 'text-red-500'
    }
  ];

  const programKhusus = [
    {
      nama: 'Program Stop Smoking',
      deskripsi: 'Program berhenti merokok dengan pendampingan medis',
      durasi: '8 minggu',
      jadwal: 'Setiap Selasa, 09:00-11:00'
    },
    {
      nama: 'Manajemen PPOK',
      deskripsi: 'Program khusus untuk pasien Penyakit Paru Obstruktif Kronik',
      durasi: '12 minggu',
      jadwal: 'Setiap Kamis, 14:00-16:00'
    },
    {
      nama: 'Edukasi Asma',
      deskripsi: 'Program edukasi dan kontrol asma untuk anak dan dewasa',
      durasi: '6 minggu',
      jadwal: 'Setiap Sabtu, 08:00-10:00'
    }
  ];

  const dokterSpesialis = [
    {
      nama: 'dr. Ahmad Pulmonologi, Sp.P',
      spesialisasi: 'Spesialis Paru',
      jadwal: 'Senin - Kamis: 08:00-14:00',
      pengalaman: '15 tahun',
      pendidikan: 'FK UI, PPDS Pulmonologi RSCM'
    },
    {
      nama: 'dr. Sari Respirasi, Sp.P',
      spesialisasi: 'Spesialis Paru',
      jadwal: 'Selasa - Jumat: 14:00-20:00',
      pengalaman: '12 tahun',
      pendidikan: 'FK UNAND, PPDS Pulmonologi RSUP M. Djamil'
    }
  ];

  const stats = [
    { label: 'Pasien per Bulan', value: '800+', icon: UserGroupIcon },
    { label: 'Tingkat Kesembuhan', value: '95%', icon: CheckCircleIcon },
    { label: 'Dokter Spesialis', value: '4', icon: AcademicCapIcon },
    { label: 'Tahun Pengalaman', value: '20+', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Breathing Animation */}
      <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20 overflow-hidden -mt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-cyan-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 sm:top-32 right-10 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-blue-200/40 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-12 sm:bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-indigo-200/50 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-16 sm:bottom-32 right-1/3 w-14 h-14 sm:w-24 sm:h-24 bg-cyan-100/60 rounded-full animate-pulse delay-1500"></div>
        </div>
        
        {/* Breathing Animation - responsive sizing */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 border-2 sm:border-4 border-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 border border-blue-400 sm:border-2 rounded-full animate-ping"></div>
          <div className="absolute top-8 left-8 sm:top-16 sm:left-16 w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 border border-indigo-400 sm:border-2 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <CloudIcon className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-600 mx-auto mb-3 sm:mb-4 animate-bounce" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2">
              Klinik <span className="text-cyan-600">Paru</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              Pelayanan kesehatan paru-paru terdepan dengan teknologi modern dan tim medis berpengalaman
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Konsultasi Sekarang
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                Lihat Jadwal Dokter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-3 sm:py-4">
            {[
              { id: 'layanan', label: 'Layanan', shortLabel: 'Layanan', icon: HeartIcon },
              { id: 'program', label: 'Program Khusus', shortLabel: 'Program', icon: CalendarIcon },
              { id: 'dokter', label: 'Dokter', shortLabel: 'Dokter', icon: UserGroupIcon },
              { id: 'kontak', label: 'Kontak', shortLabel: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  activeTab === item.id 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
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

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Layanan Section */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-cyan-600">Unggulan</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Kami menyediakan layanan komprehensif untuk diagnosa dan pengobatan penyakit paru-paru
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {layananParu.map((layanan, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                      <layanan.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${layanan.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{layanan.nama}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{layanan.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Program Khusus Section */}
          {activeTab === 'program' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Program <span className="text-cyan-600">Khusus</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Program terapi dan edukasi khusus untuk meningkatkan kualitas hidup pasien
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {programKhusus.map((program, index) => (
                  <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-cyan-600 text-white p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6">
                      <CalendarIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{program.nama}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{program.deskripsi}</p>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600" />
                        <span className="text-gray-700">Durasi: {program.durasi}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600" />
                        <span className="text-gray-700">{program.jadwal}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dokter Section */}
          {activeTab === 'dokter' && (
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Tim <span className="text-cyan-600">Dokter Spesialis</span>
              </h2>
              <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                Dokter spesialis paru berpengalaman dengan dedikasi tinggi melayani kesehatan Anda
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                {dokterSpesialis.map((dokter, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 sm:p-4 rounded-full flex-shrink-0 mx-auto sm:mx-0">
                        <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{dokter.nama}</h3>
                        <p className="text-cyan-600 font-semibold mb-3 text-sm sm:text-base">{dokter.spesialisasi}</p>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{dokter.jadwal}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Pengalaman: {dokter.pengalaman}</span>
                          </div>
                          <div className="flex items-start gap-2 justify-center sm:justify-start">
                            <AcademicCapIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                            <span className="text-center sm:text-left">{dokter.pendidikan}</span>
                          </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Hubungi <span className="text-cyan-600">Kami</span>
                  </h2>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Jangan ragu untuk menghubungi kami untuk konsultasi atau informasi lebih lanjut tentang layanan klinik paru.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-cyan-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Telepon</p>
                        <p className="text-gray-600 text-sm sm:text-base">(0751) 32082</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-cyan-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                        <p className="text-gray-600 text-sm sm:text-base break-all">klinikparu@rsudmnatsir.sumbar.go.id</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-cyan-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Lokasi</p>
                        <p className="text-gray-600 text-sm sm:text-base">Lantai 2, Gedung Poliklinik</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-cyan-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                        <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Jam Operasional</p>
                        <p className="text-gray-600 text-sm sm:text-base">Senin - Jumat: 08:00 - 16:00</p>
                        <p className="text-gray-600 text-sm sm:text-base">Sabtu: 08:00 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Form Konsultasi</h3>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                      <input type="tel" className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Keluhan Utama</label>
                      <textarea rows={4} className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"></textarea>
                    </div>
                    <button className="w-full bg-cyan-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 text-sm sm:text-base">
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <SunIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-spin-slow" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Jaga Kesehatan Paru Anda
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Deteksi dini dan pengobatan yang tepat adalah kunci kesehatan paru-paru yang optimal
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Buat Janji Temu
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 text-sm sm:text-base">
              Download Brosur
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

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </PageLayout>
  );
}
