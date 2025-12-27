'use client';

import Link from 'next/link';
import { routes } from '@/utils/routes';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .footer-heading {
          font-family: var(--font-playfair);
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        
        .footer-text {
          font-family: var(--font-poppins);
          font-weight: 400;
        }

        .footer-brand {
          font-family: var(--font-playfair);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
      `}</style>
      
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Info */}
          <div className="lg:col-span-1 border-b md:border-b-0 md:border-r border-gray-600 pb-8 md:pb-0 md:pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <img
                  src="/images/logos/logo1.webp"
                  alt="Logo RSUD M. Natsir"
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/logos/logo-rsud-placeholder.svg';
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white footer-brand">RSUD M. Natsir</h3>
                <p className="text-gray-300 text-sm footer-text">Rumah Sakit Umum Daerah</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 footer-text">
              Melayani dengan hati, mengobati dengan profesional. 
              Rumah sakit terdepan dengan pelayanan kesehatan berkualitas.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group">
                <span className="text-xs text-gray-800 group-hover:text-blue-600 font-semibold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group">
                <span className="text-xs text-gray-800 group-hover:text-pink-600 font-semibold">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group">
                <span className="text-xs text-gray-800 group-hover:text-blue-700 font-semibold">in</span>
              </a>
            </div>
          </div>

          {/* Layanan Cepat */}
          <div className="border-b md:border-b-0 lg:border-r border-gray-600 pb-8 md:pb-0 lg:pr-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-200 footer-heading">Layanan Cepat</h4>
            <ul className="space-y-2 text-sm footer-text">
              <li>
                <Link href={routes.appointments} className="text-gray-300 hover:text-green-400 transition-colors">
                  Buat Janji Temu
                </Link>
              </li>
              <li>
                <Link href={routes.layananUnggulan} className="text-gray-300 hover:text-green-400 transition-colors">
                  Layanan Unggulan
                </Link>
              </li>
              <li>
                <Link href={routes.infoPublik} className="text-gray-300 hover:text-green-400 transition-colors">
                  Info Publik
                </Link>
              </li>
              <li>
                <a href="tel:+6281234567890" className="text-gray-300 hover:text-green-400 transition-colors">
                  IGD 24 Jam
                </a>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div className="border-b md:border-b-0 lg:border-r border-gray-600 pb-8 md:pb-0 lg:pr-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-200 footer-heading">Informasi</h4>
            <ul className="space-y-2 text-sm footer-text">
              <li>
                <Link href={routes.tentangKami} className="text-gray-300 hover:text-green-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href={routes.visiMisiLogo} className="text-gray-300 hover:text-green-400 transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link href={routes.galeri} className="text-gray-300 hover:text-green-400 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href={routes.sakip} className="text-gray-300 hover:text-green-400 transition-colors">
                  SAKIP
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 footer-heading">Kontak Kami</h4>
            <ul className="space-y-3 text-sm footer-text">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 leading-relaxed">
                  Jl. Dr. M. Hatta No.58, Padang, Sumatera Barat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:+6275112345678" className="text-gray-300 hover:text-green-400 transition-colors">
                  (0751) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:info@rsudmnatsir.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@rsudmnatsir.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">24 Jam / 7 Hari</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm footer-text">
            © {new Date().getFullYear()} RSUD M. Natsir. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
