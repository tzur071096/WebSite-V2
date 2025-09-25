'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get all cake images (excluding logo and video)
  const cakeImages = [
    '/images/cakes/1.jpg',
    '/images/cakes/2.jpg',
    '/images/cakes/3.jpg',
    '/images/cakes/4.jpg',
    '/images/cakes/5.jpg',
    '/images/cakes/6.jpg',
    '/images/cakes/7.jpg',
    '/images/cakes/8.jpg',
    '/images/cakes/9.jpg',
    '/images/cakes/10.jpg',
    '/images/cakes/12.jpg',
    '/images/cakes/13.jpg',
    '/images/cakes/14.jpg',
    '/images/cakes/15.jpg',
    '/images/cakes/16.jpg',
    '/images/cakes/18.jpg',
  ];

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % cakeImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(cakeImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? cakeImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(cakeImages[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent creations. Each cake is uniquely designed 
            and crafted with love for your special moments.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {cakeImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(imageSrc, index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={imageSrc}
                  alt={`Custom cake design ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Love What You See?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Ready to create your own custom cake? Let&apos;s discuss your vision and 
              bring your sweetest dreams to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Order Your Cake
              </button>
              <a
                href="tel:+12146776273"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Call: +1 214.677.6273
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative">
              <Image
                src={selectedImage}
                alt="Cake gallery image"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="text-center mt-4 text-white">
              <p className="text-lg">
                {currentIndex + 1} of {cakeImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
