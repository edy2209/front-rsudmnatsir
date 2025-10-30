'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

export default function KlinikGiziPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const layananGizi = [
    {
      title: "Konsultasi Gizi Klinis",
      description: "Penilaian status gizi dan terapi diet untuk berbagai kondisi medis",
      icon: "🩺",
      features: ["Assessment gizi lengkap", "Diet terapi khusus", "Monitoring berkelanjutan"]
    },
    {
      title: "Edukasi Gizi", 
      description: "Program edukasi dan counseling gizi untuk pasien dan keluarga",
      icon: "📚",
      features: ["Konseling individu", "Edukasi keluarga", "Workshop gizi"]
    },
    {
      title: "Gizi Anak & Remaja",
      description: "Pelayanan gizi khusus untuk tumbuh kembang optimal anak",
      icon: "👶", 
      features: ["Monitoring pertumbuhan", "Diet anak susah makan", "Gizi remaja"]
    }
  ];

  const ahliGizi = [
    {
      nama: "Ns. Sari Indrawati, S.Gz, RD",
      spesialisasi: "Ahli Gizi Klinis",
      pengalaman: "8+ tahun",
      jadwal: "Senin - Jumat: 08:00-15:00",
      keahlian: ["Diabetes Management", "Weight Management", "Clinical Nutrition"]
    },
    {
      nama: "Ns. Fitri Handayani, S.Gz", 
      spesialisasi: "Ahli Gizi Komunitas",
      pengalaman: "6+ tahun",
      jadwal: "Selasa - Sabtu: 09:00-16:00",
      keahlian: ["Maternal Nutrition", "Child Nutrition", "Public Health"]
    },
    {
      nama: "Ns. Rina Permata, S.Gz, RD",
      spesialisasi: "Ahli Gizi Olahraga",
      pengalaman: "10+ tahun", 
      jadwal: "Senin - Kamis: 07:00-14:00",
      keahlian: ["Sports Nutrition", "Performance Diet", "Body Composition"]
    }
  ];

  const programGizi = [
    {
      nama: "Program Diabetes",
      deskripsi: "Manajemen gizi khusus untuk penderita diabetes mellitus",
      target: "Pasien DM Tipe 1 & 2",
      durasi: "3-6 bulan",
      icon: "🩸"
    },
    {
      nama: "Program Obesitas", 
      deskripsi: "Program penurunan berat badan yang aman dan berkelanjutan",
      target: "BMI > 25 kg/m²",
      durasi: "6-12 bulan",
      icon: "⚖️"
    },
    {
      nama: "Program Hipertensi",
      deskripsi: "Diet DASH untuk kontrol tekanan darah optimal",
      target: "Pasien Hipertensi",
      durasi: "3-6 bulan", 
      icon: "❤️"
    },
    {
      nama: "Program Gizi Anak",
      deskripsi: "Optimalisasi tumbuh kembang anak melalui gizi seimbang",
      target: "Anak 0-18 tahun",
      durasi: "Sesuai kebutuhan",
      icon: "🧒"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section dengan Gradient Modern */}
      <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden -mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-emerald-700/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Klinik Gizi Terpercaya</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Klinik Gizi
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-green-200 font-normal">
                  RSUD M. Natsir
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Memberikan pelayanan gizi klinis profesional untuk mendukung kesehatan optimal dan kualitas hidup yang lebih baik
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveSection('layanan')}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    🥗 Lihat Layanan
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => setActiveSection('konsultasi')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  👩‍⚕️ Konsultasi Gizi
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-200 mb-2">500+</div>
                  <div className="text-white font-medium">Pasien Terlayani</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
                  <div className="text-white font-medium">Tingkat Kepuasan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-white font-medium">Konsultasi Online</div>
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-center py-4">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
              {[
                { id: 'overview', label: 'Overview', icon: '📋' },
                { id: 'layanan', label: 'Layanan', icon: '🥗' },
                { id: 'program', label: 'Program', icon: '📊' },
                { id: 'konsultasi', label: 'Konsultasi', icon: '💬' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:text-green-600 hover:bg-white'
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
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Mengapa Memilih <span className="text-green-600">Klinik Gizi Kami?</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Kami memberikan pelayanan gizi yang komprehensif dengan pendekatan evidence-based dan personalized untuk setiap pasien
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {layananGizi.map((layanan, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {layanan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                          {layanan.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {layanan.description}
                        </p>
                        <div className="space-y-2">
                          {layanan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Excellence Section */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Standar Pelayanan Gizi Profesional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="text-2xl font-bold mb-2">PERSAGI</div>
                      <div className="text-green-200">Sertifikat Ahli Gizi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">RD</div>
                      <div className="text-green-200">Registered Dietitian</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">ISO</div>
                      <div className="text-green-200">Standar Mutu</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">BPJS</div>
                      <div className="text-green-200">Partner Resmi</div>
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
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Layanan Gizi <span className="text-green-600">Komprehensif</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Pelayanan gizi klinis yang lengkap untuk berbagai kondisi kesehatan dan kebutuhan nutrisi
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Konsultasi Gizi Umum */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">
                        🩺
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Konsultasi Gizi Umum</h3>
                        <p className="text-gray-600">Assessment dan terapi gizi</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Penilaian Status Gizi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Perhitungan Kebutuhan Kalori</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Perencanaan Menu Sehat</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Monitoring & Evaluasi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Diet Terapi */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                        💊
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Diet Terapi Medis</h3>
                        <p className="text-gray-600">Diet khusus kondisi medis</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Diet Diabetes Mellitus</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Diet Hipertensi (DASH)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Diet Gagal Ginjal</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Diet Jantung</span>
                      </li>
                    </ul>
                  </div>

                  {/* Gizi Anak */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl">
                        👶
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Gizi Anak & Remaja</h3>
                        <p className="text-gray-600">Optimalisasi tumbuh kembang</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Monitoring Pertumbuhan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Penanganan Susah Makan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Gizi Seimbang Remaja</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Pencegahan Obesitas</span>
                      </li>
                    </ul>
                  </div>

                  {/* Konseling Gizi */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                        💬
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Konseling & Edukasi</h3>
                        <p className="text-gray-600">Pendampingan perubahan pola makan</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Konseling Individu</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Edukasi Keluarga</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Workshop Gizi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Motivational Interviewing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program Section */}
        {activeSection === 'program' && (
          <div className="py-20">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Program Gizi <span className="text-green-600">Khusus</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Program terstruktur untuk kondisi medis spesifik dengan pendampingan intensif
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {programGizi.map((program, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className="text-4xl">{program.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.nama}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{program.deskripsi}</p>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="text-green-500 text-sm">👥</span>
                              <span className="text-gray-700 text-sm"><strong>Target:</strong> {program.target}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-blue-500 text-sm">⏱️</span>
                              <span className="text-gray-700 text-sm"><strong>Durasi:</strong> {program.durasi}</span>
                            </div>
                          </div>

                          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
                            Daftar Program
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Program Benefits */}
                <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Manfaat Program Gizi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        📈
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Hasil Terukur</h4>
                      <p className="text-gray-600">Monitoring progress dengan parameter yang jelas dan terukur</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        🤝
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Pendampingan Intensif</h4>
                      <p className="text-gray-600">Konsultasi berkala dengan ahli gizi berpengalaman</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        🎯
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Personal Treatment</h4>
                      <p className="text-gray-600">Rencana diet dan gizi yang disesuaikan dengan kebutuhan individu</p>
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
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Konsultasi <span className="text-green-600">Gizi</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hubungi tim ahli gizi kami untuk konsultasi dan jadwal pemeriksaan
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {ahliGizi.map((ahli, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-center mb-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                            {ahli.nama.split(' ')[1].charAt(0)}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{ahli.nama}</h3>
                          <p className="text-green-600 font-medium mb-1">{ahli.spesialisasi}</p>
                          <p className="text-gray-500 text-sm">Pengalaman {ahli.pengalaman}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-green-500">🕒</span>
                              <span className="font-medium text-gray-700">Jadwal Praktik</span>
                            </div>
                            <p className="text-gray-600 text-sm">{ahli.jadwal}</p>
                          </div>

                          <div className="bg-green-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-green-500">⭐</span>
                              <span className="font-medium text-gray-700">Keahlian</span>
                            </div>
                            <div className="space-y-2">
                              {ahli.keahlian.map((keahlian, i) => (
                                <div key={i} className="bg-white rounded-lg px-3 py-1 text-sm text-gray-700">
                                  {keahlian}
                                </div>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors group-hover:scale-105 transform duration-200">
                            📅 Buat Janji Konsultasi
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact & Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-xl">📞</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                            <p className="text-green-600 font-medium">(0751) 7051102 ext. 208</p>
                            <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 16:00</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-xl">💬</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                            <p className="text-blue-600 font-medium">+62 812-6754-3210</p>
                            <p className="text-gray-600 text-sm">Konsultasi Online 24/7</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 text-xl">📧</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                            <p className="text-purple-600 font-medium">gizi@rsudmnatsir.sumbar.go.id</p>
                            <p className="text-gray-600 text-sm">Respon dalam 24 jam</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 text-xl">📍</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Lokasi</h4>
                            <p className="text-gray-700">Lantai 1, Sayap Barat</p>
                            <p className="text-gray-700">Jl. Dr. Ahmad Rivai No. 1</p>
                            <p className="text-gray-700">Bukittinggi, Sumatera Barat</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Services */}
                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6">Layanan Cepat</h3>
                      <div className="space-y-4">
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">💬</span>
                            <div>
                              <p className="font-medium">Konsultasi Online</p>
                              <p className="text-green-200 text-sm">Chat dengan ahli gizi</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📊</span>
                            <div>
                              <p className="font-medium">Analisis Gizi</p>
                              <p className="text-green-200 text-sm">Assessment nutrisi</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📱</span>
                            <div>
                              <p className="font-medium">Telemedicine</p>
                              <p className="text-green-200 text-sm">Konsultasi jarak jauh</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Form */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Form Konsultasi Gizi</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Usia</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            placeholder="Usia"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Tinggi Badan (cm)</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            placeholder="170"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Berat Badan (kg)</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            placeholder="60"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">No. Telepon</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Kondisi Kesehatan</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20">
                          <option>Pilih kondisi kesehatan</option>
                          <option>Diabetes Mellitus</option>
                          <option>Hipertensi</option>
                          <option>Obesitas</option>
                          <option>Kekurangan Gizi</option>
                          <option>Penyakit Jantung</option>
                          <option>Gagal Ginjal</option>
                          <option>Sehat (Check-up rutin)</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Keluhan/Tujuan Konsultasi</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
                          placeholder="Jelaskan keluhan atau tujuan konsultasi gizi Anda..."
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors transform hover:scale-105 duration-200"
                      >
                        📤 Kirim Permintaan Konsultasi
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mulai Hidup Sehat dengan Gizi Seimbang
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan gizi Anda dengan ahli gizi profesional kami. Wujudkan hidup sehat dimulai dari sekarang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              💬 Konsultasi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              🥗 Lihat Program Gizi
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
