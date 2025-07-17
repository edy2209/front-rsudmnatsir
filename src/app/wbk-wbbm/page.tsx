'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  StarIcon, 
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function WBKWBBMPage() {
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

  const wbkFeatures = [
    {
      title: "Manajemen Perubahan",
      description: "Komitmen pimpinan dalam melakukan reformasi birokrasi",
      icon: "🔄",
      progress: 95
    },
    {
      title: "Penataan Tatalaksana",
      description: "Sistem, proses, dan prosedur kerja yang jelas dan efisien",
      icon: "📋",
      progress: 92
    },
    {
      title: "Penataan Sistem Manajemen SDM",
      description: "Pengelolaan SDM yang profesional dan berbasis merit",
      icon: "👥",
      progress: 88
    },
    {
      title: "Penguatan Pengawasan",
      description: "Sistem pengawasan internal yang efektif",
      icon: "🔍",
      progress: 90
    },
    {
      title: "Penguatan Akuntabilitas",
      description: "Pertanggungjawaban kinerja yang transparan",
      icon: "📊",
      progress: 94
    },
    {
      title: "Penguatan Kualitas Pelayanan Publik",
      description: "Pelayanan yang berkualitas dan memuaskan masyarakat",
      icon: "⭐",
      progress: 96
    }
  ];

  const wbbmBenefits = [
    {
      title: "Transparansi Anggaran",
      description: "Keterbukaan informasi perencanaan dan penggunaan anggaran",
      icon: "💰"
    },
    {
      title: "Partisipasi Publik",
      description: "Keterlibatan masyarakat dalam pengawasan pembangunan",
      icon: "🤝"
    },
    {
      title: "Akuntabilitas Pembangunan",
      description: "Pertanggungjawaban pelaksanaan program pembangunan",
      icon: "🏗️"
    },
    {
      title: "Inovasi Berkelanjutan",
      description: "Pengembangan inovasi untuk peningkatan kualitas layanan",
      icon: "💡"
    }
  ];

  const menuItems = [
    {
      title: "Benturan Kepentingan",
      description: "Panduan pencegahan dan penanganan benturan kepentingan di lingkungan kerja",
      icon: "⚖️",
      href: "/wbk-wbbm/benturan-kepentingan",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Gratifikasi",
      description: "Informasi lengkap tentang gratifikasi dan prosedur pelaporannya",
      icon: "🎁",
      href: "/wbk-wbbm/gratifikasi",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Whistleblower System",
      description: "Sistem pelaporan pelanggaran yang aman dan terpercaya",
      icon: "📢",
      href: "/wbk-wbbm/whistleblower-system",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Predikat WBK",
      description: "Meraih predikat Wilayah Bebas dari Korupsi",
      icon: TrophyIcon
    },
    {
      year: "2024",
      title: "Menuju WBBM",
      description: "Dalam proses menuju Wilayah Birokrasi Bersih dan Melayani",
      icon: StarIcon
    }
  ];

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
              className="flex items-center justify-center space-x-4 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center"
              >
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
              >
                <StarIcon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                WBK & WBBM
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Wilayah Bebas dari Korupsi & Wilayah Birokrasi Bersih dan Melayani
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Komitmen RSUD Mohammad Natsir dalam mewujudkan tata kelola yang bersih, 
              transparan, dan akuntabel untuk pelayanan kesehatan yang berkualitas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Pelajari WBK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Menuju WBBM
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WBK Definition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="w-12 h-12 text-blue-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Wilayah Bebas dari <span className="text-blue-600">Korupsi</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WBK adalah predikat yang diberikan kepada instansi pemerintah yang memenuhi 
                manajemen perubahan, penataan tatalaksana, penataan sistem manajemen SDM, 
                penguatan pengawasan, dan penguatan akuntabilitas kinerja.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Bebas dari praktik korupsi, kolusi, dan nepotisme</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Tata kelola yang transparan dan akuntabel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Pelayanan publik yang berkualitas</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <BuildingOfficeIcon className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Manfaat WBK</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• Meningkatkan kepercayaan publik</p>
                  <p>• Kualitas pelayanan yang lebih baik</p>
                  <p>• Lingkungan kerja yang kondusif</p>
                  <p>• Efisiensi dan efektivitas organisasi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WBK Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Komponen <span className="text-blue-600">WBK</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {wbkFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-600">{feature.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${feature.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WBBM Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <SparklesIcon className="w-16 h-16 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Menuju WBBM</h3>
                <p className="text-gray-600 mb-4">
                  RSUD Mohammad Natsir sedang dalam proses menuju predikat WBBM dengan 
                  berbagai inovasi dan peningkatan kualitas pelayanan.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {wbbmBenefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <p className="text-xs font-medium text-gray-700">{benefit.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <StarIcon className="w-12 h-12 text-purple-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Wilayah Birokrasi Bersih dan <span className="text-purple-600">Melayani</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WBBM adalah predikat tertinggi yang diberikan kepada instansi yang telah 
                mencapai WBK dan menunjukkan kinerja yang sangat baik dalam memberikan 
                pelayanan kepada masyarakat.
              </p>
              <div className="space-y-4">
                {wbbmBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-lg">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program <span className="text-indigo-600">Integritas</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <Link href={item.href}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center text-indigo-600 font-semibold">
                      <span>Pelajari Lebih Lanjut</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pencapaian <span className="text-indigo-600">Kami</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-8 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mr-4">
                        {achievement.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{achievement.description}</p>
                  </div>
                </motion.div>
              );
            })}
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
            <HeartIcon className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Bersama Membangun Integritas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Mari bersama-sama mewujudkan RSUD Mohammad Natsir sebagai institusi yang bersih, 
              transparan, dan memberikan pelayanan terbaik untuk masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Lapor Pelanggaran
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Dukung Program Kami
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
