import React from 'react';
import { Truck, Building2, HardHat, Ruler, Compass, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Truck,
    title: 'Haulage Services',
    description: 'Nationwide transportation and logistics solutions for construction materials and equipment. Our modern fleet ensures timely and secure delivery.',
    slug: 'haulage-services'
  },
  {
    icon: Building2,
    title: 'Civil Engineering',
    description: 'Expert infrastructure development including roads, bridges, and utilities. We deliver high-quality public and private sector projects.',
    slug: 'civil-engineering'
  },
  {
    icon: HardHat,
    title: 'Construction Management',
    description: 'Comprehensive project oversight from planning to completion, ensuring quality, safety, and efficiency.',
    slug: 'construction-management'
  },
  {
    icon: Ruler,
    title: 'Project Planning',
    description: 'Detailed planning and scheduling services to optimize project execution and resource allocation.',
    slug: 'project-planning'
  },
  {
    icon: Compass,
    title: 'Design & Build',
    description: 'Integrated design and construction services for seamless project delivery and optimal results.',
    slug: 'design-and-build'
  },
  {
    icon: Shield,
    title: 'Safety Management',
    description: 'Industry-leading safety protocols and risk management for accident-free project execution.',
    slug: 'safety-management'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F11]/0 to-[#FF7F11]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <service.icon className="h-12 w-12 text-[#FF7F11] mb-6 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-[#FF7F11] font-medium hover:text-[#ff8f2f] transition-colors duration-200"
              >
                Learn More 
                <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF7F11] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;