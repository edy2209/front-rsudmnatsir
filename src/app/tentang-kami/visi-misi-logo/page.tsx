'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClockIcon, 
  EyeIcon, 
  UserIcon,
  SparklesIcon,
  HeartIcon,
  StarIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ChevronUpIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import PageLayout from '@/components/PageLayout';

export default function VisiMisiLogoPage() {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const missionItems = [
    {
      number: "01",
      text: "Menyelanggarakan Pelayanan Kesehatan yang Berkualitas dan Paripurna",
      icon: HeartIcon,
      color: "from-red-500 to-pink-600"
    },
    {
      number: "02", 
      text: "Meningkatkan Kemandirian dan Tata Kelola Rumah Sakit",
      icon: BuildingOffice2Icon,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "03",
      text: "Menyelenggarakan Pendidikan, Pelatihan dan Penelitian di Bidang Kesehatan",
      icon: AcademicCapIcon,
      color: "from-green-500 to-emerald-600"
    }
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
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUpIcon className="w-6 h-6" />
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4 relative overflow-hidden -mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20">
              <SparklesIcon className="w-full h-full" />
            </div>
            <div className="absolute top-32 right-20 w-16 h-16">
              <StarIcon className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24">
              <TrophyIcon className="w-full h-full" />
            </div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Motto, Visi & Misi
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Komitmen kami dalam memberikan pelayanan kesehatan terbaik
            </motion.p>
          </div>
        </motion.div>

        {/* Article Meta */}
        <motion.div 
          className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 -mt-8 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-600" />
                <span>Thursday, 22 September 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="w-5 h-5 text-green-600" />
                <span>6,836 views</span>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-purple-600" />
                <span>Rio Bayu Sentosa</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Motto Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <LightBulbIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">MOTTO</h2>
                  <p className="text-gray-600">Semangat pelayanan kami</p>
                </div>
              </div>

              <motion.div 
                className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-gray-800 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  &ldquo;Santun dalam Melayani, Cepat dan Tepat dalam Bertindak&rdquo;
                </motion.p>
              </motion.div>
            </motion.section>

            {/* Visi Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-10 transform -translate-x-20 translate-y-20"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">VISI</h2>
                  <p className="text-gray-600">Cita-cita yang ingin kami capai</p>
                </div>
              </div>

              <motion.div 
                className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Rumah Sakit Terbaik di Provinsi Sumatera Barat
                </motion.p>
              </motion.div>
            </motion.section>

            {/* Misi Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-bl from-green-400 to-emerald-500 rounded-full opacity-10 transform translate-x-18 -translate-y-18"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <CheckBadgeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">MISI</h2>
                  <p className="text-gray-600">Langkah strategis untuk mewujudkan visi</p>
                </div>
              </div>

              <div className="space-y-6">
                {missionItems.map((mission, index) => {
                  const IconComponent = mission.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.2 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${mission.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${mission.color} bg-clip-text text-transparent mb-2`}>
                          {mission.number}
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                          {mission.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Logo Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Logo RSUD M. Natsir</h2>
                  <p className="text-gray-600">Identitas visual rumah sakit</p>
                </div>
              </div>

              <div className="text-center">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white text-6xl font-bold">LOGO</span>
                </motion.div>
                <p className="text-gray-600 text-lg">
                  Logo akan ditampilkan di sini dengan makna dan filosofi yang mendalam
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
