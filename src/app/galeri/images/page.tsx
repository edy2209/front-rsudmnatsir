'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  PhotoIcon, 
  MagnifyingGlassIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  HeartIcon,
  ShareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

// API Base URL untuk gambar
const IMAGE_API_BASE = 'https://picsum.photos/seed';

// Data gambar dummy untuk demo - diperbanyak untuk testing pagination
const imagesData = [
  {
    id: 1,
    title: 'Ruang IGD Modern',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-igd-modern/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-igd-modern/400/300`,
    date: '2023-12-01',
    likes: 45,
    views: 234,
    description: 'Ruang IGD yang telah direnovasi dengan peralatan medis terkini'
  },
  {
    id: 2,
    title: 'Tim Medis Bedah',
    category: 'Tim Medis',
    image: `${IMAGE_API_BASE}/gallery-surgery-team/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-surgery-team/400/300`,
    date: '2023-11-28',
    likes: 62,
    views: 187,
    description: 'Tim bedah terbaik RSUD M Natsir dalam aksi penyelamatan'
  },
  {
    id: 3,
    title: 'Ruang Operasi Steril',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-operating-room/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-operating-room/400/300`,
    date: '2023-11-25',
    likes: 38,
    views: 156,
    description: 'Ruang operasi dengan standar sterilisasi internasional'
  },
  {
    id: 4,
    title: 'Kegiatan Bakti Sosial',
    category: 'Kegiatan',
    image: `${IMAGE_API_BASE}/gallery-social-service/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-social-service/400/300`,
    date: '2023-11-20',
    likes: 89,
    views: 301,
    description: 'Bakti sosial pemeriksaan kesehatan gratis di desa terpencil'
  },
  {
    id: 5,
    title: 'Laboratorium Patologi',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-pathology-lab/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-pathology-lab/400/300`,
    date: '2023-11-15',
    likes: 23,
    views: 98,
    description: 'Laboratorium dengan teknologi diagnostik terdepan'
  },
  {
    id: 6,
    title: 'Pelantikan Direksi Baru',
    category: 'Acara',
    image: `${IMAGE_API_BASE}/gallery-inauguration/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-inauguration/400/300`,
    date: '2023-11-10',
    likes: 134,
    views: 456,
    description: 'Momen bersejarah pelantikan direksi periode 2023-2028'
  },
  {
    id: 7,
    title: 'Ruang Rawat Inap VIP',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-vip-room/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-vip-room/400/300`,
    date: '2023-11-05',
    likes: 56,
    views: 189,
    description: 'Kamar rawat inap VIP dengan fasilitas lengkap dan nyaman'
  },
  {
    id: 8,
    title: 'Senam Sehat Pegawai',
    category: 'Kegiatan',
    image: `${IMAGE_API_BASE}/gallery-staff-exercise/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-staff-exercise/400/300`,
    date: '2023-11-01',
    likes: 72,
    views: 267,
    description: 'Kegiatan rutin senam sehat untuk menjaga kesehatan pegawai'
  },
  {
    id: 9,
    title: 'Unit Hemodialisa',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-hemodialysis/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-hemodialysis/400/300`,
    date: '2023-10-28',
    likes: 41,
    views: 142,
    description: 'Unit hemodialisa dengan mesin cuci darah terbaru'
  },
  {
    id: 10,
    title: 'Ruang Radiologi Digital',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-radiology/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-radiology/400/300`,
    date: '2023-10-20',
    likes: 67,
    views: 203,
    description: 'Ruang radiologi dengan teknologi digital terkini'
  },
  {
    id: 11,
    title: 'Poliklinik Anak',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-pediatric-clinic/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-pediatric-clinic/400/300`,
    date: '2023-10-15',
    likes: 88,
    views: 276,
    description: 'Poliklinik anak dengan desain ramah anak'
  },
  {
    id: 12,
    title: 'Pelatihan Medis Internal',
    category: 'Kegiatan',
    image: `${IMAGE_API_BASE}/gallery-medical-training/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-medical-training/400/300`,
    date: '2023-10-10',
    likes: 54,
    views: 189,
    description: 'Pelatihan berkala untuk meningkatkan kompetensi tim medis'
  },
  {
    id: 13,
    title: 'Apotek 24 Jam',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-pharmacy/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-pharmacy/400/300`,
    date: '2023-10-05',
    likes: 43,
    views: 167,
    description: 'Apotek dengan layanan 24 jam non-stop'
  },
  {
    id: 14,
    title: 'Seminar Kesehatan Masyarakat',
    category: 'Acara',
    image: `${IMAGE_API_BASE}/gallery-health-seminar/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-health-seminar/400/300`,
    date: '2023-10-01',
    likes: 96,
    views: 312,
    description: 'Seminar kesehatan untuk meningkatkan awareness masyarakat'
  },
  {
    id: 15,
    title: 'Ruang Isolasi Khusus',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-isolation-room/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-isolation-room/400/300`,
    date: '2023-09-25',
    likes: 31,
    views: 145,
    description: 'Ruang isolasi dengan sistem ventilasi canggih'
  },
  {
    id: 16,
    title: 'Tim Ambulans Gawat Darurat',
    category: 'Tim Medis',
    image: `${IMAGE_API_BASE}/gallery-ambulance-team/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-ambulance-team/400/300`,
    date: '2023-09-20',
    likes: 78,
    views: 234,
    description: 'Tim ambulans siaga 24 jam untuk emergency'
  },
  {
    id: 17,
    title: 'Kunjungan Menteri Kesehatan',
    category: 'Acara',
    image: `${IMAGE_API_BASE}/gallery-minister-visit/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-minister-visit/400/300`,
    date: '2023-09-15',
    likes: 142,
    views: 487,
    description: 'Kunjungan Menteri Kesehatan ke RSUD M Natsir'
  },
  {
    id: 18,
    title: 'Ruang Fisioterapi',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-physiotherapy/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-physiotherapy/400/300`,
    date: '2023-09-10',
    likes: 52,
    views: 178,
    description: 'Ruang fisioterapi dengan peralatan rehabilitasi lengkap'
  },
  {
    id: 19,
    title: 'Donor Darah Rutin',
    category: 'Kegiatan',
    image: `${IMAGE_API_BASE}/gallery-blood-donation/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-blood-donation/400/300`,
    date: '2023-09-05',
    likes: 103,
    views: 289,
    description: 'Kegiatan donor darah rutin setiap bulan'
  },
  {
    id: 20,
    title: 'Cafeteria Modern',
    category: 'Fasilitas',
    image: `${IMAGE_API_BASE}/gallery-cafeteria/800/600`,
    thumbnail: `${IMAGE_API_BASE}/gallery-cafeteria/400/300`,
    date: '2023-09-01',
    likes: 65,
    views: 201,
    description: 'Cafeteria dengan menu sehat dan bergizi'
  }
];

const categories = ['Semua', 'Fasilitas', 'Tim Medis', 'Kegiatan', 'Acara'];

export default function GaleriImagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredImages = imagesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const toggleLike = (imageId: number) => {
    if (likedImages.includes(imageId)) {
      setLikedImages(likedImages.filter(id => id !== imageId));
    } else {
      setLikedImages([...likedImages, imageId]);
    }
  };

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <PhotoIcon className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Foto
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Dokumentasi visual kegiatan dan fasilitas RSUD M Natsir
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                📸 {imagesData.length} Foto
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                👁️ {imagesData.reduce((total, img) => total + img.views, 0)} Views
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                ❤️ {imagesData.reduce((total, img) => total + img.likes, 0)} Likes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari foto..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Galeri Foto ({filteredImages.length} foto)
          </h2>
          {filteredImages.length > 0 && (
            <p className="text-sm text-gray-600">
              Halaman {currentPage} dari {totalPages}
            </p>
          )}
        </div>

        {/* Grid Layout (bukan masonry lagi, biar rapi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {currentImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative group cursor-pointer" onClick={() => openLightbox(image)}>
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <EyeIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                  {image.category}
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight text-sm sm:text-base">
                  {image.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {image.description}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3">
                  <span className="text-xs">{new Date(image.date).toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}</span>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{image.views}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                    className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    {likedImages.includes(image.id) ? (
                      <HeartSolidIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    ) : (
                      <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm">{image.likes + (likedImages.includes(image.id) ? 1 : 0)}</span>
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                      <ShareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                      <ArrowDownTrayIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <PhotoIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada foto ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
          </div>
        )}

        {/* Pagination */}
        {filteredImages.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Sebelumnya
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === page
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl max-h-full overflow-auto">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>{selectedImage.category}</span>
                  <span>{new Date(selectedImage.date).toLocaleDateString('id-ID')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
