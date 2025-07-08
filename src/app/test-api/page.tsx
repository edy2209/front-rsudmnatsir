'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, PlayIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { testApi, ApiResponse } from '@/api/api';

export default function TestApiPage() {
  const [getResult, setGetResult] = useState<ApiResponse | null>(null);
  const [postResult, setPostResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    hospital: 'RSUD M. Natsir'
  });

  const handleTestGet = async () => {
    setLoading(true);
    try {
      const result = await testApi.testConnection();
      setGetResult(result);
    } catch (error) {
      setGetResult({
        status: 'error',
        message: 'Gagal menghubungi API',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTestPost = async () => {
    setLoading(true);
    try {
      const result = await testApi.testPost(postData);
      setPostResult(result);
    } catch (error) {
      setPostResult({
        status: 'error',
        message: 'Gagal mengirim data ke API',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  const ResultCard = ({ title, result, type }: { title: string; result: ApiResponse | null; type: 'get' | 'post' }) => (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        {result?.status === 'success' ? (
          <CheckCircleIcon className="w-6 h-6 text-green-500" />
        ) : result?.status === 'error' ? (
          <XCircleIcon className="w-6 h-6 text-red-500" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gray-300" />
        )}
        {title}
      </h3>
      
      {result ? (
        <div className="space-y-3">
          <div className={`px-4 py-2 rounded-lg text-sm font-medium ${
            result.status === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            Status: {result.status.toUpperCase()}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-medium text-gray-700 mb-2">Message:</p>
            <p className="text-gray-600">{result.message}</p>
          </div>

          {result.data && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-700 mb-2">Data:</p>
              <pre className="text-xs text-gray-600 overflow-x-auto">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          )}

          {result.error && (
            <div className="bg-red-50 rounded-lg p-4">
              <p className="font-medium text-red-700 mb-2">Error:</p>
              <p className="text-red-600 text-sm">{result.error}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-8">
          Belum ada hasil test. Klik tombol test untuk memulai.
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Test API RSUD M. Natsir
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Halaman untuk menguji koneksi dan fungsionalitas API. 
            Gunakan halaman ini untuk memastikan API berjalan dengan baik.
          </p>
        </motion.div>

        {/* Test Controls */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* GET Test */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Test GET Request</h2>
            <p className="text-gray-600 mb-6">
              Test koneksi dasar ke API endpoint: <code className="bg-gray-100 px-2 py-1 rounded">/api/testapi</code>
            </p>
            
            <motion.button
              onClick={handleTestGet}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
              {loading ? 'Testing...' : 'Test GET Request'}
            </motion.button>
          </div>

          {/* POST Test */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Test POST Request</h2>
            <p className="text-gray-600 mb-4">
              Test pengiriman data ke API endpoint: <code className="bg-gray-100 px-2 py-1 rounded">/api/testapi</code>
            </p>
            
            <div className="space-y-3 mb-6">
              <input
                type="text"
                value={postData.name}
                onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nama"
              />
              <input
                type="email"
                value={postData.email}
                onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
              />
              <input
                type="text"
                value={postData.hospital}
                onChange={(e) => setPostData({ ...postData, hospital: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rumah Sakit"
              />
            </div>
            
            <motion.button
              onClick={handleTestPost}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
              {loading ? 'Testing...' : 'Test POST Request'}
            </motion.button>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ResultCard title="GET Request Result" result={getResult} type="get" />
          <ResultCard title="POST Request Result" result={postResult} type="post" />
        </motion.div>

        {/* API Info */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Informasi API</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Available Endpoints:</h4>
              <ul className="space-y-1 text-blue-100">
                <li>• GET /api/testapi - Test koneksi API</li>
                <li>• POST /api/testapi - Test pengiriman data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Response Format:</h4>
              <ul className="space-y-1 text-blue-100">
                <li>• status: 'success' | 'error'</li>
                <li>• message: string</li>
                <li>• data: object (optional)</li>
                <li>• error: string (optional)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
