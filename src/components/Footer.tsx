import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-[#FF7F11]" />
              <span className="ml-2 text-xl font-bold">SKY EXPRESS NIG LTD</span>
            </div>
            <p className="text-gray-400">
              Building tomorrow's vision with today's innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/services/construction-management')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Construction Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/design-and-build')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Design & Build
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/project-planning')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Project Planning
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/civil-engineering')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Civil Engineering
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('portfolio')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Our Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('services')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('contact')} className="text-gray-400 hover:text-[#FF7F11] transition-colors duration-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Construction Ave</li>
              <li>Lagos, Nigeria</li>
              <li>Phone: +234 123-4567</li>
              <li>Email: info@skyexpressnig.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SKY EXPRESS NIG LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;