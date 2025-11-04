'use client';

/**
 * Halaman Alur Radiologi - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan pemeriksaan radiologi lengkap dengan berbagai modalitas
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CameraIcon, DocumentTextIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface ExamType {
  id: number;
  name: string;
  description: string;
  duration: string;
  preparation: string[];
  indication: string[];
}

const radiologySteps: Step[] = [
  {
    id: 1,
    title: 'Pendaftaran',
    description: 'Registrasi pasien dan verifikasi data',
    time: '5-10 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Verifikasi identitas pasien',
      'Pengecekan surat rujukan',
      'Input data ke sistem',
      'Penjelasan prosedur pemeriksaan'
    ]
  },
  {
    id: 2,
    title: 'Persiapan Pasien',
    description: 'Persiapan sebelum pemeriksaan radiologi',
    time: '10-15 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Screening kehamilan (untuk wanita)',
      'Pelepasan aksesoris logam',
      'Penggantian pakaian khusus',
      'Konseling risiko radiasi'
    ]
  },
  {
    id: 3,
    title: 'Pemeriksaan',
    description: 'Pelaksanaan pemeriksaan radiologi',
    time: '15-45 menit',
    icon: 'CameraIcon',
    details: [
      'Positioning pasien',
      'Pengambilan foto/scan',
      'Quality control hasil',
      'Dokumentasi pemeriksaan'
    ]
  },
  {
    id: 4,
    title: 'Interpretasi',
    description: 'Pembacaan dan pelaporan hasil',
    time: '30-60 menit',
    icon: 'ComputerDesktopIcon',
    details: [
      'Analisis gambar oleh radiolog',
      'Pembuatan laporan',
      'Konsultasi jika diperlukan',
      'Finalisasi hasil'
    ]
  }
];

const examTypes: ExamType[] = [
  {
    id: 1,
    name: 'Foto Rontgen (X-Ray)',
    description: 'Pemeriksaan radiologi konvensional untuk tulang dan organ dalam',
    duration: '15-20 menit',
    preparation: [
      'Tidak ada persiapan khusus',
      'Lepas aksesoris logam',
      'Informasikan jika hamil'
    ],
    indication: [
      'Patah tulang',
      'Infeksi paru',
      'Gangguan jantung',
      'Kelainan tulang belakang'
    ]
  },
  {
    id: 2,
    name: 'CT Scan',
    description: 'Pemeriksaan tomografi untuk detail struktur internal',
    duration: '30-45 menit',
    preparation: [
      'Puasa 4-6 jam (jika dengan kontras)',
      'Minum air putih 2 gelas',
      'Lepas semua aksesoris logam'
    ],
    indication: [
      'Trauma kepala',
      'Stroke',
      'Tumor',
      'Gangguan abdomen'
    ]
  },
  {
    id: 3,
    name: 'USG (Ultrasonografi)',
    description: 'Pemeriksaan menggunakan gelombang suara ultrasonik',
    duration: '20-30 menit',
    preparation: [
      'Kandung kemih penuh (USG abdomen)',
      'Puasa 8 jam (USG abdomen)',
      'Tidak ada persiapan khusus (USG obstetri)'
    ],
    indication: [
      'Kehamilan',
      'Kelainan organ dalam',
      'Batu ginjal',
      'Gangguan kandung empedu'
    ]
  },
  {
    id: 4,
    name: 'MRI',
    description: 'Magnetic Resonance Imaging untuk detail jaringan lunak',
    duration: '45-60 menit',
    preparation: [
      'Screening implant logam',
      'Lepas semua aksesoris logam',
      'Informasikan claustrophobia'
    ],
    indication: [
      'Kelainan otak',
      'Cedera ligamen',
      'Tumor jaringan lunak',
      'Gangguan tulang belakang'
    ]
  }
];

const statistics = [
  { label: 'Pemeriksaan/Hari', value: '200+' },
  { label: 'Akurasi Diagnosis', value: '99%' },
  { label: 'Waktu Laporan', value: '<2 jam' },
  { label: 'Peralatan Modern', value: '15 unit' }
];

export default function AlurRadiologiPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      DocumentTextIcon,
      CheckCircleIcon,
      CameraIcon,
      ComputerDesktopIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan Radiologi
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Pemeriksaan Radiologi Komprehensif dengan Teknologi Terkini
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Teknologi Digital
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Radiolog Berpengalaman
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Hasil Cepat & Akurat
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
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
                { id: 'alur', label: 'Alur Pemeriksaan' },
                { id: 'jenis', label: 'Jenis Pemeriksaan' },
                { id: 'jadwal', label: 'Jadwal & Kontak' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Alur Pemeriksaan Tab */}
            {activeTab === 'alur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Alur Pemeriksaan Radiologi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Prosedur standar pemeriksaan radiologi yang efisien dan aman untuk semua jenis pemeriksaan
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {radiologySteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-green-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                            {getIconComponent(step.icon)}
                          </div>
                          <div className="text-2xl font-bold text-green-600">
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
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {index < radiologySteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-green-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jenis Pemeriksaan Tab */}
            {activeTab === 'jenis' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Jenis Pemeriksaan Radiologi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai jenis pemeriksaan radiologi dengan teknologi modern dan standar internasional
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {examTypes.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {exam.name}
                        </h3>
                        <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {exam.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {exam.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Persiapan:</h4>
                          <ul className="space-y-1">
                            {exam.preparation.map((prep, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{prep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Indikasi:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exam.indication.map((indication, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {indication}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jadwal & Kontak Tab */}
            {activeTab === 'jadwal' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Jadwal & Informasi Kontak
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Informasi jadwal pelayanan dan cara menghubungi unit radiologi
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                    <ClockIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Jam Operasional</h3>
                    <div className="space-y-2 text-green-100">
                      <div className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span>07:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu</span>
                        <span>07:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu</span>
                        <span>08:00 - 15:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                    <CameraIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Kontak Radiologi</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-blue-100 text-sm">Telepon</p>
                        <a href="tel:0411-555-0123" className="text-lg font-medium">
                          (0411) 555-0123
                        </a>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Extension</p>
                        <span className="text-lg font-medium">2301</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                    <DocumentTextIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Pendaftaran</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-purple-100 text-sm">Online</p>
                        <a href="/appointments" className="text-lg font-medium hover:underline">
                          rsudmnatsir.go.id
                        </a>
                      </div>
                      <div>
                        <p className="text-purple-100 text-sm">Loket</p>
                        <span className="text-lg font-medium">Lantai 1</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Informasi Penting</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Bawa surat rujukan dari dokter</li>
                        <li>• Datang 30 menit sebelum jadwal pemeriksaan</li>
                        <li>• Hasil pemeriksaan dapat diambil setelah 2 jam</li>
                        <li>• Untuk pemeriksaan dengan kontras, mohon puasa sesuai petunjuk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Pemeriksaan Radiologi?
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Tim radiologi kami siap memberikan pelayanan terbaik dengan teknologi modern dan radiolog berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointments"
                className="relative z-10 bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
              >
                Buat Janji Pemeriksaan
              </a>
              <a
                href="tel:0411-555-0123"
                className="relative z-10 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Hubungi Radiologi
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
