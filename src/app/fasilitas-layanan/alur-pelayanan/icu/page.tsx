'use client';

/**
 * Halaman Alur ICU - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan masuk ICU dengan info berbagai unit perawatan intensif
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, HeartIcon, DocumentTextIcon, UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface ICUType {
  id: number;
  name: string;
  description: string;
  capacity: string;
  specialties: string[];
  equipment: string[];
}

const icuSteps: Step[] = [
  {
    id: 1,
    title: 'Evaluasi Kritis',
    description: 'Penilaian kondisi kritis dan indikasi ICU',
    time: '5-10 menit',
    icon: 'ExclamationTriangleIcon',
    details: [
      'Asesmen ABC (Airway, Breathing, Circulation)',
      'Glasgow Coma Scale',
      'Penilaian organ failure',
      'Scoring APACHE II/SOFA'
    ]
  },
  {
    id: 2,
    title: 'Stabilisasi Awal',
    description: 'Tindakan life support dan stabilisasi',
    time: '15-30 menit',
    icon: 'HeartIcon',
    details: [
      'Intubasi dan ventilasi mekanik',
      'Akses vaskular sentral',
      'Monitoring hemodinamik',
      'Resusitasi cairan'
    ]
  },
  {
    id: 3,
    title: 'Transfer ICU',
    description: 'Persiapan dan transfer ke ruang ICU',
    time: '10-15 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Koordinasi dengan tim ICU',
      'Transfer dengan monitoring',
      'Handover komprehensif',
      'Setup peralatan ICU'
    ]
  },
  {
    id: 4,
    title: 'Perawatan Intensif',
    description: 'Manajemen perawatan intensif berkelanjutan',
    time: 'Kontinyu',
    icon: 'UserGroupIcon',
    details: [
      'Monitoring 24/7',
      'Ventilator management',
      'Farmakologi intensif',
      'Rehabilitasi dini'
    ]
  }
];

const icuTypes: ICUType[] = [
  {
    id: 1,
    name: 'ICU Umum',
    description: 'Intensive Care Unit untuk pasien kritis berbagai kondisi',
    capacity: '12 bed',
    specialties: [
      'Post operative care',
      'Sepsis management',
      'Respiratory failure',
      'Multi organ failure'
    ],
    equipment: [
      'Ventilator Hamilton G5',
      'Monitor GE Carescape',
      'Infusion pump Braun',
      'Defibrillator Philips'
    ]
  },
  {
    id: 2,
    name: 'CVICU',
    description: 'Cardiovascular ICU untuk pasien post bedah jantung',
    capacity: '8 bed',
    specialties: [
      'Post cardiac surgery',
      'Acute coronary syndrome',
      'Heart failure',
      'Cardiogenic shock'
    ],
    equipment: [
      'IABP (Intra Aortic Balloon Pump)',
      'ECMO machine',
      'Temporary pacemaker',
      'Swan-Ganz catheter'
    ]
  },
  {
    id: 3,
    name: 'NICU',
    description: 'Neonatal ICU untuk perawatan bayi prematur dan kritis',
    capacity: '16 bed',
    specialties: [
      'Premature babies',
      'Respiratory distress',
      'Congenital anomalies',
      'Post surgical neonates'
    ],
    equipment: [
      'Incubator Dräger',
      'CPAP Bubble',
      'Phototherapy unit',
      'Micro infusion pump'
    ]
  },
  {
    id: 4,
    name: 'PICU',
    description: 'Pediatric ICU untuk perawatan anak kritis',
    capacity: '10 bed',
    specialties: [
      'Pediatric respiratory failure',
      'Post operative pediatric',
      'Pediatric sepsis',
      'Neurological emergencies'
    ],
    equipment: [
      'Pediatric ventilator',
      'CRRT machine',
      'Hypothermia machine',
      'Transport incubator'
    ]
  }
];

const statistics = [
  { label: 'Total Bed ICU', value: '46' },
  { label: 'Survival Rate', value: '92%' },
  { label: 'Nurse-Patient Ratio', value: '1:2' },
  { label: 'Response Time', value: '<3 menit' }
];

export default function AlurICUPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      ExclamationTriangleIcon,
      HeartIcon,
      DocumentTextIcon,
      UserGroupIcon,
      ClockIcon,
      CheckCircleIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan ICU
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100">
                Intensive Care Unit dengan Standar Internasional
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Monitoring 24/7
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Tim Intensivist
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Teknologi Canggih
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
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
                { id: 'alur', label: 'Alur Masuk ICU' },
                { id: 'jenis', label: 'Jenis ICU' },
                { id: 'kontak', label: 'Kontak Darurat' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Alur Masuk ICU Tab */}
            {activeTab === 'alur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Alur Masuk ICU
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Protokol standar penerimaan pasien kritis ke Intensive Care Unit dengan pendekatan multidisiplin
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {icuSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-red-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                            {getIconComponent(step.icon)}
                          </div>
                          <div className="text-2xl font-bold text-red-600">
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
                                <CheckCircleIcon className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {index < icuSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-red-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jenis ICU Tab */}
            {activeTab === 'jenis' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Jenis-Jenis ICU
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai unit perawatan intensif yang tersedia sesuai dengan spesialisasi dan kebutuhan pasien
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {icuTypes.map((icu) => (
                    <div key={icu.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {icu.name}
                        </h3>
                        <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                          {icu.capacity}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {icu.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Spesialisasi:</h4>
                          <div className="flex flex-wrap gap-2">
                            {icu.specialties.map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Peralatan Utama:</h4>
                          <ul className="space-y-1">
                            {icu.equipment.map((equipment, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{equipment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
                    Kontak Darurat ICU
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Hubungi segera untuk konsultasi dan koordinasi masuk ICU
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
                    <ExclamationTriangleIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">ICU Darurat</h3>
                    <p className="text-red-100 mb-4">24/7 Emergency</p>
                    <a href="tel:0411-555-1111" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      (0411) 555-1111
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                    <HeartIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">CVICU</h3>
                    <p className="text-blue-100 mb-4">Cardiac Intensive Care</p>
                    <a href="tel:0411-555-2222" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      (0411) 555-2222
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
                    <UserGroupIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">NICU/PICU</h3>
                    <p className="text-green-100 mb-4">Pediatric & Neonatal</p>
                    <a href="tel:0411-555-3333" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition-all">
                      (0411) 555-3333
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Kriteria Masuk ICU</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Pasien yang memerlukan monitoring intensif</li>
                        <li>• Gangguan fungsi organ vital</li>
                        <li>• Post operasi mayor dengan risiko tinggi</li>
                        <li>• Memerlukan ventilator support</li>
                        <li>• Shock dan gangguan hemodinamik</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Jam Besuk ICU</h4>
                      <div className="text-red-700 text-sm space-y-1">
                        <p><strong>Sesi 1:</strong> 11:00 - 12:00</p>
                        <p><strong>Sesi 2:</strong> 17:00 - 18:00</p>
                        <p><strong>Maksimal:</strong> 1 orang pengunjung</p>
                        <p><strong>Durasi:</strong> 15 menit per sesi</p>
                        <p><em>Khusus kondisi kritis: Sesuai kebijakan dokter</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kondisi Darurat?
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Tim ICU kami siap 24 jam memberikan perawatan intensif terbaik dengan teknologi canggih dan tenaga medis berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0411-555-1111"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Hubungi ICU Darurat
              </a>
              <a
                href="/appointments"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Konsultasi Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
