'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ClockIcon, 
  EyeIcon, 
  UserIcon,
  MapPinIcon,
  PhotoIcon,
  ChevronUpIcon,
  MagnifyingGlassPlusIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function DenahLokasiPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  return (
    <PageLayout>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

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
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4 relative overflow-hidden -mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Denah & Lokasi
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lokasi strategis RSUD M. Natsir di Provinsi Sumatera Barat
            </motion.p>
          </div>
        </motion.div>

        {/* Google Maps Section */}
        <motion.div 
          className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 -mt-8 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-100">
            {/* Header dengan animasi gradient */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rounded-full"></div>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPinIcon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Peta Lokasi RSUD M. Natsir
                  </motion.h2>
                  <motion.p 
                    className="opacity-90 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    📍 Kelurahan Simpang Rumbio, Kec. Lubuk Sikarah, Kota Solok
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-2 mt-2 text-sm opacity-80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span>🗺️ Provinsi Sumatera Barat</span>
                    <span>•</span>
                    <span>🏥 Rumah Sakit Daerah</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Google Maps Container dengan styling premium */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Maps wrapper dengan shadow inner */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none"></div>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6789!2d100.6534!3d-0.7922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4c7f1a7f1b123%3A0x4a7f1b1234567890!2sRSUD%20M.%20Natsir%20Solok!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi RSUD M. Natsir"
                  className="w-full h-[500px] transition-all duration-300 hover:brightness-110"
                />
              </div>

              {/* Status Indicator - Clean & Simple */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div 
                  className="bg-green-500/95 backdrop-blur-md rounded-full px-3 py-2 sm:px-4 sm:py-3 shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Buka 24 Jam</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Info Lokasi Section - Below Maps */}
            <motion.div 
              className="bg-gray-50 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Alamat */}
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">Alamat Lengkap</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Jl. Dr. M. Natsir, Kelurahan Simpang Rumbio, 
                          Kec. Lubuk Sikarah, Kota Solok, 
                          Provinsi Sumatera Barat
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Kontak */}
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">Kontak</h4>
                        <div className="space-y-1">
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Telepon:</span> (0755) 12345
                          </p>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Fax:</span> (0755) 12346
                          </p>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Email:</span> info@rsudmnatsir.go.id
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Jam Operasional */}
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">Jam Operasional</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-green-600 font-semibold text-sm">24 Jam Setiap Hari</p>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Pelayanan IGD, Rawat Inap, dan layanan darurat tersedia 24/7
                          </p>
                          <p className="text-gray-600 text-xs">
                            Rawat Jalan: Senin - Sabtu (08:00 - 16:00)
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div 
                  className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                    <span>🚗 Parkir Tersedia</span>
                    <span>•</span>
                    <span>♿ Akses Difabel</span>
                    <span>•</span>
                    <span>🏥 Rujukan BPJS</span>
                    <span>•</span>
                    <span>🚑 Ambulans 24 Jam</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-16">
          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header Section with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Lokasi RSUD M. Natsir Solok
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>Thursday, 22 September 2016</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-5 h-5" />
                    <span>8,178 views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5" />
                    <span>Rio Bayu Sentosa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12">
              {/* Featured Image with Enhanced Styling */}
              <motion.div 
                className="mb-12 relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-blue-100">
                  <Image 
                    src="http://rsudmnatsir.sumbarprov.go.id/images/2016/10/denah_lokasi.png"
                    alt="Denah Lokasi RSUD M. Natsir"
                    width={800}
                    height={384}
                    className="w-full h-96 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 bg-blue-600/80 backdrop-blur-md rounded-lg px-4 py-2 w-fit">
                      <PhotoIcon className="w-5 h-5" />
                      <span className="font-semibold">Denah Lokasi Strategis</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 flex items-center justify-center">
                    <MagnifyingGlassPlusIcon className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>
              </motion.div>

              {/* Introduction Text with Icon */}
              <motion.div 
                className="mb-10 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border-l-4 border-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Tentang Lokasi Kami</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      RSUD M. Natsir adalah rumah sakit milik Provinsi Sumatera Barat yang terletak di wilayah administratif Kota Solok. 
                      Posisi RSUD M. Natsir berada di <span className="font-semibold text-blue-600">Kelurahan Simpang Rumbio, Kecamatan Lubuk Sikarah, Kota Solok</span> 
                      dengan lokasi yang sangat strategis untuk melayani masyarakat Sumatera Barat.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Gambar 01 - Enhanced Card */}
              <motion.div 
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl">Peta Administratif Kota Solok</h4>
                      <p className="text-gray-600 text-sm">Wilayah cakupan layanan rumah sakit</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <div className="flex justify-center">
                      <div className="relative">
                        <PhotoIcon className="w-80 h-52 text-gray-300 mx-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400 font-medium">Peta Administratif Kota Solok</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Location Advantages */}
              <motion.div 
                className="mb-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Posisi Strategis</h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Posisi ini terletak di area strategis dengan dikelilingi wilayah kota dan kabupaten sekitarnya:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span>⬆️</span>
                          </div>
                          <span className="font-semibold text-gray-800">Sebelah Utara</span>
                        </div>
                        <p className="text-gray-600 text-sm">Kabupaten Solok dan Tanah Datar</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <span>⬇️</span>
                          </div>
                          <span className="font-semibold text-gray-800">Sebelah Selatan</span>
                        </div>
                        <p className="text-gray-600 text-sm">Kabupaten Solok dan Solok Selatan</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span>⬅️</span>
                          </div>
                          <span className="font-semibold text-gray-800">Sebelah Barat</span>
                        </div>
                        <p className="text-gray-600 text-sm">Kabupaten Solok, Kota Sawahlunto, Kabupaten Sijunjung dan Dharmasraya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gambar 02 - Enhanced Card */}
              <motion.div 
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl">Kunjungan Rawat Jalan</h4>
                      <p className="text-gray-600 text-sm">Berdasarkan asal daerah pasien</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <div className="flex justify-center">
                      <div className="relative">
                        <PhotoIcon className="w-80 h-52 text-gray-300 mx-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400 font-medium">Grafik Kunjungan Rawat Jalan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Building Layout Description */}
              <motion.div 
                className="mb-10 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-orange-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Tata Letak Bangunan</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      RSUD M. Natsir merupakan rumah sakit dengan bangunan yang memanjang dari depan ke belakang dengan akses jalan masuk dari jalan utama yang merupakan jalan dua jalur. 
                      <span className="font-semibold text-orange-600"> Tepat di depan akses masuk utama langsung berhadapan dengan Instalasi Gawat Darurat (IGD)</span>. 
                      Di samping IGD berdiri Instalasi Rawat Jalan yang memudahkan akses pasien.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Gambar 03 & 04 - Side by Side on Desktop */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Gambar 03 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-indigo-200 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">03</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Denah RSUD</h4>
                        <p className="text-gray-600 text-xs">Layout lengkap rumah sakit</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-inner">
                      <div className="flex justify-center">
                        <div className="relative">
                          <PhotoIcon className="w-full h-40 text-gray-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-400 text-sm font-medium">Denah RSUD Solok</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Gambar 04 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-teal-200 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">04</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Denah Tahun 2014</h4>
                        <p className="text-gray-600 text-xs">Dokumentasi historis</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-inner">
                      <div className="flex justify-center">
                        <div className="relative">
                          <PhotoIcon className="w-full h-40 text-gray-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-400 text-sm font-medium">Denah RSUD 2014</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <MapPinIcon className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h4 className="text-2xl font-bold mb-3">Butuh Petunjuk Arah?</h4>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Tim customer service kami siap membantu memberikan petunjuk arah dan informasi lokasi
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                    📞 Hubungi CS
                  </button>
                  <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
                    🗺️ Buka di Google Maps
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
