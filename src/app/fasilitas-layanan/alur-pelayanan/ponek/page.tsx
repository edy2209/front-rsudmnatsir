'use client';

/**
 * Halaman Alur PONEK - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Protokol pelayanan obstetri neonatal emergensi komprehensif
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, HeartIcon, UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface EmergencyProtocol {
  id: number;
  category: string;
  title: string;
  urgency: 'high' | 'medium' | 'low';
  steps: string[];
}

const ponekSteps: Step[] = [
  {
    id: 1,
    title: 'Triase Awal',
    description: 'Penilaian kondisi ibu dan bayi saat kedatangan',
    time: '5 menit',
    icon: 'UserGroupIcon',
    details: [
      'Pemeriksaan tanda vital ibu',
      'Evaluasi kondisi janin',
      'Penilaian tingkat kegawatdaruratan',
      'Dokumentasi awal'
    ]
  },
  {
    id: 2,
    title: 'Stabilisasi',
    description: 'Tindakan stabilisasi kondisi pasien',
    time: '10-15 menit',
    icon: 'HeartIcon',
    details: [
      'Pemberian oksigen jika diperlukan',
      'Pemasangan akses vena',
      'Monitoring fetal',
      'Persiapan tindakan darurat'
    ]
  },
  {
    id: 3,
    title: 'Evaluasi Lanjutan',
    description: 'Pemeriksaan komprehensif dan diagnosis',
    time: '15-20 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Pemeriksaan USG obstetri',
      'Laboratorium darurat',
      'Konsultasi spesialis',
      'Penentuan rencana tindakan'
    ]
  },
  {
    id: 4,
    title: 'Tindakan Definitif',
    description: 'Pelaksanaan terapi atau operasi',
    time: 'Sesuai kondisi',
    icon: 'ExclamationTriangleIcon',
    details: [
      'Persalinan normal/operatif',
      'Operasi caesar darurat',
      'Resusitasi neonatus',
      'Perawatan intensif'
    ]
  }
];

const emergencyProtocols: EmergencyProtocol[] = [
  {
    id: 1,
    category: 'Obstetri',
    title: 'Perdarahan Antepartum',
    urgency: 'high',
    steps: [
      'Stabilisasi hemodinamik',
      'Pemeriksaan USG',
      'Persiapan operasi',
      'Crossmatch darah'
    ]
  },
  {
    id: 2,
    category: 'Obstetri',
    title: 'Preeklamsia Berat',
    urgency: 'high',
    steps: [
      'Monitoring tekanan darah',
      'Pemberian antihipertensi',
      'Pencegahan kejang',
      'Terminasi kehamilan'
    ]
  },
  {
    id: 3,
    category: 'Neonatal',
    title: 'Asfiksia Neonatorum',
    urgency: 'high',
    steps: [
      'Resusitasi segera',
      'Ventilasi positif',
      'Kompresi dada',
      'Obat-obatan emergensi'
    ]
  },
  {
    id: 4,
    category: 'Obstetri',
    title: 'Partus Macet',
    urgency: 'medium',
    steps: [
      'Evaluasi panggul',
      'Monitoring janin',
      'Pertimbangan operasi',
      'Tindakan ekstraksi'
    ]
  }
];

const statistics = [
  { label: 'Kasus Ditangani/Bulan', value: '150+' },
  { label: 'Survival Rate', value: '98.5%' },
  { label: 'Response Time', value: '<5 menit' },
  { label: 'Tim Dokter', value: '24/7' }
];

export default function AlurPONEKPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      UserGroupIcon,
      HeartIcon,
      CheckCircleIcon,
      ExclamationTriangleIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan PONEK
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Pelayanan Obstetri Neonatal Emergensi Komprehensif
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Pelayanan 24/7
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Tim Multidisiplin
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Standar Internasional
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
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
                { id: 'alur', label: 'Alur Pelayanan' },
                { id: 'protokol', label: 'Protokol Darurat' },
                { id: 'kontak', label: 'Kontak Darurat' }
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

            {/* Alur Pelayanan Tab */}
            {activeTab === 'alur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Alur Pelayanan PONEK
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Protokol standar penanganan kegawatdaruratan obstetri dan neonatal dengan pendekatan multidisiplin terintegrasi
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ponekSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
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
                          <h4 className="font-medium text-gray-800 mb-2">Detail Tindakan:</h4>
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

                      {index < ponekSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-blue-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Protokol Darurat Tab */}
            {activeTab === 'protokol' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Protokol Kegawatdaruratan
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Protokol standar penanganan berbagai kondisi kegawatdaruratan obstetri dan neonatal
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {emergencyProtocols.map((protocol) => (
                    <div key={protocol.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${getUrgencyColor(protocol.urgency)}`}></div>
                          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {protocol.category}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          protocol.urgency === 'high' ? 'bg-red-100 text-red-800' :
                          protocol.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {protocol.urgency.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        {protocol.title}
                      </h3>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-700 mb-2">Langkah Penanganan:</h4>
                        {protocol.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-gray-600 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kontak Darurat Tab */}
            {activeTab === 'kontak' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Kontak Darurat PONEK
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Hubungi segera dalam kondisi kegawatdaruratan obstetri dan neonatal
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
                    <ExclamationTriangleIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">IGD PONEK</h3>
                    <p className="text-red-100 mb-4">24/7 Emergency</p>
                    <a href="tel:119" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      119
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                    <HeartIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ambulans</h3>
                    <p className="text-blue-100 mb-4">Transportasi Darurat</p>
                    <a href="tel:0411-123456" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      (0411) 123-456
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                    <UserGroupIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Konsultasi</h3>
                    <p className="text-purple-100 mb-4">Tim Dokter Spesialis</p>
                    <a href="tel:0411-789012" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      (0411) 789-012
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Petunjuk Darurat</h4>
                      <p className="text-yellow-700 text-sm">
                        Dalam kondisi darurat, segera hubungi nomor IGD PONEK. Berikan informasi lengkap tentang kondisi pasien, 
                        lokasi, dan siapkan dokumen identitas serta riwayat kesehatan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim PONEK kami siap memberikan pelayanan terbaik 24 jam sehari, 7 hari seminggu untuk menangani kegawatdaruratan obstetri dan neonatal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:119"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Hubungi IGD: 119
              </a>
              <a
                href="/appointments"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Buat Janji Konsultasi
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
