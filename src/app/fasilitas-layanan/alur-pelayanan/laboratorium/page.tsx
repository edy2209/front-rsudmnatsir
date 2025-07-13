'use client';

/**
 * Halaman Alur Laboratorium - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan lengkap pemeriksaan laboratorium dengan berbagai kategori tes
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, BeakerIcon, DocumentTextIcon, ComputerDesktopIcon, TruckIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface TestCategory {
  id: number;
  name: string;
  description: string;
  tests: string[];
  sampleType: string;
  turnaroundTime: string;
  fasting: boolean;
}

const labSteps: Step[] = [
  {
    id: 1,
    title: 'Pendaftaran',
    description: 'Registrasi dan verifikasi surat pengantar',
    time: '5-10 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Verifikasi identitas pasien',
      'Pengecekan surat pengantar dokter',
      'Input data ke sistem LIS',
      'Penjelasan jenis pemeriksaan'
    ]
  },
  {
    id: 2,
    title: 'Persiapan Pasien',
    description: 'Edukasi dan persiapan sebelum pengambilan sampel',
    time: '5-15 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Konfirmasi puasa (jika diperlukan)',
      'Edukasi cara pengambilan sampel',
      'Pengecekan obat yang dikonsumsi',
      'Informed consent'
    ]
  },
  {
    id: 3,
    title: 'Pengambilan Sampel',
    description: 'Koleksi spesimen sesuai jenis pemeriksaan',
    time: '5-20 menit',
    icon: 'BeakerIcon',
    details: [
      'Pengambilan darah vena/kapiler',
      'Koleksi urin/feses',
      'Swab culture',
      'Labeling dan transport sampel'
    ]
  },
  {
    id: 4,
    title: 'Analisis & Hasil',
    description: 'Pemeriksaan laboratorium dan pelaporan',
    time: '2-24 jam',
    icon: 'ComputerDesktopIcon',
    details: [
      'Pemrosesan dengan analyzer otomatis',
      'Quality control hasil',
      'Validasi oleh analis',
      'Release hasil online/cetak'
    ]
  }
];

const testCategories: TestCategory[] = [
  {
    id: 1,
    name: 'Hematologi',
    description: 'Pemeriksaan darah lengkap dan hemostasis',
    tests: [
      'Darah Lengkap (CBC)',
      'LED (ESR)',
      'Golongan Darah ABO/Rh',
      'PT/APTT',
      'Retikulosit'
    ],
    sampleType: 'Darah EDTA/Sitrat',
    turnaroundTime: '2-4 jam',
    fasting: false
  },
  {
    id: 2,
    name: 'Kimia Klinik',
    description: 'Pemeriksaan metabolisme dan fungsi organ',
    tests: [
      'Glukosa Puasa/2PP',
      'Profil Lipid',
      'Fungsi Ginjal (Ureum/Kreatinin)',
      'Fungsi Hati (SGOT/SGPT)',
      'Elektrolit (Na/K/Cl)'
    ],
    sampleType: 'Serum',
    turnaroundTime: '3-6 jam',
    fasting: true
  },
  {
    id: 3,
    name: 'Serologi/Imunologi',
    description: 'Pemeriksaan antibodi dan antigen',
    tests: [
      'HBsAg/Anti-HBs',
      'Anti-HIV',
      'VDRL/TPHA',
      'Torch Profile',
      'Tumor Marker'
    ],
    sampleType: 'Serum',
    turnaroundTime: '4-24 jam',
    fasting: false
  },
  {
    id: 4,
    name: 'Mikrobiologi',
    description: 'Kultur bakteri dan sensitivitas antibiotik',
    tests: [
      'Kultur Darah',
      'Kultur Urin',
      'Kultur Sputum',
      'Kultur Swab',
      'Tes Sensitivitas'
    ],
    sampleType: 'Berbagai spesimen',
    turnaroundTime: '2-5 hari',
    fasting: false
  },
  {
    id: 5,
    name: 'Urinalisis',
    description: 'Pemeriksaan urin lengkap dan mikroskopis',
    tests: [
      'Urin Rutin',
      'Urin Mikroskopis',
      'Protein Urin 24 jam',
      'Reduksi Urin',
      'Bence Jones Protein'
    ],
    sampleType: 'Urin',
    turnaroundTime: '1-2 jam',
    fasting: false
  },
  {
    id: 6,
    name: 'Patologi Anatomi',
    description: 'Pemeriksaan histopatologi dan sitologi',
    tests: [
      'Biopsi Jaringan',
      'Pap Smear',
      'FNAB (Fine Needle Aspiration)',
      'Imunohistokimia',
      'Frozen Section'
    ],
    sampleType: 'Jaringan/Sel',
    turnaroundTime: '3-7 hari',
    fasting: false
  }
];

const statistics = [
  { label: 'Pemeriksaan/Hari', value: '1500+' },
  { label: 'Jenis Tes', value: '200+' },
  { label: 'Akurasi', value: '99.8%' },
  { label: 'Turnaround Time', value: '<4 jam' }
];

export default function AlurLaboratoriumPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      DocumentTextIcon,
      CheckCircleIcon,
      BeakerIcon,
      ComputerDesktopIcon,
      TruckIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan Laboratorium
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Layanan Laboratorium Terpadu dengan Teknologi Modern
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  ISO 15189 Certified
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Hasil Online
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Quality Assured
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
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
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
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
                    Alur Pemeriksaan Laboratorium
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Prosedur standar pelayanan laboratorium yang efisien dan berkualitas tinggi
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {labSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-purple-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                            {getIconComponent(step.icon)}
                          </div>
                          <div className="text-2xl font-bold text-purple-600">
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
                                <CheckCircleIcon className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {index < labSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-purple-400" />
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
                    Jenis Pemeriksaan Laboratorium
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai kategori pemeriksaan laboratorium yang tersedia dengan standar internasional
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testCategories.map((category) => (
                    <div key={category.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {category.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {category.fasting && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                              Puasa
                            </span>
                          )}
                          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                            {category.turnaroundTime}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {category.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Jenis Pemeriksaan:</h4>
                          <ul className="space-y-1">
                            {category.tests.map((test, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{test}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Jenis Sampel:</span>
                            <span className="font-medium text-gray-800">{category.sampleType}</span>
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
                    Informasi jadwal pelayanan dan cara menghubungi laboratorium
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                    <ClockIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Jam Operasional</h3>
                    <div className="space-y-2 text-purple-100">
                      <div className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span>06:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu</span>
                        <span>06:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu</span>
                        <span>07:00 - 15:00</span>
                      </div>
                      <div className="text-xs mt-3 opacity-80">
                        *Sampling darah terbaik: 06:00-10:00
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6">
                    <BeakerIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Kontak Lab</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-pink-100 text-sm">Telepon</p>
                        <a href="tel:0411-555-0125" className="text-lg font-medium">
                          (0411) 555-0125
                        </a>
                      </div>
                      <div>
                        <p className="text-pink-100 text-sm">Extension</p>
                        <span className="text-lg font-medium">2501</span>
                      </div>
                      <div>
                        <p className="text-pink-100 text-sm">WhatsApp</p>
                        <a href="https://wa.me/6281234567890" className="text-lg font-medium">
                          0812-3456-7890
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
                    <TruckIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Home Service</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-indigo-100 text-sm">Jam Operasional</p>
                        <span className="text-lg font-medium">08:00 - 16:00</span>
                      </div>
                      <div>
                        <p className="text-indigo-100 text-sm">Area Layanan</p>
                        <span className="text-lg font-medium">Makassar & Sekitar</span>
                      </div>
                      <div>
                        <p className="text-indigo-100 text-sm">Booking</p>
                        <a href="tel:0411-555-0126" className="text-lg font-medium">
                          (0411) 555-0126
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Persiapan Pemeriksaan</h4>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• Puasa 10-12 jam untuk tes gula darah dan lipid</li>
                          <li>• Bawa surat pengantar dari dokter</li>
                          <li>• Datang pagi hari untuk sampling darah</li>
                          <li>• Informasikan obat yang sedang dikonsumsi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <ComputerDesktopIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Pengambilan Hasil</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Hasil online: portal.rsudmnatsir.go.id</li>
                          <li>• WhatsApp notification tersedia</li>
                          <li>• Ambil hasil cetak di loket lab</li>
                          <li>• Konsultasi hasil dengan dokter pengirim</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Pemeriksaan Laboratorium?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Laboratorium kami siap memberikan pelayanan terbaik dengan teknologi modern dan hasil yang akurat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointments"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Daftar Pemeriksaan
              </a>
              <a
                href="tel:0411-555-0125"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Hubungi Lab
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
