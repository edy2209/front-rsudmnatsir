'use client';

import { motion } from 'framer-motion';
import { 
  ShieldExclamationIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function BenturanKepentinganPage() {
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

  const conflictTypes = [
    {
      title: "Konflik Kepentingan Finansial",
      description: "Situasi dimana pegawai memiliki kepentingan keuangan yang dapat mempengaruhi keputusan resmi",
      icon: "💰",
      examples: ["Investasi pada vendor rumah sakit", "Menerima komisi dari supplier", "Memiliki bisnis yang bersaing dengan RS"]
    },
    {
      title: "Konflik Kepentingan Personal",
      description: "Benturan antara kepentingan pribadi dengan tugas dan tanggung jawab sebagai pegawai",
      icon: "👤",
      examples: ["Hubungan keluarga dengan vendor", "Kepentingan politik pribadi", "Aktivitas bisnis sampingan"]
    },
    {
      title: "Konflik Kepentingan Profesional",
      description: "Situasi dimana loyalitas profesional dapat bertentangan dengan kepentingan institusi",
      icon: "⚕️",
      examples: ["Praktik pribadi vs tugas RS", "Penelitian dengan sponsor eksternal", "Konsultasi untuk kompetitor"]
    }
  ];

  const preventionSteps = [
    {
      step: "1",
      title: "Identifikasi Potensi Konflik",
      description: "Kenali situasi yang dapat menimbulkan benturan kepentingan"
    },
    {
      step: "2", 
      title: "Laporkan Segera",
      description: "Sampaikan potensi konflik kepada atasan langsung atau unit pengawasan"
    },
    {
      step: "3",
      title: "Dokumentasi Lengkap",
      description: "Catat semua aspek yang berkaitan dengan potensi konflik kepentingan"
    },
    {
      step: "4",
      title: "Evaluasi dan Tindakan",
      description: "Lakukan evaluasi menyeluruh dan ambil tindakan pencegahan yang tepat"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6"
            >
              <ShieldExclamationIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Benturan Kepentingan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Panduan pencegahan dan penanganan benturan kepentingan di lingkungan 
              RSUD Mohammad Natsir untuk menjaga integritas dan profesionalisme
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Definition Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Apa itu <span className="text-red-600">Benturan Kepentingan?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Benturan kepentingan adalah situasi dimana pegawai memiliki kepentingan pribadi, 
                keuangan, atau profesional yang dapat mempengaruhi atau tampak mempengaruhi 
                kemampuan mereka untuk menjalankan tugas dengan objektif dan independen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Dapat terjadi dalam berbagai bentuk dan tingkatan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Memerlukan identifikasi dini dan penanganan tepat</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Dapat dicegah melalui sistem dan prosedur yang baik</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pentingnya Pencegahan</h3>
                <p className="text-gray-600">
                  Pencegahan benturan kepentingan adalah kunci untuk menjaga kredibilitas, 
                  kepercayaan publik, dan kualitas pelayanan kesehatan yang optimal.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Types of Conflicts */}
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
              Jenis-jenis <span className="text-red-600">Benturan Kepentingan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {conflictTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Contoh:</h4>
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{example}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prevention Steps */}
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
              Langkah <span className="text-red-600">Pencegahan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {preventionSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <InformationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Butuh Bantuan atau Konsultasi?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tim pengawasan kami siap membantu Anda dalam mengidentifikasi dan menangani 
              potensi benturan kepentingan. Jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Hubungi Tim Pengawasan
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Download Panduan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
