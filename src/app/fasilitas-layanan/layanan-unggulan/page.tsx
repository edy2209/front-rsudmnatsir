'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClockIcon, 
  EyeIcon, 
  UserIcon,
  BuildingOffice2Icon,
  TruckIcon,
  HeartIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function LayananUnggulanPage() {
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

  const bedData = [
    { no: 1, ruangan: "VIP/VVIP", vip: "12/2", utama: "", kelas1: "", kelas2: "", kelas3: "", jumlah: 14 },
    { no: 2, ruangan: "Interne", vip: "", utama: "", kelas1: "7", kelas2: "12", kelas3: "29", jumlah: 48 },
    { no: 3, ruangan: "Bedah Umum/Orthopedi", vip: "", utama: "2", kelas1: "3", kelas2: "17", kelas3: "12", jumlah: 34 },
    { no: 4, ruangan: "ICU", vip: "", utama: "", kelas1: "", kelas2: "5", kelas3: "", jumlah: 5 },
    { no: 5, ruangan: "Kebidanan", vip: "", utama: "", kelas1: "1", kelas2: "3", kelas3: "22", jumlah: 26 },
    { no: 6, ruangan: "Paru", vip: "", utama: "", kelas1: "2", kelas2: "3", kelas3: "10", jumlah: 15 },
    { no: 7, ruangan: "Neurologi", vip: "", utama: "", kelas1: "6", kelas2: "10", kelas3: "", jumlah: 16 },
    { no: 8, ruangan: "THT/Mata", vip: "", utama: "", kelas1: "5", kelas2: "3", kelas3: "4", jumlah: 12 },
    { no: 9, ruangan: "Perinatologi", vip: "", utama: "", kelas1: "", kelas2: "15", kelas3: "", jumlah: 15 },
    { no: 10, ruangan: "KLS Utama", vip: "", utama: "10", kelas1: "", kelas2: "", kelas3: "", jumlah: 10 },
    { no: 11, ruangan: "Anak", vip: "4/-", utama: "4", kelas1: "2", kelas2: "10", kelas3: "12", jumlah: 32 }
  ];

  const vehicleData = [
    { no: 1, jenis: "Ambulance Toyota Kijang", nopol: "BA8724P", tahun: "1999", kondisi: "Baik" },
    { no: 2, jenis: "Ambulance Toyota Kijang", nopol: "BA9095AK", tahun: "2003", kondisi: "Baik" },
    { no: 3, jenis: "Ambulance Kijang Kapsul", nopol: "BA 9118 AK", tahun: "2004", kondisi: "Baik" },
    { no: 4, jenis: "Ambulance Toyota Kijang", nopol: "BA 9042 AK", tahun: "2006", kondisi: "Baik" },
    { no: 5, jenis: "Ambulance KIA Prego", nopol: "BA8037PE", tahun: "2008", kondisi: "Baik" },
    { no: 6, jenis: "Operasional Kijang Innova", nopol: "BA 26 PA", tahun: "2011", kondisi: "Baik" },
    { no: 7, jenis: "Ambulance FORD EVEREST", nopol: "BA 1851 B", tahun: "2013", kondisi: "Baik" },
    { no: 8, jenis: "ISUZU Panther", nopol: "BA 1649 P", tahun: "2014", kondisi: "Baik" }
  ];

  const buildings = [
    "Gedung Poliklinik II", "Gedung Instalasi Gawat Darurat bertingkat", "Gedung Laboratorium",
    "Gedung Administrasi", "Gedung Instalasi Radiologi", "Gedung Rekam Medik", "Gedung IPSRS",
    "Gedung Kamar Operasi bertingkat", "Gedung Unit Fungsional Kebidanan dan Gynekologi",
    "Gedung Unit Fungsional Kesehatan Anak I,II", "Gedung Unit Fungsional Penyakit Bedah",
    "Gedung Unit Fungsional Penyakit Dalam", "Gedung Unit Fungsional Mayang Tarurai/Interne Wanita",
    "Gedung Prefentif Medical Center PMC/VIP", "Gedung Unit Fungsional ICU", "Gedung Instalasi Gizi",
    "Gedung Instalasi Farmasi", "Gedung Unit Fisioterapi", "Gedung Incinerator", "Gedung Kamar Mayat",
    "Gedung Generator"
  ];

  const facilities = [
    "Tempat Jemuran kain", "Bak pengelola air limbah", "Gedung Mushalla", "Selasar",
    "Areal parkir", "Jalan Lingkar", "WC.Umum", "Pengelolaan Sampah Medis dan Non Medis",
    "Limbah Padat dengan Incinerator", "Limbah Cair dengan IPAL", "Air PDAM dan Sumur Bor",
    "Penerangan PLN dan Genset"
  ];

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
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 -mt-20">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 sm:py-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-2"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sarana dan Prasarana
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fasilitas dan infrastruktur terdepan untuk pelayanan kesehatan berkualitas
            </motion.p>
          </div>
        </motion.div>

        {/* Article Meta */}
        <motion.div 
          className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 -mt-6 sm:-mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Monday, 10 October 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm">5,945 views</span>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Rio Bayu Sentosa</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-12"
          >
            {/* Tempat Tidur Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tempat Tidur</h2>
                  <p className="text-sm sm:text-base text-gray-600">Kapasitas Tempat Tidur Tahun 2014</p>
                </div>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full px-4 sm:px-0">
                  <table className="w-full text-xs sm:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-green-50">
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 rounded-tl-xl text-xs sm:text-sm">No</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 text-xs sm:text-sm">Ruangan</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">VIP/VVIP</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Kelas Utama</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Kelas I</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Kelas II</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Kelas III</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 rounded-tr-xl text-xs sm:text-sm">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bedData.map((row, index) => (
                        <motion.tr 
                          key={row.no}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-900">{row.no}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700">{row.ruangan}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{row.vip}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{row.utama}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{row.kelas1}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{row.kelas2}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{row.kelas3}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-bold text-blue-600">{row.jumlah}</td>
                        </motion.tr>
                      ))}
                      <tr className="bg-gradient-to-r from-blue-100 to-green-100 font-bold">
                        <td className="px-2 sm:px-4 py-2 sm:py-3"></td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-800">Total</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-800">18</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-800">16</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-800">26</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-800">78</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-800">89</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-blue-600 text-sm sm:text-lg">227</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Gedung Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BuildingOffice2Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Gedung</h2>
                  <p className="text-sm sm:text-base text-gray-600">Luas gedung 2,88 Ha dengan luas lahan 3,06 Ha</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {buildings.map((building, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base leading-tight">{building}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Sarana Prasarana Lainnya */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">🏥</span>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Sarana Prasarana Lainnya</h2>
                  <p className="text-sm sm:text-base text-gray-600">Fasilitas penunjang pelayanan kesehatan</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base leading-tight">{facility}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Kendaraan Dinas */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Kendaraan Dinas</h2>
                  <p className="text-sm sm:text-base text-gray-600">Kendaraan Operasional RSUD Solok Tahun 2014</p>
                </div>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full px-4 sm:px-0">
                  <table className="w-full text-xs sm:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-50 to-red-50">
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 rounded-tl-xl text-xs sm:text-sm">No</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 text-xs sm:text-sm">Jenis Kendaraan</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Nomor Polisi</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 text-xs sm:text-sm">Tahun</th>
                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-700 rounded-tr-xl text-xs sm:text-sm">Kondisi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleData.map((vehicle, index) => (
                        <motion.tr 
                          key={vehicle.no}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-900">{vehicle.no}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700">{vehicle.jenis}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center font-mono text-gray-700">{vehicle.nopol}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-gray-700">{vehicle.tahun}</td>
                          <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                            <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {vehicle.kondisi}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
