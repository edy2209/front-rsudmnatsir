'use client';

import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import { 
  ShieldCheckIcon,
  EyeSlashIcon,
  HeartIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  LockClosedIcon,
  StarIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export default function KlinikVCTPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [showPrivacyInfo, setShowPrivacyInfo] = useState(false);

  const layananVCT = [
    {
      nama: 'HIV Testing',
      deskripsi: 'Tes HIV dengan konseling sebelum dan sesudah tes',
      icon: ShieldCheckIcon,
      color: 'text-purple-600',
      durasi: '30 menit',
      konfidensial: true
    },
    {
      nama: 'Hepatitis Testing',
      deskripsi: 'Pemeriksaan hepatitis B dan C',
      icon: HeartIcon,
      color: 'text-red-600',
      durasi: '20 menit',
      konfidensial: true
    },
    {
      nama: 'Syphilis Testing',
      deskripsi: 'Deteksi dan diagnosis sifilis',
      icon: CheckCircleIcon,
      color: 'text-blue-600',
      durasi: '15 menit',
      konfidensial: true
    },
    {
      nama: 'Konseling Risiko',
      deskripsi: 'Edukasi pencegahan dan pengurangan risiko',
      icon: InformationCircleIcon,
      color: 'text-green-600',
      durasi: '45 menit',
      konfidensial: true
    }
  ];

  const layananKhusus = [
    {
      nama: 'Pre-Exposure Prophylaxis (PrEP)',
      deskripsi: 'Pencegahan HIV untuk individu berisiko tinggi',
      target: 'Individu berisiko tinggi',
      manfaat: ['Pencegahan 99% efektif', 'Konsultasi rutin', 'Monitoring kesehatan']
    },
    {
      nama: 'Post-Exposure Prophylaxis (PEP)',
      deskripsi: 'Pengobatan darurat setelah paparan HIV',
      target: 'Paparan dalam 72 jam',
      manfaat: ['Pengobatan darurat', 'Follow-up ketat', 'Dukungan psikologis']
    },
    {
      nama: 'Support Group',
      deskripsi: 'Kelompok dukungan untuk ODHA dan keluarga',
      target: 'ODHA dan keluarga',
      manfaat: ['Dukungan emosional', 'Sharing pengalaman', 'Edukasi berkelanjutan']
    }
  ];

  const prosedurTesting = [
    {
      step: 1,
      title: 'Registrasi Anonim',
      description: 'Pendaftaran tanpa identitas asli untuk menjaga privasi',
      icon: EyeSlashIcon
    },
    {
      step: 2,
      title: 'Pre-Test Counseling',
      description: 'Konseling sebelum tes untuk persiapan mental',
      icon: InformationCircleIcon
    },
    {
      step: 3,
      title: 'Pengambilan Sampel',
      description: 'Pengambilan darah dengan prosedur steril',
      icon: HeartIcon
    },
    {
      step: 4,
      title: 'Post-Test Counseling',
      description: 'Konseling hasil tes dan langkah selanjutnya',
      icon: CheckCircleIcon
    }
  ];

  const stats = [
    { label: 'Tes per Bulan', value: '500+', icon: UserGroupIcon },
    { label: 'Tingkat Akurasi', value: '99.9%', icon: CheckCircleIcon },
    { label: 'Konselor Terlatih', value: '8', icon: AcademicCapIcon },
    { label: 'Tahun Pengalaman', value: '15+', icon: StarIcon }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Privacy Theme */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 overflow-hidden">
        {/* Privacy Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-8 h-full">
            {[...Array(36)].map((_, i) => (
              <LockClosedIcon key={i} className="w-8 h-8 text-white animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
        </div>
        
        {/* Shield Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <ShieldCheckIcon className="w-96 h-96 text-white animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <ShieldCheckIcon className="w-16 h-16 text-purple-300 animate-pulse" />
                <EyeSlashIcon className="w-12 h-12 text-indigo-300 animate-bounce" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Klinik <span className="text-purple-300">VCT</span>
            </h1>
            <p className="text-lg text-purple-100 mb-2">Voluntary Counseling and Testing</p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Layanan tes HIV dan konseling sukarela yang aman, rahasia, dan profesional
            </p>
            
            {/* Privacy Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <LockClosedIcon className="w-5 h-5 text-purple-300 mr-2" />
              <span className="text-sm font-medium text-purple-100">100% Konfidensial & Anonim</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Konsultasi Sekarang
              </button>
              <button 
                onClick={() => setShowPrivacyInfo(!showPrivacyInfo)}
                className="border-2 border-purple-300 text-purple-300 px-8 py-4 rounded-full font-semibold hover:bg-purple-300 hover:text-purple-900 transition-all duration-300"
              >
                Kebijakan Privasi
              </button>
            </div>

            {/* Privacy Info Popup */}
            {showPrivacyInfo && (
              <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left">
                <h3 className="text-xl font-bold text-purple-200 mb-4">Jaminan Privasi Kami:</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Registrasi menggunakan kode anonim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Data tidak disimpan dengan identitas asli</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Konseling dalam ruang pribadi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Tim medis terikat rahasia medis</span>
                  </li>
                </ul>
              </div>
            )}
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
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            {[
              { id: 'layanan', label: 'Layanan VCT', icon: ShieldCheckIcon },
              { id: 'prosedur', label: 'Prosedur', icon: DocumentTextIcon },
              { id: 'khusus', label: 'Layanan Khusus', icon: HeartIcon },
              { id: 'kontak', label: 'Kontak', icon: PhoneIcon }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
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
          
          {/* Layanan Section */}
          {activeTab === 'layanan' && (
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-purple-600">VCT</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Layanan tes dan konseling sukarela dengan jaminan kerahasiaan penuh
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {layananVCT.map((layanan, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-4">
                        <layanan.icon className={`w-12 h-12 ${layanan.color} group-hover:scale-110 transition-transform duration-300`} />
                        {layanan.konfidensial && (
                          <div className="bg-purple-100 p-1 rounded-full">
                            <LockClosedIcon className="w-4 h-4 text-purple-600" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{layanan.nama}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{layanan.deskripsi}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4" />
                        <span>Durasi: {layanan.durasi}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prosedur Section */}
          {activeTab === 'prosedur' && (
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Prosedur <span className="text-purple-600">Testing</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Langkah-langkah tes VCT yang aman dan terjamin kerahasiaannya
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {prosedurTesting.map((prosedur, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-purple-100 p-6 rounded-full w-fit mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                        <prosedur.icon className="w-12 h-12 text-purple-600" />
                      </div>
                      <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                        {prosedur.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{prosedur.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{prosedur.description}</p>
                    </div>
                  ))}
                </div>

                {/* Important Notes */}
                <div className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ExclamationTriangleIcon className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-800">Informasi Penting</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Persiapan Sebelum Tes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Tidak perlu puasa</li>
                        <li>• Bawa identitas diri</li>
                        <li>• Siapkan mental untuk hasil</li>
                        <li>• Pertimbangkan periode jendela</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Setelah Tes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hasil tersedia dalam 30 menit</li>
                        <li>• Konseling lanjutan tersedia</li>
                        <li>• Rujukan jika diperlukan</li>
                        <li>• Follow-up berkala</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layanan Khusus Section */}
          {activeTab === 'khusus' && (
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Layanan <span className="text-purple-600">Khusus</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Program khusus untuk pencegahan dan dukungan komprehensif
              </p>
              <div className="grid lg:grid-cols-3 gap-8">
                {layananKhusus.map((layanan, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{layanan.nama}</h3>
                    <p className="text-gray-600 mb-4">{layanan.deskripsi}</p>
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-purple-700 mb-1">Target:</p>
                      <p className="text-sm text-purple-600">{layanan.target}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Manfaat:</p>
                      <ul className="space-y-1">
                        {layanan.manfaat.map((manfaat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-purple-600" />
                            <span>{manfaat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kontak Section */}
          {activeTab === 'kontak' && (
            <div className="fade-in">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Hubungi <span className="text-purple-600">Kami</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Tim konselor VCT siap membantu Anda dengan profesional dan menjaga kerahasiaan.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <PhoneIcon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Hotline VCT</p>
                        <p className="text-gray-600">(0751) 32082 ext. 301</p>
                        <p className="text-xs text-gray-500">24 jam, 7 hari seminggu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <EnvelopeIcon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email Konsultasi</p>
                        <p className="text-gray-600">vct@rsudmnatsir.sumbar.go.id</p>
                        <p className="text-xs text-gray-500">Respon dalam 24 jam</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPinIcon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Lokasi</p>
                        <p className="text-gray-600">Lantai 1, Gedung Khusus VCT</p>
                        <p className="text-xs text-gray-500">Akses terpisah untuk privasi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <ClockIcon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Jam Operasional</p>
                        <p className="text-gray-600">Senin - Jumat: 08:00 - 20:00</p>
                        <p className="text-gray-600">Sabtu: 08:00 - 16:00</p>
                        <p className="text-xs text-gray-500">Minggu: Emergency konsultasi</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anonymous Consultation Form */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <EyeSlashIcon className="w-6 h-6 text-purple-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Konsultasi Anonim</h3>
                  </div>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kode Anonim (opsional)</label>
                      <input type="text" placeholder="Buat kode unik Anda" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Umur</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Pilih rentang umur</option>
                        <option>15-20 tahun</option>
                        <option>21-30 tahun</option>
                        <option>31-40 tahun</option>
                        <option>41+ tahun</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Konsultasi</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Pilih jenis konsultasi</option>
                        <option>Tes HIV</option>
                        <option>Informasi pencegahan</option>
                        <option>Konseling pre-tes</option>
                        <option>Dukungan emosional</option>
                        <option>Informasi PrEP/PEP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pertanyaan/Kekhawatiran</label>
                      <textarea rows={4} placeholder="Sampaikan kekhawatiran Anda..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                      Kirim Konsultasi Anonim
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      🔒 Semua informasi akan dijaga kerahasiaannya
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheckIcon className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ketahui Status Kesehatan Anda
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Tes VCT adalah langkah pertama untuk hidup sehat dan melindungi orang yang Anda sayangi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Daftar Tes Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Konsultasi Dulu
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
