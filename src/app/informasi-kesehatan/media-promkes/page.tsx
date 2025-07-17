'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  PhotoIcon, 
  DocumentTextIcon, 
  NewspaperIcon,
  PresentationChartBarIcon,
  ArrowRightIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function MediaPromkesPage() {
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

  const mediaCategories = [
    {
      title: "Banner",
      description: "Koleksi banner edukasi kesehatan dengan desain menarik untuk berbagai kampanye",
      icon: PhotoIcon,
      href: "/informasi-kesehatan/media-promkes/banner",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      count: "12+",
      recent: "Protokol COVID-19"
    },
    {
      title: "Buku Saku",
      description: "Panduan praktis kesehatan dalam format pocket-friendly untuk edukasi masyarakat",
      icon: DocumentTextIcon,
      href: "/informasi-kesehatan/media-promkes/buku-saku",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      count: "8+",
      recent: "Diabetes Mellitus"
    },
    {
      title: "Leaflet",
      description: "Brosur informatif dengan penjelasan singkat untuk penyebaran informasi kesehatan",
      icon: NewspaperIcon,
      href: "/informasi-kesehatan/media-promkes/leaflet",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      count: "15+",
      recent: "Pencegahan DBD"
    },
    {
      title: "Poster",
      description: "Poster edukatif berukuran besar untuk display di area publik dan fasilitas kesehatan",
      icon: PresentationChartBarIcon,
      href: "/informasi-kesehatan/media-promkes/poster",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      count: "10+",
      recent: "Bahaya Narkoba"
    }
  ];

  const stats = [
    { label: "Total Media", value: "45+", icon: "📋" },
    { label: "Total Views", value: "25K+", icon: "👁️" },
    { label: "Downloads", value: "3.5K+", icon: "⬇️" },
    { label: "Kategori", value: "4", icon: "📂" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            >
              <UserGroupIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Media Promosi Kesehatan
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pusat koleksi media edukasi kesehatan untuk mendukung program promosi kesehatan masyarakat
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-gray-700 font-medium"
            >
              <ChartBarIcon className="w-5 h-5 mr-2 text-green-500" />
              Update terbaru: 3 media baru ditambahkan minggu ini
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kategori Media Promosi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih kategori media yang sesuai dengan kebutuhan edukasi kesehatan Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {mediaCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className={`${category.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/50`}>
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {category.title}
                          </h3>
                          <span className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {category.count}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Terbaru:</span> {category.recent}
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                          >
                            Lihat Semua
                            <ArrowRightIcon className="w-4 h-4 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Media Populer
            </h2>
            <p className="text-lg text-gray-600">
              Media promosi kesehatan yang paling banyak diakses dan diunduh
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Banner Protokol COVID-19",
                category: "Banner",
                views: 2850,
                downloads: 456,
                color: "bg-gradient-to-br from-blue-500 to-cyan-600"
              },
              {
                title: "Buku Saku Diabetes",
                category: "Buku Saku", 
                views: 1920,
                downloads: 312,
                color: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                title: "Leaflet Pencegahan DBD",
                category: "Leaflet",
                views: 1750,
                downloads: 289,
                color: "bg-gradient-to-br from-purple-500 to-violet-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-40 ${item.color} relative`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        {item.downloads}
                      </span>
                    </div>
                  </div>
                </div>
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
            <div className="text-4xl mb-6">💡</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Butuh Media Kustom?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim kreatif kami siap membantu membuat media promosi kesehatan sesuai kebutuhan khusus Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Ajukan Permintaan
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Kontak Tim Kreatif
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
