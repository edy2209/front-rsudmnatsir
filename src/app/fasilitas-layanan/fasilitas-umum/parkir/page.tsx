'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  TruckIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  CameraIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function ParkirPage() {
  const [activeZone, setActiveZone] = useState('zona-a');

  const zonasParkir = [
    {
      id: 'zona-a',
      nama: 'Zona A - VIP',
      kapasitas: 50,
      tersedia: 12,
      tarif: 'Rp 5.000/jam',
      deskripsi: 'Area parkir khusus untuk VIP dan tamu penting',
      fasilitas: ['CCTV', 'Security 24 Jam', 'Atap Tertutup', 'Akses Mudah'],
      warna: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'zona-b',
      nama: 'Zona B - Umum',
      kapasitas: 200,
      tersedia: 45,
      tarif: 'Rp 2.000/jam',
      deskripsi: 'Area parkir umum untuk pengunjung rumah sakit',
      fasilitas: ['CCTV', 'Penerangan', 'Rambu Jelas', 'Akses Luas'],
      warna: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'zona-c',
      nama: 'Zona C - Staff',
      kapasitas: 150,
      tersedia: 28,
      tarif: 'Gratis',
      deskripsi: 'Area parkir khusus untuk staff dan karyawan',
      fasilitas: ['Kartu Akses', 'Security', 'Area Terpantau', 'Dekat Pintu Masuk'],
      warna: 'from-green-600 to-emerald-600'
    },
    {
      id: 'zona-d',
      nama: 'Zona D - Motor',
      kapasitas: 300,
      tersedia: 89,
      tarif: 'Rp 1.000/jam',
      deskripsi: 'Area parkir khusus untuk sepeda motor',
      fasilitas: ['Atap Tertutup', 'Garis Parkir', 'Akses Dekat', 'Keamanan Terjaga'],
      warna: 'from-orange-600 to-red-600'
    }
  ];

  const aturanParkir = [
    {
      aturan: 'Parkir sesuai dengan zona yang ditentukan',
      tipe: 'wajib'
    },
    {
      aturan: 'Bayar tarif parkir sesuai dengan durasi',
      tipe: 'wajib'
    },
    {
      aturan: 'Kendaraan dikunci dan barang berharga diamankan',
      tipe: 'penting'
    },
    {
      aturan: 'Maksimal waktu parkir 12 jam',
      tipe: 'info'
    },
    {
      aturan: 'Dilarang meninggalkan kendaraan lebih dari 24 jam',
      tipe: 'larangan'
    },
    {
      aturan: 'Kendaraan rusak/mogok segera hubungi security',
      tipe: 'info'
    }
  ];

  const fasilitasKeamanan = [
    {
      nama: 'CCTV 24 Jam',
      deskripsi: 'Sistem pengawasan video di seluruh area parkir',
      icon: CameraIcon
    },
    {
      nama: 'Security Patrol',
      deskripsi: 'Petugas keamanan berkeliling setiap 30 menit',
      icon: ShieldCheckIcon
    },
    {
      nama: 'Sistem Tiket',
      deskripsi: 'Tiket parkir otomatis dengan barcode',
      icon: LockClosedIcon
    },
    {
      nama: 'Emergency Call',
      deskripsi: 'Tombol darurat tersedia di setiap zona',
      icon: PhoneIcon
    }
  ];

  const selectedZona = zonasParkir.find(zona => zona.id === activeZone);
  const occupancyRate = selectedZona ? ((selectedZona.kapasitas - selectedZona.tersedia) / selectedZona.kapasitas) * 100 : 0;

  const getOccupancyColor = (rate: number) => {
    if (rate < 50) return 'text-green-600';
    if (rate < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAturanIcon = (tipe: string) => {
    switch (tipe) {
      case 'wajib': return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'larangan': return <XCircleIcon className="h-5 w-5 text-red-600" />;
      case 'penting': return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />;
      default: return <InformationCircleIcon className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-slate-700 to-gray-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <TruckIcon className="h-12 w-12 text-slate-300" />
                <span className="bg-slate-600/20 text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                  Parking Management
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Area Parkir
                <span className="block text-slate-300">RSUD M. Natsir</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Sistem parkir terintegrasi dengan keamanan 24 jam, tarif terjangkau, dan kapasitas 
                yang memadai untuk kenyamanan pengunjung rumah sakit.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ClockIcon className="h-5 w-5" />
                  <span>24 Jam</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <TruckIcon className="h-5 w-5" />
                  <span>700 Slot Parkir</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span>Keamanan Terjamin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Real-time Status */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Status Parkir Real-time</h2>
            
            {/* Zone Selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {zonasParkir.map((zona) => (
                <button
                  key={zona.id}
                  onClick={() => setActiveZone(zona.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeZone === zona.id
                      ? `bg-gradient-to-r ${zona.warna} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {zona.nama}
                </button>
              ))}
            </div>

            {/* Selected Zone Details */}
            {selectedZona && (
              <div className={`bg-gradient-to-r ${selectedZona.warna} rounded-xl p-6 text-white mb-6`}>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">{selectedZona.kapasitas}</div>
                    <div className="text-sm opacity-90">Total Slot</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">{selectedZona.tersedia}</div>
                    <div className="text-sm opacity-90">Tersedia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">{occupancyRate.toFixed(0)}%</div>
                    <div className="text-sm opacity-90">Terisi</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">{selectedZona.tarif}</div>
                    <div className="text-sm opacity-90">Tarif</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="opacity-90">{selectedZona.deskripsi}</p>
                </div>
              </div>
            )}

            {/* Fasilitas zona terpilih */}
            {selectedZona && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedZona.fasilitas.map((fasilitas, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <span className="text-sm text-gray-700">{fasilitas}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Zona Parkir Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {zonasParkir.map((zona) => {
              const rate = ((zona.kapasitas - zona.tersedia) / zona.kapasitas) * 100;
              return (
                <div key={zona.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <TruckIcon className="h-8 w-8 mx-auto text-gray-600 mb-2" />
                    <h3 className="font-bold text-gray-800">{zona.nama}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tersedia</span>
                      <span className={`font-bold ${getOccupancyColor(rate)}`}>
                        {zona.tersedia}/{zona.kapasitas}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          rate < 50 ? 'bg-green-500' : 
                          rate < 80 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${rate}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-lg font-bold text-gray-800">{zona.tarif}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fasilitas Keamanan */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Keamanan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sistem keamanan berlapis untuk melindungi kendaraan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fasilitasKeamanan.map((fasilitas, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="bg-gradient-to-br from-slate-600 to-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <fasilitas.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{fasilitas.nama}</h3>
                  <p className="text-gray-600 text-sm">{fasilitas.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aturan Parkir */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Aturan & Ketentuan Parkir</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {aturanParkir.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  {getAturanIcon(item.tipe)}
                  <span className="text-gray-700">{item.aturan}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <PhoneIcon className="h-8 w-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Security</h3>
              <p className="text-gray-600">(0751) 123-4567</p>
              <p className="text-sm text-gray-500">Ext. 999</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <ClockIcon className="h-8 w-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Operasional</h3>
              <p className="text-gray-600">24 Jam</p>
              <p className="text-sm text-gray-500">Setiap Hari</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MapPinIcon className="h-8 w-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Lokasi</h3>
              <p className="text-gray-600">4 Zona Parkir</p>
              <p className="text-sm text-gray-500">Gedung Utama</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white text-center">
            <ExclamationTriangleIcon className="h-12 w-12 mx-auto mb-4 text-red-200" />
            <h3 className="text-2xl font-bold mb-4">Kontak Darurat</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Jika terjadi masalah dengan kendaraan Anda atau situasi darurat di area parkir, 
              segera hubungi petugas security atau gunakan tombol emergency yang tersedia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors">
                Call Security: 999
              </button>
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Emergency Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
