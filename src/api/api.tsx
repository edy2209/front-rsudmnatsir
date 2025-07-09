// API utility functions untuk RSUD M. Natsir

export interface ApiResponse<T = unknown> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  error?: string;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  // GET request
  async get<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return {
        status: 'error',
        message: 'Gagal mengambil data dari API',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // POST request
  async post<T = unknown>(endpoint: string, data: Record<string, unknown>): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return {
        status: 'error',
        message: 'Gagal mengirim data ke API',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // PUT request
  async put<T = unknown>(endpoint: string, data: Record<string, unknown>): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return {
        status: 'error',
        message: 'Gagal mengupdate data di API',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // DELETE request
  async delete<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return {
        status: 'error',
        message: 'Gagal menghapus data dari API',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Instance API client yang siap digunakan
export const apiClient = new ApiClient();

// Fungsi khusus untuk test API
export const testApi = {
  // Test koneksi API
  async testConnection(): Promise<ApiResponse> {
    return await apiClient.get('/api/testapi');
  },

  // Test POST dengan data
  async testPost(data: Record<string, unknown>): Promise<ApiResponse> {
    return await apiClient.post('/api/testapi', data);
  }
};

// Contoh penggunaan:
// import { testApi } from '@/api/api';
// 
// // Test GET
// const result = await testApi.testConnection();
// console.log(result);
//
// // Test POST
// const postResult = await testApi.testPost({ name: 'John Doe', email: 'john@example.com' });
// console.log(postResult);
