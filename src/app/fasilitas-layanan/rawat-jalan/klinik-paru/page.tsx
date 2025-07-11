'use client';

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
      <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200/40 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200/50 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-100/60 rounded-full animate-pulse delay-1500"></div>
        </div>
        
        {/* Breathing Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="w-96 h-96 border-4 border-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-8 w-80 h-80 border-2 border-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-16 left-16 w-64 h-64 border-2 border-indigo-400 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <CloudIcon className="w-16 h-16 text-cyan-600 mx-auto mb-4 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Klinik <span className="text-cyan-600">Paru</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pelayanan kesehatan paru-paru terdepan dengan teknologi modern dan tim medis berpengalaman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Konsultasi Sekarang
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300">
                Lihat Jadwal Dokter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            {[
              { id: 'layanan', label: 'Layanan', icon: HeartIcon },
              { id: 'program', label: 'Program Khusus', icon: CalendarIcon },
              { id: 'dokter', label: 'Dokter', icon: UserGroupIcon },
              { id: 'kontak', label: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Layanan Section */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-cyan-600">Unggulan</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Kami menyediakan layanan komprehensif untuk diagnosa dan pengobatan penyakit paru-paru
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {layananParu.map((layanan, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                      <layanan.icon className={`w-12 h-12 ${layanan.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{layanan.nama}</h3>
                      <p className="text-gray-600 leading-relaxed">{layanan.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Program Khusus Section */}
          {activeTab === 'program' && (
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Program <span className="text-cyan-600">Khusus</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Program terapi dan edukasi khusus untuk meningkatkan kualitas hidup pasien
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {programKhusus.map((program, index) => (
                  <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="bg-cyan-600 text-white p-3 rounded-full w-fit mb-6">
                      <CalendarIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.nama}</h3>
                    <p className="text-gray-600 mb-4">{program.deskripsi}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ClockIcon className="w-4 h-4 text-cyan-600" />
                        <span className="text-gray-700">Durasi: {program.durasi}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon className="w-4 h-4 text-cyan-600" />
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
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Tim <span className="text-cyan-600">Dokter Spesialis</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Dokter spesialis paru berpengalaman dengan dedikasi tinggi melayani kesehatan Anda
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {dokterSpesialis.map((dokter, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-4 rounded-full">
                        <UserGroupIcon className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{dokter.nama}</h3>
                        <p className="text-cyan-600 font-semibold mb-3">{dokter.spesialisasi}</p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4" />
                            <span>{dokter.jadwal}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <StarIcon className="w-4 h-4" />
                            <span>Pengalaman: {dokter.pengalaman}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <AcademicCapIcon className="w-4 h-4" />
                            <span>{dokter.pendidikan}</span>
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
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Hubungi <span className="text-cyan-600">Kami</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Jangan ragu untuk menghubungi kami untuk konsultasi atau informasi lebih lanjut tentang layanan klinik paru.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 p-3 rounded-full">
                        <PhoneIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Telepon</p>
                        <p className="text-gray-600">(0751) 32082</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 p-3 rounded-full">
                        <EnvelopeIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">klinikparu@rsudmnatsir.sumbar.go.id</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 p-3 rounded-full">
                        <MapPinIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Lokasi</p>
                        <p className="text-gray-600">Lantai 2, Gedung Poliklinik</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 p-3 rounded-full">
                        <ClockIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Jam Operasional</p>
                        <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00</p>
                        <p className="text-gray-600">Sabtu: 08:00 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Form Konsultasi</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                      <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan Utama</label>
                      <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></textarea>
                    </div>
                    <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <SunIcon className="w-16 h-16 text-white mx-auto mb-6 animate-spin-slow" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jaga Kesehatan Paru Anda
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Deteksi dini dan pengobatan yang tepat adalah kunci kesehatan paru-paru yang optimal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Buat Janji Temu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
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
