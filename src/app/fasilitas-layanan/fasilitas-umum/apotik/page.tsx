'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  HeartIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  PlusIcon,
  MinusIcon,
  BeakerIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

export default function ApotikPage() {
  const [activeTab, setActiveTab] = useState('layanan');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'layanan', name: 'Layanan Farmasi', icon: BeakerIcon },
    { id: 'produk', name: 'Produk', icon: CubeIcon },
    { id: 'informasi', name: 'Informasi', icon: InformationCircleIcon }
  ];

  const layananFarmasi = [
    {
      nama: 'Pelayanan Obat Rawat Jalan',
      deskripsi: 'Penyediaan obat untuk pasien rawat jalan dengan konsultasi farmasis',
      waktu: '24 Jam',
      lokasi: 'Lantai 1 Gedung Utama'
    },
    {
      nama: 'Pelayanan Obat Rawat Inap',
      deskripsi: 'Distribusi obat untuk pasien rawat inap dengan monitoring ketat',
      waktu: '24 Jam',
      lokasi: 'Unit Distribusi Sentral'
    },
    {
      nama: 'Konsultasi Farmasis',
      deskripsi: 'Konsultasi tentang penggunaan obat, efek samping, dan interaksi obat',
      waktu: '07:00 - 21:00',
      lokasi: 'Counter Informasi Obat'
    },
    {
      nama: 'Pelayanan Obat Emergency',
      deskripsi: 'Penyediaan obat darurat untuk unit gawat darurat',
      waktu: '24 Jam',
      lokasi: 'IGD'
    }
  ];

  const kategoriProduk = [
    {
      kategori: 'Obat Bebas',
      jumlah: '500+',
      contoh: 'Paracetamol, Antasida, Vitamin',
      warna: 'bg-green-100 text-green-800'
    },
    {
      kategori: 'Obat Bebas Terbatas',
      jumlah: '200+',
      contoh: 'Obat Batuk, Anti Histamin',
      warna: 'bg-yellow-100 text-yellow-800'
    },
    {
      kategori: 'Obat Keras',
      jumlah: '1000+',
      contoh: 'Antibiotik, Obat Jantung',
      warna: 'bg-red-100 text-red-800'
    },
    {
      kategori: 'Obat Psikotropika',
      jumlah: '50+',
      contoh: 'Obat Psikiatri terkontrol',
      warna: 'bg-purple-100 text-purple-800'
    }
  ];

  const faqData = [
    {
      pertanyaan: 'Bagaimana cara menebus resep di apotik?',
      jawaban: 'Bawa resep asli dari dokter ke loket farmasi. Farmasis akan memverifikasi resep, menyiapkan obat, dan memberikan konsultasi tentang penggunaan obat.'
    },
    {
      pertanyaan: 'Apakah tersedia obat generik?',
      jawaban: 'Ya, kami menyediakan berbagai obat generik yang berkualitas dengan harga terjangkau sesuai dengan kebijakan pemerintah.'
    },
    {
      pertanyaan: 'Bagaimana jika obat yang diresepkan tidak tersedia?',
      jawaban: 'Farmasis akan mencari alternatif obat yang setara atau menghubungi dokter untuk konsultasi penggantian obat.'
    },
    {
      pertanyaan: 'Apakah bisa konsultasi tentang obat tanpa resep?',
      jawaban: 'Ya, farmasis kami siap memberikan konsultasi tentang penggunaan obat bebas, suplemen, dan produk kesehatan lainnya.'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <BeakerIcon className="h-12 w-12 text-emerald-200" />
                <span className="bg-emerald-500/20 text-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
                  Farmasi Rumah Sakit
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Apotik & Farmasi
                <span className="block text-emerald-200">RSUD M. Natsir</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Pelayanan farmasi terpadu dengan standar internasional, menyediakan obat berkualitas 
                dan konsultasi farmasis profesional untuk mendukung kesembuhan pasien.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ClockIcon className="h-5 w-5" />
                  <span>24 Jam</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <HeartIcon className="h-5 w-5" />
                  <span>1000+ Jenis Obat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Layanan Farmasi Tab */}
          {activeTab === 'layanan' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Farmasi Kami</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Kami menyediakan layanan farmasi komprehensif dengan dukungan farmasis berpengalaman
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {layananFarmasi.map((layanan, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <BeakerIcon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">{layanan.nama}</h3>
                        <p className="text-gray-600 mb-4">{layanan.deskripsi}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4" />
                            <span>{layanan.waktu}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{layanan.lokasi}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Produk Tab */}
          {activeTab === 'produk' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Kategori Produk</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Berbagai kategori obat dan produk kesehatan tersedia dengan stok terjamin
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kategoriProduk.map((kategori, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CubeIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{kategori.kategori}</h3>
                      <div className="text-2xl font-bold text-emerald-600 mb-2">{kategori.jumlah}</div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${kategori.warna}`}>
                        {kategori.contoh}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
                <div className="text-center">
                  <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
                  <h3 className="text-2xl font-bold mb-4">Jaminan Kualitas</h3>
                  <p className="text-emerald-100 max-w-2xl mx-auto">
                    Semua produk obat dan alat kesehatan telah tersertifikasi BPOM dan disimpan 
                    sesuai standar penyimpanan yang baik untuk menjamin kualitas dan keamanan.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Informasi Tab */}
          {activeTab === 'informasi' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Informasi Penting</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  FAQ dan informasi yang sering ditanyakan tentang layanan farmasi
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <PhoneIcon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Hubungi Farmasi</h3>
                  <p className="text-gray-600">(0751) 123-4567</p>
                  <p className="text-sm text-gray-500">Ext. 234</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <ClockIcon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">24 Jam</p>
                  <p className="text-sm text-gray-500">Setiap Hari</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <MapPinIcon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Lokasi</h3>
                  <p className="text-gray-600">Lantai 1</p>
                  <p className="text-sm text-gray-500">Gedung Utama</p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">{faq.pertanyaan}</span>
                        {expandedFaq === index ? (
                          <MinusIcon className="h-5 w-5 text-emerald-600" />
                        ) : (
                          <PlusIcon className="h-5 w-5 text-emerald-600" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4">
                          <p className="text-gray-600">{faq.jawaban}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Konsultasi Farmasis?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Tim farmasis kami siap membantu Anda dengan konsultasi obat dan produk kesehatan
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
              Hubungi Farmasis
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
