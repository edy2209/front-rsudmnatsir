import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Tentang RSUD M. Natsir
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              RSUD M. Natsir adalah rumah sakit umum daerah yang berkomitmen untuk memberikan 
              pelayanan kesehatan terbaik bagi masyarakat dengan mengutamakan kualitas, 
              keselamatan pasien, dan kepuasan pelayanan.
            </p>
            <p className="text-lg text-gray-600">
              Dengan tenaga medis profesional dan fasilitas modern, kami siap melayani 
              berbagai kebutuhan kesehatan Anda dan keluarga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
