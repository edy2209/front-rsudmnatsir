'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  BuildingStorefrontIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  StarIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  CakeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function KantinPage() {
  const [activeCategory, setActiveCategory] = useState('semua');

  const menuKategori = [
    { id: 'semua', name: 'Semua Menu', icon: ShoppingBagIcon },
    { id: 'makanan', name: 'Makanan', icon: CakeIcon },
    { id: 'minuman', name: 'Minuman', icon: BeakerIcon },
    { id: 'snack', name: 'Snack', icon: HeartIcon }
  ];

  const menuItems = [
    {
      kategori: 'makanan',
      nama: 'Nasi Padang',
      harga: 'Rp 15.000 - 25.000',
      deskripsi: 'Nasi putih dengan beragam lauk khas Minang',
      rating: 4.8,
      popular: true
    },
    {
      kategori: 'makanan',
      nama: 'Mie Ayam',
      harga: 'Rp 12.000',
      deskripsi: 'Mie ayam dengan kuah hangat dan ayam suwir',
      rating: 4.6,
      popular: false
    },
    {
      kategori: 'makanan',
      nama: 'Gado-gado',
      harga: 'Rp 10.000',
      deskripsi: 'Sayuran segar dengan bumbu kacang',
      rating: 4.5,
      popular: false
    },
    {
      kategori: 'makanan',
      nama: 'Soto Ayam',
      harga: 'Rp 13.000',
      deskripsi: 'Soto ayam kuning dengan nasi putih',
      rating: 4.7,
      popular: true
    },
    {
      kategori: 'minuman',
      nama: 'Es Teh Manis',
      harga: 'Rp 3.000',
      deskripsi: 'Teh manis dingin segar',
      rating: 4.3,
      popular: false
    },
    {
      kategori: 'minuman',
      nama: 'Jus Jeruk',
      harga: 'Rp 8.000',
      deskripsi: 'Jus jeruk segar tanpa pengawet',
      rating: 4.5,
      popular: true
    },
    {
      kategori: 'minuman',
      nama: 'Kopi Hitam',
      harga: 'Rp 5.000',
      deskripsi: 'Kopi hitam berkualitas',
      rating: 4.4,
      popular: false
    },
    {
      kategori: 'snack',
      nama: 'Pisang Goreng',
      harga: 'Rp 5.000',
      deskripsi: 'Pisang goreng crispy',
      rating: 4.2,
      popular: false
    },
    {
      kategori: 'snack',
      nama: 'Kerupuk Udang',
      harga: 'Rp 3.000',
      deskripsi: 'Kerupuk udang renyah',
      rating: 4.1,
      popular: false
    }
  ];

  const fasilitasKantin = [
    {
      nama: 'Area Makan Ber-AC',
      deskripsi: 'Ruang makan nyaman dengan pendingin udara',
      icon: BuildingStorefrontIcon
    },
    {
      nama: 'Menu Higienis',
      deskripsi: 'Semua makanan diolah dengan standar kebersihan tinggi',
      icon: CheckBadgeIcon
    },
    {
      nama: 'Harga Terjangkau',
      deskripsi: 'Harga ramah di kantong untuk semua kalangan',
      icon: CurrencyDollarIcon
    },
    {
      nama: 'Pelayanan Cepat',
      deskripsi: 'Pelayanan yang cepat dan ramah',
      icon: UserGroupIcon
    }
  ];

  const filteredMenu = activeCategory === 'semua' 
    ? menuItems 
    : menuItems.filter(item => item.kategori === activeCategory);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <BuildingStorefrontIcon className="h-12 w-12 text-orange-200" />
                <span className="bg-orange-500/20 text-orange-100 px-3 py-1 rounded-full text-sm font-medium">
                  Food Court
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Kantin
                <span className="block text-orange-200">RSUD M. Natsir</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Nikmati berbagai pilihan makanan dan minuman lezat dengan harga terjangkau 
                dalam suasana yang nyaman dan bersih untuk pasien, keluarga, dan staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <ClockIcon className="h-5 w-5" />
                  <span>06:00 - 22:00</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <CurrencyDollarIcon className="h-5 w-5" />
                  <span>Harga Terjangkau</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <CheckBadgeIcon className="h-5 w-5" />
                  <span>Higienis & Berkualitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Fasilitas Kantin */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Kantin</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kantin dengan fasilitas lengkap untuk kenyamanan bersantap Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fasilitasKantin.map((fasilitas, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="bg-gradient-to-br from-orange-400 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <fasilitas.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{fasilitas.nama}</h3>
                  <p className="text-gray-600 text-sm">{fasilitas.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Categories */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Menu Tersedia</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pilihan menu lengkap dengan cita rasa yang lezat dan bergizi
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {menuKategori.map((kategori) => (
                <button
                  key={kategori.id}
                  onClick={() => setActiveCategory(kategori.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === kategori.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                  }`}
                >
                  <kategori.icon className="h-5 w-5" />
                  {kategori.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredMenu.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800 text-lg">{item.nama}</h3>
                  {item.popular && (
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{item.deskripsi}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange-600 font-bold text-lg">{item.harga}</span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-600 text-sm">{item.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>

          {/* Informasi Kontak */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MapPinIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Lokasi</h3>
              <p className="text-gray-600">Lantai 1</p>
              <p className="text-sm text-gray-500">Gedung Utama</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <ClockIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Jam Operasional</h3>
              <p className="text-gray-600">06:00 - 22:00</p>
              <p className="text-sm text-gray-500">Setiap Hari</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <PhoneIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Informasi</h3>
              <p className="text-gray-600">(0751) 123-4567</p>
              <p className="text-sm text-gray-500">Ext. 888</p>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-white text-center">
            <CakeIcon className="h-12 w-12 mx-auto mb-4 text-orange-200" />
            <h3 className="text-2xl font-bold mb-4">Promo Spesial</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Dapatkan diskon 10% untuk pembelian paket makan lengkap! Berlaku setiap hari 
              untuk keluarga pasien dan pengunjung rumah sakit.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              Ambil Promo
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
