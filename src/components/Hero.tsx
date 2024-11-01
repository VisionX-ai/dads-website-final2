import React from 'react';
import { Truck, Building2, HardHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Building Nigeria's Future
          <span className="block text-[#FF7F11]">One Project at a Time</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Leading the way in construction, civil engineering, and haulage services across Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Service highlights */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 text-white">
              <Truck className="h-8 w-8 text-[#FF7F11]" />
              <div>
                <h3 className="font-semibold">Haulage Services</h3>
                <p className="text-sm text-gray-300">Nationwide logistics solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Building2 className="h-8 w-8 text-[#FF7F11]" />
              <div>
                <h3 className="font-semibold">Civil Engineering</h3>
                <p className="text-sm text-gray-300">Infrastructure development</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <HardHat className="h-8 w-8 text-[#FF7F11]" />
              <div>
                <h3 className="font-semibold">Construction</h3>
                <p className="text-sm text-gray-300">Commercial & residential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;