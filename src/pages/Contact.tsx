'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  HeartIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telepon",
      details: [
        { label: "IGD 24 Jam", value: "(021) 119" },
        { label: "Informasi", value: "(021) 1234-5678" },
        { label: "Pendaftaran", value: "(021) 1234-5679" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: [
        { label: "Info Umum", value: "info@rsudmnatsir.go.id" },
        { label: "Kritik & Saran", value: "cs@rsudmnatsir.go.id" },
        { label: "Kerjasama", value: "partnership@rsudmnatsir.go.id" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPinIcon,
      title: "Alamat",
      details: [
        { label: "Alamat", value: "Jl. Rumah Sakit No. 1" },
        { label: "Kota", value: "Jakarta Selatan" },
        { label: "Kode Pos", value: "12345" }
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: ClockIcon,
      title: "Jam Operasional",
      details: [
        { label: "IGD", value: "24 Jam" },
        { label: "Poliklinik", value: "08:00 - 16:00" },
        { label: "Administrasi", value: "08:00 - 15:00" }
      ],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const quickContacts = [
    {
      title: "Gawat Darurat",
      description: "Untuk kondisi darurat medis",
      icon: HeartIcon,
      contact: "119",
      action: "tel:119",
      color: "from-red-500 to-pink-500",
      urgent: true
    },
    {
      title: "Ambulance",
      description: "Permintaan ambulance",
      icon: TruckIcon,
      contact: "(021) 1234-5680",
      action: "tel:02112345680",
      color: "from-orange-500 to-amber-500",
      urgent: true
    },
    {
      title: "Informasi Umum",
      description: "Info layanan dan pendaftaran",
      icon: ChatBubbleLeftRightIcon,
      contact: "(021) 1234-5678",
      action: "tel:02112345678",
      color: "from-blue-500 to-cyan-500",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto text-center" ref={heroRef}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Siap melayani Anda 24/7. Hubungi kami untuk informasi, konsultasi, atau kondisi darurat medis
          </motion.p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Kontak Cepat
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickContacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div 
                  key={index}
                  className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 ${contact.urgent ? 'border-red-200' : 'border-gray-100'} hover:shadow-2xl transition-all duration-500 group`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {contact.urgent && (
                    <motion.div 
                      className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-6">{contact.description}</p>
                  
                  <motion.a
                    href={contact.action}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${contact.color} text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    {contact.contact}
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30" ref={contactRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Informasi Kontak
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={contactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="text-gray-500 font-medium">{detail.label}</p>
                        <p className="text-gray-700 font-semibold">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white" ref={formRef}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Kirim Pesan
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ada pertanyaan atau saran? Kirimkan pesan kepada kami
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-600">Terima kasih atas pesan Anda. Tim kami akan segera merespons.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Telepon</label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Pilih Subject</option>
                      <option value="informasi">Informasi Umum</option>
                      <option value="keluhan">Keluhan</option>
                      <option value="saran">Saran</option>
                      <option value="kerjasama">Kerjasama</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    Kirim Pesan
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
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
