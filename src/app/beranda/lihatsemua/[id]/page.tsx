'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import {
  CalendarDaysIcon,
  ClockIcon,
  ArrowLeftIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

interface Berita {
  _id: string;
  id: number;
  judul_berita: string;
  deskripsi: string;
  time: string;
  date: string;
}

export default function DetailBeritaPage() {
  const params = useParams();
  const router = useRouter();
  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setLoading(true);
        // Cari berita halaman per halaman sampai ketemu
        let found: Berita | null = null;
        let page = 1;
        let maxPages = 1;

        while (page <= maxPages) {
          const res = await fetch(`/api/berita?page=${page}&limit=100`);
          const json = await res.json();

          if (json.status !== 'success' || !json.data) {
            setError(json.message || 'Gagal mengambil data berita');
            return;
          }

          maxPages = json.totalPages || 1;
          found = json.data.find(
            (item: Berita) => String(item.id) === String(params.id)
          ) || null;

          if (found) break;
          page++;
        }

        if (found) {
          setBerita(found);
        } else {
          setError('Berita tidak ditemukan');
        }
      } catch {
        setError('Gagal terhubung ke server');
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, [params.id]);

  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 -mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <NewspaperIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Detail Berita</h1>
            <p className="text-lg text-blue-100">RSUD M Natsir Solok</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        {/* Tombol Kembali */}
        <button
          onClick={() => router.push('/beranda/lihatsemua')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors font-medium"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Kembali ke Daftar Berita
        </button>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Memuat berita...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-16">
            <NewspaperIcon className="w-16 h-16 mx-auto text-red-400 mb-4" />
            <h3 className="text-lg font-medium text-red-600 mb-2">Terjadi Kesalahan</h3>
            <p className="text-gray-500">{error}</p>
          </div>
        )}

        {/* Detail Berita */}
        {!loading && !error && berita && (
          <div className="max-w-3xl mx-auto">
            <article className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
              {/* Judul */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                {berita.judul_berita}
              </h2>

              {/* Tanggal & Waktu */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>{berita.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4" />
                  <span>{berita.time}</span>
                </div>
              </div>

              {/* Isi / Deskripsi */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {berita.deskripsi}
                </p>
              </div>
            </article>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
