'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ClockIcon, 
  EyeIcon, 
  UserIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  ChevronUpIcon,
  BookOpenIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function SejarahPage() {
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

  // Timeline data
  const timelineEvents = [
    {
      year: "1940an",
      title: "Awal Mula",
      description: "Rumah Sakit Pemerintah berdiri di Jl. Sudirman Solok dengan 40 tempat tidur, membantu korban perang dan masyarakat Solok.",
      icon: "🏥"
    },
    {
      year: "1979",
      title: "Pengembangan Layanan",
      description: "Tersedia dokter spesialis anak dan kebidanan. Layanan Rawat Inap bertambah menjadi ± 60 tempat tidur.",
      icon: "👶"
    },
    {
      year: "1984",
      title: "Pindah Lokasi",
      description: "Rumah Sakit pindah ke Jl. Simpang Rumbio Solok, diresmikan oleh Gubernur Ir. Azwar Anas pada 7 April 1984.",
      icon: "🏢"
    },
    {
      year: "1986-1987",
      title: "Status Type C",
      description: "RSUD Solok ditetapkan sebagai Rumah Sakit Type C berdasarkan SK Gubernur dan SK MenKes RI.",
      icon: "📜"
    },
    {
      year: "2003",
      title: "Akreditasi Pertama",
      description: "Akreditasi untuk 5 kelompok pelayanan: Gawat Darurat, Rekam Medik, Administrasi dan Manajemen, Pelayanan Medik dan Keperawatan.",
      icon: "⭐"
    },
    {
      year: "2010",
      title: "Akreditasi Lanjutan",
      description: "Status penuh tingkat lanjut untuk 12 kelompok pelayanan termasuk Farmasi, Laboratorium, Radiologi, dan lainnya.",
      icon: "🏆"
    },
    {
      year: "2011",
      title: "Naik Kelas B",
      description: "Status RSUD Solok dinaikkan dari kelas C menjadi kelas B berdasarkan SK MenKes RI dan Ketetapan Gubernur Sumbar.",
      icon: "📈"
    },
    {
      year: "2013-2015",
      title: "Era BLUD",
      description: "Menjadi Badan Layanan Umum Daerah (BLUD) dan efektif beroperasi sebagai BLUD pada tahun 2015.",
      icon: "🏛️"
    }
  ];

  return (
    <PageLayout>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600"
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
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Hero Section with Historical Theme */}
        <motion.div 
          className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white py-20 px-4 relative overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-white rounded-full"></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookOpenIcon className="w-16 h-16 text-amber-300" />
              <div className="text-6xl">📜</div>
              <BuildingOffice2Icon className="w-16 h-16 text-amber-300" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sejarah RSUD M. Natsir
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Perjalanan Panjang Pelayanan Kesehatan dari Era 1940an hingga Kini
            </motion.p>
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.div 
          className="container mx-auto px-4 -mt-8 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-100">
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <a href="#" className="hover:text-amber-600 transition-colors">
                    Sejarah RSUD Solok
                  </a>
                </h2>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-amber-600" />
                    <span>Thursday, 22 September 2016</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-5 h-5 text-orange-600" />
                    <span>10,349</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-red-600" />
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
                    src="http://rsudmnatsir.sumbarprov.go.id/images/2018/04/2.jpg"
                    alt="RSUD M. Natsir Historical Building"
                    width={800}
                    height={500}
                    className="w-full h-[500px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-6xl mb-2">🏥</div>
                      <p className="text-lg font-semibold">RSUD M. Natsir</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <CalendarDaysIcon className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-amber-800">Timeline Sejarah</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">Perjalanan Waktu RSUD M. Natsir</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-red-500 rounded-full"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-amber-500 rounded-full z-10 shadow-lg">
                    <div className="w-full h-full bg-amber-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{event.icon}</div>
                        <div>
                          <div className="text-2xl font-bold text-amber-700">{event.year}</div>
                          <div className="text-lg font-semibold text-gray-800">{event.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed History Content */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏛️</span>
                  Sejarah RSUD Solok
                </h3>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Pelayanan Kesehatan di Kota Solok pada zaman penjajahan berawal dari klinik pengobatan Korem 033 Wirayuda dan Rumah Sakit Pemerintah. Rumah Sakit Pemerintah tersebut merupakan cikal bakal Rumah Sakit Umum Daerah Solok yang berdiri sekitar tahun 40–an dan pada awalnya berlokasi di Jl. Sudirman Solok yang berdekatan dengan komplek Pasar Raya Solok dengan jumlah tempat tidur sebanyak 40 tempat tidur.
                </p>

                <motion.div 
                  className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 my-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-blue-800 font-medium">
                    💡 <strong>Fakta Menarik:</strong> Pada saat tersebut Rumah Sakit banyak membantu masyarakat yang kena korban perang, disamping memberi pelayanan kesehatan pada masyarakat Solok.
                  </p>
                </motion.div>

                <p>
                  Sekitar Tahun 1979, Pelayanan yang diberikan meningkat dengan tersedianya dokter spesialis anak dan kebidanan. Dengan layanan Rawat Inap pada awalnya hanya terdiri dari bangsal umum dan kebidanan dengan ± 60 tempat tidur. Sedangkan layanan Rawat Jalan hanya dilayani oleh satu Poli Umum.
                </p>

                <p>
                  Pada tahun 1984 lokasi Rumah Sakit pindah ke Jl.Simpang Rumbio Solok, dan diresmikan oleh Gubernur Provinsi Sumatera Barat pada saat itu <strong>Ir.Azwar Anas</strong> pada tanggal <strong>7 April 1984</strong>. Sedangkan layanan rawat inap telah berkembang dengan tambahan layanan rawat inap Anak, Penyakit Dalam dan Kebidanan.
                </p>

                <motion.div 
                  className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500 my-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-green-800 font-medium">
                    🏆 <strong>Pencapaian Penting:</strong> Tahun 1986 RSUD Solok diusulkan perubahan status menjadi Type C, dan terwujud dengan SK Gubernur Provinsi Sumatera Barat Nomor : 36 Tahun 1986 dan SK MenKes RI No : 303/Men.Kes/SK/IV1987.
                  </p>
                </motion.div>

                <p>
                  Pada tahun 2011 RSUD Solok berupaya menaikkan kelas RS menjadi kelas B dengan dikeluarkannya <strong>SK MenKes RI No: HK 03.05/520/2011</strong> dan <strong>Ketetapan Gubernur Provinsi Sumatera Barat Nomor : 440 – 343 / 2011</strong>, status RSUD Solok dinaikkan dari kelas C menjadi kelas B.
                </p>

                {/* Akreditasi Section */}
                <div className="bg-purple-50 rounded-2xl p-8 my-10 border border-purple-200">
                  <h4 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
                    <StarIcon className="w-8 h-8" />
                    Pencapaian Akreditasi
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h5 className="font-bold text-gray-800 mb-3">📅 September 2003</h5>
                      <p className="text-sm text-gray-600 mb-3">Akreditasi untuk 5 kelompok pelayanan:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pelayanan Gawat Darurat</li>
                        <li>• Rekam Medik</li>
                        <li>• Administrasi dan Manajemen</li>
                        <li>• Pelayanan Medik dan Keperawatan</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h5 className="font-bold text-gray-800 mb-3">🏆 25 Oktober 2010</h5>
                      <p className="text-sm text-gray-600 mb-3">Status penuh tingkat lanjut untuk 12 pelayanan:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pelayanan Gawat Darurat</li>
                        <li>• Rekam Medik</li>
                        <li>• Administrasi dan Manajemen</li>
                        <li>• Pelayanan Medik & Keperawatan</li>
                        <li>• Pelayanan Farmasi</li>
                        <li>• Pelayanan Laboratorium</li>
                        <li>• Pelayanan Radiologi</li>
                        <li>• Infeksi Nosokomial</li>
                        <li>• Pelayanan Perinatologi</li>
                        <li>• Pelayanan Kamar Operasi</li>
                        <li>• Kebakaran Keselamatan Kerja</li>
                        <li>• Kewaspadaan Bencana</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500 my-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-amber-800 font-medium">
                    🏛️ <strong>Era Modern:</strong> Pada tahun 2013 RSUD Solok mengurus perubahan menjadi Badan Layanan Umum Daerah dengan dikeluarkannya SK BLUD oleh Gubernur pada bulan Juli 2013, sehingga 2015 sudah efektif sebagai Badan Layanan Umum Daerah (BLUD).
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
