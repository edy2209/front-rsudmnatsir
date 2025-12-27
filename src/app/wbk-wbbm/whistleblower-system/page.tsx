'use client';

import { motion } from 'framer-motion';
import { 
  MegaphoneIcon, 
  ShieldCheckIcon, 
  EyeSlashIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  UserIcon,
  LockClosedIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function WhistleblowerSystemPage() {
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

  const reportableViolations = [
    {
      title: "Korupsi",
      description: "Penyalahgunaan wewenang untuk keuntungan pribadi atau kelompok",
      icon: "💰",
      examples: ["Penggelapan dana", "Suap menyuap", "Nepotisme", "Markup harga"]
    },
    {
      title: "Pelanggaran Etika",
      description: "Tindakan yang melanggar kode etik profesi atau organisasi",
      icon: "⚖️",
      examples: ["Diskriminasi", "Pelecehan", "Konflik kepentingan", "Pelanggaran SOP"]
    },
    {
      title: "Malpraktik",
      description: "Kelalaian atau kesalahan dalam pelayanan medis",
      icon: "🏥",
      examples: ["Kelalaian medis", "Praktik tidak sesuai standar", "Pelanggaran etik kedokteran", "Informed consent"]
    },
    {
      title: "Penyalahgunaan Fasilitas",
      description: "Penggunaan aset atau fasilitas tidak sesuai peruntukan",
      icon: "🏢",
      examples: ["Penggunaan kendaraan dinas", "Fasilitas untuk kepentingan pribadi", "Pemborosan sumber daya", "Pencurian aset"]
    }
  ];

  const protectionFeatures = [
    {
      title: "Kerahasiaan Identitas",
      description: "Identitas pelapor dijamin kerahasiaannya",
      icon: EyeSlashIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Perlindungan Hukum",
      description: "Pelapor mendapat perlindungan dari intimidasi atau pembalasan",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Akses Anonim",
      description: "Tersedia kanal pelaporan secara anonim",
      icon: LockClosedIcon,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tindak Lanjut Transparan",
      description: "Proses penanganan yang transparan dan dapat dimonitor",
      icon: CheckCircleIcon,
      color: "from-orange-500 to-red-500"
    }
  ];

  const reportingChannels = [
    {
      method: "Hotline Telepon",
      detail: "(0755) 12345",
      description: "Layanan 24 jam setiap hari",
      icon: PhoneIcon,
      color: "bg-blue-500"
    },
    {
      method: "Email Pengaduan",
      detail: "whistleblower@rsudmnatsir.go.id",
      description: "Kirim laporan detail dengan lampiran",
      icon: EnvelopeIcon,
      color: "bg-green-500"
    },
    {
      method: "Kotak Pengaduan",
      detail: "Tersedia di setiap lantai",
      description: "Laporan tertulis secara anonim",
      icon: DocumentTextIcon,
      color: "bg-purple-500"
    },
    {
      method: "Aplikasi Online",
      detail: "Portal Pengaduan Digital",
      description: "Sistem pelaporan online terintegrasi",
      icon: MegaphoneIcon,
      color: "bg-orange-500"
    }
  ];

  const reportingSteps = [
    {
      step: "1",
      title: "Kumpulkan Informasi",
      description: "Dokumentasikan fakta, bukti, dan kronologi kejadian yang akan dilaporkan"
    },
    {
      step: "2", 
      title: "Pilih Kanal Pelaporan",
      description: "Pilih metode pelaporan yang paling sesuai dan nyaman untuk Anda"
    },
    {
      step: "3",
      title: "Sampaikan Laporan",
      description: "Sampaikan laporan dengan detail yang jelas dan lengkap"
    },
    {
      step: "4",
      title: "Monitor Tindak Lanjut",
      description: "Pantau perkembangan penanganan laporan melalui nomor tiket"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-20 -mt-20 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-6"
            >
              <MegaphoneIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Whistleblower System
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sistem pelaporan pelanggaran untuk menciptakan lingkungan kerja yang bersih, 
              transparan, dan berintegritas di RSUD Mohammad Natsir
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Laporkan Sekarang
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Definition & Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Apa itu <span className="text-indigo-600">Whistleblower System?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whistleblower System adalah mekanisme penyampaian pengaduan dugaan tindak pidana 
                korupsi atau pelanggaran yang dapat merugikan keuangan negara atau perekonomian negara 
                atau merugikan institusi rumah sakit.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Melindungi identitas dan keamanan pelapor</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Memberikan kanal yang aman untuk melaporkan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Memastikan tindak lanjut yang tepat dan cepat</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <UserIcon className="w-16 h-16 text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Siapa yang Bisa Melaporkan?</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• Pegawai RSUD Mohammad Natsir</p>
                  <p>• Pasien dan keluarga pasien</p>
                  <p>• Mitra dan vendor</p>
                  <p>• Masyarakat umum</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Types of Violations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jenis Pelanggaran yang Dapat <span className="text-indigo-600">Dilaporkan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {reportableViolations.map((violation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{violation.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{violation.title}</h3>
                <p className="text-gray-600 mb-6">{violation.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Contoh Kasus:</h4>
                  {violation.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{example}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perlindungan untuk <span className="text-indigo-600">Pelapor</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {protectionFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Reporting Channels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kanal <span className="text-indigo-600">Pelaporan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {reportingChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${channel.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{channel.method}</h3>
                      <p className="text-lg font-semibold text-indigo-600 mb-2">{channel.detail}</p>
                      <p className="text-gray-600">{channel.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cara <span className="text-indigo-600">Melaporkan</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <ExclamationTriangleIcon className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Laporkan Pelanggaran Sekarang
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Suara Anda penting untuk menciptakan lingkungan kerja yang bersih dan berintegritas. 
              Identitas Anda akan dilindungi dan laporan akan ditindaklanjuti dengan profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Buat Laporan
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Lihat Status Laporan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
