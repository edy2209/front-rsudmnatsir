'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

export default function KlinikBedahPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const layananUnggulan = [
    {
      title: "Bedah Minimal Invasif",
      description: "Operasi dengan sayatan kecil menggunakan teknologi laparoskopi modern",
      icon: "🔬",
      features: ["Pemulihan lebih cepat", "Bekas luka minimal", "Risiko komplikasi rendah"]
    },
    {
      title: "Bedah Onkologi", 
      description: "Penanganan komprehensif tumor dan kanker dengan tim multidisiplin",
      icon: "🎯",
      features: ["Diagnosa akurat", "Penanganan terpadu", "Follow-up berkelanjutan"]
    },
    {
      title: "Bedah Darurat 24/7",
      description: "Layanan bedah darurat siap sedia untuk kondisi emergensi",
      icon: "🚨", 
      features: ["Respon cepat", "Tim standby", "Fasilitas lengkap"]
    }
  ];

  const dokterSpesialis = [
    {
      nama: "Dr. Ahmad Syahrial, Sp.B",
      spesialisasi: "Spesialis Bedah Umum & Digestif",
      pengalaman: "15+ tahun",
      jadwal: "Senin - Kamis: 08:00-12:00",
      keahlian: ["Bedah Laparoskopi", "Bedah Digestif", "Hernia Repair"]
    },
    {
      nama: "Dr. Siti Rahmawati, Sp.B", 
      spesialisasi: "Spesialis Bedah Onkologi",
      pengalaman: "12+ tahun",
      jadwal: "Selasa - Jumat: 13:00-17:00",
      keahlian: ["Bedah Kanker", "Tumor Surgery", "Breast Surgery"]
    },
    {
      nama: "Dr. Budi Santoso, Sp.B(K)Onk",
      spesialisasi: "Konsultan Bedah Onkologi",
      pengalaman: "18+ tahun", 
      jadwal: "Rabu - Sabtu: 08:00-14:00",
      keahlian: ["Advanced Oncology", "Reconstructive Surgery", "Robotic Surgery"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section dengan Glass Effect */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-indigo-800/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Klinik Bedah Terdepan</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Klinik Bedah
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-blue-200 font-normal">
                  RSUD M. Natsir
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Memberikan pelayanan bedah berkualitas tinggi dengan teknologi terdepan dan tim medis berpengalaman
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveSection('layanan')}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    🏥 Lihat Layanan
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => setActiveSection('dokter')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  👨‍⚕️ Jadwal Dokter
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-200 mb-2">24/7</div>
                  <div className="text-white font-medium">Layanan Darurat</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-300 mb-2">15+</div>
                  <div className="text-white font-medium">Tahun Pengalaman</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                  <div className="text-white font-medium">Pasien Terlayani</div>
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
                { id: 'layanan', label: 'Layanan', icon: '🏥' },
                { id: 'dokter', label: 'Dokter', icon: '👨‍⚕️' },
                { id: 'kontak', label: 'Kontak', icon: '📞' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white'
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
                    Mengapa Memilih <span className="text-blue-600">Klinik Bedah Kami?</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Komitmen kami adalah memberikan perawatan bedah terbaik dengan menggabungkan keahlian medis, teknologi canggih, dan pendekatan yang berpusat pada pasien
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {layananUnggulan.map((layanan, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {layanan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {layanan.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {layanan.description}
                        </p>
                        <div className="space-y-2">
                          {layanan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Excellence Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Standar Keunggulan Internasional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="text-2xl font-bold mb-2">ISO 9001</div>
                      <div className="text-blue-200">Sertifikat Mutu</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">JCI Ready</div>
                      <div className="text-blue-200">Standar Global</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">SNARS</div>
                      <div className="text-blue-200">Akreditasi Nasional</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">BPJS</div>
                      <div className="text-blue-200">Partner Resmi</div>
                    </div>
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
                    Layanan Bedah <span className="text-blue-600">Komprehensif</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Kami menyediakan berbagai jenis layanan bedah dengan teknologi terdepan dan pendekatan multidisiplin
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Bedah Umum */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                        🏥
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Bedah Umum</h3>
                        <p className="text-gray-600">Prosedur bedah standar</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Appendix</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Hernia</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Tumor Jinak</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Bedah Trauma</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bedah Minimal Invasif */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                        🔬
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Bedah Minimal Invasif</h3>
                        <p className="text-gray-600">Teknologi laparoskopi</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Laparoskopi Digestif</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Bedah Endoskopi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Minimal Scar Surgery</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Pemulihan Cepat</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bedah Onkologi */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">
                        🎯
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Bedah Onkologi</h3>
                        <p className="text-gray-600">Spesialis kanker</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Operasi Tumor Ganas</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Bedah Rekonstruksi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Terapi Multidisiplin</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Follow-up Komprehensif</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bedah Darurat */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">
                        🚨
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Bedah Darurat</h3>
                        <p className="text-gray-600">Siaga 24 jam</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Emergency Surgery</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Trauma Response</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Critical Care</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Tim Siap Standby</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dokter Section */}
        {activeSection === 'dokter' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Tim Dokter <span className="text-blue-600">Spesialis</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Dokter-dokter berpengalaman dengan sertifikasi internasional dan keahlian di bidangnya
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {dokterSpesialis.map((dokter, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-center mb-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                            {dokter.nama.split(' ')[1].charAt(0)}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{dokter.nama}</h3>
                          <p className="text-blue-600 font-medium mb-1">{dokter.spesialisasi}</p>
                          <p className="text-gray-500 text-sm">Pengalaman {dokter.pengalaman}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-blue-500">🕒</span>
                              <span className="font-medium text-gray-700">Jadwal Praktik</span>
                            </div>
                            <p className="text-gray-600 text-sm">{dokter.jadwal}</p>
                          </div>

                          <div className="bg-blue-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-blue-500">⭐</span>
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

                          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors group-hover:scale-105 transform duration-200">
                            📅 Buat Janji Temu
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Kontak Section */}
        {activeSection === 'kontak' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Hubungi <span className="text-blue-600">Kami</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Siap melayani konsultasi dan kebutuhan bedah Anda dengan pelayanan terbaik
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-xl">📞</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                            <p className="text-blue-600 font-medium">(0751) 7051102 ext. 205</p>
                            <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 17:00</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 text-xl">🚨</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Emergency</h4>
                            <p className="text-red-600 font-medium">(0751) 7051102</p>
                            <p className="text-gray-600 text-sm">24 Jam Non-Stop</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-xl">📧</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                            <p className="text-green-600 font-medium">bedah@rsudmnatsir.sumbar.go.id</p>
                            <p className="text-gray-600 text-sm">Respon dalam 24 jam</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 text-xl">📍</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Lokasi</h4>
                            <p className="text-gray-700">Lantai 2, Sayap Timur</p>
                            <p className="text-gray-700">Jl. Dr. Ahmad Rivai No. 1</p>
                            <p className="text-gray-700">Bukittinggi, Sumatera Barat</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6">Layanan Cepat</h3>
                      <div className="space-y-4">
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🩺</span>
                            <div>
                              <p className="font-medium">Konsultasi Online</p>
                              <p className="text-blue-200 text-sm">Chat dengan dokter</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📅</span>
                            <div>
                              <p className="font-medium">Booking Online</p>
                              <p className="text-blue-200 text-sm">Jadwalkan operasi</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📋</span>
                            <div>
                              <p className="font-medium">Second Opinion</p>
                              <p className="text-blue-200 text-sm">Konsultasi lanjutan</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">No. Telepon</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            placeholder="08xxxxxxxxxx"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Jenis Konsultasi</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                          <option>Pilih jenis konsultasi</option>
                          <option>Bedah Umum</option>
                          <option>Bedah Minimal Invasif</option>
                          <option>Bedah Onkologi</option>
                          <option>Bedah Darurat</option>
                          <option>Konsultasi Umum</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                          placeholder="Jelaskan keluhan atau pertanyaan Anda..."
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
                      >
                        📤 Kirim Pesan
                      </button>
                    </form>
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
            Siap Memberikan Pelayanan Bedah Terbaik
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk berkonsultasi dengan tim medis kami. Kesehatan Anda adalah prioritas utama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              📞 Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              🏥 Kunjungi Klinik
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
