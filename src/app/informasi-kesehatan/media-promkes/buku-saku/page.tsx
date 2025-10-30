'use client';

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  EyeIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  BookOpenIcon,
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';

export default function BukuSakuPage() {
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
    { id: 'all', name: 'Semua', icon: '📚', count: 12 },
    { id: 'penyakit-kronis', name: 'Penyakit Kronis', icon: '💊', count: 4 },
    { id: 'ibu-anak', name: 'Ibu & Anak', icon: '👶', count: 3 },
    { id: 'gizi', name: 'Gizi & Nutrisi', icon: '🥗', count: 3 },
    { id: 'pencegahan', name: 'Pencegahan', icon: '🛡️', count: 2 }
  ];

  const bukuSakuItems = [
    {
      id: 1,
      title: "Panduan Lengkap Diabetes Mellitus",
      category: "penyakit-kronis",
      description: "Panduan komprehensif untuk memahami, mengelola, dan hidup dengan diabetes mellitus",
      date: "2024-01-15",
      views: 2340,
      downloads: 456,
      pages: 32,
      tags: ["diabetes", "gula-darah", "diet", "olahraga"],
      thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-600",
      difficulty: "Menengah",
      author: "Tim Medis RSUD M. Natsir"
    },
    {
      id: 2,
      title: "Hipertensi: Kenali dan Kendalikan",
      category: "penyakit-kronis",
      description: "Buku saku praktis untuk memahami hipertensi dan cara mengendalikan tekanan darah",
      date: "2024-01-12",
      views: 1890,
      downloads: 378,
      pages: 28,
      tags: ["hipertensi", "tekanan-darah", "jantung"],
      thumbnail: "bg-gradient-to-br from-red-500 to-pink-600",
      difficulty: "Pemula",
      author: "Dr. Sari Kardina, Sp.JP"
    },
    {
      id: 3,
      title: "Gizi Seimbang untuk Keluarga",
      category: "gizi",
      description: "Panduan praktis menyusun menu gizi seimbang untuk seluruh anggota keluarga",
      date: "2024-01-10",
      views: 1650,
      downloads: 312,
      pages: 24,
      tags: ["gizi", "nutrisi", "keluarga", "menu"],
      thumbnail: "bg-gradient-to-br from-green-500 to-emerald-600",
      difficulty: "Pemula",
      author: "Tim Gizi RSUD M. Natsir"
    },
    {
      id: 4,
      title: "Panduan ASI Eksklusif",
      category: "ibu-anak",
      description: "Panduan lengkap pemberian ASI eksklusif untuk ibu menyusui",
      date: "2024-01-08",
      views: 1420,
      downloads: 289,
      pages: 20,
      tags: ["asi", "menyusui", "bayi", "ibu"],
      thumbnail: "bg-gradient-to-br from-purple-500 to-violet-600",
      difficulty: "Pemula",
      author: "Dr. Maya Santi, Sp.A"
    },
    {
      id: 5,
      title: "Pencegahan Stunting pada Anak",
      category: "ibu-anak",
      description: "Strategi komprehensif pencegahan stunting sejak masa kehamilan",
      date: "2024-01-05",
      views: 1290,
      downloads: 234,
      pages: 36,
      tags: ["stunting", "anak", "gizi", "tumbuh-kembang"],
      thumbnail: "bg-gradient-to-br from-orange-500 to-yellow-600",
      difficulty: "Menengah",
      author: "Tim Anak RSUD M. Natsir"
    },
    {
      id: 6,
      title: "Panduan Imunisasi Lengkap",
      category: "pencegahan",
      description: "Jadwal dan informasi lengkap imunisasi untuk bayi, anak, dan dewasa",
      date: "2024-01-03",
      views: 1180,
      downloads: 198,
      pages: 26,
      tags: ["imunisasi", "vaksin", "pencegahan", "kesehatan"],
      thumbnail: "bg-gradient-to-br from-teal-500 to-blue-600",
      difficulty: "Pemula",
      author: "Tim Vaksinasi RSUD M. Natsir"
    }
  ];

  const filteredItems = bukuSakuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20 -mt-20">
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6"
            >
              <BookOpenIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Buku Saku Kesehatan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koleksi panduan kesehatan praktis dalam format pocket-friendly untuk edukasi masyarakat yang mudah dibawa dan dipahami
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
                  placeholder="Cari buku saku kesehatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
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
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
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

      {/* Books Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Book Cover */}
                <div className={`h-64 ${book.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {book.pages} halaman
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      book.difficulty === 'Pemula' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {book.difficulty}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <DocumentTextIcon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center mb-4 text-sm text-gray-500">
                    <AcademicCapIcon className="w-4 h-4 mr-2" />
                    {book.author}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {book.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {book.tags.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{book.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {book.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {book.downloads}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      {new Date(book.date).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    >
                      Baca Sekarang
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <HeartIcon className="w-4 h-4" />
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
              <h3 className="text-xl font-bold text-gray-600 mb-2">Tidak ada buku saku ditemukan</h3>
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
              { label: "Total Buku Saku", value: "12", icon: "📚" },
              { label: "Total Pembaca", value: "15K+", icon: "👥" },
              { label: "Total Download", value: "2.3K+", icon: "📥" },
              { label: "Rating Rata-rata", value: "4.8", icon: "⭐" }
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="text-4xl mb-6">💡</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Punya Ide Buku Saku Baru?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kami selalu terbuka untuk saran topik buku saku kesehatan yang dibutuhkan masyarakat. 
              Sampaikan ide Anda untuk membantu edukasi kesehatan yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Usulkan Topik
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                Hubungi Tim Editor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
