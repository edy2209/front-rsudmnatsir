'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  HeartIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CpuChipIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { routes } from '@/utils/routes';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: facilitiesRef, inView: facilitiesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section');
      let currentSection = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = index;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const services = [
    {
      title: "Pelayanan Gawat Darurat",
      description: "Layanan 24 jam untuk kondisi medis darurat dengan respons cepat dan tim medis berpengalaman",
      icon: HeartIcon,
      color: "from-red-500 to-pink-500",
      delay: 0
    },
    {
      title: "Rawat Inap",
      description: "Fasilitas rawat inap dengan standar pelayanan tinggi dan ruangan yang nyaman",
      icon: BuildingOffice2Icon,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Poliklinik Spesialis",
      description: "Berbagai layanan poliklinik spesialis dengan dokter berpengalaman",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      title: "Laboratorium",
      description: "Pemeriksaan laboratorium lengkap dan akurat dengan teknologi terkini",
      icon: BeakerIcon,
      color: "from-purple-500 to-violet-500",
      delay: 0.3
    },
    {
      title: "Radiologi",
      description: "Pemeriksaan radiologi dengan teknologi modern dan hasil yang presisi",
      icon: CpuChipIcon,
      color: "from-orange-500 to-amber-500",
      delay: 0.4
    },
    {
      title: "Farmasi",
      description: "Pelayanan obat dan konsultasi farmasi dengan apoteker berpengalaman",
      icon: ShieldCheckIcon,
      color: "from-teal-500 to-cyan-500",
      delay: 0.5
    }
  ];

  const facilities = [
    { name: "IGD 24 Jam", icon: "🚨" },
    { name: "Ruang Operasi Modern", icon: "🏥" },
    { name: "ICU & NICU", icon: "💙" },
    { name: "Laboratorium Terintegrasi", icon: "🔬" },
    { name: "Radiologi Digital", icon: "📡" },
    { name: "Farmasi Lengkap", icon: "💊" },
    { name: "Ambulance Siaga", icon: "🚑" },
    { name: "Parkir Luas", icon: "🅿️" }
  ];

  const stats = [
    { number: 50, label: "Dokter Spesialis", suffix: "+" },
    { number: 200, label: "Tenaga Medis", suffix: "+" },
    { number: 150, label: "Tempat Tidur", suffix: "" },
    { number: 24, label: "Layanan Darurat", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Scroll Indicators */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Mouse Scroll Icon */}
      <AnimatePresence>
        {!showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Mouse Icon with Scroll Wheel */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Mouse Body */}
                <div className="w-7 h-12 border-2 border-gray-500 rounded-full bg-white/10 backdrop-blur-sm flex justify-center relative">
                  {/* Scroll Wheel */}
                  <motion.div
                    animate={{
                      y: [2, 10, 2],
                      opacity: [1, 0.3, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1 h-3 bg-gray-600 rounded-full mt-2"
                  />
                </div>
                
                {/* Scroll Down Arrow */}
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                </motion.div>
              </motion.div>
              
              {/* Scroll Text */}
              <motion.p
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-sm text-gray-600 font-medium"
              >
                Scroll untuk lanjut
              </motion.p>
              
              {/* Animated Dots */}
              <div className="flex space-x-1">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col space-y-4">
          {['Hero', 'Services', 'Facilities', 'Contact'].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-blue-600 scale-150'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              title={section}
            >
              {activeSection === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Section Labels */}
        <div className="absolute -left-20 top-0 flex flex-col space-y-4">
          {['Hero', 'Services', 'Facilities', 'Contact'].map((section, index) => (
            <motion.div
              key={section}
              className={`text-right transition-all duration-300 ${
                activeSection === index
                  ? 'text-blue-600 font-semibold opacity-100'
                  : 'text-gray-500 opacity-0'
              }`}
              animate={{
                opacity: activeSection === index ? 1 : 0,
                x: activeSection === index ? 0 : 10
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm">{section}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
              className="text-xl font-bold"
            >
              ↑
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
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-xl z-50 border-b border-white/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <SparklesIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  RSUD M. Natsir
                </h1>
                <p className="text-xs text-gray-600">Rumah Sakit Umum Daerah</p>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: routes.home, label: "Beranda" },
                { href: routes.about, label: "Tentang" },
                { href: routes.services, label: "Layanan" },
                { href: routes.contact, label: "Kontak" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={routes.dashboard} 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <motion.span 
                  className="w-full h-0.5 bg-gray-600 rounded"
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-0.5 bg-gray-600 rounded"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                ></motion.span>
                <motion.span 
                  className="w-full h-0.5 bg-gray-600 rounded"
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                ></motion.span>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-4 space-y-2">
                  {[
                    { href: routes.home, label: "Beranda" },
                    { href: routes.about, label: "Tentang" },
                    { href: routes.services, label: "Layanan" },
                    { href: routes.contact, label: "Kontak" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      href={routes.dashboard}
                      className="block mx-2 mt-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl text-center font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" id="hero-section">
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
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                RSUD M. Natsir
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium">
                Melayani dengan{" "}
                <motion.span 
                  className="text-red-500 inline-block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️ Hati
                </motion.span>
                , Mengobati dengan{" "}
                <span className="text-blue-600 font-semibold">Profesional</span>
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                Rumah Sakit Umum Daerah terdepan dengan pelayanan kesehatan berkualitas, 
                teknologi modern, dan tenaga medis profesional untuk kesehatan Anda dan keluarga.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary CTA - Buat Janji Temu */}
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                <Link 
                  href={routes.appointments}
                  className="relative bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-3xl text-xl font-bold transition-all duration-500 flex items-center gap-4 shadow-2xl border border-gray-100 min-w-[280px] justify-center"
                >
                  {/* Medical Cross Icon */}
                  <motion.div
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      <div className="w-4 h-1 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="w-1 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </motion.div>
                  
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      Buat Janji Temu
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      Konsultasi dengan dokter
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-blue-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
              
              {/* Secondary CTA - Lihat Layanan */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-300 blur"></div>
                <Link 
                  href={routes.services}
                  className="relative bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl flex items-center gap-3 backdrop-blur-sm min-w-[200px] justify-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="w-6 h-6" />
                  </motion.div>
                  <span>Lihat Layanan</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {statsInView ? (
                    <CountUp 
                      end={stat.number} 
                      duration={2.5} 
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 relative" id="services-section">
        <div className="container mx-auto px-4" ref={servicesRef}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Layanan Unggulan
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kami menyediakan berbagai layanan kesehatan terlengkap dengan standar pelayanan internasional 
              dan teknologi medis terdepan untuk memberikan yang terbaik bagi Anda.
            </motion.p>
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
                  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: service.delay }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={`w-3 h-3 bg-gradient-to-br ${service.color} rounded-full`}></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={routes.services}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-xl transition-all duration-300 group"
              >
                <span>Lihat Semua Layanan</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50/50 relative overflow-hidden" id="facilities-section">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4" ref={facilitiesRef}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={facilitiesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Fasilitas Modern
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dilengkapi dengan fasilitas medis terkini dan teknologi canggih untuk mendukung 
              pelayanan kesehatan yang optimal dan berkualitas tinggi.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={facilitiesInView ? "visible" : "hidden"}
          >
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center border border-white/50"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {facility.icon}
                </motion.div>
                <p className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                  {facility.name}
                </p>
                
                {/* Decorative element */}
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "3rem" }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Service</h3>
                <p className="text-gray-600">Layanan darurat tersedia 24 jam setiap hari</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tim Profesional</h3>
                <p className="text-gray-600">Dokter dan tenaga medis berpengalaman</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Standar Tinggi</h3>
                <p className="text-gray-600">Pelayanan berstandar nasional dan internasional</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden" id="contact-section">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
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
            <motion.div
              className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Butuh Bantuan Medis?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tim medis kami siap melayani Anda 24/7 dengan pelayanan terbaik dan penanganan yang cepat
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="tel:+6281234567890" 
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  <span>Hubungi Sekarang</span>
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={routes.contact}
                  className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <EnvelopeIcon className="w-6 h-6" />
                  <span>Info Lengkap</span>
                </Link>
              </motion.div>
            </motion.div>
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
                  { name: "Tentang Kami", href: "#" },
                  { name: "Dokter", href: "#" },
                  { name: "Karir", href: "#" },
                  { name: "Berita", href: "#" }
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
