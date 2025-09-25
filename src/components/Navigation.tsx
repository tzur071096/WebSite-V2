'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

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
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 214.677.6273</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Plano, TX, 75025</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/shirascakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/cakesbyshira"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/12146776273"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpg"
                alt="Shira&apos;s Cakes Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                Shira&apos;s Cakes
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
