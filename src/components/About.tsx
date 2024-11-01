import React from 'react';
import { Award, Users, Timer, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Projects Completed' },
  { icon: Timer, value: '98%', label: 'On-Time Delivery' },
  { icon: Target, value: '100%', label: 'Client Satisfaction' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building excellence through innovation and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Team"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F11]/20 to-transparent rounded-lg"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              With over 25 years of experience in the construction industry, we've built our reputation on a foundation of trust, innovation, and excellence. Our team of experts brings together the perfect blend of traditional craftsmanship and cutting-edge technology.
            </p>
            <p className="text-gray-600">
              We believe in sustainable building practices and creating spaces that not only meet but exceed our clients' expectations. Our commitment to quality and attention to detail has made us a leader in the construction industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <stat.icon className="h-8 w-8 text-[#FF7F11] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;