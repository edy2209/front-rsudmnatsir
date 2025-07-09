'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  BeakerIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  TruckIcon,
  EyeIcon,
  BoltIcon,
  SparklesIcon,
  MapPinIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { routes } from '@/utils/routes';

export default function Services() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: emergencyRef, inView: emergencyInView } = useInView({ threshold: 0.1, triggerOnce: true });

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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const services = [
    {
      title: "Instalasi Gawat Darurat (IGD)",
      description: "Pelayanan gawat darurat 24 jam dengan tim medis siaga dan peralatan lengkap untuk menangani berbagai kondisi darurat medis",
      icon: HeartIcon,
      color: "from-red-500 to-pink-500",
      features: ["24/7 Service", "Tim Medis Siaga", "Ambulance", "Ruang Resusitasi"],
      price: "Sesuai Tarif"
    },
    {
      title: "Rawat Inap",
      description: "Fasilitas rawat inap dengan berbagai kelas perawatan, dilengkapi dengan perawat berpengalaman dan fasilitas modern",
      icon: BuildingOffice2Icon,
      color: "from-blue-500 to-cyan-500",
      features: ["Kelas VIP", "Kelas I, II, III", "Ruang Isolasi", "ICU & NICU"],
      price: "Mulai 200rb/hari"
    },
    {
      title: "Poliklinik Spesialis",
      description: "Layanan konsultasi dan pemeriksaan dengan dokter spesialis berpengalaman di berbagai bidang kedokteran",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-500",
      features: ["Poli Dalam", "Poli Anak", "Poli Kandungan", "Poli Bedah"],
      price: "Mulai 150rb"
    },
    {
      title: "Laboratorium",
      description: "Pemeriksaan laboratorium lengkap dengan teknologi modern dan hasil yang akurat untuk mendukung diagnosis",
      icon: BeakerIcon,
      color: "from-purple-500 to-violet-500",
      features: ["Hematologi", "Kimia Klinik", "Mikrobiologi", "Patologi"],
      price: "Mulai 50rb"
    },
    {
      title: "Radiologi",
      description: "Pemeriksaan radiologi dengan peralatan canggih untuk diagnosis yang tepat dan akurat",
      icon: CpuChipIcon,
      color: "from-orange-500 to-amber-500",
      features: ["Rontgen", "CT Scan", "USG", "MRI"],
      price: "Mulai 100rb"
    },
    {
      title: "Farmasi",
      description: "Pelayanan obat dan konsultasi farmasi dengan apoteker berpengalaman dan stok obat lengkap",
      icon: ShieldCheckIcon,
      color: "from-teal-500 to-cyan-500",
      features: ["Obat Generik", "Obat Paten", "Konsultasi", "Delivery"],
      price: "Sesuai Obat"
    }
  ];

  const specialServices = [
    {
      title: "Medical Check Up",
      description: "Pemeriksaan kesehatan menyeluruh dengan paket lengkap",
      icon: EyeIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Hemodialisa",
      description: "Layanan cuci darah dengan mesin modern dan tenaga ahli",
      icon: BoltIcon,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Ambulance",
      description: "Layanan ambulance 24 jam untuk kondisi darurat",
      icon: TruckIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto text-center" ref={heroRef}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Layanan Kami
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pelayanan kesehatan komprehensif dengan standar medis tertinggi untuk kebutuhan Anda dan keluarga
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Layanan Utama
              </span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 relative z-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    <motion.button
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Info Lengkap
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Layanan Khusus
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white relative overflow-hidden" ref={emergencyRef}>
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={emergencyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block p-4 bg-white/20 rounded-full mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HeartIcon className="w-16 h-16 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kondisi Darurat?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Tim IGD kami siap 24/7 untuk memberikan penanganan cepat dan tepat
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="tel:119"
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="w-6 h-6" />
                <span>Hubungi IGD: 119</span>
                <motion.div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={routes.contact}
                  className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  <SparklesIcon className="w-6 h-6" />
                  Info Kontak Lengkap
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h100v100h-100z' fill='none'/%3E%3Cpath d='m0 0 50 50-50 50v-100' fill='%23ffffff' fill-opacity='0.03'/%3E%3Cpath d='m50 0 50 50-50 50v-100' fill='%23ffffff' fill-opacity='0.02'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <SparklesIcon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">RSUD M. Natsir</h3>
                  <p className="text-sm text-gray-400">Rumah Sakit Umum Daerah</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Melayani masyarakat dengan dedikasi tinggi untuk kesehatan yang lebih baik. 
                Komitmen kami adalah memberikan pelayanan kesehatan terdepan dengan teknologi modern.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <HeartIcon className="w-5 h-5 text-red-400" />
                Layanan
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { name: "Gawat Darurat", href: "#" },
                  { name: "Rawat Inap", href: "#" },
                  { name: "Poliklinik", href: "#" },
                  { name: "Laboratorium", href: "#" }
                ].map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={item.href} 
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BuildingOffice2Icon className="w-5 h-5 text-blue-400" />
                Informasi
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { name: "Tentang Kami", href: routes.about },
                  { name: "Layanan", href: routes.services },
                  { name: "Kontak", href: routes.contact }
                ].map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={item.href} 
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-green-400" />
                Kontak
              </h4>
              <div className="space-y-4 text-sm text-gray-400">
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-red-400 text-lg">📍</span>
                  <span>Jl. Rumah Sakit No. 1, Kota</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <PhoneIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>(021) 1234-5678</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-blue-400 text-lg">✉️</span>
                  <span>info@rsudmnatsir.go.id</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ClockIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>24 Jam (IGD)</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 RSUD M. Natsir. Semua hak dilindungi.</p>
            <motion.p 
              className="mt-2 text-xs"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Dibuat dengan{" "}
              <motion.span 
                className="text-red-400 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              {" "}untuk kesehatan yang lebih baik
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
