//get data api dari berita
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';

    const response = await fetch(
      `https://beritabe.onrender.com/berita?page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}`
    );
    const result = await response.json();

    // Backend sekarang return { data: [...], page, limit, total, totalPages }
    const beritaArray = Array.isArray(result) ? result : result.data;

    return NextResponse.json({
        status: 'success',
        message: 'Berita berhasil diambil!',
        data: beritaArray,
        page: result.page,
        limit: result.limit,
        total: result.total,
        totalPages: result.totalPages,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
        status: 'error',
        message: 'Gagal mengambil berita',
        error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}