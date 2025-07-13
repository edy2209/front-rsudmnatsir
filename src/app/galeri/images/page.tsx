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

// Data gambar dummy untuk demo
const imagesData = [
  {
    id: 1,
    title: 'Ruang IGD Modern',
    category: 'Fasilitas',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-12-01',
    likes: 45,
    views: 234,
    description: 'Ruang IGD yang telah direnovasi dengan peralatan medis terkini'
  },
  {
    id: 2,
    title: 'Tim Medis Bedah',
    category: 'Tim Medis',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-28',
    likes: 62,
    views: 187,
    description: 'Tim bedah terbaik RSUD M Natsir dalam aksi penyelamatan'
  },
  {
    id: 3,
    title: 'Ruang Operasi Steril',
    category: 'Fasilitas',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-25',
    likes: 38,
    views: 156,
    description: 'Ruang operasi dengan standar sterilisasi internasional'
  },
  {
    id: 4,
    title: 'Kegiatan Bakti Sosial',
    category: 'Kegiatan',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-20',
    likes: 89,
    views: 301,
    description: 'Bakti sosial pemeriksaan kesehatan gratis di desa terpencil'
  },
  {
    id: 5,
    title: 'Laboratorium Patologi',
    category: 'Fasilitas',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-15',
    likes: 23,
    views: 98,
    description: 'Laboratorium dengan teknologi diagnostik terdepan'
  },
  {
    id: 6,
    title: 'Pelantikan Direksi Baru',
    category: 'Acara',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-10',
    likes: 134,
    views: 456,
    description: 'Momen bersejarah pelantikan direksi periode 2023-2028'
  },
  {
    id: 7,
    title: 'Ruang Rawat Inap VIP',
    category: 'Fasilitas',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-05',
    likes: 56,
    views: 189,
    description: 'Kamar rawat inap VIP dengan fasilitas lengkap dan nyaman'
  },
  {
    id: 8,
    title: 'Senam Sehat Pegawai',
    category: 'Kegiatan',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-11-01',
    likes: 72,
    views: 267,
    description: 'Kegiatan rutin senam sehat untuk menjaga kesehatan pegawai'
  },
  {
    id: 9,
    title: 'Unit Hemodialisa',
    category: 'Fasilitas',
    image: '/api/placeholder/400/300',
    thumbnail: '/api/placeholder/300/200',
    date: '2023-10-28',
    likes: 41,
    views: 142,
    description: 'Unit hemodialisa dengan mesin cuci darah terbaru'
  }
];

const categories = ['Semua', 'Fasilitas', 'Tim Medis', 'Kegiatan', 'Acara'];

export default function GaleriImagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const filteredImages = imagesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
        <div className="container mx-auto px-4 py-16">
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari foto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Galeri Foto ({filteredImages.length} foto)
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="break-inside-avoid bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative group cursor-pointer" onClick={() => openLightbox(image)}>
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <EyeIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                  {image.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {image.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {image.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{new Date(image.date).toLocaleDateString('id-ID')}</span>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    {image.views}
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
                      <HeartSolidIcon className="w-4 h-4 text-red-500" />
                    ) : (
                      <HeartIcon className="w-4 h-4" />
                    )}
                    {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                      <ShareIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                      <ArrowDownTrayIcon className="w-4 h-4" />
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

      {/* Statistics Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Dokumentasi Visual</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categories.slice(1).map((category) => {
                const count = imagesData.filter(img => img.category === category).length;
                return (
                  <div key={category} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{count}</div>
                    <div className="text-gray-600">{category}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
