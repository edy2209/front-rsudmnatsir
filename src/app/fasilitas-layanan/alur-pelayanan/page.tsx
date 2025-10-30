'use client';

/**
 * Halaman Alur Pelayanan Utama - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Grid navigasi modern dengan animasi dan responsif design
 */

import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { 
  UserIcon,
  HeartIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  HomeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function AlurPelayananPage() {
  const alurPelayanan = [
    {
      title: 'Rawat Jalan',
      description: 'Panduan lengkap alur pelayanan rawat jalan dari pendaftaran hingga tindak lanjut',
      icon: UserIcon,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      href: '/fasilitas-layanan/alur-pelayanan/rawat-jalan',
      steps: ['Pendaftaran', 'Verifikasi', 'Pemeriksaan', 'Tindak Lanjut']
    },
    {
      title: 'Rawat Inap',
      description: 'Prosedur masuk hingga keluar rumah sakit untuk pasien rawat inap',
      icon: HomeIcon,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      href: '/fasilitas-layanan/alur-pelayanan/rawat-inap',
      steps: ['Admission', 'Perawatan', 'Pemulangan', 'Follow Up']
    },
    {
      title: 'ICU',
      description: 'Alur perawatan intensif untuk pasien dengan kondisi kritis',
      icon: HeartIcon,
      color: 'from-red-600 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      href: '/fasilitas-layanan/alur-pelayanan/icu',
      steps: ['Assessment', 'Monitoring', 'Terapi', 'Stabilisasi']
    },
    {
      title: 'Laboratorium',
      description: 'Prosedur pemeriksaan laboratorium dan pengambilan hasil',
      icon: BeakerIcon,
      color: 'from-purple-600 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      href: '/fasilitas-layanan/alur-pelayanan/laboratorium',
      steps: ['Persiapan', 'Sampling', 'Analisis', 'Hasil']
    },
    {
      title: 'Radiologi',
      description: 'Alur pemeriksaan radiologi dari pendaftaran hingga hasil',
      icon: DocumentTextIcon,
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      href: '/fasilitas-layanan/alur-pelayanan/radiologi',
      steps: ['Booking', 'Persiapan', 'Imaging', 'Report']
    },
    {
      title: 'Farmasi',
      description: 'Prosedur pengambilan obat dan konsultasi farmasi',
      icon: ShieldCheckIcon,
      color: 'from-orange-600 to-amber-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      href: '/fasilitas-layanan/alur-pelayanan/farmasi',
      steps: ['Resep', 'Verifikasi', 'Dispensing', 'Konseling']
    },
    {
      title: 'Bank Darah',
      description: 'Alur donor darah dan transfusi dengan standar keamanan tinggi',
      icon: TruckIcon,
      color: 'from-rose-600 to-red-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
      href: '/fasilitas-layanan/alur-pelayanan/bank-darah',
      steps: ['Screening', 'Testing', 'Storage', 'Transfusi']
    },
    {
      title: 'PONEK',
      description: 'Pelayanan Obstetri Neonatal Emergensi Komprehensif',
      icon: HeartIcon,
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      href: '/fasilitas-layanan/alur-pelayanan/ponek',
      steps: ['Emergency', 'Assessment', 'Intervensi', 'Monitoring']
    },
    {
      title: 'Admission',
      description: 'Proses penerimaan pasien dan administrasi rumah sakit',
      icon: BuildingOfficeIcon,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      href: '/fasilitas-layanan/alur-pelayanan/admission',
      steps: ['Registrasi', 'Verifikasi', 'Kamar', 'Orientasi']
    }
  ];

  const keunggulan = [
    { icon: ClockIcon, title: 'Efisien', desc: 'Alur yang terstandarisasi' },
    { icon: CheckCircleIcon, title: 'Berkualitas', desc: 'Pelayanan terpadu' },
    { icon: ShieldCheckIcon, title: 'Aman', desc: 'Protokol keselamatan' },
    { icon: HeartIcon, title: 'Humanis', desc: 'Pelayanan berempati' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 md:grid-cols-12 gap-4 md:gap-8 h-full">
            {[...Array(96)].map((_, i) => (
              <ArrowRightIcon key={i} className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" style={{animationDelay: `${i * 0.05}s`}} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <DocumentTextIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-300 animate-pulse" />
              <ArrowRightIcon className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-300 animate-bounce" />
              <CheckCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Alur <span className="text-blue-300">Pelayanan</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Panduan lengkap untuk setiap layanan di RSUD M. Natsir dengan standar pelayanan terbaik
            </p>
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-blue-100">Terakreditasi KARS & ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {keunggulan.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alur Pelayanan Grid */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Pilih <span className="text-blue-600">Alur Pelayanan</span>
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Temukan panduan lengkap untuk setiap jenis pelayanan yang Anda butuhkan
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {alurPelayanan.map((alur, index) => (
              <Link key={index} href={alur.href}>
                <div className={`group cursor-pointer h-full`}>
                  <div className={`${alur.bgColor} p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full flex flex-col`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`bg-gradient-to-br ${alur.color} p-2 sm:p-3 rounded-lg`}>
                        <alur.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{alur.title}</h3>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-1">{alur.description}</p>

                    {/* Steps Preview */}
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Langkah-langkah:</p>
                      <div className="grid grid-cols-2 gap-1 sm:gap-2">
                        {alur.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-1 sm:gap-2 text-xs text-gray-600">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${alur.color}`}></div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <PhoneIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Butuh Bantuan Navigasi?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Tim customer service kami siap membantu mengarahkan Anda ke layanan yang tepat
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 mx-auto mb-1 sm:mb-2" />
              <p className="text-white font-semibold text-xs sm:text-sm">Hotline 24/7</p>
              <p className="text-blue-200 text-xs">(0751) 32082</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 mx-auto mb-1 sm:mb-2" />
              <p className="text-white font-semibold text-xs sm:text-sm">Info Center</p>
              <p className="text-blue-200 text-xs">Lantai 1 Lobby</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 mx-auto mb-1 sm:mb-2" />
              <p className="text-white font-semibold text-xs sm:text-sm">Buka</p>
              <p className="text-blue-200 text-xs">24 Jam</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base">
              Download Panduan
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
