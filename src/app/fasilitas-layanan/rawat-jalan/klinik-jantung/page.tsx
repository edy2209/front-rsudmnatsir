'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

export default function KlinikJantungPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const layananJantung = [
    {
      title: "Pemeriksaan Jantung Komprehensif",
      description: "Diagnosis mendalam dengan teknologi EKG, Echocardiography, dan Stress Test",
      icon: "🫀",
      features: ["EKG 12 Lead", "Echocardiografi", "Holter Monitoring", "Stress Test"]
    },
    {
      title: "Terapi Intervensi Jantung", 
      description: "Prosedur minimal invasif untuk penanganan penyakit jantung koroner",
      icon: "🩺",
      features: ["Kateterisasi Jantung", "Angioplasti", "Ring Jantung", "Balon Jantung"]
    },
    {
      title: "Rehabilitasi Jantung",
      description: "Program pemulihan komprehensif pasca serangan jantung atau operasi",
      icon: "💪", 
      features: ["Exercise Therapy", "Edukasi Pasien", "Monitoring Ketat", "Lifestyle Modification"]
    }
  ];

  const dokterJantung = [
    {
      nama: "Dr. Hendri Susanto, Sp.JP",
      spesialisasi: "Spesialis Jantung & Pembuluh Darah",
      pengalaman: "15+ tahun",
      jadwal: "Senin - Jumat: 08:00-15:00",
      keahlian: ["Interventional Cardiology", "Heart Failure Management", "Arrhythmia Treatment"]
    },
    {
      nama: "Dr. Sari Kartika, Sp.JP", 
      spesialisasi: "Spesialis Kardiologi Anak",
      pengalaman: "12+ tahun",
      jadwal: "Selasa - Sabtu: 09:00-16:00",
      keahlian: ["Pediatric Cardiology", "Congenital Heart Disease", "Fetal Echocardiography"]
    },
    {
      nama: "Dr. Ahmad Fauzi, Sp.JP(K)",
      spesialisasi: "Konsultan Kardiologi Intervensi",
      pengalaman: "18+ tahun", 
      jadwal: "Senin - Kamis: 07:00-14:00",
      keahlian: ["Cardiac Catheterization", "PTCA", "Pacemaker Implantation"]
    }
  ];

  const programJantung = [
    {
      nama: "Program Jantung Sehat",
      deskripsi: "Program pencegahan penyakit jantung dengan screening dan edukasi",
      target: "Usia 40+ tahun",
      durasi: "Check-up tahunan",
      icon: "❤️",
      harga: "Rp 350.000"
    },
    {
      nama: "Cardiac Rehabilitation", 
      deskripsi: "Program pemulihan pasca serangan jantung atau operasi bypass",
      target: "Post MI/CABG",
      durasi: "12 minggu",
      icon: "🏃‍♂️",
      harga: "Rp 2.500.000"
    },
    {
      nama: "Heart Failure Clinic",
      deskripsi: "Manajemen komprehensif gagal jantung dengan tim multidisiplin",
      target: "Pasien Gagal Jantung",
      durasi: "6-12 bulan", 
      icon: "🩺",
      harga: "Rp 500.000/bulan"
    },
    {
      nama: "Hypertension Management",
      deskripsi: "Program kontrol tekanan darah tinggi dan pencegahan komplikasi",
      target: "Hipertensi Grade 2+",
      durasi: "3-6 bulan",
      icon: "🩸",
      harga: "Rp 300.000/bulan"
    }
  ];

  const fasilitasJantung = [
    {
      nama: "Cath Lab",
      deskripsi: "Laboratorium kateterisasi jantung dengan teknologi digital terkini",
      fasilitas: ["Digital Angiography", "IVUS", "FFR", "OCT"]
    },
    {
      nama: "Echo Lab",
      deskripsi: "Laboratorium ekokardiografi dengan 3D/4D imaging",
      fasilitas: ["3D/4D Echo", "TEE", "Stress Echo", "Contrast Echo"]
    },
    {
      nama: "EKG Center",
      deskripsi: "Pusat pemeriksaan EKG dan monitoring jantung 24/7",
      fasilitas: ["12-Lead EKG", "Holter 24h", "Event Recorder", "Treadmill Test"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section dengan Tema Merah Jantung */}
      <div className="relative min-h-screen bg-gradient-to-br from-red-900 via-rose-800 to-pink-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-rose-700/20"></div>
        </div>

        {/* Animated Heartbeat Effect */}
        <div className="absolute top-20 right-20 text-red-300/20 text-9xl animate-pulse">
          💓
        </div>
        <div className="absolute bottom-20 left-20 text-pink-300/20 text-6xl animate-bounce">
          ❤️
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Pusat Layanan Jantung Terpercaya</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  Klinik Jantung
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-red-200 font-normal">
                  RSUD M. Natsir
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Memberikan pelayanan kardiologi terdepan dengan teknologi modern dan tim ahli jantung berpengalaman untuk kesehatan jantung optimal
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveSection('layanan')}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    ❤️ Lihat Layanan
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => setActiveSection('checkup')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  🩺 Medical Check-up
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-red-200 mb-2">1000+</div>
                  <div className="text-white font-medium">Pasien Jantung Terlayani</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-rose-300 mb-2">98%</div>
                  <div className="text-white font-medium">Tingkat Keberhasilan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-pink-300 mb-2">24/7</div>
                  <div className="text-white font-medium">Emergency Cardiac</div>
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
                { id: 'layanan', label: 'Layanan', icon: '❤️' },
                { id: 'fasilitas', label: 'Fasilitas', icon: '🏥' },
                { id: 'checkup', label: 'Check-up', icon: '🩺' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:text-red-600 hover:bg-white'
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
                    Mengapa Memilih <span className="text-red-600">Klinik Jantung Kami?</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Kami memberikan pelayanan kardiologi terdepan dengan teknologi canggih dan tim medis berpengalaman untuk kesehatan jantung yang optimal
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {layananJantung.map((layanan, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {layanan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                          {layanan.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {layanan.description}
                        </p>
                        <div className="space-y-2">
                          {layanan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Excellence Section */}
                <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Standar Pelayanan Kardiologi Internasional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="text-2xl font-bold mb-2">ACC/AHA</div>
                      <div className="text-red-200">Guidelines Kardiologi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">ESC</div>
                      <div className="text-red-200">European Standards</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">PERKI</div>
                      <div className="text-red-200">Perhimpunan Kardiologi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-2">ISO 9001</div>
                      <div className="text-red-200">Sertifikat Mutu</div>
                    </div>
                  </div>
                </div>

                {/* Doctor Section */}
                <div className="mt-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Tim Dokter Spesialis Jantung</h3>
                    <p className="text-xl text-gray-600">Dokter-dokter ahli jantung dengan sertifikasi internasional</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {dokterJantung.map((dokter, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                              {dokter.nama.split(' ')[1].charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{dokter.nama}</h3>
                            <p className="text-red-600 font-medium mb-1">{dokter.spesialisasi}</p>
                            <p className="text-gray-500 text-sm">Pengalaman {dokter.pengalaman}</p>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-red-500">🕒</span>
                                <span className="font-medium text-gray-700">Jadwal Praktik</span>
                              </div>
                              <p className="text-gray-600 text-sm">{dokter.jadwal}</p>
                            </div>

                            <div className="bg-red-50 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-red-500">⭐</span>
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

                            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors group-hover:scale-105 transform duration-200">
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
                    Layanan Kardiologi <span className="text-red-600">Terlengkap</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Pelayanan jantung komprehensif dari diagnosis hingga terapi dengan teknologi terdepan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Pemeriksaan Diagnostik */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">
                        🔍
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Pemeriksaan Diagnostik</h3>
                        <p className="text-gray-600">Diagnosis akurat dengan teknologi terkini</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">EKG 12 Lead & Holter 24 Jam</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Ekokardiografi 2D/3D/4D</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Stress Test & Treadmill</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">CT Scan Jantung & MRI</span>
                      </li>
                    </ul>
                  </div>

                  {/* Terapi Intervensi */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                        🩺
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Terapi Intervensi</h3>
                        <p className="text-gray-600">Prosedur minimal invasif</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Kateterisasi Jantung</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Angioplasti & Ring Jantung</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Pemasangan Pacemaker</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Ablasi Aritmia</span>
                      </li>
                    </ul>
                  </div>

                  {/* Kardiologi Anak */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl">
                        👶
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Kardiologi Anak</h3>
                        <p className="text-gray-600">Spesialis jantung anak</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Penyakit Jantung Bawaan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Murmur Jantung Anak</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Kardiomiopati Anak</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-700">Aritmia Pediatrik</span>
                      </li>
                    </ul>
                  </div>

                  {/* Emergency Cardiac */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">
                        🚨
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Emergency Cardiac</h3>
                        <p className="text-gray-600">Siaga jantung 24/7</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Serangan Jantung Akut</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Aritmia Darurat</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Gagal Jantung Akut</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">Primary PCI 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Program Khusus */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Khusus Jantung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programJantung.map((program, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{program.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{program.nama}</h4>
                            <p className="text-gray-600 mb-4 text-sm">{program.deskripsi}</p>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-red-500">👥</span>
                                <span className="text-gray-700"><strong>Target:</strong> {program.target}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-blue-500">⏱️</span>
                                <span className="text-gray-700"><strong>Durasi:</strong> {program.durasi}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-green-500">💰</span>
                                <span className="text-gray-700"><strong>Biaya:</strong> {program.harga}</span>
                              </div>
                            </div>

                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                              Daftar Program
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

        {/* Fasilitas Section */}
        {activeSection === 'fasilitas' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Fasilitas <span className="text-red-600">Canggih</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Teknologi terdepan untuk diagnosis dan terapi penyakit jantung yang akurat dan efektif
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {fasilitasJantung.map((fasilitas, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-3xl">
                            {index === 0 ? '🔬' : index === 1 ? '📡' : '📊'}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{fasilitas.nama}</h3>
                        <p className="text-gray-600 leading-relaxed">{fasilitas.deskripsi}</p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-gray-800 mb-3">Fitur Unggulan:</h4>
                        {fasilitas.fasilitas.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-6">Keunggulan Fasilitas Kami</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-4xl mb-4">🏆</div>
                      <h4 className="text-xl font-bold mb-2">Terakreditasi</h4>
                      <p className="text-red-200">Standar internasional ACC/ESC untuk semua peralatan</p>
                    </div>
                    <div>
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="text-xl font-bold mb-2">Real-time</h4>
                      <p className="text-red-200">Monitoring dan diagnosis dengan teknologi real-time</p>
                    </div>
                    <div>
                      <div className="text-4xl mb-4">🔒</div>
                      <h4 className="text-xl font-bold mb-2">Aman & Steril</h4>
                      <p className="text-red-200">Protokol keamanan dan sterilisasi tingkat tinggi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Check-up Section */}
        {activeSection === 'checkup' && (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Medical Check-up <span className="text-red-600">Jantung</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Pemeriksaan kesehatan jantung komprehensif untuk deteksi dini dan pencegahan penyakit kardiovaskular
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 text-xl">📞</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                            <p className="text-red-600 font-medium">(0751) 7051102 ext. 210</p>
                            <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 16:00</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 text-xl">🚨</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Emergency Cardiac</h4>
                            <p className="text-orange-600 font-medium">(0751) 7051102</p>
                            <p className="text-gray-600 text-sm">24 Jam Non-Stop</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-xl">💬</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                            <p className="text-blue-600 font-medium">+62 812-6754-3215</p>
                            <p className="text-gray-600 text-sm">Konsultasi Online</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 text-xl">📧</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                            <p className="text-purple-600 font-medium">jantung@rsudmnatsir.sumbar.go.id</p>
                            <p className="text-gray-600 text-sm">Respon dalam 24 jam</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-xl">📍</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Lokasi</h4>
                            <p className="text-gray-700">Lantai 2, Sayap Utara</p>
                            <p className="text-gray-700">Jl. Dr. Ahmad Rivai No. 1</p>
                            <p className="text-gray-700">Bukittinggi, Sumatera Barat</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Services */}
                    <div className="bg-gradient-to-br from-red-600 to-rose-600 rounded-3xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-6">Layanan Cepat</h3>
                      <div className="space-y-4">
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🩺</span>
                            <div>
                              <p className="font-medium">Konsultasi Kardiologi</p>
                              <p className="text-red-200 text-sm">Chat dengan dokter jantung</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">📊</span>
                            <div>
                              <p className="font-medium">EKG Express</p>
                              <p className="text-red-200 text-sm">Pemeriksaan EKG cepat</p>
                            </div>
                          </div>
                        </button>
                        <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-4 px-6 text-left hover:bg-white/30 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🚨</span>
                            <div>
                              <p className="font-medium">Emergency</p>
                              <p className="text-red-200 text-sm">Layanan darurat jantung</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Form */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Buat Janji Medical Check-up</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Usia</label>
                          <input 
                            type="number" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                            placeholder="Usia"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">No. Telepon</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Jenis Pemeriksaan</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                          <option>Pilih jenis pemeriksaan</option>
                          <option>Medical Check-up Jantung Basic</option>
                          <option>Medical Check-up Jantung Comprehensive</option>
                          <option>EKG & Echo</option>
                          <option>Stress Test</option>
                          <option>Holter Monitoring</option>
                          <option>Konsultasi Kardiologi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Tanggal Pemeriksaan</label>
                        <input 
                          type="date" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Keluhan/Riwayat Penyakit</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 resize-none"
                          placeholder="Jelaskan keluhan atau riwayat penyakit jantung..."
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors transform hover:scale-105 duration-200"
                      >
                        📅 Buat Janji Medical Check-up
                      </button>
                    </form>
                  </div>
                </div>

                {/* Package Options */}
                <div className="mt-16">
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Paket Medical Check-up Jantung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">💙</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Basic Package</h4>
                        <p className="text-3xl font-bold text-red-600 mb-2">Rp 350.000</p>
                        <p className="text-gray-600">Pemeriksaan dasar jantung</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">EKG 12 Lead</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Konsultasi Dokter</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Pemeriksaan Fisik</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Cek Tekanan Darah</span>
                        </li>
                      </ul>
                      <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Pilih Paket
                      </button>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-500 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">POPULER</span>
                      </div>
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">❤️</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive</h4>
                        <p className="text-3xl font-bold text-red-600 mb-2">Rp 750.000</p>
                        <p className="text-gray-600">Pemeriksaan lengkap</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Semua fitur Basic</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Ekokardiografi</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Treadmill Test</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Lab Lengkap</span>
                        </li>
                      </ul>
                      <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Pilih Paket
                      </button>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">💎</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Premium</h4>
                        <p className="text-3xl font-bold text-red-600 mb-2">Rp 1.250.000</p>
                        <p className="text-gray-600">Pemeriksaan premium</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Semua fitur Comprehensive</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">CT Scan Jantung</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Holter 24 Jam</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">Konsultasi Spesialis</span>
                        </li>
                      </ul>
                      <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Pilih Paket
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
            Jaga Kesehatan Jantung Anda Sekarang
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Deteksi dini adalah kunci kesehatan jantung. Konsultasikan dengan dokter spesialis jantung kami untuk hidup yang lebih sehat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              ❤️ Check-up Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              🩺 Konsultasi Dokter
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
