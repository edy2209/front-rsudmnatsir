import Navigation from '@/components/Navigation';

export default function Services() {
  const services = [
    {
      title: "Pelayanan Gawat Darurat",
      description: "Layanan 24 jam untuk kondisi medis darurat dengan tim medis siaga",
      features: ["Tim medis 24/7", "Ambulance siaga", "Peralatan lengkap"]
    },
    {
      title: "Rawat Inap",
      description: "Fasilitas rawat inap dengan standar pelayanan tinggi",
      features: ["Kamar VIP", "Kamar reguler", "ICU & NICU"]
    },
    {
      title: "Poliklinik Spesialis", 
      description: "Berbagai layanan poliklinik spesialis",
      features: ["Poli Anak", "Poli Kandungan", "Poli Jantung", "Poli Mata"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Layanan Kami
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
