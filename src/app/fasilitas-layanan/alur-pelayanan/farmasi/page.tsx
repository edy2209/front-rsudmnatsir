'use client';

/**
 * Halaman Alur Farmasi - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan lengkap pelayanan farmasi dengan pharmaceutical care
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CubeIcon, DocumentTextIcon, ComputerDesktopIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface ServiceType {
  id: number;
  name: string;
  description: string;
  features: string[];
  operatingHours: string;
  location: string;
}

const pharmacySteps: Step[] = [
  {
    id: 1,
    title: 'Penerimaan Resep',
    description: 'Verifikasi dan validasi resep dokter',
    time: '5-10 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Verifikasi kelengkapan resep',
      'Pengecekan identitas pasien',
      'Validasi kesesuaian obat',
      'Input data ke sistem farmasi'
    ]
  },
  {
    id: 2,
    title: 'Skrining Resep',
    description: 'Analisis farmasi dan konseling obat',
    time: '10-15 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Drug interaction screening',
      'Pengecekan alergi obat',
      'Verifikasi dosis dan aturan pakai',
      'Konseling pharmaceutical care'
    ]
  },
  {
    id: 3,
    title: 'Penyiapan Obat',
    description: 'Persiapan dan dispensing obat',
    time: '15-30 menit',
    icon: 'CubeIcon',
    details: [
      'Pengambilan obat dari stok',
      'Pengecekan expired date',
      'Labeling dan packaging',
      'Quality control dispensing'
    ]
  },
  {
    id: 4,
    title: 'Penyerahan Obat',
    description: 'Edukasi dan penyerahan obat kepada pasien',
    time: '5-10 menit',
    icon: 'ComputerDesktopIcon',
    details: [
      'Edukasi cara penggunaan obat',
      'Penjelasan efek samping',
      'Penyerahan dengan resit',
      'Follow up medication therapy'
    ]
  }
];

const serviceTypes: ServiceType[] = [
  {
    id: 1,
    name: 'Farmasi Rawat Jalan',
    description: 'Pelayanan farmasi untuk pasien rawat jalan dan IGD',
    features: [
      'Dispensing obat oral dan topikal',
      'Konseling obat pasien',
      'Drug information service',
      'Monitoring efek samping obat',
      'Home medication review'
    ],
    operatingHours: '24 jam',
    location: 'Lantai 1 - Dekat Poliklinik'
  },
  {
    id: 2,
    name: 'Farmasi Rawat Inap',
    description: 'Pelayanan farmasi untuk pasien rawat inap',
    features: [
      'Unit dose dispensing',
      'IV admixture service',
      'Ward round participation',
      'TPN (Total Parenteral Nutrition)',
      'Medication reconciliation'
    ],
    operatingHours: '24 jam',
    location: 'Satelit di setiap lantai'
  },
  {
    id: 3,
    name: 'Farmasi Klinis',
    description: 'Pelayanan farmasi klinis dan pharmaceutical care',
    features: [
      'Clinical pharmacy service',
      'Therapeutic drug monitoring',
      'Adverse drug reaction monitoring',
      'Drug utilization evaluation',
      'Medication therapy management'
    ],
    operatingHours: '07:00 - 16:00',
    location: 'Ruang Farmasi Klinis'
  },
  {
    id: 4,
    name: 'Produksi & QC',
    description: 'Produksi obat dan quality control',
    features: [
      'Produksi obat racikan',
      'Quality control obat',
      'Formularium management',
      'Inventory management',
      'Cold chain management'
    ],
    operatingHours: '07:00 - 15:00',
    location: 'Ruang Produksi Farmasi'
  }
];

const statistics = [
  { label: 'Item Obat', value: '2000+' },
  { label: 'Resep/Hari', value: '800+' },
  { label: 'Ketersediaan Obat', value: '98%' },
  { label: 'Waktu Tunggu Rata-rata', value: '20 menit' }
];

export default function AlurFarmasiPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      DocumentTextIcon,
      CheckCircleIcon,
      CubeIcon,
      ComputerDesktopIcon,
      ExclamationTriangleIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan Farmasi
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                Pelayanan Farmasi Komprehensif dengan Pharmaceutical Care
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Pelayanan 24/7
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Apoteker Berpengalaman
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Stok Lengkap
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
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
                { id: 'jenis', label: 'Jenis Layanan' },
                { id: 'informasi', label: 'Informasi Obat' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
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
                    Alur Pelayanan Farmasi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Prosedur standar pelayanan farmasi yang aman dan berkualitas dengan pendekatan pharmaceutical care
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pharmacySteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-emerald-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
                            {getIconComponent(step.icon)}
                          </div>
                          <div className="text-2xl font-bold text-emerald-600">
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
                                <CheckCircleIcon className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {index < pharmacySteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-emerald-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jenis Layanan Tab */}
            {activeTab === 'jenis' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Jenis Layanan Farmasi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai jenis layanan farmasi yang tersedia untuk memenuhi kebutuhan pengobatan pasien
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {serviceTypes.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {service.name}
                        </h3>
                        <span className="text-sm text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          {service.operatingHours}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Layanan:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Lokasi:</span>
                            <span className="text-sm font-medium text-gray-800">{service.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Informasi Obat Tab */}
            {activeTab === 'informasi' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Informasi Obat & Edukasi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Informasi penting tentang penggunaan obat yang aman dan efektif
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6">
                    <CubeIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Ketersediaan Obat</h3>
                    <ul className="space-y-2 text-emerald-100 text-sm">
                      <li>• Formularium Nasional lengkap</li>
                      <li>• Obat generik dan branded</li>
                      <li>• Obat khusus dan high alert</li>
                      <li>• Cold chain medicines</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-6">
                    <ExclamationTriangleIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Keamanan Obat</h3>
                    <ul className="space-y-2 text-teal-100 text-sm">
                      <li>• Drug interaction screening</li>
                      <li>• Allergy alert system</li>
                      <li>• Adverse drug reaction monitoring</li>
                      <li>• Medication error prevention</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                    <DocumentTextIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Konseling Obat</h3>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Cara penggunaan obat</li>
                      <li>• Waktu dan dosis yang tepat</li>
                      <li>• Efek samping yang mungkin terjadi</li>
                      <li>• Interaksi obat dengan makanan</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                    <ComputerDesktopIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Monitoring Terapi</h3>
                    <ul className="space-y-2 text-purple-100 text-sm">
                      <li>• Therapeutic drug monitoring</li>
                      <li>• Follow up medication therapy</li>
                      <li>• Drug compliance monitoring</li>
                      <li>• Clinical outcome evaluation</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
                    <ClockIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Jadwal Minum Obat</h3>
                    <ul className="space-y-2 text-orange-100 text-sm">
                      <li>• Reminder aplikasi mobile</li>
                      <li>• Pill organizer education</li>
                      <li>• Medication adherence counseling</li>
                      <li>• Family caregiver training</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6">
                    <CheckCircleIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                    <ul className="space-y-2 text-pink-100 text-sm">
                      <li>• Good pharmacy practice</li>
                      <li>• Storage condition monitoring</li>
                      <li>• Expiry date management</li>
                      <li>• Dispensing accuracy check</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Tips Penggunaan Obat yang Aman</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Selalu baca label obat sebelum diminum</li>
                        <li>• Habiskan antibiotik sesuai anjuran dokter</li>
                        <li>• Simpan obat di tempat yang sejuk dan kering</li>
                        <li>• Jangan berbagi obat dengan orang lain</li>
                        <li>• Segera konsultasi jika ada efek samping</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Kontak Drug Information Center</h4>
                      <div className="text-red-700 text-sm space-y-1">
                        <p><strong>Telepon:</strong> (0411) 555-0127</p>
                        <p><strong>WhatsApp:</strong> 0812-3456-7891</p>
                        <p><strong>Email:</strong> dic@rsudmnatsir.go.id</p>
                        <p><strong>Jam Layanan:</strong> 24 jam untuk konsultasi darurat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Konsultasi Obat?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Tim farmasis kami siap memberikan konsultasi dan edukasi obat untuk memastikan penggunaan obat yang aman dan efektif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0411-555-0127"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Konsultasi Farmasis
              </a>
              <a
                href="https://wa.me/6281234567891"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                WhatsApp DIC
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
