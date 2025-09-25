'use client';

import Image from 'next/image';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary-600 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary-200" />
            <span className="font-semibold">Call to make a cake order</span>
          </div>
          <a
            href="tel:+12146776273"
            className="flex items-center space-x-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+1 214.677.6273</span>
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logo.jpg"
                  alt="Shira&apos;s Cakes Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-2xl font-bold">Shira&apos;s Cakes</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Creating beautiful, custom cakes and baked goods for your special moments 
                since 2019. Made with love in Plano, Texas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/shirascakes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/cakesbyshira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/12146776273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('home');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('portfolio');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-400" />
                  <a href="tel:+12146776273" className="text-gray-300 hover:text-white transition-colors">
                    +1 214.677.6273
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="text-gray-300">Plano, TX, 75025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Shira&apos;s Cakes. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span className="text-gray-400 text-sm">in Texas</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
