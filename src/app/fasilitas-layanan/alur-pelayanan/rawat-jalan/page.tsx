'use client';

/**
 * Halaman Alur Rawat Jalan - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan lengkap alur pelayanan rawat jalan dengan tab navigasi
 */

import PageLayout from '@/components/PageLayout';
import React, { useState } from 'react';
import { 
  UserIcon,
  DocumentTextIcon,
  CreditCardIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AlurRawatJalanPage() {
  const [activeStep, setActiveStep] = useState(0);

  const alurPelayanan = [
    {
      step: 1,
      title: 'Pendaftaran',
      subtitle: 'Registrasi Pasien',
      description: 'Daftar di loket pendaftaran dengan membawa dokumen yang diperlukan',
      icon: UserIcon,
      color: 'bg-blue-600',
      requirements: [
        'KTP/Identitas diri',
        'Kartu BPJS/Asuransi (jika ada)',
        'Surat rujukan (untuk rujukan)',
        'Kartu berobat lama (jika ada)'
      ],
      location: 'Loket Pendaftaran Lantai 1',
      time: '5-10 menit'
    },
    {
      step: 2,
      title: 'Verifikasi Data',
      subtitle: 'Konfirmasi Informasi',
      description: 'Petugas akan memverifikasi data dan memberikan nomor antrian',
      icon: DocumentCheckIcon,
      color: 'bg-green-600',
      requirements: [
        'Konfirmasi data pribadi',
        'Pilih jenis layanan',
        'Konfirmasi dokter/poli tujuan',
        'Pembayaran biaya administrasi'
      ],
      location: 'Loket Pendaftaran',
      time: '3-5 menit'
    },
    {
      step: 3,
      title: 'Pembayaran',
      subtitle: 'Biaya Administrasi',
      description: 'Lakukan pembayaran sesuai dengan jenis layanan yang dipilih',
      icon: CreditCardIcon,
      color: 'bg-purple-600',
      requirements: [
        'Cash/Transfer/QRIS',
        'Kartu BPJS (gratis admin)',
        'Kartu asuransi lainnya',
        'Simpan bukti pembayaran'
      ],
      location: 'Kasir/Loket Pembayaran',
      time: '2-5 menit'
    },
    {
      step: 4,
      title: 'Tunggu Antrian',
      subtitle: 'Menunggu Dipanggil',
      description: 'Tunggu nomor antrian dipanggil di ruang tunggu yang tersedia',
      icon: ClockIcon,
      color: 'bg-orange-600',
      requirements: [
        'Duduk di ruang tunggu',
        'Perhatikan nomor antrian',
        'Siapkan dokumen medis',
        'Tetap dalam area RS'
      ],
      location: 'Ruang Tunggu Poli',
      time: '15-45 menit'
    },
    {
      step: 5,
      title: 'Pemeriksaan',
      subtitle: 'Konsultasi Dokter',
      description: 'Pemeriksaan dan konsultasi dengan dokter spesialis atau umum',
      icon: HeartIcon,
      color: 'bg-red-600',
      requirements: [
        'Masuk ruang pemeriksaan',
        'Jelaskan keluhan',
        'Ikuti instruksi dokter',
        'Tanyakan hal yang tidak jelas'
      ],
      location: 'Ruang Poli/Dokter',
      time: '10-30 menit'
    },
    {
      step: 6,
      title: 'Tindak Lanjut',
      subtitle: 'Resep & Kontrol',
      description: 'Ambil resep obat dan jadwal kontrol jika diperlukan',
      icon: DocumentTextIcon,
      color: 'bg-indigo-600',
      requirements: [
        'Ambil resep di apotek',
        'Jadwal kontrol (jika ada)',
        'Rujukan lab/radiologi',
        'Instruksi perawatan'
      ],
      location: 'Apotek/Loket Kontrol',
      time: '5-15 menit'
    }
  ];

  const infoTambahan = [
    {
      title: 'Jam Operasional',
      icon: ClockIcon,
      color: 'text-blue-600',
      content: [
        'Senin - Jumat: 07:00 - 20:00',
        'Sabtu: 07:00 - 16:00',
        'Minggu: 07:00 - 12:00 (Terbatas)',
        'Hari libur nasional: Emergency'
      ]
    },
    {
      title: 'Dokumen yang Diperlukan',
      icon: IdentificationIcon,
      color: 'text-green-600',
      content: [
        'KTP/Identitas resmi',
        'Kartu BPJS/Asuransi',
        'Surat rujukan (khusus rujukan)',
        'Kartu berobat lama (jika ada)'
      ]
    },
    {
      title: 'Metode Pembayaran',
      icon: CreditCardIcon,
      color: 'text-purple-600',
      content: [
        'Cash (Tunai)',
        'Transfer Bank',
        'QRIS/E-Wallet',
        'BPJS Kesehatan',
        'Asuransi Swasta'
      ]
    },
    {
      title: 'Tips Penting',
      icon: ExclamationTriangleIcon,
      color: 'text-orange-600',
      content: [
        'Datang 30 menit sebelum jam praktek',
        'Bawa semua dokumen lengkap',
        'Siapkan daftar keluhan',
        'Patuhi protokol kesehatan'
      ]
    }
  ];

  const poliTersedia = [
    { nama: 'Poli Umum', waktu: '07:00-16:00', dokter: '5 Dokter' },
    { nama: 'Poli Anak', waktu: '08:00-15:00', dokter: '3 Dokter' },
    { nama: 'Poli Kandungan', waktu: '08:00-14:00', dokter: '4 Dokter' },
    { nama: 'Poli Bedah', waktu: '09:00-15:00', dokter: '3 Dokter' },
    { nama: 'Poli Mata', waktu: '08:00-12:00', dokter: '2 Dokter' },
    { nama: 'Poli THT', waktu: '08:00-14:00', dokter: '2 Dokter' },
    { nama: 'Poli Jantung', waktu: '08:00-16:00', dokter: '3 Dokter' },
    { nama: 'Poli Paru', waktu: '08:00-15:00', dokter: '2 Dokter' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 md:grid-cols-8 gap-4 md:gap-8 h-full">
            {[...Array(48)].map((_, i) => (
              <ArrowRightIcon key={i} className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-300 animate-pulse" />
              <ArrowRightIcon className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-300 animate-bounce" />
              <UserGroupIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Alur Pelayanan <span className="text-blue-300">Rawat Jalan</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Panduan lengkap langkah demi langkah untuk mendapatkan pelayanan rawat jalan yang optimal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Mulai Proses
              </button>
              <button className="border-2 border-blue-300 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 text-sm sm:text-base">
                Lihat Jadwal Dokter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Steps */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Alur Pelayanan <span className="text-blue-600">Lengkap</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Ikuti 6 langkah mudah untuk mendapatkan pelayanan rawat jalan terbaik
          </p>

          {/* Interactive Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {alurPelayanan.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm ${
                  activeStep === index 
                    ? `${step.color.replace('bg-', 'bg-')} text-white shadow-lg` 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {React.createElement(step.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
                <span className="font-medium hidden sm:inline">{step.title}</span>
                <span className="font-medium sm:hidden">{step.step}</span>
              </button>
            ))}
          </div>

          {/* Active Step Detail */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Step Icon & Info */}
                <div className="text-center md:text-left">
                  <div className={`${alurPelayanan[activeStep].color} p-4 sm:p-6 rounded-2xl w-fit mx-auto md:mx-0 mb-4`}>
                    {React.createElement(alurPelayanan[activeStep].icon, { className: "w-8 h-8 sm:w-12 sm:h-12 text-white" })}
                  </div>
                  <div className={`${alurPelayanan[activeStep].color} text-white text-lg sm:text-xl font-bold px-3 py-1 rounded-full w-fit mx-auto md:mx-0 mb-2`}>
                    Langkah {alurPelayanan[activeStep].step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{alurPelayanan[activeStep].title}</h3>
                  <p className="text-base sm:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">{alurPelayanan[activeStep].subtitle}</p>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{alurPelayanan[activeStep].description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Yang Diperlukan:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {alurPelayanan[activeStep].requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Location */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Lokasi:</h4>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{alurPelayanan[activeStep].location}</span>
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Estimasi Waktu:</h4>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{alurPelayanan[activeStep].time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Sebelumnya
            </button>
            <button
              onClick={() => setActiveStep(Math.min(alurPelayanan.length - 1, activeStep + 1))}
              disabled={activeStep === alurPelayanan.length - 1}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>

      {/* Visual Flow Chart */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Diagram Alur <span className="text-blue-600">Visual</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:block">
              {/* Desktop Flow */}
              <div className="flex items-center justify-between">
                {alurPelayanan.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-center group">
                      <div className={`${step.color} p-4 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div className={`${step.color} text-white text-sm font-bold px-2 py-1 rounded-full mb-2`}>
                        {step.step}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-xs text-gray-600">{step.time}</p>
                    </div>
                    {index < alurPelayanan.length - 1 && (
                      <ArrowRightIcon className="w-6 h-6 text-gray-400 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Flow */}
            <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {alurPelayanan.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`${step.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg w-fit mx-auto`}>
                    {React.createElement(step.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <div className={`${step.color} text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full mb-1 sm:mb-2 w-fit mx-auto`}>
                    {step.step}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Informasi <span className="text-blue-600">Penting</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {infoTambahan.map((info, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  {React.createElement(info.icon, { className: `w-6 h-6 sm:w-8 sm:h-8 ${info.color}` })}
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">{info.title}</h3>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {info.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Clinics */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Poliklinik <span className="text-blue-600">Tersedia</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Berbagai layanan poliklinik rawat jalan dengan dokter spesialis berpengalaman
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {poliTersedia.map((poli, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                    <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{poli.nama}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span>{poli.waktu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>{poli.dokter}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Emergency */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Butuh Bantuan Lebih Lanjut?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Hotline</p>
              <p className="text-blue-200 text-xs sm:text-sm">(0751) 32082</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <MapPinIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Lokasi</p>
              <p className="text-blue-200 text-xs sm:text-sm">Lantai 1 Gedung Utama</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Jam Buka</p>
              <p className="text-blue-200 text-xs sm:text-sm">24 Jam Emergency</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base">
              Lihat Peta Lokasi
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
