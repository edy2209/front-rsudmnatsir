# API RSUD M. Natsir

Folder ini berisi API endpoints untuk sistem RSUD M. Natsir.

## Struktur Folder

```
src/
├── api/
│   ├── api.tsx           # API client utilities dan helper functions
│   └── testapi/
│       └── route.ts      # Test API endpoint
└── app/
    ├── api/
    │   └── testapi/
    │       └── route.ts  # Next.js API route handler
    └── test-api/
        └── page.tsx      # Halaman test API
```

## Endpoints yang Tersedia

### 1. Test API
- **URL**: `/api/testapi`
- **Methods**: GET, POST
- **Purpose**: Testing koneksi dan fungsionalitas API

#### GET Request
```javascript
fetch('/api/testapi')
```

**Response**:
```json
{
  "status": "success",
  "message": "API berhasil terhubung!",
  "data": {
    "timestamp": "2024-01-01T00:00:00.000Z",
    "server": "RSUD M. Natsir API Server",
    "version": "1.0.0",
    "endpoint": "/api/testapi"
  }
}
```

#### POST Request
```javascript
fetch('/api/testapi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
```

**Response**:
```json
{
  "status": "success",
  "message": "API POST berhasil terhubung!",
  "data": {
    "timestamp": "2024-01-01T00:00:00.000Z",
    "receivedData": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "server": "RSUD M. Natsir API Server",
    "endpoint": "/api/testapi"
  }
}
```

## Cara Penggunaan

### 1. Testing via Browser
Kunjungi: `http://localhost:3000/test-api`

### 2. Testing via API Client
```javascript
import { testApi } from '@/api/api';

// Test GET
const result = await testApi.testConnection();
console.log(result);

// Test POST
const postResult = await testApi.testPost({
  name: 'John Doe',
  email: 'john@example.com'
});
console.log(postResult);
```

### 3. Testing via curl
```bash
# GET Request
curl http://localhost:3000/api/testapi

# POST Request
curl -X POST http://localhost:3000/api/testapi \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

## Response Format

Semua API endpoint mengikuti format response yang konsisten:

```typescript
interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  error?: string;
}
```

## Menambahkan API Baru

1. Buat folder baru di `src/app/api/[endpoint-name]/`
2. Buat file `route.ts` dengan export function sesuai HTTP method
3. Tambahkan function helper di `src/api/api.tsx` jika diperlukan
4. Update dokumentasi ini

Contoh struktur file `route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Logic untuk GET request
}

export async function POST(request: NextRequest) {
  // Logic untuk POST request
}

export async function PUT(request: NextRequest) {
  // Logic untuk PUT request
}

export async function DELETE(request: NextRequest) {
  // Logic untuk DELETE request
}
```

## Error Handling

API menggunakan try-catch untuk error handling:
- Status 200: Success
- Status 500: Server Error
- Status 400: Bad Request (jika diperlukan)
- Status 404: Not Found (jika diperlukan)

## Security Notes

- Untuk production, tambahkan authentication/authorization
- Implementasikan rate limiting
- Validasi input data
- Gunakan HTTPS
- Implement CORS policy sesuai kebutuhan
