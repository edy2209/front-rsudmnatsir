'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

export default function VideoKesehatanPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videos = [
    {
      id: 1,
      title: 'Cara Mencuci Tangan yang Benar',
      category: 'pencegahan',
      duration: '3:45',
      views: '15.2K',
      description: 'Panduan lengkap mencuci tangan dengan 6 langkah WHO untuk mencegah penyebaran penyakit',
      thumbnail: '/images/video-thumbnail1.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Cuci Tangan', 'Pencegahan', 'WHO', 'Kebersihan'],
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Penanganan Pertama Demam pada Anak',
      category: 'perawatan',
      duration: '5:20',
      views: '23.1K',
      description: 'Tips dan cara menangani demam pada anak di rumah sebelum membawa ke dokter',
      thumbnail: '/images/video-thumbnail2.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Demam', 'Anak', 'Pertolongan Pertama', 'Parenting'],
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Senam Jantung Sehat untuk Lansia',
      category: 'olahraga',
      duration: '12:30',
      views: '8.7K',
      description: 'Gerakan senam ringan yang aman dan bermanfaat untuk kesehatan jantung lansia',
      thumbnail: '/images/video-thumbnail3.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Senam', 'Jantung', 'Lansia', 'Olahraga'],
      date: '2024-01-25'
    },
    {
      id: 4,
      title: 'Menu Makanan Sehat untuk Penderita Diabetes',
      category: 'nutrisi',
      duration: '8:15',
      views: '19.4K',
      description: 'Panduan memilih dan menyiapkan makanan yang tepat untuk mengontrol gula darah',
      thumbnail: '/images/video-thumbnail4.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Diabetes', 'Makanan Sehat', 'Nutrisi', 'Diet'],
      date: '2024-02-01'
    },
    {
      id: 5,
      title: 'Teknik Pernafasan untuk Mengatasi Stress',
      category: 'mental',
      duration: '6:40',
      views: '12.8K',
      description: 'Metode pernafasan sederhana yang dapat membantu mengurangi stress dan kecemasan',
      thumbnail: '/images/video-thumbnail5.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Stress', 'Pernafasan', 'Mental Health', 'Relaksasi'],
      date: '2024-02-05'
    },
    {
      id: 6,
      title: 'Cara Mengukur Tekanan Darah di Rumah',
      category: 'pemeriksaan',
      duration: '4:55',
      views: '31.2K',
      description: 'Tutorial menggunakan tensimeter digital untuk memantau tekanan darah secara mandiri',
      thumbnail: '/images/video-thumbnail6.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Tekanan Darah', 'Tensimeter', 'Pemeriksaan', 'Mandiri'],
      date: '2024-02-10'
    },
    {
      id: 7,
      title: 'Pentingnya Vaksinasi untuk Dewasa',
      category: 'pencegahan',
      duration: '7:25',
      views: '9.6K',
      description: 'Informasi lengkap tentang vaksin yang diperlukan orang dewasa dan manfaatnya',
      thumbnail: '/images/video-thumbnail7.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Vaksinasi', 'Dewasa', 'Imunisasi', 'Pencegahan'],
      date: '2024-02-15'
    },
    {
      id: 8,
      title: 'Yoga untuk Ibu Hamil Trimester Pertama',
      category: 'olahraga',
      duration: '15:10',
      views: '14.3K',
      description: 'Gerakan yoga yang aman dan bermanfaat untuk ibu hamil di trimester pertama',
      thumbnail: '/images/video-thumbnail8.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Yoga', 'Ibu Hamil', 'Trimester 1', 'Prenatal'],
      date: '2024-02-20'
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Video', icon: '🎬', color: 'bg-gray-100 text-gray-700' },
    { value: 'pencegahan', label: 'Pencegahan', icon: '🛡️', color: 'bg-green-100 text-green-700' },
    { value: 'perawatan', label: 'Perawatan', icon: '🩺', color: 'bg-blue-100 text-blue-700' },
    { value: 'olahraga', label: 'Olahraga & Kebugaran', icon: '🏃‍♂️', color: 'bg-orange-100 text-orange-700' },
    { value: 'nutrisi', label: 'Nutrisi & Diet', icon: '🥗', color: 'bg-green-100 text-green-700' },
    { value: 'mental', label: 'Kesehatan Mental', icon: '🧠', color: 'bg-purple-100 text-purple-700' },
    { value: 'pemeriksaan', label: 'Pemeriksaan Mandiri', icon: '🔍', color: 'bg-red-100 text-red-700' }
  ];

  const filteredVideos = selectedCategory === 'semua' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const openVideoModal = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 text-white overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🎥</span>
              </div>
              <span className="text-red-200 font-medium text-lg">Informasi Kesehatan</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Video Edukasi
              <span className="block text-pink-300">Kesehatan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 mb-8 leading-relaxed max-w-3xl">
              Koleksi video edukatif tentang kesehatan yang mudah dipahami dan dapat dipraktikkan sehari-hari
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">{videos.length}</div>
                <div className="text-red-200 text-sm">Video Tersedia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-red-200 text-sm">Total Views</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold">6</div>
                <div className="text-red-200 text-sm">Kategori</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-5 w-8 h-8 border border-white/20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Kategori Video</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : `${category.color} hover:scale-105`
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-red-400 to-purple-500 overflow-hidden cursor-pointer"
                   onClick={() => openVideoModal(video)}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  {video.views}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {video.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(video.date).toLocaleDateString('id-ID')}</span>
                  <button 
                    onClick={() => openVideoModal(video)}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    Tonton
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="text-3xl font-bold text-red-600 mb-2">134K+</div>
            <div className="text-gray-700 text-sm">Total Penonton</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
            <div className="text-gray-700 text-sm">Rating Video</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">2.1K</div>
            <div className="text-gray-700 text-sm">Subscriber</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">Weekly</div>
            <div className="text-gray-700 text-sm">Video Baru</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Subscribe Channel YouTube Kami
          </h3>
          <p className="text-red-100 mb-6 text-lg max-w-2xl mx-auto">
            Dapatkan notifikasi video kesehatan terbaru langsung di YouTube Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe YouTube
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
              Lihat Semua Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h3>
              <button 
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {/* Video Player Placeholder */}
              <div className="aspect-video bg-black rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm text-gray-300">Durasi: {selectedVideo.duration}</p>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{selectedVideo.title}</h4>
                  <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedVideo.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Statistik Video</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi:</span>
                      <span className="font-medium">{selectedVideo.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Views:</span>
                      <span className="font-medium">{selectedVideo.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tanggal:</span>
                      <span className="font-medium">{new Date(selectedVideo.date).toLocaleDateString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kategori:</span>
                      <span className="font-medium capitalize">{selectedVideo.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
