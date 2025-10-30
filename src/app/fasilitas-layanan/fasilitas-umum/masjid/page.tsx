'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  BuildingLibraryIcon,
  ClockIcon,
  MapPinIcon,
  SpeakerWaveIcon,
  BookOpenIcon,
  UserGroupIcon,
  HeartIcon,
  StarIcon,
  CalendarDaysIcon,
  SunIcon,
  MoonIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function MasjidPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('jadwal');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'jadwal', name: 'Jadwal Sholat', icon: ClockIcon },
    { id: 'fasilitas', name: 'Fasilitas', icon: BuildingLibraryIcon },
    { id: 'kegiatan', name: 'Kegiatan', icon: CalendarDaysIcon }
  ];

  const jadwalSholat = [
    { waktu: 'Subuh', jam: '05:15', icon: SunIcon, status: 'completed' },
    { waktu: 'Dzuhur', jam: '12:10', icon: SunIcon, status: 'current' },
    { waktu: 'Ashar', jam: '15:25', icon: CloudIcon, status: 'upcoming' },
    { waktu: 'Maghrib', jam: '18:45', icon: MoonIcon, status: 'upcoming' },
    { waktu: 'Isya', jam: '19:55', icon: MoonIcon, status: 'upcoming' }
  ];

  const fasilitasMasjid = [
    {
      nama: 'Ruang Sholat Utama',
      kapasitas: '200 Jamaah',
      deskripsi: 'Ruang sholat utama dengan AC dan karpet yang nyaman',
      fasilitas: ['AC', 'Karpet', 'Sound System', 'Mihrab']
    },
    {
      nama: 'Ruang Sholat Wanita',
      kapasitas: '100 Jamaah',
      deskripsi: 'Ruang sholat khusus wanita yang terpisah dan nyaman',
      fasilitas: ['AC', 'Karpet', 'Mukena', 'Sekat Privasi']
    },
    {
      nama: 'Area Wudhu',
      kapasitas: '20 Orang',
      deskripsi: 'Tempat wudhu dengan air bersih dan fasilitas lengkap',
      fasilitas: ['Air Mengalir', 'Cermin', 'Handuk', 'Sabun']
    },
    {
      nama: 'Perpustakaan Mini',
      kapasitas: '30 Buku',
      deskripsi: 'Koleksi Al-Quran dan buku-buku islami',
      fasilitas: ['Al-Quran', 'Hadits', 'Buku Doa', 'Tafsir']
    }
  ];

  const kegiatanRutin = [
    {
      nama: 'Sholat Berjamaah',
      waktu: '5 Waktu',
      deskripsi: 'Sholat berjamaah untuk semua waktu sholat',
      peserta: 'Semua'
    },
    {
      nama: 'Kajian Mingguan',
      waktu: 'Jumat 13:00',
      deskripsi: 'Kajian agama setelah sholat Jumat',
      peserta: 'Umum'
    },
    {
      nama: 'Baca Al-Quran',
      waktu: 'Setelah Maghrib',
      deskripsi: 'Tadarus Al-Quran bersama',
      peserta: 'Jamaah'
    },
    {
      nama: 'Pengajian Bulanan',
      waktu: 'Minggu Pertama',
      deskripsi: 'Pengajian rutin setiap bulan',
      peserta: 'Semua'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-gray-100 text-gray-600';
      case 'current': return 'bg-green-100 text-green-600';
      case 'upcoming': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white -mt-20 pt-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <BuildingLibraryIcon className="h-12 w-12 text-teal-200" />
                <span className="bg-teal-500/20 text-teal-100 px-3 py-1 rounded-full text-sm font-medium">
                  Spiritual Center
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Masjid
                <span className="block text-teal-200">RSUD M. Natsir</span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Tempat ibadah yang tenang dan nyaman untuk pasien, keluarga, dan staf rumah sakit. 
                Melayani kebutuhan spiritual dengan fasilitas lengkap dan kebersihan terjaga.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ClockIcon className="h-5 w-5" />
                  <span>24 Jam</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <UserGroupIcon className="h-5 w-5" />
                  <span>Kapasitas 300 Jamaah</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <HeartIcon className="h-5 w-5" />
                  <span>Lingkungan Tenang</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          {/* Current Time Display */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Waktu Sekarang</h3>
            <div className="text-3xl font-bold text-teal-600">
              {currentTime.toLocaleTimeString('id-ID')}
            </div>
            <div className="text-gray-500">
              {currentTime.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Jadwal Sholat Tab */}
          {activeTab === 'jadwal' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Jadwal Sholat Hari Ini</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Jadwal waktu sholat berjamaah di Masjid RSUD M. Natsir
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {jadwalSholat.map((sholat, index) => (
                  <div key={index} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 ${
                    sholat.status === 'current' ? 'border-green-300' : 'border-transparent'
                  }`}>
                    <div className="mb-4">
                      <sholat.icon className="h-8 w-8 mx-auto text-teal-600 mb-2" />
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(sholat.status)}`}>
                        {sholat.status === 'completed' ? 'Selesai' : 
                         sholat.status === 'current' ? 'Sekarang' : 'Akan Datang'}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{sholat.waktu}</h3>
                    <div className="text-2xl font-bold text-teal-600">{sholat.jam}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl p-8 text-white text-center">
                <SpeakerWaveIcon className="h-12 w-12 mx-auto mb-4 text-teal-200" />
                <h3 className="text-2xl font-bold mb-4">Adzan Otomatis</h3>
                <p className="text-teal-100 max-w-2xl mx-auto">
                  Sistem adzan otomatis akan berbunyi 5 menit sebelum waktu sholat. 
                  Jamaah diharapkan bersiap untuk melaksanakan sholat berjamaah.
                </p>
              </div>
            </div>
          )}

          {/* Fasilitas Tab */}
          {activeTab === 'fasilitas' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Masjid</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fasilitas lengkap untuk mendukung ibadah yang khusyuk dan nyaman
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {fasilitasMasjid.map((fasilitas, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-lg">
                        <BuildingLibraryIcon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">{fasilitas.nama}</h3>
                        <p className="text-gray-600 mb-3">{fasilitas.deskripsi}</p>
                        <div className="flex items-center gap-2 text-sm text-teal-600 mb-3">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>{fasilitas.kapasitas}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {fasilitas.fasilitas.map((item, idx) => (
                            <span key={idx} className="bg-teal-100 text-teal-600 px-2 py-1 rounded text-xs">
                              {item}
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

          {/* Kegiatan Tab */}
          {activeTab === 'kegiatan' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Kegiatan Rutin</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Berbagai kegiatan spiritual dan pengajian yang diselenggarakan secara rutin
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {kegiatanRutin.map((kegiatan, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <CalendarDaysIcon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">{kegiatan.nama}</h3>
                        <p className="text-gray-600 mb-3">{kegiatan.deskripsi}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4" />
                            <span>{kegiatan.waktu}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <UserGroupIcon className="h-4 w-4" />
                            <span>Peserta: {kegiatan.peserta}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <BookOpenIcon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kegiatan Khusus</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Untuk informasi kegiatan khusus seperti peringatan hari besar Islam, 
                    silakan hubungi takmir masjid atau periksa pengumuman di papan informasi.
                  </p>
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                    Hubungi Takmir
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MapPinIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Lokasi</h3>
              <p className="text-gray-600">Lantai 2</p>
              <p className="text-sm text-gray-500">Gedung Utama</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <ClockIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Buka</h3>
              <p className="text-gray-600">24 Jam</p>
              <p className="text-sm text-gray-500">Setiap Hari</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <UserGroupIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Kapasitas</h3>
              <p className="text-gray-600">300 Jamaah</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
