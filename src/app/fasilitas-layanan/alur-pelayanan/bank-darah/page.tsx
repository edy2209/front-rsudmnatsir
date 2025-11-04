'use client';

/**
 * Halaman Alur Bank Darah - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Panduan lengkap donasi dan pelayanan bank darah dengan safety protocols
 */

import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, HeartIcon, DocumentTextIcon, BeakerIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
  details: string[];
}

interface BloodComponent {
  id: number;
  name: string;
  description: string;
  indication: string[];
  storage: string;
  shelfLife: string;
  volume: string;
}

const donationSteps: Step[] = [
  {
    id: 1,
    title: 'Registrasi Donor',
    description: 'Pendaftaran dan verifikasi kelayakan donor',
    time: '10-15 menit',
    icon: 'DocumentTextIcon',
    details: [
      'Pengisian formulir donor',
      'Verifikasi identitas',
      'Screening riwayat kesehatan',
      'Pemeriksaan berat badan'
    ]
  },
  {
    id: 2,
    title: 'Pemeriksaan Kesehatan',
    description: 'Asesmen medis kelayakan donor',
    time: '15-20 menit',
    icon: 'HeartIcon',
    details: [
      'Pemeriksaan tanda vital',
      'Pemeriksaan fisik singkat',
      'Cek kadar hemoglobin',
      'Konseling pre-donation'
    ]
  },
  {
    id: 3,
    title: 'Pengambilan Darah',
    description: 'Proses donasi darah steril dan aman',
    time: '10-15 menit',
    icon: 'BeakerIcon',
    details: [
      'Persiapan area venipuncture',
      'Pengambilan darah 450ml',
      'Monitoring kondisi donor',
      'Labeling kantong darah'
    ]
  },
  {
    id: 4,
    title: 'Pemulihan & Follow-up',
    description: 'Observasi dan edukasi post-donation',
    time: '15-20 menit',
    icon: 'CheckCircleIcon',
    details: [
      'Observasi kondisi donor',
      'Pemberian snack dan minuman',
      'Edukasi perawatan post-donation',
      'Kartu donor dan sertifikat'
    ]
  }
];

const bloodComponents: BloodComponent[] = [
  {
    id: 1,
    name: 'Whole Blood',
    description: 'Darah lengkap untuk transfusi darurat',
    indication: [
      'Perdarahan masif',
      'Syok hipovolemik',
      'Exchange transfusion',
      'Operasi besar'
    ],
    storage: '2-6°C',
    shelfLife: '35 hari',
    volume: '450 ml'
  },
  {
    id: 2,
    name: 'Packed Red Cell (PRC)',
    description: 'Sel darah merah pekat untuk anemia',
    indication: [
      'Anemia berat',
      'Kehilangan darah akut',
      'Gagal jantung dengan anemia',
      'Thalassemia'
    ],
    storage: '2-6°C',
    shelfLife: '42 hari',
    volume: '200-250 ml'
  },
  {
    id: 3,
    name: 'Fresh Frozen Plasma (FFP)',
    description: 'Plasma beku segar untuk faktor koagulasi',
    indication: [
      'Defisiensi faktor koagulasi',
      'DIC (Disseminated Intravascular Coagulation)',
      'Antidotum warfarin',
      'Plasma exchange'
    ],
    storage: '-18°C atau lebih rendah',
    shelfLife: '12 bulan',
    volume: '200-250 ml'
  },
  {
    id: 4,
    name: 'Platelet Concentrate (PC)',
    description: 'Konsentrat trombosit untuk gangguan hemostasis',
    indication: [
      'Trombositopenia',
      'Disfungsi trombosit',
      'Operasi pada trombositopenia',
      'Chemotherapy induced thrombocytopenia'
    ],
    storage: '20-24°C dengan agitasi',
    shelfLife: '5 hari',
    volume: '50-70 ml'
  },
  {
    id: 5,
    name: 'Cryoprecipitate',
    description: 'Konsentrat faktor pembekuan',
    indication: [
      'Hemofilia A',
      'Defisiensi fibrinogen',
      'Defisiensi faktor XIII',
      'von Willebrand disease'
    ],
    storage: '-18°C atau lebih rendah',
    shelfLife: '12 bulan',
    volume: '10-15 ml'
  },
  {
    id: 6,
    name: 'Apheresis Products',
    description: 'Produk apheresis khusus',
    indication: [
      'Single donor platelet',
      'Granulocyte concentrate',
      'Plasma for fractionation',
      'Red cell exchange'
    ],
    storage: 'Sesuai komponen',
    shelfLife: 'Sesuai komponen',
    volume: 'Bervariasi'
  }
];

const statistics = [
  { label: 'Donor/Bulan', value: '500+' },
  { label: 'Unit Darah Tersedia', value: '300+' },
  { label: 'Response Time Darurat', value: '<30 menit' },
  { label: 'Safety Record', value: '100%' }
];

export default function AlurBankDarahPage() {
  const [activeTab, setActiveTab] = useState('alur');
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      DocumentTextIcon,
      HeartIcon,
      BeakerIcon,
      CheckCircleIcon,
      ExclamationTriangleIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || ClockIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Alur Pelayanan Bank Darah
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100">
                Unit Transfusi Darah dengan Standar Keamanan Tinggi
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Pelayanan 24/7
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Screening Lengkap
                </span>
                <span className="relative z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Cross Match Akurat
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
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
                { id: 'alur', label: 'Alur Donor Darah' },
                { id: 'komponen', label: 'Komponen Darah' },
                { id: 'syarat', label: 'Syarat & Kontak' }
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

            {/* Alur Donor Darah Tab */}
            {activeTab === 'alur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Alur Donor Darah
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Prosedur standar donor darah yang aman dan nyaman untuk donor dengan sistem screening berlapis
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {donationSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedStep === step.id ? 'ring-2 ring-red-500' : ''
                      }`}
                      onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
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
                          <h4 className="font-medium text-gray-800 mb-2">Detail Proses:</h4>
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

                      {index < donationSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRightIcon className="h-6 w-6 text-red-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Komponen Darah Tab */}
            {activeTab === 'komponen' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Komponen Darah yang Tersedia
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai komponen darah dan produk transfusi yang tersedia sesuai kebutuhan medis
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bloodComponents.map((component) => (
                    <div key={component.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {component.name}
                        </h3>
                        <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                          {component.volume}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {component.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Indikasi:</h4>
                          <div className="flex flex-wrap gap-1">
                            {component.indication.map((indication, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {indication}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-200 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Penyimpanan:</span>
                            <span className="font-medium text-gray-800">{component.storage}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Masa Simpan:</span>
                            <span className="font-medium text-gray-800">{component.shelfLife}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syarat & Kontak Tab */}
            {activeTab === 'syarat' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Syarat Donor & Kontak
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Persyaratan donor darah dan informasi kontak bank darah
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">Syarat Donor Darah</h4>
                        <ul className="text-green-700 text-sm space-y-2">
                          <li>• Usia 17-65 tahun (donor pertama maksimal 60 tahun)</li>
                          <li>• Berat badan minimal 45 kg</li>
                          <li>• Tekanan darah 110-160/70-100 mmHg</li>
                          <li>• Kadar hemoglobin ≥12.5 g/dL (wanita), ≥13.0 g/dL (pria)</li>
                          <li>• Interval donor minimal 56 hari</li>
                          <li>• Tidak sedang hamil/menyusui</li>
                          <li>• Tidak sedang sakit atau minum obat</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3">Pantangan Donor Darah</h4>
                        <ul className="text-red-700 text-sm space-y-2">
                          <li>• Riwayat hepatitis B, C, atau HIV</li>
                          <li>• Pengguna narkoba suntik</li>
                          <li>• Berganti-ganti pasangan seksual</li>
                          <li>• Tato/tindik dalam 6 bulan terakhir</li>
                          <li>• Operasi besar dalam 6 bulan</li>
                          <li>• Vaksinasi tertentu (sesuai jenis)</li>
                          <li>• Minum alkohol dalam 24 jam</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
                    <HeartIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Bank Darah</h3>
                    <p className="text-red-100 mb-4">Unit Transfusi Darah</p>
                    <a href="tel:0411-555-0128" className="relative z-10 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all backdrop-blur-sm border border-white/30">
                      (0411) 555-0128
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6 text-center">
                    <BeakerIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Laboratorium</h3>
                    <p className="text-pink-100 mb-4">Cross Match & Screening</p>
                    <a href="tel:0411-555-0129" className="relative z-10 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all backdrop-blur-sm border border-white/30">
                      (0411) 555-0129
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                    <ClockIcon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mobile Unit</h3>
                    <p className="text-purple-100 mb-4">Donor Eksternal</p>
                    <a href="tel:0411-555-0130" className="relative z-10 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-all backdrop-blur-sm border border-white/30">
                      (0411) 555-0130
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Jadwal Operasional</h4>
                      <div className="text-yellow-700 text-sm space-y-1">
                        <p><strong>Donor Darah:</strong> Senin-Sabtu 08:00-15:00</p>
                        <p><strong>Transfusi Darurat:</strong> 24 jam setiap hari</p>
                        <p><strong>Cross Match:</strong> 24 jam setiap hari</p>
                        <p><strong>Mobile Unit:</strong> Sesuai jadwal (booking)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <HeartIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Manfaat Donor Darah</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Membantu menyelamatkan nyawa hingga 3 orang</li>
                        <li>• Mendapat pemeriksaan kesehatan gratis</li>
                        <li>• Menurunkan risiko penyakit jantung</li>
                        <li>• Membakar kalori (sekitar 650 kalori)</li>
                        <li>• Meningkatkan produksi sel darah baru</li>
                        <li>• Mengurangi kelebihan zat besi dalam tubuh</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Setetes Darah Anda, Harapan Bagi Mereka
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah menjadi pendonor darah dan bantu menyelamatkan nyawa. Proses aman, nyaman, dan bermanfaat untuk kesehatan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointments"
                className="relative z-10 bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
              >
                Daftar Donor Darah
              </a>
              <a
                href="tel:0411-555-0128"
                className="relative z-10 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Hubungi Bank Darah
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
