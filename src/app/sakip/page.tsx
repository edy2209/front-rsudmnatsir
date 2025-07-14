'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  ChartBarIcon, 
  DocumentTextIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  CogIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

// Data SAKIP dummy untuk demo
const dokumenSakip = [
  {
    id: 1,
    title: 'Laporan Kinerja RSUD M Natsir 2023',
    type: 'LKjIP',
    category: 'Laporan Tahunan',
    tahun: 2023,
    tanggal: '2024-03-15',
    status: 'final',
    ukuran: '2.8 MB',
    deskripsi: 'Laporan Kinerja Instansi Pemerintah RSUD M Natsir Solok tahun 2023'
  },
  {
    id: 2,
    title: 'Rencana Strategis 2024-2028',
    type: 'Renstra',
    category: 'Perencanaan',
    tahun: 2024,
    tanggal: '2024-01-10',
    status: 'final',
    ukuran: '3.2 MB',
    deskripsi: 'Rencana Strategis RSUD M Natsir periode 2024-2028'
  },
  {
    id: 3,
    title: 'Rencana Kerja dan Anggaran 2024',
    type: 'RKA',
    category: 'Anggaran',
    tahun: 2024,
    tanggal: '2023-12-20',
    status: 'final',
    ukuran: '4.1 MB',
    deskripsi: 'Rencana Kerja dan Anggaran RSUD M Natsir tahun 2024'
  },
  {
    id: 4,
    title: 'Penetapan Kinerja 2024',
    type: 'PK',
    category: 'Target Kinerja',
    tahun: 2024,
    tanggal: '2024-02-01',
    status: 'final',
    ukuran: '1.5 MB',
    deskripsi: 'Dokumen Penetapan Kinerja RSUD M Natsir tahun 2024'
  },
  {
    id: 5,
    title: 'Laporan Monitoring Triwulan III 2024',
    type: 'Monev',
    category: 'Monitoring',
    tahun: 2024,
    tanggal: '2024-10-15',
    status: 'draft',
    ukuran: '1.2 MB',
    deskripsi: 'Laporan monitoring dan evaluasi triwulan III tahun 2024'
  },
  {
    id: 6,
    title: 'Perjanjian Kinerja 2024',
    type: 'PK',
    category: 'Kontrak Kinerja',
    tahun: 2024,
    tanggal: '2024-01-31',
    status: 'final',
    ukuran: '2.1 MB',
    deskripsi: 'Perjanjian Kinerja antara Direktur dengan Bupati Solok'
  }
];

const indikatorKinerja = [
  {
    indikator: 'Bed Occupancy Rate (BOR)',
    target: '75%',
    realisasi: '78.5%',
    status: 'tercapai'
  },
  {
    indikator: 'Average Length of Stay (ALOS)',
    target: '4-6 hari',
    realisasi: '5.2 hari',
    status: 'tercapai'
  },
  {
    indikator: 'Turn Over Interval (TOI)',
    target: '1-3 hari',
    realisasi: '2.1 hari',
    status: 'tercapai'
  },
  {
    indikator: 'Gross Death Rate (GDR)',
    target: '<4.5%',
    realisasi: '3.8%',
    status: 'tercapai'
  },
  {
    indikator: 'Tingkat Kepuasan Pasien',
    target: '≥80%',
    realisasi: '85.3%',
    status: 'tercapai'
  },
  {
    indikator: 'Waktu Tanggap Pelayanan IGD',
    target: '≤5 menit',
    realisasi: '4.2 menit',
    status: 'tercapai'
  }
];

const kategoriFilter = ['Semua', 'Laporan Tahunan', 'Perencanaan', 'Anggaran', 'Target Kinerja', 'Monitoring', 'Kontrak Kinerja'];

export default function SakipPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedYear, setSelectedYear] = useState('Semua');

  const filteredDokumen = dokumenSakip.filter(dokumen => {
    const matchesSearch = dokumen.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dokumen.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || dokumen.category === selectedCategory;
    const matchesYear = selectedYear === 'Semua' || dokumen.tahun.toString() === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'final':
        return 'bg-green-100 text-green-600';
      case 'draft':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'tercapai':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      default:
        return <ClockIcon className="w-5 h-5 text-yellow-600" />;
    }
  };

  const years = Array.from(new Set(dokumenSakip.map(doc => doc.tahun))).sort((a, b) => b - a);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <ChartBarIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SAKIP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Sistem Akuntabilitas Kinerja Instansi Pemerintah
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
              RSUD M Natsir Solok berkomitmen untuk mencapai kinerja terbaik dalam pelayanan kesehatan 
              melalui sistem akuntabilitas yang transparan dan terukur
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📊 Akuntabilitas Terpercaya
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📈 Kinerja Terukur
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                🎯 Target Tercapai
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indikator Kinerja Utama */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Indikator Kinerja Utama 2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pencapaian indikator kinerja utama RSUD M Natsir berdasarkan standar pelayanan rumah sakit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indikatorKinerja.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-gray-800 text-sm">{item.indikator}</h3>
                  {getStatusIcon(item.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Target:</span>
                    <span className="font-medium text-blue-600">{item.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Realisasi:</span>
                    <span className="font-bold text-green-600">{item.realisasi}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu SAKIP */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Komponen SAKIP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sistem terintegrasi untuk perencanaan, pelaksanaan, monitoring, dan evaluasi kinerja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <ClipboardDocumentListIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Perencanaan Kinerja</h3>
              <p className="text-gray-600 text-sm">Rencana strategis dan rencana kerja tahunan</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <PresentationChartLineIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Pengukuran Kinerja</h3>
              <p className="text-gray-600 text-sm">Penetapan indikator dan target kinerja</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <DocumentTextIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Pelaporan Kinerja</h3>
              <p className="text-gray-600 text-sm">Laporan kinerja instansi pemerintah</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <CogIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Evaluasi Kinerja</h3>
              <p className="text-gray-600 text-sm">Review dan perbaikan berkelanjutan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dokumen SAKIP */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dokumen SAKIP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kumpulan dokumen perencanaan, pelaporan, dan evaluasi kinerja RSUD M Natsir
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari dokumen SAKIP..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {kategoriFilter.map(kategori => (
                  <option key={kategori} value={kategori}>{kategori}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Semua">Semua Tahun</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Dokumen List */}
          <div className="space-y-4">
            {filteredDokumen.map((dokumen) => (
              <div key={dokumen.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {dokumen.type}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {dokumen.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(dokumen.status)}`}>
                        {dokumen.status === 'final' ? 'Final' : 'Draft'}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {dokumen.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {dokumen.deskripsi}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4" />
                        {new Date(dokumen.tanggal).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <DocumentTextIcon className="w-4 h-4" />
                        {dokumen.ukuran}
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2 lg:w-32">
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <EyeIcon className="w-4 h-4" />
                      Lihat
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDokumen.length === 0 && (
            <div className="text-center py-12">
              <DocumentTextIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada dokumen ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter</p>
            </div>
          )}
        </div>
      </div>

      {/* Statistik SAKIP */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Capaian SAKIP 2024</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <ArrowTrendingUpIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Target Tercapai</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <UserGroupIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600 mb-1">85.3%</div>
              <div className="text-gray-600 text-sm">Kepuasan Pasien</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BuildingOfficeIcon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-600 mb-1">78.5%</div>
              <div className="text-gray-600 text-sm">BOR Tercapai</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <AcademicCapIcon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-600 mb-1">A</div>
              <div className="text-gray-600 text-sm">Nilai Akreditasi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transparansi & Akuntabilitas</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            RSUD M Natsir berkomitmen untuk terus meningkatkan kualitas pelayanan melalui 
            sistem akuntabilitas kinerja yang transparan dan dapat dipertanggungjawabkan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Lihat Laporan Terbaru
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Hubungi Tim SAKIP
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
