'use client';

/**
 * Halaman Kerja Sama - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Showcase partnership dan kemitraan strategis rumah sakit
 */

import React, { useState } from 'react';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  AcademicCapIcon,
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  TruckIcon,
  ShieldCheckIcon as HandshakeIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface Partner {
  id: number;
  name: string;
  type: 'pemerintah' | 'swasta' | 'pendidikan' | 'internasional';
  category: string;
  description: string;
  since: string;
  logo?: string;
  collaboration: string[];
  status: 'aktif' | 'non-aktif';
}

interface CollaborationType {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  benefits: string[];
  partners: number;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Universitas Andalas',
    type: 'pendidikan',
    category: 'Pendidikan & Penelitian',
    description: 'Kemitraan dalam pendidikan kedokteran, penelitian medis, dan pengembangan SDM kesehatan',
    since: '2010',
    collaboration: ['Program Magister Kesehatan', 'Penelitian Klinis', 'Praktik Mahasiswa', 'Pelatihan Tenaga Medis'],
    status: 'aktif'
  },
  {
    id: 2,
    name: 'BPJS Kesehatan',
    type: 'pemerintah',
    category: 'Asuransi Kesehatan',
    description: 'Provider utama layanan kesehatan untuk peserta BPJS dengan standar pelayanan terbaik',
    since: '2014',
    collaboration: ['Rawat Jalan BPJS', 'Rawat Inap BPJS', 'Pelayanan Gawat Darurat', 'Program Rujuk Balik'],
    status: 'aktif'
  },
  {
    id: 3,
    name: 'Siloam Hospitals',
    type: 'swasta',
    category: 'Rumah Sakit Swasta',
    description: 'Kolaborasi dalam transfer teknologi medis dan pengembangan layanan spesialis',
    since: '2018',
    collaboration: ['Transfer Teknologi', 'Second Opinion', 'Training Program', 'Quality Improvement'],
    status: 'aktif'
  },
  {
    id: 4,
    name: 'WHO Indonesia',
    type: 'internasional',
    category: 'Organisasi Kesehatan Dunia',
    description: 'Implementasi program kesehatan global dan standar internasional',
    since: '2015',
    collaboration: ['Patient Safety', 'Quality Standards', 'Healthcare Innovation', 'Training Program'],
    status: 'aktif'
  },
  {
    id: 5,
    name: 'Kimia Farma',
    type: 'swasta',
    category: 'Farmasi',
    description: 'Kemitraan dalam penyediaan obat-obatan dan layanan farmasi klinik',
    since: '2012',
    collaboration: ['Supply Chain Obat', 'Farmasi Klinik', 'Drug Information', 'Quality Control'],
    status: 'aktif'
  },
  {
    id: 6,
    name: 'Fakultas Kedokteran UI',
    type: 'pendidikan',
    category: 'Pendidikan Medis',
    description: 'Program fellowship dan pengembangan sub-spesialisasi medis',
    since: '2020',
    collaboration: ['Fellowship Program', 'Research Collaboration', 'Medical Education', 'Telemedicine'],
    status: 'aktif'
  }
];

const collaborationTypes: CollaborationType[] = [
  {
    id: 1,
    title: 'Pendidikan & Penelitian',
    description: 'Kemitraan dengan institusi pendidikan untuk pengembangan SDM dan riset medis',
    icon: AcademicCapIcon,
    color: 'from-blue-500 to-blue-600',
    benefits: [
      'Peningkatan kualitas SDM medis',
      'Akses ke penelitian terkini',
      'Program magang dan residensi',
      'Transfer knowledge dan teknologi'
    ],
    partners: 12
  },
  {
    id: 2,
    title: 'Layanan Kesehatan',
    description: 'Kolaborasi dengan provider kesehatan untuk meningkatkan akses dan kualitas layanan',
    icon: HeartIcon,
    color: 'from-red-500 to-red-600',
    benefits: [
      'Ekspansi cakupan layanan',
      'Peningkatan kualitas care',
      'Sistem rujukan terintegrasi',
      'Standarisasi protokol medis'
    ],
    partners: 25
  },
  {
    id: 3,
    title: 'Teknologi & Inovasi',
    description: 'Partnership dalam implementasi teknologi medis dan inovasi healthcare',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-purple-600',
    benefits: [
      'Akses teknologi terdepan',
      'Digital transformation',
      'Telemedicine development',
      'AI dan machine learning'
    ],
    partners: 8
  },
  {
    id: 4,
    title: 'Supply Chain & Logistik',
    description: 'Kerjasama dalam supply chain medis dan manajemen logistik rumah sakit',
    icon: TruckIcon,
    color: 'from-green-500 to-green-600',
    benefits: [
      'Efisiensi supply chain',
      'Quality assurance',
      'Cost optimization',
      'Inventory management'
    ],
    partners: 15
  }
];

const achievements = [
  { label: 'Total Kemitraan', value: '60+' },
  { label: 'Negara Partner', value: '8' },
  { label: 'Program Aktif', value: '45' },
  { label: 'Tahun Pengalaman', value: '15+' }
];

export default function KerjaSamaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedType, setSelectedType] = useState('all');

  const filteredPartners = selectedType === 'all' 
    ? partners 
    : partners.filter(partner => partner.type === selectedType);

  const getTypeColor = (type: string) => {
    const colors = {
      'pemerintah': 'bg-blue-100 text-blue-800',
      'swasta': 'bg-green-100 text-green-800',
      'pendidikan': 'bg-purple-100 text-purple-800',
      'internasional': 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 overflow-hidden -mt-20 pt-32">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-8 gap-8 h-full opacity-10">
              {[...Array(32)].map((_, i) => (
                <HandshakeIcon 
                  key={i} 
                  className="w-8 h-8 text-white animate-pulse" 
                  style={{animationDelay: `${i * 0.2}s`}} 
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <HandshakeIcon className="w-16 h-16 text-blue-300 animate-bounce" />
                <ArrowRightIcon className="w-12 h-12 text-purple-300 animate-pulse" />
                <GlobeAltIcon className="w-16 h-16 text-blue-300 animate-bounce" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Kerja Sama & <span className="text-blue-300">Kemitraan</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Membangun partnership strategis untuk pelayanan kesehatan yang berkelanjutan
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium">
                  Partnership Global
                </span>
                <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium">
                  Inovasi Berkelanjutan
                </span>
                <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium">
                  Quality Excellence
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
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
                { id: 'overview', label: 'Overview' },
                { id: 'partners', label: 'Mitra Strategis' },
                { id: 'programs', label: 'Program Kolaborasi' },
                { id: 'opportunities', label: 'Peluang Kemitraan' }
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

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Tipe <span className="text-blue-600">Kolaborasi</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Berbagai bentuk kemitraan strategis yang mendukung visi misi rumah sakit
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {collaborationTypes.map((type) => (
                    <div key={type.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-white`}>
                          <type.icon className="w-8 h-8" />
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {type.partners} Partners
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partners Tab */}
            {activeTab === 'partners' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Mitra <span className="text-blue-600">Strategis</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Partner terpercaya yang mendukung pelayanan kesehatan berkualitas
                  </p>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                      { id: 'all', label: 'Semua' },
                      { id: 'pemerintah', label: 'Pemerintah' },
                      { id: 'swasta', label: 'Swasta' },
                      { id: 'pendidikan', label: 'Pendidikan' },
                      { id: 'internasional', label: 'Internasional' }
                    ].map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedType(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedType === filter.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPartners.map((partner) => (
                    <div key={partner.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(partner.type)}`}>
                          {partner.category}
                        </span>
                        <span className="text-xs text-gray-500">Sejak {partner.since}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Kolaborasi:</h4>
                        <div className="flex flex-wrap gap-1">
                          {partner.collaboration.slice(0, 2).map((collab, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                              {collab}
                            </span>
                          ))}
                          {partner.collaboration.length > 2 && (
                            <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs">
                              +{partner.collaboration.length - 2} lainnya
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Program <span className="text-blue-600">Kolaborasi</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Program-program strategis hasil kemitraan untuk peningkatan layanan kesehatan
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Medical Education Excellence',
                      partner: 'Universitas Andalas & FK UI',
                      description: 'Program pengembangan tenaga medis berkualitas tinggi melalui fellowship dan residensi terintegrasi',
                      benefits: ['Fellowship Program', 'Continuing Medical Education', 'Research Collaboration', 'International Exchange'],
                      status: 'Aktif',
                      participants: '150+ dokter'
                    },
                    {
                      title: 'Digital Health Innovation',
                      partner: 'WHO Indonesia & Tech Partners',
                      description: 'Implementasi teknologi digital untuk meningkatkan akses dan kualitas pelayanan kesehatan',
                      benefits: ['Telemedicine Platform', 'Electronic Health Records', 'AI Diagnostic Support', 'Mobile Health Apps'],
                      status: 'Development',
                      participants: '10,000+ pasien'
                    },
                    {
                      title: 'Universal Health Coverage',
                      partner: 'BPJS Kesehatan',
                      description: 'Program jaminan kesehatan universal dengan standar pelayanan prima',
                      benefits: ['Comprehensive Coverage', 'Quality Assurance', 'Cost Effectiveness', 'Patient Satisfaction'],
                      status: 'Aktif',
                      participants: '25,000+ peserta'
                    },
                    {
                      title: 'Medical Supply Chain',
                      partner: 'Kimia Farma & Suppliers',
                      description: 'Optimalisasi supply chain medis untuk ketersediaan obat dan alkes yang berkelanjutan',
                      benefits: ['Just-in-Time Delivery', 'Quality Assurance', 'Cost Optimization', 'Stock Management'],
                      status: 'Aktif',
                      participants: '100% coverage'
                    }
                  ].map((program, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          program.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {program.status}
                        </span>
                        <span className="text-sm text-blue-600 font-medium">{program.participants}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                      <p className="text-blue-600 text-sm font-medium mb-3">{program.partner}</p>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Program Benefits:</h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Opportunities Tab */}
            {activeTab === 'opportunities' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Peluang <span className="text-blue-600">Kemitraan</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Bergabunglah dengan kami dalam mengembangkan layanan kesehatan yang berkelanjutan
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Technology Innovation',
                      description: 'Partnership dalam pengembangan teknologi medis dan digital health solutions',
                      requirements: ['Healthcare Technology', 'Digital Innovation', 'Medical Devices', 'Software Development'],
                      contact: 'innovation@rsudmnatsir.go.id'
                    },
                    {
                      title: 'Medical Education',
                      description: 'Kolaborasi dalam program pendidikan medis dan pengembangan SDM kesehatan',
                      requirements: ['Medical Schools', 'Training Institutions', 'Professional Associations', 'International Universities'],
                      contact: 'education@rsudmnatsir.go.id'
                    },
                    {
                      title: 'Research Collaboration',
                      description: 'Partnership dalam penelitian medis dan clinical trials untuk inovasi kesehatan',
                      requirements: ['Research Institutions', 'Pharmaceutical Companies', 'Medical Device Manufacturers', 'Academic Partners'],
                      contact: 'research@rsudmnatsir.go.id'
                    },
                    {
                      title: 'CSR Healthcare',
                      description: 'Program Corporate Social Responsibility dalam bidang kesehatan masyarakat',
                      requirements: ['Corporate Partners', 'NGOs', 'Community Organizations', 'Government Agencies'],
                      contact: 'csr@rsudmnatsir.go.id'
                    },
                    {
                      title: 'International Partnership',
                      description: 'Kemitraan internasional untuk transfer knowledge dan best practices',
                      requirements: ['International Hospitals', 'Global Health Organizations', 'Medical Missions', 'Cultural Exchange'],
                      contact: 'international@rsudmnatsir.go.id'
                    },
                    {
                      title: 'Supplier Partnership',
                      description: 'Kemitraan strategis dalam supply chain medis dan logistik rumah sakit',
                      requirements: ['Medical Suppliers', 'Pharmaceutical Companies', 'Equipment Manufacturers', 'Service Providers'],
                      contact: 'procurement@rsudmnatsir.go.id'
                    }
                  ].map((opportunity, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Target Partners:</h4>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.requirements.map((req, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-600 mb-2">Contact:</p>
                        <a href={`mailto:${opportunity.contact}`} className="text-blue-600 text-sm font-medium hover:underline">
                          {opportunity.contact}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <HandshakeIcon className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Mari Berkolaborasi Bersama Kami
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dalam membangun ekosistem kesehatan yang berkelanjutan untuk masyarakat yang lebih sehat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnership@rsudmnatsir.go.id"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Proposal Kemitraan
              </a>
              <a
                href="tel:0751-32082"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
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
