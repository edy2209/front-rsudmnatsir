'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ClockIcon,
  SparklesIcon,
  CheckBadgeIcon,
  StarIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { routes } from '@/utils/routes';

export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({ threshold: 0.1, triggerOnce: true });

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

  const values = [
    {
      title: "Pelayanan Prima",
      description: "Memberikan pelayanan kesehatan terbaik dengan standar internasional dan pendekatan yang humanis",
      icon: HeartIcon,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Profesionalisme",
      description: "Tim medis berpengalaman dan terlatih dengan kompetensi tinggi di bidangnya masing-masing",
      icon: UserGroupIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Keselamatan Pasien",
      description: "Mengutamakan keselamatan dan keamanan pasien dalam setiap prosedur medis yang dilakukan",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Inovasi & Teknologi",
      description: "Menggunakan teknologi medis terdepan untuk diagnosis dan pengobatan yang akurat",
      icon: AcademicCapIcon,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Fasilitas Modern",
      description: "Dilengkapi dengan peralatan medis canggih dan fasilitas yang nyaman untuk pasien",
      icon: BuildingOffice2Icon,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Layanan 24/7",
      description: "Pelayanan gawat darurat dan intensive care yang tersedia 24 jam setiap hari",
      icon: ClockIcon,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const achievements = [
    { number: "25+", label: "Tahun Pengalaman", icon: "🏆" },
    { number: "50,000+", label: "Pasien Dilayani", icon: "👥" },
    { number: "50+", label: "Dokter Spesialis", icon: "👨‍⚕️" },
    { number: "200+", label: "Tenaga Medis", icon: "🩺" },
    { number: "99%", label: "Tingkat Kepuasan", icon: "⭐" },
    { number: "24/7", label: "Layanan Darurat", icon: "🚑" }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Pendirian RSUD M. Natsir",
      description: "Didirikan sebagai rumah sakit umum daerah untuk melayani masyarakat"
    },
    {
      year: "2005",
      title: "Akreditasi Pertama",
      description: "Memperoleh akreditasi rumah sakit tingkat dasar dari Kemenkes RI"
    },
    {
      year: "2012",
      title: "Ekspansi Fasilitas",
      description: "Penambahan gedung baru dan peralatan medis modern"
    },
    {
      year: "2018",
      title: "Akreditasi Paripurna",
      description: "Meraih akreditasi paripurna dari KARS (Komisi Akreditasi Rumah Sakit)"
    },
    {
      year: "2023",
      title: "Digitalisasi Pelayanan",
      description: "Implementasi sistem informasi rumah sakit terintegrasi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Tentang Kami
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Melayani dengan{" "}
              <motion.span 
                className="text-red-500 inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ❤️ Dedikasi
              </motion.span>
              , Mengobati dengan{" "}
              <span className="text-blue-600 font-semibold">Keahlian</span>
            </motion.p>

            <motion.div 
              className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                RSUD M. Natsir adalah rumah sakit umum daerah yang berkomitmen tinggi untuk memberikan 
                pelayanan kesehatan terbaik bagi masyarakat. Dengan pengalaman lebih dari 25 tahun, 
                kami telah menjadi pilihan utama untuk kebutuhan kesehatan keluarga Anda.
              </p>
              <p>
                Didukung oleh tenaga medis profesional, fasilitas modern, dan teknologi canggih, 
                kami mengutamakan kualitas pelayanan, keselamatan pasien, dan kepuasan dalam setiap 
                aspek pelayanan kesehatan yang kami berikan.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4" ref={visionRef}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Visi & Misi
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
              initial={{ opacity: 0, x: -50 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi rumah sakit unggulan yang memberikan pelayanan kesehatan berkualitas tinggi, 
                terpercaya, dan terjangkau bagi seluruh lapisan masyarakat dengan mengutamakan 
                keselamatan pasien dan kepuasan pelayanan.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
              initial={{ opacity: 0, x: 50 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <CheckBadgeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="text-gray-600 text-lg leading-relaxed space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Memberikan pelayanan kesehatan yang komprehensif dan berkualitas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Mengembangkan SDM yang profesional dan kompeten
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Meningkatkan fasilitas dan teknologi medis terkini
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  Menjaga kepercayaan masyarakat melalui pelayanan prima
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50/50">
        <div className="container mx-auto px-4" ref={valuesRef}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Nilai-Nilai Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Komitmen kami dalam memberikan pelayanan kesehatan terbaik didasari oleh nilai-nilai fundamental
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10" ref={achievementsRef}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pencapaian Kami</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Dedikasi dan komitmen kami telah menghasilkan pencapaian yang membanggakan
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-sm opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
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
                Perjalanan Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sejarah perkembangan RSUD M. Natsir dalam melayani masyarakat
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 shadow-lg">
                  {milestone.year}
                </div>
                <div className="flex-grow bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <MapPinIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
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
                  <EnvelopeIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
