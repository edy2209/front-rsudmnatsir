'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PhotoIcon, 
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ShareIcon,
  TagIcon,
  InformationCircleIcon,
  RectangleStackIcon,
  StarIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function BannerPage() {
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
    { id: 'all', name: 'Semua Banner', icon: '🖼️', count: 15 },
    { id: 'kampanye', name: 'Kampanye Kesehatan', icon: '�', count: 6 },
    { id: 'pencegahan', name: 'Pencegahan Penyakit', icon: '�️', count: 5 },
    { id: 'edukasi', name: 'Edukasi Masyarakat', icon: '🎓', count: 4 }
  ];

  const bannerItems = [
    {
      id: 1,
      title: "Banner Protokol Kesehatan COVID-19",
      category: "pencegahan",
      description: "Banner edukasi protokol kesehatan 5M untuk pencegahan penyebaran virus COVID-19",
      date: "2024-01-15",
      views: 3240,
      downloads: 567,
      shares: 89,
      tags: ["covid-19", "protokol", "5m", "masker"],
      thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-600",
      size: "1920 x 1080 px",
      format: "PNG, JPG, SVG",
      featured: true
    },
    {
      id: 2,
      title: "Banner Kampanye Hidup Sehat",
      category: "kampanye",
      description: "Banner promosi gaya hidup sehat dengan aktivitas fisik dan pola makan bergizi",
      date: "2024-01-12",
      views: 2890,
      downloads: 445,
      shares: 76,
      tags: ["hidup-sehat", "olahraga", "gizi", "lifestyle"],
      thumbnail: "bg-gradient-to-br from-green-500 to-emerald-600",
      size: "1080 x 1080 px",
      format: "PNG, JPG",
      featured: false
    },
    {
      id: 3,
      title: "Banner Imunisasi Anak Lengkap",
      category: "edukasi",
      description: "Banner informasi pentingnya imunisasi dasar lengkap untuk kesehatan anak",
      date: "2024-01-10",
      views: 2650,
      downloads: 398,
      shares: 65,
      tags: ["imunisasi", "anak", "vaksin", "kesehatan"],
      thumbnail: "bg-gradient-to-br from-purple-500 to-violet-600",
      size: "1200 x 800 px",
      format: "PNG, JPG",
      featured: true
    },
    {
      id: 4,
      title: "Banner Stop Merokok Sekarang",
      category: "kampanye",
      description: "Banner kampanye anti rokok untuk kesehatan paru-paru dan kualitas hidup",
      date: "2024-01-08",
      views: 2340,
      downloads: 334,
      shares: 52,
      tags: ["merokok", "paru-paru", "berhenti", "kesehatan"],
      thumbnail: "bg-gradient-to-br from-red-500 to-orange-600",
      size: "1920 x 1080 px",
      format: "PNG, JPG",
      featured: false
    },
    {
      id: 5,
      title: "Banner Gizi Seimbang untuk Keluarga",
      category: "edukasi",
      description: "Banner edukasi pentingnya gizi seimbang untuk semua anggota keluarga",
      date: "2024-01-05",
      views: 2100,
      downloads: 289,
      shares: 43,
      tags: ["gizi", "keluarga", "nutrisi", "makanan-sehat"],
      thumbnail: "bg-gradient-to-br from-yellow-500 to-orange-600",
      size: "1080 x 1350 px",
      format: "PNG, JPG",
      featured: false
    },
    {
      id: 6,
      title: "Banner Pencegahan Demam Berdarah",
      category: "pencegahan",
      description: "Banner kampanye 3M Plus untuk pencegahan demam berdarah dengue",
      date: "2024-01-03",
      views: 1980,
      downloads: 267,
      shares: 38,
      tags: ["dbd", "3m-plus", "nyamuk", "pencegahan"],
      thumbnail: "bg-gradient-to-br from-red-600 to-pink-600",
      size: "1200 x 1200 px",
      format: "PNG, JPG, SVG",
      featured: true
    },
    {
      id: 7,
      title: "Banner Kesehatan Mental",
      category: "edukasi",
      description: "Banner edukasi pentingnya menjaga kesehatan mental di era digital",
      date: "2024-01-01",
      views: 1750,
      downloads: 234,
      shares: 29,
      tags: ["mental", "psikologi", "stress", "mindfulness"],
      thumbnail: "bg-gradient-to-br from-indigo-500 to-purple-600",
      size: "1080 x 1080 px",
      format: "PNG, JPG",
      featured: false
    },
    {
      id: 8,
      title: "Banner GERMAS (Gerakan Masyarakat Hidup Sehat)",
      category: "kampanye",
      description: "Banner promosi 7 langkah GERMAS untuk gaya hidup sehat dan aktif",
      date: "2023-12-28",
      views: 1540,
      downloads: 198,
      shares: 24,
      tags: ["germas", "aktivitas", "sehat", "masyarakat"],
      thumbnail: "bg-gradient-to-br from-teal-500 to-green-600",
      size: "1920 x 1080 px",
      format: "PNG, JPG",
      featured: false
    }
  ];

  const filteredItems = bannerItems.filter((item: any) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            >
              <PhotoIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Banner Kesehatan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Koleksi banner digital berkualitas tinggi untuk kampanye, edukasi, dan promosi kesehatan masyarakat
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
                  placeholder="Cari banner kesehatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Banners Section */}
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
              Banner Unggulan
            </h2>
            <p className="text-gray-600">
              Banner yang paling populer dan efektif untuk kampanye kesehatan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {bannerItems.filter((banner: any) => banner.featured).slice(0, 3).map((banner: any, index: number) => (
              <motion.div
                key={banner.id}
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
                
                <div className={`h-48 ${banner.thumbnail} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <PhotoIcon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {banner.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {banner.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {banner.downloads}
                      </span>
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
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
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

      {/* Banner Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredItems.map((banner: any) => (
              <motion.div
                key={banner.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Banner Preview */}
                <div className={`h-48 ${banner.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Featured Badge */}
                  {banner.featured && (
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
                      {banner.size}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <PhotoIcon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {banner.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {banner.description}
                  </p>

                  {/* Technical Info */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <RectangleStackIcon className="w-3 h-3 mr-1" />
                      {banner.size}
                    </div>
                    <div className="flex items-center">
                      <InformationCircleIcon className="w-3 h-3 mr-1" />
                      {banner.format}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {banner.tags.slice(0, 2).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {banner.tags.length > 2 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{banner.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {banner.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {banner.downloads}
                      </span>
                      <span className="flex items-center">
                        <ShareIcon className="w-4 h-4 mr-1" />
                        {banner.shares}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      {new Date(banner.date).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    >
                      Lihat Detail
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
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
              <h3 className="text-xl font-bold text-gray-600 mb-2">Tidak ada banner ditemukan</h3>
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
              { label: "Total Banner", value: "15", icon: "�️" },
              { label: "Total Views", value: "18K+", icon: "👁️" },
              { label: "Total Downloads", value: "2.8K+", icon: "📥" },
              { label: "Banner Unggulan", value: "3", icon: "⭐" }
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              Butuh Banner Custom?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim desain kami siap membantu membuat banner kesehatan berkualitas tinggi yang 
              sesuai dengan kebutuhan kampanye atau program edukasi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request Banner Custom
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
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
