'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  ExclamationTriangleIcon,
  ClockIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  BellIcon,
  FireIcon,
  InformationCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

export default function InformasiSertaMertaPage() {
  const [selectedPriority, setSelectedPriority] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const informasiSertaMerta = [
    {
      id: 1,
      title: 'Pengumuman Gangguan Sistem Informasi SIMRS',
      priority: 'tinggi',
      description: 'Pemberitahuan gangguan sementara pada sistem informasi manajemen rumah sakit yang mempengaruhi layanan pendaftaran online.',
      publishDate: '2024-12-15T09:30:00',
      category: 'sistem',
      status: 'aktif',
      urgencyLevel: 'Segera',
      affectedServices: ['Pendaftaran Online', 'Jadwal Dokter', 'Hasil Lab Online'],
      estimatedResolution: '2024-12-15T15:00:00',
      isEmergency: true
    },
    {
      id: 2,
      title: 'Perubahan Jadwal Pelayanan Hari Libur Nasional',
      priority: 'sedang',
      description: 'Penyesuaian jadwal pelayanan pada hari libur nasional dan cuti bersama akhir tahun 2024.',
      publishDate: '2024-12-10T14:20:00',
      category: 'pelayanan',
      status: 'aktif',
      urgencyLevel: 'Penting',
      affectedServices: ['Rawat Jalan', 'Farmasi', 'Laboratorium'],
      estimatedResolution: null,
      isEmergency: false
    },
    {
      id: 3,
      title: 'Protokol Kesehatan Terbaru COVID-19',
      priority: 'tinggi',
      description: 'Update protokol kesehatan dan prosedur kunjungan pasien sesuai dengan perkembangan situasi COVID-19 terkini.',
      publishDate: '2024-12-08T11:15:00',
      category: 'kesehatan',
      status: 'aktif',
      urgencyLevel: 'Segera',
      affectedServices: ['Semua Unit', 'IGD', 'Rawat Inap'],
      estimatedResolution: null,
      isEmergency: true
    },
    {
      id: 4,
      title: 'Pemadaman Listrik Terjadwal Area Parkir',
      priority: 'rendah',
      description: 'Pemberitahuan pemadaman listrik terjadwal untuk maintenance sistem kelistrikan area parkir.',
      publishDate: '2024-12-05T16:45:00',
      category: 'fasilitas',
      status: 'selesai',
      urgencyLevel: 'Informasi',
      affectedServices: ['Area Parkir', 'Penerangan Luar'],
      estimatedResolution: '2024-12-06T08:00:00',
      isEmergency: false
    },
    {
      id: 5,
      title: 'Perubahan Tarif Layanan Sesuai PMK Terbaru',
      priority: 'sedang',
      description: 'Penyesuaian tarif beberapa jenis layanan kesehatan sesuai dengan Peraturan Menteri Kesehatan terbaru.',
      publishDate: '2024-12-01T08:00:00',
      category: 'administrasi',
      status: 'aktif',
      urgencyLevel: 'Penting',
      affectedServices: ['Billing', 'Kasir', 'Administrasi'],
      estimatedResolution: null,
      isEmergency: false
    },
    {
      id: 6,
      title: 'Layanan Telemedicine Maintenance',
      priority: 'sedang',
      description: 'Maintenance rutin sistem telemedicine untuk peningkatan kualitas layanan konsultasi online.',
      publishDate: '2024-11-28T20:30:00',
      category: 'sistem',
      status: 'selesai',
      urgencyLevel: 'Penting',
      affectedServices: ['Telemedicine', 'Konsultasi Online'],
      estimatedResolution: '2024-11-29T06:00:00',
      isEmergency: false
    }
  ];

  const priorityOptions = [
    { value: 'semua', label: 'Semua Prioritas', icon: InformationCircleIcon, color: 'gray' },
    { value: 'tinggi', label: 'Prioritas Tinggi', icon: ExclamationTriangleIcon, color: 'red' },
    { value: 'sedang', label: 'Prioritas Sedang', icon: BellIcon, color: 'yellow' },
    { value: 'rendah', label: 'Prioritas Rendah', icon: InformationCircleIcon, color: 'blue' }
  ];

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'tinggi':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'sedang':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rendah':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'aktif':
        return 'bg-green-100 text-green-800';
      case 'selesai':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const filteredInformasi = informasiSertaMerta.filter(item => {
    const matchesPriority = selectedPriority === 'semua' || item.priority === selectedPriority;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Baru saja';
    if (diffInHours < 24) return `${diffInHours} jam lalu`;
    const days = Math.floor(diffInHours / 24);
    return `${days} hari lalu`;
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-6 h-full transform -rotate-12">
            {[...Array(100)].map((_, i) => (
              <BellIcon key={i} className="w-8 h-8 text-white animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <SpeakerWaveIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-orange-200 font-medium text-lg">PPID RSUD M. Natsir</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Informasi Serta Merta
              <span className="block text-orange-300">Pengumuman Penting</span>
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl">
              Informasi penting dan mendesak yang perlu segera diketahui publik terkait layanan RSUD M. Natsir
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{informasiSertaMerta.filter(item => item.status === 'aktif').length}</div>
                <div className="text-orange-200 text-sm">Info Aktif</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{informasiSertaMerta.filter(item => item.isEmergency).length}</div>
                <div className="text-orange-200 text-sm">Darurat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">Real-time</div>
                <div className="text-orange-200 text-sm">Update</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Warning Indicator */}
        <div className="absolute top-10 right-10 animate-pulse">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <ExclamationTriangleIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Emergency Alerts */}
      {informasiSertaMerta.filter(item => item.isEmergency && item.status === 'aktif').length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center gap-3">
              <FireIcon className="w-6 h-6 text-red-500 animate-bounce" />
              <div>
                <h3 className="text-red-800 font-semibold">Peringatan Darurat Aktif</h3>
                <p className="text-red-700">
                  Terdapat {informasiSertaMerta.filter(item => item.isEmergency && item.status === 'aktif').length} informasi darurat yang memerlukan perhatian segera.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {/* Search Bar */}
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pengumuman atau informasi darurat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Priority Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Prioritas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {priorityOptions.map((priority) => {
                  const Icon = priority.icon;
                  return (
                    <button
                      key={priority.value}
                      onClick={() => setSelectedPriority(priority.value)}
                      className={`flex items-center gap-2 p-3 rounded-lg font-medium transition-all duration-300 ${
                        selectedPriority === priority.value
                          ? 'bg-red-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{priority.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Information List */}
        <div className="space-y-6">
          {filteredInformasi.map((item) => (
            <div key={item.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 ${
              item.isEmergency ? 'border-l-4 border-red-500' : ''
            }`}>
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    {item.isEmergency && (
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityStyle(item.priority)}`}>
                          {item.urgencyLevel}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
                          {item.status === 'aktif' ? 'Aktif' : 'Selesai'}
                        </span>
                        {item.isEmergency && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full animate-pulse">
                            DARURAT
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1 mb-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{getTimeAgo(item.publishDate)}</span>
                    </div>
                    <div>{formatDateTime(item.publishDate)}</div>
                  </div>
                </div>

                {/* Affected Services */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Layanan yang Terpengaruh:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.affectedServices.map((service, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resolution Time */}
                {item.estimatedResolution && item.status === 'aktif' && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-800">
                      <ClockIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Estimasi Penyelesaian: {formatDateTime(item.estimatedResolution)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 sm:flex-none bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    <span>Detail</span>
                  </button>
                  <button className="flex-1 sm:flex-none bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    <span>Unduh</span>
                  </button>
                  <button className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <SpeakerWaveIcon className="w-4 h-4" />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredInformasi.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada informasi ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter prioritas</p>
          </div>
        )}

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <ShieldExclamationIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Informasi Darurat atau Keluhan Mendesak?
          </h3>
          <p className="text-red-100 mb-6 text-lg max-w-2xl mx-auto">
            Hubungi layanan darurat RSUD M. Natsir atau laporkan situasi yang memerlukan perhatian segera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Hubungi Darurat: (0755) 21015
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
              Laporkan Situasi Darurat
            </button>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
            <InformationCircleIcon className="w-5 h-5" />
            Catatan Penting
          </h4>
          <ul className="space-y-2 text-orange-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>Informasi serta merta adalah informasi yang wajib diumumkan secara langsung kepada masyarakat</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>Informasi darurat akan dikirimkan melalui berbagai saluran komunikasi resmi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              <span>Pastikan selalu mengecek situs resmi untuk informasi terbaru dan akurat</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
