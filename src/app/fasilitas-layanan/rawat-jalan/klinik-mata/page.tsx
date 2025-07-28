'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  EyeIcon, 
  EyeSlashIcon,
  BeakerIcon,
  CpuChipIcon,
  CalendarDaysIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

export default function KlinikMataPage() {
  const [activeService, setActiveService] = useState('umum');
  const [viewMode, setViewMode] = useState('light'); // light/dark mode toggle for eye theme
  const [formData, setFormData] = useState({
    nama: '',
    noTelp: '',
    jenisKeluhan: '',
    tanggalPreferensi: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Permintaan konsultasi mata Anda telah diterima. Tim kami akan menghubungi Anda segera.');
    setFormData({ nama: '', noTelp: '', jenisKeluhan: '', tanggalPreferensi: '', pesan: '' });
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'light' ? 'dark' : 'light');
  };

  const isDark = viewMode === 'dark';

  return (
    <PageLayout>
      {/* Hero Section with Eye Theme */}
      <div className={`relative min-h-screen transition-all duration-1000 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100'
      } overflow-hidden -mt-20`}>
        
        {/* Animated Eye Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-40 h-40 rounded-full ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-200/30'
          } animate-pulse`}></div>
          <div className={`absolute top-60 right-32 w-24 h-24 rounded-full ${
            isDark ? 'bg-cyan-400/20' : 'bg-cyan-300/40'
          } animate-bounce`}></div>
          <div className={`absolute bottom-40 left-1/3 w-32 h-32 rounded-full ${
            isDark ? 'bg-indigo-500/15' : 'bg-indigo-200/35'
          } animate-pulse`}></div>
          
          {/* Floating Eye Icons */}
          <div className="absolute top-32 right-1/4 animate-float">
            <EyeIcon className={`w-16 h-16 ${isDark ? 'text-cyan-400/30' : 'text-blue-400/50'}`} />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float-delayed">
            <MagnifyingGlassIcon className={`w-12 h-12 ${isDark ? 'text-blue-400/30' : 'text-indigo-400/50'}`} />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* View Mode Toggle */}
            <div className="flex justify-center mb-8">
              <button
                onClick={toggleViewMode}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${
                  isDark 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20' 
                    : 'bg-white/80 backdrop-blur-md border border-blue-200 text-blue-900 hover:bg-white/90'
                }`}
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                <span className="font-medium">
                  {isDark ? 'Mode Terang' : 'Mode Gelap'}
                </span>
              </button>
            </div>

            {/* Animated Eye Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                  isDark 
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500' 
                    : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                } animate-pulse shadow-2xl`}>
                  <EyeIcon className="w-16 h-16 text-white" />
                </div>
                <div className={`absolute inset-0 w-32 h-32 border-4 rounded-full animate-ping ${
                  isDark ? 'border-cyan-400/30' : 'border-blue-400/30'
                }`}></div>
              </div>
            </div>

            <h1 className={`text-6xl md:text-7xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-cyan-400 via-blue-400 to-indigo-400' 
                  : 'from-blue-600 via-indigo-600 to-purple-600'
              }`}>
                Klinik Mata
              </span>
            </h1>

            <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto ${
              isDark ? 'text-blue-100' : 'text-gray-700'
            }`}>
              Solusi lengkap untuk kesehatan mata Anda dengan teknologi canggih dan tim dokter spesialis mata berpengalaman
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: UserGroupIcon, value: '15.000+', label: 'Pasien Dilayani' },
                { icon: AcademicCapIcon, value: '98%', label: 'Tingkat Kesembuhan' },
                { icon: ClockIcon, value: '24/7', label: 'Layanan Darurat' },
                { icon: StarIcon, value: '4.9', label: 'Rating Kepuasan' }
              ].map((stat, index) => (
                <div key={index} className={`p-6 rounded-2xl backdrop-blur-md border ${
                  isDark 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/80 border-blue-200'
                } hover:scale-105 transition-all duration-300`}>
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <div className={`text-2xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</div>
                  <div className={`text-sm ${
                    isDark ? 'text-blue-200' : 'text-gray-600'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveService('konsultasi')}
                className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <EyeIcon className="w-5 h-5" />
                  Konsultasi Mata
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <button className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                isDark 
                  ? 'border-white/30 text-white hover:bg-white/10 backdrop-blur-md' 
                  : 'border-blue-300 text-blue-700 hover:bg-blue-50'
              }`}>
                <span className="flex items-center justify-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5" />
                  Buat Janji
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDark ? 'text-white/60' : 'text-gray-600'
        }`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Service Navigation */}
      <div className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        isDark 
          ? 'bg-slate-900/80 border-slate-700' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <div className={`flex space-x-1 p-1 rounded-xl ${
              isDark ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              {[
                { id: 'umum', label: 'Pemeriksaan Umum', icon: EyeIcon },
                { id: 'laser', label: 'Terapi Laser', icon: CpuChipIcon },
                { id: 'operasi', label: 'Operasi Mata', icon: BeakerIcon },
                { id: 'konsultasi', label: 'Konsultasi', icon: PhoneIcon }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveService(item.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeService === item.id
                      ? isDark 
                        ? 'bg-cyan-600 text-white shadow-lg' 
                        : 'bg-blue-600 text-white shadow-lg'
                      : isDark 
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-slate-700' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`min-h-screen transition-all duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 py-12">
          
          {/* Pemeriksaan Umum */}
          {activeService === 'umum' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-cyan-400 to-blue-400' 
                      : 'from-blue-600 to-indigo-600'
                  }`}>
                    Pemeriksaan Mata Komprehensif
                  </span>
                </h2>
                <p className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Deteksi dini dan pengobatan berbagai gangguan mata dengan teknologi terdepan
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Pemeriksaan Refraksi",
                    description: "Tes ketajaman penglihatan dan koreksi minus, plus, silinder",
                    icon: "👁️",
                    features: ["Auto Refraktometer", "Tes Snellen Chart", "Koreksi Kacamata", "Contact Lens Fitting"],
                    color: isDark ? "cyan" : "blue"
                  },
                  {
                    title: "Pemeriksaan Funduskopi",
                    description: "Pemeriksaan retina dan saraf optik untuk deteksi penyakit",
                    icon: "🔬",
                    features: ["Fundus Camera", "OCT Scanning", "Retinal Mapping", "Diabetic Screening"],
                    color: isDark ? "blue" : "indigo"
                  },
                  {
                    title: "Tes Tekanan Mata",
                    description: "Pemeriksaan glaukoma dan tekanan intraokular",
                    icon: "⚡",
                    features: ["Tonometry Test", "Glaukoma Screening", "Optic Nerve Analysis", "Visual Field Test"],
                    color: isDark ? "indigo" : "purple"
                  },
                  {
                    title: "Pemeriksaan Kornea",
                    description: "Analisis kesehatan kornea dan permukaan mata",
                    icon: "💎",
                    features: ["Topografi Kornea", "Pachymetry", "Keratoscopy", "Dry Eye Analysis"],
                    color: isDark ? "purple" : "pink"
                  },
                  {
                    title: "Tes Penglihatan Warna",
                    description: "Deteksi buta warna dan gangguan persepsi warna",
                    icon: "🌈",
                    features: ["Ishihara Test", "Farnsworth Test", "Color Vision Screening", "Professional Assessment"],
                    color: isDark ? "pink" : "rose"
                  },
                  {
                    title: "Konsultasi Anak",
                    description: "Pemeriksaan mata khusus untuk anak-anak",
                    icon: "👶",
                    features: ["Pediatric Optometry", "Lazy Eye Detection", "Vision Development", "School Vision Program"],
                    color: isDark ? "rose" : "orange"
                  }
                ].map((service, index) => (
                  <div key={index} className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50' 
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}>
                    <div className="p-8">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'
                      } transition-colors`}>
                        {service.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircleIcon className={`w-4 h-4 flex-shrink-0 ${
                              isDark ? 'text-cyan-400' : 'text-blue-500'
                            }`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Terapi Laser */}
          {activeService === 'laser' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-cyan-400 to-blue-400' 
                      : 'from-blue-600 to-indigo-600'
                  }`}>
                    Terapi Laser Mata Terdepan
                  </span>
                </h2>
                <p className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Teknologi laser terbaru untuk koreksi penglihatan dan pengobatan penyakit mata
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "LASIK Surgery",
                    description: "Koreksi mata minus, plus, dan silinder dengan teknologi laser femtosecond",
                    price: "Mulai dari Rp 15.000.000/mata",
                    benefits: [
                      "Bebas kacamata dalam 24 jam",
                      "Teknologi bladeless laser",
                      "Recovery time singkat",
                      "Tingkat keberhasilan 99%",
                      "Garansi hasil 1 tahun"
                    ],
                    suitable: "Minus 1-10D, Plus 1-6D, Silinder 1-5D"
                  },
                  {
                    title: "PRK (Photorefractive Keratectomy)",
                    description: "Alternatif LASIK untuk kornea tipis atau kondisi khusus",
                    price: "Mulai dari Rp 12.000.000/mata",
                    benefits: [
                      "Cocok untuk kornea tipis",
                      "Tidak ada sayatan kornea",
                      "Risiko komplikasi minimal",
                      "Hasil jangka panjang stabil",
                      "Suitable untuk profesi khusus"
                    ],
                    suitable: "Minus 1-8D, kondisi kornea khusus"
                  },
                  {
                    title: "Laser Retinal Treatment",
                    description: "Pengobatan laser untuk penyakit retina seperti diabetic retinopathy",
                    price: "Konsultasi untuk estimasi biaya",
                    benefits: [
                      "Mencegah kebutaan diabetik",
                      "Non-invasive treatment",
                      "Outpatient procedure",
                      "Preservasi penglihatan",
                      "Multiple session available"
                    ],
                    suitable: "Diabetic retinopathy, retinal tears"
                  },
                  {
                    title: "YAG Laser Capsulotomy",
                    description: "Pengobatan laser untuk katarak sekunder setelah operasi katarak",
                    price: "Mulai dari Rp 3.000.000/mata",
                    benefits: [
                      "Prosedur cepat 5-10 menit",
                      "Tanpa sayatan",
                      "Langsung bisa pulang",
                      "Perbaikan penglihatan instant",
                      "Risiko minimal"
                    ],
                    suitable: "Post-cataract surgery complications"
                  }
                ].map((treatment, index) => (
                  <div key={index} className={`rounded-2xl shadow-xl overflow-hidden border ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600' 
                      : 'bg-gradient-to-br from-white to-blue-50 border-blue-200'
                  }`}>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
                        {treatment.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {treatment.description}
                      </p>
                      
                      <div className={`p-4 rounded-xl mb-6 ${
                        isDark ? 'bg-cyan-900/30 border border-cyan-700/50' : 'bg-blue-100 border border-blue-200'
                      }`}>
                        <p className={`font-semibold ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>
                          💰 {treatment.price}
                        </p>
                        <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          <strong>Cocok untuk:</strong> {treatment.suitable}
                        </p>
                      </div>

                      <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Keunggulan:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {treatment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircleIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              isDark ? 'text-cyan-400' : 'text-blue-500'
                            }`} />
                            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500'
                      } transform hover:scale-105 shadow-lg`}>
                        Konsultasi Treatment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Operasi Mata */}
          {activeService === 'operasi' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-cyan-400 to-blue-400' 
                      : 'from-blue-600 to-indigo-600'
                  }`}>
                    Operasi Mata Spesialis
                  </span>
                </h2>
                <p className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Prosedur bedah mata dengan teknologi micro-surgery dan tim dokter berpengalaman
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    title: "Operasi Katarak",
                    description: "Phacoemulsifikasi dengan implantasi IOL premium",
                    icon: "🔸",
                    procedures: [
                      "Pemeriksaan pre-operasi lengkap",
                      "Phacoemulsification technique",
                      "Premium IOL implantation", 
                      "Post-operative care 3 bulan"
                    ],
                    duration: "30-45 menit",
                    recovery: "1-2 minggu",
                    price: "Rp 8.000.000 - 25.000.000"
                  },
                  {
                    title: "Operasi Glaukoma",
                    description: "Trabeculectomy dan drainage device implantation",
                    icon: "💧",
                    procedures: [
                      "Trabeculectomy microsurgery",
                      "Drainage device implant",
                      "Pressure monitoring system",
                      "Long-term follow up"
                    ],
                    duration: "60-90 menit", 
                    recovery: "2-4 minggu",
                    price: "Rp 15.000.000 - 30.000.000"
                  },
                  {
                    title: "Operasi Retina",
                    description: "Vitrectomy dan retinal detachment repair",
                    icon: "🌟",
                    procedures: [
                      "Pars plana vitrectomy",
                      "Retinal detachment repair",
                      "Epiretinal membrane peeling",
                      "Intensive monitoring"
                    ],
                    duration: "90-120 menit",
                    recovery: "4-6 minggu", 
                    price: "Rp 20.000.000 - 40.000.000"
                  },
                  {
                    title: "Operasi Pterygium",
                    description: "Eksisi pterygium dengan graft conjunctiva",
                    icon: "✂️",
                    procedures: [
                      "Pterygium excision",
                      "Conjunctival autograft",
                      "Anti-recurrence therapy",
                      "Cosmetic restoration"
                    ],
                    duration: "45-60 menit",
                    recovery: "1-2 minggu",
                    price: "Rp 5.000.000 - 12.000.000"
                  }
                ].map((surgery, index) => (
                  <div key={index} className={`rounded-2xl shadow-xl p-8 ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-4xl p-3 rounded-xl ${
                        isDark ? 'bg-cyan-900/50' : 'bg-blue-100'
                      }`}>
                        {surgery.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {surgery.title}
                        </h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {surgery.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
                        Prosedur:
                      </h4>
                      <ul className="space-y-2">
                        {surgery.procedures.map((procedure, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircleIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isDark ? 'text-cyan-400' : 'text-blue-500'
                            }`} />
                            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {procedure}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`grid grid-cols-3 gap-4 p-4 rounded-xl mb-6 ${
                      isDark ? 'bg-slate-900/50' : 'bg-gray-50'
                    }`}>
                      <div className="text-center">
                        <ClockIcon className={`w-5 h-5 mx-auto mb-1 ${
                          isDark ? 'text-cyan-400' : 'text-blue-600'
                        }`} />
                        <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Durasi
                        </p>
                        <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {surgery.duration}
                        </p>
                      </div>
                      <div className="text-center">
                        <ShieldCheckIcon className={`w-5 h-5 mx-auto mb-1 ${
                          isDark ? 'text-cyan-400' : 'text-blue-600'
                        }`} />
                        <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Recovery
                        </p>
                        <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {surgery.recovery}
                        </p>
                      </div>
                      <div className="text-center">
                        <span className={`text-lg mx-auto mb-1 block ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                          💰
                        </span>
                        <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Biaya
                        </p>
                        <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {surgery.price}
                        </p>
                      </div>
                    </div>

                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500'
                    } transform hover:scale-105 shadow-lg`}>
                      Konsultasi Operasi
                    </button>
                  </div>
                ))}
              </div>

              {/* Surgery Success Stories */}
              <div className={`rounded-2xl p-8 text-center ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-900 to-blue-900' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              } text-white`}>
                <h3 className="text-3xl font-bold mb-6">Tingkat Keberhasilan Operasi</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">99.2%</div>
                    <div className="text-blue-200">Operasi Katarak</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95.8%</div>
                    <div className="text-blue-200">Operasi Glaukoma</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">92.5%</div>
                    <div className="text-blue-200">Operasi Retina</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98.7%</div>
                    <div className="text-blue-200">Operasi Pterygium</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Konsultasi */}
          {activeService === 'konsultasi' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-cyan-400 to-blue-400' 
                      : 'from-blue-600 to-indigo-600'
                  }`}>
                    Konsultasi Mata Professional
                  </span>
                </h2>
                <p className={`text-xl max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Hubungi tim spesialis mata kami untuk konsultasi dan jadwal pemeriksaan
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className={`rounded-2xl p-8 shadow-xl ${
                    isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                  }`}>
                    <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Informasi Kontak
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isDark ? 'bg-cyan-900/50' : 'bg-blue-100'
                        }`}>
                          <PhoneIcon className={`w-6 h-6 ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Telepon Klinik Mata
                          </h4>
                          <p className={`font-medium ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`}>
                            (0751) 7051102 ext. 301
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Senin - Sabtu: 08:00 - 16:00
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isDark ? 'bg-red-900/50' : 'bg-red-100'
                        }`}>
                          <span className="text-red-600 text-xl">🚨</span>
                        </div>
                        <div>
                          <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Emergency Mata
                          </h4>
                          <p className="text-red-600 font-medium">(0751) 7051102</p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            24 Jam untuk trauma mata
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isDark ? 'bg-green-900/50' : 'bg-green-100'
                        }`}>
                          <span className="text-green-600 text-xl">💬</span>
                        </div>
                        <div>
                          <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            WhatsApp Konsultasi
                          </h4>
                          <p className="text-green-600 font-medium">+62 812-6754-3301</p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Chat dengan dokter mata
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isDark ? 'bg-purple-900/50' : 'bg-purple-100'
                        }`}>
                          <MapPinIcon className={`w-6 h-6 ${
                            isDark ? 'text-purple-400' : 'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Lokasi Klinik
                          </h4>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Lantai 2, Sayap Timur<br />
                            RSUD M. Natsir<br />
                            Jl. Dr. Ahmad Rivai No. 1<br />
                            Bukittinggi, Sumatera Barat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dokter Spesialis */}
                  <div className={`rounded-2xl p-8 shadow-xl ${
                    isDark 
                      ? 'bg-gradient-to-br from-cyan-900 to-blue-900' 
                      : 'bg-gradient-to-br from-blue-600 to-indigo-600'
                  } text-white`}>
                    <h3 className="text-2xl font-bold mb-6">Tim Dokter Spesialis</h3>
                    <div className="space-y-4">
                      {[
                        { nama: "dr. Ahmad Rivaldi, Sp.M", jadwal: "Senin, Rabu, Jumat: 08:00-14:00", spesialisasi: "Retina & Vitreous" },
                        { nama: "dr. Siti Rahma, Sp.M", jadwal: "Selasa, Kamis, Sabtu: 08:00-14:00", spesialisasi: "Kornea & Refraktif" },
                        { nama: "dr. Budi Santoso, Sp.M(K)", jadwal: "Senin - Kamis: 14:00-20:00", spesialisasi: "Glaukoma & Katarak" }
                      ].map((dokter, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="font-bold text-lg">{dokter.nama}</h4>
                          <p className="text-blue-200 text-sm">{dokter.spesialisasi}</p>
                          <p className="text-blue-100 text-sm">📅 {dokter.jadwal}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Konsultasi */}
                <div className={`rounded-2xl p-8 shadow-xl ${
                  isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                }`}>
                  <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Form Konsultasi Mata
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={`block font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-slate-700 border-slate-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        } focus:outline-none`}
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Nomor Telepon/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="noTelp"
                        value={formData.noTelp}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-slate-700 border-slate-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        } focus:outline-none`}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Jenis Keluhan Mata *
                      </label>
                      <select
                        name="jenisKeluhan"
                        value={formData.jenisKeluhan}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-slate-700 border-slate-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        } focus:outline-none`}
                      >
                        <option value="">Pilih jenis keluhan</option>
                        <option value="minus-plus">Mata Minus/Plus/Silinder</option>
                        <option value="katarak">Katarak</option>
                        <option value="glaukoma">Glaukoma</option>
                        <option value="retina">Gangguan Retina</option>
                        <option value="pterygium">Pterygium/Selaput Mata</option>
                        <option value="mata-merah">Mata Merah/Iritasi</option>
                        <option value="penglihatan-kabur">Penglihatan Kabur</option>
                        <option value="trauma">Trauma/Cedera Mata</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Tanggal Preferensi Konsultasi
                      </label>
                      <input
                        type="date"
                        name="tanggalPreferensi"
                        value={formData.tanggalPreferensi}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-slate-700 border-slate-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        } focus:outline-none`}
                      />
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Keluhan Detail (Opsional)
                      </label>
                      <textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                          isDark 
                            ? 'bg-slate-700 border-slate-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        } focus:outline-none`}
                        placeholder="Jelaskan keluhan mata Anda secara detail..."
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        isDark 
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/25' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/25'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <EyeIcon className="w-5 h-5" />
                        Kirim Konsultasi Mata
                      </span>
                    </button>

                    <p className={`text-sm text-center ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tim kami akan menghubungi Anda dalam 24 jam kerja
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`py-16 ${
          isDark 
            ? 'bg-gradient-to-r from-slate-800 to-slate-700' 
            : 'bg-gray-900'
        } text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jaga Kesehatan Mata Anda Mulai Hari Ini
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Mata adalah jendela dunia. Percayakan kesehatan mata Anda pada ahlinya dengan teknologi terdepan dan pelayanan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
              } shadow-lg`}>
                👁️ Periksa Mata Sekarang
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
                📞 Hubungi Dokter Mata
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </PageLayout>
  );
}
