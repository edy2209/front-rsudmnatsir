'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  HeartIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  BeakerIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  SparklesIcon,
  CheckCircleIcon,
  TruckIcon,
  BoltIcon,
  ChevronDownIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: doctorsRef, inView: doctorsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 20);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-3xl shadow-2xl border-white/30' 
            : 'bg-white/70 backdrop-blur-2xl shadow-lg border-white/20'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backdropFilter: scrolled ? 'blur(30px) saturate(200%) brightness(1.1)' : 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(200%) brightness(1.1)' : 'blur(20px) saturate(150%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: scrolled ? [1, 1.1, 1] : [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: scrolled ? 2 : 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <SparklesIcon className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
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
                </motion.h1>
                <motion.div 
                  className="text-xs text-gray-600"
                  animate={{ opacity: scrolled ? [1, 0.7, 1] : [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Dashboard Rumah Sakit
                </motion.div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { href: "#home", label: "Beranda" },
                { href: "#services", label: "Layanan" },
                { href: "#doctors", label: "Dokter" },
                { href: "#about", label: "Tentang" },
                { href: "#contact", label: "Kontak" }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group px-2 py-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.a>
              ))}
            </div>
            
            <motion.button 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Scroll Indicator - Mouse Icon */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: scrolled ? 1 : 0.7, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Progress Circle */}
        <motion.div 
          className="relative w-16 h-16 progress-circle"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-gray-200"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300 ease-out"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="66%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Mouse Icon */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full relative bg-white/90 backdrop-blur-sm shadow-lg">
              <motion.div 
                className="w-1 h-2 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 mouse-scroll"
                animate={{ 
                  y: [0, 4, 0],
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              {/* Mouse wheel indicator */}
              <motion.div 
                className="absolute inset-x-0 bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-1"
                animate={{ 
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>

          {/* Progress Percentage */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-bold text-gray-700 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              {Math.round(scrollProgress)}
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Text with Animation */}
        <motion.div 
          className="flex flex-col items-center space-y-1"
          animate={{ opacity: scrolled ? 0.6 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="text-xs font-bold text-gray-500 transform rotate-90 tracking-widest"
            animate={{ 
              y: [0, -2, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            SCROLL
          </motion.div>
          <motion.div 
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex flex-col space-y-3">
          {[
            { section: 'home', label: 'Beranda', color: 'from-blue-500 to-cyan-500' },
            { section: 'services', label: 'Layanan', color: 'from-green-500 to-emerald-500' },
            { section: 'stats', label: 'Statistik', color: 'from-purple-500 to-violet-500' },
            { section: 'about', label: 'Tentang', color: 'from-orange-500 to-amber-500' },
            { section: 'doctors', label: 'Dokter', color: 'from-pink-500 to-rose-500' },
            { section: 'contact', label: 'Kontak', color: 'from-teal-500 to-cyan-500' }
          ].map((item, index) => {
            const isActive = 
              (item.section === 'home' && scrollProgress < 16) ||
              (item.section === 'services' && scrollProgress >= 16 && scrollProgress < 32) ||
              (item.section === 'stats' && scrollProgress >= 32 && scrollProgress < 48) ||
              (item.section === 'about' && scrollProgress >= 48 && scrollProgress < 64) ||
              (item.section === 'doctors' && scrollProgress >= 64 && scrollProgress < 80) ||
              (item.section === 'contact' && scrollProgress >= 80);
            
            return (
              <motion.button
                key={item.section}
                className={`group relative w-3 h-3 rounded-full transition-all duration-300 scroll-dot ${
                  isActive 
                    ? `bg-gradient-to-r ${item.color} shadow-lg` 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const element = document.getElementById(item.section);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                initial={{ opacity: 0, x: 20, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: isActive ? 1.2 : 1 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {/* Active Indicator Ring */}
                {isActive && (
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-30`}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                )}
                
                {/* Tooltip */}
                <motion.div 
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-gray-700"
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, x: 0, scale: 1 }}
                >
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-b border-gray-700"></div>
                  
                  {/* Tooltip Glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-20 blur-sm -z-10`}></div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed right-8 bottom-8 w-14 h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 flex items-center justify-center group overflow-hidden"
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 20 ? 1 : 0,
          y: scrollProgress > 20 ? 0 : 100,
          scale: scrollProgress > 20 ? 1 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ 
            y: [0, -2, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <ArrowUpIcon className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
        </motion.div>
        
        {/* Background Gradient Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.button>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden" ref={heroRef}>
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                Pelayanan Kesehatan 
                <motion.span 
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Terpercaya
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl mb-8 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                RSUD M. Natsir memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern 
                dan tenaga medis profesional untuk kesehatan keluarga Anda.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5" />
                    Daftar Sekarang
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button 
                  className="border-2 border-red-500 text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HeartIcon className="w-5 h-5" />
                  Layanan Darurat
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="w-full h-96 bg-gradient-to-br from-white/80 to-blue-100/80 rounded-3xl backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/50"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <HeartIcon className="w-16 h-16 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    24/7 Siap Melayani
                  </motion.h3>
                  <p className="text-gray-600">Pelayanan kesehatan terbaik setiap saat</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 relative" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Layanan Unggulan Kami
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Berbagai layanan kesehatan terlengkap dengan standar medis internasional 
              untuk memberikan perawatan terbaik bagi pasien
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* IGD */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <HeartIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Instalasi Gawat Darurat</h3>
              <p className="text-gray-600 mb-6 relative z-10">Pelayanan 24 jam untuk kasus darurat dengan tim medis yang siap siaga</p>
              <div className="flex items-center text-red-600 font-semibold relative z-10">
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  24/7 Tersedia
                </motion.span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Rawat Inap */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BuildingOffice2Icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Rawat Inap</h3>
              <p className="text-gray-600 mb-6 relative z-10">Fasilitas rawat inap dengan kamar yang nyaman dan perawatan medis terbaik</p>
              <div className="flex items-center text-blue-600 font-semibold relative z-10">
                <span>120 Tempat Tidur</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Poliklinik */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <UserGroupIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Poliklinik Spesialis</h3>
              <p className="text-gray-600 mb-6 relative z-10">Berbagai poliklinik spesialis dengan dokter berpengalaman</p>
              <div className="flex items-center text-green-600 font-semibold relative z-10">
                <span>15 Spesialisasi</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Laboratorium */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BeakerIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Laboratorium</h3>
              <p className="text-gray-600 mb-6 relative z-10">Pemeriksaan laboratorium lengkap dengan teknologi terdepan</p>
              <div className="flex items-center text-purple-600 font-semibold relative z-10">
                <span>Hasil Cepat & Akurat</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Radiologi */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CpuChipIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Radiologi</h3>
              <p className="text-gray-600 mb-6 relative z-10">Pemeriksaan radiologi dengan peralatan CT Scan, MRI, dan USG terbaru</p>
              <div className="flex items-center text-orange-600 font-semibold relative z-10">
                <span>Teknologi Modern</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            {/* Farmasi */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Farmasi</h3>
              <p className="text-gray-600 mb-6 relative z-10">Apotek rumah sakit dengan stok obat lengkap dan konsultasi farmasis</p>
              <div className="flex items-center text-teal-600 font-semibold relative z-10">
                <span>Obat Tersedia 24/7</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden" ref={statsRef}>
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Statistik Rumah Sakit
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kepercayaan masyarakat adalah motivasi kami untuk terus memberikan yang terbaik
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="group text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                35+
              </motion.div>
              <div className="text-blue-100 font-semibold text-lg">Dokter Spesialis</div>
              <p className="text-blue-200 text-sm mt-2">Tim medis berpengalaman</p>
            </motion.div>

            <motion.div 
              className="group text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                120
              </motion.div>
              <div className="text-blue-100 font-semibold text-lg">Tempat Tidur</div>
              <p className="text-blue-200 text-sm mt-2">Fasilitas rawat inap nyaman</p>
            </motion.div>

            <motion.div 
              className="group text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                24/7
              </motion.div>
              <div className="text-blue-100 font-semibold text-lg">Layanan Darurat</div>
              <p className="text-blue-200 text-sm mt-2">Siap melayani setiap saat</p>
            </motion.div>

            <motion.div 
              className="group text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                15+
              </motion.div>
              <div className="text-blue-100 font-semibold text-lg">Tahun Pengalaman</div>
              <p className="text-blue-200 text-sm mt-2">Terpercaya oleh masyarakat</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative" ref={aboutRef}>
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Tentang RSUD M. Natsir
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                RSUD M. Natsir adalah rumah sakit umum daerah yang telah melayani masyarakat selama lebih dari 15 tahun. 
                Kami berkomitmen memberikan pelayanan kesehatan berkualitas tinggi dengan mengutamakan keselamatan 
                dan kepuasan pasien melalui teknologi medis terdepan dan tenaga profesional yang berpengalaman.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { icon: CheckCircleIcon, text: "Akreditasi KARS (Komisi Akreditasi Rumah Sakit)", color: "from-green-500 to-emerald-500" },
                  { icon: ShieldCheckIcon, text: "Sertifikat ISO 9001:2015", color: "from-blue-500 to-cyan-500" },
                  { icon: HeartIcon, text: "Kerjasama dengan BPJS Kesehatan", color: "from-purple-500 to-pink-500" },
                  { icon: SparklesIcon, text: "Teknologi Medis Terkini", color: "from-orange-500 to-yellow-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="w-full h-96 bg-gradient-to-br from-white/80 to-blue-100/80 rounded-3xl backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/50 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
                <motion.div 
                  className="absolute top-4 right-4 w-20 h-20 bg-blue-300/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-16 h-16 bg-green-300/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <div className="text-center relative z-10">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <ShieldCheckIcon className="w-16 h-16 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={aboutInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    Standar Internasional
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 font-medium"
                    initial={{ opacity: 0 }}
                    animate={aboutInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 }}
                  >
                    Pelayanan berkualitas dengan standar medis terbaik
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative" ref={doctorsRef}>
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={doctorsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Tim Dokter Terbaik
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Didukung oleh tim dokter spesialis berpengalaman dan bersertifikat yang siap memberikan pelayanan terbaik
              dengan teknologi medis terdepan dan pendekatan holistik.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={doctorsInView ? "visible" : "hidden"}
          >
            {[
              { 
                initial: "DS", 
                name: "Dr. Sarah Ahmad, Sp.JP", 
                specialty: "Spesialis Jantung dan Pembuluh Darah", 
                experience: "Pengalaman 12 tahun dalam bidang kardiologi dengan sertifikasi internasional",
                gradient: "from-blue-400 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              { 
                initial: "RH", 
                name: "Dr. Rahman Hakim, Sp.B", 
                specialty: "Spesialis Bedah Umum", 
                experience: "Ahli bedah dengan keahlian khusus dalam bedah laparoskopi dan trauma",
                gradient: "from-green-400 to-green-600",
                bgGradient: "from-green-50 to-green-100"
              },
              { 
                initial: "LP", 
                name: "Dr. Lisa Permata, Sp.A", 
                specialty: "Spesialis Anak", 
                experience: "Dokter spesialis anak dengan fokus pada tumbuh kembang dan imunisasi",
                gradient: "from-purple-400 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              }
            ].map((doctor, index) => (
              <motion.div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/50 relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div 
                  className={`h-64 bg-gradient-to-br ${doctor.gradient} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  <motion.div 
                    className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.span 
                      className={`text-3xl font-bold bg-gradient-to-br ${doctor.gradient} bg-clip-text text-transparent`}
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {doctor.initial}
                    </motion.span>
                  </motion.div>
                </motion.div>
                
                <div className="p-8 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {doctor.name}
                  </motion.h3>
                  <motion.p 
                    className={`bg-gradient-to-r ${doctor.gradient} bg-clip-text text-transparent font-semibold mb-4`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {doctor.specialty}
                  </motion.p>
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    {doctor.experience}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-6 flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={doctorsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    <motion.div 
                      className={`w-4 h-4 bg-gradient-to-r ${doctor.gradient} rounded-full`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="text-gray-500 text-sm font-medium">Tersedia untuk konsultasi</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50 to-green-50 relative" ref={contactRef}>
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={contactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kami siap melayani Anda 24 jam setiap hari. Jangan ragu untuk menghubungi kami kapan saja.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            {/* Phone */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <PhoneIcon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Telepon</h3>
              <p className="text-gray-600 mb-6 relative z-10">Hubungi kami untuk informasi dan pendaftaran</p>
              
              <div className="space-y-2 relative z-10">
                <motion.div 
                  className="text-blue-600 font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  (021) 555-0123
                </motion.div>
                <motion.div 
                  className="text-red-600 font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <HeartIcon className="w-4 h-4" />
                  </motion.div>
                  IGD: (021) 555-0911
                </motion.div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPinIcon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Alamat</h3>
              <p className="text-gray-600 mb-6 relative z-10">Kunjungi rumah sakit kami</p>
              
              <div className="space-y-2 relative z-10">
                <motion.div 
                  className="text-green-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Jl. Kesehatan No. 123
                </motion.div>
                <motion.div 
                  className="text-green-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Jakarta Selatan 12345
                </motion.div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ClockIcon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Jam Operasional</h3>
              <p className="text-gray-600 mb-6 relative z-10">Jadwal pelayanan rumah sakit</p>
              
              <div className="space-y-2 relative z-10">
                <motion.div 
                  className="text-purple-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Senin - Jumat: 07:00 - 20:00
                </motion.div>
                <motion.div 
                  className="text-purple-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Weekend: 08:00 - 16:00
                </motion.div>
                <motion.div 
                  className="text-red-600 font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <SparklesIcon className="w-4 h-4" />
                  </motion.div>
                  IGD: 24 Jam
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Contact Actions */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  Hubungi Sekarang
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-xl flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="w-5 h-5" />
                Kirim Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <motion.div 
                className="flex items-center space-x-4 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <SparklesIcon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    RSUD M. Natsir
                  </h3>
                  <p className="text-gray-300">Rumah Sakit Umum Daerah</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Memberikan pelayanan kesehatan terbaik dengan teknologi modern dan tenaga medis profesional 
                untuk kesehatan masyarakat yang lebih baik. Komitmen kami adalah keselamatan dan kepuasan pasien.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { name: "Facebook", color: "from-blue-600 to-blue-700", icon: "f" },
                  { name: "Twitter", color: "from-blue-400 to-blue-500", icon: "t" },
                  { name: "Instagram", color: "from-pink-600 to-purple-600", icon: "i" },
                  { name: "YouTube", color: "from-red-600 to-red-700", icon: "y" }
                ].map((social, index) => (
                  <motion.div 
                    key={social.name}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-bold group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <HeartIcon className="w-5 h-5 text-blue-400" />
                Layanan Utama
              </h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Instalasi Gawat Darurat",
                  "Rawat Inap",
                  "Poliklinik Spesialis",
                  "Laboratorium",
                  "Radiologi",
                  "Farmasi 24 Jam"
                ].map((service, index) => (
                  <motion.li 
                    key={service}
                    className="hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-2 transition-transform duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="hover:underline">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-green-400" />
                Kontak Darurat
              </h4>
              <ul className="space-y-3 text-gray-300">
                <motion.li 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  (021) 555-0123
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 hover:text-red-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  IGD: (021) 555-0911
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  info@rsudmnatsir.com
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2 hover:text-purple-400 transition-colors leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mt-1.5"></div>
                  <span>
                    Jl. Kesehatan No. 123<br />
                    Jakarta Selatan 12345
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          {/* Divider */}
          <motion.div 
            className="border-t border-gray-700/50 pt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                © 2025 RSUD M. Natsir. Semua hak cipta dilindungi. Melayani dengan sepenuh hati.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-6 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#" 
                  className="hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Kebijakan Privasi
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Syarat & Ketentuan
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Karir
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
