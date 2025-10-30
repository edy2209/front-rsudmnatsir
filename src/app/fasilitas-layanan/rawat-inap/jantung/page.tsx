'use client';

import PageLayout from '@/components/PageLayout';
import { useState, useEffect } from 'react';
import { 
  HeartIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  StarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  HomeIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  BeakerIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

export default function RawatInapJantungPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [heartbeat, setHeartbeat] = useState(0);

  // Heartbeat animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat(prev => (prev + 1) % 2);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const fasilitasJantung = [
    {
      nama: 'Cardiac Monitor',
      deskripsi: 'Monitoring EKG dan vital signs 24/7',
      icon: HeartIcon,
      color: 'text-red-500'
    },
    {
      nama: 'Defibrillator',
      deskripsi: 'Alat kejut jantung untuk emergency',
      icon: BoltIcon,
      color: 'text-yellow-500'
    },
    {
      nama: 'Echocardiography',
      deskripsi: 'USG jantung untuk monitoring',
      icon: CameraIcon,
      color: 'text-blue-500'
    },
    {
      nama: 'Cardiac Lab',
      deskripsi: 'Laboratorium khusus jantung',
      icon: BeakerIcon,
      color: 'text-green-500'
    }
  ];

  const layananJantung = [
    {
      nama: 'Post Cardiac Surgery Care',
      deskripsi: 'Perawatan pascaoperasi jantung dengan monitoring intensif',
      durasi: '3-7 hari',
      spesialisasi: 'Bedah Jantung & Intensivis',
      fasilitas: ['ICU Cardiac', 'Ventilator', 'Monitor Invasif', 'Nurse 1:1']
    },
    {
      nama: 'Heart Failure Management',
      deskripsi: 'Manajemen gagal jantung komprehensif',
      durasi: '5-10 hari',
      spesialisasi: 'Kardiologi Intervensi',
      fasilitas: ['Telemetri', 'Infusion Pump', 'Oxygen Therapy', 'Rehabilitation']
    },
    {
      nama: 'Arrhythmia Monitoring',
      deskripsi: 'Monitoring dan terapi gangguan irama jantung',
      durasi: '2-5 hari',
      spesialisasi: 'Elektrofisiologi',
      fasilitas: ['Holter Monitor', 'Pacemaker', 'Cardiac Ablation', 'Implant Monitor']
    }
  ];

  const dokterJantung = [
    {
      nama: 'dr. Ahmad Cardiac, Sp.JP(K)',
      spesialisasi: 'Konsultan Kardiologi Intervensi',
      subspesialisasi: 'Kateterisasi Jantung',
      jadwal: 'Senin - Kamis: 07:00-15:00',
      pengalaman: '20 tahun',
      sertifikasi: 'Fellow Interventional Cardiology'
    },
    {
      nama: 'dr. Sari Heart, Sp.JP',
      spesialisasi: 'Spesialis Jantung',
      subspesialisasi: 'Heart Failure & Transplant',
      jadwal: 'Selasa - Jumat: 14:00-20:00',
      pengalaman: '15 tahun',
      sertifikasi: 'Heart Failure Specialist'
    },
    {
      nama: 'dr. Budi Rhythm, Sp.JP(K)',
      spesialisasi: 'Konsultan Elektrofisiologi',
      subspesialisasi: 'Arrhythmia & Pacemaker',
      jadwal: 'Senin - Rabu: 08:00-16:00',
      pengalaman: '18 tahun',
      sertifikasi: 'Electrophysiology Fellowship'
    }
  ];

  const kelasKamarJantung = [
    {
      kelas: 'Cardiac VIP',
      deskripsi: 'Kamar VIP dengan monitoring jantung canggih',
      fasilitas: ['Telemetri 24/7', 'Nurse Dedicated', 'Family Room', 'Cardiac Monitor', 'Emergency Button', 'AC Premium', 'TV 42"', 'Mini Bar'],
      tarif: 'Rp 1.200.000 - 2.000.000/hari',
      color: 'border-red-400 bg-gradient-to-br from-red-50 to-pink-50'
    },
    {
      kelas: 'Cardiac Care Unit',
      deskripsi: 'Unit perawatan jantung intermediate',
      fasilitas: ['Central Monitor', 'Nurse Call', 'Oxygen Central', 'Defibrillator', 'Emergency Access', 'AC', 'TV', 'Pendamping'],
      tarif: 'Rp 800.000 - 1.500.000/hari',
      color: 'border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      kelas: 'Post-Op Cardiac',
      deskripsi: 'Ruang pemulihan pascaoperasi jantung',
      fasilitas: ['Step-down Monitor', 'Wound Care', 'Physiotherapy', 'Nutrition Support', 'Family Support', 'Nurse Call', 'AC'],
      tarif: 'Rp 600.000 - 1.200.000/hari',
      color: 'border-green-400 bg-gradient-to-br from-green-50 to-emerald-50'
    }
  ];

  const emergencyProtocol = [
    {
      kondisi: 'Cardiac Arrest',
      waktu: '< 2 menit',
      tindakan: 'CPR + Defibrillator',
      tim: 'Code Blue Team'
    },
    {
      kondisi: 'MI Akut',
      waktu: '< 5 menit',
      tindakan: 'Primary PCI',
      tim: 'Cath Lab Team'
    },
    {
      kondisi: 'Arrhythmia',
      waktu: '< 3 menit',
      tindakan: 'Cardioversion',
      tim: 'Cardiac Team'
    },
    {
      kondisi: 'Heart Failure',
      waktu: '< 10 menit',
      tindakan: 'Stabilisasi',
      tim: 'Heart Team'
    }
  ];

  const stats = [
    { label: 'Tempat Tidur', value: '16', icon: HomeIcon },
    { label: 'Survival Rate', value: '98%', icon: HeartIcon },
    { label: 'Dokter Spesialis', value: '5', icon: UserGroupIcon },
    { label: 'Emergency Response', value: '<2 min', icon: ExclamationTriangleIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section - Cardiac Theme */}
      <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-rose-700 py-20 overflow-hidden -mt-20">
        {/* Heartbeat Lines Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
            <path d="M0 200 L100 200 L120 150 L140 250 L160 100 L180 300 L200 200 L800 200" stroke="white" strokeWidth="4"/>
            <path d="M0 180 L150 180 L170 130 L190 230 L210 80 L230 280 L250 180 L800 180" stroke="white" strokeWidth="3"/>
            <path d="M0 220 L80 220 L100 170 L120 270 L140 120 L160 320 L180 220 L800 220" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Heartbeat Animation */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${heartbeat ? 'scale-110' : 'scale-100'}`}>
          <HeartIcon className="w-96 h-96 text-white/5" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-pink-200/30 text-6xl animate-pulse">💓</div>
        <div className="absolute bottom-20 left-20 text-red-200/30 text-5xl animate-bounce">🫀</div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <HeartIcon className={`w-16 h-16 text-pink-200 transition-all duration-300 ${heartbeat ? 'scale-110 text-white' : 'scale-100'}`} />
                <span className="text-6xl animate-pulse">❤️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ruang Rawat Inap <span className="text-pink-200">Jantung</span>
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Unit perawatan jantung dengan monitoring 24/7, tim spesialis berpengalaman, dan teknologi kardiovaskular terdepan
            </p>
            
            {/* Emergency Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
                  <stat.icon className="w-6 h-6 text-pink-200 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-red-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                💓 Emergency Cardiac
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                🏥 Konsultasi Jantung
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex justify-center space-x-8 py-4">
            {[
              { id: 'overview', label: 'Overview', icon: HeartIcon },
              { id: 'fasilitas', label: 'Fasilitas Cardiac', icon: ShieldCheckIcon },
              { id: 'layanan', label: 'Layanan Khusus', icon: DocumentTextIcon },
              { id: 'emergency', label: 'Emergency Protocol', icon: ExclamationTriangleIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Cardiac Care <span className="text-red-600">Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pusat perawatan jantung dengan standar internasional dan teknologi kardiovaskular terkini
                </p>
              </div>

              {/* Tipe Kamar Jantung */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {kelasKamarJantung.map((kelas, index) => (
                  <div key={index} className={`border-2 ${kelas.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{index === 0 ? '💎' : index === 1 ? '🏥' : '🔄'}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">{kelas.kelas}</div>
                      <p className="text-gray-600 text-sm mb-4">{kelas.deskripsi}</p>
                      <div className="text-xl font-bold text-red-600">{kelas.tarif}</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                      {kelas.fasilitas.map((fasilitas, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <HeartIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{fasilitas}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors duration-300">
                      💓 Reservasi Kamar
                    </button>
                  </div>
                ))}
              </div>

              {/* Tim Dokter */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Tim Dokter Spesialis Jantung</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  {dokterJantung.map((dokter, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <UserGroupIcon className="w-10 h-10 text-red-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{dokter.nama}</h4>
                        <p className="text-red-600 font-semibold text-sm mb-1">{dokter.spesialisasi}</p>
                        <p className="text-xs text-gray-500">{dokter.subspesialisasi}</p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-red-50 p-2 rounded">
                          <span className="font-medium">Jadwal:</span> {dokter.jadwal}
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <span className="font-medium">Pengalaman:</span> {dokter.pengalaman}
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <span className="font-medium">Sertifikasi:</span> {dokter.sertifikasi}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fasilitas Cardiac */}
          {activeTab === 'fasilitas' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Fasilitas <span className="text-red-600">Kardiovaskular</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Teknologi medis terdepan untuk diagnosis dan perawatan penyakit jantung
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {fasilitasJantung.map((fasilitas, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100">
                      <fasilitas.icon className={`w-12 h-12 ${fasilitas.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{fasilitas.nama}</h3>
                      <p className="text-gray-600 text-center leading-relaxed">{fasilitas.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Layanan Khusus */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Layanan <span className="text-red-600">Spesialis Jantung</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pelayanan komprehensif untuk berbagai kondisi kardiovaskular
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {layananJantung.map((layanan, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{layanan.nama}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{layanan.deskripsi}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-red-700 mb-1">Durasi Perawatan:</p>
                        <p className="text-sm text-red-600">{layanan.durasi}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-blue-700 mb-1">Spesialisasi:</p>
                        <p className="text-sm text-blue-600">{layanan.spesialisasi}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Fasilitas Khusus:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {layanan.fasilitas.map((fasilitas, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-700 text-center">
                              {fasilitas}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Emergency Protocol */}
          {activeTab === 'emergency' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Emergency <span className="text-red-600">Protocol</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Protokol tanggap darurat untuk kondisi jantung kritis dengan waktu respon tercepat
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {emergencyProtocol.map((protocol, index) => (
                  <div key={index} className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
                      <h3 className="text-lg font-bold text-gray-800">{protocol.kondisi}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="text-xs font-semibold text-red-700">Response Time:</p>
                        <p className="text-lg font-bold text-red-600">{protocol.waktu}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-xs font-semibold text-blue-700">Tindakan:</p>
                        <p className="text-sm text-blue-600">{protocol.tindakan}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-xs font-semibold text-green-700">Tim:</p>
                        <p className="text-sm text-green-600">{protocol.tim}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white text-center">
                <ExclamationTriangleIcon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Emergency Cardiac Hotline</h3>
                <p className="text-xl mb-6">Hubungi segera untuk kondisi jantung darurat</p>
                <div className="text-3xl font-bold">(0751) 32082 - CODE RED</div>
                <p className="text-sm mt-2 opacity-90">24 Jam, 7 Hari Seminggu</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className={`text-6xl mb-6 transition-all duration-300 ${heartbeat ? 'scale-110' : 'scale-100'}`}>💓</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jantung Sehat, Hidup Berkualitas
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Tim spesialis jantung terbaik siap memberikan perawatan dengan teknologi terdepan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-lg">
              💓 Emergency Cardiac
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              🏥 Jadwal Konsultasi
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
