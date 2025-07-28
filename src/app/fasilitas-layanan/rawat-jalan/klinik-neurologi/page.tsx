'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  BoltIcon,
  PuzzlePieceIcon,
  CpuChipIcon,
  HeartIcon,
  EyeIcon,
  HandRaisedIcon,
  CalendarDaysIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function KlinikNeurologiPage() {
  const [activeCondition, setActiveCondition] = useState('stroke');
  const [brainActivity, setBrainActivity] = useState(true);
  const [formData, setFormData] = useState({
    nama: '',
    noTelp: '',
    jenisKeluhan: '',
    gejalaTambahan: '',
    riwayatPenyakit: '',
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
    alert('Terima kasih! Permintaan konsultasi neurologi Anda telah diterima. Tim kami akan menghubungi Anda segera.');
    setFormData({ nama: '', noTelp: '', jenisKeluhan: '', gejalaTambahan: '', riwayatPenyakit: '', tanggalPreferensi: '', pesan: '' });
  };

  // Brain network animation simulation
  const toggleBrainActivity = () => {
    setBrainActivity(!brainActivity);
  };

  return (
    <PageLayout>
      {/* Hero Section with Neural Network Theme */}
      <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden -mt-20">
        
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          {/* Neural nodes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-400 rounded-full transition-all duration-1000 ${
                brainActivity ? 'animate-pulse' : 'opacity-50'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
          
          {/* Brain wave patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              {[...Array(5)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,${200 + i * 100} Q250,${150 + i * 100} 500,${200 + i * 100} T1000,${200 + i * 100}`}
                  stroke="url(#brainGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={brainActivity ? 'animate-pulse' : ''}
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
              <defs>
                <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            
            {/* Interactive Brain Icon */}
            <div className="flex justify-center mb-8">
              <button
                onClick={toggleBrainActivity}
                className="relative group"
              >
                <div className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 ${
                  brainActivity 
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-500 shadow-2xl shadow-purple-500/50' 
                    : 'bg-gradient-to-br from-gray-600 to-gray-700 shadow-xl'
                }`}>
                  {brainActivity ? (
                    <BoltIcon className="w-20 h-20 text-white animate-pulse" />
                  ) : (
                    <PuzzlePieceIcon className="w-20 h-20 text-white" />
                  )}
                </div>
                
                {/* Pulsing neural connections */}
                {brainActivity && (
                  <>
                    <div className="absolute inset-0 w-40 h-40 border-4 border-purple-400/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-40 h-40 border-2 border-indigo-400/20 rounded-full animate-pulse"></div>
                  </>
                )}
                
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-purple-200 opacity-75">
                  Klik untuk aktivasi neural
                </div>
              </button>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Klinik Neurologi
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Spesialis gangguan sistem saraf dengan teknologi neuroimaging canggih dan pendekatan terapi terdepan
            </p>

            {/* Emergency Alert */}
            <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-red-500/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <ExclamationTriangleIcon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold">Stroke Emergency</h3>
              </div>
              <p className="text-red-100 mb-4">
                Jika mengalami gejala stroke (F.A.S.T: Face drooping, Arm weakness, Speech difficulty, Time to call), segera hubungi:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:0751-7051102" className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors">
                  📞 (0751) 7051102
                </a>
                <a href="tel:081267543303" className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors">
                  🚑 Ambulans: 0812-6754-3303
                </a>
              </div>
            </div>

            {/* Neurological Conditions Quick Access */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { id: 'stroke', icon: '🧠', label: 'Stroke', color: 'red' },
                { id: 'epilepsi', icon: '⚡', label: 'Epilepsi', color: 'yellow' },
                { id: 'migrain', icon: '🤕', label: 'Migrain', color: 'purple' },
                { id: 'parkinson', icon: '🤲', label: 'Parkinson', color: 'blue' }
              ].map((condition) => (
                <button
                  key={condition.id}
                  onClick={() => setActiveCondition(condition.id)}
                  className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeCondition === condition.id
                      ? 'bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="text-3xl mb-2">{condition.icon}</div>
                  <div className="text-sm font-medium">{condition.label}</div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: UserGroupIcon, value: '3.200+', label: 'Pasien Neurologi' },
                { icon: ClockIcon, value: '24/7', label: 'Stroke Unit' },
                { icon: AcademicCapIcon, value: '94%', label: 'Recovery Rate' },
                { icon: StarIcon, value: '4.9', label: 'Patient Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-300" />
                  <div className="text-xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <BoltIcon className="w-5 h-5" />
                  Konsultasi Neurologi
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-purple-300 text-purple-100 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-800/30 backdrop-blur-sm transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <ChartBarIcon className="w-5 h-5" />
                  Tes Neurologi
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-300 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Content Sections */}
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16">
          
          {/* Condition-specific Content */}
          {activeCondition === 'stroke' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">🧠</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Stroke Center
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Unit stroke terintegrasi dengan golden hour protocol untuk penanganan stroke akut dan rehabilitasi komprehensif
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* F.A.S.T Protocol */}
                <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                    🚨 Protokol F.A.S.T
                  </h3>
                  <div className="space-y-4">
                    {[
                      { letter: 'F', word: 'FACE', desc: 'Wajah mencong, senyum tidak simetris' },
                      { letter: 'A', word: 'ARM', desc: 'Lengan lemah, tidak bisa diangkat' },
                      { letter: 'S', word: 'SPEECH', desc: 'Bicara pelo, tidak jelas' },
                      { letter: 'T', word: 'TIME', desc: 'Waktu kritis - segera ke RS!' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {item.letter}
                        </div>
                        <div>
                          <h4 className="font-bold text-red-800">{item.word}</h4>
                          <p className="text-red-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Timeline */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Timeline Penanganan</h3>
                  <div className="space-y-4">
                    {[
                      { time: '0-4.5 jam', treatment: 'Trombolitik IV (rt-PA)', success: '85%' },
                      { time: '0-6 jam', treatment: 'Mechanical Thrombectomy', success: '90%' },
                      { time: '1-7 hari', treatment: 'Intensive Stroke Care', success: '75%' },
                      { time: '1-3 bulan', treatment: 'Rehabilitasi Neurologi', success: '60%' }
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                        <div className="w-16 text-center">
                          <div className="text-sm font-bold text-purple-700">{phase.time}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{phase.treatment}</h4>
                          <p className="text-sm text-gray-600">Success rate: {phase.success}</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCondition === 'epilepsi' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">⚡</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Epilepsi Center
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pusat diagnosis dan pengobatan epilepsi dengan EEG monitoring dan terapi anti-epileptik terkini
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Diagnosis Epilepsi",
                    icon: "📊",
                    procedures: [
                      "EEG (Electroencephalography)",
                      "Video EEG Monitoring",
                      "MRI Brain dengan Epilepsi Protocol",
                      "SPECT Ictal/Interictal",
                      "Neuropsychological Assessment"
                    ],
                    price: "Paket lengkap: Rp 8.000.000"
                  },
                  {
                    title: "Terapi Anti-Epileptik",
                    icon: "💊",
                    procedures: [
                      "Monoterapi AED",
                      "Politerapi AED",
                      "Therapeutic Drug Monitoring",
                      "Ketogenic Diet Therapy",
                      "VNS (Vagus Nerve Stimulation)"
                    ],
                    price: "Mulai dari Rp 500.000/bulan"
                  },
                  {
                    title: "Bedah Epilepsi",
                    icon: "🔬",
                    procedures: [
                      "Anterior Temporal Lobectomy",
                      "Focal Cortical Resection",
                      "Corpus Callosotomy",
                      "Multiple Subpial Transection",
                      "Responsive Neurostimulation"
                    ],
                    price: "Rp 150.000.000 - 300.000.000"
                  },
                  {
                    title: "Rehabilitasi Epilepsi",
                    icon: "🧘",
                    procedures: [
                      "Cognitive Behavioral Therapy",
                      "Occupational Therapy",
                      "Speech Therapy",
                      "Social Skills Training",
                      "Family Education Program"
                    ],
                    price: "Rp 300.000 - 800.000/sesi"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-yellow-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <h3 className="text-xl font-bold text-yellow-800">{service.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.procedures.map((procedure, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <BoltIcon className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{procedure}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-yellow-100 rounded-xl p-4 mb-6">
                      <p className="text-yellow-800 font-semibold text-center">{service.price}</p>
                    </div>

                    <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
                      Konsultasi Sekarang
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCondition === 'migrain' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">🤕</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Headache & Migraine Center
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Diagnosis dan terapi comprehensive untuk berbagai jenis sakit kepala dan migrain
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-800 mb-8 text-center">Klasifikasi Sakit Kepala</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      type: "Migrain",
                      characteristics: [
                        "Nyeri berdenyut unilateral",
                        "Disertai mual/muntah",
                        "Fotofobia/fonofobia",
                        "Aura visual (kadang)",
                        "Berlangsung 4-72 jam"
                      ],
                      treatment: "Triptan, NSAIDs, Preventif",
                      color: "purple"
                    },
                    {
                      type: "Tension Headache",
                      characteristics: [
                        "Nyeri seperti ditekan",
                        "Bilateral",
                        "Intensitas ringan-sedang",
                        "Tidak ada mual/muntah",
                        "Berlangsung 30 menit-7 hari"
                      ],
                      treatment: "Analgesik, Muscle relaxant",
                      color: "blue"
                    },
                    {
                      type: "Cluster Headache",
                      characteristics: [
                        "Nyeri sangat hebat",
                        "Unilateral orbital",
                        "Berkerumun dalam periode",
                        "Disertai lakrimasi",
                        "Berlangsung 15-180 menit"
                      ],
                      treatment: "Oksigen, Sumatriptan",
                      color: "red"
                    }
                  ].map((headache, index) => (
                    <div key={index} className={`bg-gradient-to-br from-${headache.color}-50 to-${headache.color}-100 rounded-xl p-6 border border-${headache.color}-200`}>
                      <h4 className={`text-lg font-bold text-${headache.color}-800 mb-4`}>{headache.type}</h4>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-700 mb-2">Karakteristik:</h5>
                        <ul className="space-y-1">
                          {headache.characteristics.map((char, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircleIcon className={`w-3 h-3 text-${headache.color}-600 flex-shrink-0 mt-1`} />
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`bg-${headache.color}-200 rounded-lg p-3`}>
                        <p className={`text-${headache.color}-800 font-medium text-sm`}>
                          💊 {headache.treatment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Treatments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-6">Terapi Preventif Migrain</h3>
                  <ul className="space-y-3">
                    {[
                      "Beta-blockers (Propranolol)",
                      "Antikonvulsan (Topiramate)",
                      "Antidepresan (Amitriptyline)",
                      "CGRP Inhibitors (Erenumab)",
                      "Botox Injection"
                    ].map((treatment, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <ShieldCheckIcon className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-6">Terapi Non-Farmakologi</h3>
                  <ul className="space-y-3">
                    {[
                      "Biofeedback Therapy",
                      "Cognitive Behavioral Therapy",
                      "Acupuncture",
                      "Lifestyle Modification",
                      "Sleep Hygiene Education"
                    ].map((therapy, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <HeartIcon className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-700">{therapy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeCondition === 'parkinson' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">🤲</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Movement Disorder Center
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pusat diagnosis dan terapi untuk Parkinson dan gangguan gerakan lainnya
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Stadium Parkinson & Penanganan</h3>
                <div className="space-y-6">
                  {[
                    {
                      stage: "Stadium 1 (Ringan)",
                      symptoms: "Tremor unilateral, bradikinesia ringan",
                      treatment: "Levodopa/Carbidopa, Dopamine agonist",
                      prognosis: "Excellent dengan terapi dini"
                    },
                    {
                      stage: "Stadium 2 (Sedang)",
                      symptoms: "Gejala bilateral, gangguan postural",
                      treatment: "Kombinasi obat, Fisioterapi intensif",
                      prognosis: "Good dengan manajemen optimal"
                    },
                    {
                      stage: "Stadium 3 (Berat)",
                      symptoms: "Instabilitas postural, freezing",
                      treatment: "Adjustment medication, Occupational therapy",
                      prognosis: "Fair dengan support komprehensif"
                    },
                    {
                      stage: "Stadium 4-5 (Severe)",
                      symptoms: "Ketergantungan aktivitas harian",
                      treatment: "DBS (Deep Brain Stimulation), Care support",
                      prognosis: "Symptomatic improvement possible"
                    }
                  ].map((stage, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">{stage.stage}</h4>
                          <div className={`w-full h-2 bg-blue-200 rounded-full`}>
                            <div 
                              className="h-2 bg-blue-600 rounded-full" 
                              style={{ width: `${(index + 1) * 20}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-1">Gejala:</h5>
                          <p className="text-sm text-gray-600">{stage.symptoms}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-1">Terapi:</h5>
                          <p className="text-sm text-gray-600">{stage.treatment}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-1">Prognosis:</h5>
                          <p className="text-sm text-gray-600">{stage.prognosis}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Treatments */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Deep Brain Stimulation",
                    description: "Terapi stimulasi otak dalam untuk Parkinson advanced",
                    icon: "🧠",
                    benefits: [
                      "Mengurangi tremor 70-90%",
                      "Memperbaiki mobilitas",
                      "Mengurangi dosis obat",
                      "Kualitas hidup lebih baik"
                    ],
                    price: "Rp 800.000.000 - 1.200.000.000"
                  },
                  {
                    title: "Fisioterapi Spesialis",
                    description: "Program rehabilitasi gerakan untuk Parkinson",
                    icon: "🏃",
                    benefits: [
                      "LSVT BIG therapy",
                      "Balance training",
                      "Gait training",
                      "Flexibility exercises"
                    ],
                    price: "Rp 300.000 - 500.000/sesi"
                  },
                  {
                    title: "Speech Therapy",
                    description: "Terapi wicara untuk dysarthria Parkinson",
                    icon: "🗣️",
                    benefits: [
                      "LSVT LOUD therapy",
                      "Voice amplification",
                      "Articulation training",
                      "Swallowing therapy"
                    ],
                    price: "Rp 250.000 - 400.000/sesi"
                  }
                ].map((treatment, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-cyan-200">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-3">{treatment.icon}</div>
                      <h3 className="text-xl font-bold text-cyan-800">{treatment.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{treatment.description}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-cyan-100 rounded-xl p-4 mb-4">
                      <p className="text-cyan-800 font-semibold text-center text-sm">{treatment.price}</p>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Konsultasi
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact & Form Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Doctor Information */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Tim Spesialis Neurologi</h3>
              <div className="space-y-6">
                {[
                  {
                    nama: "dr. Andi Pratama, Sp.N, Ph.D",
                    spesialisasi: "Stroke & Vascular Neurology",
                    jadwal: "Senin, Rabu, Jumat: 08:00-14:00",
                    pengalaman: "15+ tahun"
                  },
                  {
                    nama: "dr. Sari Dewi, Sp.N(K)",
                    spesialisasi: "Epilepsi & Clinical Neurophysiology", 
                    jadwal: "Selasa, Kamis, Sabtu: 09:00-15:00",
                    pengalaman: "12+ tahun"
                  },
                  {
                    nama: "dr. Budi Santoso, Sp.N, M.Kes",
                    spesialisasi: "Movement Disorders & Parkinson",
                    jadwal: "Senin - Kamis: 15:00-20:00",
                    pengalaman: "10+ tahun"
                  }
                ].map((dokter, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-bold text-lg">{dokter.nama}</h4>
                    <p className="text-purple-200 text-sm">{dokter.spesialisasi}</p>
                    <p className="text-purple-100 text-sm">📅 {dokter.jadwal}</p>
                    <p className="text-purple-100 text-sm">🎓 {dokter.pengalaman}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <PhoneIcon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Neurologi</p>
                  <p className="text-purple-200 text-xs">(0751) 7051102 ext. 303</p>
                </div>
                <div className="text-center">
                  <ExclamationTriangleIcon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Stroke Unit</p>
                  <p className="text-purple-200 text-xs">24/7 Emergency</p>
                </div>
                <div className="text-center">
                  <MapPinIcon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Lokasi</p>
                  <p className="text-purple-200 text-xs">Lantai 3, Sayap Selatan</p>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Form Konsultasi Neurologi</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nomor Telepon/WhatsApp *</label>
                  <input
                    type="tel"
                    name="noTelp"
                    value={formData.noTelp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Jenis Keluhan Neurologi *</label>
                  <select
                    name="jenisKeluhan"
                    value={formData.jenisKeluhan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                  >
                    <option value="">Pilih jenis keluhan</option>
                    <option value="stroke">Gejala Stroke (F.A.S.T)</option>
                    <option value="kejang">Kejang/Epilepsi</option>
                    <option value="sakit-kepala">Sakit Kepala/Migrain</option>
                    <option value="tremor">Tremor/Parkinson</option>
                    <option value="kelemahan">Kelemahan Anggota Gerak</option>
                    <option value="vertigo">Vertigo/Pusing</option>
                    <option value="gangguan-ingatan">Gangguan Ingatan</option>
                    <option value="neuropati">Neuropati/Kebas</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gejala Tambahan</label>
                  <input
                    type="text"
                    name="gejalaTambahan"
                    value={formData.gejalaTambahan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                    placeholder="Contoh: mual, muntah, kesemutan"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Riwayat Penyakit</label>
                  <input
                    type="text"
                    name="riwayatPenyakit"
                    value={formData.riwayatPenyakit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                    placeholder="Hipertensi, diabetes, dll"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tanggal Preferensi Konsultasi</label>
                  <input
                    type="date"
                    name="tanggalPreferensi"
                    value={formData.tanggalPreferensi}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Keluhan Detail (Opsional)</label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all resize-none"
                    placeholder="Jelaskan keluhan neurologis Anda secara detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <BoltIcon className="w-5 h-5" />
                    Kirim Konsultasi Neurologi
                  </span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Tim neurologi kami akan menghubungi Anda dalam 24 jam kerja
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🚨 STROKE EMERGENCY</h3>
          <p className="text-lg mb-6">Golden Hour = Life Saved. Setiap menit sangat berharga!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0751-7051102" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
              📞 Hubungi Sekarang
            </a>
            <a href="tel:081267543303" className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-colors">
              🚑 Call Ambulans
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
