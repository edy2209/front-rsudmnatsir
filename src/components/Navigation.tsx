'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { routes } from '@/utils/routes';

interface NavigationProps {
  variant?: 'default' | 'transparent';
  className?: string;
}

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  external?: boolean;
}

export default function Navigation({ variant = 'default', className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll effect with scroll detection
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
      setIsScrolling(true);
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set new timeout to detect scroll stop
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Add padding to body to prevent content overlap
  useEffect(() => {
    const updateBodyPadding = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        document.body.style.paddingTop = `${navbarHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      document.body.style.paddingTop = '0px';
    };
  }, [isScrolled]);

  const menuItems: MenuItem[] = [
    {
      label: 'Beranda',
      href: routes.home
    },
    {
      label: 'Fasilitas dan Layanan',
      children: [
        { label: 'Layanan Unggulan', href: routes.layananUnggulan },
        {
          label: 'Rawat Jalan',
          children: [
            { label: 'Klinik Penyakit Dalam', href: routes.klinikPenyakitDalam },
            { label: 'Klinik Bedah', href: routes.klinikBedah },
            { label: 'Klinik Mata', href: routes.klinikMata },
            { label: 'Klinik THT', href: routes.klinikTHT },
            { label: 'Klinik Neurologi', href: routes.klinikNeurologi },
            { label: 'Klinik Kebidanan', href: routes.klinikKebidanan },
            { label: 'Klinik Anak', href: routes.klinikAnak },
            { label: 'Klinik Gizi', href: routes.klinikGizi },
            { label: 'Klinik Jantung', href: routes.klinikJantung },
            { label: 'Klinik Paru', href: routes.klinikParu },
            { label: 'Klinik VCT', href: routes.klinikVCT },
          ]
        },
        {
          label: 'Rawat Inap',
          children: [
            { label: 'Rawat Inap Interne Wanita', href: routes.rawatInapInterneWanita },
            { label: 'Rawat Inap Interne Pria', href: routes.rawatInapInternePria },
            { label: 'Rawat Inap Bedah', href: routes.rawatInapBedah },
            { label: 'Rawat Inap Mata', href: routes.rawatInapMata },
            { label: 'Rawat Inap THT', href: routes.rawatInapTHT },
            { label: 'Rawat Inap Neurologi', href: routes.rawatInapNeurologi },
            { label: 'Rawat Inap Kebidanan', href: routes.rawatInapKebidanan },
            { label: 'Rawat Inap Anak', href: routes.rawatInapAnak },
            { label: 'Rawat Inap Jantung', href: routes.rawatInapJantung },
            { label: 'Rawat Inap Paru', href: routes.rawatInapParu },
          ]
        },
        {
          label: 'Fasilitas Umum',
          children: [
            { label: 'Apotik/Farmasi', href: routes.apotik },
            { label: 'Masjid', href: routes.masjid },
            { label: 'Kantin', href: routes.kantin },
            { label: 'Parkir', href: routes.parkir },
          ]
        },
        {
          label: 'Pelayanan Penunjang',
          children: [
            {
              label: 'Laboratorium',
              children: [
                { label: 'Lab. Patologi Klinik', href: routes.labPatologiKlinik },
                { label: 'Lab. Patologi Anatomik', href: routes.labPatologiAnatomik },
              ]
            },
            { label: 'Radiologi', href: routes.radiologi },
            { label: 'Kamar Operasi', href: routes.kamarOperasi },
            { label: 'Fisiotherapi', href: routes.fisiotherapi },
          ]
        },
        {
          label: 'Alur Pelayanan',
          children: [
            { label: 'Rawat Jalan', href: routes.alurRawatJalan },
            { label: 'Rawat Inap', href: routes.alurRawatInap },
            { label: 'ICU', href: routes.alurICU },
            {
              label: 'Pelayanan Penunjang',
              children: [
                { label: 'Farmasi', href: routes.alurFarmasi },
                { label: 'Laboratorium', href: routes.alurLaboratorium },
                { label: 'PONEK', href: routes.alurPONEK },
                { label: 'Admission', href: routes.alurAdmission },
                { label: 'Bank Darah', href: routes.alurBankDarah },
                { label: 'Radiologi', href: routes.alurRadiologi },
              ]
            },
          ]
        }
      ]
    },
    {
      label: 'Tentang Kami',
      children: [
        { label: 'Visi, Misi dan Logo', href: routes.visiMisiLogo },
        { label: 'Penghargaan dan Prestasi', href: routes.penghargaanPrestasi },
        { label: 'Denah dan Lokasi', href: routes.denahLokasi },
        { label: 'Manajemen', href: routes.manajemen },
        { label: 'Sejarah RSUD M.Natsir', href: routes.sejarah },
        { label: 'Profil', href: routes.profil },
        { label: 'Kerja Sama', href: routes.kerjaSama },
      ]
    },
    {
      label: 'Galeri',
      children: [
        { label: 'Video', href: routes.galeriVideo },
        { label: 'Images', href: routes.galeriImages },
        { label: 'Agenda/Kegiatan', href: routes.agendaKegiatan },
        { label: 'Arsip', href: routes.arsip },
        { label: 'Pengumuman', href: routes.pengumuman },
      ]
    },
    {
      label: 'Info Publik',
      href: routes.infoPublik
    },
    {
      label: 'Sakip',
      href: routes.sakip
    },
    {
      label: 'WBK dan WBBM',
      children: [
        { label: 'Whistleblower System', href: routes.whistleblowerSystem },
        { label: 'Gratifikasi', href: routes.gratifikasi },
        { label: 'Benturan Kepentingan', href: routes.benturanKepentingan },
      ]
    },
    {
      label: 'RS Rujukan',
      href: 'https://sisrute.kemkes.go.id/',
      external: true
    },
    {
      label: 'Lapor SP4N',
      href: 'https://www.lapor.go.id/',
      external: true
    },
    {
      label: 'Informasi Kesehatan',
      children: [
        {
          label: 'Media Promkes',
          children: [
            { label: 'Leaflet', href: routes.leaflet },
            { label: 'Banner', href: routes.banner },
            { label: 'Poster/Spanduk', href: routes.poster },
            { label: 'Buku Saku', href: routes.bukuSaku },
          ]
        },
        { label: 'Inovasi', href: routes.inovasi },
        { label: 'Video Kesehatan', href: routes.videoKesehatan },
      ]
    },
    {
      label: 'PPID',
      children: [
        { label: 'Informasi Berkala', href: routes.informasiBerkala },
        { label: 'Informasi Setiap Saat', href: routes.informasiSetiapSaat },
        { label: 'Informasi Serta Merta', href: routes.informasiSertaMerta },
      ]
    }
  ];

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    
    if (hasChildren) {
      return (
        <div key={item.label} className="relative group">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm py-2">
            <span>{item.label}</span>
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Desktop Dropdown */}
          <div className={`absolute left-0 top-full mt-0 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] ${
            level > 0 ? 'left-full top-0 mt-0 -ml-2' : ''
          }`}>
            <div className="py-2">
              {item.children?.map(child => (
                <div key={child.label} className="relative group/sub">
                  {child.children ? (
                    <>
                      <div className="w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-between cursor-pointer">
                        <span className="text-sm">{child.label}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      {/* Third Level Dropdown */}
                      <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[70] ml-1">
                        <div className="py-2">
                          {child.children?.map(grandChild => (
                            <div key={grandChild.label} className="relative group/third">
                              {grandChild.children ? (
                                <>
                                  <div className="w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-between cursor-pointer">
                                    <span className="text-sm">{grandChild.label}</span>
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  {/* Fourth Level Dropdown */}
                                  <div className="absolute left-full top-0 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover/third:opacity-100 group-hover/third:visible transition-all duration-200 z-[80] ml-1">
                                    <div className="py-2">
                                      {grandChild.children?.map(greatGrandChild => (
                                        <Link
                                          key={greatGrandChild.label}
                                          href={greatGrandChild.href || '#'}
                                          className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                          {...(greatGrandChild.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                          {greatGrandChild.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={grandChild.href || '#'}
                                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                  {...(grandChild.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                  {grandChild.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={child.href || '#'}
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                      {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {child.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href || '#'}
        className="text-gray-700 hover:text-blue-600 transition-colors text-sm py-2"
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {item.label}
      </Link>
    );
  };

  const renderMobileMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdowns.includes(`${item.label}-${level}`);
    
    if (hasChildren) {
      return (
        <div key={`${item.label}-${level}`} className={`${level > 0 ? 'ml-3' : ''}`}>
          <button
            className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 font-medium group"
            onClick={() => toggleDropdown(`${item.label}-${level}`)}
          >
            <span className="text-sm">{item.label}</span>
            <svg 
              className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="ml-2 mt-2 space-y-1 border-l-2 border-blue-100 pl-3">
              {item.children?.map(child => (
                <div key={`${child.label}-${level + 1}`}>
                  {renderMobileMenuItem(child, level + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={`${item.label}-${level}`}
        href={item.href || '#'}
        className={`block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 text-sm border-l-2 border-transparent hover:border-blue-400 ${
          level > 0 ? 'ml-2' : ''
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {item.label}
      </Link>
    );
  };

  const baseClasses = variant === 'transparent' 
    ? 'bg-transparent' 
    : isScrolled 
      ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
      : 'bg-white/90 backdrop-blur-lg shadow-lg';

  // Show navbar when not scrolling or not scrolled
  const showMenu = !isScrolled || !isScrolling;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${baseClasses} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Always visible */}
        <div className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'py-3'} transition-all duration-300 ${isScrolled ? 'border-b border-gray-200/30' : ''}`}>
          <Link href={routes.home} className="flex items-center space-x-3 group">
            {/* Logo - Much bigger and wider, mobile stays consistent */}
            <div className={`${isScrolled ? 'md:w-20 md:h-16 w-28 h-20' : 'w-28 h-20'} transition-all duration-300 group-hover:scale-105 flex-shrink-0`}>
              <img
                src="/images/logos/logo1.webp"
                alt="Logo RSUD M. Natsir"
                className="w-full h-full object-contain drop-shadow-lg"
                onError={(e) => {
                  // Fallback ke placeholder SVG jika PNG tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/logos/logo-rsud-placeholder.svg';
                  target.onerror = () => {
                    // Jika SVG jika gagal, tampilkan fallback HTML
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  };
                }}
              />
              {/* Fallback untuk logo */}
              <div className={`${isScrolled ? 'md:w-20 md:h-16 w-28 h-20' : 'w-28 h-20'} bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 hidden`}>
                <span className={`text-white font-bold ${isScrolled ? 'md:text-2xl text-4xl' : 'text-4xl'} transition-all duration-300`}>R</span>
              </div>
            </div>

            {/* Text Section - Hidden on mobile, smaller text on desktop */}
            <div className="hidden md:flex flex-1 min-w-0 flex-col">
              <h1 className={`${isScrolled ? 'text-xs' : 'text-sm'} font-medium text-green-700 group-hover:text-green-600 transition-all duration-300 leading-tight truncate`}>
                WEBSITE RSUD MOHAMMAD NATSIR
              </h1>
              <div className={`${isScrolled ? 'text-xs' : 'text-xs'} text-green-600 leading-tight transition-all duration-300 truncate`}>
                Alamat : Jl. Simpang Rumbio, Kota Solok | Telp. (0755) 20003
              </div>
            </div>
          </Link>

          {/* Call Center - Desktop only, inline style matching address */}
          <div className="hidden md:flex items-center space-x-1 text-green-600">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.16 10.97a14.032 14.032 0 005.869 5.869l1.585-2.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={`${isScrolled ? 'text-xs' : 'text-xs'} transition-all duration-300`}>
              Call Center : (0755) 20003
            </span>
          </div>
          
          {/* Mobile Menu Button - Consistent size on mobile */}
          <button 
            className={`md:hidden p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-200 ${isScrolled ? 'md:w-8 md:h-8 w-10 h-10' : 'w-10 h-10'} flex items-center justify-center`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`${isScrolled ? 'md:w-5 md:h-5 w-6 h-6' : 'w-6 h-6'} flex flex-col justify-center items-center transition-all duration-300`}>
              <span className={`w-full h-0.5 bg-gray-600 rounded-full mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 rounded-full mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu - Show/Hide based on scroll state */}
        <div className={`hidden md:block transition-all duration-300 ${showMenu ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {menuItems.map(item => renderMenuItem(item))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-4 space-y-2 max-h-96 overflow-y-auto bg-white/95 backdrop-blur-md rounded-xl mt-4 border border-gray-200/50 shadow-xl mx-2">
            <div className="px-2">
              {menuItems.map(item => renderMobileMenuItem(item))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}