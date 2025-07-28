'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function KlinikAnakPage() {
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

  // Layanan yang tersedia
  const layananData = [
    {
      title: "Konsultasi Tumbuh Kembang",
      description: "Pemantauan dan evaluasi pertumbuhan serta perkembangan anak",
      icon: "👶",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Imunisasi Lengkap",
      description: "Program vaksinasi sesuai jadwal imunisasi nasional",
      icon: "💉",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pemeriksaan Kesehatan Rutin",
      description: "Check-up berkala untuk memantau kondisi kesehatan anak",
      icon: "🩺",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Pengobatan Penyakit Anak",
      description: "Penanganan berbagai penyakit yang umum pada anak",
      icon: "💊",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Konseling Gizi Anak",
      description: "Edukasi dan konsultasi nutrisi untuk pertumbuhan optimal",
      icon: "🥗",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Deteksi Dini Gangguan",
      description: "Screening awal untuk gangguan tumbuh kembang",
      icon: "🔍",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Jadwal praktek dokter
  const jadwalDokter = [
    {
      nama: "dr. Siti Aminah, Sp.A",
      spesialisasi: "Spesialis Anak",
      jadwal: [
        { hari: "Senin - Rabu", waktu: "08:00 - 12:00" },
        { hari: "Jumat", waktu: "14:00 - 17:00" }
      ]
    },
    {
      nama: "dr. Ahmad Fauzi, Sp.A",
      spesialisasi: "Spesialis Anak",
      jadwal: [
        { hari: "Selasa - Kamis", waktu: "08:00 - 12:00" },
        { hari: "Sabtu", waktu: "08:00 - 11:00" }
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
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
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 -mt-20">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-20 px-4 relative overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-white/60 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-6xl">👶</div>
              <HeartIcon className="w-16 h-16 text-pink-300" />
              <div className="text-6xl">🩺</div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Klinik Anak
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pelayanan kesehatan anak terpadu dengan dokter spesialis berpengalaman
            </motion.p>

            {/* Quick Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <ClockIcon className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Jam Buka</h3>
                <p className="text-sm opacity-90">Senin - Sabtu<br />08:00 - 17:00</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <UserGroupIcon className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Tim Dokter</h3>
                <p className="text-sm opacity-90">2 Dokter Spesialis Anak<br />Berpengalaman</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <ShieldCheckIcon className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-lg mb-2">Layanan</h3>
                <p className="text-sm opacity-90">Konsultasi, Imunisasi<br />& Check-up Rutin</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Layanan Section */}
        <motion.div 
          className="container mx-auto px-4 -mt-12 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <StarIcon className="w-6 h-6 text-pink-600" />
                  <span className="font-semibold text-pink-800">Layanan Unggulan</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Layanan Klinik Anak
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Kami menyediakan layanan kesehatan anak yang komprehensif dengan pendekatan holistik
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {layananData.map((layanan, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${layanan.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <span className="text-3xl">{layanan.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {layanan.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {layanan.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Jadwal Dokter Section */}
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-800">Jadwal Praktek</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Dokter Spesialis Anak
              </h2>
              <p className="text-gray-600 text-lg">
                Tim dokter spesialis anak yang berpengalaman dan terpercaya
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jadwalDokter.map((dokter, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl">👨‍⚕️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{dokter.nama}</h3>
                      <p className="text-blue-600 font-medium">{dokter.spesialisasi}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {dokter.jadwal.map((jadwal, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <ClockIcon className="w-5 h-5 text-blue-500" />
                          <span className="font-medium text-gray-700">{jadwal.hari}</span>
                        </div>
                        <span className="text-blue-600 font-semibold">{jadwal.waktu}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Kontak */}
          <motion.div
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl shadow-xl p-8 sm:p-12 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hubungi Kami
              </h2>
              <p className="text-xl opacity-90">
                Untuk informasi lebih lanjut atau membuat janji temu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <PhoneIcon className="w-12 h-12 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Telepon</h3>
                <p className="text-lg">(0755) 12345</p>
                <p className="text-sm opacity-80 mt-1">Ext. 234 (Klinik Anak)</p>
              </motion.div>

              <motion.div 
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <MapPinIcon className="w-12 h-12 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Lokasi</h3>
                <p className="text-lg">Lantai 2, Gedung Rawat Jalan</p>
                <p className="text-sm opacity-80 mt-1">RSUD M. Natsir Solok</p>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <CheckCircleIcon className="w-6 h-6" />
                <span className="font-medium">Melayani BPJS & Umum</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
