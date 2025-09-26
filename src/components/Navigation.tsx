'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                Our Portfolio.
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></div>
                <div className={`w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></div>
                <div className={`w-6 h-0.5 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
