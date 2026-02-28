//get data api dari berita
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/berita');
    const data = await response.json();
    return NextResponse.json({
        status: 'success',
        message: 'Berita berhasil diambil!',
        data: data
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
        status: 'error',
        message: 'Gagal mengambil berita',
        error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}