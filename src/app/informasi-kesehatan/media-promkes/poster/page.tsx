'use client';

import { motion } from 'framer-motion';
import { 
  PresentationChartBarIcon, 
  EyeIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  PrinterIcon,
  PhotoIcon,
  InformationCircleIcon,
  TagIcon,
  StarIcon,
  UserGroupIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';

export default function PosterPage() {
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
    { id: 'all', name: 'Semua', icon: '🖼️', count: 18 },
    { id: 'kampanye', name: 'Kampanye Kesehatan', icon: '📢', count: 7 },
    { id: 'edukasi', name: 'Edukasi Masyarakat', icon: '🎓', count: 5 },
    { id: 'pencegahan', name: 'Pencegahan Penyakit', icon: '🛡️', count: 4 },
    { id: 'layanan', name: 'Informasi Layanan', icon: '🏥', count: 2 }
  ];

  const posterItems = [
    {
      id: 1,
      title: "Poster Kampanye Anti Narkoba",
      category: "kampanye",
      description: "Poster edukatif tentang bahaya narkoba dan dampaknya terhadap generasi muda",
      date: "2024-01-15",
      views: 4520,
      downloads: 678,
      shares: 124,
      rating: 4.9,
      tags: ["narkoba", "bahaya", "remaja", "anti-drugs"],
      thumbnail: "bg-gradient-to-br from-red-600 to-orange-700",
      size: "A1 (594 x 841 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: true
    },
    {
      id: 2,
      title: "Poster Kesehatan Mental di Era Digital",
      category: "edukasi",
      description: "Poster tentang pentingnya menjaga kesehatan mental di era digital dan media sosial",
      date: "2024-01-12",
      views: 3890,
      downloads: 567,
      shares: 98,
      rating: 4.8,
      tags: ["mental-health", "digital", "stress", "mindfulness"],
      thumbnail: "bg-gradient-to-br from-purple-600 to-indigo-700",
      size: "A2 (420 x 594 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: false
    },
    {
      id: 3,
      title: "Poster Protokol Kesehatan COVID-19",
      category: "pencegahan",
      description: "Poster informasi protokol kesehatan 5M untuk pencegahan COVID-19",
      date: "2024-01-10",
      views: 3650,
      downloads: 534,
      shares: 87,
      rating: 4.7,
      tags: ["covid-19", "protokol", "5m", "masker"],
      thumbnail: "bg-gradient-to-br from-blue-600 to-cyan-700",
      size: "A1 (594 x 841 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG, SVG",
      featured: true
    },
    {
      id: 4,
      title: "Poster Gerakan Masyarakat Hidup Sehat (GERMAS)",
      category: "kampanye",
      description: "Poster promosi 7 langkah GERMAS untuk gaya hidup sehat dan aktif",
      date: "2024-01-08",
      views: 3240,
      downloads: 445,
      shares: 76,
      rating: 4.6,
      tags: ["germas", "hidup-sehat", "olahraga", "aktivitas"],
      thumbnail: "bg-gradient-to-br from-green-600 to-emerald-700",
      size: "A0 (841 x 1189 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: false
    },
    {
      id: 5,
      title: "Poster Bahaya Merokok untuk Paru-paru",
      category: "edukasi",
      description: "Poster edukatif tentang dampak buruk merokok terhadap kesehatan paru-paru",
      date: "2024-01-05",
      views: 2980,
      downloads: 398,
      shares: 65,
      rating: 4.5,
      tags: ["merokok", "paru-paru", "kesehatan", "berhenti"],
      thumbnail: "bg-gradient-to-br from-gray-700 to-gray-900",
      size: "A2 (420 x 594 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: false
    },
    {
      id: 6,
      title: "Poster Layanan Telemedicine RSUD",
      category: "layanan",
      description: "Poster informasi layanan konsultasi kesehatan online melalui telemedicine",
      date: "2024-01-03",
      views: 2750,
      downloads: 334,
      shares: 54,
      rating: 4.4,
      tags: ["telemedicine", "online", "konsultasi", "digital"],
      thumbnail: "bg-gradient-to-br from-teal-600 to-blue-700",
      size: "A3 (297 x 420 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: false
    },
    {
      id: 7,
      title: "Poster Gizi Seimbang untuk Anak",
      category: "edukasi",
      description: "Poster edukatif tentang pentingnya gizi seimbang untuk pertumbuhan anak",
      date: "2024-01-01",
      views: 2540,
      downloads: 289,
      shares: 43,
      rating: 4.3,
      tags: ["gizi", "anak", "nutrisi", "tumbuh-kembang"],
      thumbnail: "bg-gradient-to-br from-yellow-600 to-orange-600",
      size: "A2 (420 x 594 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: false
    },
    {
      id: 8,
      title: "Poster Pencegahan Demam Berdarah",
      category: "pencegahan",
      description: "Poster kampanye 3M Plus untuk pencegahan demam berdarah dengue",
      date: "2023-12-28",
      views: 2340,
      downloads: 267,
      shares: 38,
      rating: 4.2,
      tags: ["dbd", "3m-plus", "nyamuk", "pencegahan"],
      thumbnail: "bg-gradient-to-br from-red-500 to-pink-600",
      size: "A1 (594 x 841 mm)",
      resolution: "300 DPI",
      format: "PDF, PNG",
      featured: true
    }
  ];

  const filteredItems = posterItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosters = posterItems.filter(poster => poster.featured);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6"
            >
              <PresentationChartBarIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Poster & Spanduk
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koleksi poster edukatif berukuran besar untuk display di area publik, fasilitas kesehatan, dan kampanye kesehatan masyarakat
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
                  placeholder="Cari poster dan spanduk..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posters */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Poster Unggulan
            </h2>
            <p className="text-gray-600">
              Poster yang paling populer dan banyak digunakan untuk kampanye kesehatan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredPosters.slice(0, 3).map((poster, index) => (
              <motion.div
                key={poster.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <StarIcon className="w-3 h-3 mr-1" />
                    UNGGULAN
                  </div>
                </div>
                
                <div className={`h-64 ${poster.thumbnail} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-6"
                    >
                      <PresentationChartBarIcon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {poster.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {poster.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {poster.downloads}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      <span>{poster.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
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
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
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

      {/* Posters Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredItems.map((poster) => (
              <motion.div
                key={poster.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Poster Preview */}
                <div className={`h-64 ${poster.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Featured Badge */}
                  {poster.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ UNGGULAN
                      </div>
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
                  
                  {/* Size Info */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {poster.size}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <PresentationChartBarIcon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {poster.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {poster.description}
                  </p>

                  {/* Technical Info */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <PhotoIcon className="w-3 h-3 mr-1" />
                      {poster.resolution}
                    </div>
                    <div className="flex items-center">
                      <InformationCircleIcon className="w-3 h-3 mr-1" />
                      {poster.format}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {poster.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {poster.tags.length > 2 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{poster.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {poster.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {poster.downloads}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      <span>{poster.rating}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
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
              <h3 className="text-xl font-bold text-gray-600 mb-2">Tidak ada poster ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Total Poster", value: "18", icon: "🖼️" },
              { label: "Total Views", value: "25K+", icon: "👁️" },
              { label: "Total Download", value: "3.8K+", icon: "📥" },
              { label: "Rating Rata-rata", value: "4.6", icon: "⭐" }
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
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="text-4xl mb-6">🎨</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Butuh Poster Custom?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim kreatif kami berpengalaman dalam membuat poster dan spanduk berkualitas tinggi 
              untuk berbagai kampanye dan program kesehatan masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Order Poster Custom
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                Konsultasi Desain
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
