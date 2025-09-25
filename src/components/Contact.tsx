import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to order your perfect cake? Have questions about our services? 
            We&apos;d love to hear from you!
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+12146776273" className="text-primary-600 hover:underline">
                      +1 214.677.6273
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Plano, TX, 75025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Availability</h4>
                    <p className="text-gray-600">By appointment only</p>
                    <p className="text-sm text-gray-500">Please call to schedule</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/shirascakes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-semibold">Instagram</span>
                </a>
                
                <a
                  href="https://www.facebook.com/cakesbyshira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="font-semibold">Facebook</span>
                </a>
                
                <a
                  href="https://wa.me/12146776273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-primary-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-primary-100 mb-6">
                For urgent orders or quick questions, give us a call!
              </p>
              <a
                href="tel:+12146776273"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +1 214.677.6273
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Find Us</h3>
                <p className="text-gray-600">Located in beautiful Plano, Texas</p>
              </div>
              
              {/* Embedded Map */}
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Plano, TX</h4>
                  <p className="text-gray-600 mb-4">75025</p>
                  <a
                    href="https://maps.google.com/?q=Plano,TX,75025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Service Area</h3>
              <p className="text-gray-600 mb-4">
                We proudly serve the greater Dallas-Fort Worth area, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Plano</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Frisco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>McKinney</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Allen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Richardson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Dallas</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Delivery available for orders over $75
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
