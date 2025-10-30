'use client';

import { motion } from 'framer-motion';
import { 
  NewspaperIcon, 
  EyeIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  PrinterIcon,
  DocumentDuplicateIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';

export default function LeafletPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const categories = [
    { id: 'all', name: 'Semua', icon: '📄', count: 15 },
    { id: 'pencegahan', name: 'Pencegahan Penyakit', icon: '🛡️', count: 6 },
    { id: 'ibu-anak', name: 'Kesehatan Ibu & Anak', icon: '👩‍👶', count: 4 },
    { id: 'gaya-hidup', name: 'Gaya Hidup Sehat', icon: '💪', count: 3 },
    { id: 'darurat', name: 'Kesehatan Darurat', icon: '🚨', count: 2 }
  ];

  const leafletItems = [
    {
      id: 1,
      title: "Pencegahan Demam Berdarah Dengue (DBD)",
      category: "pencegahan",
      description: "Panduan lengkap pencegahan DBD dengan 3M Plus dan pengenalan gejala dini",
      date: "2024-01-15",
      views: 3240,
      downloads: 567,
      shares: 89,
      tags: ["dbd", "demam-berdarah", "nyamuk", "3m-plus"],
      thumbnail: "bg-gradient-to-br from-red-500 to-orange-600",
      format: "A4 - Lipat 3",
      language: "Bahasa Indonesia",
      updated: "Terbaru"
    },
    {
      id: 2,
      title: "ASI Eksklusif 6 Bulan Pertama",
      category: "ibu-anak",
      description: "Informasi penting tentang manfaat ASI eksklusif dan teknik menyusui yang benar",
      date: "2024-01-12",
      views: 2890,
      downloads: 445,
      shares: 76,
      tags: ["asi-eksklusif", "menyusui", "bayi", "ibu"],
      thumbnail: "bg-gradient-to-br from-pink-500 to-purple-600",
      format: "A4 - Lipat 2",
      language: "Bahasa Indonesia",
      updated: "Update"
    },
    {
      id: 3,
      title: "Cuci Tangan Pakai Sabun (CTPS)",
      category: "pencegahan",
      description: "6 langkah cuci tangan yang benar untuk mencegah penyebaran penyakit",
      date: "2024-01-10",
      views: 2650,
      downloads: 398,
      shares: 65,
      tags: ["cuci-tangan", "sabun", "kebersihan", "covid-19"],
      thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-600",
      format: "A5 - Single",
      language: "Bahasa Indonesia & Inggris",
      updated: ""
    },
    {
      id: 4,
      title: "Gerakan Masyarakat Hidup Sehat (GERMAS)",
      category: "gaya-hidup",
      description: "7 langkah GERMAS untuk hidup sehat dan produktif setiap hari",
      date: "2024-01-08",
      views: 2340,
      downloads: 334,
      shares: 52,
      tags: ["germas", "hidup-sehat", "olahraga", "gizi"],
      thumbnail: "bg-gradient-to-br from-green-500 to-emerald-600",
      format: "A4 - Lipat 3",
      language: "Bahasa Indonesia",
      updated: ""
    },
    {
      id: 5,
      title: "Pertolongan Pertama pada Kecelakaan (P3K)",
      category: "darurat",
      description: "Panduan praktis pertolongan pertama untuk situasi darurat sehari-hari",
      date: "2024-01-05",
      views: 2100,
      downloads: 289,
      shares: 43,
      tags: ["p3k", "pertolongan-pertama", "darurat", "kecelakaan"],
      thumbnail: "bg-gradient-to-br from-yellow-500 to-orange-600",
      format: "A4 - Booklet",
      language: "Bahasa Indonesia",
      updated: ""
    },
    {
      id: 6,
      title: "Imunisasi Dasar Lengkap",
      category: "ibu-anak",
      description: "Jadwal imunisasi dasar lengkap untuk bayi dan anak usia 0-18 bulan",
      date: "2024-01-03",
      views: 1980,
      downloads: 267,
      shares: 38,
      tags: ["imunisasi", "vaksin", "bayi", "jadwal"],
      thumbnail: "bg-gradient-to-br from-purple-500 to-indigo-600",
      format: "A4 - Single",
      language: "Bahasa Indonesia",
      updated: "Terbaru"
    },
    {
      id: 7,
      title: "Stop Merokok Mulai Sekarang",
      category: "gaya-hidup",
      description: "Panduan berhenti merokok dengan tips dan motivasi untuk hidup lebih sehat",
      date: "2024-01-01",
      views: 1750,
      downloads: 234,
      shares: 29,
      tags: ["merokok", "berhenti-merokok", "paru-paru", "kesehatan"],
      thumbnail: "bg-gradient-to-br from-gray-600 to-gray-800",
      format: "A5 - Lipat 2",
      language: "Bahasa Indonesia",
      updated: ""
    }
  ];

  const filteredItems = leafletItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20 -mt-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"
            >
              <NewspaperIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Leaflet Kesehatan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Kumpulan brosur informatif dengan penjelasan singkat dan padat untuk penyebaran informasi kesehatan yang efektif
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari leaflet kesehatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-gray-600'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leaflets Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((leaflet) => (
              <motion.div
                key={leaflet.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Leaflet Preview */}
                <div className={`h-56 ${leaflet.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Status Badge */}
                  {leaflet.updated && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        leaflet.updated === 'Terbaru' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {leaflet.updated}
                      </span>
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <EyeIcon className="w-4 h-4 text-gray-700" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ShareIcon className="w-4 h-4 text-gray-700" />
                    </motion.button>
                  </div>
                  
                  {/* Format Info */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {leaflet.format}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <NewspaperIcon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {leaflet.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {leaflet.description}
                  </p>

                  {/* Language & Format */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <InformationCircleIcon className="w-3 h-3 mr-1" />
                      {leaflet.language}
                    </span>
                    <span className="flex items-center">
                      <DocumentDuplicateIcon className="w-3 h-3 mr-1" />
                      {leaflet.format}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {leaflet.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {leaflet.tags.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{leaflet.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {leaflet.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {leaflet.downloads}
                      </span>
                      <span className="flex items-center">
                        <ShareIcon className="w-4 h-4 mr-1" />
                        {leaflet.shares}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      {new Date(leaflet.date).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    >
                      Lihat Detail
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Download"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors"
                      title="Print"
                    >
                      <PrinterIcon className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">Tidak ada leaflet ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Total Leaflet", value: "15", icon: "📄" },
              { label: "Total Views", value: "18K+", icon: "👁️" },
              { label: "Total Download", value: "2.8K+", icon: "📥" },
              { label: "Total Share", value: "450+", icon: "📤" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="text-4xl mb-6">📢</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Perlu Leaflet Khusus?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim desain kami siap membantu membuat leaflet kesehatan yang disesuaikan dengan 
              kebutuhan kampanye atau program edukasi spesifik Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request Desain
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Konsultasi Gratis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
