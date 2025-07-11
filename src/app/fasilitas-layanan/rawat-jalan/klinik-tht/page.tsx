'use client';

import PageLayout from '@/components/PageLayout';
import { useState, useEffect } from 'react';
import { 
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MicrophoneIcon,
  NoSymbolIcon,
  CalendarDaysIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  HeartIcon,
  BoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function KlinikTHTPage() {
  const [activeTab, setActiveTab] = useState('telinga');
  const [soundWave, setSoundWave] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    noTelp: '',
    bagianKeluhan: '',
    jenisKeluhan: '',
    tanggalPreferensi: '',
    pesan: ''
  });

  // Sound wave animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSoundWave(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Permintaan konsultasi THT Anda telah diterima. Tim kami akan menghubungi Anda segera.');
    setFormData({ nama: '', noTelp: '', bagianKeluhan: '', jenisKeluhan: '', tanggalPreferensi: '', pesan: '' });
  };

  return (
    <PageLayout>
      {/* Hero Section with Sound Wave Animation */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 overflow-hidden">
        
        {/* Animated Sound Waves */}
        <div className="absolute inset-0">
          {/* Sound Wave Rings */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-orange-300/30 rounded-full transition-all duration-1000 ${
                soundWave ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
              }`}
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 text-orange-300/40 text-6xl animate-bounce">
            👂
          </div>
          <div className="absolute top-40 right-32 text-amber-400/50 text-4xl animate-pulse">
            👃
          </div>
          <div className="absolute bottom-40 left-1/4 text-yellow-500/40 text-5xl animate-bounce">
            👄
          </div>
          <div className="absolute bottom-20 right-20 text-orange-400/40 text-4xl animate-pulse">
            🔊
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Sound Wave Icon with Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                  {soundWave ? (
                    <SpeakerWaveIcon className="w-16 h-16 text-white animate-pulse" />
                  ) : (
                    <MicrophoneIcon className="w-16 h-16 text-white" />
                  )}
                </div>
                {/* Pulsing rings */}
                <div className="absolute inset-0 w-32 h-32 border-4 border-orange-400/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-32 h-32 border-2 border-amber-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Klinik THT
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Spesialis Telinga, Hidung, dan Tenggorokan dengan teknologi endoskopi modern dan tim dokter berpengalaman
            </p>

            {/* Interactive Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  icon: '👂', 
                  title: 'TELINGA', 
                  desc: 'Gangguan Pendengaran & Infeksi',
                  gradient: 'from-orange-400 to-red-400'
                },
                { 
                  icon: '👃', 
                  title: 'HIDUNG', 
                  desc: 'Sinusitis & Polip Hidung',
                  gradient: 'from-amber-400 to-orange-400'
                },
                { 
                  icon: '👄', 
                  title: 'TENGGOROKAN', 
                  desc: 'Tonsilitis & Gangguan Suara',
                  gradient: 'from-yellow-400 to-amber-400'
                }
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(service.title.toLowerCase())}
                  className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeTab === service.title.toLowerCase()
                      ? 'bg-white shadow-2xl border-2 border-orange-300'
                      : 'bg-white/80 backdrop-blur-sm shadow-lg border border-orange-200 hover:bg-white'
                  }`}
                >
                  <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    activeTab === service.title.toLowerCase()
                      ? 'text-orange-700'
                      : 'text-gray-900 group-hover:text-orange-600'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: UserGroupIcon, value: '8.500+', label: 'Pasien THT' },
                { icon: AcademicCapIcon, value: '96%', label: 'Tingkat Kesembuhan' },
                { icon: ClockIcon, value: '15+', label: 'Tahun Pengalaman' },
                { icon: StarIcon, value: '4.8', label: 'Rating Pelayanan' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-200">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <MicrophoneIcon className="w-5 h-5" />
                  Konsultasi THT
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-orange-300 text-orange-700 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5" />
                  Jadwal Dokter
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-600 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Content Sections based on Active Tab */}
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          
          {/* TELINGA Section */}
          {activeTab === 'telinga' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">👂</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Spesialis Gangguan Telinga
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Diagnosis dan pengobatan komprehensif untuk berbagai gangguan pendengaran dan kesehatan telinga
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Gangguan Pendengaran",
                    description: "Tes audiologi lengkap dan terapi rehabilitasi pendengaran",
                    icon: "🔇",
                    services: ["Tes Audiometry", "Tympanometry", "BERA Test", "Hearing Aid Fitting"],
                    price: "Mulai Rp 200.000"
                  },
                  {
                    title: "Infeksi Telinga",
                    description: "Pengobatan otitis media dan externa dengan terapi modern",
                    icon: "🦠",
                    services: ["Otoscopy", "Pembersihan Telinga", "Antibiotik Topikal", "Follow-up Care"],
                    price: "Mulai Rp 150.000"
                  },
                  {
                    title: "Tinnitus (Telinga Berdenging)",
                    description: "Terapi komprehensif untuk mengatasi telinga berdenging",
                    icon: "🔔",
                    services: ["Tinnitus Assessment", "Sound Therapy", "Counseling", "Masking Device"],
                    price: "Mulai Rp 300.000"
                  },
                  {
                    title: "Vertigo & Pusing",
                    description: "Diagnosis dan pengobatan gangguan keseimbangan",
                    icon: "🌀",
                    services: ["Vestibular Test", "BPPV Maneuver", "Medication", "Balance Training"],
                    price: "Mulai Rp 250.000"
                  },
                  {
                    title: "Kotoran Telinga (Serumen)",
                    description: "Pembersihan telinga professional dengan mikroskop",
                    icon: "🧽",
                    services: ["Ear Irrigation", "Suction Cleaning", "Endoscopic Removal", "Prevention Education"],
                    price: "Mulai Rp 100.000"
                  },
                  {
                    title: "Operasi Telinga",
                    description: "Bedah mikro telinga untuk berbagai kondisi",
                    icon: "⚕️",
                    services: ["Timpanoplasti", "Mastoidektomi", "Stapedektomi", "Miringoplasti"],
                    price: "Konsultasi untuk estimasi"
                  }
                ].map((service, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
                    <div className="p-6">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="bg-orange-50 rounded-xl p-4 mb-4">
                        <p className="text-orange-700 font-semibold text-sm mb-2">💰 {service.price}</p>
                        <ul className="space-y-1">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircleIcon className="w-3 h-3 text-orange-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                        Konsultasi Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HIDUNG Section */}
          {activeTab === 'hidung' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">👃</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Spesialis Gangguan Hidung & Sinus
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Solusi lengkap untuk masalah pernapasan, sinusitis, dan gangguan penciuman
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Sinusitis Kronis",
                    description: "Pengobatan komprehensif sinusitis dengan teknologi endoskopi",
                    icon: "🌪️",
                    treatments: [
                      "Endoscopic Sinus Surgery (ESS)",
                      "Balloon Sinuplasty",
                      "Nasal Irrigation Therapy",
                      "Antibiotik targeted therapy",
                      "Steroid nasal spray",
                      "Follow-up endoscopy"
                    ],
                    benefits: [
                      "Mengatasi hidung tersumbat kronis",
                      "Memperbaiki kualitas tidur",
                      "Mengurangi sakit kepala sinus",
                      "Mencegah komplikasi"
                    ],
                    price: "Operasi: Rp 15.000.000 - 25.000.000"
                  },
                  {
                    title: "Polip Hidung",
                    description: "Pengangkatan polip hidung dengan teknik endoskopi minimal invasif",
                    icon: "🔬",
                    treatments: [
                      "Nasal Endoscopy",
                      "Polypectomy",
                      "Ethmoidectomy",
                      "Medical therapy",
                      "Steroid treatment",
                      "Regular monitoring"
                    ],
                    benefits: [
                      "Memperbaiki pernapasan",
                      "Mengembalikan penciuman",
                      "Mencegah infeksi berulang",
                      "Meningkatkan kualitas hidup"
                    ],
                    price: "Operasi: Rp 12.000.000 - 20.000.000"
                  },
                  {
                    title: "Deviasi Septum",
                    description: "Koreksi septum hidung untuk memperbaiki pernapasan",
                    icon: "⚖️",
                    treatments: [
                      "Septoplasty",
                      "Rhinoplasty functional",
                      "Turbinate reduction",
                      "Computer-assisted surgery",
                      "Post-operative care",
                      "Breathing exercises"
                    ],
                    benefits: [
                      "Pernapasan lebih lancar",
                      "Mengurangi mendengkur",
                      "Memperbaiki kualitas tidur",
                      "Hasil estetik natural"
                    ],
                    price: "Operasi: Rp 18.000.000 - 30.000.000"
                  },
                  {
                    title: "Rhinitis Alergi",
                    description: "Manajemen komprehensif alergi hidung dan rinitis",
                    icon: "🤧",
                    treatments: [
                      "Allergy skin test",
                      "Immunotherapy",
                      "Antihistamin therapy",
                      "Nasal corticosteroids",
                      "Environmental control",
                      "Lifestyle modification"
                    ],
                    benefits: [
                      "Kontrol gejala jangka panjang",
                      "Mengurangi ketergantungan obat",
                      "Mencegah komplikasi asma",
                      "Kualitas hidup lebih baik"
                    ],
                    price: "Terapi: Rp 500.000 - 2.000.000/bulan"
                  }
                ].map((condition, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl overflow-hidden border border-amber-200">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{condition.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-amber-800">{condition.title}</h3>
                          <p className="text-gray-600">{condition.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-amber-700 mb-3">🔧 Prosedur:</h4>
                          <ul className="space-y-2">
                            {condition.treatments.map((treatment, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircleIcon className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{treatment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-amber-700 mb-3">⭐ Manfaat:</h4>
                          <ul className="space-y-2">
                            {condition.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <HeartIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-amber-100 rounded-xl p-4 mb-6">
                        <p className="text-amber-800 font-semibold text-center">{condition.price}</p>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                        Konsultasi Spesialis
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TENGGOROKAN Section */}
          {activeTab === 'tenggorokan' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">👄</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Spesialis Gangguan Tenggorokan & Suara
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Perawatan profesional untuk masalah tenggorokan, suara, dan gangguan menelan
                </p>
              </div>

              <div className="space-y-8">
                {/* Voice Disorders */}
                <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
                    🎤 Gangguan Suara (Voice Disorders)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        condition: "Polip Pita Suara",
                        symptoms: ["Suara serak berkepanjangan", "Suara pecah saat berbicara", "Mudah lelah saat berbicara"],
                        treatment: "Microsurgery + Voice Therapy"
                      },
                      {
                        condition: "Nodul Pita Suara", 
                        symptoms: ["Suara kasar dan bernapas", "Kehilangan range suara", "Ketidaknyamanan tenggorokan"],
                        treatment: "Voice Therapy + Lifestyle Changes"
                      },
                      {
                        condition: "Kelumpuhan Pita Suara",
                        symptoms: ["Suara sangat lemah", "Kesulitan menelan", "Sesak napas ringan"],
                        treatment: "Injection Laryngoplasty"
                      }
                    ].map((disorder, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                        <h4 className="font-bold text-gray-900 mb-3">{disorder.condition}</h4>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Gejala:</p>
                          <ul className="space-y-1">
                            {disorder.symptoms.map((symptom, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <BoltIcon className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-1" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-yellow-800">
                            💊 {disorder.treatment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Throat Infections */}
                <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                    🦠 Infeksi Tenggorokan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Tonsilitis Kronis",
                        description: "Infeksi berulang pada amandel yang memerlukan tindakan khusus",
                        procedures: [
                          "Tonsillectomy (pengangkatan amandel)",
                          "Coblation tonsillectomy (minimal bleeding)",
                          "Antibiotik therapy",
                          "Pain management"
                        ],
                        recovery: "7-14 hari",
                        price: "Rp 8.000.000 - 15.000.000"
                      },
                      {
                        title: "Faringitis & Laringitis",
                        description: "Peradangan tenggorokan dan kotak suara akut maupun kronis",
                        procedures: [
                          "Endoscopic examination",
                          "Kultur bakteri",
                          "Anti-inflammatory therapy",
                          "Voice rest program"
                        ],
                        recovery: "3-7 hari",
                        price: "Rp 300.000 - 800.000"
                      }
                    ].map((infection, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{infection.title}</h4>
                        <p className="text-gray-600 mb-4">{infection.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Prosedur:</h5>
                          <ul className="space-y-2">
                            {infection.procedures.map((procedure, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircleIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{procedure}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-red-800">
                              ⏱️ Recovery: {infection.recovery}
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-red-800">
                              💰 {infection.price}
                            </p>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                          Konsultasi Sekarang
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sleep Disorders */}
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
                    😴 Gangguan Tidur THT
                  </h3>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Sleep Apnea & Mendengkur</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-purple-700 mb-3">Diagnosis:</h5>
                        <ul className="space-y-2">
                          {[
                            "Sleep study (Polysomnography)",
                            "Nasal endoscopy",
                            "Cephalometric analysis",
                            "Obstruction site evaluation"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <EyeIcon className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 mb-3">Treatment Options:</h5>
                        <ul className="space-y-2">
                          {[
                            "UPPP (Uvulopalatopharyngoplasty)",
                            "Radiofrequency ablation",
                            "CPAP therapy guidance",
                            "Oral appliance fitting"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircleIcon className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <p className="text-purple-800 font-semibold text-center">
                        💰 Konsultasi: Rp 300.000 | Sleep Study: Rp 2.500.000 | Operasi: Rp 15.000.000+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact & Appointment Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Jadwal Konsultasi THT Anda</h3>
            <p className="text-xl mb-8 text-orange-100">
              Tim spesialis THT kami siap membantu mengatasi masalah telinga, hidung, dan tenggorokan Anda
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <PhoneIcon className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Hotline THT</h4>
                <p className="text-orange-200">(0751) 7051102 ext. 302</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MicrophoneIcon className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">WhatsApp</h4>
                <p className="text-orange-200">+62 812-6754-3302</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPinIcon className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Lokasi</h4>
                <p className="text-orange-200">Lantai 2, Sayap Utara</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
                🩺 Buat Janji Sekarang
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                📋 Konsultasi Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Sound Wave Animation */}
      <style jsx>{`
        @keyframes soundWave {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-sound-wave {
          animation: soundWave 2s ease-in-out infinite;
        }
      `}</style>
    </PageLayout>
  );
}
