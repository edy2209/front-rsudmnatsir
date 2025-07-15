'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  HeartIcon, 
  BuildingOffice2Icon, 
  ClockIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  ScaleIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BerandaPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: newsRef, inView: newsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const stats = [
    { number: 50, label: "Dokter Spesialis", suffix: "+" },
    { number: 200, label: "Tenaga Medis", suffix: "+" },
    { number: 150, label: "Tempat Tidur", suffix: "" },
    { number: 24, label: "Layanan Darurat", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Scroll Indicators */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Mouse Scroll Icon */}
      <AnimatePresence>
        {!showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Mouse Icon with Scroll Wheel */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Mouse Body */}
                <div className="w-7 h-12 border-2 border-gray-500 rounded-full bg-white/10 backdrop-blur-sm flex justify-center relative">
                  {/* Scroll Wheel */}
                  <motion.div
                    animate={{
                      y: [2, 10, 2],
                      opacity: [1, 0.3, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1 h-3 bg-gray-600 rounded-full mt-2"
                  />
                </div>
                
                {/* Scroll Down Arrow */}
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                </motion.div>
              </motion.div>
              
              {/* Scroll Text */}
              <motion.p
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-sm text-gray-600 font-medium"
              >
                Scroll untuk lanjut
              </motion.p>
              
              {/* Animated Dots */}
              <div className="flex space-x-1">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots - Removed for mobile optimization */}

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl font-bold"
            >
              ↑
            </motion.div>
            
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              Kembali ke atas
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <Navigation variant="default" />

      {/* Marquee Announcement */}
      <div className="marquee-container py-2 md:py-3 relative overflow-hidden">
        <SpeakerWaveIcon className="speaker-icon h-4 w-4 md:h-6 md:w-6 text-white" />
        <div className="relative">
          <div className="marquee-content">
            <span className="text-xs md:text-base font-medium text-white">
              🏥 Selamat Datang di Website RSUD Mohammad Natsir • 📍 Jl. Lintas Sumatra Simpang Rumbio, Kota Solok • 📞 Layanan 24 Jam • ✨ Melayani dengan Hati •
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-20 px-4 relative overflow-hidden" id="hero-section">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                RSUD M. Natsir
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium">
                Melayani dengan{" "}
                <motion.span 
                  className="text-red-500 inline-block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️ Hati
                </motion.span>
                , Mengobati dengan{" "}
                <span className="text-blue-600 font-semibold">Profesional</span>
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                Rumah Sakit Umum Daerah terdepan dengan pelayanan kesehatan berkualitas, 
                teknologi modern, dan tenaga medis profesional untuk kesehatan Anda dan keluarga.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {heroInView ? (
                    <CountUp 
                      end={stat.number} 
                      duration={2.5} 
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column - Gallery and News */}
            <div className="lg:col-span-8">
              
              {/* Hero Gallery */}
              <motion.div 
                className="mb-12"
                ref={galleryRef}
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-bold mb-4">Sertifikat Akreditasi</h3>
                        <p className="text-lg opacity-90">Rumah Sakit Terakreditasi</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex space-x-2 overflow-x-auto">
                      {[
                        'Sertifikat Akreditasi',
                        'Dokter Spesialis',
                        'Visi dan Misi',
                        'Jenis Pelayanan',
                        'Penghargaan IGA',
                        'Direktur RSUD'
                      ].map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-20 h-16 bg-gray-200 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded-lg opacity-60"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* News Section */}
              <motion.div
                ref={newsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      Berita Utama
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "ODGJ Terselamatkan Dengan Inovasi Kontes Lato Lato",
                      date: "23 Juli 2024",
                      author: "Deswira Umar",
                      views: "295",
                      excerpt: "RSUD M. Natsir merupakan OPD dibawah Pemerintah Provinsi Sumatera Barat yang melaksanakan urusan wajib bidang kesehatan..."
                    },
                    {
                      title: "Tangkal Hoaks Dengan Inovasi Lego",
                      date: "22 Juli 2024", 
                      author: "Deswira Umar",
                      views: "274",
                      excerpt: "Seiring dengan semakin meningkatnya angka kunjungan pasien di RSUD M Mohammad Natsir pasca pandemi Covid-19..."
                    },
                    {
                      title: "Inovasi Dalang Tol Itik",
                      date: "22 Juli 2024",
                      author: "Deswira Umar", 
                      views: "234",
                      excerpt: "Dalang Tol Itik merupakan nama inovasi yang digagas oleh Lusi Meyliza, A.md.kl pada tahun 2023..."
                    },
                    {
                      title: "Ada Selebelt Di RSUD M Natsir",
                      date: "22 Juli 2024",
                      author: "Deswira Umar",
                      views: "248", 
                      excerpt: "Inovasi Selebelt adalah singkatan dari Selasa Belajar, kegiatan Selasa Belajar di RSUD M. Natsir..."
                    }
                  ].map((news, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {news.date}
                          </span>
                          <span className="flex items-center">
                            <UserCircleIcon className="w-4 h-4 mr-1" />
                            {news.author}
                          </span>
                          <span>👁️ {news.views}</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {news.excerpt}
                        </p>
                        <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lihat Semua Berita
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Widgets */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Gubernur Widget */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Gubernur dan Wakil</h3>
                <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl h-48 flex items-center justify-center">
                  <span className="text-white font-semibold">Foto Gubernur</span>
                </div>
              </div>

              {/* Health Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Artikel Kesehatan</h3>
                <div className="space-y-4">
                  {[
                    "Garam Belum Terbukti Atasi Covid-19",
                    "Hati-Hati Dengan Corona, Hindari Informasi Bagalau", 
                    "Segala Sesuatu Tentang Hernia, Ini Informasinya",
                    "Apakah Anda Sudah Menggunakan Obat dengan Benar?",
                    "CARA MERAWAT LUKA LECET DI RUMAH"
                  ].map((article, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="text-sm font-medium text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                        {article}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">10 June 2020</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and Agenda Tabs */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="border-b border-gray-200 mb-4">
                  <nav className="flex space-x-6">
                    <button className="py-2 px-1 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">
                      Tags
                    </button>
                    <button className="py-2 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
                      Agenda
                    </button>
                  </nav>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Arsip", "Kesehatan", "Penyuluhan", "PENGUMUMAN", "Laporan", "Sakip", "KATA DOKTER", "Jadwal", "Berita"].map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo Album */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Album Foto</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1,2,3,4].map((item, index) => (
                    <div key={index} className="aspect-square bg-gradient-to-br from-blue-500 to-green-500 rounded-xl relative group cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xs font-medium text-center p-2">
                          Kegiatan RSUD M. Natsir
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Informasi
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "PENDAFTARAN ONLINE", icon: CalendarDaysIcon, color: "from-blue-500 to-blue-600" },
              { title: "JADWAL DOKTER", icon: UserCircleIcon, color: "from-green-500 to-green-600" },
              { title: "KETERSEDIAAN BED", icon: BuildingOffice2Icon, color: "from-purple-500 to-purple-600" },
              { title: "KEPUASAN PELANGGAN", icon: HeartIcon, color: "from-pink-500 to-pink-600" },
              { title: "KRITIK DAN SARAN", icon: ChatBubbleLeftIcon, color: "from-yellow-500 to-orange-500" },
              { title: "PENGADUAN", icon: ScaleIcon, color: "from-red-500 to-red-600" },
              { title: "INFORMASI BERKALA", icon: ClockIcon, color: "from-indigo-500 to-indigo-600" },
              { title: "INFORMASI SETIAP SAAT", icon: DocumentTextIcon, color: "from-teal-500 to-teal-600" },
              { title: "INFORMASI SERTA MERTA", icon: ClipboardDocumentCheckIcon, color: "from-cyan-500 to-cyan-600" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50/50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Layanan Unggulan
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "HEMODIALISA", icon: "💧", description: "Pelayanan cuci darah dengan teknologi modern" },
              { title: "FARMASI", icon: "💊", description: "Pelayanan obat dan konsultasi farmasi" },
              { title: "LABORATORIUM", icon: "🔬", description: "Pemeriksaan laboratorium lengkap dan akurat" },
              { title: "FISIOTERAPI", icon: "🏃‍♂️", description: "Terapi rehabilitasi medik profesional" },
              { title: "RADIOLOGI", icon: "📡", description: "Pemeriksaan radiologi dengan teknologi digital" },
              { title: "DAN LAINNYA", icon: "➕", description: "Berbagai layanan medis lainnya" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center cursor-pointer border border-white/50"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "4rem" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}