import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Portfolio />
              <About />
              <Contact />
            </main>
          } />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;