'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  SpeakerWaveIcon,
  ClockIcon,
  HeartIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChartBarIcon,
  UserIcon,
  UserGroupIcon,
  ArrowPathIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  CogIcon,
  StarIcon,
  EyeIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export default function RawatInapTHTPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const tabMenu = [
    { id: 'layanan', label: 'Layanan THT', icon: SpeakerWaveIcon },
    { id: 'ruangan', label: 'Ruang Perawatan', icon: HomeIcon },
    { id: 'jadwal', label: 'Jadwal Dokter', icon: CalendarIcon },
    { id: 'prosedur', label: 'Prosedur & Kontak', icon: DocumentTextIcon }
  ];

  const layananTHT = [
    {
      id: 1,
      name: 'Gangguan Pendengaran',
      description: 'Pemeriksaan dan perawatan komprehensif untuk masalah pendengaran',
      icon: SpeakerWaveIcon,
      treatments: ['Audiometri', 'Timpanometri', 'Tinnitus Management', 'Hearing Aid'],
      severity: 'Ringan - Berat'
    },
    {
      id: 2,
      name: 'Gangguan Hidung & Sinus',
      description: 'Penanganan masalah pernapasan dan infeksi sinus',
      icon: MagnifyingGlassIcon,
      treatments: ['Sinusitis', 'Rinoplasti', 'Septoplasti', 'Endoskopi Sinus'],
      severity: 'Ringan - Sedang'
    },
    {
      id: 3,
      name: 'Gangguan Tenggorokan',
      description: 'Perawatan masalah tenggorokan dan suara',
      icon: HeartIcon,
      treatments: ['Tonsilektomi', 'Laringoskopi', 'Voice Therapy', 'Polipektomi'],
      severity: 'Ringan - Berat'
    },
    {
      id: 4,
      name: 'Bedah Mikro THT',
      description: 'Operasi minimal invasif dengan teknologi modern',
      icon: CogIcon,
      treatments: ['Mikrolaringoskopi', 'Timpanoplasti', 'Mastoidektomi', 'FESS'],
      severity: 'Sedang - Berat'
    }
  ];

  const ruangPerawatan = [
    {
      id: 1,
      name: 'Ruang THT Akut',
      capacity: '8 bed',
      facilities: ['Monitoring 24/7', 'Suction Unit', 'Nebulizer', 'Emergency Call'],
      kelas: 'Kelas I - III',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      name: 'Ruang Post-Operasi THT',
      capacity: '6 bed',
      facilities: ['Recovery Monitor', 'Oxygen Support', 'Pain Management', 'Vital Signs'],
      kelas: 'Kelas I - II',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Ruang Observasi',
      capacity: '4 bed',
      facilities: ['24h Observation', 'Emergency Kit', 'Communication', 'Family Area'],
      kelas: 'Kelas II - III',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      name: 'Ruang Isolasi THT',
      capacity: '2 bed',
      facilities: ['Air Filtration', 'Negative Pressure', 'PPE Station', 'Isolation Protocol'],
      kelas: 'Kelas I',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const jadwalDokter = [
    {
      nama: 'Dr. Ahmad Hidayat, Sp.THT-KL',
      spesialisasi: 'THT Bedah & Laringologi',
      jadwal: {
        senin: '08:00-12:00',
        selasa: '14:00-17:00',
        rabu: '08:00-12:00',
        kamis: 'Operasi',
        jumat: '08:00-11:00',
        sabtu: 'Emergency Call'
      },
      pengalaman: '15 tahun',
      keahlian: ['Bedah Endoskopi', 'Mikrolaringoskopi', 'Cochlear Implant']
    },
    {
      nama: 'Dr. Siti Nurhaliza, Sp.THT-KL',
      spesialisasi: 'THT Anak & Audiologi',
      jadwal: {
        senin: '13:00-17:00',
        selasa: '08:00-12:00',
        rabu: '14:00-17:00',
        kamis: '08:00-12:00',
        jumat: 'Operasi',
        sabtu: '08:00-12:00'
      },
      pengalaman: '12 tahun',
      keahlian: ['Audiologi Anak', 'Sleep Apnea', 'Hearing Aid Fitting']
    }
  ];

  const stats = [
    { label: 'Pasien per Bulan', value: '450+', icon: UserGroupIcon },
    { label: 'Tingkat Kesembuhan', value: '95%', icon: ChartBarIcon },
    { label: 'Operasi Berhasil', value: '98%', icon: ShieldCheckIcon },
    { label: 'Dokter Spesialis', value: '3', icon: UserIcon }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16 -mt-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <SpeakerWaveIcon className="h-12 w-12 mr-4" />
                  <span className="text-xl font-semibold">Rawat Inap THT</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Perawatan THT
                  <span className="block text-yellow-300">Terpadu & Modern</span>
                </h1>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Pelayanan rawat inap THT dengan teknologi terdepan dan tim dokter spesialis 
                  berpengalaman untuk gangguan telinga, hidung, dan tenggorokan.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Jadwal Konsultasi
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                    Info Layanan
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-orange-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex overflow-x-auto">
              {tabMenu.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
          {activeTab === 'layanan' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan THT Unggulan</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Pelayanan komprehensif untuk berbagai gangguan telinga, hidung, dan tenggorokan 
                  dengan pendekatan medis terkini.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {layananTHT.map((layanan) => (
                  <div 
                    key={layanan.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => setSelectedService(selectedService === layanan.id ? null : layanan.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-orange-100 rounded-lg mr-4">
                          <layanan.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{layanan.name}</h3>
                          <span className="text-sm text-orange-600 font-medium">{layanan.severity}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{layanan.description}</p>
                      
                      {selectedService === layanan.id && (
                        <div className="border-t pt-4 space-y-3">
                          <h4 className="font-semibold text-gray-800">Prosedur Perawatan:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {layanan.treatments.map((treatment, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                                {treatment}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ruangan' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ruang Perawatan THT</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fasilitas ruang perawatan yang dirancang khusus untuk kenyamanan dan pemulihan 
                  pasien THT dengan berbagai tingkat kebutuhan medis.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {ruangPerawatan.map((ruang) => (
                  <div key={ruang.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className={`h-32 bg-gradient-to-r ${ruang.color} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-6 text-white">
                        <h3 className="text-xl font-bold">{ruang.name}</h3>
                        <p className="text-orange-100">{ruang.capacity}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          {ruang.kelas}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {ruang.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {facility}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'jadwal' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Jadwal Dokter Spesialis THT</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tim dokter spesialis THT berpengalaman dengan jadwal praktik yang fleksibel 
                  untuk melayani kebutuhan perawatan Anda.
                </p>
              </div>

              <div className="space-y-6">
                {jadwalDokter.map((dokter, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{dokter.nama}</h3>
                          <p className="text-orange-100 mb-1">{dokter.spesialisasi}</p>
                          <p className="text-orange-200 text-sm">Pengalaman: {dokter.pengalaman}</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <div className="flex flex-wrap gap-2">
                            {dokter.keahlian.map((skill, idx) => (
                              <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Jadwal Praktik:</h4>
                      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {Object.entries(dokter.jadwal).map(([hari, jam]) => (
                          <div key={hari} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="font-medium text-gray-800 capitalize mb-1">{hari}</div>
                            <div className="text-sm text-orange-600 font-medium">{jam}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'prosedur' && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Prosedur Rawat Inap */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-6">
                    <DocumentTextIcon className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Prosedur Rawat Inap</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Konsultasi dan pemeriksaan dokter spesialis THT',
                      'Persiapan pre-operasi (jika diperlukan)',
                      'Pemeriksaan penunjang (lab, radiologi)',
                      'Observasi dan monitoring kondisi pasien',
                      'Perawatan post-operasi intensif',
                      'Rehabilitasi dan fisioterapi THT',
                      'Evaluasi berkala dan discharge planning'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                          <CheckCircleIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Informasi Penting */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-6">
                    <InformationCircleIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Informasi Penting</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Jam Besuk:</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Pagi: 10:00 - 12:00 WIB</p>
                        <p>Sore: 16:00 - 18:00 WIB</p>
                        <p className="text-sm text-red-600">*Maksimal 2 pengunjung per pasien</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Persiapan Rawat Inap:</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>• Bawa kartu identitas dan BPJS</p>
                        <p>• Hasil pemeriksaan sebelumnya</p>
                        <p>• Obat-obatan rutin</p>
                        <p>• Perlengkapan pribadi secukupnya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontak & Lokasi */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
                  <p className="text-orange-100">
                    Tim kami siap membantu Anda 24/7 untuk informasi dan konsultasi
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-lg p-6">
                    <PhoneIcon className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h4 className="font-semibold mb-2">Hotline THT</h4>
                    <p className="text-orange-100">(0751) 7051234</p>
                    <p className="text-orange-200 text-sm">24 Jam</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <MapPinIcon className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h4 className="font-semibold mb-2">Lokasi</h4>
                    <p className="text-orange-100">Lantai 3, Gedung Rawat Inap</p>
                    <p className="text-orange-200 text-sm">RSUD M. Natsir</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <ClockIcon className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h4 className="font-semibold mb-2">Jam Layanan</h4>
                    <p className="text-orange-100">24 Jam</p>
                    <p className="text-orange-200 text-sm">Setiap Hari</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
