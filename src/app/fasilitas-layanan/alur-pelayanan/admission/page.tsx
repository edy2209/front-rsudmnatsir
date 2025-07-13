'use client';

/**
 * Halaman Alur Admission - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Step-by-step guide interaktif untuk proses admission rawat inap
 */

import PageLayout from '@/components/PageLayout';
import React, { useState } from 'react';
import { 
  UserIcon,
  DocumentTextIcon,
  CreditCardIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  BanknotesIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function AlurAdmissionPage() {
  const [activeStep, setActiveStep] = useState(0);

  const alurAdmission = [
    {
      step: 1,
      title: 'Pendaftaran Awal',
      subtitle: 'Registrasi Pasien',
      description: 'Daftar di loket admission dengan membawa dokumen yang diperlukan',
      icon: UserIcon,
      color: 'bg-blue-600',
      requirements: [
        'KTP/Identitas diri',
        'Kartu BPJS/Asuransi',
        'Surat rujukan dokter',
        'Hasil pemeriksaan penunjang'
      ],
      location: 'Loket Admission Lantai 1',
      time: '15-30 menit'
    },
    {
      step: 2,
      title: 'Verifikasi Dokumen',
      subtitle: 'Pemeriksaan Kelengkapan',
      description: 'Petugas memverifikasi kelengkapan dokumen dan eligibilitas pasien',
      icon: DocumentTextIcon,
      color: 'bg-green-600',
      requirements: [
        'Verifikasi identitas',
        'Validasi rujukan',
        'Cek eligibilitas BPJS',
        'Konfirmasi diagnosa'
      ],
      location: 'Ruang Verifikasi',
      time: '10-20 menit'
    },
    {
      step: 3,
      title: 'Pemilihan Kamar',
      subtitle: 'Konfirmasi Akomodasi',
      description: 'Pilih kelas kamar sesuai dengan kebutuhan dan ketersediaan',
      icon: HomeIcon,
      color: 'bg-purple-600',
      requirements: [
        'Pilih kelas kamar',
        'Cek ketersediaan',
        'Konfirmasi fasilitas',
        'Estimasi biaya'
      ],
      location: 'Customer Service',
      time: '10-15 menit'
    },
    {
      step: 4,
      title: 'Pembayaran & Jaminan',
      subtitle: 'Proses Finansial',
      description: 'Pembayaran uang muka atau konfirmasi jaminan asuransi',
      icon: CreditCardIcon,
      color: 'bg-orange-600',
      requirements: [
        'Pembayaran deposit',
        'Konfirmasi asuransi',
        'Tanda tangan kontrak',
        'Estimasi total biaya'
      ],
      location: 'Kasir/Finance',
      time: '15-25 menit'
    },
    {
      step: 5,
      title: 'Pengantaran ke Kamar',
      subtitle: 'Check-in Kamar',
      description: 'Pasien diantar ke kamar rawat inap dan orientasi fasilitas',
      icon: BuildingOfficeIcon,
      color: 'bg-indigo-600',
      requirements: [
        'Escort ke kamar',
        'Orientasi fasilitas',
        'Perkenalan perawat',
        'Briefing aturan RS'
      ],
      location: 'Kamar Rawat Inap',
      time: '15-20 menit'
    },
    {
      step: 6,
      title: 'Handover ke Tim Medis',
      subtitle: 'Transfer of Care',
      description: 'Serah terima pasien kepada tim medis perawatan',
      icon: ShieldCheckIcon,
      color: 'bg-green-700',
      requirements: [
        'Handover ke dokter',
        'Briefing kondisi pasien',
        'Rencana perawatan',
        'Jadwal pemeriksaan'
      ],
      location: 'Nurse Station',
      time: '10-15 menit'
    }
  ];

  const jenisKamar = [
    {
      kelas: 'VIP',
      fasilitas: ['AC', 'TV LED', 'Kulkas', 'Sofa', 'Kamar Mandi Dalam'],
      tarif: 'Rp 750.000/hari',
      kapasitas: '1 pasien'
    },
    {
      kelas: 'Kelas 1',
      fasilitas: ['AC', 'TV', 'Lemari', 'Kamar Mandi Dalam'],
      tarif: 'Rp 450.000/hari',
      kapasitas: '1-2 pasien'
    },
    {
      kelas: 'Kelas 2',
      fasilitas: ['AC', 'TV', 'Kamar Mandi Dalam'],
      tarif: 'Rp 300.000/hari',
      kapasitas: '3-4 pasien'
    },
    {
      kelas: 'Kelas 3',
      fasilitas: ['Kipas', 'Kamar Mandi Bersama'],
      tarif: 'BPJS/Gratis',
      kapasitas: '6-8 pasien'
    }
  ];

  const informasiPenting = [
    {
      title: 'Jam Besuk',
      icon: ClockIcon,
      content: [
        'Pagi: 10:00 - 12:00',
        'Sore: 16:00 - 18:00',
        'Maksimal 2 pengunjung',
        'Wajib protokol kesehatan'
      ]
    },
    {
      title: 'Dokumen Wajib',
      icon: IdentificationIcon,
      content: [
        'KTP asli dan fotokopi',
        'Kartu BPJS/Asuransi',
        'Surat rujukan valid',
        'Hasil lab/radiologi'
      ]
    },
    {
      title: 'Pembayaran',
      icon: BanknotesIcon,
      content: [
        'Cash (Tunai)',
        'Transfer Bank',
        'Kartu Kredit/Debit',
        'BPJS Kesehatan'
      ]
    },
    {
      title: 'Fasilitas Umum',
      icon: BuildingOfficeIcon,
      content: [
        'Musholla lantai 2',
        'Kantin 24 jam',
        'ATM di lobby',
        'Parkir gratis'
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 md:grid-cols-8 gap-4 md:gap-8 h-full">
            {[...Array(48)].map((_, i) => (
              <BuildingOfficeIcon key={i} className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <BuildingOfficeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-300 animate-pulse" />
              <ArrowRightIcon className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-300 animate-bounce" />
              <HomeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Alur <span className="text-blue-300">Admission</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Panduan lengkap proses penerimaan pasien rawat inap dari pendaftaran hingga penempatan kamar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Daftar Rawat Inap
              </button>
              <button className="border-2 border-blue-300 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 text-sm sm:text-base">
                Cek Ketersediaan Kamar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Steps */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Alur <span className="text-blue-600">Admission</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Ikuti 6 langkah mudah untuk proses admission yang lancar dan efisien
          </p>

          {/* Interactive Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {alurAdmission.map((step, index) => (
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
                  <div className={`${alurAdmission[activeStep].color} p-4 sm:p-6 rounded-2xl w-fit mx-auto md:mx-0 mb-4`}>
                    {React.createElement(alurAdmission[activeStep].icon, { className: "w-8 h-8 sm:w-12 sm:h-12 text-white" })}
                  </div>
                  <div className={`${alurAdmission[activeStep].color} text-white text-lg sm:text-xl font-bold px-3 py-1 rounded-full w-fit mx-auto md:mx-0 mb-2`}>
                    Langkah {alurAdmission[activeStep].step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{alurAdmission[activeStep].title}</h3>
                  <p className="text-base sm:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">{alurAdmission[activeStep].subtitle}</p>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{alurAdmission[activeStep].description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Yang Diperlukan:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {alurAdmission[activeStep].requirements.map((req, i) => (
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
                        <span>{alurAdmission[activeStep].location}</span>
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Estimasi Waktu:</h4>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{alurAdmission[activeStep].time}</span>
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
              onClick={() => setActiveStep(Math.min(alurAdmission.length - 1, activeStep + 1))}
              disabled={activeStep === alurAdmission.length - 1}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Pilihan <span className="text-blue-600">Kelas Kamar</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {jenisKamar.map((kamar, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3">
                    <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{kamar.kelas}</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">{kamar.tarif}</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Fasilitas:</h4>
                    <ul className="space-y-1">
                      {kamar.fasilitas.map((fas, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          <span>{fas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Kapasitas:</strong> {kamar.kapasitas}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            {informasiPenting.map((info, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
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

      {/* Contact & Emergency */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <PhoneIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Bantuan Admission 24/7
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Tim admission kami siap membantu proses rawat inap Anda kapan saja
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Hotline Admission</p>
              <p className="text-blue-200 text-xs sm:text-sm">(0751) 32082 ext. 101</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <MapPinIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Lokasi</p>
              <p className="text-blue-200 text-xs sm:text-sm">Lantai 1 Gedung Utama</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 mx-auto mb-2 sm:mb-3" />
              <p className="text-white font-semibold text-sm sm:text-base">Jam Buka</p>
              <p className="text-blue-200 text-xs sm:text-sm">24 Jam Non-Stop</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base">
              Reservasi Online
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
