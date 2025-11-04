'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  VideoCameraIcon, 
  PlayCircleIcon,
  EyeIcon,
  ClockIcon,
  CalendarDaysIcon,
  HandThumbUpIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as HandThumbUpSolidIcon } from '@heroicons/react/24/solid';

// API Base URL untuk gambar
const IMAGE_API_BASE = 'https://picsum.photos/seed';

// Data video dummy untuk demo - diperbanyak untuk testing pagination
const videosData = [
  {
    id: 1,
    title: 'Profil RSUD M Natsir Solok 2024',
    category: 'Profil',
    duration: '5:30',
    thumbnail: `${IMAGE_API_BASE}/video-profile-hospital/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-10',
    views: 2450,
    likes: 184,
    description: 'Video profil resmi RSUD M Natsir Solok yang menampilkan fasilitas, layanan, dan komitmen dalam memberikan pelayanan kesehatan terbaik.',
    tags: ['profil', 'rumah sakit', 'fasilitas']
  },
  {
    id: 2,
    title: 'Edukasi Cuci Tangan yang Benar',
    category: 'Edukasi',
    duration: '3:15',
    thumbnail: `${IMAGE_API_BASE}/video-hand-washing/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-08',
    views: 1820,
    likes: 95,
    description: 'Tutorial langkah-langkah mencuci tangan yang benar sesuai standar WHO untuk mencegah penyebaran penyakit.',
    tags: ['edukasi', 'kesehatan', 'pencegahan']
  },
  {
    id: 3,
    title: 'Operasi Jantung Pertama di RSUD M Natsir',
    category: 'Berita',
    duration: '8:45',
    thumbnail: `${IMAGE_API_BASE}/video-heart-surgery/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-05',
    views: 3120,
    likes: 287,
    description: 'Dokumentasi operasi jantung pertama yang berhasil dilakukan di RSUD M Natsir dengan tim medis berpengalaman.',
    tags: ['operasi', 'jantung', 'medis', 'sejarah']
  },
  {
    id: 4,
    title: 'Senam Sehat untuk Lansia',
    category: 'Edukasi',
    duration: '12:20',
    thumbnail: `${IMAGE_API_BASE}/video-elderly-exercise/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-03',
    views: 1560,
    likes: 128,
    description: 'Panduan senam sehat khusus untuk lansia yang aman dan bermanfaat untuk menjaga kesehatan tubuh.',
    tags: ['senam', 'lansia', 'olahraga', 'kesehatan']
  },
  {
    id: 5,
    title: 'Virtual Tour Ruang ICU Modern',
    category: 'Tour',
    duration: '6:40',
    thumbnail: `${IMAGE_API_BASE}/video-icu-tour/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-01',
    views: 2890,
    likes: 201,
    description: 'Tur virtual ruang ICU dengan peralatan medis terkini dan standar internasional.',
    tags: ['icu', 'fasilitas', 'tour', 'modern']
  },
  {
    id: 6,
    title: 'Cara Deteksi Dini Kanker Payudara',
    category: 'Edukasi',
    duration: '7:25',
    thumbnail: `${IMAGE_API_BASE}/video-breast-cancer/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-28',
    views: 4210,
    likes: 356,
    description: 'Edukasi tentang cara melakukan pemeriksaan sendiri untuk deteksi dini kanker payudara.',
    tags: ['kanker', 'payudara', 'deteksi dini', 'wanita']
  },
  {
    id: 7,
    title: 'Pelantikan Direksi Baru RSUD M Natsir',
    category: 'Acara',
    duration: '15:30',
    thumbnail: `${IMAGE_API_BASE}/video-inauguration/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-25',
    views: 1740,
    likes: 89,
    description: 'Upacara pelantikan direksi baru RSUD M Natsir periode 2024-2029.',
    tags: ['pelantikan', 'direksi', 'acara', 'resmi']
  },
  {
    id: 8,
    title: 'Tips Menjaga Kesehatan Mental',
    category: 'Edukasi',
    duration: '9:15',
    thumbnail: `${IMAGE_API_BASE}/video-mental-health/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-20',
    views: 2680,
    likes: 198,
    description: 'Tips praktis untuk menjaga kesehatan mental di tengah kesibukan sehari-hari.',
    tags: ['mental health', 'tips', 'psikologi', 'well-being']
  },
  {
    id: 9,
    title: 'Penanganan Gawat Darurat COVID-19',
    category: 'Edukasi',
    duration: '10:30',
    thumbnail: `${IMAGE_API_BASE}/video-covid-emergency/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-15',
    views: 3456,
    likes: 278,
    description: 'Prosedur penanganan pasien gawat darurat COVID-19 di rumah sakit.',
    tags: ['covid', 'emergency', 'protokol', 'kesehatan']
  },
  {
    id: 10,
    title: 'Operasi Bedah Caesar Modern',
    category: 'Edukasi',
    duration: '11:20',
    thumbnail: `${IMAGE_API_BASE}/video-cesarean/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-10',
    views: 2890,
    likes: 234,
    description: 'Prosedur operasi caesar dengan teknologi modern dan aman.',
    tags: ['bedah', 'caesar', 'operasi', 'kebidanan']
  },
  {
    id: 11,
    title: 'Workshop Keperawatan Terkini',
    category: 'Acara',
    duration: '25:45',
    thumbnail: `${IMAGE_API_BASE}/video-nursing-workshop/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-05',
    views: 1567,
    likes: 143,
    description: 'Workshop keperawatan modern untuk meningkatkan kualitas layanan.',
    tags: ['keperawatan', 'workshop', 'pelatihan', 'sdm']
  },
  {
    id: 12,
    title: 'Rehabilitasi Pasca Stroke',
    category: 'Edukasi',
    duration: '14:15',
    thumbnail: `${IMAGE_API_BASE}/video-stroke-rehab/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-12-01',
    views: 2134,
    likes: 187,
    description: 'Program rehabilitasi komprehensif untuk pasien pasca stroke.',
    tags: ['stroke', 'rehabilitasi', 'fisioterapi', 'pemulihan']
  },
  {
    id: 13,
    title: 'Kunjungan Gubernur Sumbar',
    category: 'Berita',
    duration: '8:30',
    thumbnail: `${IMAGE_API_BASE}/video-governor-visit/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-11-25',
    views: 4567,
    likes: 389,
    description: 'Kunjungan kerja Gubernur Sumatera Barat ke RSUD M Natsir.',
    tags: ['gubernur', 'kunjungan', 'berita', 'pemerintah']
  },
  {
    id: 14,
    title: 'Makanan Sehat untuk Penderita Diabetes',
    category: 'Edukasi',
    duration: '6:50',
    thumbnail: `${IMAGE_API_BASE}/video-diabetes-food/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-11-20',
    views: 3789,
    likes: 312,
    description: 'Panduan menu makanan sehat untuk penderita diabetes.',
    tags: ['diabetes', 'nutrisi', 'diet', 'kesehatan']
  },
  {
    id: 15,
    title: 'Sistem Informasi Rumah Sakit Terbaru',
    category: 'Profil',
    duration: '7:40',
    thumbnail: `${IMAGE_API_BASE}/video-hospital-system/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-11-15',
    views: 2345,
    likes: 198,
    description: 'Implementasi sistem informasi rumah sakit berbasis digital.',
    tags: ['teknologi', 'sistem', 'digital', 'inovasi']
  },
  {
    id: 16,
    title: 'Peringatan Hari Kesehatan Nasional',
    category: 'Acara',
    duration: '18:20',
    thumbnail: `${IMAGE_API_BASE}/video-health-day/400/225`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2023-11-10',
    views: 2678,
    likes: 223,
    description: 'Rangkaian acara peringatan Hari Kesehatan Nasional.',
    tags: ['hkn', 'peringatan', 'acara', 'nasional']
  }
];

const categories = ['Semua', 'Profil', 'Edukasi', 'Berita', 'Tour', 'Acara'];

export default function GaleriVideoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredVideos = videosData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Semua' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVideos = filteredVideos.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const toggleLike = (videoId: number) => {
    if (likedVideos.includes(videoId)) {
      setLikedVideos(likedVideos.filter(id => id !== videoId));
    } else {
      setLikedVideos([...likedVideos, videoId]);
    }
  };

  const openVideoModal = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <VideoCameraIcon className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Video
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Koleksi video edukasi, profil, dan dokumentasi RSUD M Natsir
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                🎥 {videosData.length} Video
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                👁️ {videosData.reduce((total, video) => total + video.views, 0).toLocaleString()} Views
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                👍 {videosData.reduce((total, video) => total + video.likes, 0)} Likes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari video..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
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
      </div>

      {/* Video Grid Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Video ({filteredVideos.length} video)
          </h2>
          {filteredVideos.length > 0 && (
            <p className="text-sm text-gray-600">
              Halaman {currentPage} dari {totalPages}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {currentVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative group cursor-pointer" onClick={() => openVideoModal(video)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <PlayCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                  {video.category}
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight text-sm sm:text-base">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{formatViews(video.views)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs">{new Date(video.date).toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'short' 
                    })}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(video.id);
                    }}
                    className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {likedVideos.includes(video.id) ? (
                      <HandThumbUpSolidIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    ) : (
                      <HandThumbUpIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span className="text-xs sm:text-sm">{video.likes + (likedVideos.includes(video.id) ? 1 : 0)}</span>
                  </button>
                  
                  <button className="p-1 text-gray-500 hover:text-purple-600 transition-colors">
                    <ShareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <VideoCameraIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada video ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
          </div>
        )}

        {/* Pagination */}
        {filteredVideos.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
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
                          ? 'bg-purple-600 text-white'
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
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="max-w-4xl w-full max-h-full overflow-auto bg-white rounded-lg mx-2 sm:mx-4">
            <div className="relative">
              <button
                onClick={closeVideoModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1 sm:p-2"
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs sm:text-sm">
                    {selectedVideo.category}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    {selectedVideo.duration}
                  </span>
                </div>
                
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4">
                  {selectedVideo.title}
                </h2>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{selectedVideo.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{new Date(selectedVideo.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                      <span className="sm:hidden">{new Date(selectedVideo.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      })}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleLike(selectedVideo.id)}
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                    >
                      {likedVideos.includes(selectedVideo.id) ? (
                        <HandThumbUpSolidIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      ) : (
                        <HandThumbUpIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span>{selectedVideo.likes + (likedVideos.includes(selectedVideo.id) ? 1 : 0)}</span>
                    </button>
                    <button className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <ShareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  {selectedVideo.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedVideo.tags.map((tag: string) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs sm:text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
