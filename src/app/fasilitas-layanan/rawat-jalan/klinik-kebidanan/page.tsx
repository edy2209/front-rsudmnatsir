'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

export default function KlinikKebidananPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const layananKebidanan = [
    {
      title: "Pemeriksaan Kehamilan (ANC)",
      description: "Antenatal care lengkap untuk memantau kesehatan ibu dan janin selama kehamilan",
      icon: "🤱",
      features: ["USG 4D", "Pemeriksaan Rutin", "Konseling Kehamilan", "Deteksi Dini Komplikasi"]
    },
    {
      title: "Persalinan & Melahirkan", 
      description: "Pelayanan persalinan normal dan caesar dengan fasilitas modern dan nyaman",
      icon: "👶",
      features: ["Persalinan Normal", "Operasi Caesar", "Water Birth", "Pain Relief"]
    },
    {
      title: "Perawatan Pascamelahirkan",
      description: "Perawatan komprehensif untuk ibu dan bayi setelah persalinan",
      icon: "💝", 
      features: ["Postnatal Care", "Breastfeeding Support", "Baby Care", "Family Planning"]
    }
  ];

  const dokterKebidanan = [
    {
      nama: "Dr. Sari Dewi, Sp.OG",
      spesialisasi: "Spesialis Obstetri & Ginekologi",
      pengalaman: "12+ tahun",
      jadwal: "Senin - Jumat: 08:00-15:00",
      keahlian: ["High Risk Pregnancy", "Prenatal Diagnosis", "Fetal Medicine"]
    },
    {
      nama: "Dr. Fitria Handayani, Sp.OG", 
      spesialisasi: "Spesialis Kebidanan & Kandungan",
      pengalaman: "10+ tahun",
      jadwal: "Selasa - Sabtu: 09:00-16:00",
      keahlian: ["Normal Delivery", "Cesarean Section", "Reproductive Health"]
    },
    {
      nama: "Dr. Ratna Sari, Sp.OG(K)",
      spesialisasi: "Konsultan Fetomaternal",
      pengalaman: "15+ tahun", 
      jadwal: "Senin - Kamis: 07:00-14:00",
      keahlian: ["Maternal Fetal Medicine", "High Risk Pregnancy", "Fetal Surgery"]
    }
  ];

  const programKebidanan = [
    {
      nama: "Program Hamil Sehat",
      deskripsi: "Program pemantauan kehamilan dengan teknologi USG 4D dan konseling lengkap",
      target: "Ibu Hamil",
      durasi: "9 bulan",
      icon: "🤰",
      harga: "Rp 2.500.000"
    },
    {
      nama: "Birth Preparation Class", 
      deskripsi: "Kelas persiapan persalinan untuk ibu hamil dan suami",
      target: "Trimester 3",
      durasi: "4 minggu",
      icon: "👨‍👩‍👧‍👦",
      harga: "Rp 500.000"
    },
    {
      nama: "Gentle Birth Program",
      deskripsi: "Program persalinan lembut dengan hypnobirthing dan water birth",
      target: "Ibu Bersalin",
      durasi: "Sesuai kebutuhan", 
      icon: "🌸",
      harga: "Rp 8.000.000"
    },
    {
      nama: "Postnatal Care Package",
      deskripsi: "Paket perawatan lengkap setelah melahirkan termasuk baby spa",
      target: "Ibu Nifas",
      durasi: "40 hari",
      icon: "👶",
      harga: "Rp 1.500.000"
    }
  ];

  const fasilitasKebidanan = [
    {
      nama: "Ruang Bersalin VIP",
      deskripsi: "Kamar persalinan mewah dengan fasilitas lengkap dan suasana nyaman",
      fasilitas: ["Private Room", "Birthing Pool", "Pain Relief", "Family Room"]
    },
    {
      nama: "USG 4D Center",
      deskripsi: "Pusat USG dengan teknologi 4D untuk monitoring kehamilan detail",
      fasilitas: ["USG 4D/HD", "Doppler Study", "3D Imaging", "Video Recording"]
    },
    {
      nama: "NICU & Perinatologi",
      deskripsi: "Unit perawatan intensif neonatal untuk bayi prematur dan berisiko tinggi",
      fasilitas: ["NICU Level III", "Ventilator", "Incubator", "24/7 Monitoring"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section dengan Tema Pink/Purple */}
      <div className="relative min-h-screen bg-gradient-to-br from-pink-900 via-purple-800 to-indigo-900 overflow-hidden -mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-700/20 to-purple-700/20"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 right-20 text-pink-300/20 text-8xl animate-pulse">
          🤱
        </div>
        <div className="absolute bottom-20 left-20 text-purple-300/20 text-6xl animate-bounce">
          👶
        </div>
        <div className="absolute top-1/2 left-10 text-pink-200/20 text-4xl animate-pulse">
          💕
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Pusat Layanan Kebidanan Terpercaya</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Klinik Kebidanan
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-pink-200 font-normal">
                  RSUD M. Natsir
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-pink-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Memberikan pelayanan kebidanan dan kandungan terbaik dengan kasih sayang, teknologi modern, dan tim ahli berpengalaman
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveSection('layanan')}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-pink-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    🤱 Lihat Layanan
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => setActiveSection('konsultasi')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  👩‍⚕️ Konsultasi Kehamilan
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-pink-200 mb-2">2000+</div>
                  <div className="text-white font-medium">Bayi Dilahirkan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-300 mb-2">99%</div>
                  <div className="text-white font-medium">Tingkat Keberhasilan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-indigo-300 mb-2">24/7</div>
                  <div className="text-white font-medium">Emergency Obstetri</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
              {[
                { id: 'overview', label: 'Overview', icon: '📋' },
                { id: 'layanan', label: 'Layanan', icon: '🤱' },
                { id: 'program', label: 'Program', icon: '👨‍👩‍👧‍👦' },
                { id: 'konsultasi', label: 'Konsultasi', icon: '💬' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-pink-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Mengapa Memilih <span className="text-pink-600">Klinik Kebidanan Kami?</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Kami memberikan pelayanan kebidanan dan kandungan terdepan dengan pendekatan holistik dan teknologi canggih untuk momen spesial Anda
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {layananKebidanan.map((layanan, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {layanan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                          {layanan.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {layanan.description}
                        </p>
                        <div className="space-y-2">
                          {layanan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Excellence Section */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Standar Pelayanan Kebidanan Internasional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="text-2xl font-bold mb-2">POGI</div>
                      <div className="text-pink-200">Perhimpunan Dokter ObGyn</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">WHO</div>
                      <div className="text-pink-200">Safe Motherhood</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">SNARS</div>
                      <div className="text-pink-200">Akreditasi Nasional</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">Baby Friendly</div>
                      <div className="text-pink-200">Hospital Initiative</div>
                    </div>
                  </div>
                </div>

                {/* Doctor Section */}
                <div className="mt-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Tim Dokter Spesialis Kebidanan</h3>
                    <p className="text-xl text-gray-600">Dokter-dokter ahli kebidanan dan kandungan dengan pengalaman internasional</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {dokterKebidanan.map((dokter, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                              {dokter.nama.split(' ')[1].charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{dokter.nama}</h3>
                            <p className="text-pink-600 font-medium mb-1">{dokter.spesialisasi}</p>
                            <p className="text-gray-500 text-sm">Pengalaman {dokter.pengalaman}</p>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-pink-500">🕒</span>
                                <span className="font-medium text-gray-700">Jadwal Praktik</span>
                              </div>
                              <p className="text-gray-600 text-sm">{dokter.jadwal}</p>
                            </div>

                            <div className="bg-pink-50 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-pink-500">⭐</span>
                                <span className="font-medium text-gray-700">Keahlian</span>
                              </div>
                              <div className="space-y-2">
                                {dokter.keahlian.map((keahlian, i) => (
                                  <div key={i} className="bg-white rounded-lg px-3 py-1 text-sm text-gray-700">
                                    {keahlian}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors group-hover:scale-105 transform duration-200">
                              📅 Buat Janji Konsultasi
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Layanan Section */}
        {activeSection === 'layanan' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Layanan Kebidanan <span className="text-pink-600">Komprehensif</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Pelayanan lengkap dari masa kehamilan hingga perawatan pascamelahirkan dengan standar internasional
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Antenatal Care */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl">
                        🤰
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Antenatal Care (ANC)</h3>
                        <p className="text-gray-600">Pemeriksaan kehamilan rutin</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">USG 4D/HD Real-time</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Pemeriksaan Laboratorium</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Konseling Kehamilan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Deteksi Kelainan Janin</span>
                      </li>
                    </ul>
                  </div>

                  {/* Persalinan */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                        👶
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Persalinan & Kelahiran</h3>
                        <p className="text-gray-600">Layanan persalinan lengkap</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Persalinan Normal</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Caesar</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Water Birth</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Gentle Birth</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ginekologi */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl">
                        🌸
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Ginekologi</h3>
                        <p className="text-gray-600">Kesehatan reproduksi wanita</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Pemeriksaan Pap Smear</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Konseling KB</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Pengobatan Infeksi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Ginekologi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Postnatal Care */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-2xl">
                        💝
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Perawatan Nifas</h3>
                        <p className="text-gray-600">Perawatan pascamelahirkan</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">Perawatan Luka Operasi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">Konseling Menyusui</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">Baby Care & Spa</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                        <span className="text-gray-700">Family Planning</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Emergency Obstetri */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Emergency Obstetri 24/7</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        🚨
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Persalinan Darurat</h4>
                      <p className="text-gray-600">Siap melayani persalinan darurat kapan saja dengan tim standby 24/7</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        🏥
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">ICU Maternal</h4>
                      <p className="text-gray-600">Unit perawatan intensif khusus untuk kondisi maternal kritis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        👶
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">NICU</h4>
                      <p className="text-gray-600">Perawatan intensif neonatal untuk bayi prematur dan komplikasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program Section */}
        {activeSection === 'program' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Program <span className="text-pink-600">Khusus</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Program terstruktur untuk mendampingi perjalanan kehamilan dan persalinan yang berkesan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {programKebidanan.map((program, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className="text-4xl">{program.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.nama}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{program.deskripsi}</p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                              <span className="text-pink-500 text-sm">👥</span>
                              <span className="text-gray-700 text-sm"><strong>Target:</strong> {program.target}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-purple-500 text-sm">⏱️</span>
                              <span className="text-gray-700 text-sm"><strong>Durasi:</strong> {program.durasi}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-green-500 text-sm">💰</span>
                              <span className="text-gray-700 text-sm"><strong>Biaya:</strong> {program.harga}</span>
                            </div>
                          </div>

                          <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors">
                            Daftar Program
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fasilitas Section */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Fasilitas Premium</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {fasilitasKebidanan.map((fasilitas, index) => (
                      <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-3xl">
                              {index === 0 ? '🏨' : index === 1 ? '📡' : '🏥'}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{fasilitas.nama}</h3>
                          <p className="text-gray-600 leading-relaxed">{fasilitas.deskripsi}</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-bold text-gray-800 mb-3">Fitur Unggulan:</h4>
                          {fasilitas.fasilitas.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Class Information */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Kelas Edukasi Kehamilan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                      <h4 className="text-xl font-bold mb-2">Birth Preparation</h4>
                      <p className="text-pink-200">Kelas persiapan persalinan untuk suami istri</p>
                    </div>
                    <div>
                      <div className="text-4xl mb-4">🤱</div>
                      <h4 className="text-xl font-bold mb-2">Breastfeeding Class</h4>
                      <p className="text-pink-200">Edukasi menyusui dan perawatan bayi</p>
                    </div>
                    <div>
                      <div className="text-4xl mb-4">🧘‍♀️</div>
                      <h4 className="text-xl font-bold mb-2">Prenatal Yoga</h4>
                      <p className="text-pink-200">Senam hamil dan relaksasi untuk ibu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Konsultasi Section */}
        {activeSection === 'konsultasi' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Konsultasi <span className="text-pink-600">Kehamilan</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hubungi tim ahli kebidanan kami untuk konsultasi dan jadwal pemeriksaan kehamilan
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-pink-600 text-xl">📞</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                            <p className="text-pink-600 font-medium">(0751) 7051102 ext. 206</p>
                            <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 16:00</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 text-xl">🚨</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Emergency Obstetri</h4>
                            <p className="text-red-600 font-medium">(0751) 7051102</p>
                            <p className="text-gray-600 text-sm">24 Jam Non-Stop</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 text-xl">💬</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                            <p className="text-purple-600 font-medium">+62 812-6754-3212</p>
                            <p className="text-gray-600 text-sm">Konsultasi Kehamilan</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-600 text-xl">📧</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                            <p className="text-indigo-600 font-medium">kebidanan@rsudmnatsir.sumbar.go.id</p>
                            <p className="text-gray-600 text-sm">Respon dalam 24 jam</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-xl">📍</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Lokasi</h4>
                            <p className="text-gray-700">Lantai 3, Sayap Barat</p>
                            <p className="text-gray-700">Jl. Dr. Ahmad Rivai No. 1</p>
                            <p className="text-gray-700">Bukittinggi, Sumatera Barat</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Services */}
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6">Layanan Cepat</h3>
                      <div className="space-y-4">
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🤱</span>
                            <div>
                              <p className="font-medium">Konsultasi Kehamilan</p>
                              <p className="text-pink-200 text-sm">Chat dengan dokter ObGyn</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📊</span>
                            <div>
                              <p className="font-medium">USG 4D</p>
                              <p className="text-pink-200 text-sm">Pemeriksaan USG 4D</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">👶</span>
                            <div>
                              <p className="font-medium">Birth Plan</p>
                              <p className="text-pink-200 text-sm">Perencanaan persalinan</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Form */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Form Konsultasi Kehamilan</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Usia</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                            placeholder="Usia"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">No. Telepon</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Status Kehamilan</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20">
                            <option>Pilih status</option>
                            <option>Sedang Hamil</option>
                            <option>Merencanakan Kehamilan</option>
                            <option>Pasca Melahirkan</option>
                            <option>Konsultasi Ginekologi</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Usia Kehamilan</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                            placeholder="Contoh: 12 minggu"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Jenis Konsultasi</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20">
                          <option>Pilih jenis konsultasi</option>
                          <option>Pemeriksaan Kehamilan Rutin</option>
                          <option>USG 4D</option>
                          <option>Konsultasi Persalinan</option>
                          <option>Konseling KB</option>
                          <option>Pemeriksaan Ginekologi</option>
                          <option>Program Hamil</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Keluhan/Pertanyaan</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 resize-none"
                          placeholder="Jelaskan keluhan atau pertanyaan seputar kehamilan..."
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition-colors transform hover:scale-105 duration-200"
                      >
                        📤 Kirim Konsultasi
                      </button>
                    </form>
                  </div>
                </div>

                {/* Appointment Schedule */}
                <div className="mt-16">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Jadwal Pemeriksaan Khusus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">🌅</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Morning Care</h4>
                        <p className="text-gray-600">Pemeriksaan pagi untuk ibu hamil</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Senin - Jumat</span>
                          <span className="text-pink-600 font-bold">07:00 - 11:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Sabtu</span>
                          <span className="text-pink-600 font-bold">08:00 - 12:00</span>
                        </div>
                      </div>
                      <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors">
                        Booking Sekarang
                      </button>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-500 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">POPULER</span>
                      </div>
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">🌞</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Executive Care</h4>
                        <p className="text-gray-600">Pemeriksaan premium dengan USG 4D</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Senin - Jumat</span>
                          <span className="text-pink-600 font-bold">13:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Sabtu</span>
                          <span className="text-pink-600 font-bold">14:00 - 18:00</span>
                        </div>
                      </div>
                      <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors">
                        Booking Sekarang
                      </button>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">🚨</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Emergency</h4>
                        <p className="text-gray-600">Layanan darurat 24 jam</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">24/7</span>
                          <span className="text-red-600 font-bold">Non-Stop</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Emergency</span>
                          <span className="text-red-600 font-bold">Siap Siaga</span>
                        </div>
                      </div>
                      <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Hubungi Emergency
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wujudkan Momen Spesial Kehamilan Anda
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan ibu yang telah mempercayakan momen spesial mereka kepada kami. Kebahagiaan keluarga adalah prioritas utama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105">
              🤱 Konsultasi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              👶 Lihat Program Hamil
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
