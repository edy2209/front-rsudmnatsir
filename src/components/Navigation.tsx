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
      if (typeof window !== 'undefined') {
        const navbar = document.querySelector('nav');
        if (navbar) {
          const navbarHeight = navbar.offsetHeight;
          document.body.style.paddingTop = `${navbarHeight}px`;
        }
      }
    };

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      if (typeof window !== 'undefined') {
        document.body.style.paddingTop = '0px';
      }
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
        { label: 'Layanan Unggulan', href: '#' },
        {
          label: 'Rawat Jalan',
          children: [
            { label: 'Klinik Penyakit Dalam', href: '#' },
            { label: 'Klinik Bedah', href: '#' },
            { label: 'Klinik Mata', href: '#' },
            { label: 'Klinik THT', href: '#' },
            { label: 'Klinik Neurologi', href: '#' },
            { label: 'Klinik Kebidanan', href: '#' },
            { label: 'Klinik Anak', href: '#' },
            { label: 'Klinik Gizi', href: '#' },
            { label: 'Klinik Jantung', href: '#' },
            { label: 'Klinik Paru', href: '#' },
            { label: 'Klinik VCT', href: '#' },
          ]
        },
        {
          label: 'Rawat Inap',
          children: [
            { label: 'Rawat Inap Interne Wanita', href: '#' },
            { label: 'Rawat Inap Interne Pria', href: '#' },
            { label: 'Rawat Inap Bedah', href: '#' },
            { label: 'Rawat Inap Mata', href: '#' },
            { label: 'Rawat Inap THT', href: '#' },
            { label: 'Rawat Inap Neurologi', href: '#' },
            { label: 'Rawat Inap Kebidanan', href: '#' },
            { label: 'Rawat Inap Anak', href: '#' },
            { label: 'Rawat Inap Jantung', href: '#' },
            { label: 'Rawat Inap Paru', href: '#' },
          ]
        },
        {
          label: 'Fasilitas Umum',
          children: [
            { label: 'Apotik/Farmasi', href: '#' },
            { label: 'Masjid', href: '#' },
            { label: 'Kantin', href: '#' },
            { label: 'Parkir', href: '#' },
          ]
        },
        {
          label: 'Pelayanan Penunjang',
          children: [
            {
              label: 'Laboratorium',
              children: [
                { label: 'Lab. Patologi Klinik', href: '#' },
                { label: 'Lab. Patologi Anatomik', href: '#' },
              ]
            },
            { label: 'Radiologi', href: '#' },
            { label: 'Kamar Operasi', href: '#' },
            { label: 'Fisiotherapi', href: '#' },
          ]
        },
        {
          label: 'Alur Pelayanan',
          children: [
            { label: 'Rawat Jalan', href: '#' },
            { label: 'Rawat Inap', href: '#' },
            { label: 'ICU', href: '#' },
            {
              label: 'Pelayanan Penunjang',
              children: [
                { label: 'Farmasi', href: '#' },
                { label: 'Laboratorium', href: '#' },
                { label: 'PONEK', href: '#' },
                { label: 'Admission', href: '#' },
                { label: 'Bank Darah', href: '#' },
                { label: 'Radiologi', href: '#' },
              ]
            },
          ]
        }
      ]
    },
    {
      label: 'Tentang Kami',
      children: [
        { label: 'Visi, Misi dan Logo', href: '#' },
        { label: 'Penghargaan dan Prestasi', href: '#' },
        { label: 'Denah dan Lokasi', href: '#' },
        { label: 'Manajemen', href: '#' },
        { label: 'Sejarah RSUD M.Natsir', href: '#' },
        { label: 'Profil', href: '#' },
        { label: 'Kerja Sama', href: '#' },
      ]
    },
    {
      label: 'Galeri',
      children: [
        { label: 'Video', href: '#' },
        { label: 'Images', href: '#' },
        { label: 'Agenda/Kegiatan', href: '#' },
        { label: 'Arsip', href: '#' },
        { label: 'Pengumuman', href: '#' },
      ]
    },
    {
      label: 'Info Publik',
      href: '#'
    },
    {
      label: 'Sakip',
      href: '#'
    },
    {
      label: 'WBK dan WBBM',
      children: [
        { label: 'Whistleblower System', href: '#' },
        { label: 'Gratifikasi', href: '#' },
        { label: 'Benturan Kepentingan', href: '#' },
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
            { label: 'Leaflet', href: '#' },
            { label: 'Banner', href: '#' },
            { label: 'Poster/Spanduk', href: '#' },
            { label: 'Buku Saku', href: '#' },
          ]
        },
        { label: 'Inovasi', href: '#' },
        { label: 'Video Kesehatan', href: '#' },
      ]
    },
    {
      label: 'PPID',
      children: [
        { label: 'Informasi Berkala', href: '#' },
        { label: 'Informasi Setiap Saat', href: '#' },
        { label: 'Informasi Serta Merta', href: '#' },
      ]
    }
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
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
          <div className={`absolute left-0 top-full mt-0 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${
            level > 0 ? 'left-full top-0 mt-0 -ml-2' : ''
          }`}>
            <div className="py-2">
              {item.children?.map(child => (
                <div key={child.label} className="relative group/sub">
                  {child.children ? (
                    <>
                      <button className="w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                        <span className="text-sm">{child.label}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 ml-1">
                        <div className="py-2">
                          {child.children?.map(grandChild => (
                            <Link
                              key={grandChild.label}
                              href={grandChild.href || '#'}
                              className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                            >
                              {grandChild.label}
                            </Link>
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
    const isOpen = openDropdowns.includes(item.label);
    
    if (hasChildren) {
      return (
        <div key={item.label} className={`${level > 0 ? 'ml-3' : ''}`}>
          <button
            className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 font-medium group"
            onClick={() => toggleDropdown(item.label)}
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
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="ml-2 mt-2 space-y-1 border-l-2 border-blue-100 pl-3">
              {item.children?.map(child => (
                <div key={child.label}>
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
        key={item.label}
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
        <div className={`flex items-center justify-between py-4 transition-all duration-300 ${isScrolled ? 'border-b border-gray-200/30' : ''}`}>
          <Link href={routes.home} className="flex items-center space-x-4 group">
            <div className={`${isScrolled ? 'w-12 h-12' : 'w-14 h-14'} bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
              <span className={`text-white font-bold ${isScrolled ? 'text-xl' : 'text-2xl'} transition-all duration-300`}>R</span>
            </div>
            <div>
              <h1 className={`${isScrolled ? 'text-xl' : 'text-2xl'} font-bold text-gray-800 group-hover:text-blue-600 transition-all duration-300`}>RSUD M. Natsir</h1>
              <p className={`${isScrolled ? 'text-xs' : 'text-sm'} text-gray-600 leading-tight transition-all duration-300`}>Rumah Sakit Umum Daerah</p>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-full h-0.5 bg-gray-600 rounded-full mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 rounded-full mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu - Show/Hide based on scroll state */}
        <div className={`hidden lg:block transition-all duration-300 ${showMenu ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {menuItems.map(item => renderMenuItem(item))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
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
228261661421