'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
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
  ShieldCheckIcon,
  CheckCircleIcon,
  HomeIcon,
  TvIcon,
  WifiIcon,
  PlayIcon,
  CameraIcon,
  SunIcon
} from '@heroicons/react/24/outline';

export default function RawatInapAnakPage() {
  const [activeTab, setActiveTab] = useState('fasilitas');

  const fasilitasAnak = [
    {
      nama: 'Playground Indoor',
      deskripsi: 'Area bermain aman dengan mainan edukatif dan terapi',
      icon: PlayIcon,
      color: 'text-blue-500'
    },
    {
      nama: 'Ruang Kelas',
      deskripsi: 'Ruang belajar untuk anak yang dirawat jangka panjang',
      icon: AcademicCapIcon,
      color: 'text-green-500'
    },
    {
      nama: 'Family Room',
      deskripsi: 'Ruang keluarga yang nyaman untuk pendampingan',
      icon: HomeIcon,
      color: 'text-purple-500'
    },
    {
      nama: 'Entertainment Center',
      deskripsi: 'TV, games, dan hiburan ramah anak',
      icon: TvIcon,
      color: 'text-orange-500'
    }
  ];

  const layananKhusus = [
    {
      nama: 'Pediatric Intensive Care',
      deskripsi: 'Perawatan intensif khusus anak dengan monitoring 24/7',
      durasi: 'Sesuai kondisi medis',
      dokter: 'Dr. Andi Pediatric, Sp.A',
      fasilitas: ['Ventilator Pediatrik', 'Monitor Vital', 'Nurse 1:1', 'Family Support']
    },
    {
      nama: 'Neonatal Care',
      deskripsi: 'Perawatan bayi baru lahir dan prematur',
      durasi: 'Sesuai usia gestasi',
      dokter: 'Dr. Sari Neonatal, Sp.A',
      fasilitas: ['Incubator', 'Phototherapy', 'Breast Pump', 'Kangaroo Care']
    },
    {
      nama: 'Child Life Program',
      deskripsi: 'Program terapi bermain dan psikologi anak',
      durasi: 'Selama perawatan',
      dokter: 'Tim Child Life Specialist',
      fasilitas: ['Terapi Bermain', 'Art Therapy', 'Music Therapy', 'Storytelling']
    }
  ];

  const dokterAnak = [
    {
      nama: 'dr. Ahmad Pediatric, Sp.A',
      spesialisasi: 'Spesialis Anak',
      subspesialisasi: 'Pediatric Intensive Care',
      jadwal: 'Senin - Jumat: 08:00-16:00',
      pengalaman: '15 tahun',
      pendidikan: 'FK UI, PPDS Anak RSCM'
    },
    {
      nama: 'dr. Sari Neonatal, Sp.A',
      spesialisasi: 'Spesialis Anak',
      subspesialisasi: 'Neonatologi',
      jadwal: 'Selasa - Sabtu: 07:00-15:00',
      pengalaman: '12 tahun',
      pendidikan: 'FK UNAND, Fellowship Neonatologi'
    },
    {
      nama: 'dr. Budi Growth, Sp.A',
      spesialisasi: 'Spesialis Anak',
      subspesialisasi: 'Tumbuh Kembang',
      jadwal: 'Senin - Kamis: 14:00-20:00',
      pengalaman: '10 tahun',
      pendidikan: 'FK USU, PPDS Anak RS Hasan Sadikin'
    }
  ];

  const kelasKamar = [
    {
      kelas: 'VIP Anak',
      deskripsi: 'Kamar pribadi dengan tema kartun',
      fasilitas: ['1 Tempat Tidur Anak', 'Tempat Tidur Pendamping', 'AC', 'TV Kartun', 'PlayStation', 'Kulkas Mini', 'Kamar Mandi Dalam', 'Playground Mini'],
      tarif: 'Rp 750.000 - 1.200.000/hari',
      color: 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    {
      kelas: 'Kelas I Anak',
      deskripsi: 'Kamar semi-private ramah anak',
      fasilitas: ['1 Tempat Tidur Anak', 'Kursi Pendamping', 'AC', 'TV Kartun', 'Mainan Edukatif', 'Nurse Call', 'Kamar Mandi Dalam'],
      tarif: 'Rp 450.000 - 800.000/hari',
      color: 'border-blue-400 bg-gradient-to-br from-blue-50 to-sky-50'
    },
    {
      kelas: 'Kelas II Anak',
      deskripsi: 'Kamar bersama dengan desain ceria',
      fasilitas: ['2 Tempat Tidur Anak', 'Kursi Pendamping', 'AC', 'TV Bersama', 'Reading Corner', 'Nurse Call'],
      tarif: 'Rp 300.000 - 550.000/hari',
      color: 'border-green-400 bg-gradient-to-br from-green-50 to-emerald-50'
    }
  ];

  const stats = [
    { label: 'Tempat Tidur', value: '24', icon: HomeIcon },
    { label: 'Dokter Spesialis', value: '4', icon: UserGroupIcon },
    { label: 'Tingkat Kesembuhan', value: '98%', icon: HeartIcon },
    { label: 'Family Satisfaction', value: '99%', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section - Kids Theme */}
      <div className="relative bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-20 overflow-hidden">
        {/* Colorful Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-300/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-32 h-32 bg-red-300/30 rounded-full animate-bounce delay-1500"></div>
        </div>

        {/* Floating Toys/Icons */}
        <div className="absolute top-20 right-1/4 text-6xl animate-bounce delay-300">🧸</div>
        <div className="absolute bottom-24 left-1/5 text-5xl animate-pulse delay-700">🎨</div>
        <div className="absolute top-1/3 left-10 text-4xl animate-bounce delay-1200">🚂</div>
        <div className="absolute bottom-1/3 right-16 text-5xl animate-pulse delay-900">🎈</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <UserGroupIcon className="w-16 h-16 text-yellow-200 animate-bounce" />
                <span className="text-6xl animate-pulse">👶</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ruang Rawat Inap <span className="text-yellow-200">Anak</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Ruang perawatan khusus anak yang nyaman, aman, dan ramah anak dengan fasilitas bermain dan edukasi
            </p>
            
            {/* Fun Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
                  <stat.icon className="w-6 h-6 text-yellow-200 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-purple-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                🏥 Tour Virtual Ruangan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                👨‍⚕️ Konsultasi Dokter Anak
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
              { id: 'fasilitas', label: 'Fasilitas Anak', icon: PlayIcon },
              { id: 'layanan', label: 'Layanan Khusus', icon: HeartIcon },
              { id: 'dokter', label: 'Dokter Spesialis', icon: UserGroupIcon },
              { id: 'kamar', label: 'Tipe Kamar', icon: HomeIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-500 hover:bg-purple-50'
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
          
          {/* Fasilitas Anak */}
          {activeTab === 'fasilitas' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Fasilitas <span className="text-purple-600">Ramah Anak</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Lingkungan yang dirancang khusus untuk kenyamanan dan kebahagiaan anak selama perawatan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {fasilitasAnak.map((fasilitas, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100">
                      <fasilitas.icon className={`w-12 h-12 ${fasilitas.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{fasilitas.nama}</h3>
                      <p className="text-gray-600 text-center leading-relaxed">{fasilitas.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Child-Friendly Environment */}
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Lingkungan Ramah Anak</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Desain Ceria</h4>
                    <p className="text-gray-600">Dinding bergambar kartun dan warna-warna cerah yang menenangkan</p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧸</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Mainan Edukatif</h4>
                    <p className="text-gray-600">Mainan aman dan edukatif untuk terapi bermain</p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Reading Corner</h4>
                    <p className="text-gray-600">Sudut baca dengan buku cerita anak-anak</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layanan Khusus */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Layanan <span className="text-purple-600">Khusus Anak</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pelayanan medis terspesialisasi untuk berbagai kondisi kesehatan anak
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {layananKhusus.map((layanan, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{layanan.nama}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{layanan.deskripsi}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-purple-700 mb-1">Durasi Perawatan:</p>
                        <p className="text-sm text-purple-600">{layanan.durasi}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-blue-700 mb-1">Dokter Penanggung Jawab:</p>
                        <p className="text-sm text-blue-600">{layanan.dokter}</p>
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

          {/* Dokter Spesialis */}
          {activeTab === 'dokter' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Tim <span className="text-purple-600">Dokter Spesialis Anak</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Dokter spesialis anak berpengalaman dengan dedikasi tinggi untuk kesehatan buah hati Anda
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {dokterAnak.map((dokter, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <UserGroupIcon className="w-12 h-12 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{dokter.nama}</h3>
                      <p className="text-purple-600 font-semibold mb-1">{dokter.spesialisasi}</p>
                      <p className="text-sm text-gray-500">{dokter.subspesialisasi}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <ClockIcon className="w-4 h-4 text-purple-600" />
                          <span className="font-medium text-gray-700">Jadwal Praktik</span>
                        </div>
                        <p className="text-gray-600">{dokter.jadwal}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <StarIcon className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-700">Pengalaman</span>
                        </div>
                        <p className="text-gray-600">{dokter.pengalaman}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <AcademicCapIcon className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-gray-700">Pendidikan</span>
                        </div>
                        <p className="text-gray-600">{dokter.pendidikan}</p>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors duration-300">
                      👶 Konsultasi Dokter
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tipe Kamar */}
          {activeTab === 'kamar' && (
            <div className="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Tipe <span className="text-purple-600">Kamar Anak</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pilihan kamar yang dirancang khusus untuk kenyamanan anak dan keluarga
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {kelasKamar.map((kelas, index) => (
                  <div key={index} className={`border-2 ${kelas.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{index === 0 ? '👑' : index === 1 ? '🌟' : '🏠'}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">{kelas.kelas}</div>
                      <p className="text-gray-600 text-sm mb-4">{kelas.deskripsi}</p>
                      <div className="text-xl font-bold text-purple-600">{kelas.tarif}</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                      {kelas.fasilitas.map((fasilitas, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{fasilitas}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors duration-300">
                      🏥 Pilih Kamar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">👶💖</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Berikan Perawatan Terbaik untuk Buah Hati
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Tim medis spesialis anak siap memberikan perawatan terbaik dengan kasih sayang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg">
              🏥 Reservasi Kamar Anak
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              👨‍⚕️ Konsultasi Dokter Anak
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
