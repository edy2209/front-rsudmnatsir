import Link from 'next/link';
import { routes } from '@/utils/routes';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <img
                  src="/images/logos/logo1.webp"
                  alt="Logo RSUD M. Natsir"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/logos/logo-rsud-placeholder.svg';
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">RSUD M. Natsir</h3>
                <p className="text-gray-300 text-sm">Rumah Sakit Umum Daerah</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Melayani dengan hati, mengobati dengan profesional. 
              Rumah sakit terdepan dengan pelayanan kesehatan berkualitas.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <span className="text-xs text-white">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <span className="text-xs">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-xs">in</span>
              </a>
            </div>
          </div>

          {/* Layanan Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">Layanan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.appointments} className="text-blue-200 hover:text-white transition-colors">
                  Buat Janji Temu
                </Link>
              </li>
              <li>
                <Link href={routes.layananUnggulan} className="text-blue-200 hover:text-white transition-colors">
                  Layanan Unggulan
                </Link>
              </li>
              <li>
                <Link href={routes.infoPublik} className="text-blue-200 hover:text-white transition-colors">
                  Info Publik
                </Link>
              </li>
              <li>
                <a href="tel:+6281234567890" className="text-blue-200 hover:text-white transition-colors">
                  IGD 24 Jam
                </a>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={routes.tentangKami} className="text-blue-200 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href={routes.visiMisiLogo} className="text-blue-200 hover:text-white transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link href={routes.galeri} className="text-blue-200 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href={routes.sakip} className="text-blue-200 hover:text-white transition-colors">
                  SAKIP
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">Kontak Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-300 mt-1">📍</span>
                <span className="text-blue-200">
                  Jl. Dr. M. Hatta No.58, Padang, Sumatera Barat
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-300">📞</span>
                <a href="tel:+6275112345678" className="text-blue-200 hover:text-white transition-colors">
                  (0751) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-300">✉️</span>
                <a href="mailto:info@rsudmnatsir.com" className="text-blue-200 hover:text-white transition-colors">
                  info@rsudmnatsir.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-300">🕒</span>
                <span className="text-blue-200">24 Jam / 7 Hari</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} RSUD M. Natsir. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-blue-300 text-xs mt-2">
            Melayani dengan ❤️ Hati, Mengobati dengan Profesional
          </p>
        </div>
      </div>
    </footer>
  );
}
