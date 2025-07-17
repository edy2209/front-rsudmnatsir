'use client';

import { motion } from 'framer-motion';
import { 
  GiftIcon, 
  XCircleIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function GratifikasiPage() {
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

  const gratificationTypes = [
    {
      title: "Gratifikasi Berbentuk Uang",
      description: "Pemberian dalam bentuk uang tunai, cek, atau transfer",
      icon: "💰",
      examples: ["Uang tunai", "Transfer bank", "Cek atau bilyet giro", "Cryptocurrency"],
      status: "forbidden"
    },
    {
      title: "Gratifikasi Berbentuk Barang",
      description: "Pemberian dalam bentuk benda atau properti",
      icon: "🎁",
      examples: ["Emas, perhiasan", "Kendaraan", "Elektronik", "Properti"],
      status: "forbidden"
    },
    {
      title: "Gratifikasi Berbentuk Fasilitas",
      description: "Pemberian dalam bentuk kemudahan atau layanan",
      icon: "🏨",
      examples: ["Akomodasi hotel", "Tiket perjalanan", "Fasilitas rekreasi", "Layanan gratis"],
      status: "conditional"
    },
    {
      title: "Gratifikasi Berbentuk Kesempatan",
      description: "Pemberian dalam bentuk peluang atau akses khusus",
      icon: "🎯",
      examples: ["Beasiswa", "Pekerjaan keluarga", "Kesempatan investasi", "Akses VIP"],
      status: "forbidden"
    }
  ];

  const reportingSteps = [
    {
      step: "1",
      title: "Identifikasi Gratifikasi",
      description: "Kenali apakah pemberian yang diterima termasuk kategori gratifikasi",
      icon: "🔍"
    },
    {
      step: "2", 
      title: "Evaluasi Nilai dan Konteks",
      description: "Tentukan nilai gratifikasi dan konteks pemberiannya",
      icon: "⚖️"
    },
    {
      step: "3",
      title: "Laporkan dalam 30 Hari",
      description: "Laporkan gratifikasi kepada KPK atau unit pengawasan internal",
      icon: "📋"
    },
    {
      step: "4",
      title: "Tunggu Keputusan",
      description: "Menunggu penetapan apakah gratifikasi boleh diterima atau harus diserahkan",
      icon: "⏳"
    }
  ];

  const allowedGratifications = [
    "Hadiah dalam acara resmi dengan nilai wajar",
    "Souvenir atau cendera mata dalam kunjungan dinas",
    "Konsumsi dalam acara resmi",
    "Pemberian yang diterima keluarga pada acara pernikahan/duka"
  ];

  const forbiddenGratifications = [
    "Uang dalam bentuk apapun",
    "Barang mewah atau bernilai tinggi",
    "Fasilitas yang tidak berkaitan dengan tugas",
    "Pemberian dari pihak yang sedang berurusan"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"
            >
              <GiftIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Gratifikasi
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Panduan lengkap mengenai gratifikasi di lingkungan RSUD Mohammad Natsir 
              untuk menjaga integritas dan transparansi dalam pelayanan kesehatan
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Pelajari Selengkapnya
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
                Apa itu <span className="text-purple-600">Gratifikasi?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Gratifikasi adalah pemberian dalam arti luas, yakni meliputi pemberian uang, 
                barang, rabat (discount), komisi, pinjaman tanpa bunga, tiket perjalanan, 
                fasilitas penginapan, perjalanan wisata, pengobatan cuma-cuma, dan fasilitas lainnya.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Prinsip Dasar:</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Gratifikasi yang diterima harus dilaporkan</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Tidak semua gratifikasi dilarang</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Ada prosedur pelaporan yang harus diikuti</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <ShieldCheckIcon className="w-16 h-16 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Penting untuk Diketahui</h3>
                <p className="text-gray-600">
                  Pelaporan gratifikasi bukan berarti pelanggaran. Ini adalah langkah transparansi 
                  untuk menjaga kredibilitas dan kepercayaan publik terhadap institusi.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Types of Gratification */}
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
              Jenis-jenis <span className="text-purple-600">Gratifikasi</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {gratificationTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{type.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    type.status === 'forbidden' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {type.status === 'forbidden' ? 'Wajib Lapor' : 'Kondisional'}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Contoh:</h4>
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{example}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Allowed vs Forbidden */}
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
              Yang Boleh vs <span className="text-purple-600">Yang Tidak Boleh</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Allowed */}
            <motion.div
              variants={itemVariants}
              className="bg-green-50 rounded-2xl p-8 border-2 border-green-200"
            >
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-800">Yang Diperbolehkan</h3>
              </div>
              <div className="space-y-4">
                {allowedGratifications.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-green-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  * Tetap harus dilaporkan sesuai prosedur yang berlaku
                </p>
              </div>
            </motion.div>

            {/* Forbidden */}
            <motion.div
              variants={itemVariants}
              className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
            >
              <div className="flex items-center mb-6">
                <XCircleIcon className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">Yang Dilarang</h3>
              </div>
              <div className="space-y-4">
                {forbiddenGratifications.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <XCircleIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-red-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-sm text-red-800 font-medium">
                  * Harus ditolak atau diserahkan kepada negara
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reporting Steps */}
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
              Prosedur <span className="text-purple-600">Pelaporan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {reportingSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex flex-col items-center justify-center text-white">
                    <div className="text-2xl mb-1">{step.icon}</div>
                    <div className="text-xs font-bold">{step.step}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <DocumentTextIcon className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Perlu Melaporkan Gratifikasi?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Jangan ragu untuk melaporkan gratifikasi yang Anda terima. Tim kami siap membantu 
              Anda memahami prosedur dan memastikan kepatuhan terhadap regulasi yang berlaku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Lapor Gratifikasi
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Download Formulir
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
