'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  NewspaperIcon,
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// Interface untuk data berita dari API
interface Berita {
  _id: string;
  id: number;
  judul_berita: string;
  deskripsi: string;
  time: string;
  date: string;
}

export default function LihatSemuaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 12;

  // Fetch data dari API
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/berita');
        const json = await res.json();

        if (json.status === 'success') {
          setNewsData(json.data);
        } else {
          setError(json.message || 'Gagal mengambil data berita');
        }
      } catch (err) {
        setError('Gagal terhubung ke server');
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  const filteredNews = newsData.filter(news => {
    const matchesSearch =
      //set data pencarian 
      news.judul_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <NewspaperIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Berita & Informasi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Update terkini seputar kegiatan, inovasi, dan pencapaian RSUD M Natsir Solok
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm relative z-20">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📰 {newsData.length} Artikel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-lg sticky top-0 z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Semua Berita ({filteredNews.length} artikel)
          </h2>
          {filteredNews.length > 0 && (
            <p className="text-sm text-gray-600">
              Halaman {currentPage} dari {totalPages}
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Memuat berita...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <NewspaperIcon className="w-16 h-16 mx-auto text-red-400 mb-4" />
            <h3 className="text-lg font-medium text-red-600 mb-2">Terjadi Kesalahan</h3>
            <p className="text-gray-500">{error}</p>
          </div>
        )}

        {/* News Cards */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {currentNews.map((news) => (
                <div key={news._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 leading-tight text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                      {news.judul_berita}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                      {news.deskripsi}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{news.time}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm font-medium">
                        Baca Selengkapnya
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <NewspaperIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Tidak ada berita ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian</p>
              </div>
            )}

            {/* Pagination */}
            {filteredNews.length > 0 && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Sebelumnya
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
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
                              ? 'bg-blue-600 text-white'
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
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}
