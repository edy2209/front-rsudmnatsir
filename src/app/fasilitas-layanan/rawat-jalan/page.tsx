'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import Link from 'next/link';
import { 
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  StarIcon,
  AcademicCapIcon,
  HeartIcon,
  EyeIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function RawatJalanPage() {
  const [selectedKlinik, setSelectedKlinik] = useState(null);

  const klinikRawatJalan = [
    {
      nama: 'Klinik Anak',
      deskripsi: 'Pelayanan kesehatan komprehensif untuk bayi, anak, dan remaja',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-anak',
      jadwal: 'Senin - Sabtu: 08:00-16:00',
      dokter: '4 Dokter Spesialis',
      layanan: ['Imunisasi', 'Tumbuh Kembang', 'Gizi Anak', 'Konsultasi Medis']
    },
    {
      nama: 'Klinik Bedah',
      deskripsi: 'Layanan bedah umum dan konsultasi pra-operasi',
      icon: DocumentTextIcon,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-pink-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-bedah',
      jadwal: 'Senin - Jumat: 08:00-15:00',
      dokter: '3 Dokter Spesialis',
      layanan: ['Bedah Umum', 'Bedah Minor', 'Konsultasi Pra-Op', 'Wound Care']
    },
    {
      nama: 'Klinik Gizi',
      deskripsi: 'Konsultasi gizi dan diet untuk kesehatan optimal',
      icon: BeakerIcon,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-gizi',
      jadwal: 'Selasa - Sabtu: 09:00-16:00',
      dokter: '2 Ahli Gizi',
      layanan: ['Diet Therapy', 'Konseling Gizi', 'Program Penurunan BB', 'Edukasi Nutrisi']
    },
    {
      nama: 'Klinik Jantung',
      deskripsi: 'Pemeriksaan dan pengobatan penyakit kardiovaskular',
      icon: HeartIcon,
      color: 'bg-red-600',
      gradient: 'from-red-600 to-rose-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-jantung',
      jadwal: 'Senin - Jumat: 08:00-16:00',
      dokter: '2 Dokter Spesialis',
      layanan: ['EKG', 'Ekokardiografi', 'Konsultasi Jantung', 'Medical Check-up']
    },
    {
      nama: 'Klinik Kebidanan',
      deskripsi: 'Pelayanan kesehatan ibu dan anak, kehamilan hingga persalinan',
      icon: UserGroupIcon,
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-purple-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-kebidanan',
      jadwal: 'Senin - Sabtu: 07:00-17:00',
      dokter: '3 Dokter Spesialis',
      layanan: ['ANC', 'USG 4D', 'Persalinan', 'Postnatal Care']
    },
    {
      nama: 'Klinik Mata',
      deskripsi: 'Pemeriksaan dan pengobatan gangguan mata',
      icon: EyeIcon,
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-purple-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-mata',
      jadwal: 'Senin - Jumat: 08:00-15:00',
      dokter: '2 Dokter Spesialis',
      layanan: ['Pemeriksaan Mata', 'Refraksi', 'Operasi Katarak', 'Glaukoma']
    },
    {
      nama: 'Klinik Neurologi',
      deskripsi: 'Diagnosis dan pengobatan gangguan sistem saraf',
      icon: AcademicCapIcon,
      color: 'bg-purple-600',
      gradient: 'from-purple-600 to-indigo-600',
      link: '/fasilitas-layanan/rawat-jalan/klinik-neurologi',
      jadwal: 'Selasa - Sabtu: 09:00-16:00',
      dokter: '2 Dokter Spesialis',
      layanan: ['EEG', 'Stroke', 'Epilepsi', 'Migrain']
    },
    {
      nama: 'Klinik Paru',
      deskripsi: 'Pelayanan kesehatan paru-paru dan pernapasan',
      icon: ShieldCheckIcon,
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-blue-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-paru',
      jadwal: 'Senin - Jumat: 08:00-16:00',
      dokter: '2 Dokter Spesialis',
      layanan: ['Spirometri', 'Bronkoskopi', 'TB Testing', 'Rehabilitasi Paru']
    },
    {
      nama: 'Klinik Penyakit Dalam',
      deskripsi: 'Diagnosis dan pengobatan penyakit internal',
      icon: DocumentTextIcon,
      color: 'bg-teal-500',
      gradient: 'from-teal-500 to-emerald-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-penyakit-dalam',
      jadwal: 'Senin - Sabtu: 08:00-16:00',
      dokter: '3 Dokter Spesialis',
      layanan: ['Diabetes', 'Hipertensi', 'Jantung', 'Ginjal']
    },
    {
      nama: 'Klinik THT',
      deskripsi: 'Pengobatan telinga, hidung, dan tenggorokan',
      icon: UserGroupIcon,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-yellow-500',
      link: '/fasilitas-layanan/rawat-jalan/klinik-tht',
      jadwal: 'Senin - Jumat: 08:00-15:00',
      dokter: '2 Dokter Spesialis',
      layanan: ['Audiometri', 'Endoskopi', 'Operasi THT', 'Hearing Aid']
    },
    {
      nama: 'Klinik VCT',
      deskripsi: 'Voluntary Counseling and Testing HIV/AIDS',
      icon: ShieldCheckIcon,
      color: 'bg-purple-700',
      gradient: 'from-purple-700 to-indigo-700',
      link: '/fasilitas-layanan/rawat-jalan/klinik-vct',
      jadwal: 'Senin - Jumat: 08:00-20:00',
      dokter: '8 Konselor Terlatih',
      layanan: ['HIV Testing', 'Konseling', 'PrEP/PEP', 'Support Group']
    }
  ];

  const stats = [
    { label: 'Klinik Spesialis', value: '11', icon: UserGroupIcon },
    { label: 'Dokter Ahli', value: '25+', icon: AcademicCapIcon },
    { label: 'Pasien per Hari', value: '300+', icon: CalendarIcon },
    { label: 'Tingkat Kepuasan', value: '98%', icon: StarIcon }
  ];

  const fasilitasUnggulan = [
    {
      nama: 'Sistem Antrian Digital',
      deskripsi: 'Antrian online untuk mengurangi waktu tunggu',
      icon: ClockIcon
    },
    {
      nama: 'Rekam Medis Elektronik',
      deskripsi: 'Sistem pencatatan medis terintegrasi',
      icon: DocumentTextIcon
    },
    {
      nama: 'Telemedicine',
      deskripsi: 'Konsultasi jarak jauh untuk follow-up',
      icon: PhoneIcon
    },
    {
      nama: 'Layanan 24 Jam',
      deskripsi: 'Emergency dan layanan darurat',
      icon: CheckCircleIcon
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-8 h-full rotate-12">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-white rounded-full w-4 h-4 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <UserGroupIcon className="w-20 h-20 text-blue-200 mx-auto mb-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Layanan <span className="text-blue-200">Rawat Jalan</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Pelayanan kesehatan poliklinik terlengkap dengan 11 klinik spesialis dan tenaga medis berpengalaman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Lihat Semua Klinik
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Buat Janji Temu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Klinik Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Klinik <span className="text-blue-600">Spesialis</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Layanan medis spesialis terlengkap dengan dokter berpengalaman dan fasilitas modern
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {klinikRawatJalan.map((klinik, index) => (
              <div key={index} className="group">
                <Link href={klinik.link}>
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                    {/* Header with Gradient */}
                    <div className={`bg-gradient-to-r ${klinik.gradient} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-16 h-16 bg-white/10 rounded-full"></div>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <klinik.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        <ArrowRightIcon className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold mt-4 mb-2">{klinik.nama}</h3>
                      <p className="text-sm opacity-90">{klinik.deskripsi}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4" />
                          <span>{klinik.jadwal}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <UserGroupIcon className="w-4 h-4" />
                          <span>{klinik.dokter}</span>
                        </div>
                      </div>

                      {/* Layanan */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Layanan Utama:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {klinik.layanan.map((layanan, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-700 text-center">
                              {layanan}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        Kunjungi Klinik
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fasilitas Unggulan */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Fasilitas <span className="text-blue-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Teknologi dan sistem modern untuk pelayanan kesehatan yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fasilitasUnggulan.map((fasilitas, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <fasilitas.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{fasilitas.nama}</h3>
                  <p className="text-gray-600 leading-relaxed">{fasilitas.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Informasi Penting */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Informasi <span className="text-blue-600">Penting</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Syarat dan Ketentuan */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Syarat & Ketentuan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Membawa kartu identitas (KTP/KK)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kartu BPJS atau asuransi kesehatan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Datang 30 menit sebelum jadwal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Membawa hasil pemeriksaan sebelumnya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mematuhi protokol kesehatan</span>
                  </li>
                </ul>
              </div>

              {/* Kontak Informasi */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kontak & Informasi</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Call Center</p>
                      <p className="text-gray-600">(0751) 32082</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Lokasi</p>
                      <p className="text-gray-600">Jl. Dr. Ahmad Rivai No. 1, Bukittinggi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Jam Operasional</p>
                      <p className="text-gray-600">Senin - Sabtu: 08:00 - 16:00</p>
                      <p className="text-gray-600">Emergency: 24 Jam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <HeartIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dapatkan Pelayanan Kesehatan Terbaik
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim medis profesional siap melayani kebutuhan kesehatan Anda dan keluarga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Buat Janji Temu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Hubungi Call Center
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
