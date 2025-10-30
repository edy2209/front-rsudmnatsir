'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  HeartIcon, 
  BuildingOffice2Icon, 
  ClockIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  ScaleIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Custom CSS for animations (inline styles)
const customStyles = `
  /* Professional Font Styles */
  .font-heading {
    font-family: var(--font-playfair);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .font-body {
    font-family: var(--font-poppins);
    font-weight: 400;
  }

  .font-display {
    font-family: var(--font-playfair);
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  h1, h2, h3 {
    font-family: var(--font-playfair);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  body, p, span {
    font-family: var(--font-poppins);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .certificate-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .certificate-card:hover {
    transform: translateY(-4px) scale(1.02);
  }

  /* Custom Scrollbar */
  .scrollbar-thin::-webkit-scrollbar {
    height: 6px;
  }

  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #3b82f6, #1d4ed8);
    border-radius: 10px;
    transition: background 0.3s ease;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #1d4ed8, #1e40af);
  }

  /* Firefox scrollbar */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #f1f5f9;
  }
`;

// Auto Image Slider Component
function AutoImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: "/images/logos/logobaru.jpg",
      alt: "RSUD M. Natsir"
    },
    {
      src: "/images/logos/logobaru2.jpg",
      alt: "RSUD M. Natsir Fasilitas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Berganti setiap 5 detik

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="order-2 lg:order-2 relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0 
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}

// Hero Carousel Component
function HeroCarousel() {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/images/hero-image-1.jpg", // Placeholder - nanti bisa diganti dengan gambar yang sesuai
      alt: "RSUD M. Natsir Fasilitas",
      fallback: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600"
    },
    {
      src: "/images/hero-image-2.jpg", // Placeholder - nanti bisa diganti dengan gambar dokter
      alt: "Tim Dokter RSUD M. Natsir",
      fallback: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Berganti setiap 3 detik

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Fallback gradient background */}
          <div className={`w-full h-full ${images[currentSlide].fallback}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">
                  {currentSlide === 0 ? '🏥' : '👨‍⚕️'}
                </div>
                <h3 className="text-2xl font-bold opacity-90">
                  {images[currentSlide].alt}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Actual image (will show when available) */}
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            onLoad={(e) => {
              const fallbackDiv = e.currentTarget.previousElementSibling as HTMLElement;
              if (fallbackDiv) {
                fallbackDiv.style.display = 'none';
              }
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BerandaPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMarquee, setShowMarquee] = useState(true);
  const [currentCertificate, setCurrentCertificate] = useState(0);
  
  // Certificate data
  const certificateSlides = [
    { name: 'Akreditasi KARS', icon: '🏥', img: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&h=600&fit=crop' },
    { name: 'ISO 9001:2015', icon: '⭐', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop' },
    { name: 'Sertifikat Pelayanan', icon: '🎖️', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop' },
    { name: 'Penghargaan Mutu', icon: '🏆', img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop' },
    { name: 'Dokter Spesialis', icon: '👨‍⚕️', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop' },
    { name: 'Fasilitas Unggulan', icon: '🔬', img: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop' },
    { name: 'Sertifikat Mutu', icon: '📜', img: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=600&fit=crop' },
    { name: 'Penghargaan Nasional', icon: '🥇', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop' },
    { name: 'Sertifikat JCI', icon: '�', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
    { name: 'Akreditasi Laboratorium', icon: '⚗️', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop' },
    { name: 'Sertifikat Halal', icon: '☪️', img: 'https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&h=600&fit=crop' },
    { name: 'Penghargaan Daerah', icon: '🏅', img: 'https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=800&h=600&fit=crop' }
  ];
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: newsRef, inView: newsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Load marquee preference from localStorage
  useEffect(() => {
    const marqueePreference = localStorage.getItem('hideMarquee');
    if (marqueePreference === 'true') {
      setShowMarquee(false);
    }
  }, []);

  // Save marquee preference when user closes it
  const handleCloseMarquee = () => {
    setShowMarquee(false);
    localStorage.setItem('hideMarquee', 'true');
  };

  // Certificate auto-slide effect  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificateSlides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [certificateSlides.length]);

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

  const stats = [
    { number: 50, label: "Dokter Spesialis", suffix: "+" },
    { number: 200, label: "Tenaga Medis", suffix: "+" },
    { number: 150, label: "Tempat Tidur", suffix: "" },
    { number: 24, label: "Layanan Darurat", suffix: "/7" }
  ];

  return (
    <>
      <style jsx>{customStyles}</style>
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

      {/* Navigation Dots - Removed for mobile optimization */}

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
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
      <Navigation variant="default" />

      {/* Marquee Announcement */}
      <AnimatePresence>
        {showMarquee && (
          <motion.div 
            className="marquee-container py-2 md:py-3 relative overflow-hidden"
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SpeakerWaveIcon className="speaker-icon h-4 w-4 md:h-6 md:w-6 text-white" />
            <div className="relative">
              <div className="marquee-content">
                <span className="text-xs md:text-base font-medium text-white">
                  🏥 Selamat Datang di Website RSUD Mohammad Natsir • 📍 Jl. Lintas Sumatra Simpang Rumbio, Kota Solok • 📞 Layanan 24 Jam • ✨ Melayani dengan Hati •
                </span>
              </div>
            </div>
            
            {/* Close Button */}
            <motion.button
              onClick={handleCloseMarquee}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Tutup pengumuman"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        className={`flex items-center px-6 sm:px-8 lg:px-12 xl:px-16 bg-white relative overflow-hidden ${
          showMarquee ? 'min-h-screen' : 'min-h-screen'
        }`}
        id="hero-section"
        animate={{ 
          marginTop: showMarquee ? "0px" : "-3rem" 
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
      {/* Background Color Bulatan (Opsional) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[70vh] lg:min-h-[80vh]"
          animate={{ 
            marginTop: showMarquee ? "0px" : "-2rem" 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          
          {/* Kiri - Judul */}
          <div className="order-1 lg:order-1 mb-4 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-900 mb-4 lg:mb-6 leading-tight">
              Rumah Sakit <br /> Umum Daerah M. Natsir
            </h1>
          </div>

          {/* Kanan - Gambar Slider Auto */}
          <AutoImageSlider />
        </motion.div>
      </div>
    </motion.section>


      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column - Gallery and News */}
            <div className="lg:col-span-8">
              
              {/* Sertifikat Akreditasi Section */}
              <motion.div 
                className="mb-12"
                ref={galleryRef}
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Section Title */}
                <div className="text-center mb-6 sm:mb-8 px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      Sertifikat Akreditasi
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">Rumah Sakit Terakreditasi dengan Standar Nasional</p>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
                  {/* Main Certificate Image Slider */}
                  <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentCertificate}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="relative h-full"
                      >
                        <img
                          src={certificateSlides[currentCertificate]?.img}
                          alt={certificateSlides[currentCertificate]?.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay gradient for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Certificate Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <span className="text-xl sm:text-2xl">{certificateSlides[currentCertificate]?.icon}</span>
                              </div>
                              <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                                  {certificateSlides[currentCertificate]?.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-white/80">
                                  Sertifikat Resmi RSUD M. Natsir
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCurrentCertificate((prev) => (prev - 1 + certificateSlides.length) % certificateSlides.length)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setCurrentCertificate((prev) => (prev + 1) % certificateSlides.length)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Slider Dots Indicator */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="flex space-x-2">
                        {certificateSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentCertificate(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                              index === currentCertificate 
                                ? 'bg-white shadow-lg scale-125' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Gallery Thumbnails */}
                  <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50/50">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">Galeri Sertifikat & Penghargaan</h4>
                    
                    {/* Scrollable Certificate Gallery */}
                    <div className="relative">
                      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 hover:scrollbar-thumb-blue-500 pb-4">
                        {certificateSlides.map((item, index) => (
                          <div 
                            key={index} 
                            onClick={() => setCurrentCertificate(index)}
                            className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                              index === currentCertificate ? 'scale-105 ring-2 ring-blue-500 rounded-lg' : ''
                            }`}
                          >
                            <div className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden border-2 border-white/50">
                              {/* Thumbnail Image */}
                              <img 
                                src={item.img} 
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                              
                              {/* Active Indicator */}
                              {index === currentCertificate && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </motion.div>
                              )}
                            </div>
                            <p className="text-xs text-center mt-2 text-gray-600 font-medium w-32 sm:w-36 md:w-40 break-words leading-tight">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Scroll Indicator */}
                      <div className="flex justify-center mt-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="hidden sm:inline">← Scroll untuk melihat semua sertifikat →</span>
                          <span className="sm:hidden">← Geser untuk melihat lebih →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* News Section */}
              <motion.div
                ref={newsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      Berita Utama
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "ODGJ Terselamatkan Dengan Inovasi Kontes Lato Lato",
                      date: "23 Juli 2024",
                      author: "Deswira Umar",
                      views: "295",
                      excerpt: "RSUD M. Natsir merupakan OPD dibawah Pemerintah Provinsi Sumatera Barat yang melaksanakan urusan wajib bidang kesehatan...",
                      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                    },
                    {
                      title: "Tangkal Hoaks Dengan Inovasi Lego",
                      date: "22 Juli 2024", 
                      author: "Deswira Umar",
                      views: "274",
                      excerpt: "Seiring dengan semakin meningkatnya angka kunjungan pasien di RSUD M Mohammad Natsir pasca pandemi Covid-19...",
                      img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                    },
                    {
                      title: "Inovasi Dalang Tol Itik",
                      date: "22 Juli 2024",
                      author: "Deswira Umar", 
                      views: "234",
                      excerpt: "Dalang Tol Itik merupakan nama inovasi yang digagas oleh Lusi Meyliza, A.md.kl pada tahun 2023...",
                      img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop"
                    },
                    {
                      title: "Ada Selebelt Di RSUD M Natsir",
                      date: "22 Juli 2024",
                      author: "Deswira Umar",
                      views: "248", 
                      excerpt: "Inovasi Selebelt adalah singkatan dari Selasa Belajar, kegiatan Selasa Belajar di RSUD M. Natsir...",
                      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                    }
                  ].map((news, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 relative overflow-hidden">
                        <img 
                          src={news.img}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-colors"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {news.date}
                          </span>
                          <span className="flex items-center">
                            <UserCircleIcon className="w-4 h-4 mr-1" />
                            {news.author}
                          </span>
                          <span>👁️ {news.views}</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {news.excerpt}
                        </p>
                        <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <motion.button
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lihat Semua Berita
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Widgets */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Health Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Artikel Kesehatan</h3>
                <div className="space-y-4">
                  {[
                    "Garam Belum Terbukti Atasi Covid-19",
                    "Hati-Hati Dengan Corona, Hindari Informasi Bagalau", 
                    "Segala Sesuatu Tentang Hernia, Ini Informasinya",
                    "Apakah Anda Sudah Menggunakan Obat dengan Benar?",
                    "CARA MERAWAT LUKA LECET DI RUMAH"
                  ].map((article, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="text-sm font-medium text-gray-800 hover:text-green-600 cursor-pointer transition-colors">
                        {article}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">10 June 2020</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and Agenda Tabs */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="border-b border-gray-200 mb-4">
                  <nav className="flex space-x-6">
                    <button className="py-2 px-1 border-b-2 border-green-600 text-green-600 font-medium text-sm">
                      Tags
                    </button>
                    <button className="py-2 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
                      Agenda
                    </button>
                  </nav>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Arsip", "Kesehatan", "Penyuluhan", "PENGUMUMAN", "Laporan", "Sakip", "KATA DOKTER", "Jadwal", "Berita"].map((tag, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full hover:bg-green-200 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo Album */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Album Foto</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop', title: 'Seminar Kesehatan' },
                    { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop', title: 'Pelayanan Medis' },
                    { img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=400&fit=crop', title: 'Fasilitas Modern' },
                    { img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=400&fit=crop', title: 'Tim Dokter' }
                  ].map((item, index) => (
                    <div key={index} className="aspect-square bg-gradient-to-br from-blue-500 to-green-500 rounded-xl relative group cursor-pointer overflow-hidden">
                      <img 
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-colors"></div>
                      <div className="absolute inset-0 flex items-end p-3">
                        <span className="text-white text-xs font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Informasi
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "PENDAFTARAN ONLINE", icon: CalendarDaysIcon, color: "from-blue-500 to-blue-600" },
              { title: "JADWAL DOKTER", icon: UserCircleIcon, color: "from-green-500 to-green-600" },
              { title: "KETERSEDIAAN BED", icon: BuildingOffice2Icon, color: "from-purple-500 to-purple-600" },
              { title: "KEPUASAN PELANGGAN", icon: HeartIcon, color: "from-pink-500 to-pink-600" },
              { title: "KRITIK DAN SARAN", icon: ChatBubbleLeftIcon, color: "from-yellow-500 to-orange-500" },
              { title: "PENGADUAN", icon: ScaleIcon, color: "from-red-500 to-red-600" },
              { title: "INFORMASI BERKALA", icon: ClockIcon, color: "from-indigo-500 to-indigo-600" },
              { title: "INFORMASI SETIAP SAAT", icon: DocumentTextIcon, color: "from-teal-500 to-teal-600" },
              { title: "INFORMASI SERTA MERTA", icon: ClipboardDocumentCheckIcon, color: "from-cyan-500 to-cyan-600" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50/50" ref={servicesRef}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Layanan Unggulan
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "HEMODIALISA", icon: "💧", description: "Pelayanan cuci darah dengan teknologi modern" },
              { title: "FARMASI", icon: "💊", description: "Pelayanan obat dan konsultasi farmasi" },
              { title: "LABORATORIUM", icon: "🔬", description: "Pemeriksaan laboratorium lengkap dan akurat" },
              { title: "FISIOTERAPI", icon: "🏃‍♂️", description: "Terapi rehabilitasi medik profesional" },
              { title: "RADIOLOGI", icon: "📡", description: "Pemeriksaan radiologi dengan teknologi digital" },
              { title: "DAN LAINNYA", icon: "➕", description: "Berbagai layanan medis lainnya" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center cursor-pointer border border-white/50"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "4rem" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}