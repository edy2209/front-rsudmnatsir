import { NextRequest, NextResponse } from 'next/server';

// GET endpoint untuk test API
export async function GET() {
  try {
    // Simulasi delay untuk testing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      status: 'success',
      message: 'API berhasil terhubung!',
      data: {
        timestamp: new Date().toISOString(),
        server: 'RSUD M. Natsir API Server',
        version: '1.0.0',
        endpoint: '/api/testapi'
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Gagal terhubung ke API',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST endpoint untuk test dengan data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      status: 'success',
      message: 'API POST berhasil terhubung!',
      data: {
        timestamp: new Date().toISOString(),
        receivedData: body,
        server: 'RSUD M. Natsir API Server',
        endpoint: '/api/testapi'
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Gagal memproses data POST',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
