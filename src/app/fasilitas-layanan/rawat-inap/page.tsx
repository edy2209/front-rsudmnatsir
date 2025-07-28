'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import Link from 'next/link';
import { 
  HomeIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  StarIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WifiIcon,
  TvIcon
} from '@heroicons/react/24/outline';

export default function RawatInapPage() {
  const [activeTab, setActiveTab] = useState('kamar');

  const ruangRawatInap = [
    {
      nama: 'Ruang Anak',
      deskripsi: 'Ruang rawat inap khusus anak dengan suasana ramah anak',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-sky-500',
      link: '/fasilitas-layanan/rawat-inap/anak',
      kapasitas: '24 Tempat Tidur',
      fasilitas: ['Playground', 'AC', 'TV', 'Nurse Call'],
      tarif: 'Rp 350.000 - 750.000/hari'
    },
    {
      nama: 'Ruang Bedah',
      deskripsi: 'Ruang perawatan pascaoperasi dengan monitoring ketat',
      icon: DocumentTextIcon,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-rose-500',
      link: '/fasilitas-layanan/rawat-inap/bedah',
      kapasitas: '20 Tempat Tidur',
      fasilitas: ['Monitor Vital', 'AC', 'Nurse Call', 'Emergency'],
      tarif: 'Rp 400.000 - 900.000/hari'
    },
    {
      nama: 'Ruang Interne Pria',
      deskripsi: 'Ruang rawat inap penyakit dalam untuk pasien pria',
      icon: UserGroupIcon,
      color: 'bg-green-600',
      gradient: 'from-green-600 to-emerald-600',
      link: '/fasilitas-layanan/rawat-inap/interne-pria',
      kapasitas: '30 Tempat Tidur',
      fasilitas: ['AC', 'TV', 'WiFi', 'Nurse Call'],
      tarif: 'Rp 300.000 - 650.000/hari'
    },
    {
      nama: 'Ruang Interne Wanita',
      deskripsi: 'Ruang rawat inap penyakit dalam untuk pasien wanita',
      icon: UserGroupIcon,
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-rose-500',
      link: '/fasilitas-layanan/rawat-inap/interne-wanita',
      kapasitas: '30 Tempat Tidur',
      fasilitas: ['AC', 'TV', 'WiFi', 'Nurse Call'],
      tarif: 'Rp 300.000 - 650.000/hari'
    },
    {
      nama: 'Ruang Jantung',
      deskripsi: 'Ruang perawatan khusus pasien jantung dengan monitoring 24/7',
      icon: HeartIcon,
      color: 'bg-red-600',
      gradient: 'from-red-600 to-pink-600',
      link: '/fasilitas-layanan/rawat-inap/jantung',
      kapasitas: '16 Tempat Tidur',
      fasilitas: ['Monitor EKG', 'AC', 'Nurse Call', 'Defibrillator'],
      tarif: 'Rp 500.000 - 1.200.000/hari'
    },
    {
      nama: 'Ruang Kebidanan',
      deskripsi: 'Ruang perawatan ibu hamil, melahirkan, dan nifas',
      icon: UserGroupIcon,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-violet-500',
      link: '/fasilitas-layanan/rawat-inap/kebidanan',
      kapasitas: '25 Tempat Tidur',
      fasilitas: ['Baby Box', 'AC', 'TV', 'Family Room'],
      tarif: 'Rp 400.000 - 850.000/hari'
    },
    {
      nama: 'Ruang Mata',
      deskripsi: 'Ruang perawatan pascaoperasi mata',
      icon: UserGroupIcon,
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500',
      link: '/fasilitas-layanan/rawat-inap/mata',
      kapasitas: '12 Tempat Tidur',
      fasilitas: ['Eye Care Unit', 'AC', 'TV', 'Nurse Call'],
      tarif: 'Rp 350.000 - 700.000/hari'
    },
    {
      nama: 'Ruang Neurologi',
      deskripsi: 'Ruang perawatan pasien gangguan saraf dan stroke',
      icon: AcademicCapIcon,
      color: 'bg-purple-600',
      gradient: 'from-purple-600 to-indigo-600',
      link: '/fasilitas-layanan/rawat-inap/neurologi',
      kapasitas: '18 Tempat Tidur',
      fasilitas: ['Neuro Monitor', 'AC', 'Nurse Call', 'Fisioterapi'],
      tarif: 'Rp 450.000 - 950.000/hari'
    },
    {
      nama: 'Ruang Paru',
      deskripsi: 'Ruang perawatan penyakit paru dan pernapasan',
      icon: ShieldCheckIcon,
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-blue-500',
      link: '/fasilitas-layanan/rawat-inap/paru',
      kapasitas: '22 Tempat Tidur',
      fasilitas: ['Oksigen Central', 'AC', 'TV', 'Nurse Call'],
      tarif: 'Rp 350.000 - 750.000/hari'
    },
    {
      nama: 'Ruang THT',
      deskripsi: 'Ruang perawatan telinga, hidung, dan tenggorokan',
      icon: UserGroupIcon,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-amber-500',
      link: '/fasilitas-layanan/rawat-inap/tht',
      kapasitas: '15 Tempat Tidur',
      fasilitas: ['ENT Equipment', 'AC', 'TV', 'Nurse Call'],
      tarif: 'Rp 300.000 - 650.000/hari'
    }
  ];

  const kelasPerawatan = [
    {
      kelas: 'Kelas VIP',
      deskripsi: 'Kamar pribadi dengan fasilitas mewah',
      fasilitas: ['1 Tempat Tidur', 'AC', 'TV 32"', 'WiFi', 'Kulkas', 'Sofa Tamu', 'Kamar Mandi Dalam'],
      tarif: 'Rp 800.000 - 1.500.000/hari',
      color: 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    {
      kelas: 'Kelas I',
      deskripsi: 'Kamar pribadi dengan fasilitas lengkap',
      fasilitas: ['1 Tempat Tidur', 'AC', 'TV 24"', 'WiFi', 'Nurse Call', 'Kamar Mandi Dalam'],
      tarif: 'Rp 500.000 - 900.000/hari',
      color: 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      kelas: 'Kelas II',
      deskripsi: 'Kamar bersama 2 tempat tidur',
      fasilitas: ['2 Tempat Tidur', 'AC', 'TV', 'WiFi', 'Nurse Call', 'Kamar Mandi Bersama'],
      tarif: 'Rp 300.000 - 600.000/hari',
      color: 'border-green-400 bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      kelas: 'Kelas III',
      deskripsi: 'Kamar bersama ekonomis',
      fasilitas: ['4-6 Tempat Tidur', 'Kipas Angin', 'TV Bersama', 'Nurse Call', 'Kamar Mandi Bersama'],
      tarif: 'Rp 150.000 - 350.000/hari',
      color: 'border-gray-400 bg-gradient-to-br from-gray-50 to-slate-50'
    }
  ];

  const fasilitasUmum = [
    {
      nama: 'Nurse Station 24/7',
      deskripsi: 'Perawat jaga 24 jam untuk monitoring pasien',
      icon: UserGroupIcon
    },
    {
      nama: 'Family Room',
      deskripsi: 'Ruang tunggu keluarga yang nyaman',
      icon: HomeIcon
    },
    {
      nama: 'Emergency Call',
      deskripsi: 'Sistem panggilan darurat di setiap kamar',
      icon: PhoneIcon
    },
    {
      nama: 'Kamar Operasi',
      deskripsi: 'Akses langsung ke kamar operasi',
      icon: ShieldCheckIcon
    },
    {
      nama: 'Laboratorium 24 Jam',
      deskripsi: 'Pemeriksaan lab kapan saja dibutuhkan',
      icon: DocumentTextIcon
    },
    {
      nama: 'Ambulance',
      deskripsi: 'Layanan ambulance untuk rujukan',
      icon: CalendarIcon
    }
  ];

  const stats = [
    { label: 'Total Tempat Tidur', value: '212', icon: HomeIcon },
    { label: 'Tingkat Okupansi', value: '85%', icon: UserGroupIcon },
    { label: 'Ruang Perawatan', value: '10', icon: HomeIcon },
    { label: 'Tingkat Kepuasan', value: '96%', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 py-20 overflow-hidden -mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-6 h-full transform rotate-12">
            {[...Array(100)].map((_, i) => (
              <HomeIcon key={i} className="w-8 h-8 text-white animate-pulse" style={{animationDelay: `${i * 0.05}s`}} />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-emerald-200/30 text-6xl animate-bounce">
          🏥
        </div>
        <div className="absolute bottom-20 left-20 text-teal-200/30 text-8xl animate-pulse">
          🛏️
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <HomeIcon className="w-20 h-20 text-emerald-200 mx-auto mb-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Layanan <span className="text-emerald-200">Rawat Inap</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Fasilitas rawat inap terlengkap dengan 212 tempat tidur, 10 ruang perawatan spesialis, dan pelayanan 24 jam
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <stat.icon className="w-6 h-6 text-emerald-200 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Cek Ketersediaan Kamar
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                Info Rawat Inap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            {[
              { id: 'kamar', label: 'Ruang Perawatan', icon: HomeIcon },
              { id: 'kelas', label: 'Kelas Perawatan', icon: HomeIcon },
              { id: 'fasilitas', label: 'Fasilitas', icon: ShieldCheckIcon },
              { id: 'info', label: 'Informasi', icon: DocumentTextIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Ruang Perawatan */}
          {activeTab === 'kamar' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ruang <span className="text-teal-600">Perawatan</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  10 ruang perawatan spesialis dengan total 212 tempat tidur dan fasilitas medis terkini
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ruangRawatInap.map((ruang, index) => (
                  <div key={index} className="group">
                    <Link href={ruang.link}>
                      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${ruang.gradient} p-6 text-white relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full"></div>
                          <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 bg-white/10 rounded-full"></div>
                          
                          <div className="flex items-center justify-between relative z-10">
                            <ruang.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                            <ArrowRightIcon className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                          <h3 className="text-2xl font-bold mt-4 mb-2">{ruang.nama}</h3>
                          <p className="text-sm opacity-90">{ruang.deskripsi}</p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <HomeIcon className="w-4 h-4" />
                              <span>{ruang.kapasitas}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{ruang.tarif}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {ruang.fasilitas.map((fasilitas, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-700 text-center">
                                  {fasilitas}
                                </div>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-teal-600 hover:text-white transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                            Lihat Detail Ruang
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kelas Perawatan */}
          {activeTab === 'kelas' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Kelas <span className="text-teal-600">Perawatan</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pilihan kelas perawatan sesuai kebutuhan dan kemampuan finansial
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {kelasPerawatan.map((kelas, index) => (
                  <div key={index} className={`border-2 ${kelas.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">{kelas.kelas}</div>
                      <p className="text-gray-600 text-sm mb-4">{kelas.deskripsi}</p>
                      <div className="text-2xl font-bold text-teal-600">{kelas.tarif}</div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                      {kelas.fasilitas.map((fasilitas, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{fasilitas}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors duration-300">
                      Pilih Kelas
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fasilitas */}
          {activeTab === 'fasilitas' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Fasilitas <span className="text-teal-600">Pendukung</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Fasilitas lengkap untuk kenyamanan dan keamanan selama perawatan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fasilitasUmum.map((fasilitas, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                        <fasilitas.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{fasilitas.nama}</h3>
                      <p className="text-gray-600 leading-relaxed">{fasilitas.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Informasi */}
          {activeTab === 'info' && (
            <div className="fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Informasi <span className="text-teal-600">Rawat Inap</span>
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Prosedur Masuk */}
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Prosedur Masuk Rawat Inap</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="font-semibold text-gray-800">Pendaftaran</p>
                          <p className="text-sm text-gray-600">Daftar di admisi dengan membawa surat rujukan dan identitas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="font-semibold text-gray-800">Pemeriksaan Awal</p>
                          <p className="text-sm text-gray-600">Pemeriksaan oleh dokter jaga dan tim medis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="font-semibold text-gray-800">Penempatan Kamar</p>
                          <p className="text-sm text-gray-600">Penempatan sesuai kelas perawatan yang dipilih</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <p className="font-semibold text-gray-800">Orientasi</p>
                          <p className="text-sm text-gray-600">Penjelasan fasilitas dan tata tertib rawat inap</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kontak & Jam Besuk */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Penting</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Pagi: 10:00 - 12:00</p>
                          <p>Sore: 16:00 - 20:00</p>
                          <p>Maksimal 2 pengunjung per waktu</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Kontak Rawat Inap</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm text-gray-600">(0751) 32082 ext. 200</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm text-gray-600">Lantai 2-4, Gedung Utama</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Dokumen Wajib</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• KTP/Identitas pasien</li>
                          <li>• Kartu BPJS/Asuransi</li>
                          <li>• Surat rujukan dokter</li>
                          <li>• Hasil pemeriksaan sebelumnya</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <HomeIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reservasi Kamar Rawat Inap
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk informasi ketersediaan kamar dan reservasi rawat inap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 shadow-lg">
              Cek Ketersediaan Kamar
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
              Hubungi Admisi
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
