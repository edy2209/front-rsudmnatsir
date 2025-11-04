'use client';

/**
 * Halaman Alur Rawat Inap - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan lengkap alur penerimaan rawat inap dengan info kelas kamar
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, HomeIcon, DocumentTextIcon, UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface RoomType {
  id: number;
  name: string;
  description: string;
  capacity: string;
  facilities: string[];
  price: string;
}

const admissionSteps: Step[] = [
  {
    id: 1,
    title: 'Penerimaan Pasien',
    description: 'Registrasi dan verifikasi data pasien rawat inap',
    time: '15-20 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Verifikasi identitas dan BPJS/asuransi',
      'Pengisian formulir rawat inap',
      'Penjelasan hak dan kewajiban pasien',
      'Pemilihan kelas perawatan'
    ]
  },
  {
    id: 2,
    title: 'Pemeriksaan Awal',
    description: 'Asesmen medis dan keperawatan komprehensif',
    time: '30-45 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Anamnesis dan pemeriksaan fisik',
      'Pengkajian keperawatan',
      'Penilaian risiko jatuh',
      'Edukasi awal pasien dan keluarga'
    ]
  },
  {
    id: 3,
    title: 'Penempatan Kamar',
    description: 'Pengaturan tempat tidur dan orientasi ruangan',
    time: '10-15 menit',
    icon: 'BuildingOfficeIcon',
    details: [
      'Penempatan sesuai kelas perawatan',
      'Orientasi fasilitas ruangan',
      'Penjelasan peraturan bangsal',
      'Setup peralatan medis'
    ]
  },
  {
    id: 4,
    title: 'Perawatan Harian',
    description: 'Pelaksanaan asuhan keperawatan berkelanjutan',
    time: 'Kontinyu',
    icon: 'UserGroupIcon',
    details: [
      'Visite dokter harian',
      'Pemberian obat-obatan',
      'Monitoring vital sign',
      'Komunikasi dengan keluarga'
    ]
  }
];

const roomTypes: RoomType[] = [
  {
    id: 1,
    name: 'Kelas VIP',
    description: 'Kamar perawatan premium dengan fasilitas lengkap',
    capacity: '1 tempat tidur',
    facilities: [
      'AC dan TV LED 32"',
      'Sofa bed untuk keluarga',
      'Kulkas mini',
      'Kamar mandi dalam',
      'WiFi gratis',
      'Telepon'
    ],
    price: 'Rp 500.000/hari'
  },
  {
    id: 2,
    name: 'Kelas I',
    description: 'Kamar perawatan dengan kenyamanan standar tinggi',
    capacity: '2 tempat tidur',
    facilities: [
      'AC dan TV LED',
      'Kursi tunggu',
      'Kamar mandi dalam',
      'WiFi gratis',
      'Lemari pakaian'
    ],
    price: 'Rp 300.000/hari'
  },
  {
    id: 3,
    name: 'Kelas II',
    description: 'Kamar perawatan dengan fasilitas memadai',
    capacity: '4 tempat tidur',
    facilities: [
      'AC dan TV',
      'Kamar mandi dalam',
      'Lemari bersama',
      'Kursi tunggu'
    ],
    price: 'Rp 200.000/hari'
  },
  {
    id: 4,
    name: 'Kelas III',
    description: 'Kamar perawatan standar dengan biaya terjangkau',
    capacity: '6-8 tempat tidur',
    facilities: [
      'Kipas angin',
      'TV bersama',
      'Kamar mandi bersama',
      'Lemari bersama'
    ],
    price: 'Sesuai BPJS'
  }
];

const statistics = [
  { label: 'Tempat Tidur', value: '300+' },
  { label: 'Tingkat Okupansi', value: '85%' },
  { label: 'Rata-rata LOS', value: '4.2 hari' },
  { label: 'Kepuasan Pasien', value: '96%' }
];

export default function AlurRawatInapPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      DocumentTextIcon,
      CheckCircleIcon,
      BuildingOfficeIcon,
      UserGroupIcon,
      HomeIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-white/5"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan Rawat Inap
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Pelayanan Rawat Inap Berkualitas dengan Fasilitas Modern
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Perawatan 24/7
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Tim Multidisiplin
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Fasilitas Lengkap
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'alur', label: 'Alur Masuk' },
                { id: 'kelas', label: 'Kelas Perawatan' },
                { id: 'fasilitas', label: 'Fasilitas & Layanan' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Alur Masuk Tab */}
            {activeTab === 'alur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Alur Penerimaan Rawat Inap
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Prosedur standar penerimaan pasien rawat inap yang efisien dan berorientasi pada keselamatan pasien
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {admissionSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                            {getIconComponent(step.icon)}
                          </div>
                          <div className="text-2xl font-bold text-blue-600">
                            {String(step.id).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {step.time}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {step.description}
                      </p>

                      {selectedStep === step.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-gray-800 mb-2">Detail Proses:</h4>
                          <ul className="space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {index < admissionSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-blue-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kelas Perawatan Tab */}
            {activeTab === 'kelas' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Kelas Perawatan Rawat Inap
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai pilihan kelas perawatan sesuai dengan kebutuhan dan kemampuan finansial pasien
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {roomTypes.map((room) => (
                    <div key={room.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {room.name}
                        </h3>
                        <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {room.capacity}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {room.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Fasilitas:</h4>
                          <ul className="space-y-1">
                            {room.facilities.map((facility, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{facility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">Tarif per hari:</span>
                            <span className="text-lg font-bold text-blue-600">{room.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fasilitas & Layanan Tab */}
            {activeTab === 'fasilitas' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Fasilitas & Layanan Rawat Inap
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Fasilitas lengkap dan layanan komprehensif untuk kenyamanan dan pemulihan pasien
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                    <UserGroupIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Tim Medis</h3>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Dokter spesialis on call 24/7</li>
                      <li>• Perawat terlatih bersertifikat</li>
                      <li>• Ahli gizi dan farmasis</li>
                      <li>• Fisioterapis</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                    <HomeIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Fasilitas Umum</h3>
                    <ul className="space-y-2 text-green-100 text-sm">
                      <li>• Nurse station 24 jam</li>
                      <li>• Ruang keluarga</li>
                      <li>• Kafeteria</li>
                      <li>• Area parkir luas</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                    <ClockIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Layanan 24 Jam</h3>
                    <ul className="space-y-2 text-purple-100 text-sm">
                      <li>• Monitoring vital sign</li>
                      <li>• Bantuan keperawatan</li>
                      <li>• Konsultasi dokter darurat</li>
                      <li>• Layanan laboratorium</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
                    <DocumentTextIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Administrasi</h3>
                    <ul className="space-y-2 text-orange-100 text-sm">
                      <li>• Klaim BPJS otomatis</li>
                      <li>• Sistem pembayaran cashless</li>
                      <li>• Surat keterangan medis</li>
                      <li>• Resume medis</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
                    <BuildingOfficeIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Peralatan Medis</h3>
                    <ul className="space-y-2 text-indigo-100 text-sm">
                      <li>• Tempat tidur elektrik</li>
                      <li>• Monitor pasien</li>
                      <li>• Oksigen central</li>
                      <li>• Suction central</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6">
                    <CheckCircleIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Layanan Tambahan</h3>
                    <ul className="space-y-2 text-pink-100 text-sm">
                      <li>• Catering khusus diet</li>
                      <li>• Laundry</li>
                      <li>• Layanan spiritual</li>
                      <li>• Konseling keluarga</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Peraturan Jam Besuk</h4>
                      <div className="text-yellow-700 text-sm space-y-1">
                        <p><strong>Senin - Jumat:</strong> 11:00-13:00, 17:00-20:00</p>
                        <p><strong>Sabtu - Minggu:</strong> 10:00-12:00, 17:00-20:00</p>
                        <p><strong>Maksimal pengunjung:</strong> 2 orang per pasien</p>
                        <p><strong>Khusus ICU:</strong> Sesuai kebijakan ruangan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Perlu Rawat Inap?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim perawatan kami siap memberikan pelayanan terbaik dengan fasilitas modern dan tenaga medis berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointments"
                className="relative z-10 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
              >
                Reservasi Kamar
              </a>
              <a
                href="tel:0411-555-0124"
                className="relative z-10 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Hubungi Admission
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
