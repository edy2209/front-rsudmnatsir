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
          className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4 relative overflow-hidden"
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
          className="container mx-auto px-4 -mt-8 relative z-20"
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
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Post Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Lokasi RSUD Solok
                </a>
              </h3>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-blue-600" />
                  <span>Thursday, 22 September 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-green-600" />
                  <span>8,178</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-purple-600" />
                  <span>Rio Bayu Sentosa</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <motion.div 
              className="mb-8 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image 
                  src="http://rsudmnatsir.sumbarprov.go.id/images/2016/10/denah_lokasi.png"
                  alt="Denah Lokasi RSUD M. Natsir"
                  width={800}
                  height={384}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <MagnifyingGlassPlusIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                RSUD Solok adalah rumah sakit milik Provinsi Sumatera Barat yang terletak diwilayah administratif Kota Solok. 
                Posisi RSUD Solok berada di kelurahan Simpang Rumbio Kecamatan Lubuk Sikarah Kota Solok.
              </p>

              {/* Gambar 01 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-800">Gambar 01</h4>
                  <p className="text-gray-600">Peta Administratif Kota Solok</p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <PhotoIcon className="w-64 h-40 text-gray-400 mx-auto" />
                    <p className="text-center text-sm text-gray-500 mt-2">Peta Administratif Kota Solok</p>
                  </div>
                </div>
              </motion.div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Posisi ini terletak diarea strategis dengan dikelilingi wilayah kota dan kabupaten sekitarnya. 
                Sebelah utara, berbatasan dengan kabupaten solok dan tanah datar. Sebelah selatan dengan kabupaten solok dan solok selatan. 
                Sebelah barat dengan kabupaten solok, kota sawah lunto, kabupaten sijunjung dan darmasraya.
              </p>

              {/* Gambar 02 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-800">Gambar 02</h4>
                  <p className="text-gray-600">Kunjungan Rawat Jalan Berdasarkan Asal Daerah</p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <PhotoIcon className="w-64 h-40 text-gray-400 mx-auto" />
                    <p className="text-center text-sm text-gray-500 mt-2">Grafik Kunjungan Rawat Jalan</p>
                  </div>
                </div>
              </motion.div>

              <p className="text-gray-700 leading-relaxed mb-6">
                RSUD Solok merupakan rumah sakit dengan bangunan yang memanjang dari depan ke belakang dengan akses jalan masuk dari jalan utama yang merupakan jalan dua jalur. 
                Tepat didepan akses masuk utama langsung berhadapan dengan Instalasi Gawat Darurat. Disamping IGD berdiri Instalasi Rawat Jalan.
              </p>

              {/* Gambar 03 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-800">Gambar 03</h4>
                  <p className="text-gray-600">Denah RSUD Solok</p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <PhotoIcon className="w-64 h-40 text-gray-400 mx-auto" />
                    <p className="text-center text-sm text-gray-500 mt-2">Denah RSUD Solok</p>
                  </div>
                </div>
              </motion.div>

              {/* Gambar 04 */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-800">Gambar 04</h4>
                  <p className="text-gray-600">Denah RSUD Solok Tahun 2014</p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <PhotoIcon className="w-64 h-40 text-gray-400 mx-auto" />
                    <p className="text-center text-sm text-gray-500 mt-2">Denah RSUD Solok Tahun 2014</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
