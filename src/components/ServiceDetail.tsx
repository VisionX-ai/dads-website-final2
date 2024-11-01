import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Truck, Building2, HardHat, Ruler, Compass, Shield } from 'lucide-react';

const serviceDetails = {
  'haulage-services': {
    title: 'Haulage Services',
    description: 'Our comprehensive haulage services provide reliable transportation solutions for construction materials and equipment across Nigeria. We ensure timely delivery and safe handling of your valuable cargo.',
    features: [
      'Nationwide coverage with strategic routes',
      'Modern fleet of heavy-duty vehicles',
      'Real-time GPS tracking and monitoring',
      'Experienced and certified drivers',
      '24/7 customer support',
      'Specialized equipment handling'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    icon: Truck
  },
  'civil-engineering': {
    title: 'Civil Engineering',
    description: 'Expert civil engineering services for infrastructure development and public works projects. We combine technical expertise with innovative solutions to deliver outstanding results.',
    features: [
      'Infrastructure development and planning',
      'Structural engineering and analysis',
      'Advanced project management systems',
      'Quality control and assurance',
      'Environmental compliance management',
      'Sustainable engineering solutions'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    icon: Building2
  },
  'construction-management': {
    title: 'Construction Management',
    description: 'Comprehensive project oversight from planning to completion. We ensure quality, safety, and efficiency in every construction project we manage.',
    features: [
      'End-to-end project supervision',
      'Resource optimization',
      'Schedule and cost management',
      'Quality control protocols',
      'Risk assessment and mitigation',
      'Stakeholder communication'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
    icon: HardHat
  },
  'project-planning': {
    title: 'Project Planning',
    description: 'Strategic project planning services that ensure successful project execution. We create detailed roadmaps for construction success.',
    features: [
      'Detailed project scheduling',
      'Resource allocation planning',
      'Cost estimation and budgeting',
      'Risk analysis and management',
      'Stakeholder engagement planning',
      'Milestone tracking systems'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    icon: Ruler
  },
  'design-and-build': {
    title: 'Design & Build',
    description: 'Integrated design and construction services that bring your vision to life. We handle everything from concept to completion.',
    features: [
      'Architectural design services',
      'Construction documentation',
      'Value engineering',
      'Sustainable design practices',
      'Building information modeling',
      'Interior design integration'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    icon: Compass
  },
  'safety-management': {
    title: 'Safety Management',
    description: 'Industry-leading safety protocols and risk management services. We prioritize the well-being of workers and project sites.',
    features: [
      'Comprehensive safety planning',
      'Regular safety audits',
      'Employee safety training',
      'Emergency response protocols',
      'Safety equipment management',
      'Compliance documentation'
    ],
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80',
    icon: Shield
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#FF7F11] hover:text-[#ff8f2f]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-[#FF7F11] hover:text-[#ff8f2f]"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Icon className="h-10 w-10 text-[#FF7F11] mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="h-2 w-2 bg-[#FF7F11] rounded-full mt-2"></span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-4">Contact us to discuss your project requirements and how we can help.</p>
              <button 
                onClick={handleContactClick}
                className="bg-[#FF7F11] text-white px-6 py-3 rounded-lg hover:bg-[#ff8f2f] transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;