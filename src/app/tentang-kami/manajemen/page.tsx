'use client';

/**
 * Halaman Manajemen - RSUD M. Natsir Solok
 * Updated: 2025-07-13
 * Fitur: Struktur organisasi dan profil manajemen rumah sakit
 */

import React, { useState } from 'react';
import { UserIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon, BuildingOfficeIcon, UserGroupIcon, ShieldCheckIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

interface ManagementMember {
  id: number;
  name: string;
  position: string;
  department: string;
  education: string[];
  experience: string;
  phone?: string;
  email?: string;
  photo?: string;
  achievements: string[];
  expertise: string[];
}

interface Department {
  id: number;
  name: string;
  description: string;
  head: string;
  members: number;
  icon: string;
  color: string;
}

const managementTeam: ManagementMember[] = [
  {
    id: 1,
    name: 'dr. H. Ahmad Syafrizal, Sp.PD, M.Kes',
    position: 'Direktur Utama',
    department: 'Direksi',
    education: [
      'S3 Manajemen Kesehatan - Universitas Indonesia',
      'S2 Kesehatan Masyarakat - Universitas Gadjah Mada',
      'Sp.PD - Universitas Andalas'
    ],
    experience: '25 tahun',
    phone: '(0751) 32082 ext. 101',
    email: 'direktur@rsudmnatsir.go.id',
    achievements: [
      'Sertifikat Manajemen Rumah Sakit',
      'Penghargaan Direktur Terbaik Sumbar 2023',
      'ISO 9001:2015 Lead Auditor'
    ],
    expertise: [
      'Manajemen Strategis',
      'Tata Kelola RS',
      'Penyakit Dalam'
    ]
  },
  {
    id: 2,
    name: 'dr. Siti Rahma Dewi, Sp.A, M.M',
    position: 'Direktur Pelayanan Medik',
    department: 'Direksi',
    education: [
      'S2 Manajemen - Institut Pertanian Bogor',
      'Sp.A - Universitas Andalas',
      'S1 Kedokteran - Universitas Andalas'
    ],
    experience: '20 tahun',
    phone: '(0751) 32082 ext. 102',
    email: 'dir.medik@rsudmnatsir.go.id',
    achievements: [
      'Sertifikat Manajemen Pelayanan Medis',
      'Best Pediatrician Award 2022',
      'Akreditasi Surveyor KARS'
    ],
    expertise: [
      'Pediatri',
      'Manajemen Medis',
      'Quality Assurance'
    ]
  },
  {
    id: 3,
    name: 'Drs. Bambang Sutrisno, M.Si, Ak',
    position: 'Direktur Keuangan dan SDM',
    department: 'Direksi',
    education: [
      'S2 Manajemen Keuangan - Universitas Indonesia',
      'S1 Akuntansi - Universitas Padjadjaran'
    ],
    experience: '22 tahun',
    phone: '(0751) 32082 ext. 103',
    email: 'dir.keuangan@rsudmnatsir.go.id',
    achievements: [
      'Certified Public Accountant (CPA)',
      'Penghargaan CFO Terbaik 2023',
      'ISO 27001 Lead Implementer'
    ],
    expertise: [
      'Manajemen Keuangan',
      'Audit Internal',
      'Manajemen SDM'
    ]
  },
  {
    id: 4,
    name: 'Ir. Maya Sari, M.T',
    position: 'Direktur Penunjang dan Sarana',
    department: 'Direksi',
    education: [
      'S2 Teknik Sipil - Institut Teknologi Bandung',
      'S1 Teknik Sipil - Universitas Andalas'
    ],
    experience: '18 tahun',
    phone: '(0751) 32082 ext. 104',
    email: 'dir.sarana@rsudmnatsir.go.id',
    achievements: [
      'Project Management Professional (PMP)',
      'Green Building Specialist',
      'Penghargaan Best Infrastructure 2022'
    ],
    expertise: [
      'Manajemen Proyek',
      'Infrastruktur RS',
      'Teknologi Medis'
    ]
  }
];

const departments: Department[] = [
  {
    id: 1,
    name: 'Pelayanan Medis',
    description: 'Mengelola seluruh pelayanan medis dan keperawatan',
    head: 'dr. Siti Rahma Dewi, Sp.A, M.M',
    members: 450,
    icon: 'UserIcon',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Keuangan & SDM',
    description: 'Mengelola keuangan, administrasi, dan sumber daya manusia',
    head: 'Drs. Bambang Sutrisno, M.Si, Ak',
    members: 85,
    icon: 'BriefcaseIcon',
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Penunjang & Sarana',
    description: 'Mengelola fasilitas, peralatan, dan layanan penunjang',
    head: 'Ir. Maya Sari, M.T',
    members: 120,
    icon: 'BuildingOfficeIcon',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Komite Medis',
    description: 'Mengawasi mutu pelayanan medis dan kredensial',
    head: 'dr. Prof. Indra Wijaya, Sp.B',
    members: 25,
    icon: 'ShieldCheckIcon',
    color: 'bg-orange-500'
  }
];

const statistics = [
  { label: 'Total Karyawan', value: '750+', icon: UserGroupIcon },
  { label: 'Dokter Spesialis', value: '45', icon: AcademicCapIcon },
  { label: 'Tahun Pengalaman Rata-rata', value: '12 tahun', icon: StarIcon },
  { label: 'Tingkat Kepuasan Karyawan', value: '94%', icon: ShieldCheckIcon }
];

export default function ManajemenPage() {
  const [activeTab, setActiveTab] = useState('struktur');
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      UserIcon,
      BriefcaseIcon,
      BuildingOfficeIcon,
      ShieldCheckIcon,
      UserGroupIcon,
      AcademicCapIcon,
      StarIcon,
      ClockIcon
    };
    
    const IconComponent = iconMap[iconName] || UserIcon;
    return React.createElement(IconComponent, { className: "h-6 w-6" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-800 to-blue-900 text-white py-20 -mt-20 pt-32">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 md:grid-cols-12 gap-4 h-full">
              {[...Array(96)].map((_, i) => (
                <UserGroupIcon key={i} className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" style={{animationDelay: `${i * 0.05}s`}} />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <UserGroupIcon className="w-16 h-16 text-blue-300 animate-pulse" />
                <BriefcaseIcon className="w-12 h-12 text-slate-300 animate-bounce" />
                <BuildingOfficeIcon className="w-14 h-14 text-blue-400 animate-pulse" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Struktur <span className="text-blue-300">Manajemen</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                Kepemimpinan profesional dan berpengalaman untuk pelayanan kesehatan terbaik
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium">
                  Manajemen Profesional
                </span>
                <span className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium">
                  Berpengalaman 20+ Tahun
                </span>
                <span className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium">
                  Tersertifikasi Internasional
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
                <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
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
                { id: 'struktur', label: 'Struktur Organisasi' },
                { id: 'direksi', label: 'Jajaran Direksi' },
                { id: 'departemen', label: 'Departemen' }
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

            {/* Struktur Organisasi Tab */}
            {activeTab === 'struktur' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Struktur Organisasi RSUD M. Natsir
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Organisasi yang terstruktur dengan jelas untuk memberikan pelayanan kesehatan yang optimal
                  </p>
                </div>

                {/* Organizational Chart */}
                <div className="max-w-6xl mx-auto">
                  {/* Direktur Utama */}
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 mx-auto max-w-md shadow-xl">
                      <UserIcon className="w-12 h-12 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-1">Direktur Utama</h3>
                      <p className="text-blue-100 text-sm">dr. H. Ahmad Syafrizal, Sp.PD, M.Kes</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center mb-8">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>

                  {/* Three Directors */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <UserIcon className="w-10 h-10 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-1 text-center">Direktur Pelayanan Medik</h4>
                      <p className="text-green-100 text-sm text-center">dr. Siti Rahma Dewi, Sp.A, M.M</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <BriefcaseIcon className="w-10 h-10 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-1 text-center">Direktur Keuangan & SDM</h4>
                      <p className="text-purple-100 text-sm text-center">Drs. Bambang Sutrisno, M.Si, Ak</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <BuildingOfficeIcon className="w-10 h-10 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-1 text-center">Direktur Penunjang & Sarana</h4>
                      <p className="text-orange-100 text-sm text-center">Ir. Maya Sari, M.T</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Jajaran Direksi Tab */}
            {activeTab === 'direksi' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Jajaran Direksi
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Profil lengkap para direktur yang memimpin RSUD M. Natsir dengan dedikasi tinggi
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {managementTeam.map((member) => (
                    <div 
                      key={member.id} 
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                        selectedMember === member.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full flex-shrink-0">
                          <UserIcon className="w-8 h-8 text-blue-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                          <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{member.department}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4" />
                              <span>{member.experience}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <AcademicCapIcon className="w-4 h-4" />
                              <span>Tersertifikasi</span>
                            </div>
                          </div>

                          {selectedMember === member.id && (
                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Pendidikan:</h4>
                                <ul className="space-y-1">
                                  {member.education.map((edu, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                      <AcademicCapIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                      <span>{edu}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Keahlian:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.expertise.map((skill, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Prestasi:</h4>
                                <ul className="space-y-1">
                                  {member.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                      <StarIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {member.phone && (
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                  <div className="flex items-center gap-2">
                                    <PhoneIcon className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">{member.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">{member.email}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Departemen Tab */}
            {activeTab === 'departemen' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Departemen & Unit Kerja
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Pembagian departemen yang sistematis untuk efektivitas pelayanan dan manajemen
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {departments.map((dept) => (
                    <div key={dept.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className={`${dept.color} p-3 rounded-xl`}>
                          {getIconComponent(dept.icon)}
                          <span className="text-white"></span>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                          <p className="text-gray-600 mb-4 text-sm">{dept.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Kepala:</span>
                              <span className="text-sm font-medium text-gray-800">{dept.head}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Jumlah Anggota:</span>
                              <span className="text-sm font-bold text-blue-600">{dept.members} orang</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-blue-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hubungi Manajemen
            </h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Tim manajemen kami siap mendengar masukan dan saran untuk peningkatan pelayanan
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <PhoneIcon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <p className="text-white font-semibold">Sekretariat Direktur</p>
                <p className="text-slate-200 text-sm">(0751) 32082 ext. 100</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <EnvelopeIcon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <p className="text-white font-semibold">Email Resmi</p>
                <p className="text-slate-200 text-sm">manajemen@rsudmnatsir.go.id</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <ClockIcon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <p className="text-white font-semibold">Jam Kerja</p>
                <p className="text-slate-200 text-sm">Senin - Jumat: 08:00-16:00</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Hubungi Sekretariat
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Kirim Email
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
