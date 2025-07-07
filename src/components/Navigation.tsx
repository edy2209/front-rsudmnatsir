'use client';

import { useState } from 'react';
import Link from 'next/link';
import { routes } from '@/utils/routes';

interface NavigationProps {
  variant?: 'default' | 'transparent';
  className?: string;
}

export default function Navigation({ variant = 'default', className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const baseClasses = variant === 'transparent' 
    ? 'bg-transparent' 
    : 'bg-white/90 backdrop-blur-lg shadow-lg';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${baseClasses} ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={routes.home} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">RSUD M. Natsir</h1>
              <p className="text-xs text-gray-600">Rumah Sakit Umum Daerah</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={routes.home} className="text-gray-700 hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <Link href={routes.about} className="text-gray-700 hover:text-blue-600 transition-colors">
              Tentang
            </Link>
            <Link href={routes.services} className="text-gray-700 hover:text-blue-600 transition-colors">
              Layanan
            </Link>
            <Link href={routes.contact} className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontak
            </Link>
            <Link 
              href={routes.dashboard} 
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-full h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              href={routes.home} 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href={routes.about} 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link 
              href={routes.services} 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link 
              href={routes.contact} 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link 
              href={routes.dashboard} 
              className="block mx-4 mt-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-center hover:from-blue-700 hover:to-green-700 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
