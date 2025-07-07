import Navigation from '@/components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Hubungi Kami
          </h1>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">📍</span>
                  <p className="text-gray-600">Jl. Rumah Sakit No. 1, Kota</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">📞</span>
                  <p className="text-gray-600">(021) 1234-5678</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">✉️</span>
                  <p className="text-gray-600">info@rsudmnatsir.go.id</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">🕒</span>
                  <p className="text-gray-600">24 Jam (IGD)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nama Lengkap"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <textarea 
                  placeholder="Pesan Anda"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
