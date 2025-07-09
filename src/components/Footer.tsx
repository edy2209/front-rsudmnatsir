'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  HeartIcon, 
  BuildingOffice2Icon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
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
                { name: "Tentang Kami", href: "/tentang-kami" },
                { name: "Galeri", href: "/galeri" },
                { name: "Info Publik", href: "/info-publik" },
                { name: "PPID", href: "/ppid" }
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
  );
}
